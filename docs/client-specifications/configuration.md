<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>

# Momento Client SDKs Specification: Client Configuration

This document provides information on how Momento client implementations must expose configuration options to users.

All code in this example repo is TypeScript pseudocode.  Implementations should use the appropriate idioms for the
programming language at hand.

# Tenets

The overarching goals of the specification are:

* Configuration should be as simple as possible for users.  We do testing and tuning work up front to make sure
we have established high-confidence default settings that cover the 90% use case, so that users don't have to spend
  time figuring it out themselves.
* Because there are different requirements for different environments (e.g. laptop vs. in-region), we provide a small handful of
  pre-built configurations that users can choose from, out-of-the box.
* Configurations must be specified as interfaces, so that alternate implementations can be added over time.
* Users should always have a last-resort option of manually tuning the settings themselves, in case there are special
  cases that our defaults are not quite right for.
* We should prefer language specific types that represent time offsets (e.g. C# `TimeSpan`) when possible, rather than
  using integer variables like `timeoutSeconds`;
* If the language provides a standard / idiomatic logging facade, we should strive to adhere to it as much as humanly
  possible.  In some languages (Java, Kotlin) this will be a global/singleton setup, so we won't need to expose it in
  our configuration API.  In other languages (C#, PHP), we will need to allow users to inject their logging machinery
  into the constructors for our pre-built configs.

# Choosing a configuration

The `SimpleCacheClient` constructor should accept a required argument whose type is our `Configuration` interface.  e.g.:

```typescript
import * as config from '@gomomento/sdk/config';

const client = SimpleCacheClient({config: config.Laptop.latest()});
```

# Pre-built Configuration Objects

## Requirements for each pre-built configuration object

Each SDK must provide a namespace (via the idiomatic construct in the relevant programming language) that contains
an enumerated list of pre-built configuration objects.

All configuration objects must provide a `latest()` function that returns the latest "blessed" defaults from Momento.
Documentation must clearly indicate that these values may change over time if Momento finds in the future that some
different default values will provide a better or more performant user experience.

All configuration objects must also provide a `default()` function that returns the original "blessed" defaults from
Momento.  Documentation must clearly state that these values will not change over time; users can rely on them to
be stable across new minor version releases of the SDKs.

## Required pre-built configuration objects

Each SDK must provide at least the following out-of-the-box configuration objects:

```typescript
import * as config from '@gomomento/sdk/config';

/**
 * Laptop config provides defaults suitable for a medium-to-high-latency dev environment.  Permissive timeouts, retries, potentially
 * a higher number of connections, etc.
 */
const devConfig = config.Laptop.latest();

/**
 * InRegion provides defaults suitable for an environment where your client is running in the same region as the Momento
 * service.  It has more agressive timeouts and retry behavior than the Laptop config.
 * 
 * The InRegion.Default config prioritizes throughput and client resource utilization.
 */
const prodConfig = config.InRegion.Default.latest();

/**
 * The InRegion.LowLatency config prioritizes keeping p99.9 latencies as low as possible, potentially sacrificing
 * some throughput to achieve this.  Use this configuration if the most important factor is to ensure that cache
 * unavailability doesn't force unacceptably high latencies for your own application.
 */
const prodLowLatencyConfig = config.InRegion.LowLatency.latest();
```

## Configuration interface

The configuration interface provides nested objects for retry strategy, middleware, and transport.  It should also
provide copy constructors for overriding any of those, and a `WithClientTimeout` function to simplify the modification
of that setting.

```typescript
interface Configuration {
  loggerFactory: LoggerFactory; // the existence of this field will vary by language; some languages will provide a singleton/global facade so we won't need this.
  retryStrategy: RetryStrategy;
  middlewares: Array<Middleware>;
  transportStrategy: TransportStrategy;
  
  withRetryStrategy(retryStrategy: RetryStrategy): Configuration;
  withMiddlewares(middlewares: Array<Middleware>): Configuration;
  withAdditionalMiddlewares(additionalMiddlewares: Array<Middleware>): Configuration;
  withTransportStrategy(transportStrategy: TransportStrategy): Configuration;
  withClientTimeout(clientTimeout: TimeSpan): Configuration;
}
```

### RetryStrategy

The `RetryStrategy` provides a function that is called when a request fails.  This function is responsible for determining
whether the request should be retried, and if so, how long the client should delay before retrying:

```typescript
interface RetryStrategy {
  /**
   * Returns the number of milliseconds after which the request should be retried, or `undefined` if the request should
   * not be retried.  `0` means retry immediately.
   */
  determineWhenToRetryRequest<TRequest>(grpcStatus: Status, grpcRequest: TRequest, attemptNumber: number): Promise<number | undefined>;
}
```

The simplest default implementation of this strategy can expose a `maxAttempts` integer, and always return `0` for
immediate retries until the maximum number of attempts is reached.  A slightly more sophisticated initial implementation
would have basic support for exponential backoff and jitter.

### Middleware

The `Middleware` interface allows the Configuration to provide a higher-order function that wraps all requests.  This
allows future support for things like client-side metrics or other diagnostics helpers.

```typescript
interface Middleware {
  wrapRequest<TRequest, TResponse>(
    request: TRequest,
    callOptions: CallOptions,
    continuation: (request: TRequest, callOptions: CallOptions, middlewareState: MiddlewareResponseState) => TResponse
  ): Promise<MiddlewareResponseState>;
}
```

The details of the above will vary slightly based on the gRPC semantics in the respective language.  e.g. MiddlewareResponseState
may look something like this:

```typescript
interface MiddlewareResponseState<TResponse> {
  response: Promise<TResponse>;
  headers: Promise<Metadata>;
  status: Promise<Status>;
  trailers: Promise<Metadata>;
}
```


### TransportStrategy

The `TransportStrategy` is responsible for configuring network tunables.  We intend to abstract gRPC away from
users as much as possible, but we will need to provide different gRPC configurations for dev vs. prod environments.
And ultimately we will need to support advanced customers who need to mess with these knobs.

```typescript
interface TransportStrategy {
  maxConcurrentRequests: number;
  grpcConfig: GrpcConfiguration;
}
```

The gRPC config will vary drastically from one language to the next.  In some languages they will provide
a pre-defined object that we will just use (C#).  In others it will be a more raw mechanism that allows
us to configure arbitrary key/value pairs for configuring the underlying gRPC channels; in these cases
we will make a thin interface to ensure the most important values are visible.

```typescript
interface GrpcConfiguration {
  numChannels(): number;

  // These interface functions expose individual settings for gRPC channels.  They are just here to ensure that
  // strategy implementations provide values for settings that we know to be important.  These may vary by language
  // since the gRPC implementations in each language have subtly different behaviors.
  maxSessionMemory(): number;
  useLocalSubChannelPool(): boolean;

  // This is a map that encapsulates the settings above, and may also include other channel-specific settings.
  // This allows strategy implementations to provide gRPC config key/value pairs for any available setting, even
  // if it's not one we've explicitly tried / recommended.  The strategy implementation should implement this by
  // calling the functions above, along with allowing a mechanism for specifying additional key/value pairs.
  grpcChannelConfig(): Record<string, string>;
}
```

# Advanced Configuration Examples

In this section we expand a bit on how a customer might define their own advanced configuration if they want to
opt out of our pre-builts.

Here is a sketch of what the implementation of one of the pre-built configurations might look like inside of the
SDK (users can see the source code for this if they like):

```typescript
namespace InRegion {
  export class LowLatency {
    static latest(): Configuration {
      return {
        retryStrategy: new ExponentialBackoffStrategy({
          maxAttempts: 3,
          backoffMilliseconds: 0.5,
          jitterMilliseconds: 0.5,
          exponentialBackoffFactor: 2,
        }),
        middlewares: [], // TODO: this could eventually include some basic client-side metrics OOTB
        transportStrategy: {
          maxConcurrentRequests: 2,
          grpcConfig: new BasicGrpcConfiguration({
            numChannels: 5
          })
        }
      }
    }
  }
}
```

If a customer wishes to override the defaults, they can do something like this:

```typescript
const myConfig = configs.InRegion.LowLatency.latest()
  .withTransportStrategy({
    maxConcurrentRequests: 2,
    grpcConfig: new BasicGrpcConfiguration({
      numChannels: 5,
      additionalGrpcChannelSettings: {
              'foo': 'bar'
      }
    })
  })
```

# Guidelines for adding new strategies to the Configuration interface

In the event that we discover new strategies that we need to add to the interface, we must ensure that users that
have implemented custom configurations will not face compile or runtime errors after taking a minor version upgrade
to the SDK.  Therefore, new strategies must provide a default implementation (and thus may not be a required
argument to the Configuration constructor), or we must do a major version bump on the SDK.
