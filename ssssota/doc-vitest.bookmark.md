# ssssota/doc-vitest (github.com)

<https://github.com/ssssota/doc-vitest>

## Description

Documentation tests with Vitest. Contribute to ssssota/doc-vitest development by creating an account on GitHub.

## Quote

> Documentation tests with Vitest

## Tags

#doctest #documentation #plugin #test #vite #vitest #TypeScript

## Content

# GitHub - ssssota/doc-vitest: Documentation tests with Vitest {#github---ssssotadoc-vitest-documentation-tests-with-vitest .reader-title}

ssssota

------------------------------------------------------------------------

## vite-plugin-doctest {#vite-plugin-doctest dir="auto" tabindex="-1"}

[](#vite-plugin-doctest){#user-content-vite-plugin-doctest aria-label="Permalink: vite-plugin-doctest"}

Vitest plugin for doctest.
You can write test in your source code with documentation.

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

    /**
     * @example
     * ```ts @import.meta.vitest
     * expect(add(1, 2)).toBe(3);
     * assert(add(3, 4) === 7);
     * ```
     */
    export function add(a: number, b: number) {
      return a + b;
    }

You can also test code in markdown.

    # Test

    ```ts:filename.ts@import.meta.vitest
    const { add } = await import('./add');
    expect(add(1, 2)).toBe(3);
    ```

## Setup {#setup dir="auto" tabindex="-1"}

[](#setup){#user-content-setup aria-label="Permalink: Setup"}

    npm i -D vitest vite-plugin-doctest

    // vitest.config.ts or vite.config.ts (js)
    import { defineConfig } from 'vitest/config'; // or `import { defineConfig } from 'vite';`
    import { doctest } from 'vite-plugin-doctest';
    export default defineConfig({
      plugins: [doctest({ /* options */ })],
      test: {
        includeSource: [
          './src/**/*.[jt]s?(x)',
          './**/*.md', // You can disable markdown test by removing this line
        ],
      },
    });

### Options {#options dir="auto" tabindex="-1"}

[](#options){#user-content-options aria-label="Permalink: Options"}

Currently, there is no option.

## How it works {#how-it-works dir="auto" tabindex="-1"}

[](#how-it-works){#user-content-how-it-works aria-label="Permalink: How it works"}

This plugin will transform your documentation tests.

This transformation occurs only when you start Vitest.
So, you don\'t need to worry about the performance of your production code.

    /**
     * @example
     * ```ts @import.meta.vitest
     * expect(add(1, 2)).toBe(3);
     * ```
     */
    export function add(a: number, b: number) {
      return a + b;
    }

↓

    /**
     * @example
     * ```ts @import.meta.vitest
     * expect(add(1, 2)).toBe(3);
     * ```
     */
    export function add(a: number, b: number) {
      return a + b;
    }

    if (import.meta.vitest) {
    const {assert,chai,createExpect,expect,getRunningMode,isWatchMode,should,vi,vitest} = import.meta.vitest;
    import.meta.vitest.test("1+2=3", async () => {
    expect(add(1, 2)).toBe(3);
    });
    }

### Constraints {#constraints dir="auto" tabindex="-1"}

[](#constraints){#user-content-constraints aria-label="Permalink: Constraints"}

This plugin has some constraints.

-   You cannot use typechecks. (e.g. `expectTypeOf`, `assertType`, etc\...)
-   You cannot use lifecycle hooks. (e.g. `beforeEach`, `afterAll`, etc\...)
-   Currently you cannot use `import` statement in your test code. (You can use dynamic import)
-   and more\... (Please make an issue if you find it)

## Related {#related dir="auto" tabindex="-1"}

[](#related){#user-content-related aria-label="Permalink: Related"}

-   [Vitest](https://vitest.dev/){rel="nofollow"}
-   [power-doctest](https://github.com/azu/power-doctest)

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

MIT License
