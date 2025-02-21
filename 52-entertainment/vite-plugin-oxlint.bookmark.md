# 52-entertainment/vite-plugin-oxlint (github.com)

<https://github.com/52-entertainment/vite-plugin-oxlint>

## Description

⚓️+⚡️- Oxlint plugin for vite. Contribute to 52-entertainment/vite-plugin-oxlint development by creating an account on GitHub.

## Quote

> ⚓️+⚡️- Oxlint plugin for vite.

## Tags

#oxc #oxlint #vite #vite-plugin #TypeScript

## Content

# GitHub - 52-entertainment/vite-plugin-oxlint: ⚓️+⚡️- Oxlint plugin for vite. {#github---52-entertainmentvite-plugin-oxlint---oxlint-plugin-for-vite. .reader-title}

52-entertainment

------------------------------------------------------------------------

## ⚓️+⚡️Vite Plugin Oxlint {#vite-plugin-oxlint dir="auto" tabindex="-1"}

[](#️️vite-plugin-oxlint){#user-content-️️vite-plugin-oxlint aria-label="Permalink: ⚓️+⚡️Vite Plugin Oxlint"}

This is a Vite plugin for integrating the [Oxlint](https://oxc-project.github.io/){rel="nofollow"} linter into your Vite project.

## Installation {#installation dir="auto" tabindex="-1"}

[](#installation){#user-content-installation aria-label="Permalink: Installation"}

    npm install vite-plugin-oxlint oxlint

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

Add the plugin to your `vite.config.js` file.

    import oxlintPlugin from 'vite-plugin-oxlint'

    export default {
      plugins: [oxlintPlugin()],
    }

## Advanced Usage {#advanced-usage dir="auto" tabindex="-1"}

[](#advanced-usage){#user-content-advanced-usage aria-label="Permalink: Advanced Usage"}

### Oxlint Configuration File {#oxlint-configuration-file dir="auto" tabindex="-1"}

[](#oxlint-configuration-file){#user-content-oxlint-configuration-file aria-label="Permalink: Oxlint Configuration File"}

You can use a configuration file. See [Oxlint configuration file](https://oxc.rs/docs/guide/usage/linter/config.html){rel="nofollow"}.

[Allow / Deny / Warn](#allow--deny--warn-rules) will override config files rules.

Default to `oxlintrc.json`.

    import oxlintPlugin from 'vite-plugin-oxlint'

    export default {
      plugins: [
        oxlintPlugin({
          configFile: 'eslintrc.json',
        }),
      ],
    }

### Change working directory {#change-working-directory dir="auto" tabindex="-1"}

[](#change-working-directory){#user-content-change-working-directory aria-label="Permalink: Change working directory"}

You can change the directory where oxlinter will run.
Default to the root of your project.

Examples: only lint files in your `src` directory.

    import oxlintPlugin from 'vite-plugin-oxlint'

    export default {
      plugins: [
        oxlintPlugin({
          path: 'src',
        }),
      ],
    }

### Ignore patterns {#ignore-patterns dir="auto" tabindex="-1"}

[](#ignore-patterns){#user-content-ignore-patterns aria-label="Permalink: Ignore patterns"}

You can specify patterns of files to ignore. The supported syntax is the same as for .eslintignore and .gitignore files You should quote your patterns in order to avoid shell interpretation of glob patterns
See [oxlint ignore](https://oxc.rs/docs/guide/usage/linter/cli.html#ignore-files){rel="nofollow"}

Example: lint files in your `src`, but not test.js files:

    import oxlintPlugin from 'vite-plugin-oxlint'

    export default {
      plugins: [
        oxlintPlugin({
          path: 'src',
          ignorePattern: '"test.js"',
        }),
      ],
    }

### Allow / Deny / Warn rules {#allow-deny-warn-rules dir="auto" tabindex="-1"}

[](#allow--deny--warn-rules){#user-content-allow--deny--warn-rules aria-label="Permalink: Allow / Deny / Warn rules"}

You can allow, deny or warn oxlinter rules or categories.
To see the list of available rules and categories, run:
`npx oxlint --rules`
This will override [config files](#oxlint-configuration-file).

Example: deny (turn on) `correctness` and `perf` rules and allow (turn off) the `debugger` and `eqeqeq` rule.

    import oxlintPlugin from 'vite-plugin-oxlint'

    export default {
      plugins: [
        oxlintPlugin({
          deny: ['correctness', 'perf'],
          allow: ['debugger', 'eqeqeq'],
          warn: [],
        }),
      ],
    }

### Additional oxlint config: {#additional-oxlint-config dir="auto" tabindex="-1"}

[](#additional-oxlint-config){#user-content-additional-oxlint-config aria-label="Permalink: Additional oxlint config:"}

You can pass any additional oxlint config as a string.
See [oxlint options](https://oxc-project.github.io/docs/guide/usage/linter.html#useful-options){rel="nofollow"} for a list of available options.

Example: add the `--deny-warnings` and `--quiet` option to the `vite-plugin-oxlint` config:

    import oxlintPlugin from 'vite-plugin-oxlint'

    export default {
      plugins: [
        oxlintPlugin({
          params: '--deny-warnings --quiet',
        }),
      ],
    }

## Integration with ESlint {#integration-with-eslint dir="auto" tabindex="-1"}

[](#integration-with-eslint){#user-content-integration-with-eslint aria-label="Permalink: Integration with ESlint"}

If your project still needs ESlint, you can use [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint) and configure ESlint with [eslint-plugin-oxlint](https://github.com/oxc-project/eslint-plugin-oxlint) to turn off rules already supported in oxlint

    import oxlintPlugin from 'vite-plugin-oxlint'
    import eslintPlugin from 'vite-plugin-eslint'

    export default {
      plugins: [oxlintPlugin(), eslintPlugin()],
    }

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

[MIT LICENSE](https://github.com/52-entertainment/vite-plugin-oxlint/blob/main/LICENSE)

[GitHub](https://github.com/52-entertainment/vite-plugin-oxlint)
