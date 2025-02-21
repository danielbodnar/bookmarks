# aleclarson/vite-tsconfig-paths (github.com)

<https://github.com/aleclarson/vite-tsconfig-paths>

## Description

Support for TypeScript&#39;s path mapping in Vite. Contribute to aleclarson/vite-tsconfig-paths development by creating an account on GitHub.

## Quote

> Support for TypeScript's path mapping in Vite

## Tags

# #TypeScript

## Content

# GitHub - aleclarson/vite-tsconfig-paths: Support for TypeScript\'s path mapping in Vite {#github---aleclarsonvite-tsconfig-paths-support-for-typescripts-path-mapping-in-vite .reader-title}

aleclarson

------------------------------------------------------------------------

👋 Check out [Radashi](https://github.com/radashi-org/radashi), my latest endeavor.

[![Radashi](https://github.com/radashi-org/radashi/raw/main/.github/img/notice.png){width="100%"}](https://github.com/radashi-org/radashi)

------------------------------------------------------------------------

## vite-tsconfig-paths {#vite-tsconfig-paths dir="auto" tabindex="-1"}

[](#vite-tsconfig-paths){#user-content-vite-tsconfig-paths aria-label="Permalink: vite-tsconfig-paths"}

[![npm](https://camo.githubusercontent.com/4991f32df1bfbef2b670e08e0da42783ab01a81e91aa34ca211b20ac22c15212/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f766974652d7473636f6e6669672d70617468732e737667){canonical-src="https://img.shields.io/npm/v/vite-tsconfig-paths.svg"}](https://www.npmjs.com/package/vite-tsconfig-paths){rel="nofollow"}
[![Code style: Prettier](https://camo.githubusercontent.com/754faf8c130f602a98f87fd2912a8d4b9bcf8ab623fa9ac3352853015968cdb9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d70726574746965722d6666363962342e737667){canonical-src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"}](https://github.com/prettier/prettier)

Give [`vite`](https://github.com/vitejs/vite) the ability to resolve imports using TypeScript\'s path mapping.

## Install {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: Install"}

    pnpm add -D vite-tsconfig-paths

    npm install --save-dev vite-tsconfig-paths

    yarn add -D vite-tsconfig-paths

## Setup {#setup dir="auto" tabindex="-1"}

[](#setup){#user-content-setup aria-label="Permalink: Setup"}

1.  Ensure the project either has `"type": "module"` set or that the Vite config is renamed to `vite.config.mjs` / `vite.config.mts` depending on whether TypeScript is used

2.  Inject `vite-tsconfig-paths` in the Vite config

        import { defineConfig } from 'vite'
        import tsconfigPaths from 'vite-tsconfig-paths'

        export default defineConfig({
          plugins: [tsconfigPaths()],
        })

### ⚠️ CSS imports are not supported. {#css-imports-are-not-supported. dir="auto" tabindex="-1"}

[](#️-css-imports-are-not-supported){#user-content-️-css-imports-are-not-supported aria-label="Permalink: ⚠️ CSS imports are not supported."}

Due to a Vite limitation, CSS files (and CSS dialects) cannot be resolved with this plugin.

This is being tracked in [#30](https://github.com/aleclarson/vite-tsconfig-paths/issues/30){hovercard-url="/aleclarson/vite-tsconfig-paths/issues/30/hovercard" hovercard-type="issue"}.

### ⚠️ Non-TypeScript modules need special configuration. {#non-typescript-modules-need-special-configuration. dir="auto" tabindex="-1"}

[](#️-non-typescript-modules-need-special-configuration){#user-content-️-non-typescript-modules-need-special-configuration aria-label="Permalink: ⚠️ Non-TypeScript modules need special configuration."}

To enable path resolution in non-TypeScript modules (e.g. `.vue`, `.svelte`, `.mdx`), you must set the `allowJs` option to true in your `tsconfig.json` file.

    {
      "compilerOptions": {
        "allowJs": true
      }
    }

**Alternative:** If you prefer to avoid `allowJs` or it didn\'t help, passing `loose: true` to the plugin constructor should work.

    tsconfigPaths({ loose: true })

### ⚠️ TSConfigs are not watched. {#tsconfigs-are-not-watched. dir="auto" tabindex="-1"}

[](#️-tsconfigs-are-not-watched){#user-content-️-tsconfigs-are-not-watched aria-label="Permalink: ⚠️ TSConfigs are not watched."}

You should restart Vite when you make changes to a tsconfig file; particularly these settings: `include`, `exclude`, `compilerOptions.paths`, and `compilerOptions.baseUrl`.

This is being tracked in [#17](https://github.com/aleclarson/vite-tsconfig-paths/issues/17){hovercard-url="/aleclarson/vite-tsconfig-paths/issues/17/hovercard" hovercard-type="issue"} (contributions welcome).

## Plugin Options {#plugin-options dir="auto" tabindex="-1"}

[](#plugin-options){#user-content-plugin-options aria-label="Permalink: Plugin Options"}

You pass these options when calling the plugin constructor in your Vite config.

Warning

You should try using the plugin without *any* of these options, and only set them when you know you need them.

    import { defineConfig } from 'vite'
    import tsconfigPaths from 'vite-tsconfig-paths'

    export default defineConfig({
      plugins: [tsconfigPaths({ /* options go here */ })],
    })

#### `root: string` {#root-string dir="auto" tabindex="-1"}

[](#root-string){#user-content-root-string aria-label="Permalink: root: string"}

The directory to search for `tsconfig.json` files.

The default value of this option depends on whether `projects` is defined. If it is, then the [Vite project root](https://vitejs.dev/config/shared-options.html#root){rel="nofollow"} is used. Otherwise, Vite\'s [`searchForWorkspaceRoot`](https://vitejs.dev/guide/api-javascript.html#searchforworkspaceroot){rel="nofollow"} function is used.

#### `projects: string[]` {#projects-string dir="auto" tabindex="-1"}

[](#projects-string){#user-content-projects-string aria-label="Permalink: projects: string[]"}

If you have an esoteric setup, you *might* need this option to specify where your tsconfig files are located. The paths within are relative to the `root` option.

If defined, the `root` directory won\'t be searched for tsconfig files. You should **always** try using just the `root` option first, because this option is more brittle.

#### `loose: boolean` {#loose-boolean dir="auto" tabindex="-1"}

[](#loose-boolean){#user-content-loose-boolean aria-label="Permalink: loose: boolean"}

Disable strictness that limits path resolution to TypeScript and JavaScript importers. In other words, when `loose: true` is used, any file that gets transpiled into JavaScript will have its imports resolved by this plugin.

For example, this is useful if you want imports in Vue templates to be resolved, but don\'t want to use `allowJs` in your tsconfig.

#### `parseNative: boolean` {#parsenative-boolean dir="auto" tabindex="-1"}

[](#parsenative-boolean){#user-content-parsenative-boolean aria-label="Permalink: parseNative: boolean"}

Enable use of the [`tsconfck.parseNative`](https://github.com/dominikg/tsconfck/blob/main/docs/api.md#parsenative) function, which delegates the loading of tsconfig files to the TypeScript compiler. You\'ll probably never need this, but I added it just in case.

Warning

This option can slow down Vite\'s startup time by as much as 600ms, due to the size of the TypeScript compiler. Only use it when necessary.

#### `ignoreConfigErrors: boolean` {#ignoreconfigerrors-boolean dir="auto" tabindex="-1"}

[](#ignoreconfigerrors-boolean){#user-content-ignoreconfigerrors-boolean aria-label="Permalink: ignoreConfigErrors: boolean"}

When true, parsing errors encountered while loading tsconfig files will be ignored.

This is useful if you have a monorepo with multiple tsconfig files, and you don\'t want to see errors for the ones that aren\'t relevant to the current project.

#### `skip: (dir: string) => boolean` {#skip-dir-string-boolean dir="auto" tabindex="-1"}

[](#skip-dir-string--boolean){#user-content-skip-dir-string--boolean aria-label="Permalink: skip: (dir: string) => boolean"}

A function that determines which directories to skip when searching for tsconfig.json files.

While `.git` and `node_modules` directories are always skipped, this option allows you to skip additional directories, which is useful in large monorepos to improve performance.

## TSConfig Options {#tsconfig-options dir="auto" tabindex="-1"}

[](#tsconfig-options){#user-content-tsconfig-options aria-label="Permalink: TSConfig Options"}

### allowJs {#allowjs dir="auto" tabindex="-1"}

[](#allowjs){#user-content-allowjs aria-label="Permalink: allowJs"}

If your tsconfig file has `"allowJs": true` in it, path resolution will be expanded beyond TypeScript importers. The following extensions will have their imports resolved by this plugin: `.vue`, `.svelte`, `.mdx`, `.mjs`, `.js`, `.jsx`

If you believe another file extension should be supported by default, please open an issue or pull request.

### baseUrl {#baseurl dir="auto" tabindex="-1"}

[](#baseurl){#user-content-baseurl aria-label="Permalink: baseUrl"}

If the `baseUrl` is defined, it gets prepended to all bare imports, and its resolution will take precedence over node_modules. This is also how TypeScript does it.

Say the `baseUrl` is `../root` and you import `react`. This plugin will use `../root/react` if it exists. If not found, then `react` is resolved normally. The `baseUrl` is relative to the project root (where `tsconfig.json` lives).

### include/exclude {#includeexclude dir="auto" tabindex="-1"}

[](#includeexclude){#user-content-includeexclude aria-label="Permalink: include/exclude"}

The `include` and `exclude` tsconfig options are respected.

Internally, [globrex](https://github.com/terkelg/globrex) is used for glob matching.

## Troubleshooting {#troubleshooting dir="auto" tabindex="-1"}

[](#troubleshooting){#user-content-troubleshooting aria-label="Permalink: Troubleshooting"}

The `DEBUG` environment variable can be used to figure out why this plugin isn\'t working as you may have expected.

    DEBUG=vite-tsconfig-paths yarn vite

Also, check out the [Troubleshooting](https://github.com/aleclarson/vite-tsconfig-paths/wiki/Troubleshooting) wiki page for more guidance.
