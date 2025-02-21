# transitive-bullshit/nextjs-notion-starter-kit (github.com)

<https://github.com/transitive-bullshit/nextjs-notion-starter-kit>

## Description

Deploy your own Notion-powered website in minutes with Next.js and Vercel. - transitive-bullshit/nextjs-notion-starter-kit

## Quote

> Deploy your own Notion-powered website in minutes with Next.js and Vercel.

## Tags

#blog #nextjs #notion #portfolio #react #react-notion-x #TypeScript

## Content

# GitHub - transitive-bullshit/nextjs-notion-starter-kit: Deploy your own Notion-powered website in minutes with Next.js and Vercel. {#github---transitive-bullshitnextjs-notion-starter-kit-deploy-your-own-notion-powered-website-in-minutes-with-next.js-and-vercel. .reader-title}

transitive-bullshit

------------------------------------------------------------------------

[![Example article page](https://user-images.githubusercontent.com/552829/160132094-12875e09-41ec-450a-80fc-ae8cd488129d.jpg){width="689"}](https://transitivebullsh.it/nextjs-notion-starter-kit){rel="nofollow"}

## Next.js Notion Starter Kit {#next.js-notion-starter-kit dir="auto" tabindex="-1"}

[](#nextjs-notion-starter-kit){#user-content-nextjs-notion-starter-kit aria-label="Permalink: Next.js Notion Starter Kit"}

> The perfect starter kit for building websites with Next.js and Notion.

[![Build Status](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml/badge.svg)](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml) [![Prettier Code Formatting](https://camo.githubusercontent.com/18237e48c39124504c2ed1cf0304bc20f83b7ba172be82c474c0be62700de958/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d70726574746965722d627269676874677265656e2e737667){canonical-src="https://img.shields.io/badge/code_style-prettier-brightgreen.svg"}](https://prettier.io/){rel="nofollow"}

## Intro {#intro dir="auto" tabindex="-1"}

[](#intro){#user-content-intro aria-label="Permalink: Intro"}

This repo is what I use to power my personal blog and portfolio site [transitivebullsh.it](https://transitivebullsh.it/){rel="nofollow"}.

It uses Notion as a CMS, [react-notion-x](https://github.com/NotionX/react-notion-x), [Next.js](https://nextjs.org/){rel="nofollow"}, and [Vercel](https://vercel.com/){rel="nofollow"}.

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   Setup only takes a few minutes ([single config file](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/main/site.config.ts)) 💪
-   Robust support for Notion content via [react-notion-x](https://github.com/NotionX/react-notion-x)
-   Built using Next.js, TS, and React
-   Excellent page speeds
-   Smooth image previews
-   Automatic social images
-   Automatic pretty URLs
-   Automatic table of contents
-   Full support for dark mode
-   Quick search via CMD+K / CMD+P
-   Responsive for different devices
-   Optimized for Next.js and Vercel

## Demos {#demos dir="auto" tabindex="-1"}

[](#demos){#user-content-demos aria-label="Permalink: Demos"}

-   [Default demo](https://nextjs-notion-starter-kit.transitivebullsh.it/){rel="nofollow"} - Deployed from the `main` branch
-   [My site](https://transitivebullsh.it/){rel="nofollow"} - Deployed from the `transitive-bullshit` branch

## Setup {#setup dir="auto" tabindex="-1"}

[](#setup){#user-content-setup aria-label="Permalink: Setup"}

**All config is defined in [site.config.ts](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/main/site.config.ts).**

This project requires a recent version of Node.js (we recommend \>= 16).

1.  Fork / clone this repo
2.  Change a few values in [site.config.ts](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/main/site.config.ts)
3.  `npm install`
4.  `npm run dev` to test locally
5.  `npm run deploy` to deploy to vercel 💪
6.  Double check your [Vercel project settings](#vercel-configuration)

I tried to make configuration as easy as possible --- All you really need to do to get started is edit `rootNotionPageId`.

We recommend duplicating the [default page](https://notion.so/7875426197cf461698809def95960ebf){rel="nofollow"} as a starting point, but you can use any public notion page you want.

Make sure your root Notion page is **public** and then copy the link to your clipboard. Extract the last part of the URL that looks like `7875426197cf461698809def95960ebf`, which is your page\'s Notion ID.

In order to find your Notion workspace ID (optional), just load any of your site\'s pages into your browser and open up the developer console. There will be a global variable that you can access called `block` which is the Notion data for the current page. If you enter `block.space_id`, it will print out your page\'s workspace ID.

I recommend setting up a collection on your home page that contains all of your articles / projects / content. There are no structural constraints on your Notion workspace, however, so feel free to add content as you normally would in Notion.

### Vercel Configuration {#vercel-configuration dir="auto" tabindex="-1"}

[](#vercel-configuration){#user-content-vercel-configuration aria-label="Permalink: Vercel Configuration"}

**Social media preview images won\'t work by default on Vercel**. You\'ll need to ensure that your site doesn\'t require auth.

From your Vercel project settings, you\'ll want to **disable Vercel Authentication** from `Project -> Settings -> Deployment Protection`.

[![How to disable Vercel Deployment Protection setting](https://private-user-images.githubusercontent.com/5691777/384391081-a1eb5a1f-da7a-497e-b4f6-f7e851a6cd8a.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDAxMDQwNjQsIm5iZiI6MTc0MDEwMzc2NCwicGF0aCI6Ii81NjkxNzc3LzM4NDM5MTA4MS1hMWViNWExZi1kYTdhLTQ5N2UtYjRmNi1mN2U4NTFhNmNkOGEuZ2lmP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDIyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAyMjFUMDIwOTI0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YmY1MTI0YTQ1MDAzM2U5MDk2YWVlNzk2OTVkYTJjN2ZiYTMwMmQ1NDhiYjE3MGFhZjQ4OTY5ZjMxZWEyNWM2NSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.jcynDo8J1RS6zJ59uVa1g9PiLW5FPvht8i5UGMWjRKQ "How to disable Vercel Deployment Protection setting which causes social media preview image endpoint to return 401 Unauthorized"){animated-image=""}](https://private-user-images.githubusercontent.com/5691777/384391081-a1eb5a1f-da7a-497e-b4f6-f7e851a6cd8a.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDAxMDQwNjQsIm5iZiI6MTc0MDEwMzc2NCwicGF0aCI6Ii81NjkxNzc3LzM4NDM5MTA4MS1hMWViNWExZi1kYTdhLTQ5N2UtYjRmNi1mN2U4NTFhNmNkOGEuZ2lmP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDIyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAyMjFUMDIwOTI0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YmY1MTI0YTQ1MDAzM2U5MDk2YWVlNzk2OTVkYTJjN2ZiYTMwMmQ1NDhiYjE3MGFhZjQ4OTY5ZjMxZWEyNWM2NSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.jcynDo8J1RS6zJ59uVa1g9PiLW5FPvht8i5UGMWjRKQ){rel="noopener noreferrer"}

💡 If you forget to do this your site will return `401 Unauthorized` responses when crawlers are trying to retrieve the images.

## URL Paths {#url-paths dir="auto" tabindex="-1"}

[](#url-paths){#user-content-url-paths aria-label="Permalink: URL Paths"}

The app defaults to slightly different URL paths in dev vs prod (though pasting any dev pathname into prod will work and vice-versa).

In development, it will use `/nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202` which is a slugified version of the page\'s title suffixed with its Notion ID. I\'ve found that it\'s really useful to always have the Notion Page ID front and center during local development.

In production, it will use `/nextjs-notion-blog` which is a bit nicer as it gets rid of the extra ID clutter.

The mapping of Notion ID to slugified page titles is done automatically as part of the build process. Just keep in mind that if you plan on changing page titles over time, you probably want to make sure old links will still work, and we don\'t currently provide a solution for detecting old links aside from Next.js\'s built-in [support for redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects){rel="nofollow"}.

See [mapPageUrl](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/main/lib/map-page-url.ts) and [getCanonicalPageId](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-canonical-page-id.ts) for more details.

You can override the default slug generation on a per-page basis by adding a `Slug` text property to your database. Any page which has a `Slug` property will use that as its slug.

NOTE: if you have multiple pages in your workspace with the same slugified name, the app will throw an error letting you know that there are duplicate URL pathnames.

## Preview Images {#preview-images dir="auto" tabindex="-1"}

[](#preview-images){#user-content-preview-images aria-label="Permalink: Preview Images"}

[![Example preview image](https://user-images.githubusercontent.com/552829/160142320-35343317-aa9e-4710-bcf7-67e5cdec586d.gif){animated-image="" width="458"}](https://user-images.githubusercontent.com/552829/160142320-35343317-aa9e-4710-bcf7-67e5cdec586d.gif){rel="noopener noreferrer nofollow"}

We use [next/image](https://nextjs.org/docs/api-reference/next/image){rel="nofollow"} to serve images efficiently, with preview images optionally generated via [lqip-modern](https://github.com/transitive-bullshit/lqip-modern). This gives us extremely optimized image support for sexy smooth images.

Preview images are **enabled by default**, but they can be slow to generate, so if you want to disable them, set `isPreviewImageSupportEnabled` to `false` in `site.config.ts`.

### Redis {#redis dir="auto" tabindex="-1"}

[](#redis){#user-content-redis aria-label="Permalink: Redis"}

If you want to cache generated preview images to speed up subsequent builds, you\'ll need to first set up an external [Redis](https://redis.io/){rel="nofollow"} data store. To enable redis caching, set `isRedisEnabled` to `true` in `site.config.ts` and then set `REDIS_HOST` and `REDIS_PASSWORD` environment variables to point to your redis instance.

You can do this locally by adding a `.env` file:

    REDIS_HOST='TODO'
    REDIS_PASSWORD='TODO'

If you\'re not sure which Redis provider to use, we recommend [Redis Labs](https://redis.com/){rel="nofollow"}, which provides a free plan.

Note that preview images and redis caching are both optional features. If you'd rather not deal with them, just disable them in your site config.

## Styles {#styles dir="auto" tabindex="-1"}

[](#styles){#user-content-styles aria-label="Permalink: Styles"}

All CSS styles that customize Notion content are located in [styles/notion.css](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/main/styles/notion.css). They mainly target global CSS classes exported by react-notion-x [styles.css](https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/styles.css).

Every notion block gets its own unique classname, so you can target individual blocks like this:

    .notion-block-260baa77f1e1428b97fb14ac99c7c385 {
      display: none;
    }

## Dark Mode {#dark-mode dir="auto" tabindex="-1"}

[](#dark-mode){#user-content-dark-mode aria-label="Permalink: Dark Mode"}

[![Light Mode](https://camo.githubusercontent.com/2224b78bcc060556b5246abba459f9378ccbc6eef244eca22bfa81fd4e0b091d/68747470733a2f2f7472616e7369746976652d62732e6e6f74696f6e2e736974652f696d6167652f687474707325334125324625324673332d75732d776573742d322e616d617a6f6e6177732e636f6d2532467365637572652e6e6f74696f6e2d7374617469632e636f6d25324638336561396630662d343736312d346330622d623533652d3139313336323739373566632532467472616e73697469766562756c6c73682e69745f2d6f70742e6a70673f7461626c653d626c6f636b2669643d65643765386636302d633664312d343439652d383430622d35633737363235303563343426737061636549643d66646535616337342d656561332d343532372d386630302d3434383237313065316166332677696474683d32303030267573657249643d2663616368653d7632){canonical-src="https://transitive-bs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F83ea9f0f-4761-4c0b-b53e-1913627975fc%2Ftransitivebullsh.it_-opt.jpg?table=block&id=ed7e8f60-c6d1-449e-840b-5c7762505c44&spaceId=fde5ac74-eea3-4527-8f00-4482710e1af3&width=2000&userId=&cache=v2" width="45%"}](https://camo.githubusercontent.com/2224b78bcc060556b5246abba459f9378ccbc6eef244eca22bfa81fd4e0b091d/68747470733a2f2f7472616e7369746976652d62732e6e6f74696f6e2e736974652f696d6167652f687474707325334125324625324673332d75732d776573742d322e616d617a6f6e6177732e636f6d2532467365637572652e6e6f74696f6e2d7374617469632e636f6d25324638336561396630662d343736312d346330622d623533652d3139313336323739373566632532467472616e73697469766562756c6c73682e69745f2d6f70742e6a70673f7461626c653d626c6f636b2669643d65643765386636302d633664312d343439652d383430622d35633737363235303563343426737061636549643d66646535616337342d656561332d343532372d386630302d3434383237313065316166332677696474683d32303030267573657249643d2663616368653d7632){rel="noopener noreferrer nofollow"}
       
[![Dark Mode](https://camo.githubusercontent.com/e3f2471cc3384b3792f95d3dc37aa496a55fa5a66cbb9813ef1ea942f0bb3bc2/68747470733a2f2f7472616e7369746976652d62732e6e6f74696f6e2e736974652f696d6167652f687474707325334125324625324673332d75732d776573742d322e616d617a6f6e6177732e636f6d2532467365637572652e6e6f74696f6e2d7374617469632e636f6d25324663303833396436632d373134312d343864662d386166642d3639623237666564383461612532467472616e73697469766562756c6c73682e69745f5f2831292d6f70742e6a70673f7461626c653d626c6f636b2669643d32336231316665352d643664662d343232642d393637342d33396366376635343735323326737061636549643d66646535616337342d656561332d343532372d386630302d3434383237313065316166332677696474683d32303030267573657249643d2663616368653d7632){canonical-src="https://transitive-bs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0839d6c-7141-48df-8afd-69b27fed84aa%2Ftransitivebullsh.it__(1)-opt.jpg?table=block&id=23b11fe5-d6df-422d-9674-39cf7f547523&spaceId=fde5ac74-eea3-4527-8f00-4482710e1af3&width=2000&userId=&cache=v2" width="45%"}](https://camo.githubusercontent.com/e3f2471cc3384b3792f95d3dc37aa496a55fa5a66cbb9813ef1ea942f0bb3bc2/68747470733a2f2f7472616e7369746976652d62732e6e6f74696f6e2e736974652f696d6167652f687474707325334125324625324673332d75732d776573742d322e616d617a6f6e6177732e636f6d2532467365637572652e6e6f74696f6e2d7374617469632e636f6d25324663303833396436632d373134312d343864662d386166642d3639623237666564383461612532467472616e73697469766562756c6c73682e69745f5f2831292d6f70742e6a70673f7461626c653d626c6f636b2669643d32336231316665352d643664662d343232642d393637342d33396366376635343735323326737061636549643d66646535616337342d656561332d343532372d386630302d3434383237313065316166332677696474683d32303030267573657249643d2663616368653d7632){rel="noopener noreferrer nofollow"}

Dark mode is fully supported and can be toggled via the sun / moon icon in the footer.

## Automatic Social Images {#automatic-social-images dir="auto" tabindex="-1"}

[](#automatic-social-images){#user-content-automatic-social-images aria-label="Permalink: Automatic Social Images"}

[![Example social image](https://user-images.githubusercontent.com/552829/162001133-34d4cf24-123a-4569-a540-f683b22830d1.jpeg){width="600"}](https://user-images.githubusercontent.com/552829/162001133-34d4cf24-123a-4569-a540-f683b22830d1.jpeg){rel="noopener noreferrer nofollow"}

All Open Graph and social meta tags are generated from your Notion content, which makes social sharing look professional by default.

Social images are generated automatically using [Vercel OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation){rel="nofollow"}. You can tweak the default React template for social images by editing [api/social-images.tsx](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/main/pages/api/social-image.tsx).

You can view an example social image live in production [here](https://transitivebullsh.it/api/social-image?id=dfc7f709-ae3e-42c6-9292-f6543d5586f0){rel="nofollow"}.

## Automatic Table of Contents {#automatic-table-of-contents dir="auto" tabindex="-1"}

[](#automatic-table-of-contents){#user-content-automatic-table-of-contents aria-label="Permalink: Automatic Table of Contents"}

[![Smooth ToC Scrollspy](https://camo.githubusercontent.com/24c67f3076a4347c882177530747e6a260270e0f32698e3c303a45cf3d64551e/68747470733a2f2f7777772e6e6f74696f6e2e736f2f696d6167652f687474707325334125324625324673332d75732d776573742d322e616d617a6f6e6177732e636f6d2532467365637572652e6e6f74696f6e2d7374617469632e636f6d25324663623264663632642d393032382d343430622d393634622d313137373131343530393231253246746f63322e6769663f7461626c653d626c6f636b2669643d64376539393531622d323839632d346666322d386238322d6230613631666532363062312663616368653d7632){canonical-src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcb2df62d-9028-440b-964b-117711450921%2Ftoc2.gif?table=block&id=d7e9951b-289c-4ff2-8b82-b0a61fe260b1&cache=v2" animated-image="" width="240"}](https://camo.githubusercontent.com/24c67f3076a4347c882177530747e6a260270e0f32698e3c303a45cf3d64551e/68747470733a2f2f7777772e6e6f74696f6e2e736f2f696d6167652f687474707325334125324625324673332d75732d776573742d322e616d617a6f6e6177732e636f6d2532467365637572652e6e6f74696f6e2d7374617469632e636f6d25324663623264663632642d393032382d343430622d393634622d313137373131343530393231253246746f63322e6769663f7461626c653d626c6f636b2669643d64376539393531622d323839632d346666322d386238322d6230613631666532363062312663616368653d7632){rel="noopener noreferrer nofollow"}

By default, every article page will have a table of contents displayed as an `aside` on desktop. It uses **scrollspy** logic to automatically update the current section as the user scrolls through your document, and makes it really easy to jump between different sections.

If a page has less than `minTableOfContentsItems` (default 3), the table of contents will be hidden. It is also hidden on the index page and if the browser window is too small.

This table of contents uses the same logic that Notion uses for its built-in Table of Contents block (see [getPageTableOfContents](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-page-table-of-contents.ts) for the underlying logic).

## Responsive {#responsive dir="auto" tabindex="-1"}

[](#responsive){#user-content-responsive aria-label="Permalink: Responsive"}

[![Mobile article page](https://user-images.githubusercontent.com/552829/160132983-c2dd5830-80b3-4a0e-a8f1-abab5dbeed11.jpg){width="300"}](https://user-images.githubusercontent.com/552829/160132983-c2dd5830-80b3-4a0e-a8f1-abab5dbeed11.jpg){rel="noopener noreferrer nofollow"}

All pages are designed to be responsive across common device sizes.

## Analytics {#analytics dir="auto" tabindex="-1"}

[](#analytics){#user-content-analytics aria-label="Permalink: Analytics"}

Analytics are an optional feature that are easy to enable if you want.

### Fathom Analytics {#fathom-analytics dir="auto" tabindex="-1"}

[](#fathom-analytics){#user-content-fathom-analytics aria-label="Permalink: Fathom Analytics"}

[Fathom](https://usefathom.com/ref/42TFOZ){rel="nofollow"} provides a lightweight alternative to Google Analytics.

To enable, just add a `NEXT_PUBLIC_FATHOM_ID` environment variable, which will only be used in production.

### PostHog Analytics {#posthog-analytics dir="auto" tabindex="-1"}

[](#posthog-analytics){#user-content-posthog-analytics aria-label="Permalink: PostHog Analytics"}

[PostHog](https://posthog.com/){rel="nofollow"} provides a lightweight, **open source** alternative to Google Analytics.

To enable, just add a `NEXT_PUBLIC_POSTHOG_ID` environment variable, which will only be used in production.

## Environment Variables {#environment-variables dir="auto" tabindex="-1"}

[](#environment-variables){#user-content-environment-variables aria-label="Permalink: Environment Variables"}

If you\'re using Redis, analytics, or any other feature which requires environment variables, then you\'ll need to [add them to your Vercel project](https://vercel.com/docs/concepts/projects/environment-variables){rel="nofollow"}.

If you want to test your redis builds with GitHub Actions, then you\'ll need to edit the [default build action](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/main/.github/workflows/build.yml) to add `REDIS_HOST` and `REDIS_PASSWORD`. Here is an [example from my personal branch](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/transitive-bullshit/.github/workflows/build.yml#L17-L21). You\'ll also need to add these environment variables to your GitHub repo as [repository secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

## Contributing {#contributing dir="auto" tabindex="-1"}

[](#contributing){#user-content-contributing aria-label="Permalink: Contributing"}

See the [contribution guide](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/main/contributing.md) and join our amazing list of [contributors](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/graphs/contributors)!

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

MIT © [Travis Fischer](https://transitivebullsh.it/){rel="nofollow"}

Support my open source work by [following me on twitter ![twitter](https://camo.githubusercontent.com/51c43f5678a4cc8d9f9f70cb16d8fe57ebc02a34a3021bec68ee0e416fbbd72c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f736161736966792d6173736574732f747769747465722d6c6f676f2e737667){canonical-src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" height="24px"}](https://twitter.com/transitive_bs){rel="nofollow"}
