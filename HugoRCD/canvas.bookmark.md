# HugoRCD/canvas (github.com)

<https://github.com/HugoRCD/canvas>

## Description

Portfolio template made with Nuxt 3, Nuxt Content v3, NuxtUI v3 and TailwindCSS v4 - HugoRCD/canvas

## Quote

> Portfolio template made with Nuxt 3, Nuxt Content and TailwindCSS

## Tags

#boilerplate #nuxt #nuxt-content #portfolio #tailwindcss #template #Vue

## Content

# GitHub - HugoRCD/canvas: Portfolio template made with Nuxt 3, Nuxt Content v3, NuxtUI v3 and TailwindCSS v4 {#github---hugorcdcanvas-portfolio-template-made-with-nuxt-3-nuxt-content-v3-nuxtui-v3-and-tailwindcss-v4 .reader-title}

HugoRCD

------------------------------------------------------------------------

[![Portfolio Social Preview](https://github.com/HugoRCD/canvas/raw/main/public/og.png)](https://github.com/HugoRCD/canvas/blob/main/public/og.png){rel="noopener noreferrer"}

[![](https://camo.githubusercontent.com/256dca24bd0323a093040211f81659530a9763402d3a8242e46780c381118b31/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f576562736974652d687263642e66722d626c75653f7374796c653d666f722d7468652d6261646765266c6162656c436f6c6f723d303030303030266c6f676f3d676f6f676c652d6368726f6d65266c6f676f436f6c6f723d7768697465){canonical-src="https://img.shields.io/badge/Website-hrcd.fr-blue?style=for-the-badge&labelColor=000000&logo=google-chrome&logoColor=white"}](https://hrcd.fr/){rel="nofollow" aria-label="Hugo's Website"}
[![](https://camo.githubusercontent.com/10dedf15094e5681f2d634207c27505571d7dc57528013a5646a6eacf625bc62/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7675652e7376673f7374796c653d666f722d7468652d6261646765266c6162656c436f6c6f723d30303030303026636f6c6f723d626c7565){canonical-src="https://img.shields.io/npm/l/vue.svg?style=for-the-badge&labelColor=000000&color=blue"}](https://github.com/hugorcd/canvas/blob/main/LICENSE){aria-label="License"}
[![](https://camo.githubusercontent.com/5c5f9e5bc37fe0ea51b8ff5ecce6e03278881bdfa3e5bc81c40a247162feeaf9/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f666f6c6c6f772f4875676f5243445f5f2e7376673f7374796c653d666f722d7468652d6261646765266c6162656c436f6c6f723d303030303030266c6f676f3d74776974746572266c6162656c3d466f6c6c6f772532304875676f266c6f676f57696474683d3230266c6f676f436f6c6f723d7768697465){canonical-src="https://img.shields.io/twitter/follow/HugoRCD__.svg?style=for-the-badge&labelColor=000000&logo=twitter&label=Follow%20Hugo&logoWidth=20&logoColor=white"}](https://twitter.com/HugoRCD__){rel="nofollow" aria-label="Follow Hugo on Twitter"}

## Canvas template {#canvas-template dir="auto" tabindex="-1"}

[](#canvas-template){#user-content-canvas-template aria-label="Permalink: Canvas template"}

Canvas Portfolio is a fully customizable i18n portfolio template built with Nuxt and Nuxt UI, designed to help you showcase your work, testimonials, and key information with ease. The template integrates with Nuxt Studio for a smooth editing experience, while leveraging Nuxt Content for content management. Built with performance, flexibility, and responsiveness in mind, Canvas Portfolio provides a robust foundation for developers and creatives alike.

## Demo {#demo dir="auto" tabindex="-1"}

[](#demo){#user-content-demo aria-label="Permalink: Demo"}

You can see a live demo at [canvas.hrcd.fr](https://canvas.hrcd.fr/){rel="nofollow"}.

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   **Modern Components & Layouts** -- Includes built-in components.
-   **Nuxt UI v3** -- Utilize pre-built, customizable UI components.
-   **NuxtHub ready** - Deploy on NuxtHub in seconds.
-   **Tailwind CSS** -- A beautiful, responsive design system.
-   **Working Contact Form** -- Integrated with Resend for easy email handling.
-   **Multi-language Support** -- Powered by Nuxt i18n.
-   **SEO-Ready** -- Open Graph Image (Nuxt OG Image) & Nuxt Robots for automatic robots.txt generation.
-   **Good practices** -- Auto-generated sitemap, optimized images (Nuxt Image), and ESLint (Nuxt config with Flat config).
-   **Fully Responsive** -- Adapts to all modern browsers and devices.
-   **Minimal & Professional Design** -- Clean, elegant, and easy to customize.

## Quick Setup {#quick-setup dir="auto" tabindex="-1"}

[](#quick-setup){#user-content-quick-setup aria-label="Permalink: Quick Setup"}

1.  Clone this repository if you have access or download it from the store

<!-- -->

    git clone git@github.com:HugoRCD/canvas.git

2.  Install dependencies

<!-- -->

3.  Copy the `.env.example` file to `.env` and fill in the values

<!-- -->

4.  Start development server

<!-- -->

5.  Generate static project

<!-- -->

6.  Start production server

## Deployments {#deployments dir="auto" tabindex="-1"}

[](#deployments){#user-content-deployments aria-label="Permalink: Deployments"}

Canvas Portfolio is designed to simplify the deployment process on various platforms, whether serverless or not. Below are several detailed methods to deploy your portfolio.

### 1. Serverless Platforms (Vercel, Netlify, etc.) {#serverless-platforms-vercel-netlify-etc. dir="auto" tabindex="-1"}

[](#1-serverless-platforms-vercel-netlify-etc){#user-content-1-serverless-platforms-vercel-netlify-etc aria-label="Permalink: 1. Serverless Platforms (Vercel, Netlify, etc.)"}

When using serverless platforms, it\'s important to note that Nuxt Content v3 relies by default on SQLite for content storage. Since these platforms do not support SQLite natively, we recommend connecting Canvas Portfolio to an external database such as:

-   **PostgreSQL**
-   **Turso**
-   **D1**

For further details on this process and the suitable solutions for serverless deployments, refer to the official Nuxt Content documentation:\
[Nuxt Content and Serverless Deployment](https://content.nuxt.com/docs/deploy/serverless){rel="nofollow"}

#### Vercel deployment do not need any extra configuration. {#vercel-deployment-do-not-need-any-extra-configuration. dir="auto" tabindex="-1"}

[](#vercel-deployment-do-not-need-any-extra-configuration){#user-content-vercel-deployment-do-not-need-any-extra-configuration aria-label="Permalink: Vercel deployment do not need any extra configuration."}

[![Deploy with Vercel](https://camo.githubusercontent.com/20bea215d35a4e28f2c92ea5b657d006b087687486858a40de2922a4636301ab/68747470733a2f2f76657263656c2e636f6d2f627574746f6e){canonical-src="https://vercel.com/button"}](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHugoRCD%2Fcanvas&env=NUXT_PRIVATE_RESEND_API_KEY,NUXT_PUBLIC_SITE_URL&envDescription=You%20will%20require%20an%20API%20key%20for%20Resend%20and%20Nuxt%20Studio%2C%20but%20it%20is%20not%20essential%20for%20the%20portfolio%20to%20work.%20Simply%20add%20%22test%2C%22%20for%20example%2C%20and%20edit%20the%20variable%20later.&project-name=canvas-portfolio&repository-name=canvas-portfolio&demo-title=Canvas&demo-url=canvas.hrcd.fr&demo-image=https%3A%2F%2Fcanvas.hrcd.fr%2Fog.png){rel="nofollow"}

------------------------------------------------------------------------

### 2. Deployment on Nuxthub {#deployment-on-nuxthub dir="auto" tabindex="-1"}

[](#2-deployment-on-nuxthub){#user-content-2-deployment-on-nuxthub aria-label="Permalink: 2. Deployment on Nuxthub"}

Nuxthub offers a powerful solution to deploy your portfolio in just a few clicks. With fast global delivery through the Cloudflare network, Nuxthub also provides advanced features such as:

-   KV storage for optimized data management
-   High-performance caching to reduce loading times
-   Integration of AI tools and analytics for performance improvements

Check out the [official Nuxthub documentation](https://hub.nuxt.com/docs/getting-started/installation#add-to-a-nuxt-project){rel="nofollow"} for more info.

NuxtHub deployment do not need any extra configuration.

[![Deploy to NuxtHub](https://camo.githubusercontent.com/369e270cf777b2aceec9f3382b34612aa52ab966a4adfd21a8dfff4f4dd1ac97/68747470733a2f2f6875622e6e7578742e636f6d2f627574746f6e2e737667){canonical-src="https://hub.nuxt.com/button.svg"}](https://hub.nuxt.com/new?repo=HugoRCD/canvas-nuxthub){rel="nofollow"}

------------------------------------------------------------------------

### 3. Deployment via Docker {#deployment-via-docker dir="auto" tabindex="-1"}

[](#3-deployment-via-docker){#user-content-3-deployment-via-docker aria-label="Permalink: 3. Deployment via Docker"}

Canvas Portfolio is also available as a Docker image, making it easy to deploy in containerized environments. An official Docker image is automatically created using a GitHub workflow whenever a new release is made, or it can be triggered manually.

This workflow not only builds the official Canvas image but also provides a standard way for anyone who forks the project to create their own Docker image with a proper version tag (e.g., v2.0, v1.0.0, etc.).

**To pull the latest Docker image:**

    docker pull ghcr.io/hugorcd/canvas:latest

You can also use Docker Compose for a quick deployment. A community-provided [docker-compose.community.yml](https://github.com/HugoRCD/canvas/blob/main/docker-compose.community.yml) file is available and can be used with platforms like Coolify for one-click deployments.

## How to Modify the Portfolio Content {#how-to-modify-the-portfolio-content dir="auto" tabindex="-1"}

[](#how-to-modify-the-portfolio-content){#user-content-how-to-modify-the-portfolio-content aria-label="Permalink: How to Modify the Portfolio Content"}

This portfolio uses [Nuxt Content](https://content.nuxt.com/){rel="nofollow"} to manage the content. Here\'s how you can modify it:

First check the `app.config.ts` file to change the global configuration of the portfolio, there is a lot of stuff you can change here.

### Writing {#writing dir="auto" tabindex="-1"}

[](#writing){#user-content-writing aria-label="Permalink: Writing"}

1.  Navigate to the `content/2.articles` directory.
2.  Here, you\'ll find Markdown files for each article. To modify an article, simply open its Markdown file and make your changes.
3.  To add a new article, create a new Markdown file in this directory. The name of the file will be used as the URL slug for the article.

### Works {#works dir="auto" tabindex="-1"}

[](#works){#user-content-works aria-label="Permalink: Works"}

1.  Navigate to the `content/1.works/` directory.
2.  Here, you\'ll find Markdown files for each article. To modify an article, simply open its Markdown file and make your changes.
3.  To add a new project, add a new JSON file in this directory.

#### Featured Works {#featured-works dir="auto" tabindex="-1"}

[](#featured-works){#user-content-featured-works aria-label="Permalink: Featured Works"}

To change the featured works on the homepage, simply add the `"featured": true` key the JSON file.

### Other Content {#other-content dir="auto" tabindex="-1"}

[](#other-content){#user-content-other-content aria-label="Permalink: Other Content"}

Simply go to the `content/` directory and edit any of the Markdown or JSON files to modify the content.

## Setup the Contact Form {#setup-the-contact-form dir="auto" tabindex="-1"}

[](#setup-the-contact-form){#user-content-setup-the-contact-form aria-label="Permalink: Setup the Contact Form"}

This portfolio uses [Resend](https://resend.com/){rel="nofollow"} to handle the contact form, but it\'s not mandatory. The server handle will not be used if you don\'t set the `NUXT_PRIVATE_RESEND_API_KEY` environment variable.

To set it up, follow these steps:

-   Get your api key from [Resend](https://resend.com/){rel="nofollow"} here [your api key](https://resend.com/api-keys){rel="nofollow"}
-   Add your api key in the `.env` file
-   change the `from` key in the `sendEmail` route in the `server/api/` folder, you can customize everything you want in this route
-   That\'s it, you\'re good to go!

## Contributing {#contributing dir="auto" tabindex="-1"}

[](#contributing){#user-content-contributing aria-label="Permalink: Contributing"}

To start contributing, you can follow these steps:

1.  First raise an issue to discuss the changes you would like to make.
2.  Fork the repository.
3.  Create a branch using conventional commits and the issue number as the branch name. For example, `feat/123` or `fix/456`.
4.  Make changes following the local development steps.
5.  Commit your changes following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/){rel="nofollow"} specification.
6.  If your changes affect the code, run tests using `bun run test`.
7.  Create a pull request following the [Pull Request Template](https://github.com/HugoRCD/markdown/blob/main/src/pull_request_template.md).
    -   To be merged, the pull request must pass the tests/workflow and have at least one approval.
    -   If your changes affect the documentation, make sure to update it.
    -   If your changes affect the code, make sure to update the tests.
8.  Wait for the maintainers to review your pull request.
9.  Once approved, the pull request will be merged in the next release !

Local development

-   Clone this repository
-   Install latest LTS version of [Node.js](https://nodejs.org/en/){rel="nofollow"}
-   Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
-   Install dependencies using `bun install`
-   Start development server using `bun dev`
-   Open [http://localhost:3000](http://localhost:3000/){rel="nofollow"} in your browser

------------------------------------------------------------------------

*🤖 auto updated with [automd](https://automd.unjs.io/){rel="nofollow"} (last updated: Mon Feb 10 2025)*
