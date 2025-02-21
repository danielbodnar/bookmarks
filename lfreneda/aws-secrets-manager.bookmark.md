# lfreneda/aws-secrets-manager (github.com)

<https://github.com/lfreneda/aws-secrets-manager>

## Description

:key: High level interface (with cache) for AWS Secrets Manager - lfreneda/aws-secrets-manager

## Quote

> :key: High level interface (with cache) for AWS Secrets Manager

## Tags

#aws #aws-sdk #aws-sdk-javascript #aws-secrets-manager #secret #secrets-manager #secretsmanage #TypeScript

## Content

# GitHub - lfreneda/aws-secrets-manager: :key: High level interface (with cache) for AWS Secrets Manager {#github---lfrenedaaws-secrets-manager-key-high-level-interface-with-cache-for-aws-secrets-manager .reader-title}

lfreneda

------------------------------------------------------------------------

## aws-secrets-manager {#aws-secrets-manager dir="auto" tabindex="-1"}

[](#aws-secrets-manager){#user-content-aws-secrets-manager aria-label="Permalink: aws-secrets-manager"}

[![Maintainability](https://camo.githubusercontent.com/1727cae5f6fb41cf4c07c3775eac549110d500feae2f89c4c47a31acaa5e0039/68747470733a2f2f6170692e636f6465636c696d6174652e636f6d2f76312f6261646765732f30356561623632323033643037343231303431342f6d61696e7461696e6162696c697479){canonical-src="https://api.codeclimate.com/v1/badges/05eab62203d074210414/maintainability"}](https://codeclimate.com/github/lfreneda/aws-secrets-manager/maintainability){rel="nofollow"}

🔑 High level interface (with cache) for AWS Secrets Manager

## Install {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: Install"}

    npm install @lfreneda/aws-secrets-manager --save

    yarn add @lfreneda/aws-secrets-manager

## What\'s New in Version 1.0.0 {#whats-new-in-version-1.0.0 dir="auto" tabindex="-1"}

[](#whats-new-in-version-100){#user-content-whats-new-in-version-100 aria-label="Permalink: What's New in Version 1.0.0"}

This release represents a **MAJOR** version update from `0.0.3`, indicating significant changes to the API. Users of version `^0.0.3` should be aware that this update is not backward-compatible. However, packages using version `^0.0.3` will not be automatically updated to `1.0.0`.

### Major Changes {#major-changes dir="auto" tabindex="-1"}

[](#major-changes){#user-content-major-changes aria-label="Permalink: Major Changes"}

-   **Language Update**: The codebase has been migrated from JavaScript to TypeScript with correct types and JSDOC documentation.
-   **Package Updates**: The AWS SDK has been updated to version 3. Node.js 14 and above is now supported (developed in Node.js version 18).
-   **Development Tools**: ESLint has been updated to the latest version with the \"Neon\" standard, and Prettier has been added to the project.
-   **Testing**: Unit tests have been added using Vitest for various functions, including `SecretManager`, `toConnectionString`, and `InMemoryCacheSecretsManagerDecorator`.
-   **API Changes**: Error handling has been improved with errors now mapped to their own classes. The `SecretManager` has been enhanced to accept an `inlineCache` parameter during instantiation, and the `getSecretValue` method now supports a `bypassCache` parameter.

### Note on Cache {#note-on-cache dir="auto" tabindex="-1"}

[](#note-on-cache){#user-content-note-on-cache aria-label="Permalink: Note on Cache"}

When using the secret manager with `inlineCache`, the secrets will be cached for 10 minutes, if you need to bypass the cache, you can use the `bypassCache` parameter.

If your needs require any changes to the cache, you can implement your own cache by disabling the `inlineCache` and using the `InMemoryCacheSecretsManagerDecorator` decorator, see the [Node-Cache](https://www.npmjs.com/package/node-cache){rel="nofollow"} package for more information on configuration options.

### Utils {#utils dir="auto" tabindex="-1"}

[](#utils){#user-content-utils aria-label="Permalink: Utils"}

If you are using secrets for RDS credentials, there is also a helper to convert database settings to a connection string: `toConnectionString`.

## How to use {#how-to-use dir="auto" tabindex="-1"}

[](#how-to-use){#user-content-how-to-use aria-label="Permalink: How to use"}

Inline cache implementation:

    const { SecretsManager } = require('@lfreneda/aws-secrets-manager')
    const secretsManager = new SecretsManager({ region: 'us-east-1' })
    const secretValue = await secretsManager.getSecretValue('sample/key')

To use the in-memory cache implementation:

    const { SecretsManager, InMemoryCacheSecretsManagerDecorator } = require('@lfreneda/aws-secrets-manager')
    const secretsManager = new SecretsManager({ region: 'us-east-1' }, false)
    const cachedSecretManager = new InMemoryCacheSecretsManagerDecorator(secretsManager)
    const secretValue = await cachedSecretManager.getSecretValue('sample/key')

To use the `bypassCache` parameter:

    const { SecretsManager } = require('@lfreneda/aws-secrets-manager')
    const secretsManager = new SecretsManager({ region: 'us-east-1' })
    const secretValue = await secretsManager.getSecretValue('sample/key', true)

## Running tests {#running-tests dir="auto" tabindex="-1"}

[](#running-tests){#user-content-running-tests aria-label="Permalink: Running tests"}

Tests were made using [Vitest](https://vitest.dev/){rel="nofollow"} and [Sinon](https://sinonjs.org/){rel="nofollow"}

## Need Help? {#need-help dir="auto" tabindex="-1"}

[](#need-help){#user-content-need-help aria-label="Permalink: Need Help?"}

If you have questions or encounter issues while transitioning to version 1.0.0, please feel free to open an issue on GitHub for assistance.

Make sure to adjust the installation, usage, and testing instructions as needed for your project.
