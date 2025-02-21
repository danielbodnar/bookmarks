# keuby/vite-plugin-lib-types (github.com)

<https://github.com/keuby/vite-plugin-lib-types>

## Description

Generate typescript declarations. Contribute to keuby/vite-plugin-lib-types development by creating an account on GitHub.

## Quote

> Generate typescript declarations

## Tags

# #TypeScript

## Content

# GitHub - keuby/vite-plugin-lib-types: Generate typescript declarations {#github---keubyvite-plugin-lib-types-generate-typescript-declarations .reader-title}

keuby

------------------------------------------------------------------------

## vite-plugin-lib-types {#vite-plugin-lib-types dir="auto" tabindex="-1"}

[](#vite-plugin-lib-types){#user-content-vite-plugin-lib-types aria-label="Permalink: vite-plugin-lib-types"}

Generate dts file while building library, supports vue file

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

    npm i -D vite-plugin-lib-types

A simple example is shown below:

    import { defineConfig } from 'vite';
    import types from 'vite-plugin-lib-types';

    export default defineConfig({
      plugins: [types()],
      build: {
        target: 'ES2018',
        sourcemap: true,
        minify: false,
        lib: {
          entry: 'src/index.ts',
          formats: ['es', 'cjs'],
        },
      },
    });

## Options {#options dir="auto" tabindex="-1"}

[](#options){#user-content-options aria-label="Permalink: Options"}

  name           type                  default                   description
  -------------- --------------------- ------------------------- --------------------------------
  tsconfig       `object`              `undefined`               override the value of tsconfig
  tsconfigPath   `string`              `${root}/tsconfig.json`   path of tsconfig
  outDir         `string`              `undefined`               dts file output path
  fileName       `string | function`   `[]`                      custom dts file names
  transformers   `Transformer[]`       `[]`                      Custom dts file transformer
