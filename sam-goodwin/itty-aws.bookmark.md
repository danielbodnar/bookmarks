# sam-goodwin/itty-aws (github.com)

<https://github.com/sam-goodwin/itty-aws>

## Description

A teeny tiny ~49KB AWS SDK for TypeScript. Contribute to sam-goodwin/itty-aws development by creating an account on GitHub.

## Quote

> A teeny tiny ~49KB AWS SDK for TypeScript

## Tags

#aws #aws-lambda #aws-lambda-node #aws-sdk #aws-sdk-javascript #itty-router #TypeScript

## Content

# GitHub - sam-goodwin/itty-aws: A teeny tiny \~49KB AWS SDK for TypeScript {#github---sam-goodwinitty-aws-a-teeny-tiny-49kb-aws-sdk-for-typescript .reader-title}

sam-goodwin

------------------------------------------------------------------------

## itty-aws {#itty-aws dir="auto" tabindex="-1"}

[](#itty-aws){#user-content-itty-aws aria-label="Permalink: itty-aws"}

This is a teeny-tiny AWS SDK implementation for TypeScript using [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy){rel="nofollow"} that fits everything into `~49 KB`, including all Services and APIs. The name is an homage to the awesome [itty-router](https://github.com/kwhitley/itty-router).

> 🛠 This is a highly experimental API, do not use for anything serious.

## Supported APIs {#supported-apis dir="auto" tabindex="-1"}

[](#supported-apis){#user-content-supported-apis aria-label="Permalink: Supported APIs"}

Known to work:

-   ✅ Any modern API using plain JSON protocol should work out of the box.
-   ✅ DynamoDB
-   ✅ EventBridge
-   ✅ SQS
-   ✅ S3 `CreateBucket`, `GetObject`, `HeadObject`, `PutObject`, `DeleteObject`, `ListObjectsV2`
-   ⛔️ S3 the remaining S3 APis likely don\'t work due to inconsistencies in the XML API.
-   ⛔️ SNS (see: [#2](https://github.com/sam-goodwin/itty-aws/issues/2){hovercard-url="/sam-goodwin/itty-aws/issues/2/hovercard" hovercard-type="issue"})

## Why? {#why dir="auto" tabindex="-1"}

[](#why){#user-content-why aria-label="Permalink: Why?"}

We want a lightweight AWS SDK that has no impact on Lambda cold starts and a standard API design. The AWS SDK v3 traded off usability to save on bundle size with the introduction of `client.send(Command)` and still didn\'t achieve a lightweight experience. None of this should be necessary - we can have our cake and eat it too!

## Problems with AWS SDK v3 {#problems-with-aws-sdk-v3 dir="auto" tabindex="-1"}

[](#problems-with-aws-sdk-v3){#user-content-problems-with-aws-sdk-v3 aria-label="Permalink: Problems with AWS SDK v3"}

This project aims to eliminate the following issues with the official AWS SDK:

1.  Bundle size and cold start times degrades as a piece of code uses more AWS APIs
2.  Some APIs are excessively heavy (looking at you, S3).
3.  Relying on an AWS SDK provided in the Lambda environment doesn\'t always save time either, since just require/import-ing it takes time because of how large the code is.
4.  Bring back the `client.apiName(..)` design without compromising performance (e.g. `dynamo.getItem(..)` instead of `dynamo.send(GetItemCommand)`).

## Status {#status dir="auto" tabindex="-1"}

[](#status){#user-content-status aria-label="Permalink: Status"}

The entire AWS SDK (including all Services and APIs) fits in to a

-   Minified bundle size of: `22 KB`.
-   Un-minified bundle size of: `32 KB`.

> 💪 It is possible to reduce this even further.

## Installation {#installation dir="auto" tabindex="-1"}

[](#installation){#user-content-installation aria-label="Permalink: Installation"}

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

Import the top-level `AWS` object from `itty-aws` and instantiate a client for the Service you want. The SDK is constant size, so your performance is not impacted by the number or choice of AWS services. The APIs are methods on the client - just like AWS SDK v2, except minus the `.promise()`.

    import { AWS } from "itty-aws";

    const ddb = new AWS.DynamoDB();

    const response = await ddb.getItem({
      TableName,
      Key: {
        pk: {
          S: "key",
        },
      },
    });

    console.log(response.Item);

## How? {#how dir="auto" tabindex="-1"}

[](#how){#user-content-how aria-label="Permalink: How?"}

Instead of generating heavy classes and functions for the SDK like AWS does, we instead generate type declarations off of the AWS SDK v2 and provide a generic implementation for all clients using a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy){rel="nofollow"}. You can find this file in [./src/index.ts](https://github.com/sam-goodwin/itty-aws/blob/main/src/index.ts).

## Known Issues {#known-issues dir="auto" tabindex="-1"}

[](#known-issues){#user-content-known-issues aria-label="Permalink: Known Issues"}

-   Performance has not been tested - it\'s possible that our use of `https` or `fetch` is slower than whatever magic the AWS SDK is doing.
-   We\'re still importing some heavy code from the AWS SDK for signing requests - including tslib (for whatever reason). We should investigate hand-rolling replacements that don\'t have these dependencies or at least minimize them.
