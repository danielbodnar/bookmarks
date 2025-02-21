# getlift/lift (github.com)

<https://github.com/getlift/lift>

## Description

Expanding Serverless Framework beyond functions using the AWS CDK - getlift/lift

## Quote

> Expanding Serverless Framework beyond functions using the AWS CDK

## Tags

#aws #aws-cdk #serverless #serverless-framework #serverless-plugin #TypeScript

## Content

# GitHub - getlift/lift: Expanding Serverless Framework beyond functions using the AWS CDK {#github---getliftlift-expanding-serverless-framework-beyond-functions-using-the-aws-cdk .reader-title}

getlift

------------------------------------------------------------------------

[![](https://github.com/getlift/lift/raw/master/docs/img/animation.gif){animated-image=""}](https://github.com/getlift/lift/blob/master/docs/img/animation.gif){rel="noopener noreferrer"}

Lift is a plugin that leverages the AWS CDK to expand the [Serverless Framework](https://www.serverless.com/){rel="nofollow"} beyond functions.

Deploy production-ready websites, queues, storage buckets and more with a few lines in serverless.yml.

-   ⚡️ **For developers** - No AWS knowledge required
-   ⚡️ **Production-ready** - Built by AWS experts, optimized for production
-   ⚡️ **Not invasive** - Integrates with existing projects
-   ⚡️ **No lock-in** - Eject to CloudFormation at any time

[Why Lift?](https://github.com/getlift/lift/blob/master/docs/comparison.md)

## Installation {#installation dir="auto" tabindex="-1"}

[](#installation){#user-content-installation aria-label="Permalink: Installation"}

Lift is a [Serverless Framework plugin](https://www.serverless.com/plugins/){rel="nofollow"}, install it in your project:

    serverless plugin install -n serverless-lift

> If you prefer, you can install Lift via NPM: `npm install --save-dev serverless-lift`. Then, register the `serverless-lift` plugin in `serverless.yml` (see the example below).

## Quick start {#quick-start dir="auto" tabindex="-1"}

[](#quick-start){#user-content-quick-start aria-label="Permalink: Quick start"}

Once installed, start using Lift constructs in `serverless.yml`:

    service: my-app

    provider:
        name: aws

    plugins:
        - serverless-lift

    functions:
        # ...

    constructs:

        # Include Lift constructs here

        landing-page:
            type: static-website
            path: 'landing/dist'

        avatars:
            type: storage

## Constructs {#constructs dir="auto" tabindex="-1"}

[](#constructs){#user-content-constructs aria-label="Permalink: Constructs"}

The [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html){rel="nofollow"} is extremely powerful, but it is very complex and cannot be used in `serverless.yml`. Lift changes that: use the best of the CDK in Serverless, without having to learn about it!

Lift provides components, aka \"**constructs**\", specifically selected for serverless applications. They are all built using the CDK and its best practices, with unique features to provide an awesome developer experience.

### [Single page app](https://github.com/getlift/lift/blob/master/docs/single-page-app.md) {#single-page-app dir="auto" tabindex="-1"}

[](#single-page-app){#user-content-single-page-app aria-label="Permalink: Single page app"}

Deploy single-page applications, for example React, VueJS or Angular apps.

    constructs:
        landing:
            type: single-page-app
            path: dist

[Read more\...](https://github.com/getlift/lift/blob/master/docs/single-page-app.md)

### [Static website](https://github.com/getlift/lift/blob/master/docs/static-website.md) {#static-website dir="auto" tabindex="-1"}

[](#static-website){#user-content-static-website aria-label="Permalink: Static website"}

Deploy static websites.

    constructs:
        landing:
            type: static-website
            path: dist

[Read more\...](https://github.com/getlift/lift/blob/master/docs/static-website.md)

### [Storage](https://github.com/getlift/lift/blob/master/docs/storage.md) {#storage dir="auto" tabindex="-1"}

[](#storage){#user-content-storage aria-label="Permalink: Storage"}

Deploy preconfigured S3 buckets to store files.

    constructs:
        avatars:
            type: storage

[Read more\...](https://github.com/getlift/lift/blob/master/docs/storage.md)

### [Queue](https://github.com/getlift/lift/blob/master/docs/queue.md) {#queue dir="auto" tabindex="-1"}

[](#queue){#user-content-queue aria-label="Permalink: Queue"}

Deploy SQS queues and workers for asynchronous processing.

    constructs:
        my-queue:
            type: queue
            worker:
                handler: src/report-generator.handler

[Read more\...](https://github.com/getlift/lift/blob/master/docs/queue.md)

### [Webhook](https://github.com/getlift/lift/blob/master/docs/webhook.md) {#webhook dir="auto" tabindex="-1"}

[](#webhook){#user-content-webhook aria-label="Permalink: Webhook"}

Deploy webhooks to receive notifications from 3rd party applications.

    constructs:
        stripe-webhook:
            type: webhook
            path: /my-webhook-endpoint
            authorizer:
                handler: myAuthorizer.main

[Read more\...](https://github.com/getlift/lift/blob/master/docs/webhook.md)

### [Database - DynamoDB Single Table](https://github.com/getlift/lift/blob/master/docs/database-dynamodb-single-table.md) {#database---dynamodb-single-table dir="auto" tabindex="-1"}

[](#database---dynamodb-single-table){#user-content-database---dynamodb-single-table aria-label="Permalink: Database - DynamoDB Single Table"}

Deploy databases leveraging DynamoDB Single Table Design principles.

    constructs:
        database:
            type: database/dynamodb-single-table

### [Server-side website](https://github.com/getlift/lift/blob/master/docs/server-side-website.md) {#server-side-website dir="auto" tabindex="-1"}

[](#server-side-website){#user-content-server-side-website aria-label="Permalink: Server-side website"}

Deploy server-side rendered websites, for example Laravel or Symfony apps.

    constructs:
        website:
            type: server-side-website
            assets:
                '/css/*': public/css
                '/js/*': public/js

[Read more\...](https://github.com/getlift/lift/blob/master/docs/server-side-website.md)

More constructs are coming soon! Got suggestions? [Open and upvote drafts](https://github.com/getlift/lift/discussions/categories/constructs).

## Lift-specific configuration {#lift-specific-configuration dir="auto" tabindex="-1"}

[](#lift-specific-configuration){#user-content-lift-specific-configuration aria-label="Permalink: Lift-specific configuration"}

Lift default behaviors can be override and configured as per your likings using the `lift` property at the root of your `serverless.yml` file. This property is optional as well as all the [configurable options within](https://github.com/getlift/lift/blob/master/docs/configuration.md). Configurations specified at this level affect all constructs defined within the same service file.

## Ejecting {#ejecting dir="auto" tabindex="-1"}

[](#ejecting){#user-content-ejecting aria-label="Permalink: Ejecting"}

You can eject from Lift at any time: Lift is based on CloudFormation. That allows anyone to kickstart a project with Lift, and fallback to CloudFormation if you ever grow out of it.

To eject:

-   export the CloudFormation template via `serverless lift eject`
-   copy the parts you want to turn into CloudFormation and paste them in the [`resources` section of serverless.yml](https://www.serverless.com/framework/docs/providers/aws/guide/resources/){rel="nofollow"}
-   don\'t forget to remove from `serverless.yml` the Lift constructs you have turned into CloudFormation

## Extend Lift constructs {#extend-lift-constructs dir="auto" tabindex="-1"}

[](#extend-lift-constructs){#user-content-extend-lift-constructs aria-label="Permalink: Extend Lift constructs"}

Lift packages production-ready features in the form of highly opinionated construts with minimal configuration options in order to avoid confusion for serverless early adopters. In order to empower more advanced developers, every construct ships with an `extensions` property allowing overrides on the underlying Cloudformation Resources.

In the exemple below, the S3 Bucket CloudFormation Resource generated by the `avatars` storage construct will be extened with the new `AccessControl: PublicRead` CloudFormation property.

    constructs:
        avatars:
            type: storage
            extensions:
                bucket:
                    Properties:
                        AccessControl: PublicRead

Each construct documentation lists available underlying CloudFormation resources that can be extended using the `extensions` key.

## TypeScript definitions {#typescript-definitions dir="auto" tabindex="-1"}

[](#typescript-definitions){#user-content-typescript-definitions aria-label="Permalink: TypeScript definitions"}

TypeScript users can use `serverless.ts` instead of `serverless.yml`. Lift provides [type definitions to help](https://github.com/getlift/lift/blob/master/docs/serverless-types.md).

------------------------------------------------------------------------

Lift is built and maintained with love ❤️ by

[![](https://github.com/getlift/lift/raw/master/docs/img/theodo.png){width="130"}](https://www.theodo.fr/ "Theodo"){rel="nofollow"}
[![](https://github.com/getlift/lift/raw/master/docs/img/serverless-logo.png){width="220"}](https://www.serverless.com/ "Serverless"){rel="nofollow"}
