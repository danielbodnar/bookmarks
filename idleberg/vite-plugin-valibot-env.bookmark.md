# idleberg/vite-plugin-valibot-env (github.com)

<https://github.com/idleberg/vite-plugin-valibot-env>

## Description

A Vite plugin to validate environment variables against a Valibot schema - idleberg/vite-plugin-valibot-env

## Quote

> A Vite plugin to validate environment variables against a Valibot schema

## Tags

#environment-variables #valibot #validation #vite-plugin #TypeScript

## Content

# GitHub - idleberg/vite-plugin-valibot-env: A Vite plugin to validate environment variables against a Valibot schema {#github---idlebergvite-plugin-valibot-env-a-vite-plugin-to-validate-environment-variables-against-a-valibot-schema .reader-title}

idleberg

------------------------------------------------------------------------

## vite-plugin-valibot-env {#vite-plugin-valibot-env dir="auto" tabindex="-1"}

[](#vite-plugin-valibot-env){#user-content-vite-plugin-valibot-env aria-label="Permalink: vite-plugin-valibot-env"}

> A Vite plugin to validate environment variables against a Valibot schema.

[![License](https://camo.githubusercontent.com/c7a90244388783c128382b1f636132b87ce92cd13ab886c26a2533c3965403bd/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f69646c65626572672f766974652d706c7567696e2d76616c69626f742d656e763f636f6c6f723d626c7565267374796c653d666f722d7468652d6261646765){canonical-src="https://img.shields.io/github/license/idleberg/vite-plugin-valibot-env?color=blue&style=for-the-badge"}](https://github.com/idleberg/vite-plugin-valibot-env/blob/main/LICENSE)
[![Version: npm](https://camo.githubusercontent.com/a058c8bf50a2981954f8573987301ef5ed559379f04696eb9671b99986c1d982/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f766974652d706c7567696e2d76616c69626f742d656e763f7374796c653d666f722d7468652d6261646765){canonical-src="https://img.shields.io/npm/v/vite-plugin-valibot-env?style=for-the-badge"}](https://www.npmjs.org/package/vite-plugin-valibot-env){rel="nofollow"}
[![Version: jsr](https://camo.githubusercontent.com/f5be3d474f4e918da1163134c26f7ab8dde1456563d36960431e6c17cf9cceb8/68747470733a2f2f696d672e736869656c64732e696f2f6a73722f762f4069646c65626572672f766974652d706c7567696e2d76616c69626f742d656e763f7374796c653d666f722d7468652d6261646765){canonical-src="https://img.shields.io/jsr/v/@idleberg/vite-plugin-valibot-env?style=for-the-badge"}](https://jsr.io/@idleberg/vite-plugin-valibot-env){rel="nofollow"}
[![CI: Node](https://camo.githubusercontent.com/9e348724b48c53b71eeeaaab242408f789217b8083a6e770c6a3148180e9b806/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f616374696f6e732f776f726b666c6f772f7374617475732f69646c65626572672f766974652d706c7567696e2d76616c69626f742d656e762f6e6f64652e796d6c3f6c6f676f3d6e6f6465646f746a73266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765){canonical-src="https://img.shields.io/github/actions/workflow/status/idleberg/vite-plugin-valibot-env/node.yml?logo=nodedotjs&logoColor=white&style=for-the-badge"}](https://github.com/idleberg/vite-plugin-valibot-env/actions/workflows/node.yml)
[![CI: Deno](https://camo.githubusercontent.com/4ea67108fe61dc8ff4317fd7600b428fbb3afe8d64f0dde15512e72ff577f601/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f616374696f6e732f776f726b666c6f772f7374617475732f69646c65626572672f766974652d706c7567696e2d76616c69626f742d656e762f64656e6f2e796d6c3f6c6f676f3d64656e6f266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765){canonical-src="https://img.shields.io/github/actions/workflow/status/idleberg/vite-plugin-valibot-env/deno.yml?logo=deno&logoColor=white&style=for-the-badge"}](https://github.com/idleberg/vite-plugin-valibot-env/actions/workflows/deno.yml)

## Why? {#why dir="auto" tabindex="-1"}

[](#why){#user-content-why aria-label="Permalink: Why?"}

It\'s generally a good idea to check that you\'re all set up early in the development process. Validating that your environment variables have been defined and are of the expected type is a part of that -- for yourself and your colleagues. While there are *many* libraries to validate against a schema, [Valibot](https://valibot.dev/){rel="nofollow"} stands out for its versatility and modularity. The small footprint makes it an ideal candidate for validation in the frontend. So why not use it in your development process as well?

## Installation {#installation dir="auto" tabindex="-1"}

[](#installation){#user-content-installation aria-label="Permalink: Installation"}

    npm install -D vite-plugin-valibot-env valibot`

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

Let\'s start with a very basic example

    import { defineConfig } from 'vite';
    import * as v from 'valibot';
    import valibot from 'vite-plugin-valibot-env';

    const schema = v.object({
        VITE_API_ENDPOINT: v.pipe(v.string(), v.url()),
        VITE_LOCALE: v.literal('en_US'),
    });

    export default defineConfig({
        plugins: [
            valibot(schema),
        ]
    });

Tip

You might want to use [`loadEnv`](https://v4.vitejs.dev/config/#using-environment-variables-in-config){rel="nofollow"} in your configuration to load `.env` files.

### API {#api dir="auto" tabindex="-1"}

[](#api){#user-content-api aria-label="Permalink: API"}

`valibot(schema, options?)`

### Options {#options dir="auto" tabindex="-1"}

[](#options){#user-content-options aria-label="Permalink: Options"}

#### `options.ignoreEnvPrefix` {#options.ignoreenvprefix dir="auto" tabindex="-1"}

[](#optionsignoreenvprefix){#user-content-optionsignoreenvprefix aria-label="Permalink: options.ignoreEnvPrefix"}

Type: `boolean`\
Default: `false`

Setting this to `true` will also validate unprefixed environment variables.

Tip

Vite uses a [prefix](https://vitejs.dev/config/shared-options.html#envprefix){rel="nofollow"} to prevent leaking all environment variables into your code. The same limitation applies to the validator. However, there might be use cases where you want validate unprefixed environment variables as well, e.g. `HOST` and `PORT` to configure the Vite server.

#### `options.transformValues` {#options.transformvalues dir="auto" tabindex="-1"}

[](#optionstransformvalues){#user-content-optionstransformvalues aria-label="Permalink: options.transformValues"}

Type: `boolean`\
Default: `false`

Setting this to `true` will try and transform string values to their respective types. Supports booleans, integers, floats, and `null`.

#### `options.language` {#options.language dir="auto" tabindex="-1"}

[](#optionslanguage){#user-content-optionslanguage aria-label="Permalink: options.language"}

Type: `string`\
Default: `undefined`

Language ID for localized error messages.

Note

When using this option, you need to install `@valibot/i18n` and import it into your Vite config.

#### `options.onBeforeIssues` {#options.onbeforeissues dir="auto" tabindex="-1"}

[](#optionsonbeforeissues){#user-content-optionsonbeforeissues aria-label="Permalink: options.onBeforeIssues"}

Type: `function`\
Default: `undefined`

A callback function executed after any issues have been printed.

#### `options.onAfterIssues` {#options.onafterissues dir="auto" tabindex="-1"}

[](#optionsonafterissues){#user-content-optionsonafterissues aria-label="Permalink: options.onAfterIssues"}

Type: `function`\
Default: `undefined`

A callback function executed after all issues have been printed.

Tip

You could use this to point collaborators to the documentation of your project\'s environment variables.

#### `options.throwError` {#options.throwerror dir="auto" tabindex="-1"}

[](#optionsthrowerror){#user-content-optionsthrowerror aria-label="Permalink: options.throwError"}

Type: `boolean`\
Default: `false`

Caution

This option exists for testing purposes and is not recommended for use.

Throws an error rather than exiting gracefully when issues have been found in the schema.

## Related {#related dir="auto" tabindex="-1"}

[](#related){#user-content-related aria-label="Permalink: Related"}

-   [esbuild-plugin-valibot-env](https://github.com/idleberg/esbuild-plugin-valibot-env)

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

This work is licensed under [The MIT License](https://github.com/idleberg/vite-plugin-valibot-env/blob/main/LICENSE).
