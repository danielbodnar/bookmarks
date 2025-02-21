# Baroshem/nuxt-security (github.com)

<https://github.com/Baroshem/nuxt-security>

## Description

🛡 Automatically configure your app to follow OWASP security patterns and principles by using HTTP Headers and Middleware - nuxt-modules/security

## Quote

> 🛡 Automatically configure your app to follow OWASP security patterns and principles by using HTTP Headers and Middleware

## Tags

#basic-authentication #cors #csrf #headers-security #module #nonce #nuxt #owasp #rate-limiting #security #vue #xss #TypeScript

## Content

# GitHub - nuxt-modules/security: 🛡 Automatically configure your app to follow OWASP security patterns and principles by using HTTP Headers and Middleware {#github---nuxt-modulessecurity-automatically-configure-your-app-to-follow-owasp-security-patterns-and-principles-by-using-http-headers-and-middleware .reader-title}

nuxt-modules

------------------------------------------------------------------------

[![nuxt-security](https://camo.githubusercontent.com/dd0c28221d19b9762da274f1c438cc66f68a5645ddc6728a66363464596558e3/68747470733a2f2f6e7578742d73656375726974792e76657263656c2e6170702f707265766965772e706e67){canonical-src="https://nuxt-security.vercel.app/preview.png"}](https://nuxt-security.vercel.app/){rel="nofollow"}

[![npm version](https://camo.githubusercontent.com/484cfa66b2914ef4dd284712f94d2ee16d3d3ad75656e8859ab7dfa969ff8009/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6e7578742d73656375726974792f6c61746573742e737667){canonical-src="https://img.shields.io/npm/v/nuxt-security/latest.svg"}](https://npmjs.com/package/nuxt-security){rel="nofollow"}
[![npm downloads](https://camo.githubusercontent.com/e95f2b447be9051e682405c3048fba2f2b2c4ea472fd427aa446352600e41892/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f6e7578742d73656375726974792e737667){canonical-src="https://img.shields.io/npm/dt/nuxt-security.svg"}](https://npmjs.com/package/nuxt-security){rel="nofollow"}
[![Github Actions CI](https://github.com/baroshem/nuxt-security/actions/workflows/ci.yml/badge.svg)](https://github.com/baroshem/nuxt-security/actions?query=workflow%3Aci)
[![License](https://camo.githubusercontent.com/113dc0e6c328c03cdb6174b21c2389cb4c2ddf99c0c3e8684d8563fa21ea59ed/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f6e7578742d73656375726974792e737667){canonical-src="https://img.shields.io/npm/l/nuxt-security.svg"}](https://npmjs.com/package/nuxt-security){rel="nofollow"}
[![Nuxt](https://camo.githubusercontent.com/7ea5b94fdb0222d1ad05a1a95d90063f34cc0eb7fa63b1bab72de5ee938309e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e7578742d3138313831423f6c6f676f3d6e7578742e6a73){canonical-src="https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js"}](https://nuxt.com/){rel="nofollow"}

## Nuxt Security {#nuxt-security dir="auto" tabindex="-1"}

[](#nuxt-security){#user-content-nuxt-security aria-label="Permalink: Nuxt Security"}

Automatically configure your app to follow OWASP security patterns and principles by using HTTP Headers and Middleware.

> This module works with Nuxt 3 only

-   [📖  Read the documentation](https://nuxt-security.vercel.app/){rel="nofollow"}
-   [👾  Playground](https://nuxt-security.vercel.app/playground){rel="nofollow"}

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   Security response headers (including CSP for SSG apps)
-   Request Size & Rate Limiters
-   Cross Site Scripting (XSS) Validation
-   Cross-Origin Resource Sharing (CORS) support
-   Hide `X-Powered-By` header and remove console loggers utils
-   `[Optional]` Allowed HTTP Methods, Basic Auth, CSRF

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

Install the module:

    npx nuxi@latest module add security

And that\'s it! The module will now register route rules and server middlewares globally so that your application will be more secured.

## Configuration {#configuration dir="auto" tabindex="-1"}

[](#configuration){#user-content-configuration aria-label="Permalink: Configuration"}

You can pass configuration to the module in the `nuxt.config.ts` like following:

    export default defineNuxtConfig({
      modules: ["nuxt-security"],
      security: {
        // options
      }
    })

For all available configuration options check out the [docs](https://nuxt-security.vercel.app/){rel="nofollow"}.

## Development {#development dir="auto" tabindex="-1"}

[](#development){#user-content-development aria-label="Permalink: Development"}

-   Run `yarn dev:prepare` to generate type stubs.
-   Use `yarn dev` to start playground in development mode.

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

[MIT License](https://github.com/nuxt-modules/security/blob/main/LICENSE.md)
