# daangn/stackflow (github.com)

<https://github.com/daangn/stackflow>

## Description

🧱 Mobile-first stack navigator framework with composable plugin system - daangn/stackflow

## Quote

> 🧱 Mobile-first stack navigator framework with composable plugin system

## Tags

#framework #mobile #navigator #plugin #react #stack #system #typescript #webview #TypeScript

## Content

# GitHub - daangn/stackflow: 🧱 Mobile-first stack navigator framework with composable plugin system {#github---daangnstackflow-mobile-first-stack-navigator-framework-with-composable-plugin-system .reader-title}

daangn

------------------------------------------------------------------------

## Introduction {#introduction dir="auto" tabindex="-1"}

[](#introduction){#user-content-introduction aria-label="Permalink: Introduction"}

> View full documentation and demo on [https://stackflow.so](https://stackflow.so/){rel="nofollow"}

**Stackflow** is a project that implements Stack Navigation UX, which is mainly used in mobile devices (iOS/Android, etc.) in a JavaScript environment. So, it can help to easily develop hybrid apps and webviews.

-   Stack screens and keep scrolling state.
-   It supports transition effects that stack up the screen and the transition effect that disappears when you go back.
-   Supports iOS-style swipe back.
-   It passes the necessary parameters to the screen to be switched.

So, what advantages does **Stackflow** have compared to the existing navigation library?

-   You can only use the state for stacks and transitions separately without UI. You can tear off the UI and use it as you like.
-   You can inject any additional extensions you want between lifecycles through the plugin interface.
-   Since the core logic and integration layers are separated, it can be integrated with various front-end frameworks. (Now only supports React)
-   Because render logic and UI can be injected from the outside, mobile webview and desktop development can be done in one codebase.
-   Server-Side Rendering is supported. (`ReactDOMServer.renderToString`)

## Getting Started {#getting-started dir="auto" tabindex="-1"}

[](#getting-started){#user-content-getting-started aria-label="Permalink: Getting Started"}

    $ yarn add @stackflow/core @stackflow/react

    import ReactDOM from 'react-dom'

    import { stackflow } from '@stackflow/react';

    const { Stack, useFlow } = stackflow({
      // ...
    });

    const App: React.FC = () => {
      return (
        <Stack />
      );
    };

    ReactDOM.render(<App />, ...)

## Integration Examples {#integration-examples dir="auto" tabindex="-1"}

[](#integration-examples){#user-content-integration-examples aria-label="Permalink: Integration Examples"}

-   [Standalone](https://github.com/daangn/stackflow/blob/main/demo)
-   [Gatsby](https://github.com/daangn/stackflow-example-gatsby)
-   [Next.js](https://github.com/daangn/stackflow-example-nextjs) (💥 Not Recommended)

> To integrate **Stackflow** with a specific framework with routing capabilities, the framework requires an extension to manually call the preload API. However, Next.js does not officially support the preload API.

## Contributors {#contributors dir="auto" tabindex="-1"}

[](#contributors){#user-content-contributors aria-label="Permalink: Contributors"}

To contribute new features or options to **Stackflow**, please check [Contribution Guide](https://github.com/daangn/stackflow/blob/main/CONTRIBUTING.md)

[![](https://camo.githubusercontent.com/74bee98142838598973b8f309ba51cd147cc9e89405850874789dd4918429546/68747470733a2f2f636f6e747269622e726f636b732f696d6167653f7265706f3d6461616e676e2f737461636b666c6f77){canonical-src="https://contrib.rocks/image?repo=daangn/stackflow"}](https://github.com/daangn/stackflow/graphs/contributors)

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

MIT
