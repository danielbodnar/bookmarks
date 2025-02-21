# nksaraf/vinxi (github.com)

<https://github.com/nksaraf/vinxi>

## Description

The Full Stack JavaScript SDK. Contribute to nksaraf/vinxi development by creating an account on GitHub.

## Quote

> The Full Stack JavaScript SDK

## Tags

# #JavaScript

## Content

# GitHub - nksaraf/vinxi: The Full Stack JavaScript SDK {#github---nksarafvinxi-the-full-stack-javascript-sdk .reader-title}

nksaraf

------------------------------------------------------------------------

## [![](https://github.com/nksaraf/vinxi/raw/main/docs/public/logo.png){width="196"}](https://github.com/nksaraf/vinxi/blob/main/docs/public/logo.png){rel="noopener noreferrer"} {#section dir="auto" tabindex="-1"}

[](#){aria-label="Permalink:"}

*The JavaScript toolkit to build full stack apps and frameworks with your own opinions.\
powered by [`vite`](https://github.com/vitejs/vite) and [`nitro`](https://github.com/unjs/nitro)*

[![](https://camo.githubusercontent.com/f533bf6d30b5dd7df64871c2b71f54966d612207ff048952a098197e2a856d70/68747470733a2f2f62616467652e667572792e696f2f6a732f76696e78692e737667){canonical-src="https://badge.fury.io/js/vinxi.svg"}](https://camo.githubusercontent.com/f533bf6d30b5dd7df64871c2b71f54966d612207ff048952a098197e2a856d70/68747470733a2f2f62616467652e667572792e696f2f6a732f76696e78692e737667){rel="noopener noreferrer nofollow"}

## `vinxi` {#vinxi dir="auto" tabindex="-1"}

[](#vinxi){#user-content-vinxi aria-label="Permalink: vinxi"}

Compose full stack applications (and frameworks) using [**Vite**](https://github.com/vitejs/vite), the versatile bundler and dev server, and [**Nitro**](https://github.com/unjs/nitro), the universal production server.

Inspired by the [Bun.App](https://bun.sh/blog/bun-bundler#sneak-peek-bun-app){rel="nofollow"} API, the core primitive in Vinxi is the **router**, which is simply a brief specification defining how a group of URLs should be handled.

Vinxi supports many common router types:

-   [\'static\'](https://vinxi.vercel.app/api/router/static.html){rel="nofollow"} - for serving uncompiled, static assets
-   [\'http\'](https://vinxi.vercel.app/api/router/http.html){rel="nofollow"} - for creating traditional web servers
-   [\'spa\'](https://vinxi.vercel.app/api/router/spa.html){rel="nofollow"} - for building and serving single page application assets
-   [\'client\'](https://vinxi.vercel.app/api/router/client.html){rel="nofollow"} - for building and serving of SSR application assets
-   [custom](https://vinxi.vercel.app/api/router/custom.html){rel="nofollow"} - for adapting Vinxi to your use case

Creating a new router is as simple as adding a specification object to the `routers` array in the `createApp` call:

    import { createApp } from 'vinxi';

    export default createApp({
      routers: [
        // A static router serving files from the `public` directory
        {
          name: 'public',
          type: 'static',
          dir: './public',
          base: '/',
        },
        // A http router for an api
        {
          name: 'api',
          type: 'http',
          handler: './app/api.ts',
          base: '/api',
          plugins: () => [
            // Vite plugins applying exclusively to `http` router
          ]
        }
      ],
    });

------------------------------------------------------------------------

There are currently two frameworks actively being developed on `vinxi`:

-   [SolidStart](https://github.com/solidjs/solid-start)
-   [TanstackStart](https://github.com/tanstack/router)

There are also a few other frameworks experimenting with vinxi:

-   [AngularStart](https://github.com/brandonroberts/analog-angular-start)

## Examples {#examples dir="auto" tabindex="-1"}

[](#examples){#user-content-examples aria-label="Permalink: Examples"}

  Framework   Category   Example                   StackBlitz Link
  ----------- ---------- ------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  React       RSC        SPA                       [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/react/rsc/spa){rel="nofollow"}
              SPA        Basic                     [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/react/spa/basic){rel="nofollow"}
                         MDX                       [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/react/spa/mdx){rel="nofollow"}
                         TanStack Router (Pages)   [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/react/spa/tanstack-router){rel="nofollow"}
                         TanStack Router (App)     [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/react/spa/tanstack-router-app){rel="nofollow"}
                         Wouter                    [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/react/spa/wouter){rel="nofollow"}
              SSR        Basic                     [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/react/ssr/basic){rel="nofollow"}
                         Basic w/Cloudflare        [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/react/ssr/basic-cloudflare){rel="nofollow"}
                         TanStack Router (App)     [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/react/ssr/tanstack-router-app){rel="nofollow"}
                         Wouter                    [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/react/ssr/wouter){rel="nofollow"}
  Solid       SPA        Basic                     [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/solid/spa/basic){rel="nofollow"}
              SSR        Basic                     [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/solid/ssr/basic){rel="nofollow"}
                         Solid Router              [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/solid/ssr/solid-router){rel="nofollow"}
  Vanilla                SPA                       [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/vanilla/spa){rel="nofollow"}
                         TRPC                      [![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667){canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"}](https://stackblitz.com/github/nksaraf/vinxi/tree/main/examples/vanilla/trpc){rel="nofollow"}

## Goals {#goals dir="auto" tabindex="-1"}

[](#goals){#user-content-goals aria-label="Permalink: Goals"}

Primary goal is to build the tools needed to build a NextJS or SolidStart style metaframework on top of vite without worrying about a lot of the wiring required to keep dev and prod working along with SSR, SPA, RSC, and all the other acronyms. etc. On top of that, we should be able to deploy anywhere easily.

Mostly trying to disappear for the user outside the app.js file

The surface layer we are intending to tackle:

1.  Full stack builds (handle manifest stuff to figure out what assets to load at prod runtime)
2.  Dev time asset handling (avoiding FOUC in SSR frameworks) and smoothing over some of vite\'s dev/prod mismatching behaviours by providing common manifest APIs that work in dev and prod the same way
3.  File system router (not any specific file system conventions, just an API for interfacing with FileSystemRouters and utils to implement your conventions in them)
4.  Building the server, and providing a simple opaque `handler` API to control the server
5.  Adapter stuff to deploy to various platforms with support for all the features they provide
6.  Not to abstract away the platforms. Let people use what they want to the fullest
7.  Have little opinion about how the app should be authored or structured

## Roadmap {#roadmap dir="auto" tabindex="-1"}

[](#roadmap){#user-content-roadmap aria-label="Permalink: Roadmap"}

-   `vinxi deploy`
-   hooks throughout the app licycle:
    -   dev: app:created, app:started, router:created

## Try it out {#try-it-out dir="auto" tabindex="-1"}

[](#try-it-out){#user-content-try-it-out aria-label="Permalink: Try it out"}

### React SSR {#react-ssr dir="auto" tabindex="-1"}

[](#react-ssr){#user-content-react-ssr aria-label="Permalink: React SSR"}

    import reactRefresh from "@vitejs/plugin-react";
    import { createApp } from "vinxi";

    export default createApp({
        routers: [
            {
                name: "public",
                type: "static",
                dir: "./public",
            },
            {
                name: "client",
                type: "client",
                handler: "./app/client.tsx",
                target: "browser",
                plugins: () => [reactRefresh()],
                base: "/_build",
            },
            {
                name: "ssr",
                type: "http",
                handler: "./app/server.tsx",
                target: "server",
            },
        ],
    });

### Solid SSR {#solid-ssr dir="auto" tabindex="-1"}

[](#solid-ssr){#user-content-solid-ssr aria-label="Permalink: Solid SSR"}

    import { createApp } from "vinxi";
    import solid from "vite-plugin-solid";

    export default createApp({
        routers: [
            {
                name: "public",
                type: "static",
                dir: "./public",
            },
            {
                name: "client",
                type: "client",
                handler: "./app/client.tsx",
                target: "browser",
                plugins: () => [solid({ ssr: true })],
                base: "/_build",
            },
            {
                name: "ssr",
                type: "http",
                handler: "./app/server.tsx",
                target: "server",
                plugins: () => [solid({ ssr: true })],
            },
        ],
    });
