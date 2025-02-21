# Modyfi/vite-plugin-yaml (github.com)

<https://github.com/Modyfi/vite-plugin-yaml>

## Description

Transform a YAML file to a JS object. Contribute to Modyfi/vite-plugin-yaml development by creating an account on GitHub.

## Quote

> Transform a YAML file to a JS object

## Tags

#vite #vite-plugin #yaml #TypeScript

## Content

# GitHub - Modyfi/vite-plugin-yaml: Transform a YAML file to a JS object {#github---modyfivite-plugin-yaml-transform-a-yaml-file-to-a-js-object .reader-title}

Modyfi

------------------------------------------------------------------------

[![Pipeline](https://github.com/Modyfi/vite-plugin-yaml/actions/workflows/pipeline.yml/badge.svg)](https://github.com/Modyfi/vite-plugin-yaml/actions/workflows/pipeline.yml)

## 🧹 vite-plugin-yaml {#vite-plugin-yaml dir="auto" tabindex="-1"}

[](#-vite-plugin-yaml){#user-content--vite-plugin-yaml aria-label="Permalink: 🧹 vite-plugin-yaml"}

Transforms a YAML file into a JS object.

## 🚀 Install {#install dir="auto" tabindex="-1"}

[](#-install){#user-content--install aria-label="Permalink: 🚀 Install"}

    npm install -D @modyfi/vite-plugin-yaml
    # or
    # yarn add -D @modyfi/vite-plugin-yaml
    # or
    # pnpm i -D @modyfi/vite-plugin-yaml

## 🦄 Usage {#usage dir="auto" tabindex="-1"}

[](#-usage){#user-content--usage aria-label="Permalink: 🦄 Usage"}

Add `ViteYAML` to `vite.config.js / vite.config.ts`:

    // vite.config.js / vite.config.ts
    import ViteYaml from '@modyfi/vite-plugin-yaml';

    export default {
      plugins: [
        ViteYaml(), // you may configure the plugin by passing in an object with the options listed below
      ],
    };

Then you can simply import yaml files like you would any other file:

    import YamlContent from './your.yaml';

    console.log(YamlContent.example);

Do note that you may have to include the file type in your import.

### 🔦 TypeScript support {#typescript-support dir="auto" tabindex="-1"}

[](#-typescript-support){#user-content--typescript-support aria-label="Permalink: 🔦 TypeScript support"}

The recommended way to add type definitions for `.yaml` or `.yml` modules is via a `tsconfig.json` file.

    // tsconfig.json
    {
      "compilerOptions": {
        ...
        "types": [
          ...
          "@modyfi/vite-plugin-yaml/modules"
          ],
      }
    }

You may also add type definitions without `tsconfig`:

    // vite-env.d.ts
    /// <reference types="@modyfi/vite-plugin-yaml/modules" />

## 🐛 Options {#options dir="auto" tabindex="-1"}

[](#-options){#user-content--options aria-label="Permalink: 🐛 Options"}

    /**
     * A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should operate on.
     *
     * By default all files are targeted.
     */
    include?: FilterPattern;
    /**
     * A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore.
     *
     * By default no files are ignored.
     */
    exclude?: FilterPattern;
    /**
     * Schema used to parse yaml files.
     *
     * @see https://github.com/nodeca/js-yaml/blob/49baadd52af887d2991e2c39a6639baa56d6c71b/README.md#load-string---options-
     */
    schema?: Schema;
    /**
     * A boolean to determine if JSON object should be serialized.
     *
     * @see https://www.npmjs.com/package/tosource for the motivation behind serialization of JSON.
     */
    raw?: boolean;
    /**
     * A function that will be called for error reporting.
     *
     * Defaults to `console.warn()`.
     */
    onWarning?: (warning: YAMLException) => void;
