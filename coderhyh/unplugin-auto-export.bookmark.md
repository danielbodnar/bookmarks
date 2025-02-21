# coderhyh/unplugin-auto-export (github.com)

<https://github.com/coderhyh/unplugin-auto-export>

## Description

Automates the maintenance of export statements in the index.ts file. - coderhyh/unplugin-auto-export

## Quote

> Automates the maintenance of export statements in the index.ts file.

## Tags

# #TypeScript

## Content

# GitHub - coderhyh/unplugin-auto-export: Automates the maintenance of export statements in the index.ts file. {#github---coderhyhunplugin-auto-export-automates-the-maintenance-of-export-statements-in-the-index.ts-file. .reader-title}

coderhyh

------------------------------------------------------------------------

## unplugin-auto-export {#unplugin-auto-export dir="auto" tabindex="-1"}

[](#unplugin-auto-export){#user-content-unplugin-auto-export aria-label="Permalink: unplugin-auto-export"}

`unplugin-auto-export` is a plugin designed specifically for Vite and Webpack build tools, that automates the maintenance of export statements in `index.ts` files, reducing the manual effort of writing `export` statements. It\'s especially useful in large projects where managing export statements can become cumbersome.

[中文文档](https://github.com/coderhyh/unplugin-auto-export/blob/master/README-zh.md)

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   Automatically watches specified directories for file changes.
-   Updates the `index.ts` file within those directories with the appropriate `export` statements.
-   Configurable to ignore specific files or directories.
-   Supports `ts | js` file extensions (default is `ts`).
-   Custom export format.

## Installation {#installation dir="auto" tabindex="-1"}

[](#installation){#user-content-installation aria-label="Permalink: Installation"}

You can install the `unplugin-auto-export` plugin using npm or yarn:

    npm install unplugin-auto-export --save-dev
    # or
    yarn add unplugin-auto-export --dev

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

To use the `unplugin-auto-export` plugin in your Vite project, follow these steps:

1.  Configure the plugin

**vite**: In your `vite.config.js` file, import the plugin and specify configuration options:

    import { defineConfig } from 'vite';
    import AutoExport from 'unplugin-auto-export/vite';

    export default defineConfig({
      // ... other Vite configuration options

      plugins: [
        AutoExport({
          // Directories to watch, paths can use aliases; It just needs to end with /*
          path: ['~/views/**/{components,hooks}/*', '~/hooks/*'],
          // Directories or files to ignore (optional)
          ignore: ['**/node_modules/*'],
          // File extension (default is 'ts') `ts` | `js`
          extname: 'ts',
          // Custom export format
          formatter: (filename, extname) => `export * from './${filename}'`
        }),
      ],
    });

**webpack**: In your `webpack.config.js` file, import the plugin and specify configuration options:

    module.exports = {
      /* ... */
      plugins: [
        require('unplugin-auto-export/webpack').default({ /* options */ }),
      ],
    }

2.  Run your project, and the `unplugin-auto-export` plugin will automatically maintain the `index.ts` files in the specified directories.

## Configuration Options {#configuration-options dir="auto" tabindex="-1"}

[](#configuration-options){#user-content-configuration-options aria-label="Permalink: Configuration Options"}

-   `path` (`string` or `string[]`): Directories to watch for changes. Can be a single string or an array of strings.
    -   You can use your own configured path aliases.
    -   **To use a wildcard pattern, such as `~/views/**/{components,hooks}/*` or `src/hooks/*.ts`**
-   `ignore` (`string[]`): Directories or files to ignore during watching. **(optional)**
    -   Follows the same path rule as `path`.
-   `extname` (`string`): The file extension to use for the `index` files (default is `ts`).
    -   support `ts | js`.
-   `formatter`(`(filename: string, extname: string) => string`): Custom export format

## Error Handling {#error-handling dir="auto" tabindex="-1"}

[](#error-handling){#user-content-error-handling aria-label="Permalink: Error Handling"}

-   The `unplugin-auto-export` plugin enforces a specific path rule: `/\/\*(\.[\w\d]+)?$/`.
    -   When using a wildcard pattern, it only requires ending with `/*` or `/*.ts`. Typically, ending with `/*` is sufficient.
    -   Because this is the only way to indicate monitoring files within a specific folder.
-   If the path does not match this rule, the plugin will throw an error with the message: `Path rule does not match. Please check the path format.`
-   Correct examples: `~/views/**/{components,hooks}/* or src/hooks/*.ts`
    -   \"\~\" is a configured path alias.

## Example {#example dir="auto" tabindex="-1"}

[](#example){#user-content-example aria-label="Permalink: Example"}

[Vite](https://github.com/coderhyh/unplugin-auto-export/blob/master/playground/vite)

[Webpack](https://github.com/coderhyh/unplugin-auto-export/blob/master/playground/webpack)

## Contributing {#contributing dir="auto" tabindex="-1"}

[](#contributing){#user-content-contributing aria-label="Permalink: Contributing"}

If you encounter any issues or have suggestions for improvements, feel free to [open an issue](https://github.com/coderhyh/unplugin-auto-export/issues) or [contribute to the project](https://github.com/coderhyh/unplugin-auto-export).

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

This project is licensed under the MIT License. See the [LICENSE](https://github.com/coderhyh/unplugin-auto-export/blob/master/LICENSE) file for details.

## Author {#author dir="auto" tabindex="-1"}

[](#author){#user-content-author aria-label="Permalink: Author"}

GitHub: [coderhyh](https://github.com/coderhyh)

## Additional Information {#additional-information dir="auto" tabindex="-1"}

[](#additional-information){#user-content-additional-information aria-label="Permalink: Additional Information"}

For more information and updates, visit the [`unplugin-auto-export` GitHub](https://github.com/coderhyh/unplugin-auto-export) repository.
