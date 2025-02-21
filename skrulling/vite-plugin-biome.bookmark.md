# skrulling/vite-plugin-biome (github.com)

<https://github.com/skrulling/vite-plugin-biome>

## Description

Vite plugin for using the Biome linter. Contribute to skrulling/vite-plugin-biome development by creating an account on GitHub.

## Quote

> Vite plugin for using the Biome linter

## Tags

# #TypeScript

## Content

# GitHub - skrulling/vite-plugin-biome: Vite plugin for using the Biome linter {#github---skrullingvite-plugin-biome-vite-plugin-for-using-the-biome-linter .reader-title}

skrulling

------------------------------------------------------------------------

## Vite Plugin Biome {#vite-plugin-biome dir="auto" tabindex="-1"}

[](#vite-plugin-biome){#user-content-vite-plugin-biome aria-label="Permalink: Vite Plugin Biome"}

This is a Vite plugin for integrating the [Biome](https://biomejs.dev/){rel="nofollow"} linter into your Vite project. It allows you to lint, format, or check your project files using Biome directly within the Vite build process.
It is much faster than eslint.

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   Integrates Biome linter, formatter, and checker into the Vite build process.
-   Supports different modes: linting, formatting, and checking.
-   Prints Biome output to the console.
-   Configurable to apply fixes and handle errors.
-   Reacts to hot reload

## Installation {#installation dir="auto" tabindex="-1"}

[](#installation){#user-content-installation aria-label="Permalink: Installation"}

    npm install vite-plugin-biome @biomejs/biome

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

First, add the plugin to your `vite.config.js` file. You can specify the mode (`lint`, `format`, `check`), the files to be processed, and other options.

### Basic Usage {#basic-usage dir="auto" tabindex="-1"}

[](#basic-usage){#user-content-basic-usage aria-label="Permalink: Basic Usage"}

For basic linting:

    import biomePlugin from 'vite-plugin-biome';

    export default {
      plugins: [biomePlugin()],
    };

### Advanced Usage {#advanced-usage dir="auto" tabindex="-1"}

[](#advanced-usage){#user-content-advanced-usage aria-label="Permalink: Advanced Usage"}

#### Linting {#linting dir="auto" tabindex="-1"}

[](#linting){#user-content-linting aria-label="Permalink: Linting"}

To lint files without applying fixes:

    import biomePlugin from 'vite-plugin-biome';

    export default {
      plugins: [biomePlugin({
        mode: 'lint',
        files: '.' // This is the default, it will lint all files in a project
      })],
    };

#### Formatting {#formatting dir="auto" tabindex="-1"}

[](#formatting){#user-content-formatting aria-label="Permalink: Formatting"}

To format and write changes to files:

    import biomePlugin from 'vite-plugin-biome';

    export default {
      plugins: [biomePlugin({
        mode: 'format',
        files: 'src/**/*.js', // Format only JavaScript files in src
        applyFixes: true
      })],
    };

#### Checking {#checking dir="auto" tabindex="-1"}

[](#checking){#user-content-checking aria-label="Permalink: Checking"}

To perform both linting and formatting with applied fixes:

    import biomePlugin from 'vite-plugin-biome';

    export default {
      plugins: [biomePlugin({
        mode: 'check',
        files: '.',
        applyFixes: true
      })],
    };

### Options {#options dir="auto" tabindex="-1"}

[](#options){#user-content-options aria-label="Permalink: Options"}

  Option          Description                                Values                      Default
  --------------- ------------------------------------------ --------------------------- ---------
  `mode`          The operation mode of the plugin           `lint`, `format`, `check`   `lint`
  `files`         File or glob pattern to process            e.g., `'src/**/*.js'`       `'.'`
  `applyFixes`    Whether to apply fixes automatically       `true`, `false`             `false`
  `failOnError`   Whether to fail the build on lint errors   `true`, `false`             `false`

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

[MIT LICENSE](https://github.com/skrulling/vite-plugin-biome/blob/master/LICENSE)

[GitHub](https://github.com/skrulling/vite-plugin-biome)
