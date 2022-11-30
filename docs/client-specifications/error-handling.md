<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>

# Momento Client SDKs Specification: Error Handling

This document provides information on how Momento client implementations must expose errors and unsuccessful API
calls to users.

All code in this example repo is TypeScript pseudocode.  Implementations should use the appropriate idioms for the
programming language at hand.

**Note: as of Nov 11, 2022, the [.NET SDK](https://github.com/momentohq/client-sdk-dotnet) is the one that has had
the most work done to bring it into compliance with our specs, so it should be treated as the reference implementation.**

# Tenets

The overarching goals of the specification are:

* API response statuses are exposed as enumerated values on the return values, as opposed to exceptions.  This is
  the natural way to expose the HIT vs. MISS state for a `Get` request, so consistently adhering to this paradigm means
  that users don't have to use two separate types of control flow (`if`/`switch` PLUS `try`/`catch`) to interact with
  our APIs.  We consistently use `if`/`switch` paradigms for control flow.
* The enumerated values for the status of any given API response are very easily discoverable via code completion in the
  IDE.
* This approach must not require a user to write more lines of code than they would if we were using a `try`/`catch`
  paradigm.
* Our response objects are always safely printable.  "Safely" means they don't show the contents of the item but they do 
  show the details of the response. A HIT or MISS will be brief while an error may include a traceback.
* All error types must be easily distinguishable from one another in code, without resorting to runtime type checking or
  pattern matching against message strings.
* SDKs must make a best effort to use heuristics to distinguish between client and server side errors, and make the
  distinction clear to the user.  In cases where we are unable to concretely distinguish between client and server errors,
  the error type and message must not imply one or the other.
* All error types must contain a help string that suggests a corrective action.  If a corrective action is not known then
  the message should provide guidance for soliciting help from Momento. 
* SDKs should strive to prevent users from the need to understand or interact with gRPC status codes and terminology.
  At the same time, we need to ensure that the gRPC status information is retained as (non-descript, semi-hidden/private)
  fields on the final error object, so that Momento engineers can more easily determine root cause when assisting customers.

# Error Types

SDKs must provide a `MomentoError` type, which should extend from the base error type for the language.  (Though we will
not initially be throwing these error instances--only returning them--this allows us to add a "throwOnError" flag in the
future if users express a preference for that behavior.  It also allows users to throw the objects themselves if they
so choose, ensures we retain stack trace information, etc.)

This type must expose at least the following properties:

```typescript
class MomentoError extends Error {
  errorCode: MomentoErrorCode;
  message: string;
  transportDetails: MomentoErrorTransportDetails;
}
```

**The appropriate `toString()` method in the language should be overridden so that if a user prints the exception, they
are assured to see something meaningful.**

Implementations may provide subtypes that map to individual error codes if idiomatic to the language.

The `MomentoErrorCode` is an enum that be used to easily and concretely check error types in code.  Its values should
include:

```typescript
enum MomentoErrorCode {
  INVALID_ARGUMENT_ERROR = 'INVALID_ARGUMENT_ERROR',       // message: `Invalid argument passed to Momento client: ${detail}`
  UNKNOWN_SERVICE_ERROR = 'UNKNOWN_SERVICE_ERROR',         // message: `The service returned an unknown response; please contact Momento: ${detail}`
  ALREADY_EXISTS_ERROR = 'ALREADY_EXISTS_ERROR',           // message: `A cache with the specified name already exists.  To resolve this error, either delete the existing cache and make a new one, or use a different name.  Cache name: '${cacheName}'`
  NOT_FOUND_ERROR = 'NOT_FOUND_ERROR',                     // message: `A cache with the specified name does not exist.  To resolve this error, make sure you have created the cache before attempting to use it.  Cache name: '${cacheName}'`
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',         // message: `An unexpected error occurred while trying to fulfill the request; please contact Momento: ${detail}`
  PERMISSION_ERROR = 'PERMISSION_ERROR',                   // message: `Insufficient permissions to perform an operation on a cache: ${detail}`
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',           // message: `Invalid authentication credentials to connect to cache service: ${detail}`
  CANCELLED_ERROR = 'CANCELLED_ERROR',                     // message: `The request was cancelled by the server; please contact Momento: ${detail}`
  LIMIT_EXCEEDED_ERROR = 'LIMIT_EXCEEDED_ERROR',           // message: `Request rate exceeded the limits for this account.  To resolve this error, reduce your request rate, or contact Momento to request a limit increase.`
  BAD_REQUEST_ERROR = 'BAD_REQUEST_ERROR',                 // message: `The request was invalid; please contact Momento: ${detail}`
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',                         // message: `The client's configured timeout was exceeded; you may need to use a Configuration with more lenient timeouts.  Timeout value: ${timeout}`
  SERVER_UNAVAILABLE = 'SERVER_UNAVAILABLE',               // message: `The server was unable to handle the request; consider retrying.  If the error persists, please contact Momento.`
  CLIENT_RESOURCE_EXHAUSTED = 'CLIENT_RESOURCE_EXHAUSTED', // message: `A client resource (most likely memory) was exhausted.  If you are executing a high volume of concurrent requests or using very large object sizes, your Configuration may need to be updated to allocate more memory.  Please contact Momento for assistance.`
}
```

The `MomentoErrorTransportDetails` interface should capture the relevant gRPC information, for Momento debugging purposes:

```typescript
interface MomentoErrorTransportDetails {
  grpc: MomentoGrpcErrorDetails
}

interface MomentoGrpcErrorDetails {
  code: grpc.Status;
  details: string;
  metadata: grpc.Metadata;
}
```

# Exposing Errors In Return Values

`SimpleCacheClient` functions should return custom data types that are defined in the SDKs - they should not directly
return generated gRPC response objects.

Some languages (C#, Kotlin, Rust) support sealed algebraic data types and pattern matching.  When available, these should be preferred.

## Languages that support pattern matching

Examples in this section are based on C#.  Kotlin, Rust, and possibly other languages will have better support for
pattern matching.

### `CreateCache` and similar operations

The `CreateCache` return value should be of type `CreateCacheResponse`, and should have three sub-types: `Success`,
`AlreadyExists`, and `Error`.  Pattern matching is used to access the sub-types and their corresponding properties.

```csharp
var createCacheResponse = await client.CreateCacheAsync("myCache");
if (createCacheResponse is CreateCacheResponse.Success createCacheSuccess)
{
  Console.WriteLine("Cache created");
}
else if (createCacheResponse is CreateCacheResponse.AlreadyExists createCacheAlreadyExists)
{
  Console.WriteLine("Already exists");
}
else if (createCacheResponse is CreateCacheResponse.Error createCacheError) {
  Console.WriteLine($"Error {createCacheError.ErrorCode} creating cache: {createCacheError}");  
} else {
  Console.WriteLine($"Something unexpected happened while attempting to create cache: ${createCacheResponse}");
}
```

### `Get` and similar operations

The `Get` return value should be of type `CacheGetResponse`, and should have three sub-types: `Hit`,
`Miss`, and `Error`.  Pattern matching is used to access the sub-types and their corresponding properties.

```csharp
var getResponse = await client.GetAsync("myCache", "myKey");
if (getResponse is CacheGetResponse.Hit hitResponse)
{
  Console.WriteLine("Cache hit; value: ${getResponse.ValueString}");
}
else if (getResponse is CacheGetResponse.Miss missResponse)
{
  Console.WriteLine("Cache miss!");
}
else if (getResponse is CacheGetResponse.Error errorResponse)) {
  Console.WriteLine($"Error {errorResponse.ErrorCode}: {errorResponse}");
} else {
  Console.WriteLine($"`Something unexpected occurred while attempting to get key 'myKey' from cache 'myCache': {getResponse}");
}
```

### `Set` and similar operations

The `Set` return value should be of type `CacheSetResponse`, and should have two sub-types: `Success`,
and `Error`.  Pattern matching is used to access the sub-types and their corresponding properties.

```csharp
var setResponse = await client.SetAsync("myCache", "myKey", "myValue");
if (setResponse is CacheSetResponse.Hit successResponse)
{
  Console.WriteLine("Cache set successful");
}
else if (setResponse is CacheSetResponse.Error errorResponse)) {
  Console.WriteLine($"Error {errorResponse.ErrorCode}: {errorResponse}");
} else {
  Console.WriteLine($"`Something unexpected occurred while attempting to set key 'myKey' in cache 'myCache': {setResponse}");
}
```

## Languages that do not support pattern matching

In languages that don't support pattern matching (PHP, TypeScript, etc.) we will use a status enum or `as` methods
to cast to the appropriate response type.

### `CreateCache` and similar operations

The `CreateCache` return value should have a `status` field, whose value is an enumeration including `SUCCESS` and `ERROR`.
If the status is `ERROR`, then a `.error` field of type `Error` should be available:

```typescript
const result = client.createCache("myCache");
if (result.status === CreateCacheStatus.SUCCESS) {
  console.log(`Cache created`);
} else if (result.status === CreateCacheStatus.ERROR) {
  const error = result.error;
  console.log(`An error occurred while attempting to create cache 'myCache': ${error.message}`);
} else {
  console.log(`Something unexpected happened while attempting to create cache 'myCache': ${result}`);
}
```

### `Get` and similar operations

The `Get` return value should have a `status` field, whose value is an enumeration including `HIT`, `MISS` and `ERROR`.
If the status is `ERROR`, then a `.error` field of type `Error` MUST be available:

```typescript
const result = client.get('myCache', 'myKey');
if (result.status === CacheGetStatus.HIT) {
  console.log(`Cache hit!  value: ${result.string()}`);
} else if (result.status === CacheGetStatus.MISS) {
  console.log(`Cache miss!  Time to populate the cache!`);
} else if (result.status === CacheGetStatus.ERROR) {
  const error = result.error;
  console.log(`An error occurred while attempting to get key 'myKey' from cache 'myCache': ${error.message}`);
} else {
  console.log(`Something unexpected occurred while attempting to get key 'myKey' from cache 'myCache': ${result}`);
}
```

### `Set` and similar operations

The `Set` return value should have a `status` field, whose value is an enumeration including `SUCCESS` and `ERROR`.
If the status is `ERROR`, then a `.error` field of type `Error` should be available:

```typescript
const result = client.set('myCache', 'myKey', 'myValue');
if (result.status === CacheSetStatus.SUCCESS) {
  console.log(`Key set successfully`);
} else if (result.status === CreateCacheStatus.ERROR) {
  const error = result.error;
  console.log(`An error occurred while attempting to set key 'myKey' from cache 'myCache': ${error.message}`);
}
```


