# ehmicky/modern-errors-cli (github.com)

<https://github.com/ehmicky/modern-errors-cli>

## Description

`modern-errors` plugin to handle errors in CLI modules. - ehmicky/modern-errors-cli

## Quote

> `modern-errors` plugin to handle errors in CLI modules.

## Tags

#bash #browser #cli #console #errors #handler #javascript #library #message #modern-errors #modern-errors-plugin #monitoring #nodejs #plugins #shell #stack #stacktrace #terminal #timeout #typescript #TypeScript

## Content

# GitHub - ehmicky/modern-errors-cli: \`modern-errors\` plugin to handle errors in CLI modules. {#github---ehmickymodern-errors-cli-modern-errors-plugin-to-handle-errors-in-cli-modules. .reader-title}

ehmicky

------------------------------------------------------------------------

![modern-errors logo](https://raw.githubusercontent.com/ehmicky/design/main/modern-errors/modern-errors.svg){width="600"}

[![Node](https://camo.githubusercontent.com/f5a5494a35efc3469e8f52aaf2642bbe77dc39c2105f4c5b4c0945ad0cb3f45e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4e6f64652e6a732d3830383038303f6c6f676f3d6e6f64652e6a7326636f6c6f72413d343034303430266c6f676f436f6c6f723d363663633333){canonical-src="https://img.shields.io/badge/-Node.js-808080?logo=node.js&colorA=404040&logoColor=66cc33"}](https://www.npmjs.com/package/modern-errors-cli){rel="nofollow"}
[![TypeScript](https://camo.githubusercontent.com/87389ae54a1ea8e2d17c62dba54dd0b79a24714429e8226690f06c80d1b8399a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d54797065642d3830383038303f6c6f676f3d7479706573637269707426636f6c6f72413d343034303430266c6f676f436f6c6f723d303039366666){canonical-src="https://img.shields.io/badge/-Typed-808080?logo=typescript&colorA=404040&logoColor=0096ff"}](https://github.com/ehmicky/modern-errors-cli/blob/main/src/main.ts)
[![Codecov](https://camo.githubusercontent.com/3c606cd1d84391e25b7009102be477b62f07289f2f89ba5016a6bb5b13b048ab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d5465737465642532303130302532352d3830383038303f6c6f676f3d636f6465636f7626636f6c6f72413d343034303430){canonical-src="https://img.shields.io/badge/-Tested%20100%25-808080?logo=codecov&colorA=404040"}](https://codecov.io/gh/ehmicky/modern-errors-cli){rel="nofollow"}
[![Mastodon](https://camo.githubusercontent.com/e90b8928fddb2c7181e7a8eb795417d2bfe0e193e4ffca5ff3a403ca9b620d99/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4d6173746f646f6e2d3830383038302e7376673f6c6f676f3d6d6173746f646f6e26636f6c6f72413d343034303430266c6f676f436f6c6f723d393539304639){canonical-src="https://img.shields.io/badge/-Mastodon-808080.svg?logo=mastodon&colorA=404040&logoColor=9590F9"}](https://fosstodon.org/@ehmicky){rel="nofollow"}
[![Medium](https://camo.githubusercontent.com/3d1bd5f1618182155f7b5a0de2c46e2aa8757aa4887f77cb36657a8ed5d6c305/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4d656469756d2d3830383038302e7376673f6c6f676f3d6d656469756d26636f6c6f72413d343034303430){canonical-src="https://img.shields.io/badge/-Medium-808080.svg?logo=medium&colorA=404040"}](https://medium.com/@ehmicky){rel="nofollow"}

[`modern-errors`](https://github.com/ehmicky/modern-errors)
[plugin](https://github.com/ehmicky/modern-errors#-plugins) to handle errors in
CLI modules.

This adds [`BaseError.exit(error)`](#baseerrorexiterror) which logs `error` then
exits the process.

## Hire me {#hire-me dir="auto" tabindex="-1"}

[](#hire-me){#user-content-hire-me aria-label="Permalink: Hire me"}

Please
[reach out](https://www.linkedin.com/feed/update/urn:li:activity:7117265228068716545/){rel="nofollow"}
if you\'re looking for a Node.js API or CLI engineer (11 years of experience).
Most recently I have been [Netlify Build](https://github.com/netlify/build)\'s
and [Netlify Plugins](https://www.netlify.com/products/build/plugins/){rel="nofollow"}\'
technical lead for 2.5 years. I am available for full-time remote positions.

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   🖍️ Pretty [colors](#%EF%B8%8F-colors), [icons](#-icon) and [header](#-header)
-   🚒 [Graceful exit](#-timeout)
-   ⛑️ [Normalize](https://github.com/ehmicky/normalize-exception) invalid errors
-   🔕 Log verbosity: [message](#-silent), [stack](#-stack), [properties](#-props)
-   🚨 Custom [exit code](#-exitcode)
-   💥 Exception-safe

## Screenshot {#screenshot dir="auto" tabindex="-1"}

[](#screenshot){#user-content-screenshot aria-label="Permalink: Screenshot"}

[![modern-errors-cli screenshot](https://raw.githubusercontent.com/ehmicky/handle-cli-error/main/docs/screenshot.png){width="500"}](https://raw.githubusercontent.com/ehmicky/handle-cli-error/main/docs/screenshot.png){rel="noopener noreferrer nofollow"}

## Example {#example dir="auto" tabindex="-1"}

[](#example){#user-content-example aria-label="Permalink: Example"}

[Adding the plugin](https://github.com/ehmicky/modern-errors#adding-plugins) to
[`modern-errors`](https://github.com/ehmicky/modern-errors).

    import ModernError from 'modern-errors'

    import modernErrorsCli from 'modern-errors-cli'

    export const BaseError = ModernError.subclass('BaseError', {
      plugins: [modernErrorsCli],
    })
    // ...

Calling [`BaseError.exit(error)`](#baseerrorexiterror) in the CLI\'s top-level
error handler.

    const cliMain = () => {
      try {
        // ...
      } catch (error) {
        // Logs `error` then exits the process
        BaseError.exit(error)
      }
    }

    cliMain()

## Install {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: Install"}

    npm install modern-errors-cli

This package requires Node.js \>=18.18.0.

This is an ES module. It must be loaded using
[an `import` or `import()` statement](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c),
not `require()`. If TypeScript is used, it must be configured to
[output ES modules](https://www.typescriptlang.org/docs/handbook/esm-node.html){rel="nofollow"},
not CommonJS.

## API {#api dir="auto" tabindex="-1"}

[](#api){#user-content-api aria-label="Permalink: API"}

## modernErrorsCli {#modernerrorscli dir="auto" tabindex="-1"}

[](#modernerrorscli){#user-content-modernerrorscli aria-label="Permalink: modernErrorsCli"}

*Type*: `Plugin`

Plugin object to pass to the
[`plugins` option](https://github.com/ehmicky/modern-errors#adding-plugins) of
`ErrorClass.subclass()`.

## BaseError.exit(error) {#baseerror.exiterror dir="auto" tabindex="-1"}

[](#baseerrorexiterror){#user-content-baseerrorexiterror aria-label="Permalink: BaseError.exit(error)"}

`error`: `any`

Logs `error` on the console (`stderr`) then exits the process.

This never throws. Invalid errors are silently
[normalized](https://github.com/ehmicky/normalize-exception).

## Options {#options dir="auto" tabindex="-1"}

[](#options){#user-content-options aria-label="Permalink: Options"}

*Type*: `object`

### 🚨 exitCode {#exitcode dir="auto" tabindex="-1"}

[](#-exitcode){#user-content--exitcode aria-label="Permalink: 🚨 exitCode"}

*Type*: `integer`\
*Default*: `1`

Process [exit code](https://en.wikipedia.org/wiki/Exit_status){rel="nofollow"}.

Note: when passing invalid `options`, the exit code is always `125`.

### 📕 stack {#stack dir="auto" tabindex="-1"}

[](#-stack){#user-content--stack aria-label="Permalink: 📕 stack"}

*Type*: `boolean`\
*Default*: `true`

Whether to log the error\'s stack trace.

### 📢 props {#props dir="auto" tabindex="-1"}

[](#-props){#user-content--props aria-label="Permalink: 📢 props"}

*Type*: `boolean`\
*Default*: `true`

Whether to log the error\'s additional properties.

### 🔕 silent {#silent dir="auto" tabindex="-1"}

[](#-silent){#user-content--silent aria-label="Permalink: 🔕 silent"}

*Type*: `boolean`\
*Default*: `false`

Exits the process without logging anything on the console.

### 🖍️ colors {#colors dir="auto" tabindex="-1"}

[](#️-colors){#user-content-️-colors aria-label="Permalink: 🖍️ colors"}

*Type*: `boolean`\
*Default*: `true` in terminals, `false` otherwise

Whether to colorize the error\'s message, stack trace and additional properties.

Quoted strings in the error\'s message are printed in bold (for `"..."` and
`'...'`) and in italic (for `` `...` ``).

### ❌ icon {#icon dir="auto" tabindex="-1"}

[](#-icon){#user-content--icon aria-label="Permalink: ❌ icon"}

*Type*: `string`\
*Default*: `'cross'`

Icon prepended to the error\'s name. The available values are listed
[here](https://github.com/sindresorhus/figures/blob/main/readme.md#figures-1).
Can be disabled by passing an empty string.

### 💄 header {#header dir="auto" tabindex="-1"}

[](#-header){#user-content--header aria-label="Permalink: 💄 header"}

*Type*: `string`\
*Default*: `'red bold'`

Color/style of the error\'s [icon](#-icon) and name. The available values are
listed [here](https://github.com/ehmicky/chalk-string#available-styles). Several
styles can be specified by using spaces. Can be disabled by passing an empty
string.

### 🚒 timeout {#timeout dir="auto" tabindex="-1"}

[](#-timeout){#user-content--timeout aria-label="Permalink: 🚒 timeout"}

*Type*: `integer` (in milliseconds)\
*Default*: `5000` (5 seconds)

The process exits gracefully: it waits for any ongoing tasks (callbacks,
promises, etc.) to complete, up to a specific `timeout`.

Special values:

-   `0`: Exits right away, without waiting for ongoing tasks
-   `Number.POSITIVE_INFINITY`: Waits for ongoing tasks forever, without timing
    out

## Configuration {#configuration dir="auto" tabindex="-1"}

[](#configuration){#user-content-configuration aria-label="Permalink: Configuration"}

[Options](#options) can apply to (in priority order):

-   Any error: second argument to
    [`ModernError.subclass()`](https://github.com/ehmicky/modern-errors#options-1)

<!-- -->

    export const BaseError = ModernError.subclass('BaseError', {
      plugins: [modernErrorsCli],
      cli: options,
    })

-   Any error of a specific class (and its subclasses): second argument to
    [`ErrorClass.subclass()`](https://github.com/ehmicky/modern-errors#options-1)

<!-- -->

    export const InputError = BaseError.subclass('InputError', { cli: options })

-   A specific error: second argument to
    [`new ErrorClass()`](https://github.com/ehmicky/modern-errors#options-3)

<!-- -->

    throw new InputError('...', { cli: options })

-   A specific [`BaseError.exit(error)`](#baseerrorexiterror) call

<!-- -->

    BaseError.exit(error, options)

## Related projects {#related-projects dir="auto" tabindex="-1"}

[](#related-projects){#user-content-related-projects aria-label="Permalink: Related projects"}

-   [`handle-cli-error`](https://github.com/ehmicky/handle-cli-error): 💣 Error
    handler for CLI applications 💥
-   [`modern-errors`](https://github.com/ehmicky/modern-errors): Handle errors in
    a simple, stable, consistent way
-   [`modern-errors-process`](https://github.com/ehmicky/modern-errors-process):
    Handle process errors
-   [`modern-errors-bugs`](https://github.com/ehmicky/modern-errors-bugs): Print
    where to report bugs
-   [`modern-errors-serialize`](https://github.com/ehmicky/modern-errors-serialize):
    Serialize/parse errors
-   [`modern-errors-clean`](https://github.com/ehmicky/modern-errors-clean): Clean
    stack traces
-   [`modern-errors-http`](https://github.com/ehmicky/modern-errors-http): Create
    HTTP error responses
-   [`modern-errors-winston`](https://github.com/ehmicky/modern-errors-winston):
    Log errors with Winston
-   [`modern-errors-switch`](https://github.com/ehmicky/modern-errors-switch):
    Execute class-specific logic

## Support {#support dir="auto" tabindex="-1"}

[](#support){#user-content-support aria-label="Permalink: Support"}

For any question, *don\'t hesitate* to [submit an issue on GitHub](https://github.com/ehmicky/modern-errors-cli/issues).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](https://github.com/ehmicky/modern-errors-cli/blob/main/CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

## Contributing {#contributing dir="auto" tabindex="-1"}

[](#contributing){#user-content-contributing aria-label="Permalink: Contributing"}

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page\'s `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix a bug or add a new feature, please check our
[guidelines](https://github.com/ehmicky/modern-errors-cli/blob/main/CONTRIBUTING.md). Pull requests are welcome!
