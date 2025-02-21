# SergkeiM/vite-plugin-s3 (github.com)

<https://github.com/SergkeiM/vite-plugin-s3>

## Description

Allows you to upload files to S3. Contribute to SergkeiM/vite-plugin-s3 development by creating an account on GitHub.

## Quote

> Allows you to upload files to S3

## Tags

#s3 #vite #vite-plugin #TypeScript

## Content

# GitHub - SergkeiM/vite-plugin-s3: Allows you to upload files to S3 {#github---sergkeimvite-plugin-s3-allows-you-to-upload-files-to-s3 .reader-title}

SergkeiM

------------------------------------------------------------------------

\
S3 compatible file uploader Plugin for Vite

[![NPM version](https://camo.githubusercontent.com/ba5e537b26b756371f8974449c86c35c00e27b8f0ed0e0db08ece996e04c63dd/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f4066726f787a2f766974652d706c7567696e2d73333f636f6c6f723d333341364238266c6162656c3d){canonical-src="https://img.shields.io/npm/v/@froxz/vite-plugin-s3?color=33A6B8&label="}](https://www.npmjs.com/package/@froxz/vite-plugin-s3){rel="nofollow"}
[![NPM Downloads](https://camo.githubusercontent.com/b6aa948af81b64dcdf2cd10f1d2af1a7d38780c3e6f51e06248eb4b86f8f7a19/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f4066726f787a2f766974652d706c7567696e2d73333f636f6c6f723d343736353832266c6162656c3d){canonical-src="https://img.shields.io/npm/dm/@froxz/vite-plugin-s3?color=476582&label="}](https://www.npmjs.com/package/@froxz/vite-plugin-s3){rel="nofollow"}\
[![GitHub stars](https://camo.githubusercontent.com/9f6490b00638b33f012e6750502b2438e0dd552270c9f618e3a84fc6ed05c408/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f536572676b65694d2f766974652d706c7567696e2d73333f7374796c653d736f6369616c){canonical-src="https://img.shields.io/github/stars/SergkeiM/vite-plugin-s3?style=social"}](https://github.com/SergkeiM/vite-plugin-s3)

## 🚀 Features {#features dir="auto" tabindex="-1"}

[](#-features){#user-content--features aria-label="Permalink: 🚀 Features"}

-   🦾 **Type Strong**: written in [TypeScript](https://www.typescriptlang.org/){rel="nofollow"}
-   ⚡ **S3 Compatible**: Support any S3 compatible provider (AWS, DO Spaces\...)
-   ✨ **Uploads any files**: can upload any files or directory not just build folder

## 📦 Install {#install dir="auto" tabindex="-1"}

[](#-install){#user-content--install aria-label="Permalink: 📦 Install"}

    $ npm i @froxz/vite-plugin-s3

## 🦄 Usage {#usage dir="auto" tabindex="-1"}

[](#-usage){#user-content--usage aria-label="Permalink: 🦄 Usage"}

> `uploadOptions` default to `ACL: 'public-read'` so you may need to override if you have other needs.

Add `vite-plugin-s3` plugin to `vite.config.js / vite.config.ts` and configure it:

    import { defineConfig } from 'vite'
    import { ViteS3 } from '@froxz/vite-plugin-s3'

    export default defineConfig({
      plugins: [
        ViteS3(!!process.env.UPLOAD_ENABLED, {
          basePath: '/build',
          clientConfig: {
            credentials: {
              accessKeyId: '',
              secretAccessKey: '',
            },
            region: 'eu-west-2'
          },
          uploadOptions: {
            Bucket: 'my-bucket'
          }
        })
      ]
    })

## 👀 Options {#options dir="auto" tabindex="-1"}

[](#-options){#user-content--options aria-label="Permalink: 👀 Options"}

> `enabled/disable`: This setting can be used to disable or enable the uploading of assets (In addition Plugin is disabled in SSR and non build run)

  Option            Description                                                 Type                                                                                                                                            Default
  ----------------- ----------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------
  `exclude`         A Pattern to match for excluded content                     `string,RegExp,Function,Array`                                                                                                                  `null`
  `include`         A Pattern to match for included content                     `string,RegExp,Function,Array`                                                                                                                  `null`
  `clientConfig`    The configuration interface of S3Client class constructor   [S3ClientConfig](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/s3clientconfig.html){rel="nofollow"}       `required`
  `uploadOptions`   `PutObjectRequest` options except `Body` and \`Key\'        [PutObjectRequest](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/putobjectrequest.html){rel="nofollow"}   `required`
  `basePath`        Namespace of uploaded files on S3                           `string`                                                                                                                                        `null`
  `directory`       Directory to upload                                         `string`                                                                                                                                        [build.outDir](https://vitejs.dev/config/build-options.html#build-outdir){rel="nofollow"}

#### Advanced `include` and `exclude rules` {#advanced-include-and-exclude-rules dir="auto" tabindex="-1"}

[](#advanced-include-and-exclude-rules){#user-content-advanced-include-and-exclude-rules aria-label="Permalink: Advanced include and exclude rules"}

`include` and `exclude` in addition to a RegExp you can pass a function which will be called with the path as its first argument. Returning a truthy value will match the rule. You can also pass an Array of rules, all of which must pass for the file to be included or excluded.

    import { defineConfig } from 'vite'
    import { ViteS3 } from '@froxz/vite-plugin-s3'
    import isGitIgnored from 'is-gitignored'
    // Up to you how to handle this
    var isPathOkToUpload = function(path) {
        return require('my-projects-publishing-rules').checkFile(path)
    }
    export default defineConfig({
        plugins: [
            new ViteS3(!!process.env.UPLOAD_ENABLED, {
                // Only upload css and js and only the paths that our rules database allows
                include: [
                    /.*\.(css|js)/,
                    function(path) { isPathOkToUpload(path) }
                ],
                // function to check if the path is gitignored
                exclude: isGitIgnored,
                clientConfig: {
                    credentials: {
                        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                    },
                    region: 'eu-west-2'
                },
                uploadOptions: {
                    Bucket: 'my-bucket'
                }
            })
        ]
    })

## 💧 [DigitalOcean](https://m.do.co/c/1b7cfb2128b0){rel="nofollow"} Spaces Object Storage example {#digitalocean-spaces-object-storage-example dir="auto" tabindex="-1"}

[](#-digitalocean-spaces-object-storage-example){#user-content--digitalocean-spaces-object-storage-example aria-label="Permalink: 💧 DigitalOcean Spaces Object Storage example"}

    import { defineConfig } from 'vite'
    import { ViteS3 } from '@froxz/vite-plugin-s3'
    export default defineConfig({
        plugins: [
            new ViteS3(!!process.env.UPLOAD_ENABLED, {
                clientConfig: {
                    credentials: {
                        accessKeyId: process.env.DO_ACCESS_KEY_ID,
                        secretAccessKey: process.env.DO_SECRET_ACCESS_KEY,
                    },
                    endpoint: 'https://fra1.digitaloceanspaces.com',
                    region: 'fra1'
                },
                uploadOptions: {
                    Bucket: 'my-bucket'
                }
            })
        ]
    })

## 🙏 Thanks {#thanks dir="auto" tabindex="-1"}

[](#-thanks){#user-content--thanks aria-label="Permalink: 🙏 Thanks"}

Thanks to [MikaAK](https://github.com/MikaAK) for [s3-plugin-webpack](https://github.com/MikaAK/s3-plugin-webpack) used as inspiration fro this plugin

## 📄 License {#license dir="auto" tabindex="-1"}

[](#-license){#user-content--license aria-label="Permalink: 📄 License"}

MIT License [Sergkei Melingk](https://github.com/SergkeiM/vite-plugin-s3/blob/main/LICENSE)

[![DigitalOcean Referral Badge](https://camo.githubusercontent.com/3204d3d37f38339dac08db550d9ed80728743700a87c9af81a5bffed56018f07/68747470733a2f2f7765622d706c6174666f726d732e73666f322e6469676974616c6f6365616e7370616365732e636f6d2f5757572f4261646765253230322e737667){canonical-src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg"}](https://www.digitalocean.com/?refcode=1b7cfb2128b0&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge){rel="nofollow"}
