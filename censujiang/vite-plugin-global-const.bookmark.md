# censujiang/vite-plugin-global-const (github.com)

<https://github.com/censujiang/vite-plugin-global-const>

## Description

Define constants for your project to facilitate reuse of your code across multiple products - censujiang/vite-plugin-global-const

## Quote

> Define constants for your project to facilitate reuse of your code across multiple products

## Tags

#constraints #global #global-const #vite #vite-plugin #TypeScript

## Content

# GitHub - censujiang/vite-plugin-global-const: Define constants for your project to facilitate reuse of your code across multiple products {#github---censujiangvite-plugin-global-const-define-constants-for-your-project-to-facilitate-reuse-of-your-code-across-multiple-products .reader-title}

censujiang

------------------------------------------------------------------------

## vite-plugin-global-const {#vite-plugin-global-const dir="auto" tabindex="-1"}

[](#vite-plugin-global-const){#user-content-vite-plugin-global-const aria-label="Permalink: vite-plugin-global-const"}

Define constants for your project to facilitate reuse of your code across multiple products

## INSTALL {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: INSTALL"}

    npm i vite-plugin-global-const -D
    #or
    yarn add vite-plugin-global-const -D

## CONFIG {#config dir="auto" tabindex="-1"}

[](#config){#user-content-config aria-label="Permalink: CONFIG"}

In your `vite.config.js`, you can add your global constants to the plugin options.For example:

    // vite.config.js
    import { defineConfig } from 'vite'
    import { globalConst } from 'vite-plugin-global-const'

    export default defineConfig({
      plugins: [
        globalConst({
          // Global constants for your needs
          MAIN: true
        }),
      ],
    })

## USAGE {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: USAGE"}

You can use the global constants in your code, they are injected into the `import.meta.env` object.For example:

    // content.js
    const main = import.meta.env.MAIN
    console.log(main)

and you will get the following results in the browser console or terminal:

## For Development Other Plugins {#for-development-other-plugins dir="auto" tabindex="-1"}

[](#for-development-other-plugins){#user-content-for-development-other-plugins aria-label="Permalink: For Development Other Plugins"}

If you are developing a plugin, you can use the global constants in your plugin code, they are injected into the `import.meta.env` object.For example:

    import { defineConstCore } from 'vite-plugin-global-const'

    export function customPlugin() {
      return {
        name: 'vite-plugin-custom',
        config: () => {
          const defineConst = defineConstCore({
            YourConst: true
          })
          return {
            define: {
              ...defineConst
            }
          }
        }
      }
    }

## LAST {#last dir="auto" tabindex="-1"}

[](#last){#user-content-last aria-label="Permalink: LAST"}

If you have any questions, please submit an issue, thank you for your support, and if you like this plugin, please give me a star, thank you!
