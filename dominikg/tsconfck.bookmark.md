# dominikg/tsconfck (github.com)

<https://github.com/dominikg/tsconfck>

## Description

A utility to find and parse tsconfig files without depending on typescript - dominikg/tsconfck

## Quote

> A utility to find and parse tsconfig files without depending on typescript

## Tags

#tsconfig #typescript #JavaScript

## Content

# GitHub - dominikg/tsconfck: A utility to find and parse tsconfig files without depending on typescript {#github---dominikgtsconfck-a-utility-to-find-and-parse-tsconfig-files-without-depending-on-typescript .reader-title}

dominikg

------------------------------------------------------------------------

## tsconfck {#tsconfck dir="auto" tabindex="-1"}

[](#tsconfck){#user-content-tsconfck aria-label="Permalink: tsconfck"}

[![npm version](https://camo.githubusercontent.com/6a8e15365de9fb2bc7df49d8d4b683483ebac349272a316d8006ba67231f8ce1/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7473636f6e66636b){canonical-src="https://img.shields.io/npm/v/tsconfck"}](https://www.npmjs.com/package/tsconfck){rel="nofollow"}
[![CI](https://github.com/dominikg/tsconfck/actions/workflows/test.yml/badge.svg)](https://github.com/dominikg/tsconfck/actions/workflows/test.yml)

A utility to find and parse tsconfig files without depending on typescript

## Why {#why dir="auto" tabindex="-1"}

[](#why){#user-content-why aria-label="Permalink: Why"}

Because no simple official api exists and tsconfig isn\'t actual json.

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   find closest tsconfig (tsconfig.json or jsconfig.json)
-   convert tsconfig to actual json and parse it
-   resolve \"extends\"
-   resolve \"references\" of solution-style tsconfig
-   resolve [\"\${configDir}\" variable](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#the-configdir-template-variable-for-configuration-files){rel="nofollow"}
-   optional caching for improved performance
-   optional findNative and parseNative to use official typescript api
-   zero dependencies (typescript optional)
-   extensive testsuite
-   completely async and optimized (it\'s [fast](https://github.com/dominikg/tsconfck/blob/main/docs/benchmark.md))
-   tiny [4.7KB gzip](https://pkg-size.dev/tsconfck@%5E3.0.0-next.0){rel="nofollow"}
-   unbundled esm js, no sourcemaps needed
-   [types](https://github.com/dominikg/tsconfck/blob/main/packages/tsconfck/types/index.d.ts) generated with [dts-buddy](https://github.com/Rich-Harris/dts-buddy)

## Users {#users dir="auto" tabindex="-1"}

[](#users){#user-content-users aria-label="Permalink: Users"}

Used by [vite](https://github.com/vitejs/vite)\*, [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths), [astro](https://github.com/withastro/astro) and [many more](https://github.com/dominikg/tsconfck/network/dependents)

> (\*) vite bundles tsconfck so it is listed as a devDependency

## Install {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: Install"}

    npm install --save-dev tsconfck # or pnpm, yarn

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

    import { parse } from 'tsconfck';
    const {
        tsconfigFile, // full path to found tsconfig
        tsconfig, // tsconfig object including merged values from extended configs
        extended, // separate unmerged results of all tsconfig files that contributed to tsconfig
        solution, // solution result if tsconfig is part of a solution
        referenced // referenced tsconfig results if tsconfig is a solution
    } = await parse('foo/bar.ts');

## Links {#links dir="auto" tabindex="-1"}

[](#links){#user-content-links aria-label="Permalink: Links"}

[package readme](https://github.com/dominikg/tsconfck/blob/main/packages/tsconfck/README.md)
[api](https://github.com/dominikg/tsconfck/blob/main/docs/api.md)
[changelog](https://github.com/dominikg/tsconfck/blob/main/packages/tsconfck/CHANGELOG.md)

## Develop {#develop dir="auto" tabindex="-1"}

[](#develop){#user-content-develop aria-label="Permalink: Develop"}

This repo uses

-   [pnpm](https://pnpm.io/){rel="nofollow"}
-   [changesets](https://github.com/changesets/changesets)

In every PR you have to add a changeset by running `pnpm changeset` and following the prompts

PRs are going to be squash-merged

    # install dependencies
    pnpm install
    # run tests
    pnpm test

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

[MIT](https://github.com/dominikg/tsconfck/blob/main/packages/tsconfck/LICENSE)
