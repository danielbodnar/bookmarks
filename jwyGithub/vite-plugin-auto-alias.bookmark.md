# jwyGithub/vite-plugin-auto-alias (github.com)

<https://github.com/jwyGithub/vite-plugin-auto-alias>

## Description

automatically generate alias based on path. Contribute to jwyGithub/vite-plugin-auto-alias development by creating an account on GitHub.

## Quote

> automatically generate alias based on path

## Tags

#alias #vite #TypeScript

## Content

# GitHub - jwyGithub/vite-plugin-auto-alias: automatically generate alias based on path {#github---jwygithubvite-plugin-auto-alias-automatically-generate-alias-based-on-path .reader-title}

jwyGithub

------------------------------------------------------------------------

English \| [简体中文](https://github.com/jwyGithub/vite-plugin-auto-alias/blob/master/README.zh.md)

## vite-plugin-auto-alias {#vite-plugin-auto-alias dir="auto" tabindex="-1"}

[](#vite-plugin-auto-alias){#user-content-vite-plugin-auto-alias aria-label="Permalink: vite-plugin-auto-alias"}

automatically generate alias based on path

[![version](https://camo.githubusercontent.com/eec89313efa669bd88b82278f25dd201294396339d5083a1fdc17836a3eacea1/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f766974652d706c7567696e2d6175746f2d616c696173){canonical-src="https://img.shields.io/npm/v/vite-plugin-auto-alias"}](https://camo.githubusercontent.com/eec89313efa669bd88b82278f25dd201294396339d5083a1fdc17836a3eacea1/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f766974652d706c7567696e2d6175746f2d616c696173){rel="noopener noreferrer nofollow"}
[![download](https://camo.githubusercontent.com/f53395ec9b30cb7ca0ccd7eadbd28bd079e6565a39d04194214e1106f3a0789e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f766974652d706c7567696e2d6175746f2d616c696173){canonical-src="https://img.shields.io/npm/dm/vite-plugin-auto-alias"}](https://camo.githubusercontent.com/f53395ec9b30cb7ca0ccd7eadbd28bd079e6565a39d04194214e1106f3a0789e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f766974652d706c7567696e2d6175746f2d616c696173){rel="noopener noreferrer nofollow"}
[![issues](https://camo.githubusercontent.com/1436d68f5c2aa86d210b6669d6c2ef2dace07bc8cfbf1b4bf2d4c8df56d22881/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6973737565732f6a77794769746875622f766974652d706c7567696e2d6175746f2d616c696173){canonical-src="https://img.shields.io/github/issues/jwyGithub/vite-plugin-auto-alias"}](https://camo.githubusercontent.com/1436d68f5c2aa86d210b6669d6c2ef2dace07bc8cfbf1b4bf2d4c8df56d22881/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6973737565732f6a77794769746875622f766974652d706c7567696e2d6175746f2d616c696173){rel="noopener noreferrer nofollow"}
[![license](https://camo.githubusercontent.com/dd5c33c6be96f1d5dcd3c6a6e16c72a7f41fbd64a523e4460430c603c6e4cdd5/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6a77794769746875622f766974652d706c7567696e2d6175746f2d616c696173){canonical-src="https://img.shields.io/github/license/jwyGithub/vite-plugin-auto-alias"}](https://camo.githubusercontent.com/dd5c33c6be96f1d5dcd3c6a6e16c72a7f41fbd64a523e4460430c603c6e4cdd5/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6a77794769746875622f766974652d706c7567696e2d6175746f2d616c696173){rel="noopener noreferrer nofollow"}

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   Support for hot updates
-   Support for custom alias prefixes
-   Supports synchronous mode configuration

## Install {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: Install"}

#### pnpm {#pnpm dir="auto" tabindex="-1"}

[](#pnpm){#user-content-pnpm aria-label="Permalink: pnpm"}

    pnpm add vite-plugin-auto-alias -D

#### yarn {#yarn dir="auto" tabindex="-1"}

[](#yarn){#user-content-yarn aria-label="Permalink: yarn"}

    yarn add vite-plugin-auto-alias -D

#### npm {#npm dir="auto" tabindex="-1"}

[](#npm){#user-content-npm aria-label="Permalink: npm"}

    npm install vite-plugin-auto-alias -D

## Use {#use dir="auto" tabindex="-1"}

[](#use){#user-content-use aria-label="Permalink: Use"}

> vite.config.ts / vite.config.js

    import autoAlias from 'vite-plugin-auto-alias';

    export default defineConfig(({ command, mode }) => {
        return {
            plugins: [autoAlias()]
        };
    });

## Option {#option dir="auto" tabindex="-1"}

[](#option){#user-content-option aria-label="Permalink: Option"}

    export interface AutoAlias {
        /**
         * @description the root directory where the alias needs to be generated is src by default
         * @default src
         */
        root?: string;

        /**
         * @description prefix for generating aliases
         * @default @
         */
        prefix?: string;

        /**
         * @description synchronize the mode of json configuration
         * @default all
         */
        mode?: 'sync' | 'off';

        /**
         * @description alias configuration file path
         * @default tsconfig.json
         */
        aliasPath?: string;
    }

#### Mode {#mode dir="auto" tabindex="-1"}

[](#mode){#user-content-mode aria-label="Permalink: Mode"}

-   sync : when use `sync`,the plugin will search for `tsconfig.json` or `jsconfig.json` in the root directory of the current project, so please ensure that this file exists in the project. The plugin will automatically generate paths options when running, and then write them to the file without the need for developers to manually add them

> vite.config.ts / vite.config.js

    import autoAlias from 'vite-plugin-auto-alias';

    export default defineConfig(({ command, mode }) => {
        return {
            plugins: [
                autoAlias({
                    // ...
                    mode: 'sync'
                })
            ]
        };
    });

> tsconfig.json / jsconfig.json

    {
        "compilerOptions": {
            "baseUrl": "./"
            // ...
        }
    }

## Example {#example dir="auto" tabindex="-1"}

[](#example){#user-content-example aria-label="Permalink: Example"}

    |-- src
        |-- plugins
        |-- router
        |-- scss
        |-- store
        |-- utils
        |-- views
        |-- ....

    import xxx from '@plugins/xxx';
    import xxx from '@router/xxx';
    import xxx from '@scss/xxx';
    import xxx from '@store/xxx';
    import xxx from '@utils/xxx';
    import xxx from '@views/xxx';
