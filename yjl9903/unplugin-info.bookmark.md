# yjl9903/unplugin-info (github.com)

<https://github.com/yjl9903/unplugin-info>

## Description

Export build information as a virutal module. Contribute to yjl9903/unplugin-info development by creating an account on GitHub.

## Quote

> Export build information as a virutal module

## Tags

#astro #ci #git #plugin #unplugin #vite #vite-plugin #webpack #TypeScript

## Content

# GitHub - yjl9903/unplugin-info: Export build information as a virutal module {#github---yjl9903unplugin-info-export-build-information-as-a-virutal-module .reader-title}

yjl9903

------------------------------------------------------------------------

## unplugin-info {#unplugin-info dir="auto" tabindex="-1"}

[](#unplugin-info){#user-content-unplugin-info aria-label="Permalink: unplugin-info"}

[![Demo](https://camo.githubusercontent.com/a865346fac10a359ce568e2ec59106217e1da350d9c621752f52b30e0dfbb6e6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f756e706c7567696e2d2d696e666f2d64656d6f2d303043434141){canonical-src="https://img.shields.io/badge/unplugin--info-demo-00CCAA"}](https://yjl9903.github.io/unplugin-info/){rel="nofollow"}
[![version](https://camo.githubusercontent.com/952351453c5b63e401fb23f67ac3bf675e700b330d0437104c504ae8c65ca751/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f756e706c7567696e2d696e666f3f6c6162656c3d756e706c7567696e2d696e666f){canonical-src="https://img.shields.io/npm/v/unplugin-info?label=unplugin-info"}](https://www.npmjs.com/package/unplugin-info){rel="nofollow"}
[![install size](https://camo.githubusercontent.com/17fe9541cd46680c387e5dd5697475a4382cb4ba7563f28565027748a6960439/68747470733a2f2f7061636b61676570686f6269612e636f6d2f62616467653f703d756e706c7567696e2d696e666f){canonical-src="https://packagephobia.com/badge?p=unplugin-info"}](https://packagephobia.com/result?p=unplugin-info){rel="nofollow"}
[![GitHub License](https://camo.githubusercontent.com/e9e1b5676233752baa8afc4a6e7cbbc60e0f316f307b6213933c9bf982ede7d7/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f796a6c393930332f756e706c7567696e2d696e666f){canonical-src="https://img.shields.io/github/license/yjl9903/unplugin-info"}](https://github.com/yjl9903/unplugin-info/blob/main/LICENSE)
[![CI](https://github.com/yjl9903/unplugin-info/actions/workflows/ci.yml/badge.svg)](https://github.com/yjl9903/unplugin-info/actions/workflows/ci.yml)

Export build information as virutal module.

This plugin helps you add **build timestamp** / **commit SHA** / **CI environment** / `package.json` / \... to your application. So you can easily check whether the production version meets your expectations, or config your application.

> **Migration from v0 to v1**
>
> -   Move git related information from `~build/info` to `~build/git`
> -   Move CI related information from `~build/info` to `~build/ci`
> -   Remove `commitsSinceLastTag` from `~build/git`

## Installation {#installation dir="auto" tabindex="-1"}

[](#installation){#user-content-installation aria-label="Permalink: Installation"}

Vite

\

    // vite.config.ts

    import Info from 'unplugin-info/vite';

    export default defineConfig({
      plugins: [
        Info()
      ]
    });

Full example is located at [examples/vite](https://github.com/yjl9903/unplugin-info/blob/main/examples/vite).

Rollup

\

    // rollup.config.js

    import Info from 'unplugin-info/rollup';

    export default {
      plugins: [
        Info()
      ]
    };

Webpack

\

    // webpack.config.js

    module.exports = {
      /* ... */
      plugins: [
        require('unplugin-info/webpack')()
      ]
    };

Full example is located at [examples/webpack](https://github.com/yjl9903/unplugin-info/blob/main/examples/webpack).

Nuxt

\

    // nuxt.config.ts

    export default defineNuxtConfig({
      modules: ['unplugin-info/nuxt'],
      info: {
        // Your unplugin-info options ...
      }
    });

Full example is located at [examples/nuxt](https://github.com/yjl9903/unplugin-info/blob/main/examples/nuxt).

Vue CLI

\

    // vue.config.js

    module.exports = {
      configureWebpack: {
        plugins: [
          require('unplugin-info/webpack')()
        ]
      }
    };

Quasar

\

    // quasar.conf.js [Vite]
    module.exports = {
      vitePlugins: [
        [
          'unplugin-info/vite',
          {
            /* options */
          }
        ]
      ]
    };

    // quasar.conf.js [Webpack]
    const Info = require('unplugin-info/webpack');

    module.exports = {
      build: {
        chainWebpack(chain) {
          chain.plugin('unplugin-info').use(
            Info()
          );
        }
      }
    };

esbuild

\

    // esbuild.config.js
    import { build } from 'esbuild';

    build({
      /* ... */
      plugins: [
        require('unplugin-info/esbuild')({
          /* options */
        }),
      ],
    });

Astro

\

    // astro.config.mjs

    import Info from 'unplugin-info/astro';

    export default defineConfig({
      integrations: [
        Info()
      ],
    });

### TypeScript {#typescript dir="auto" tabindex="-1"}

[](#typescript){#user-content-typescript aria-label="Permalink: TypeScript"}

To make the TypeScript work, you can add `unplugin-info/client` to your corresponding `tsconfig.json`.

    {
      "compilerOptions": {
        // ...
        "types": [
          "unplugin-info/client"
        ],
      },
      // ...
    }

Or you can add TypeScript [triple-slash directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html){rel="nofollow"} to your `.d.ts` (i.e. for projects initialized by Vite, it may be `src/env.d.ts`).

    // Your .d.ts file

    /// <reference types="unplugin-info/client" />

Or if you did some advanced modification (see below), you can just copy and paste [client.d.ts](https://github.com/yjl9903/unplugin-info/blob/main/client.d.ts) to your project, and then do anything you want.

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

`unplugin-info` creates several virtual modules, `~build/time`, `~build/git`, `~build/ci`, `~build/console`, `~build/meta`, `~build/env`, and `~build/package`.

You can just import these modules as usual, and do anything with them. Common use cases may be like:

    // main.ts

    import now from '~build/time'
    import { sha } from '~build/git'

    // console log the build info
    console.log(`Build ${sha} at ${now}`)

    // App.tsx

    import now from '~build/time'

    // Render it in your app
    function App() {
      return <span>{now.toLocaleString()}</span>
    }

### \~build/time {#buildtime dir="auto" tabindex="-1"}

[](#buildtime){#user-content-buildtime aria-label="Permalink: ~build/time"}

It exports the timestamp when the vite started.

    import now from '~build/time'

    console.log(now)
    // There will be a log like "Fri Jun 24 2022 16:30:30 GMT+0800 (中国标准时间)"

### \~build/git {#buildgit dir="auto" tabindex="-1"}

[](#buildgit){#user-content-buildgit aria-label="Permalink: ~build/git"}

It exports the infomation about the current git repo, which is powered by [simple-git](https://www.npmjs.com/package/simple-git){rel="nofollow"}.

    import {
      github,
      sha,
      abbreviatedSha,
      tag,
      lastTag,
      committer,
      committerEmail,
      committerDate,
      author,
      authorEmail,
      authorDate,
      commitMessage
    } from '~build/git';

    // ...

Note

From `unplugin-info@0.6.0`, the original virtual module called `~build/info` will be renamed to `~build/git`, and the CI/CD related information will be moved to another virtual module called `~build/ci`.

You can even **custom or override the exported git information**.

All the functions will be executed during the generation of `~build/git`, and the return result with its corresponding field name will be merged into `~build/git`. The following example adds another `isClean` field to `~build/git`.

    // vite.config.ts

    import Info from 'unplugin-info/vite';

    export default defineConfig({
      plugins: [
        Info({
          git: {
            // Gets whether this represents a clean working branch.
            isClean: async (git) => {
              const status = await git.status()
              return status.isClean()
            }
          }
        })
      ]
    });

Full example is located at [examples/vite](https://github.com/yjl9903/unplugin-info/blob/main/examples/vite/vite.config.ts).

### \~build/ci {#buildci dir="auto" tabindex="-1"}

[](#buildci){#user-content-buildci aria-label="Permalink: ~build/ci"}

It exports the current CI/CD environment information, which is powered by [ci-info](https://github.com/watson/ci-info).

    import { isCI, isPR, name } from '~build/ci'

### \~build/console {#buildconsole dir="auto" tabindex="-1"}

[](#buildconsole){#user-content-buildconsole aria-label="Permalink: ~build/console"}

It will print some helpful logs in your browser.

### \~build/meta {#buildmeta dir="auto" tabindex="-1"}

[](#buildmeta){#user-content-buildmeta aria-label="Permalink: ~build/meta"}

It exports some meta data from the options of the plugin.

    // vite.config.ts
    export default defineConfig({
      plugins: [
        BuildInfo({
          meta: { message: 'This is set from vite.config.ts' }
        })
      ]
    })

You can also generate meta data lazily.

    // vite.config.ts
    export default defineConfig({
      plugins: [
        BuildInfo({
          meta: async () => ({ message: 'This is set from vite.config.ts' })
        })
      ]
    })

Then you can import them in your app.

    import { message } from '~build/meta'

    console.log(message)
    // This is set from vite.config.ts

Note

Meta data will be serialized to JSON format, so you should gen it in you `vite.config.ts` and pass the result object.

To get TypeScript support, you can add type declaration in your `env.d.ts` (It is include in the [official Vite project template](https://vitejs.dev/guide/#scaffolding-your-first-vite-project){rel="nofollow"}).

    declare module '~build/meta' {
      export const message: string;
    }

Full example is located at [examples/vite](https://github.com/yjl9903/unplugin-info/blob/main/examples/vite/vite.config.ts).

### \~build/env {#buildenv dir="auto" tabindex="-1"}

[](#buildenv){#user-content-buildenv aria-label="Permalink: ~build/env"}

Note

Now it only suports for Vite.

It exports some environment data from the options of the plugin.

    // vite.config.ts
    export default defineConfig({
      plugins: [
        BuildInfo({
          env: { BUILD_MESSAGE: 'This is a default value set from vite.config.ts' }
        })
      ]
    })

Compared with `~build/meta`, `~build/env` is targeted at accessing environment variables for the SSR runtime (like Nuxt, Remix, Astro, and so on).

Then you can import them in your Vite app.

    import { BUILD_MESSAGE } from '~build/env'

    console.log(BUILD_MESSAGE)

In the client-side, this will always output `This is a default value set from vite.config.ts`.

But in the server-side, the output log is determined by the corresponding environment variable `process.env.BUILD_MESSAGE`.

To get TypeScript support, you can add type declaration in your `env.d.ts` (It is include in the [official Vite project template](https://vitejs.dev/guide/#scaffolding-your-first-vite-project){rel="nofollow"}).

    declare module '~build/env' {
      export const BUILD_MESSAGE: string;
    }

### \~build/package {#buildpackage dir="auto" tabindex="-1"}

[](#buildpackage){#user-content-buildpackage aria-label="Permalink: ~build/package"}

It exports the information of the current `package.json`.

    import { name, version } from '~build/package';

You can also **control which fields should be exported**. By default, we only export fields name, version, description, keywords, license, author from your package.json.

    // vite.config.ts

    import Info from 'unplugin-info/vite';

    export default defineConfig({
      plugins: [
        Info({
          package: {
            dependencies: true
          }
        })
      ]
    });

Full example is located at [examples/vite](https://github.com/yjl9903/unplugin-info/blob/main/examples/vite/vite.config.ts).

## Relationship with [vite-plugin-info](https://www.npmjs.com/package/vite-plugin-info){rel="nofollow"} {#relationship-with-vite-plugin-info dir="auto" tabindex="-1"}

[](#relationship-with-vite-plugin-info){#user-content-relationship-with-vite-plugin-info aria-label="Permalink: Relationship with vite-plugin-info"}

This pacakge was initially called [vite-plugin-info](https://www.npmjs.com/package/vite-plugin-info){rel="nofollow"}. It has been refactored using [unplugin](https://www.npmjs.com/package/unplugin){rel="nofollow"} to support additional tools, including Webpack and so on.

We recommend migrating from [vite-plugin-info](https://www.npmjs.com/package/vite-plugin-info){rel="nofollow"} to [unplugin-info](https://www.npmjs.com/package/unplugin-info){rel="nofollow"}, as [unplugin-info](https://www.npmjs.com/package/unplugin-info){rel="nofollow"} will continue to be maintained and new features will be added.

However, you can still use [vite-plugin-info](https://www.npmjs.com/package/vite-plugin-info){rel="nofollow"}, as it works fine. Thanks to Vite\'s compatibility, and the source code of [vite-plugin-info](https://www.npmjs.com/package/vite-plugin-info){rel="nofollow"} can be founded [here](https://github.com/yjl9903/unplugin-info/tree/vite-plugin-info).

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

MIT License © 2023 [XLor](https://github.com/yjl9903)
