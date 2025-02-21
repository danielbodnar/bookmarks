# Subwaytime/vite-aliases (github.com)

<https://github.com/Subwaytime/vite-aliases>

## Description

Alias auto generation for Vite. Contribute to Subwaytime/vite-aliases development by creating an account on GitHub.

## Quote

> Alias auto generation for Vite

## Tags

#typescript #vite #vite-aliases #vite-plugin #vue3 #TypeScript

## Content

# GitHub - Subwaytime/vite-aliases: Alias auto generation for Vite {#github---subwaytimevite-aliases-alias-auto-generation-for-vite .reader-title}

Subwaytime

------------------------------------------------------------------------

## vite-aliases {#vite-aliases dir="auto" tabindex="-1"}

[](#vite-aliases){#user-content-vite-aliases aria-label="Permalink: vite-aliases"}

Alias auto generation for Vite 6

[![](https://camo.githubusercontent.com/91b64bbfbc9a8534e0258c82675f6006ae1b1fde0a62bb27d010e69d883ec250/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f766974652d616c69617365733f636f6c6f723d323232267374796c653d666c61742d737175617265){canonical-src="https://img.shields.io/npm/v/vite-aliases?color=222&style=flat-square"}](https://www.npmjs.com/package/vite-aliases){rel="nofollow"}

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

Install

Add it to `vite.config.js`

    // vite.config.js
    import { ViteAliases } from 'vite-aliases'

    export default {
      plugins: [
        ViteAliases()
      ]
    };

Add this to `package.json` (Plugin is only available for ESM)

That\'s it!

\
Based on your Folderstructure, it will now automatically generate all needed aliases.\
You can configure it to any desired Depth, but it is recommend to stay on the first Level!\
Furthermore it will use your native OS filesystem, so it works on Linux, Mac, Windows and other OS.

\
This structure:

    src
      assets
      components
      pages
      store
      utils

will generate the following:

    [
      {
        find: '@',
        replacement: '${your_project_path}/src'
      },
      {
        find: '@assets',
        replacement: '${your_project_path}/src/assets'
      },
      {
        find: '@components',
        replacement: '${your_project_path}/src/components'
      },
      {
        find: '@pages',
        replacement: '${your_project_path}/src/pages'
      },
      {
        find: '@store',
        replacement: '${your_project_path}/src/store'
      },
      {
        find: '@utils',
        replacement: '${your_project_path}/src/utils'
      },
    ]

## Best Practice {#best-practice dir="auto" tabindex="-1"}

[](#best-practice){#user-content-best-practice aria-label="Permalink: Best Practice"}

`vite-aliases` is meant to simply take the first Layer of your folders and turn it into useful Shortcuts.\
Therefore i advise you to use the default Configuration and not use folders with the same name, otherwise it will create an Error.

If however you need duplicate Foldernames, enable `adjustDuplicates`.\
This will turn the entire Filepath of said duplicate into the alias itself, like shown in the Example below.

Example:

    `src/components` -> `@components`
    `src/pages/components` -> `@pagesComponents`
    `src/test/new/partials/components` -> `@testNewPartialsComponents`

and so on..

## Configuration {#configuration dir="auto" tabindex="-1"}

[](#configuration){#user-content-configuration aria-label="Permalink: Configuration"}

Current available options:

    ViteAliases({
      /**
      * Relative path to the project directory
      */
      dir: 'src',

      /**
      * Prefix symbol for the aliases
      */
      prefix: '~',

      /**
      * Allow searching for subdirectories
      */
      deep: true,

      /**
      * Search depthlevel for subdirectories
      */
      depth: 1,

      /**
      * Creates a Logfile
      * use `logPath` to change the location
      */
      createLog: false,

      /**
      * Path for Logfile
      */
      logPath: 'src/logs',

      /**
      * Create global project directory alias
      */
      createGlobalAlias: true,

      /**
      * Turns duplicates into camelCased path aliases
      */
      adjustDuplicates: false,

      /**
      * Used paths in JS/TS configs will now be relative to baseUrl
      */
      useAbsolute: false,

      /**
      * Adds seperate index paths
      * approach created by @davidohlin
      */
      useIndexes: false,

      /**
      * Generates paths in IDE config file
      * works with JS or TS
      */
      useConfig: true,

      /**
      * Override config paths
      */
      ovrConfig: false,

      /**
      * Will generate Paths in tsconfig
      * used in combination with `useConfig`
      * Typescript will be auto detected
      */
      dts: false,

      /**
      * Disables any terminal output
      */
      silent: true,

      /**
      * Root path of Vite project
      */
      root: process.cwd()
    });

## Thanks {#thanks dir="auto" tabindex="-1"}

[](#thanks){#user-content-thanks aria-label="Permalink: Thanks"}

Thanks to [\@brattonross](https://github.com/brattonross) and [\@antfu](https://github.com/antfu),
due to this tiny library beeing inspired by both projects:

[vite-plugin-voie](https://github.com/vamplate/vite-plugin-voie)

[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

MIT License © 2020-PRESENT [Leon Langer](https://github.com/subwaytime)
