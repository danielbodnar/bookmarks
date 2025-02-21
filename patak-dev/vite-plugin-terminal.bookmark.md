# patak-dev/vite-plugin-terminal (github.com)

<https://github.com/patak-dev/vite-plugin-terminal>

## Description

Log in the node terminal from the browser. Contribute to patak-dev/vite-plugin-terminal development by creating an account on GitHub.

## Quote

> Log in the node terminal from the browser

## Tags

# #TypeScript

## Content

# GitHub - patak-dev/vite-plugin-terminal: Log in the node terminal from the browser {#github---patak-devvite-plugin-terminal-log-in-the-node-terminal-from-the-browser .reader-title}

patak-dev

------------------------------------------------------------------------

## vite-plugin-terminal {#vite-plugin-terminal dir="auto" tabindex="-1"}

[](#vite-plugin-terminal){#user-content-vite-plugin-terminal aria-label="Permalink: vite-plugin-terminal"}

[![NPM version](https://camo.githubusercontent.com/71086bf43fa3302d5f88579222fa18facae27106151c1b670b7d631ff7e92395/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f766974652d706c7567696e2d7465726d696e616c3f636f6c6f723d613162383538266c6162656c3d){canonical-src="https://img.shields.io/npm/v/vite-plugin-terminal?color=a1b858&label="}](https://www.npmjs.com/package/vite-plugin-terminal){rel="nofollow"}

Log in the node terminal from the browser

[![](https://github.com/patak-dev/vite-plugin-terminal/raw/76fb5c2656e99a8619986be2bff5c26414273a66/vite-plugin-terminal.png)](https://github.com/patak-dev/vite-plugin-terminal/blob/76fb5c2656e99a8619986be2bff5c26414273a66/vite-plugin-terminal.png){rel="noopener noreferrer"}

[Open a playground online in StackBlitz](https://stackblitz.com/fork/github-bdbxen-madd1h?file=module.js&terminal=dev){rel="nofollow"}

## Install {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: Install"}

    npm i -D vite-plugin-terminal

Add plugin to your `vite.config.ts`:

    // vite.config.ts
    import Terminal from 'vite-plugin-terminal'

    export default {
      plugins: [
        Terminal()
      ]
    }

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

In your source code import `terminal`, and use it like you do with `console.log`.

    import { terminal } from 'virtual:terminal'

    terminal.log('Hey terminal! A message from the browser')

The terminal log calls will be removed when building the app.

## Types {#types dir="auto" tabindex="-1"}

[](#types){#user-content-types aria-label="Permalink: Types"}

There are two ways of telling typescript about the types of the virtual import:

-   In your `global.d.ts` file add the following line:

        /// <reference types="vite-plugin-terminal/client" />

-   In your `tsconfig.json` add the following to your `compilerOptions.types` array:

        {
          // ...
          "compilerOptions": {
            // ...
            "types": [
              "vite-plugin-terminal/client"
            ],
          },
        }

## API {#api dir="auto" tabindex="-1"}

[](#api){#user-content-api aria-label="Permalink: API"}

Supported methods:

-   `terminal.log(obj1 [, obj2, ..., objN])`
-   `terminal.info(obj1 [, obj2, ..., objN])`
-   `terminal.warn(obj1 [, obj2, ..., objN])`
-   `terminal.error(obj1 [, obj2, ..., objN])`
-   `terminal.assert(assertion, obj1 [, obj2, ..., objN])`
-   `terminal.group()`
-   `terminal.groupCollapsed()`
-   `terminal.groupEnd()`
-   `terminal.table(obj)`
-   `terminal.time(id)`
-   `terminal.timeLog(id, obj1 [, obj2, ..., objN])`
-   `terminal.timeEnd(id)`
-   `terminal.clear()`
-   `terminal.count(label)`
-   `terminal.countReset(label)`
-   `terminal.dir(obj)`
-   `terminal.dirxml(obj)`

These methods will work but use the console

-   `terminal.trace(...args: any[])`
-   `terminal.profile(...args: any[])`
-   `terminal.profileEnd(...args: any[])`

## Redirect `console` logs to the terminal {#redirect-console-logs-to-the-terminal dir="auto" tabindex="-1"}

[](#redirect-console-logs-to-the-terminal){#user-content-redirect-console-logs-to-the-terminal aria-label="Permalink: Redirect console logs to the terminal"}

If you want the standard `console` logs to appear in the terminal, you can use the `console: 'terminal'` option in your `vite.config.ts`:

    // vite.config.ts
    import Terminal from 'vite-plugin-terminal'

    export default {
      plugins: [
        Terminal({
          console: 'terminal'
        })
      ]
    }

In this case, you don\'t need to import the virtual terminal to use the plugin.

    console.log('Hey terminal! A message from the browser')

You can also overwrite it in your `index.html` head manually in case you would like more control.

      <script type="module">
        // Redirect console logs to the terminal
        import terminal from 'virtual:terminal'
        globalThis.console = terminal
      </script>

Check the [Console playground](https://github.com/patak-dev/vite-plugin-terminal/blob/main/playground/console) for a full example.

## Log in both the terminal and the console {#log-in-both-the-terminal-and-the-console dir="auto" tabindex="-1"}

[](#log-in-both-the-terminal-and-the-console){#user-content-log-in-both-the-terminal-and-the-console aria-label="Permalink: Log in both the terminal and the console"}

You can use the `output` option to define where the `terminal` logs should be logged. Accepts `terminal`, `console`, or an array with both.

    // vite.config.ts
    import Terminal from 'vite-plugin-terminal'

    export default {
      plugins: [
        Terminal({
          output: ['terminal', 'console']
        })
      ]
    }

## Examples {#examples dir="auto" tabindex="-1"}

[](#examples){#user-content-examples aria-label="Permalink: Examples"}

-   **[Basic](https://stackblitz.com/fork/github-bdbxen-madd1h?file=module.js&terminal=dev){rel="nofollow"}** - Playground using every available method.
-   **[Console](https://stackblitz.com/fork/github/patak-dev/vite-plugin-terminal/tree/main/playground/console){rel="nofollow"}** - Redirect standard console logs to the terminal.
-   **[Auto Import](https://stackblitz.com/fork/github-ejosid?file=main.ts&terminal=dev){rel="nofollow"}** - Use [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) to make `terminal` global in your app.
-   **[Vue](https://stackblitz.com/fork/github-gzl5vm?file=src%2FApp.vue&terminal=dev){rel="nofollow"}** - Example of logging to the terminal from a Vue App.

## Options {#options dir="auto" tabindex="-1"}

[](#options){#user-content-options aria-label="Permalink: Options"}

### `console` {#console dir="auto" tabindex="-1"}

[](#console){#user-content-console aria-label="Permalink: console"}

Type: `'terminal' | undefined`\
Default: `undefined`\

Set to `'terminal'` to make `globalThis.console` equal to the `terminal` object in your app.

### `output` {#output dir="auto" tabindex="-1"}

[](#output){#user-content-output aria-label="Permalink: output"}

Type: `'terminal' | 'console' | ['terminal', 'console']`\
Default: `terminal`\

Define where the output for the logs.

### `strip` {#strip dir="auto" tabindex="-1"}

[](#strip){#user-content-strip aria-label="Permalink: strip"}

Type: `boolean`\
Default: `true`\

Strip `terminal.*()` when bundling for production.

### `include` {#include dir="auto" tabindex="-1"}

[](#include){#user-content-include aria-label="Permalink: include"}

Type: `String | RegExp | Array[...String|RegExp]`\
Default: `/.+\.(js|ts|mjs|cjs|mts|cts)/`\
Example: `include: '**/*.(mjs|js)',`\

A pattern, or array of patterns, which specify the files in the build the plugin should operate on when removing calls for production.

### `exclude` {#exclude dir="auto" tabindex="-1"}

[](#exclude){#user-content-exclude aria-label="Permalink: exclude"}

Type: `String | RegExp | Array[...String|RegExp]`\
Default: `[]`\
Example: `exlude: 'tests/**/*',`\

A pattern, or array of patterns, which specify the files in the build the plugin should *ignore* when removing calls for production.

## Credits {#credits dir="auto" tabindex="-1"}

[](#credits){#user-content-credits aria-label="Permalink: Credits"}

-   Original idea from [Domenic Elm](https://twitter.com/elmd_){rel="nofollow"}
-   Project setup from [\@antfu\'s vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect)
-   Bundling by [unbuild](https://github.com/unjs/unbuild)
-   Strip functions during build uses [rollup-plugin-strip](https://github.com/rollup/plugins/tree/master/packages/strip)

## Sponsors {#sponsors dir="auto" tabindex="-1"}

[](#sponsors){#user-content-sponsors aria-label="Permalink: Sponsors"}

[![](https://camo.githubusercontent.com/93b72cd0a2f5a2e0947c2b18ddb1925787963b080c877aebadbe84bc83e40052/68747470733a2f2f706174616b2e6465762f73706f6e736f72732e737667){canonical-src="https://patak.dev/sponsors.svg"}](https://patak.dev/sponsors.svg){rel="nofollow"}

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

[MIT](https://github.com/patak-dev/vite-plugin-terminal/blob/main/LICENSE) License © 2022-present [Matias Capeletto](https://github.com/patak-dev)
