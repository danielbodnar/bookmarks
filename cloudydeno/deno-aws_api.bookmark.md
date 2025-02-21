# cloudydeno/deno-aws_api (github.com)

<https://github.com/cloudydeno/deno-aws_api>

## Description

From-scratch Typescript client for accessing AWS APIs - cloudydeno/deno-aws_api

## Quote

> From-scratch Typescript client for accessing AWS APIs

## Tags

#aws #aws-sdk #deno #deno-apis #typescript #typescript-library #TypeScript

## Content

# GitHub - cloudydeno/deno-aws_api: From-scratch Typescript client for accessing AWS APIs {#github---cloudydenodeno-aws_api-from-scratch-typescript-client-for-accessing-aws-apis .reader-title}

cloudydeno

------------------------------------------------------------------------

## `aws_api` for Deno {#aws_api-for-deno dir="auto" tabindex="-1"}

[](#aws_api-for-deno){#user-content-aws_api-for-deno aria-label="Permalink: aws_api for Deno"}

[![CI Status](https://github.com/danopia/deno-aws_api/workflows/CI/badge.svg?branch=main)](https://github.com/danopia/deno-aws_api/workflows/CI/badge.svg?branch=main){rel="noopener noreferrer"}
[![Latest /x/ version](https://camo.githubusercontent.com/13b97c9025f645dbf5915e4ad7426c3aaf3f0a0353c90706b299bc40238c6311/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e743f75726c3d687474707325334125324625324664656e6f2d76697375616c697a65722e64616e6f7069612e6e6574253246736869656c64732532466c61746573742d76657273696f6e253246782532466177735f61706925324664656d6f2e7473){canonical-src="https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Flatest-version%2Fx%2Faws_api%2Fdemo.ts"}](https://deno.land/x/aws_api){rel="nofollow"}
[![external dependency count](https://camo.githubusercontent.com/d9245ef7d75f830f66f198234631d52e3a4ed6721d59a7922051bd1c51f2ed00/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e743f75726c3d687474707325334125324625324664656e6f2d76697375616c697a65722e64616e6f7069612e6e6574253246736869656c64732532466465702d636f756e74253246782532466177735f61706925324664656d6f2e7473){canonical-src="https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fdep-count%2Fx%2Faws_api%2Fdemo.ts"}](https://deno-visualizer.danopia.net/dependencies-of/https/deno.land/x/aws_api/demo.ts){rel="nofollow"}
[![dependency outdatedness](https://camo.githubusercontent.com/ae4ba4aa37350655f63d14c15dd55d5f77bb4c8bb2144cb2dbdf865bf9bc7fd2/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e743f75726c3d687474707325334125324625324664656e6f2d76697375616c697a65722e64616e6f7069612e6e6574253246736869656c647325324675706461746573253246782532466177735f61706925324664656d6f2e7473){canonical-src="https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fupdates%2Fx%2Faws_api%2Fdemo.ts"}](https://deno-visualizer.danopia.net/dependencies-of/https/deno.land/x/aws_api/demo.ts){rel="nofollow"}

From-scratch Typescript AWS API client built for Deno.

This library\'s goal is to codegen type-safe AWS service clients
while importing a relatively small number of dependency modules.

Each AWS service has its own module that you can import from several URLs.
To use, you can create a `new ApiFactory()` (which manages credentials and such),
and then use it to construct a client for the AWS service API you want to use.

## Example Usage {#example-usage dir="auto" tabindex="-1"}

[](#example-usage){#user-content-example-usage aria-label="Permalink: Example Usage"}

A bare-bones example from `demo.ts`:

    import { ApiFactory } from 'https://deno.land/x/aws_api/client/mod.ts';
    import { STS } from 'https://deno.land/x/aws_api/services/sts/mod.ts';

    // Create a service client for AWS Security Token Service
    const sts = new ApiFactory().makeNew(STS);

    // Call the STS "GetCallerIdentity" API
    const identity = await sts.getCallerIdentity();
    console.log('You are', identity.UserId, 'in account', identity.Account);
    console.log('Identity ARN:', identity.Arn);

Several larger examples in `examples/` show concepts such as
launching & managing an EC2 instance, redriving SQS messages from a dead-letter queue,
and writing & reading records within a Kinesis stream.

## Who Should Use This Library? {#who-should-use-this-library dir="auto" tabindex="-1"}

[](#who-should-use-this-library){#user-content-who-should-use-this-library aria-label="Permalink: Who Should Use This Library?"}

This `aws_api` Deno module is good for:

-   Safely making API calls to one or more of the AWS services with client-side request/response types and validation, response error handling, and resource \'waiters\'
-   Loading AWS credentials within Deno scripts from common sources (e.g. environment variables, config files, and IAM roles) and refreshing them automatically
-   Connecting to alternative endpoints such as Localstack, S3-compatible services, etc, as configured in your program
-   Generating presigned URLs specifically for S3 (check `/extras/s3-presign.ts` for a basic implementation)

This module *alone* is *not good* for:

-   Streaming request bodies (as request payloads are currently buffered) though S3 Multi-part Upload is available via `/extras/s3-upload.ts`
-   DynamoDB document logic (as the DynamoDB \'DocumentClient\' class is extra client logic on top of the APIs - but you can import it from elsewhere)
-   Connecting directly to data-tier servers like OpenSearch, RDS, Elasticache, MQTT, etc (as these don\'t generally work like normal AWS APIs)

### Disclaimer {#disclaimer dir="auto" tabindex="-1"}

[](#disclaimer){#user-content-disclaimer aria-label="Permalink: Disclaimer"}

**This is NOT a port of the official AWS SDK JS.**
Though this project can generate a client for every AWS service,
I have only personally tested it with a couple dozen services
and the bindings might make incorrect assumptions about individual API contracts.

Do not use this module in mission critical stuff.
It\'s intended for automation scripts,
quick & dirty pieces of infrastructure,
prototype microservices and so on.

If you just want the real, full-fat AWS SDK,
check out [this aws-sdk-js-v3 issue](https://github.com/aws/aws-sdk-js-v3/issues/1289){hovercard-url="/aws/aws-sdk-js-v3/issues/1289/hovercard" hovercard-type="issue"}.
A port of the AWS SDK has also been uploaded at
[/x/aws_sdk](https://deno.land/x/aws_sdk){rel="nofollow"}.

The exported logic within `client/` and `encoding/` are liable to change from refactor.
For best upgradability, stick to constructing an `ApiFactory` object
and passing it to the services.

## Importing Service Clients {#importing-service-clients dir="auto" tabindex="-1"}

[](#importing-service-clients){#user-content-importing-service-clients aria-label="Permalink: Importing Service Clients"}

The `services/` folder contains complete API clients for several key services.
These include S3, DynamoDB, Lambda, S3, and SQS/SNS.
There\'s also CloudWatch, ECR, Kinesis, KMS, Route53, SES, and STS.

For other services, or to cut down on dependency size by selecting the available actions,
you can import from [the /x/aws_api Web Service](https://aws-api.deno.dev/latest/){rel="nofollow"}:

    import { ApiFactory } from 'https://deno.land/x/aws_api/client/mod.ts';
    import { Pricing } from 'https://aws-api.deno.dev/latest/services/pricing.ts';

    const pricing = new ApiFactory().makeNew(Pricing);
    const { Services } = await pricing.describeServices('AmazonEC2');
    console.log('Found', Services.length, 'services:');
    for (const serviceItem of Services) {
      console.log('  -', serviceItem.ServiceCode);
    }

More information can be found on [the accompanying Wiki page](https://github.com/cloudydeno/deno-aws_api/wiki/Web-Service).

## Client Configuration {#client-configuration dir="auto" tabindex="-1"}

[](#client-configuration){#user-content-client-configuration aria-label="Permalink: Client Configuration"}

The `ApiFactory` constructor accepts optional configuration as an options object.
If you need to change something, pass one of these properties:

-   `credentialProvider` can be a `CredentialsProvider` implementation, responsible for loading and refreshing AWS credentials. The default provider is a `CredentialsProviderChain` which tries multiple sources. You can pass a customized chain, or even implement a custom provider for your own dynamic-config infrastructure.
-   `credentials` can be a particular `Credential` implementation. This option disables credential refreshing.
-   `region` configures a specific AWS region, disregarding the ambient region from the environment. Useful for being explicit or when working in multiple regions.
-   `fixedEndpoint` forces a particular base URL to send all requests to. Useful for MinIO or localstack. Specify a full URL including `https://`. This option disables subdomain-style S3 access.
-   `endpointResolver` can be an `EndpointResolver` which is responsible for selecting endpoint URLs for specific API/region combinations. An `AwsEndpointResolver` instance is used by default, which prefers the new `.aws` TLD when available. There are also several other resolvers exported by `/client/mod.ts`.
    -   If you want to disregard global endpoints and always use regional endpoints, configure an `AwsEndpointResolver` instance and pass it in here.
    -   If you are using a vendor which has their own \"S3-compatible\" endpoints, check out [some example configurations in the Github Wiki](https://github.com/cloudydeno/deno-aws_api/wiki/S3-Compatible-Vendors).

For example, to access the EC2 API of a particular region:

    const ec2_europe = new ApiFactory({
      region: 'eu-west-1',
    }).makeNew(EC2);

## Changelog {#changelog dir="auto" tabindex="-1"}

[](#changelog){#user-content-changelog aria-label="Permalink: Changelog"}

-   `TBD` on `TBD`: minor adjustments for Deno 2 type compatibility

-   `v0.8.1` on `2023-02-26`: hotfixes in extras files

-   `v0.8.0` on `2023-02-26`: codegen `v0.4`

    -   Use Deno\'s `/std@0.177.0` (except for MD5).
        Minimum tested Deno is now `v1.22`
    -   **Breaking change**: Return `ReadableStream<Uint8Array>` from S3 `GetObject` and similar actions.
        Fixes [#38](https://github.com/cloudydeno/deno-aws_api/issues/38){hovercard-url="/cloudydeno/deno-aws_api/issues/38/hovercard" hovercard-type="issue"}
    -   Refactor endpoint logic with newer IPv6
    -   Refactor signing logic to use SubtleCrypto for SHA-256
    -   Fix reading user credential files on Windows.
        Fixes [#40](https://github.com/cloudydeno/deno-aws_api/issues/40){hovercard-url="/cloudydeno/deno-aws_api/issues/40/hovercard" hovercard-type="issue"} -
        thanks for the report!
    -   New S3 managed upload module available in `/extras/s3-upload.ts`.
        Fixes [#30](https://github.com/cloudydeno/deno-aws_api/issues/30){hovercard-url="/cloudydeno/deno-aws_api/issues/30/hovercard" hovercard-type="issue"}
    -   Add an implementation of S3 presigning in `/extras/s3-presign.ts`.
        Fixes [#29](https://github.com/cloudydeno/deno-aws_api/issues/29){hovercard-url="/cloudydeno/deno-aws_api/issues/29/hovercard" hovercard-type="issue"}

-   `v0.7.0` on `2022-05-15`: Client-only changes

    -   Add by-default support for task-specific IAM credentials inside Amazon ECS.
        See also [IAM roles for tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html){rel="nofollow"}.
        Fixes [#33](https://github.com/cloudydeno/deno-aws_api/issues/33){hovercard-url="/cloudydeno/deno-aws_api/issues/33/hovercard" hovercard-type="issue"} -
        thanks for the report!
    -   Properly sign S3 request headers,
        fixing [compatibility with Backblaze B2 (#32)](https://github.com/cloudydeno/deno-aws_api/issues/32){hovercard-url="/cloudydeno/deno-aws_api/issues/32/hovercard" hovercard-type="issue"} -
        thanks for the report!
    -   Add dual-stack (IPv6-ready) endpoints for RDS and App Mesh.
    -   Fix API endpoint for Amazon Chime.

-   `v0.6.0` on `2022-01-19`: codegen `v0.3`

    -   **Breaking change:** Some response types now have nullable lists and maps. Workarounds:
        -   Add a nullcheck around any broken fields if you just want to get going again.
        -   If you aren\'t already,
            [add an `?actions=...` filter](https://github.com/cloudydeno/deno-aws_api/wiki/Web-Service#parameters)
            to your import to produce more-concise types.
    -   Test on Deno 1.11 up to 1.17 (the current latest)
    -   Use Deno\'s `/std@0.120.0`
    -   Fix specific issues with `Glacier`, `ApiGateway`, `S3`,
        and [`EC2`](https://github.com/cloudydeno/deno-aws_api/issues/16){hovercard-url="/cloudydeno/deno-aws_api/issues/16/hovercard" hovercard-type="issue"}
    -   Fix 404 when requesting several APIs incluiding Lex and DynamoDBStreams
    -   Block APIs needing AWS\'s \"eventstream\" protocol (so, `S3.SelectObjectContent`)
    -   Set `docs=short` as the default. For the least bytes, please specify `docs=none`.
    -   Add experimental request hooks to `ApiFactory`, helps with debugging
    -   Use Lambda\'s new IPv6-enabled API endpoints
    -   Allow selecting IPv6 endpoints for IMDSv2
    -   Fix incorrect logic reuse between `rest-json` and `json` clients
    -   Adjust which headers are used for request signatures
    -   Rewrite of response error parsing

-   `v0.5.0` on `2021-08-27`: codegen `v0.2`

    -   Support Deno 1.11 or later
    -   Use definitions from `aws-sdk-js@2.971.0`
    -   Formalize `.makeNew(constructor)` method on `ApiFactory`
    -   Complete rewrite of the endpoint selection logic
        -   Automatically selects GovCloud or AWS China domains
        -   Uses the S3 and EC2 dualstack endpoints when offered.
    -   Add `fixedEndpoint` option to `ApiFactory` for localstack, minio, etc.
    -   Remove pre-generated EC2 API because of how large it is on disk.
    -   Implement request cancellation via `AbortSignal` pass-thru
    -   Remove `/std/uuid` import in favor of `crypto.randomUUID()`

-   `v0.4.1` on `2021-05-23`: Also fix Deno 1.9 regression for unsigned requests.

    -   Addresses startup issue when using EKS Pod Identity.

-   `v0.4.0` on `2021-05-01`: Deno 1.9 compatibility. Remove most less-common AWS services.

    -   To use a service that is no longer bundled, use the [Web Service](https://aws-api.deno.dev/latest/){rel="nofollow"}.
    -   API Version has been removed from module filenames.
    -   The primary export of each service module is no longer `export default`.

-   `v0.3.1` on `2021-03-28`: Fix ini-parsing edgecase. Remove zero-field API types.

    -   Using definitions from `aws-sdk-js@2.874.0`

-   `v0.3.0` on `2021-02-14`: Clean up generation, rename modules to match AWS-SDK

    -   Using definitions from `aws-sdk-js@2.839.0`

-   `v0.2.1` on `2020-12-21`: Add EC2 instance metadata integration (IMDSv2)

    -   Now supports using EC2 Instance IAM Roles automatically.
    -   Using definitions from `aws-sdk-js@2.814.0`

-   `v0.2.0` on `2020-11-07`: Completed bindings for all API services.

    -   Using definitions from `aws-sdk-js@2.784.0`

-   `v0.1.1` on `2020-11-02`: Generation improvements, most services have been generated.

    -   Using definitions from `aws-sdk-js@2.780.0`

-   `v0.1.0` on `2020-10-15`: Initial publication with about half of the services bound.

    -   Using definitions from `aws-sdk-js@2.768.0`

## About this library {#about-this-library dir="auto" tabindex="-1"}

[](#about-this-library){#user-content-about-this-library aria-label="Permalink: About this library"}

### Package layout {#package-layout dir="auto" tabindex="-1"}

[](#package-layout){#user-content-package-layout aria-label="Permalink: Package layout"}

-   `client/`: A handwritten generic AWS API client (credentials, signing, etc)
-   `encoding/`: Shared logic for dealing with XML, JSON, & querystrings
-   `services/`: Pre-generated service clients for a handful of important AWS services
    -   CloudWatch, DynamoDB, ECR, Kinesis, KMS, Lambda, Route53, S3, SESv2, SNS, SQS, STS
-   `demo.ts`: A trivial example of using this library for several services
-   `examples/`: Additional detailed examples of using individual services

Please reach out on Github Issues about missing features, weird exceptions, or API issues,
or ping `dantheman#8546` in the Deno Discord if you just wanna chat about this effort.

### Methodology {#methodology dir="auto" tabindex="-1"}

[](#methodology){#user-content-methodology aria-label="Permalink: Methodology"}

All of the clients are compiled from `aws-sdk-js`\'s JSON data files.
The code to generate clients isn\'t uploaded to `/x/`,
so if you want to read through it, make sure you\'re in the source Git repo.

\"Most\" of the heavy lifting (such as compiling waiter JMESPaths)
runs in the generation step so that the downloaded code is ready to run.

### Completeness {#completeness dir="auto" tabindex="-1"}

[](#completeness){#user-content-completeness aria-label="Permalink: Completeness"}

The following clients have been used in actual scripts
and should work quite well:

-   SQS
-   STS
-   EC2
-   S3
-   Kinesis
-   DynamoDB

The following credential sources are supported:

-   Environment variables
-   Static credentials in `~/.aws/credentials`
-   EKS Pod Identity (web identity token files)
-   ECS Task IAM roles
-   EC2 instance credentials

Some individual features that are implemented:

-   Waiters (as `.waitForXYZ({...})`)
-   Automatic credential detection / loading
-   EC2 instance metadata server v2
-   Custom alternative endpoints
-   AWS endpoints other than `**.amazonaws.com` (#3)
    -   Opportunistic IPv6 dualstack via `*.api.aws`
    -   Untested approximations for other AWS partitions such as govcloud & China AWS

Multiple bits are *missing*:

-   Automatic pagination (#1)
-   AssumeRole credentials (#4)
-   Debug logging/tracing of API calls
-   Automatic retries
-   Getting EKS credentials from regional STS endpoints (#2)

### List of Pre-Generated API Clients {#list-of-pre-generated-api-clients dir="auto" tabindex="-1"}

[](#list-of-pre-generated-api-clients){#user-content-list-of-pre-generated-api-clients aria-label="Permalink: List of Pre-Generated API Clients"}

All API definitions are current as of [aws-sdk-js `v2.1060.0`](https://github.com/aws/aws-sdk-js/releases/tag/v2.1060.0).

  Class          Module                Protocol
  -------------- --------------------- -----------
  `CloudWatch`   `cloudwatch/mod.ts`   query
  `DynamoDB`     `dynamodb/mod.ts`     json
  `ECR`          `ecr/mod.ts`          json
  `Kinesis`      `kinesis/mod.ts`      json
  `KMS`          `kms/mod.ts`          json
  `Lambda`       `lambda/mod.ts`       rest-json
  `Route53`      `route53/mod.ts`      rest-xml
  `S3`           `s3/mod.ts`           rest-xml
  `SESV2`        `sesv2/mod.ts`        rest-json
  `SNS`          `sns/mod.ts`          query
  `SQS`          `sqs/mod.ts`          query
  `STS`          `sts/mod.ts`          query

For any other services, please check out [the code generation web service](https://aws-api.deno.dev/latest/){rel="nofollow"}
which performs on-the-fly code generation.
You can import the generated URL directly in your application,
or download a copy of the file and save it in your source code for safe keeping.

The last version of this library to include every then-current API client
on `/x/` is [v0.3.1](https://deno.land/x/aws_api@v0.3.1){rel="nofollow"}.

## Breaking Changes Archive {#breaking-changes-archive dir="auto" tabindex="-1"}

[](#breaking-changes-archive){#user-content-breaking-changes-archive aria-label="Permalink: Breaking Changes Archive"}

### v0.4.0 {#v0.4.0 dir="auto" tabindex="-1"}

[](#v040){#user-content-v040 aria-label="Permalink: v0.4.0"}

1.  **Version 0.4.0** of this library stopped
    including every service\'s API in the published module.
    Instead, the code-generation process is running on Deno Deploy
    and allows importing extremely precise modules,
    generated on the fly based on multiple configuration options.

Check out [this Web Service wiki page](https://github.com/cloudydeno/deno-aws_api/wiki/Web-Service)
for more details on this new URL endpoint.
Please report any issues or concerns with this new approach.

1.  For services that are still bundled (SQS, S3, SNS, etc),
    the import URL no longer includes an API version
    (the `@year-month-date` part). Only the most recent API version gets bundled.

2.  The primary class export on each service module is no longer \'default\'.
    So instead of `import SQS from ...`,
    you\'ll do `import { SQS } from ....`.
