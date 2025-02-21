# unjs/codeup (github.com)

<https://github.com/unjs/codeup>

## Description

Automated codebase updater [POC]. Contribute to unjs/codeup development by creating an account on GitHub.

## Quote

> Automated codebase updater [POC]

## Tags

# #TypeScript

## Content

# GitHub - unjs/codeup: Automated codebase updater \[POC\] {#github---unjscodeup-automated-codebase-updater-poc .reader-title}

unjs

------------------------------------------------------------------------

## codeup {#codeup dir="auto" tabindex="-1"}

[](#codeup){#user-content-codeup aria-label="Permalink: codeup"}

[![npm version](https://camo.githubusercontent.com/0ad5e04faf020e5dd3596d7cf5d02481a9b6eba899a67f184cb48fd7d3bae4d2/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f636f646575703f636f6c6f723d79656c6c6f77){canonical-src="https://img.shields.io/npm/v/codeup?color=yellow"}](https://npmjs.com/package/codeup){rel="nofollow"}
[![npm downloads](https://camo.githubusercontent.com/8eef9921a167c47b39999b4609a14a503bfa8d11af5b886edb360519596b2785/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f636f646575703f636f6c6f723d79656c6c6f77){canonical-src="https://img.shields.io/npm/dm/codeup?color=yellow"}](https://npm.chart.dev/codeup){rel="nofollow"}

Automated codebase updater.

Important

This project a proof of concept in the current state.

## Why? {#why dir="auto" tabindex="-1"}

[](#why){#user-content-why aria-label="Permalink: Why?"}

Manually applying a change across multiple repositotires can become tiresome.

Codeup exposes conventional utils and a CLI to make it easier to migrate code and apply changes automatically and programmatically.

## Defining actions {#defining-actions dir="auto" tabindex="-1"}

[](#defining-actions){#user-content-defining-actions aria-label="Permalink: Defining actions"}

You can define shared actions using codeup. See [./actions](https://github.com/unjs/codeup/blob/main/actions) dir for some examples.

    import { defineAction } from "codeup";

    export default defineAction({
      meta: {
        name: "",
        description: "",
        date: "",
      },
      async filter({ utils, logger }) {},
      async apply({ utils, logger }) {},
    });

**Example:**

    import { defineAction } from "codeup";

    export default defineAction({
      meta: {
        name: "eslint-flat",
        description: "Upgrade to eslint flat config with unjs preset",
        date: "2024-05-03",
      },
      async filter({ utils }) {
        // Only apply if legacy eslint config is found
        return (
          (await utils.existsWithAnyExt(".eslintrc")) &&
          !(await utils.existsWithAnyExt("eslint.config"))
        );
      },
      async apply({ utils }) {
        // Migrate to new eslint config
        const eslintRC = await utils.readJSON(".eslintrc");
        const eslintignore = (await utils.readLines(".eslintignore")) || [];
        await utils.write(
          "eslint.config.mjs",
          getConfigTemplate({
            rules: eslintRC?.rules || {},
            ignores: eslintignore.filter(
              (i) => !["", "node_modules", "dist", "coverage"].includes(i),
            ),
          }),
        );

        // Remove legacy eslint config files
        await utils.remove(".eslintrc");
        await utils.remove(".eslintignore");

        // Update package.json scripts
        await utils.updatePackageJSON((pkg) => {
          if (!pkg.scripts) {
            return;
          }
          for (const name in pkg.scripts) {
            if (pkg.scripts[name].includes("eslint")) {
              pkg.scripts[name] = pkg.scripts[name].replace(/--ext\s+\S+\s/, "");
            }
          }
        });

        // Ensure latest eslint and preset versions are installed
        await utils.addDevDependency([
          "eslint@^9.0.0",
          "eslint-config-unjs@^0.3.0",
        ]);

        // Run lint:fix script once
        await utils.runScript("lint:fix");
      },
    });

    function getConfigTemplate(opts: {
      rules: Record<string, unknown>;
      ignores: string[];
    }) {
      return /* js */ `
    import unjs from "eslint-config-unjs";

    // https://github.com/unjs/eslint-config
    export default unjs({
      ignores: ${JSON.stringify(opts.ignores || [], undefined, 2)},
      rules: ${JSON.stringify(opts.rules || {}, undefined, 2)},
    });
    `.trim();
    }

## Apply Actions {#apply-actions dir="auto" tabindex="-1"}

[](#apply-actions){#user-content-apply-actions aria-label="Permalink: Apply Actions"}

You can use `codeup apply` CLI to apply actions from a local directory or remote source (powered by [unjs/giget](https://giget.unjs.io/){rel="nofollow"}).

By default actions order will be sorted by date and name.

    # Run all actions from local dir
    npx codeup apply --actions path/to/actions/dir

    # Run actions from a github source
    npx codeup apply --actions gh:unjs/codeup/actions/unjs

## Utils {#utils dir="auto" tabindex="-1"}

[](#utils){#user-content-utils aria-label="Permalink: Utils"}

You can directly use codeup utils as a library use use them within actions context.

    import { readJSON, runScript } from "codeup/utils";

## File System {#file-system dir="auto" tabindex="-1"}

[](#file-system){#user-content-file-system aria-label="Permalink: File System"}

### `append(path, contents, opts?: { newLine? })` {#appendpath-contents-opts-newline dir="auto" tabindex="-1"}

[](#appendpath-contents-opts--newline-){#user-content-appendpath-contents-opts--newline- aria-label="Permalink: append(path, contents, opts?: { newLine? })"}

Append text to a file (with a newline by default)

### `exists(path, opts?: { withAnyExt? })` {#existspath-opts-withanyext dir="auto" tabindex="-1"}

[](#existspath-opts--withanyext-){#user-content-existspath-opts--withanyext- aria-label="Permalink: exists(path, opts?: { withAnyExt? })"}

Checks if a file or directory exists in path

### `existsWithAnyExt(path)` {#existswithanyextpath dir="auto" tabindex="-1"}

[](#existswithanyextpath){#user-content-existswithanyextpath aria-label="Permalink: existsWithAnyExt(path)"}

Checks if a file or directory exists in path with any extension (input path should not contain extension)

### `findUp(name)` {#findupname dir="auto" tabindex="-1"}

[](#findupname){#user-content-findupname aria-label="Permalink: findUp(name)"}

Try to find a file in the current working directory or any parent directories

### `read(path)` {#readpath dir="auto" tabindex="-1"}

[](#readpath){#user-content-readpath aria-label="Permalink: read(path)"}

Try to read a text file and returns its contents

### `readLines(path)` {#readlinespath dir="auto" tabindex="-1"}

[](#readlinespath){#user-content-readlinespath aria-label="Permalink: readLines(path)"}

Read a text file and return its contents as an array of lines

### `remove(path, opts?: { log? })` {#removepath-opts-log dir="auto" tabindex="-1"}

[](#removepath-opts--log-){#user-content-removepath-opts--log- aria-label="Permalink: remove(path, opts?: { log? })"}

Try to remove a file or directory

### `resolve(path)` {#resolvepath dir="auto" tabindex="-1"}

[](#resolvepath){#user-content-resolvepath aria-label="Permalink: resolve(path)"}

Resolves a path relative to the current working directory.

### `update(path, fn, opts?: { log? })` {#updatepath-fn-opts-log dir="auto" tabindex="-1"}

[](#updatepath-fn-opts--log-){#user-content-updatepath-fn-opts--log- aria-label="Permalink: update(path, fn, opts?: { log? })"}

Read a file and update its contents

Returns the updated contents or the old one

### `write(path, contents, opts?: { skipIfExists?, log? })` {#writepath-contents-opts-skipifexists-log dir="auto" tabindex="-1"}

[](#writepath-contents-opts--skipifexists-log-){#user-content-writepath-contents-opts--skipifexists-log- aria-label="Permalink: write(path, contents, opts?: { skipIfExists?, log? })"}

Write text contents to a file

## Json {#json dir="auto" tabindex="-1"}

[](#json){#user-content-json aria-label="Permalink: Json"}

### `readJSON(path)` {#readjsonpath dir="auto" tabindex="-1"}

[](#readjsonpath){#user-content-readjsonpath aria-label="Permalink: readJSON(path)"}

Try to read a JSON file

### `updateJSON(path, updater)` {#updatejsonpath-updater dir="auto" tabindex="-1"}

[](#updatejsonpath-updater){#user-content-updatejsonpath-updater aria-label="Permalink: updateJSON(path, updater)"}

Try to update a JSON file using an updater function and return updated JSON

### `writeJSON(path, json, opts?)` {#writejsonpath-json-opts dir="auto" tabindex="-1"}

[](#writejsonpath-json-opts){#user-content-writejsonpath-json-opts aria-label="Permalink: writeJSON(path, json, opts?)"}

Write a JSON file

## Package Json {#package-json dir="auto" tabindex="-1"}

[](#package-json){#user-content-package-json aria-label="Permalink: Package Json"}

### `addDependency(name, opts?)` {#adddependencyname-opts dir="auto" tabindex="-1"}

[](#adddependencyname-opts){#user-content-adddependencyname-opts aria-label="Permalink: addDependency(name, opts?)"}

Add a dependency to the project using detected package manager

### `addDevDependency(name, opts?)` {#adddevdependencyname-opts dir="auto" tabindex="-1"}

[](#adddevdependencyname-opts){#user-content-adddevdependencyname-opts aria-label="Permalink: addDevDependency(name, opts?)"}

Add a dev dependency to the project using detected package manager

### `detectPackageManager()` {#detectpackagemanager dir="auto" tabindex="-1"}

[](#detectpackagemanager){#user-content-detectpackagemanager aria-label="Permalink: detectPackageManager()"}

Detect current package manager

### `readPackageJSON()` {#readpackagejson dir="auto" tabindex="-1"}

[](#readpackagejson){#user-content-readpackagejson aria-label="Permalink: readPackageJSON()"}

Try to read the closest package.json file

### `removeDependency(name, opts?)` {#removedependencyname-opts dir="auto" tabindex="-1"}

[](#removedependencyname-opts){#user-content-removedependencyname-opts aria-label="Permalink: removeDependency(name, opts?)"}

Remove a dependency from the project using detected package manager

### `runPackageManagerCommand(command, opts?: { ignoreErrors? })` {#runpackagemanagercommandcommand-opts-ignoreerrors dir="auto" tabindex="-1"}

[](#runpackagemanagercommandcommand-opts--ignoreerrors-){#user-content-runpackagemanagercommandcommand-opts--ignoreerrors- aria-label="Permalink: runPackageManagerCommand(command, opts?: { ignoreErrors? })"}

Run a command with the detected package manager

### `runScript(script)` {#runscriptscript dir="auto" tabindex="-1"}

[](#runscriptscript){#user-content-runscriptscript aria-label="Permalink: runScript(script)"}

Run a `package.json` script using detected package manager

### `updatePackageJSON()` {#updatepackagejson dir="auto" tabindex="-1"}

[](#updatepackagejson){#user-content-updatepackagejson aria-label="Permalink: updatePackageJSON()"}

Try to update the closest package.json file

## Programmatic API {#programmatic-api dir="auto" tabindex="-1"}

[](#programmatic-api){#user-content-programmatic-api aria-label="Permalink: Programmatic API"}

You can integrate codeup in your workflows using programmatic API instead of CLI.

    import { applyActionsFrom } from "codeup";

### `applyAction(action, cwd)` {#applyactionaction-cwd dir="auto" tabindex="-1"}

[](#applyactionaction-cwd){#user-content-applyactionaction-cwd aria-label="Permalink: applyAction(action, cwd)"}

Apply an action within context and working directory.

### `applyActionFromFile(path, workingDir)` {#applyactionfromfilepath-workingdir dir="auto" tabindex="-1"}

[](#applyactionfromfilepath-workingdir){#user-content-applyactionfromfilepath-workingdir aria-label="Permalink: applyActionFromFile(path, workingDir)"}

Load and apply action from file.

### `applyActions(actions, cwd, opts?: { sort })` {#applyactionsactions-cwd-opts-sort dir="auto" tabindex="-1"}

[](#applyactionsactions-cwd-opts--sort-){#user-content-applyactionsactions-cwd-opts--sort- aria-label="Permalink: applyActions(actions, cwd, opts?: { sort })"}

Apply multiple actions within context and working directory.

If `opts.sort` is true, actions will be sorted by date or name otherwise in the order they are provided.

### `applyActionsFrom(source, cwd)` {#applyactionsfromsource-cwd dir="auto" tabindex="-1"}

[](#applyactionsfromsource-cwd){#user-content-applyactionsfromsource-cwd aria-label="Permalink: applyActionsFrom(source, cwd)"}

Load and apply actions from a remote or local source.

### `applyActionsFromDir(actionsDir, cwd)` {#applyactionsfromdiractionsdir-cwd dir="auto" tabindex="-1"}

[](#applyactionsfromdiractionsdir-cwd){#user-content-applyactionsfromdiractionsdir-cwd aria-label="Permalink: applyActionsFromDir(actionsDir, cwd)"}

Load and apply actions from directory.

### `createContext(cwd, name?)` {#createcontextcwd-name dir="auto" tabindex="-1"}

[](#createcontextcwd-name){#user-content-createcontextcwd-name aria-label="Permalink: createContext(cwd, name?)"}

Create an action context from a working directory.

### `defineAction(action)` {#defineactionaction dir="auto" tabindex="-1"}

[](#defineactionaction){#user-content-defineactionaction aria-label="Permalink: defineAction(action)"}

### `getActionName(action)` {#getactionnameaction dir="auto" tabindex="-1"}

[](#getactionnameaction){#user-content-getactionnameaction aria-label="Permalink: getActionName(action)"}

Get action name from action object.

### `loadActionFromFile(path)` {#loadactionfromfilepath dir="auto" tabindex="-1"}

[](#loadactionfromfilepath){#user-content-loadactionfromfilepath aria-label="Permalink: loadActionFromFile(path)"}

Load action from file.

### `loadActionsFromDir(actionsDir)` {#loadactionsfromdiractionsdir dir="auto" tabindex="-1"}

[](#loadactionsfromdiractionsdir){#user-content-loadactionsfromdiractionsdir aria-label="Permalink: loadActionsFromDir(actionsDir)"}

Load actions from a directory.

### `runWithContext(context, fn)` {#runwithcontextcontext-fn dir="auto" tabindex="-1"}

[](#runwithcontextcontext-fn){#user-content-runwithcontextcontext-fn aria-label="Permalink: runWithContext(context, fn)"}

Run a function within a context.

### `sortActions(actions)` {#sortactionsactions dir="auto" tabindex="-1"}

[](#sortactionsactions){#user-content-sortactionsactions aria-label="Permalink: sortActions(actions)"}

Sort actions by date or name.

### `useContext()` {#usecontext dir="auto" tabindex="-1"}

[](#usecontext){#user-content-usecontext aria-label="Permalink: useContext()"}

Get the current action context or create a new one from the working directory.

## Development {#development dir="auto" tabindex="-1"}

[](#development){#user-content-development aria-label="Permalink: Development"}

local development

-   Clone this repository
-   Install latest LTS version of [Node.js](https://nodejs.org/en/){rel="nofollow"}
-   Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
-   Install dependencies using `pnpm install`
-   Enable stub mode using `pnpm build --stub`

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

------------------------------------------------------------------------

*🤖 auto updated with [automd](https://automd.unjs.io/){rel="nofollow"}*
