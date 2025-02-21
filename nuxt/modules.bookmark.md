# nuxt/modules (github.com)

<https://github.com/nuxt/modules>

## Description

Discover the Nuxt modules to add any CMS, Database, UI, Auth and integrations into your Vue application. - nuxt/modules

## Quote

> Discover the Nuxt modules to add any CMS, Database, UI, Auth and integrations into your Vue application.

## Tags

#integration #nuxt #nuxt-module #vue #TypeScript

## Content

# GitHub - nuxt/modules: Discover the Nuxt modules to add any CMS, Database, UI, Auth and integrations into your Vue application. {#github---nuxtmodules-discover-the-nuxt-modules-to-add-any-cms-database-ui-auth-and-integrations-into-your-vue-application. .reader-title}

nuxt

------------------------------------------------------------------------

[![Explore Nuxt Modules to build Vue applications](https://user-images.githubusercontent.com/904724/210616249-25aec46e-ab06-4b4d-9154-10b02546d558.jpg)](https://nuxt.com/modules){rel="nofollow"}

## Nuxt Modules {#nuxt-modules dir="auto" tabindex="-1"}

[](#nuxt-modules){#user-content-nuxt-modules aria-label="Permalink: Nuxt Modules"}

[![npm version](https://camo.githubusercontent.com/d027bfa296ea54b365e8cc25714bdbccc589ed36f480f441cb05ca4194243000/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578742f6d6f64756c65732f6c61746573742e7376673f7374796c653d666c617426636f6c6f72413d31383138314226636f6c6f72423d323843463844){canonical-src="https://img.shields.io/npm/v/@nuxt/modules/latest.svg?style=flat&colorA=18181B&colorB=28CF8D"}](https://npmjs.com/package/@nuxt/modules){rel="nofollow"}
[![Nuxt](https://camo.githubusercontent.com/ba01516b9f2a9906b0b93c11ff4e7c301be3fd59c6315fa624365e2fc1b6c9c2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e7578742532304d6f64756c65732d3138313831423f6c6f676f3d6e7578742e6a73){canonical-src="https://img.shields.io/badge/Nuxt%20Modules-18181B?logo=nuxt.js"}](https://nuxt.com/modules){rel="nofollow"}
[![Volta](https://user-images.githubusercontent.com/904724/209143798-32345f6c-3cf8-4e06-9659-f4ace4a6acde.svg)](https://volta.net/nuxt/modules?utm_source=readme_nuxt_modules){rel="nofollow"}

> Discover the Nuxt modules to add any CMS, Database, UI, Auth and integrations into your Vue application.

-   🔗 [Modules listing](https://nuxt.com/modules){rel="nofollow"}
-   📖 [Module author guide](https://nuxt.com/docs/guide/going-further/modules){rel="nofollow"}

## Modules Database {#modules-database dir="auto" tabindex="-1"}

[](#modules-database){#user-content-modules-database aria-label="Permalink: Modules Database"}

Metadata of nuxt modules are maintained in [yml](https://en.wikipedia.org/wiki/YAML){rel="nofollow"} files inside [./modules](https://github.com/nuxt/modules/blob/main/modules) directory and automatically synced from upstream to fetch latest information.

### Add/Update a module {#addupdate-a-module dir="auto" tabindex="-1"}

[](#addupdate-a-module){#user-content-addupdate-a-module aria-label="Permalink: Add/Update a module"}

Example: `pnpm sync tailwindcss nuxt-modules/tailwindcss`

To sync with a branch different than `main`, suffix the repo with `#repo-branch`, example: `pnpm sync tailwindcss nuxt-modules/tailwindcss#dev`

### Contribution {#contribution dir="auto" tabindex="-1"}

[](#contribution){#user-content-contribution aria-label="Permalink: Contribution"}

-   If you feel a module is missing, please create a new [issue](https://github.com/nuxt/modules/issues/new)
-   If some data is outdated please directly open a pull request

### Using CDN {#using-cdn dir="auto" tabindex="-1"}

[](#using-cdn){#user-content-using-cdn aria-label="Permalink: Using CDN"}

Compiled JSON data is available from following CDNs:

-   **jsdelivr:** [https://cdn.jsdelivr.net/npm/@nuxt/modules@latest/modules.json](https://cdn.jsdelivr.net/npm/@nuxt/modules@latest/modules.json){rel="nofollow"}
-   **unpkg:** [https://unpkg.com/@nuxt/modules@latest/modules.json](https://unpkg.com/@nuxt/modules@latest/modules.json){rel="nofollow"}

### Using npm package {#using-npm-package dir="auto" tabindex="-1"}

[](#using-npm-package){#user-content-using-npm-package aria-label="Permalink: Using npm package"}

You can use the `@nuxt/modules` package by installing it in your project:

    # npm
    npm install @nuxt/modules

    # pnpm
    pnpm add @nuxt/modules

Then you can directly import the list of modules:

    // ESM
    import modules from '@nuxt/modules'

    // CommonJS
    const modules = require('@nuxt/modules')

### Schema {#schema dir="auto" tabindex="-1"}

[](#schema){#user-content-schema aria-label="Permalink: Schema"}

  Field Name        Auto sync   Description
  ----------------- ----------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `name`            No          Canonical name or integration name
  `description`     Yes         Short description
  `repo`            No          GitHub repository. Format is `org/name` or `org/name#main/path`
  `npm`             Yes         NPM package name
  `icon`            No          Icon of module from [./icons](https://github.com/nuxt/modules/blob/main/icons) directory
  `github`          No          GitHub URL
  `website`         No          Website URL
  `learn_more`      No          Link to learn more (website or relevant integration website)
  `category`        No          Module category from [./lib/categories.ts](https://github.com/nuxt/modules/blob/main/lib/categories.ts)
  `type`            No          `community` (for [nuxt-community](https://github.com/nuxt-community/)), `official` (for <https://github.com/>) or `3rd-party`
  `maintainers`     Yes         List of maintainers each item has `name`, `github` and `avatar`
  `compatibility`   No          Module compatibility status. `nuxt` field specifies semver of supported nuxt version. `requires.bridge: true|optional` can be used to specify Nuxt 2 bridge compatibility.

## Maintenance {#maintenance dir="auto" tabindex="-1"}

[](#maintenance){#user-content-maintenance aria-label="Permalink: Maintenance"}

### Auto update all current modules {#auto-update-all-current-modules dir="auto" tabindex="-1"}

[](#auto-update-all-current-modules){#user-content-auto-update-all-current-modules aria-label="Permalink: Auto update all current modules"}

### Generate `modules.json` {#generate-modules.json dir="auto" tabindex="-1"}

[](#generate-modulesjson){#user-content-generate-modulesjson aria-label="Permalink: Generate modules.json"}

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

[MIT](https://github.com/nuxt/modules/blob/main/LICENSE) - Made by Nuxt Team
