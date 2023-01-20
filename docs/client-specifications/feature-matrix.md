<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>

# Momento Client SDKs: Feature Matrix

This page should serve as a checklist for developers who are preparing the client library
for a given language for a 1.0 release.

This page is not intended to provide in-depth detail about each of these feature sets.  For
more information on the scope of the various features see the specifications documents:

* [Configuration Specification](./configuration.md) - covers Configuration interface, pre-built Configuration objects, Retry strategies, Logging, Middleware, etc.
* [Error Handling Specification](./error-handling.md) - covers what API response objects should look like, how errors are surfaced to users, etc. 

## Features / Requirements

* `Release`: Repo has been set up according to our [SDK release process](https://github.com/momentohq/standards-and-practices/blob/main/docs/momento-sdk-release-process.md) and binary artifacts are published to the appropriate
             package repository for the language.
* `Get/Set APIs`: Support for basic cache CRUD operations and get/set APIs, with Strings or byte arrays.
* `Examples`: Repo includes example code that is tested in CI
* `Integration Tests`: Repo includes tests that cover all supported APIs, executed against a live Momento server (or momento-local when it becomes available)
* `Error Handling`: SDK has been updated to be consistent with [Momento error handling specifications](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md).
* `Config`: Provides Configuration interface that can be used to adjust relevant settings as per [Momento configuration specification](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/configuration.md).
* `Retries`: Basic retry support for failed requests, and the ability for a user to configure a custom retry strategy.
* `Middleware`: Supports configurable middleware, that can be used for things like adding per-request logging, client-side metrics, etc.
* `LoadGen`: Includes some very minimal scripts that can be used to generate load through the SDK; these are intended for
             use in tuning for pre-built configurations, and also to serve as a starting point for users who might want to
            modify them to simulate their own load.
* `Pre-Built Configs`: Pre-built configurations for Laptop and In-Region, which have been tuned to ensure good performance in
               each environment.
* `Logging`: Supports logging configuration; logging at different verbosity levels and to different destinations, ideally
             via the idiomatic logging framework for the language (if one exists).
* `Debug Logging`: includes log statements for logging the execution and success or failure of every API call, for debugging
                   purposes.  Should only be visible at TRACE log level.
* `Lambda`: SDK has been tested for use in AWS Lambda environment.  This includes the following:
  * The SDK should provide a pre-built configuration that takes into account that Lambda environments may require a longer
    timeout to establish their initial connection due to cold start considerations.
  * Also requires testing to ensure that if the client is stored in a global variable, and is re-used after more than 350s
    of idle time (the idle connection timeout for AWS NLB), the client will be able to gracefully re-establish the gRPC connection.
* `Collections`: supports APIs for Lists, Sets, and Dictionaries

## Current Status

| Feature           | .NET               | PHP                | Node.js            | Python             | Java               | Ruby               | Go                 | Rust               |
|-------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| Release           | :white_check_mark: | :x:                | :white_check_mark: | :white_check_mark: | :x:                | :white_check_mark: | :x:                | :x:                |
| Get/Set           | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Examples          | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Integration Tests | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Error Handling    | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x:                | :x:                | :white_check_mark: | :x:                | :x:                |
| Config            | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x:                | :x:                | :x:                | :x:                | :x:                |
| Retries           | :white_check_mark: | :x:                | :x:                | :x:                | :x:                | :x:                | :x:                | :x:                |
| Middleware        | :white_check_mark: | :x:                | :x:                | :x:                | :x:                | :x:                | :x:                | :x:                |
| LoadGen           | :white_check_mark: | :x:                | :white_check_mark: | :white_check_mark: | :x:                | :x:                | :x:                | :x:                |
| Pre-built Configs | :white_check_mark: | :x:                | :white_check_mark: | :x:                | :x:                | :x:                | :x:                | :x:                |
| Logging           | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x:                | :x:                | :x:                | :x:                |
| Debug Logging     | :white_check_mark: | :x:                | :x:                | :x:                | :x:                | :x:                | :x:                | :x:                |
| Lambda            | :x:                | :x:                | :x:                | :x:                | :x:                | :x:                | :x:                | :x:                |
| Collections       | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x:                | :x:                | :x:                | :x:                | :x:                |

----------------------------------------------------------------------------------------
For more info, visit our website at [https://gomomento.com](https://gomomento.com), or developer docs at [https://docs.momentohq.com](https://docs.momentohq.com).
