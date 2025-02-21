# jeanbmar/s3-sync-client (github.com)

<https://github.com/jeanbmar/s3-sync-client>

## Description

AWS CLI s3 sync command for Node.js. Contribute to jeanbmar/s3-sync-client development by creating an account on GitHub.

## Quote

> AWS CLI s3 sync command for Node.js

## Tags

#aws #aws-cli #aws-s3 #aws-s3-sync #aws-sdk #aws-sync #s3 #s3-bucket #s3-sync #s3-syncing #sync #TypeScript

## Content

# GitHub - jeanbmar/s3-sync-client: AWS CLI s3 sync command for Node.js {#github---jeanbmars3-sync-client-aws-cli-s3-sync-command-for-node.js .reader-title}

jeanbmar

------------------------------------------------------------------------

## AWS CLI s3 sync for Node.js {#aws-cli-s3-sync-for-node.js dir="auto" tabindex="-1"}

[](#aws-cli-s3-sync-for-nodejs){#user-content-aws-cli-s3-sync-for-nodejs aria-label="Permalink: AWS CLI s3 sync for Node.js"}

[![npm](https://camo.githubusercontent.com/82220daf8de33681800f7d36759723ebfaa7ebbf34911f1f3874e0c6af557650/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f73332d73796e632d636c69656e742e737667){canonical-src="https://img.shields.io/npm/v/s3-sync-client.svg"}](https://camo.githubusercontent.com/82220daf8de33681800f7d36759723ebfaa7ebbf34911f1f3874e0c6af557650/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f73332d73796e632d636c69656e742e737667){rel="noopener noreferrer nofollow"} [![downloads](https://camo.githubusercontent.com/4facb5df207845aa266f0a734438df02da6108bd4a93f06ea8e171375f0686a3/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f73332d73796e632d636c69656e742e737667){canonical-src="https://img.shields.io/npm/dm/s3-sync-client.svg"}](https://camo.githubusercontent.com/4facb5df207845aa266f0a734438df02da6108bd4a93f06ea8e171375f0686a3/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f73332d73796e632d636c69656e742e737667){rel="noopener noreferrer nofollow"}

**AWS CLI `s3 sync` for Node.js** is a modern TypeScript client to perform S3 sync operations between file systems and S3 buckets, in the spirit of the official [AWS CLI command](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html){rel="nofollow"}.\
AWS CLI installation is **NOT** required by this module.

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   Sync from an S3 bucket to a local file system
-   Sync from a local file system to an S3 bucket (with multipart uploads support)
-   Sync from an S3 bucket to another S3 bucket
-   Sync only new and updated objects
-   Support AWS CLI options `--delete`, `--dryrun`, `--size-only`, `--include`, `--exclude`, `--follow-symlinks`, `--no-follow-symlinks`
-   Support AWS SDK native command input options
-   Monitor sync progress
-   Sync **any** number of objects (no 1000 objects limit)
-   Transfer objects concurrently
-   Manage differences in folder structures easily through relocation

## Why should I use this module? {#why-should-i-use-this-module dir="auto" tabindex="-1"}

[](#why-should-i-use-this-module){#user-content-why-should-i-use-this-module aria-label="Permalink: Why should I use this module?"}

1.  There is [no way](https://github.com/aws/aws-sdk-js-v3/issues/2096#issuecomment-858098764){hovercard-url="/aws/aws-sdk-js-v3/issues/2096/hovercard" hovercard-type="issue"} to achieve S3 sync using the AWS SDK for JavaScript v3 alone
2.  AWS CLI installation is **NOT** required
3.  The module contains no external dependency
4.  The AWS SDK peer dependency is up-to-date ([AWS SDK for JavaScript v3](https://github.com/aws/aws-sdk-js-v3))
5.  The module overcomes a set of common limitations listed at the bottom of this README

## Table of Contents {#table-of-contents dir="auto" tabindex="-1"}

[](#table-of-contents){#user-content-table-of-contents aria-label="Permalink: Table of Contents"}

1.  [Getting Started](#getting-started)
    1.  [Install](#install)
    2.  [Quick Start](#quick-start)
        1.  [Client initialization](#client-initialization)
        2.  [Sync from file system to S3 bucket](#sync-from-file-system-to-s3-bucket)
        3.  [Sync from S3 bucket to file system](#sync-from-s3-bucket-to-s3-bucket)
        4.  [Sync from S3 bucket to S3 bucket](#sync-from-s3-bucket-to-s3-bucket)
        5.  [Monitor transfer progress](#monitor-sync-progress)
        6.  [Abort sync](#abort-sync)
        7.  [Use AWS SDK command input options](#use-aws-sdk-command-input-options)
        8.  [Relocate objects during sync](#relocate-objects-during-sync)
        9.  [Filter source files](#filter-source-files)
2.  [API Reference](#api-reference)
    -   [Class: S3SyncClient](#class-s3-sync-client)
        -   [new S3SyncClient(configuration)](#new-s3-sync-client)
        -   [client.sync(localDir, bucketPrefix\[, options\])](#sync-bucket-with-local)
        -   [client.sync(bucketPrefix, localDir\[, options\])](#sync-local-with-bucket)
        -   [client.sync(sourceBucketPrefix, targetBucketPrefix\[, options\])](#sync-bucket-with-bucket)
3.  [Change Log](#change-log)
4.  [Benchmark](#benchmark)

## Getting Started {#getting-started dir="auto" tabindex="-1"}

[](#getting-started){#user-content-getting-started aria-label="Permalink: Getting Started"}

### Install {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: Install"}

`npm i s3-sync-client`

### Quick Start {#quick-start dir="auto" tabindex="-1"}

[](#quick-start){#user-content-quick-start aria-label="Permalink: Quick Start"}

#### Client initialization {#client-initialization dir="auto" tabindex="-1"}

[](#client-initialization){#user-content-client-initialization aria-label="Permalink: Client initialization"}

`S3SyncClient` is a wrapper for the AWS SDK `S3Client` class.

    import S3Client from '@aws-sdk/client-s3';
    import { S3SyncClient } from 's3-sync-client';

    const s3Client = new S3Client({ /* ... */ });
    const { sync } = new S3SyncClient({ client: s3Client });

#### Sync from file system to S3 bucket {#sync-from-file-system-to-s3-bucket dir="auto" tabindex="-1"}

[](#sync-from-file-system-to-s3-bucket){#user-content-sync-from-file-system-to-s3-bucket aria-label="Permalink: Sync from file system to S3 bucket"}

    // aws s3 sync /path/to/local/dir s3://mybucket2
    await sync('/path/to/local/dir', 's3://mybucket2');
    await sync('/path/to/local/dir', 's3://mybucket2', { partSize: 100 * 1024 * 1024 }); // uses multipart uploads for files higher than 100MB

    // aws s3 sync /path/to/local/dir s3://mybucket2/zzz --delete
    await sync('/path/to/local/dir', 's3://mybucket2/zzz', { del: true });

#### Sync from S3 bucket to file system {#sync-from-s3-bucket-to-file-system dir="auto" tabindex="-1"}

[](#sync-from-s3-bucket-to-file-system){#user-content-sync-from-s3-bucket-to-file-system aria-label="Permalink: Sync from S3 bucket to file system"}

    // aws s3 sync s3://mybucket /path/to/some/local --delete
    await sync('s3://mybucket', '/path/to/some/local', { del: true });

    // aws s3 sync s3://mybucket2 /path/to/local/dir --dryrun
    const diff = await sync('s3://mybucket2', '/path/to/local/dir', { dryRun: true });
    console.log(diff); // log operations to perform

#### Sync from S3 bucket to S3 bucket {#sync-from-s3-bucket-to-s3-bucket dir="auto" tabindex="-1"}

[](#sync-from-s3-bucket-to-s3-bucket){#user-content-sync-from-s3-bucket-to-s3-bucket aria-label="Permalink: Sync from S3 bucket to S3 bucket"}

    // aws s3 sync s3://my-source-bucket s3://my-target-bucket --delete
    await sync('s3://my-source-bucket', 's3://my-target-bucket', { del: true });

#### Monitor sync progress {#monitor-sync-progress dir="auto" tabindex="-1"}

[](#monitor-sync-progress){#user-content-monitor-sync-progress aria-label="Permalink: Monitor sync progress"}

    import { TransferMonitor } from 's3-sync-client';

    const monitor = new TransferMonitor();
    monitor.on('progress', (progress) => console.log(progress));
    await sync('s3://mybucket', '/path/to/local/dir', { monitor });

    /* output:
    ...
    {
      size: { current: 11925, total: 35688 },
      count: { current: 3974, total: 10000 }
    }
    ...
    */

    // to pull status info occasionally only, use monitor.getStatus():
    const timeout = setInterval(() => console.log(monitor.getStatus()), 2000);
    try {
        await sync('s3://mybucket', '/path/to/local/dir', { monitor });
    } finally {
        clearInterval(timeout);
    }

#### Abort sync {#abort-sync dir="auto" tabindex="-1"}

[](#abort-sync){#user-content-abort-sync aria-label="Permalink: Abort sync"}

    import { AbortController } from '@aws-sdk/abort-controller';
    import { TransferMonitor } from 's3-sync-client';

    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), 30000);

    await sync('s3://mybucket', '/path/to/local/dir', { abortSignal: abortController.signal });

#### Use AWS SDK command input options {#use-aws-sdk-command-input-options dir="auto" tabindex="-1"}

[](#use-aws-sdk-command-input-options){#user-content-use-aws-sdk-command-input-options aria-label="Permalink: Use AWS SDK command input options"}

    import mime from 'mime-types';
    /*
    commandInput properties can either be:
      - a plain object
      - a function returning a plain object
    */

    // set ACL, fixed value
    await sync('s3://mybucket', '/path/to/local/dir', {
        commandInput: {
            ACL: 'aws-exec-read',
        },
    });

    // set content type, dynamic value (function)
    await sync('s3://mybucket1', 's3://mybucket2', {
        commandInput: (input) => ({
            ContentType: mime.lookup(input.Key) || 'text/html',
        }),
    });

#### Filter source files {#filter-source-files dir="auto" tabindex="-1"}

[](#filter-source-files){#user-content-filter-source-files aria-label="Permalink: Filter source files"}

    // aws s3 sync s3://my-source-bucket s3://my-target-bucket --exclude "*" --include "*.txt" --include "flowers/*"
    await sync('s3://my-source-bucket', 's3://my-target-bucket', {
        filters: [
            { exclude: () => true }, // exclude everything
            { include: (key) => key.endsWith('.txt') }, // include .txt files
            { include: (key) => key.startsWith('flowers/') }, // also include everything inside the flowers folder
        ],
    });

#### Relocate objects during sync {#relocate-objects-during-sync dir="auto" tabindex="-1"}

[](#relocate-objects-during-sync){#user-content-relocate-objects-during-sync aria-label="Permalink: Relocate objects during sync"}

    // move objects from source folder a/b/ to target folder zzz/
    await sync('s3://my-source-bucket', 's3://my-target-bucket', {
        relocations: [ // multiple relocations can be applied
          (currentPath) =>
            currentPath.startsWith('a/b/')
              ? currentPath.replace('a/b/', 'zzz/')
              : currentPath
        ],
    });

    // aws s3 sync s3://mybucket/flowers/red /path/to/local/dir
    // as in cli, folder flowers/red will be flattened during sync
    await sync('s3://mybucket/flowers/red', '/path/to/local/dir'); 

Note: relocations are applied after every other options such as filters.

Additional examples are available in the repo test directory.

## API Reference {#api-reference dir="auto" tabindex="-1"}

[](#api-reference){#user-content-api-reference aria-label="Permalink: API Reference"}

A complete API reference is available in the repo docs directory.

### Class: S3SyncClient {#class-s3syncclient dir="auto" tabindex="-1"}

[](#class-s3syncclient){#user-content-class-s3syncclient aria-label="Permalink: Class: S3SyncClient"}

#### `new S3SyncClient(options)` {#new-s3syncclientoptions dir="auto" tabindex="-1"}

[](#new-s3syncclientoptions){#user-content-new-s3syncclientoptions aria-label="Permalink: new S3SyncClient(options)"}

-   `options` *\<S3SyncClientConfig\>*
    -   `client` *\<S3Client\>* instance of [AWS SDK S3Client](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/index.html){rel="nofollow"}.

#### `client.sync(localDir, bucketPrefix[, options])` {#client.synclocaldir-bucketprefix-options dir="auto" tabindex="-1"}

[](#clientsynclocaldir-bucketprefix-options){#user-content-clientsynclocaldir-bucketprefix-options aria-label="Permalink: client.sync(localDir, bucketPrefix[, options])"}

Sync from file system to S3 bucket.\
Similar to AWS CLI `aws s3 sync localDir bucketPrefix [options]`.

-   `localDir` *\<string\>* Local directory
-   `bucketPrefix` *\<string\>* Remote bucket name which may contain a prefix appended with a `/` separator
-   `options` *\<SyncBucketWithLocalOptions\>*
    -   `dryRun` *\<boolean\>* Equivalent to CLI `--dryrun` option
    -   `del` *\<boolean\>* Equivalent to CLI `--delete` option
    -   `deleteExcluded` *\<boolean\>* Delete **excluded** target objects even if they match a source object. Ignored if `del` is false. See [this](https://github.com/aws/aws-cli/issues/4923){hovercard-url="/aws/aws-cli/issues/4923/hovercard" hovercard-type="issue"} CLI issue.
    -   `sizeOnly` *\<boolean\>* Equivalent to CLI `--size-only` option
    -   `followSymlinks` *\<boolean\>* Equivalent to CLI `--follow-symlinks` option (default `true`)
    -   `relocations` *\<Relocation\[\]\>* Allows uploading objects to remote folders without mirroring the source directory structure. Each relocation is as a callback taking a string posix path param and returning a relocated string posix path.
    -   `filters` *\<Filter\[\]\>* [Almost](https://github.com/jeanbmar/s3-sync-client/issues/30){hovercard-url="/jeanbmar/s3-sync-client/issues/30/hovercard" hovercard-type="issue"} equivalent to CLI `--exclude` and `--include` options. Filters can be specified using plain objects including either an `include` or `exclude` property. The `include` and `exclude` properties are functions that take an object key and return a boolean.
    -   `abortSignal` *\<AbortSignal\>* Allows aborting the sync
    -   `commandInput` *\<CommandInput\<PutObjectCommandInput\>\> \| \<CommandInput\<CreateMultipartUploadCommandInput\>\>* Set any of the SDK [*\<PutObjectCommandInput\>*](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/putobjectcommandinput.html){rel="nofollow"} or [*\<CreateMultipartUploadCommandInput\>*](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/createmultipartuploadcommandinput.html){rel="nofollow"} options to uploads
    -   `monitor` *\<TransferMonitor\>*
        -   Attach `progress` event to receive upload progress notifications
        -   Call `getStatus()` to retrieve progress info on demand
    -   `maxConcurrentTransfers` *\<number\>* Each upload generates a Promise which is resolved when a local object is written to the S3 bucket. This parameter sets the maximum number of upload promises that might be running concurrently.
    -   `partSize` *\<number\>* Set the part size in **bytes** for multipart uploads. Default to 5 MB.
-   Returns: *\<Promise\<SyncBucketWithLocalCommandOutput\>\>* Fulfills with sync operations upon success.

#### `client.sync(bucketPrefix, localDir[, options])` {#client.syncbucketprefix-localdir-options dir="auto" tabindex="-1"}

[](#clientsyncbucketprefix-localdir-options){#user-content-clientsyncbucketprefix-localdir-options aria-label="Permalink: client.sync(bucketPrefix, localDir[, options])"}

Sync from S3 bucket to file system.\
Similar to AWS CLI `aws s3 sync bucketPrefix localDir [options]`.

-   `bucketPrefix` *\<string\>* Remote bucket name which may contain a prefix appended with a `/` separator
-   `localDir` *\<string\>* Local directory
-   `options` *\<SyncLocalWithBucketOptions\>*
    -   `dryRun` *\<boolean\>* Equivalent to CLI `--dryrun` option
    -   `del` *\<boolean\>* Equivalent to CLI `--delete` option
    -   `deleteExcluded` *\<boolean\>* Delete **excluded** target objects even if they match a source object. Ignored if `del` is false. See [this](https://github.com/aws/aws-cli/issues/4923){hovercard-url="/aws/aws-cli/issues/4923/hovercard" hovercard-type="issue"} CLI issue.
    -   `sizeOnly` *\<boolean\>* Equivalent to CLI `--size-only` option
    -   `followSymlinks` *\<boolean\>* Equivalent to CLI `--follow-symlinks` option (default `true`)
    -   `relocations` *\<Relocation\[\]\>* Allows downloading objects to local directories without mirroring the source folder structure. Each relocation is as a callback taking a string posix path param and returning a relocated string posix path.
    -   `filters` *\<Filter\[\]\>* [Almost](https://github.com/jeanbmar/s3-sync-client/issues/30){hovercard-url="/jeanbmar/s3-sync-client/issues/30/hovercard" hovercard-type="issue"} equivalent to CLI `--exclude` and `--include` options. Filters can be specified using plain objects including either an `include` or `exclude` property. The `include` and `exclude` properties are functions that take an object key and return a boolean.
    -   `abortSignal` *\<AbortSignal\>* Allows aborting the sync
    -   `commandInput` *\<CommandInput\<GetObjectCommandInput\>\>* Set any of the SDK [*\<GetObjectCommandInput\>*](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/getobjectcommandinput.html){rel="nofollow"} options to downloads
    -   `monitor` *\<TransferMonitor\>*
        -   Attach `progress` event to receive download progress notifications
        -   Call `getStatus()` to retrieve progress info on demand
    -   `maxConcurrentTransfers` *\<number\>* Each download generates a Promise which is resolved when a remote object is written to the local file system. This parameter sets the maximum number of download promises that might be running concurrently.
-   Returns: *\<Promise\<SyncLocalWithBucketCommandOutput\>\>* Fulfills with sync operations upon success.

#### `client.sync(sourceBucketPrefix, targetBucketPrefix[, options])` {#client.syncsourcebucketprefix-targetbucketprefix-options dir="auto" tabindex="-1"}

[](#clientsyncsourcebucketprefix-targetbucketprefix-options){#user-content-clientsyncsourcebucketprefix-targetbucketprefix-options aria-label="Permalink: client.sync(sourceBucketPrefix, targetBucketPrefix[, options])"}

Sync from S3 bucket to S3 bucket.\
Similar to AWS CLI `aws s3 sync sourceBucketPrefix targetBucketPrefix [options]`.

-   `sourceBucketPrefix` *\<string\>* Remote reference bucket name which may contain a prefix appended with a `/` separator
-   `targetBucketPrefix` *\<string\>* Remote bucket name to sync which may contain a prefix appended with a `/` separator
-   `options` *\<SyncBucketWithBucketOptions\>*
    -   `dryRun` *\<boolean\>* Equivalent to CLI `--dryrun` option
    -   `del` *\<boolean\>* Equivalent to CLI `--delete` option
    -   `deleteExcluded` *\<boolean\>* Delete **excluded** target objects even if they match a source object. Ignored if `del` is false. See [this](https://github.com/aws/aws-cli/issues/4923){hovercard-url="/aws/aws-cli/issues/4923/hovercard" hovercard-type="issue"} CLI issue.
    -   `sizeOnly` *\<boolean\>* Equivalent to CLI `--size-only` option
    -   `relocations` *\<Relocation\[\]\>* Allows copying objects to remote folders without mirroring the source folder structure. Each relocation is as a callback taking a string posix path param and returning a relocated string posix path.
    -   `filters` *\<Filter\[\]\>* [Almost](https://github.com/jeanbmar/s3-sync-client/issues/30){hovercard-url="/jeanbmar/s3-sync-client/issues/30/hovercard" hovercard-type="issue"} equivalent to CLI `--exclude` and `--include` options. Filters can be specified using plain objects including either an `include` or `exclude` property. The `include` and `exclude` properties are functions that take an object key and return a boolean.
    -   `abortSignal` *\<AbortSignal\>* Allows aborting the sync
    -   `commandInput` *\<CommandInput\<CopyObjectCommandInput\>\>* Set any of the SDK [*\<CopyObjectCommandInput\>*](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/copyobjectcommandinput.html){rel="nofollow"} options to copy operations
    -   `monitor` *\<TransferMonitor\>*
        -   Attach `progress` event to receive copy progress notifications
        -   Call `getStatus()` to retrieve progress info on demand
    -   `maxConcurrentTransfers` *\<number\>* Each copy generates a Promise which is resolved after the object has been copied. This parameter sets the maximum number of copy promises that might be running concurrently.
-   Returns: *\<Promise\<SyncBucketWithBucketCommandOutput\>\>* Fulfills with sync operations upon success.

## Change Log {#change-log dir="auto" tabindex="-1"}

[](#change-log){#user-content-change-log aria-label="Permalink: Change Log"}

See [CHANGELOG.md](https://github.com/jeanbmar/s3-sync-client/blob/master/CHANGELOG.md).

## Benchmark {#benchmark dir="auto" tabindex="-1"}

[](#benchmark){#user-content-benchmark aria-label="Permalink: Benchmark"}

**AWS CLI `s3 sync` for Node.js** has been developed to solve the S3 sync limitations of the existing GitHub repo and NPM modules.

Most of the existing repo and NPM modules suffer one or more of the following limitations:

-   requires AWS CLI to be installed
-   uses Etag to perform file comparison (Etag should be considered an opaque field and shouldn\'t be used)
-   limits S3 bucket object listing to 1000 objects
-   supports syncing local to bucket, but doesn\'t support syncing bucket to local
-   doesn\'t support multipart uploads
-   uses outdated dependencies
-   is unmaintained

The following JavaScript modules suffer at least one of the limitations:

-   <https://github.com/guerrerocarlos/aws-cli-s3-sync>
-   <https://github.com/thousandxyz/s3-lambo>
-   <https://github.com/Quobject/aws-cli-js>
-   <https://github.com/auth0/node-s3-client>
-   <https://github.com/andrewrk/node-s3-client>
-   <https://github.com/hughsk/s3-sync>
-   <https://github.com/issacg/s3sync>
