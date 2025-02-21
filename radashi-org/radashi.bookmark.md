# radashi-org/radashi (github.com)

<https://github.com/radashi-org/radashi>

## Description

The modern, community-first TypeScript toolkit with all of the fast, readable, and minimal utility functions you need. Type-safe, dependency-free, tree-shakeable, fully tested. - radashi-org/radashi

## Quote

> The modern, community-first TypeScript toolkit with all of the fast, readable, and minimal utility functions you need. Type-safe, dependency-free, tree-shakeable, fully tested.

## Tags

#functions #typescript #utility-library #TypeScript

## Content

# GitHub - radashi-org/radashi: The modern, community-first TypeScript toolkit with all of the fast, readable, and minimal utility functions you need. Type-safe, dependency-free, tree-shakeable, fully tested. {#github---radashi-orgradashi-the-modern-community-first-typescript-toolkit-with-all-of-the-fast-readable-and-minimal-utility-functions-you-need.-type-safe-dependency-free-tree-shakeable-fully-tested. .reader-title}

radashi-org

------------------------------------------------------------------------

## Radashi {#radashi dir="auto" tabindex="-1"}

[](#radashi){#user-content-radashi aria-label="Permalink: Radashi"}

**Ditch the bloat of Lodash. Stop reinventing the wheel.**

Radashi (pronounced /ruh-DAH-shee/) is a TypeScript utility toolkit, packed with lightweight functions that are readable, performant, and robust.

Radashi is an actively maintained fork of Radash, the fastest growing Lodash alternative with 100K+ weekly downloads.

*"What makes Radashi so great?"*

-   **unique** and **well-designed** functions
-   **tree-shakeable** (use only what you need!)
-   **dependency-free**
-   **community-first** (your opinions matter)
-   **future-proof** (written with modern ES6+ syntax)
-   **actively maintained** (with a growing team of passionate maintainers)
-   **type-safe** (the best type definitions possible)
-   **full test coverage**
-   **performance tracking** (we track perf regressions with continuous benchmarking)
-   **well-documented**
-   **nightly releases** (`radashi@beta`)
-   **[changelog](https://github.com/radashi-org/radashi/blob/main/CHANGELOG.md)** (easily see what\'s new in each release)

*If you\'ve been using Radash (our predecessor), you\'re probably interested in what makes us different. Read [our comparison post](https://radashi.js.org/blog/vs-radash){rel="nofollow"} to learn how we\'re bringing Radash to the next level while preserving its best features.*

[![Radash documentation](https://github.com/radashi-org/radashi/raw/main/.github/img/docs-button.png){width="250px"}](https://radashi.js.org/){rel="nofollow"}

[![](https://github.com/radashi-org/radashi/raw/main/.github/img/rule.png){width="100%"}](https://github.com/radashi-org/radashi/raw/main/.github/img/rule.png){rel="noopener noreferrer"}

## Install {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: Install"}

### Beta versions {#beta-versions dir="auto" tabindex="-1"}

[](#beta-versions){#user-content-beta-versions aria-label="Permalink: Beta versions"}

Beta versions are published regularly with new functions and improvements. They never contain breaking changes (see the [Breaking changes](#breaking-changes) section). The [beta](https://github.com/radashi-org/radashi/tree/beta) branch contains the source code for beta versions.

To get notified of a new beta version, watch the [radashi-canary](https://github.com/radashi-org/radashi-canary) repository. You can find release notes for beta versions [here](https://github.com/radashi-org/radashi-canary/releases).

The latest beta version can be installed with:

The `-E` flag ensures that the `beta` version is installed as an exact version (e.g. `radashi@12.3.0-beta.abc1234`). This is recommended to avoid accidental breakage.

### Breaking changes {#breaking-changes dir="auto" tabindex="-1"}

[](#breaking-changes){#user-content-breaking-changes aria-label="Permalink: Breaking changes"}

Preview releases for the next major version are also announced in the [radashi-canary](https://github.com/radashi-org/radashi-canary/releases) repository. The [next](https://github.com/radashi-org/radashi/tree/next) branch contains the source code for the next major version.

We\'d appreciate your help testing the latest `next` version before it\'s released:

### JSR.io {#jsr.io dir="auto" tabindex="-1"}

[](#jsrio){#user-content-jsrio aria-label="Permalink: JSR.io"}

Radashi is also published to the [JSR registry](https://jsr.io/docs/why){rel="nofollow"}, which gives Radashi [its own page](https://jsr.io/@radashi-org/radashi){rel="nofollow"}.

    jsr add @radashi-org/radashi

    deno add @radashi-org/radashi

[![](https://github.com/radashi-org/radashi/raw/main/.github/img/rule.png){width="100%"}](https://github.com/radashi-org/radashi/raw/main/.github/img/rule.png){rel="noopener noreferrer"}

## FAQ {#faq dir="auto" tabindex="-1"}

[](#faq){#user-content-faq aria-label="Permalink: FAQ"}

-   **"I need XYZ, but Radashi doesn\'t have it."**\
    If you have a need not met by our current set of functions, we want to hear about it. [Start a discussion](https://github.com/orgs/radashi-org/discussions/new?category=ideas) so we can explore the idea together!

-   **What does "community first" mean exactly?**\
    It means putting the community\'s needs first, leaning towards adding support for popular use cases, as opposed to being strictly minimalist. As such, your feedback is very welcome and we value your perspective. Specifically, we want you to [contribute your viewpoint](https://github.com/orgs/radashi-org/discussions/categories/rfcs?discussions_q=is%3Aopen+category%3ARFCs) to discussions in our RFCs category.

-   **Are my contributions welcome?**\
    Yes! Pull requests are encouraged, but please keep them small and focused. Sweeping changes are discouraged and won\'t be merged (unless the rationale\'s been thoroughly discussed).

    Please review *"The ethos of Radashi"* before submitting a pull request:

    [![The ethos of Radashi](https://github.com/radashi-org/radashi/raw/main/.github/img/ethos-button.png){width="250px"}](https://github.com/orgs/radashi-org/discussions/20)

-   **Can I help you maintain this?**\
    Yes! I\'ll add you as a contributor to the repository. You can review pull requests and help with triage. With time, you may earn the ability to merge approved PRs.

    [![Apply to join the Radashi team](https://github.com/radashi-org/radashi/raw/main/.github/img/apply-button.png){width="250px"}](https://github.com/orgs/radashi-org/discussions/4)

-   **Is backwards compatibility a goal?**\
    Yes! We want the transition from `radash` to this library to be smooth. If you\'re coming from Radash, we recommend installing `radashi@^12`. This version will continue to receive backported fixes even after Radashi v13 is released. You can upgrade to the latest major version when you\'re ready.

-   **Automatic releases**\
    To ensure contributions are quickly rolled out, we have the following automatic processes:

    -   **Patch releases**\
        Whenever the `main` branch receives a `^fix:` commit, a patch release is immediately published to NPM.

    -   **Beta releases**\
        Pull requests that add a new feature can be labeled with `prerelease` by a maintainer. This triggers a GitHub workflow that attempts to copy the PR into the `beta` branch. If that succeeds, a beta release is immediately published to NPM.

        Installing `radashi@beta` will always fetch the latest beta release. Although the name \"beta\" may suggest unstable code, PRs need tests to be eligible for a prerelease.

        Beta releases provide quick access to new features without waiting for a regular release cycle. They\'re also an opportunity for the community to provide feedback before the feature is released to the `main` branch.

    -   **\"Next\" releases**\
        Pull requests with breaking changes can also be labeled with `prerelease` by a maintainer. In this case, the PR is copied into the `next` branch. If that succeeds, a \"next\" release is published to NPM.

        Installing `radashi@next` will always fetch the latest \"next\" release.

-   **Release cycle**\
    Radashi is expected to release a new minor or major version on a monthly basis, but releases are not on a strict schedule. Pre-releases are available for testing and feedback before the final release.

[![](https://github.com/radashi-org/radashi/raw/main/.github/img/rule.png){width="100%"}](https://github.com/radashi-org/radashi/raw/main/.github/img/rule.png){rel="noopener noreferrer"}

## Contributing {#contributing dir="auto" tabindex="-1"}

[](#contributing){#user-content-contributing aria-label="Permalink: Contributing"}

Contributions are welcome and appreciated! Check out the contributing guide before you dive in:

[![Contributing to Radashi](https://github.com/radashi-org/radashi/raw/main/.github/img/contributing-button.png){width="250px"}](https://github.com/radashi-org/radashi/blob/main/.github/contributing.md)

[![](https://github.com/radashi-org/radashi/raw/main/.github/img/rule.png){width="100%"}](https://github.com/radashi-org/radashi/raw/main/.github/img/rule.png){rel="noopener noreferrer"}

[![Radashi](https://github.com/radashi-org/radashi/raw/main/.github/img/footer.png){width="100%"}](https://github.com/radashi-org/radashi/raw/main/.github/img/footer.png){rel="noopener noreferrer"}
