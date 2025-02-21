# zheeeng/vite-plugin-shared-modules (github.com)

<https://github.com/zheeeng/vite-plugin-shared-modules>

## Description

Share node_modules in monorepos. Best friend for pnpm&#39;s module isolation and module singletons sharing. - zheeeng/vite-plugin-shared-modules

## Quote

> Share node_modules in monorepos. Best friend for pnpm's module isolation and module singletons sharing.

## Tags

# #TypeScript

## Content

# GitHub - zheeeng/vite-plugin-shared-modules: Share node_modules in monorepos. Best friend for pnpm\'s module isolation and module singletons sharing. {#github---zheeengvite-plugin-shared-modules-share-node_modules-in-monorepos.-best-friend-for-pnpms-module-isolation-and-module-singletons-sharing. .reader-title}

zheeeng

------------------------------------------------------------------------

## vite-plugin-shared-modules {#vite-plugin-shared-modules dir="auto" tabindex="-1"}

[](#vite-plugin-shared-modules){#user-content-vite-plugin-shared-modules aria-label="Permalink: vite-plugin-shared-modules"}

> Share node_modules in monorepos. Best friend for pnpm\'s module isolation and module singletons sharing.

Use it as simple as:

    // vite.config.ts
    import { defineConfig } from 'vite';
    import sharedModulesPlugin from 'vite-plugin-shared-modules'
    import tsconfigPaths from 'rollup-plugin-tsconfig-paths';

    export default defineConfig({
      plugins: [
        sharedModulesPlugin({
          packageName: '@monorepo/shared',
        }),
        // necessary for resolving modules in `node_modules`
        tsconfigPaths({
          // specify the project's tsconfig.json, which configured paths mapping.
          tsConfigPath: join(__dirname, '../../tsconfig.json')
        }),
      ]
    });

then you can import singletons by this way:

    import foo from '@monorepo/shared/foo'
    import bar from '@monorepo/shared/bar'

is equivalent to

    import foo from '@monorepo/shared/node_modules/foo'
    import bar from '@monorepo/shared/node_modules/bar'

moreover for getting type-safe, add tsconfig paths mapping:

    // tsconfig.json
    {
        "compilerOptions": {
            "baseUrl": ".",
                "paths": {
                    "@monorepo/shared/*": ["./packages/shared/node_modules/*", "./packages/shared/node_modules/@types/*"]
                }
        }
    }

the example above we assume the package `@monorepo/shared` is located under `./packages/shared`.

------------------------------------------------------------------------

## Full Option {#full-option dir="auto" tabindex="-1"}

[](#full-option){#user-content-full-option aria-label="Permalink: Full Option"}

The plugin options signatures:

    export type SharedModulesPluginOption = {
      packageName: string,
      subpath?: string,
      nodeModules?: string,
      sourceMap?: boolean,
    }

The default options:

    export const defaultSharedModules = {
      subpath: '',
      nodeModules: 'node_modules',
      sourceMap: true,
    }
