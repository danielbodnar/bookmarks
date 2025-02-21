# serverless-nextjs/serverless-next.js (github.com)

<https://github.com/serverless-nextjs/serverless-next.js>

## Description

⚡ Deploy your Next.js apps on AWS Lambda@Edge via Serverless Components - serverless-nextjs/serverless-next.js

## Quote

> ⚡ Deploy your Next.js apps on AWS Lambda@Edge via Serverless Components

## Tags

#api-gateway #aws #aws-lambda #cloudfront #edge #lambda #lambdaatedge #next #nextjs #serverless #serverless-framework #TypeScript

## Content

# GitHub - serverless-nextjs/serverless-next.js: ⚡ Deploy your Next.js apps on AWS Lambda@Edge via Serverless Components {#github---serverless-nextjsserverless-next.js-deploy-your-next.js-apps-on-aws-lambdaedge-via-serverless-components .reader-title}

serverless-nextjs

------------------------------------------------------------------------

## Serverless Next.js Component {#serverless-next.js-component dir="auto" tabindex="-1"}

[](#serverless-nextjs-component){#user-content-serverless-nextjs-component aria-label="Permalink: Serverless Next.js Component"}

> **⚠️ Unfortunately, this is no longer maintained for a long time due to lack of time and the complexity of maintaining parity with Next.js. We would like to thank all past users and contributors, and suggest that you use modern alternatives such as [OpenNext](https://opennext.js.org/){rel="nofollow"} and [SST](https://v2.sst.dev/start/nextjs){rel="nofollow"}.**

[![logo](https://github.com/serverless-nextjs/serverless-next.js/raw/master/img/logo.gif){animated-image=""}](https://github.com/serverless-nextjs/serverless-next.js/blob/master/img/logo.gif){rel="noopener noreferrer"}

[![serverless](https://camo.githubusercontent.com/5a0da73da7ea9cc38d18980d734be39327c534574d7038e15387ed966b7eeac5/687474703a2f2f7075626c69632e7365727665726c6573732e636f6d2f6261646765732f76332e737667){canonical-src="http://public.serverless.com/badges/v3.svg"}](https://www.serverless.com/){rel="nofollow"}
[![GitHub contributors](https://camo.githubusercontent.com/9272beab546c9ac7c11a1edf928a57ddc51a0d9067fa827e104dcb50a837a9e1/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f636f6e7472696275746f72732f7365727665726c6573732d6e6578746a732f7365727665726c6573732d6e6578742e6a73){canonical-src="https://img.shields.io/github/contributors/serverless-nextjs/serverless-next.js"}](https://github.com/serverless-nextjs/serverless-next.js/graphs/contributors)
[![Financial Contributors on Open Collective](https://camo.githubusercontent.com/b285afdfcd03cf565a6dd3b979a3f46ac16164e04202554947f8d9b492c2adf7/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f616c6c2f62616467652e7376673f6c6162656c3d6261636b657273){canonical-src="https://opencollective.com/serverless-nextjs-plugin/all/badge.svg?label=backers"}](https://opencollective.com/serverless-nextjs-plugin){rel="nofollow"}
[![npm latest](https://camo.githubusercontent.com/cf3f9dc0078215d07c1160d9cbc5c7447fed178c5dd4154503038b1e161a0f76/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f40736c732d6e6578742f7365727665726c6573732d636f6d706f6e656e74){canonical-src="https://img.shields.io/npm/v/@sls-next/serverless-component"}](https://www.npmjs.com/package/@sls-next/serverless-component?activeTab=versions){rel="nofollow"}
[![npm alpha](https://camo.githubusercontent.com/4ddc79c49946aaad55d6bd251ae7071a7b707d098d4c26aec4960035f37ec0c9/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f40736c732d6e6578742f7365727665726c6573732d636f6d706f6e656e742f616c706861){canonical-src="https://img.shields.io/npm/v/@sls-next/serverless-component/alpha"}](https://www.npmjs.com/package/@sls-next/serverless-component?activeTab=versions){rel="nofollow"}
[![Build Status](https://github.com/serverless-nextjs/serverless-next.js/workflows/CI/badge.svg)](https://github.com/serverless-nextjs/serverless-next.js/workflows/CI/badge.svg){rel="noopener noreferrer"}
[![End-to-end Tests](https://github.com/serverless-nextjs/serverless-next.js/workflows/End-to-end%20Tests/badge.svg)](https://github.com/serverless-nextjs/serverless-next.js/workflows/End-to-end%20Tests/badge.svg){rel="noopener noreferrer"}
[![CircleCI Build Status](https://camo.githubusercontent.com/09430f20ae08acfbe7a1d8fc85cbb424eb400ede27cec3e73649c1cd8799d5a6/68747470733a2f2f696d672e736869656c64732e696f2f636972636c6563692f6275696c642f6769746875622f7365727665726c6573732d6e6578746a732f7365727665726c6573732d6e6578742e6a73){canonical-src="https://img.shields.io/circleci/build/github/serverless-nextjs/serverless-next.js"}](https://camo.githubusercontent.com/09430f20ae08acfbe7a1d8fc85cbb424eb400ede27cec3e73649c1cd8799d5a6/68747470733a2f2f696d672e736869656c64732e696f2f636972636c6563692f6275696c642f6769746875622f7365727665726c6573732d6e6578746a732f7365727665726c6573732d6e6578742e6a73){rel="noopener noreferrer nofollow"}
[![Codacy Badge](https://camo.githubusercontent.com/7ecf994b554f8b36465f6d888404b649a6336e88eee21c9b16e9148ecee95e64/68747470733a2f2f6170702e636f646163792e636f6d2f70726f6a6563742f62616467652f47726164652f3630383234653865633264303461663638313765636138313763383037663866){canonical-src="https://app.codacy.com/project/badge/Grade/60824e8ec2d04af6817eca817c807f8f"}](https://www.codacy.com/gh/serverless-nextjs/serverless-next.js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=serverless-nextjs/serverless-next.js&utm_campaign=Badge_Grade){rel="nofollow"}
[![codecov](https://camo.githubusercontent.com/9c321b8efe557ba27e8e8fdbb50c8c1297ad1f09ca7ce1bf9b0b92241bb208e9/68747470733a2f2f636f6465636f762e696f2f67682f7365727665726c6573732d6e6578746a732f7365727665726c6573732d6e6578742e6a732f6272616e63682f6d61737465722f67726170682f62616467652e737667){canonical-src="https://codecov.io/gh/serverless-nextjs/serverless-next.js/branch/master/graph/badge.svg"}](https://codecov.io/gh/serverless-nextjs/serverless-next.js){rel="nofollow"}
[![Tested Next.js versions](https://camo.githubusercontent.com/a03571d29694383efe065033082bc6741b1541cc06c693f31d66719483783a41/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7465737465642532306e6578742e6a7325323076657273696f6e732d31302e322e3325323025374325323031312e782d626c7565){canonical-src="https://img.shields.io/badge/tested%20next.js%20versions-10.2.3%20%7C%2011.x-blue"}](https://camo.githubusercontent.com/a03571d29694383efe065033082bc6741b1541cc06c693f31d66719483783a41/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7465737465642532306e6578742e6a7325323076657273696f6e732d31302e322e3325323025374325323031312e782d626c7565){rel="noopener noreferrer nofollow"}
[![Cypress.io](https://camo.githubusercontent.com/739864402870e3a23e7e5dc6e80c30eb312e5fa457a0641e07d43cde9930e89d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f746573746564253230776974682d437970726573732d3034433338452e737667){canonical-src="https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg"}](https://www.cypress.io/){rel="nofollow"}
[![Platforms](https://camo.githubusercontent.com/a529272e7f120b9598b4e36000e9603777179caea706b2d2bc2c7d843928a129/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706c6174666f726d732d6177732d626c7565){canonical-src="https://img.shields.io/badge/platforms-aws-blue"}](https://camo.githubusercontent.com/a529272e7f120b9598b4e36000e9603777179caea706b2d2bc2c7d843928a129/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706c6174666f726d732d6177732d626c7565){rel="noopener noreferrer nofollow"}
[![Tested Node.js versions](https://camo.githubusercontent.com/feb53894f6073c844ac17246f5d6752cc1c396e0ae2b8352958b21f51058bd2c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d31322e7825323025374325323031342e782d627269676874677265656e){canonical-src="https://img.shields.io/badge/node.js-12.x%20%7C%2014.x-brightgreen"}](https://camo.githubusercontent.com/feb53894f6073c844ac17246f5d6752cc1c396e0ae2b8352958b21f51058bd2c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d31322e7825323025374325323031342e782d627269676874677265656e){rel="noopener noreferrer nofollow"}

A zero configuration Next.js 10/11 [serverless component](https://github.com/serverless-components/) for AWS Lambda@Edge aiming for full feature parity.

Please review [features](https://github.com/serverless-nextjs/serverless-next.js#features) for a list of currently supported features.

## Contents {#contents dir="auto" tabindex="-1"}

[](#contents){#user-content-contents aria-label="Permalink: Contents"}

-   [Motivation](#motivation)
-   [Design principles](#design-principles)
-   [Features](#features)
-   [Getting started](#getting-started)
-   [Lambda@Edge configuration](#lambda-at-edge-configuration)
-   [Custom domain name](#custom-domain-name)
-   [Custom CloudFront configuration](#custom-cloudfront-configuration)
-   [Static pages caching](#static-pages-caching)
-   [Public directory caching](#public-directory-caching)
-   [AWS Permissions](#aws-permissions)
-   [Architecture](#architecture)
-   [Inputs](#inputs)
-   [CDK Construct](#cdk-construct)
-   [FAQ](#faq)

> ⚠️ This README reflects the latest changes on the `master` branch. It may or may not yet be published to the `latest` (stable) or `alpha` release in npm. Please go to [Releases](https://github.com/serverless-nextjs/serverless-next.js/releases), find the correct `@sls-next/serverless-component` version you are using, and open the README for that release for more accurate information. If a feature is listed in this README but not working, please first try upgrading to the most recent `alpha` release in npm.

> ⚠ this is currently using Serverless Components Beta (not GA version) as the project was started before GA. We are currently reworking how deployments will work in the future and exploring better IaC solutions such as CDK, CDK for Terraform, etc. and will make an announcement before end of the year on any updates.

### Motivation {#motivation dir="auto" tabindex="-1"}

[](#motivation){#user-content-motivation aria-label="Permalink: Motivation"}

Since Next.js 8.0, [serverless mode](https://nextjs.org/blog/next-8#serverless-nextjs){rel="nofollow"} was introduced which provides a new low level API which projects like this can use to deploy onto different cloud providers. However, Next.js doesn\'t provide the full serverless routing logic, hence why this project is needed to fill the gap. The long-term vision is to allow you to self-host with various clouds, starting with AWS.

This project is a better version of the [serverless plugin](https://github.com/serverless-nextjs/serverless-next.js/tree/master/packages/deprecated/serverless-plugin) which focuses on addressing core issues like [next 9 support](https://github.com/serverless-nextjs/serverless-next.js/issues/101){hovercard-url="/serverless-nextjs/serverless-next.js/issues/101/hovercard" hovercard-type="issue"}, [better development experience](https://github.com/serverless-nextjs/serverless-next.js/issues/59){hovercard-url="/serverless-nextjs/serverless-next.js/issues/59/hovercard" hovercard-type="issue"}, [the 200 CloudFormation resource limit](https://github.com/serverless-nextjs/serverless-next.js/issues/17){hovercard-url="/serverless-nextjs/serverless-next.js/issues/17/hovercard" hovercard-type="issue"} and [performance](https://github.com/serverless-nextjs/serverless-next.js/issues/13){hovercard-url="/serverless-nextjs/serverless-next.js/issues/13/hovercard" hovercard-type="issue"}.

### Design principles {#design-principles dir="auto" tabindex="-1"}

[](#design-principles){#user-content-design-principles aria-label="Permalink: Design principles"}

1.  Zero configuration by default

There is little to no configuration needed. You can extend defaults based on your application needs.

2.  Feature parity with Next.js

Users of this component should be able to use Next.js development tooling, aka `next dev`. It is the component\'s job to deploy your application ensuring parity with all of next\'s features we know and love. We try to emulate all or most of the routing and server-side logic from Next.js and optimize it for a serverless environment. Below you can find a list of the features that are currently supported.

3.  Fast deployments / no CloudFormation resource limits.

With a simplified architecture and no use of CloudFormation, there are no limits to how many pages you can have in your application, plus deployment times are very fast! with the exception of CloudFront propagation times of course.

### Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

Since we emulate the Next.js routing logic, unfortunately we aren\'t always at full parity. The following shows all supported features or planned features. If the checkbox is ticked, it means that the feature is supported. Otherwise, it is likely not supported yet or currently in planning or implementation stage. Please refer to an item\'s description for specific details.

Note that some features may only be on the latest [alpha version](https://www.npmjs.com/package/@sls-next/serverless-component?activeTab=versions){rel="nofollow"}. If a feature is listed as supported but not working on the `latest` tag, it most likely is in the `alpha` tag. If you can, please help us test the latest alpha changes and [submit a bug report](https://github.com/serverless-nextjs/serverless-next.js/issues/new?assignees=&labels=&template=bug_report.md&title=) if you find any issues. Thank you!

Is there a feature that you want but is not yet supported? Please open a [new issue](https://github.com/serverless-nextjs/serverless-next.js/issues/new?assignees=&labels=&template=feature_request.md&title=) to let us know!

-   [Server side rendered pages at the Edge](https://nextjs.org/docs/basic-features/data-fetching){rel="nofollow"}.
    Pages that need server side compute to render are hosted on Lambda@Edge. The component takes care of all the routing for you so there is no configuration needed. Because rendering happens at the CloudFront edge locations latency is very low!
-   [API Routes](https://nextjs.org/docs/api-routes/introduction){rel="nofollow"}.
    Similarly to the server side rendered pages, API requests are also served from the CloudFront edge locations using Lambda@Edge.
-   [Dynamic pages / route segments](https://nextjs.org/docs/routing/dynamic-routes){rel="nofollow"}.
-   [Catch all routes](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes){rel="nofollow"}.
-   [Automatic prerendering](https://nextjs.org/docs/advanced-features/automatic-static-optimization){rel="nofollow"}.
    Statically optimised pages compiled by next are served from CloudFront edge locations with low latency and cost.
-   [Client assets](https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix){rel="nofollow"}.
    Next.js build assets `/_next/*` served from CloudFront.
-   [User static / public folders](https://nextjs.org/docs/basic-features/static-file-serving){rel="nofollow"}.
    Any of your assets in the static or public folders are uploaded to S3 and served from CloudFront automatically.
-   [Opt-in to static generation (SSG)](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation){rel="nofollow"} via `getStaticProps`.
-   [Opt-in to server-side rendering (SSR)](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering){rel="nofollow"} via `getServerSideProps`.
-   [Statically generate a set of routes from dynamic sources](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation){rel="nofollow"} via `getStaticPaths`.
-   [Base path](https://nextjs.org/docs/api-reference/next.config.js/basepath){rel="nofollow"}
-   [Preview mode](https://nextjs.org/docs/advanced-features/preview-mode){rel="nofollow"}
-   [Optional catch all routes](https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes){rel="nofollow"}
-   [Redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects){rel="nofollow"}. Caveat: every route should be able to redirect except `_next/static/*` and `static/*`, since those cache behaviors do not have Lambda handlers attached to them. Note that the new `has` matching format ([https://nextjs.org/docs/api-reference/next.config.js/redirects#header-cookie-and-query-matching](https://nextjs.org/docs/api-reference/next.config.js/redirects#header-cookie-and-query-matching){rel="nofollow"}) is not yet supported.
-   [Rewrites](https://nextjs.org/docs/api-reference/next.config.js/rewrites){rel="nofollow"}. Caveat: every route should be able to rewrite except `_next/static/*` and `static/*`, since those cache behaviors do not have Lambda handlers attached to them. Note that the new `has` matching format ([https://nextjs.org/docs/api-reference/next.config.js/redirects#header-cookie-and-query-matching](https://nextjs.org/docs/api-reference/next.config.js/redirects#header-cookie-and-query-matching){rel="nofollow"}) is not yet supported.
-   [Custom Headers](https://nextjs.org/docs/api-reference/next.config.js/headers){rel="nofollow"}. Caveats: every route should be able to have custom headers except `_next/static/*` and `static/*`, since those cache behaviors do not have Lambda handlers attached to them. Note that the new `has` matching format ([https://nextjs.org/docs/api-reference/next.config.js/redirects#header-cookie-and-query-matching](https://nextjs.org/docs/api-reference/next.config.js/redirects#header-cookie-and-query-matching){rel="nofollow"}) is not yet supported.
-   [Image Optimization](https://nextjs.org/docs/basic-features/image-optimization){rel="nofollow"}
-   [Next.js 10 Localization](https://nextjs.org/blog/next-10){rel="nofollow"}. See: [#721](https://github.com/serverless-nextjs/serverless-next.js/issues/721){hovercard-url="/serverless-nextjs/serverless-next.js/issues/721/hovercard" hovercard-type="issue" url="https://github.com/serverless-nextjs/serverless-next.js/issues/721" permission-text="Title is private" data-id="732242440" error-text="Failed to load title"} for more details and tips. We also automatically detect and copy the default configuration files if you are using the `next-i18next` package.
-   [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration){rel="nofollow"}. Requires SQS.SendMessage permissions on your Lambda role and various SQS/Lambda permissions on your deployment user (note, adding ISR to an existing app requires manually updating the Lambda role\'s permissions for now - see [#1510](https://github.com/serverless-nextjs/serverless-next.js/issues/1510){hovercard-url="/serverless-nextjs/serverless-next.js/issues/1510/hovercard" hovercard-type="issue" url="https://github.com/serverless-nextjs/serverless-next.js/issues/1510" permission-text="Title is private" data-id="962700534" error-text="Failed to load title"}). See [#1028](https://github.com/serverless-nextjs/serverless-next.js/pull/1028){hovercard-url="/serverless-nextjs/serverless-next.js/pull/1028/hovercard" hovercard-type="pull_request" url="https://github.com/serverless-nextjs/serverless-next.js/issues/1028" permission-text="Title is private" data-id="870252828" error-text="Failed to load title"} for more details, big thanks to \@kirkness for this amazing work.
-   [Next.js 12 features](https://nextjs.org/blog/next-12){rel="nofollow"} Features like middleware, bot-aware ISR fallback, AVIF image support, etc. are not yet supported, though with the latest component version, you should be able to use existing features on Next.js 12.

### Getting started {#getting-started dir="auto" tabindex="-1"}

[](#getting-started){#user-content-getting-started aria-label="Permalink: Getting started"}

First, ensure you have Node.js 12+ installed on the deploying machine as all code is now transpiled to ES2019. Add your next application to the serverless.yml:

    # serverless.yml

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}" # it is recommended you pin the latest stable version of serverless-next.js

🚫 **If you specify `@sls-next/serverless-component` in your `serverless.yml` file, do not add `@sls-next/serverless-component` to your package.json file, it is not used and only the version in `serverless.yml` file is used, which Serverless pulls from npm by itself. If you do not specify the version, it will use the `latest` tag, which refers to the latest stable version [here](https://www.npmjs.com/package/@sls-next/serverless-component){rel="nofollow"} (i.e not alpha versions).**

You can also point it to a local installation, for example if you want to version using `package.json`.

In this case, configure the following:

    # serverless.yml

    myNextApplication:
      component: "./node_modules/@sls-next/serverless-component"

Then set your AWS credentials as environment variables:

    AWS_ACCESS_KEY_ID=accesskey
    AWS_SECRET_ACCESS_KEY=sshhh

And simply deploy:

If you have issues deploying due to new serverless version, please try to pin to specific version e.g
2.72.2. See [#2320 (comment)](https://github.com/serverless-nextjs/serverless-next.js/issues/2320#issue-1116744699){hovercard-url="/serverless-nextjs/serverless-next.js/issues/2320/hovercard" hovercard-type="issue" url="https://github.com/serverless-nextjs/serverless-next.js/issues/2320" permission-text="Title is private" data-id="1116744699" error-text="Failed to load title"}

\[ALPHA - may be buggy\] You may also deploy using `npx @sls-next/serverless-patched` (or `serverless-patched` if you installed it locally), which is a patched version of `serverless` that fixes a couple of issues by patching the underlying `@serverless/cli`: (1) Continuous \"Deploying\" messages being printed in non-interactive terminals (e.g CI output) that make it hard to debug, and (2) Handles silent Next.js build failures.

It\'s also recommended to add `--debug` flag to get more useful logs of what\'s happening behind the scenes.

🚫 **Don\'t attempt to deploy by running `serverless deploy`, use only `serverless`**

### Custom domain name {#custom-domain-name dir="auto" tabindex="-1"}

[](#custom-domain-name){#user-content-custom-domain-name aria-label="Permalink: Custom domain name"}

In most cases you wouldn\'t want to use CloudFront\'s distribution domain to access your application. Instead, you can specify a custom domain name.

You can use any domain name but you must be using AWS Route53 for your DNS hosting. To migrate DNS records from an existing domain follow the instructions
[here](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html){rel="nofollow"}. The requirements to use a custom domain name:

-   Route53 must include a *hosted zone* for your domain (e.g. `mydomain.com`) with a set of nameservers.
-   You must update the nameservers listed with your domain name registrar (e.g. namecheap, godaddy, etc.) with those provided for your new *hosted zone*.

The serverless Next.js component will automatically generate an SSL certificate and create a new record to point to your CloudFront distribution.

    # serverless.yml

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        domain: "example.com" # sub-domain defaults to www
        domainMinimumProtocolVersion: "TLSv1.2_2018" # can be omitted, defaults to "TLSv1.2_2018"

You can also configure a `subdomain`:

    # serverless.yml

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        domain: ["sub", "example.com"] # [ sub-domain, domain ]

### Custom CloudFront configuration {#custom-cloudfront-configuration dir="auto" tabindex="-1"}

[](#custom-cloudfront-configuration){#user-content-custom-cloudfront-configuration aria-label="Permalink: Custom CloudFront configuration"}

To specify your own CloudFront inputs, just add any [aws-cloudfront inputs](https://github.com/serverless-nextjs/serverless-next.js/tree/master/packages/serverless-components/aws-cloudfront#3-configure) under `cloudfront`:

    # serverless.yml

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        cloudfront:
          # if you want to use an existing cloudfront distribution, provide it here
          distributionId: XYZEXAMPLE #optional
          # this is the default cache behaviour of the cloudfront distribution
          # the origin-request edge lambda associated to this cache behaviour does the pages server side rendering
          defaults:
            forward:
              headers:
                [
                  CloudFront-Is-Desktop-Viewer,
                  CloudFront-Is-Mobile-Viewer,
                  CloudFront-Is-Tablet-Viewer
                ]
          # this is the cache behaviour for next.js api pages
          api:
            minTTL: 10
            maxTTL: 10
            defaultTTL: 10
          # you can set other cache behaviours like "defaults" above that can handle server side rendering
          # but more specific for a subset of your next.js pages
          /blog/*:
            minTTL: 1000
            maxTTL: 1000
            defaultTTL: 1000
            forward:
              cookies: "all"
              queryString: false
          /about:
            minTTL: 3000
            maxTTL: 3000
            defaultTTL: 3000
          # you can add custom origins to the cloudfront distribution
          origins:
            - url: /static
              pathPatterns:
                /wp-content/*:
                  minTTL: 10
                  maxTTL: 10
                  defaultTTL: 10
            - url: https://old-static.com
              pathPatterns:
                /old-static/*:
                  minTTL: 10
                  maxTTL: 10
                  defaultTTL: 10
            - url: http://old-api.com
              protocolPolicy: http-only
              pathPatterns:
                /old-api/*:
                  minTTL: 10
                  maxTTL: 10
                  defaultTTL: 10
          aliases: ["foo.example.com", "bar.example.com"]
          priceClass: "PriceClass_100"
          # You can add custom error responses
          errorPages:
            - code: 503
              path: "/503.html"
              minTTL: 5 # optional, minimum ttl the error is cached (default 10)
              responseCode: 500 # optional, alters the response code
          comment: "a comment" # optional, describes your distribution
          webACLId: "arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a" # ARN of WAF
          restrictions:
            geoRestriction:
              restrictionType: "blacklist" # valid values are whitelist/blacklist/none. Set to "none" and omit items to disable restrictions
              items: ["AA"] # ISO 3166 alpha-2 country codes
          certificate:
            cloudFrontDefaultCertificate: false # specify false and one of IAM/ACM certificates, or specify true and omit IAM/ACM inputs for default certificate
            acmCertificateArn: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012"
            iamCertificateId: "iam-certificate-id" # specify either ACM or IAM certificate, not both
            sslSupportMethod: "sni-only" # can be omitted, defaults to "sni-only"
            minimumProtocolVersion: "TLSv1.2_2019" # can be omitted, defaults to "TLSv1.2_2019"
          originAccessIdentityId: XYZEXAMPLE #optional
          paths: ["/*"] # which paths should be invalidated on deploy, default matches everything, empty array skips invalidation completely
          waitBeforeInvalidate: true # by default true, it waits for the CloudFront distribution to have completed before invalidating, to avoid possibly caching old page
          tags: # Add any tags you want
            tag1: val1
            tag2: val2

This is particularly useful for caching any of your Next.js pages at CloudFront\'s edge locations. See [this](https://github.com/serverless-nextjs/serverless-next.js/tree/master/packages/serverless-components/nextjs-component/examples/app-with-custom-caching-config) for an example application with custom cache configuration.
You can also [update an existing cloudfront distribution](https://github.com/serverless-nextjs/serverless-next.js/tree/master/packages/serverless-components/aws-cloudfront#updating-an-existing-cloudfront-distribution) using custom cloudfront inputs.

### Static pages caching {#static-pages-caching dir="auto" tabindex="-1"}

[](#static-pages-caching){#user-content-static-pages-caching aria-label="Permalink: Static pages caching"}

Statically rendered pages (i.e. HTML pages that are uploaded to S3) have the following Cache-Control set:

    cache-control: public, max-age=0, s-maxage=2678400, must-revalidate

`s-maxage` allows Cloudfront to cache the pages at the edge locations for 31 days.
`max-age=0` in combination with `must-revalidate` ensure browsers never cache the static pages. This allows Cloudfront to be in full control of caching TTLs. On every deployment an invalidation`/*` is created to ensure users get fresh content.

### Public directory caching {#public-directory-caching dir="auto" tabindex="-1"}

[](#public-directory-caching){#user-content-public-directory-caching aria-label="Permalink: Public directory caching"}

By default, common image formats(`gif|jpe?g|jp2|tiff|png|webp|bmp|svg|ico`) under `/public` or `/static` folders
have a one-year `Cache-Control` policy applied(`public, max-age=31536000, must-revalidate`).
You may customize either the `Cache-Control` header `value` and the regex of which files to `test`, with `publicDirectoryCache`:

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        publicDirectoryCache:
          value: public, max-age=604800
          test: /\.(gif|jpe?g|png|txt|xml)$/i

`value` must be a valid `Cache-Control` policy and `test` must be a valid `regex` of the types of files you wish to test.
If you don\'t want browsers to cache assets from the public directory, you can disable this:

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        publicDirectoryCache: false

### AWS Permissions {#aws-permissions dir="auto" tabindex="-1"}

[](#aws-permissions){#user-content-aws-permissions aria-label="Permalink: AWS Permissions"}

By default the Lambda@Edge functions run using AWSLambdaBasicExecutionRole which only allows uploading logs to CloudWatch. If you need permissions beyond this, like for example access to DynamoDB or any other AWS resource you will need your own custom policy or role arn:

#### Specify policy: {#specify-policy dir="auto" tabindex="-1"}

[](#specify-policy){#user-content-specify-policy aria-label="Permalink: Specify policy:"}

    # serverless.yml

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        policy: "arn:aws:iam::123456789012:policy/MyCustomPolicy"

#### Specify role: {#specify-role dir="auto" tabindex="-1"}

[](#specify-role){#user-content-specify-role aria-label="Permalink: Specify role:"}

    # serverless.yml

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        roleArn: "arn:aws:iam::123456789012:role/MyCustomLambdaRole"

Make sure you add CloudWatch log permissions to your custom policy or role. Minimum policy JSON example:

    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Resource": "*",
          "Action": [
            "logs:CreateLogGroup",
            "logs:CreateLogStream",
            "logs:PutLogEvents"
          ]
        },
        {
          "Effect": "Allow",
          "Resource": "arn:aws:s3:::s3-deployment-bucket-name/*",
          "Action": ["s3:GetObject", "s3:PutObject"]
        }
      ]
    }

Role should include trust relationship with `lambda.amazonaws.com` and `edgelambda.amazonaws.com`.

**NOTE**: Specify `bucketName` and give permissions to access that bucket via `policy` or `roleArn` so default and API lambdas can access static resources.

### AWS Permissions for deployment {#aws-permissions-for-deployment dir="auto" tabindex="-1"}

[](#aws-permissions-for-deployment){#user-content-aws-permissions-for-deployment aria-label="Permalink: AWS Permissions for deployment"}

The exhaustive list of AWS actions required for a deployment:

      "acm:DescribeCertificate", // only for custom domains
      "acm:ListCertificates",    // only for custom domains
      "acm:RequestCertificate",  // only for custom domains
      "cloudfront:CreateCloudFrontOriginAccessIdentity",
      "cloudfront:CreateDistribution",
      "cloudfront:CreateInvalidation",
      "cloudfront:GetDistribution",
      "cloudfront:GetDistributionConfig",
      "cloudfront:ListCloudFrontOriginAccessIdentities",
      "cloudfront:ListDistributions",
      "cloudfront:ListDistributionsByLambdaFunction",
      "cloudfront:ListDistributionsByWebACLId",
      "cloudfront:ListFieldLevelEncryptionConfigs",
      "cloudfront:ListFieldLevelEncryptionProfiles",
      "cloudfront:ListInvalidations",
      "cloudfront:ListPublicKeys",
      "cloudfront:ListStreamingDistributions",
      "cloudfront:UpdateDistribution",
      "cloudfront:TagResource",         // for adding tags
      "cloudfront:UntagResource",       // for adding tags
      "cloudfront:ListTagsForResource", // for adding tags
      "iam:AttachRolePolicy",
      "iam:CreateRole",
      "iam:CreateServiceLinkedRole",
      "iam:GetRole",
      "iam:PutRolePolicy",
      "iam:PassRole",
      "lambda:CreateFunction",
      "lambda:EnableReplication",
      "lambda:DeleteFunction",            // only for custom domains
      "lambda:GetFunction",
      "lambda:GetFunctionConfiguration",
      "lambda:PublishVersion",
      "lambda:UpdateFunctionCode",
      "lambda:UpdateFunctionConfiguration",
      "lambda:ListTags",                  // for tagging lambdas
      "lambda:TagResource",               // for tagging lambdas
      "lambda:UntagResource",             // for tagging lambdas
      "route53:ChangeResourceRecordSets", // only for custom domains
      "route53:ListHostedZonesByName",
      "route53:ListResourceRecordSets",   // only for custom domains
      "s3:CreateBucket",
      "s3:GetAccelerateConfiguration",
      "s3:GetObject",                     // only if persisting state to S3 for CI/CD
      "s3:ListBucket",
      "s3:PutAccelerateConfiguration",
      "s3:PutBucketPolicy",
      "s3:PutObject",
      "s3:PutBucketTagging",              // for tagging buckets
      "s3:GetBucketTagging",              // for tagging buckets
      "lambda:ListEventSourceMappings",
      "lambda:CreateEventSourceMapping",
      "iam:UpdateAssumeRolePolicy",
      "iam:DeleteRolePolicy",
      "sqs:CreateQueue", // SQS permissions only needed if you use Incremental Static Regeneration. Corresponding SQS.SendMessage permission needed in the Lambda role
      "sqs:DeleteQueue",
      "sqs:GetQueueAttributes",
      "sqs:SetQueueAttributes"

### Lambda At Edge Configuration {#lambda-at-edge-configuration dir="auto" tabindex="-1"}

[](#lambda-at-edge-configuration){#user-content-lambda-at-edge-configuration aria-label="Permalink: Lambda At Edge Configuration"}

The **default**, **api**, and **image** (for Next.js Image Optimization) edge lambdas will be assigned 512mb of memory by default. This value can be altered by assigning a number to the `memory` input

    # serverless.yml

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        memory: 1024

Values for **default**, **api**, and **image** lambdas can be separately defined by assigning `memory` to an object like so:

    # serverless.yml

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        memory:
          defaultLambda: 1024
          apiLambda: 2048
          imageLambda: 2048

The same pattern can be followed for specifying the Node.js runtime (nodejs14.x by default):

    # serverless.yml

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        runtime:
          defaultLambda: "nodejs14.x"
          apiLambda: "nodejs14.x"
          imageLambda: "nodejs14.x" # Note that the sharp image library is built for Lambda Node.js 14.x, although it will likely work fine on other runtimes

Similarly, the timeout by default is 10 seconds. To customise you can:

    # serverless.yml

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        timeout:
          defaultLambda: 20
          apiLambda: 15
          imageLambda: 15

Note the maximum timeout allowed for Lambda@Edge is 30 seconds. See [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-requirements-limits.html](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-requirements-limits.html){rel="nofollow"}

You can also set a custom name for **default**, **api**, and **image** lambdas - if not the default is set by the [aws-lambda serverless component](https://github.com/serverless-components/aws-lambda) to the resource id:

    # serverless.yml

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        name:
          defaultLambda: fooDefaultLambda
          apiLambda: fooApiLambda
          imageLambda: fooImageLambda

There is a fourth **regeneration** lambda, which can be configured similarly and is used for Incremental Static Regeneration. However, it does not use Lamda@Edge and can, for example, have a longer timeout setting.

### Architecture {#architecture dir="auto" tabindex="-1"}

[](#architecture){#user-content-architecture aria-label="Permalink: Architecture"}

[![architecture](https://github.com/serverless-nextjs/serverless-next.js/raw/master/img/arch_no_grid.png)](https://github.com/serverless-nextjs/serverless-next.js/blob/master/img/arch_no_grid.png){rel="noopener noreferrer"}

Four Cache Behaviours are created in CloudFront.

The first two `_next/*` and `static/*` forward the requests to S3.

The third is associated to a lambda function which is responsible for handling three types of requests.

1.  Server side rendered page. Any page that defines `getInitialProps` method will be rendered at this level and the response is returned immediately to the user.

2.  Statically optimised page. Requests to pages that were pre-compiled by next to HTML are forwarded to S3.

3.  Public resources. Requests to root level resources like `/robots.txt`, `/favicon.ico`, `/manifest.json`, etc. These are forwarded to S3.

The reason why 2. and 3. have to go through Lambda@Edge first is because the routes don\'t conform to a pattern like `_next/*` or `static/*`. Also, one cache behaviour per route is a bad idea because CloudFront only allows [25 per distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions){rel="nofollow"}.

The fourth cache behaviour handles next API requests `api/*`.

### Inputs {#inputs dir="auto" tabindex="-1"}

[](#inputs){#user-content-inputs aria-label="Permalink: Inputs"}

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Name                           Type               Default Value                                                        Description
  ------------------------------ ------------------ -------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  deploy                         `boolean`          `true`                                                               When set to false, it will not deploy the app to the provider (e.g AWS).

  domain                         `Array`            `null`                                                               For example `['admin', 'portal.com']`

  domainRedirects                `object`           `{}`                                                                 Adds domain-level redirects at the edge using a 308 redirect. Specify an object of domain name -\> redirect destination with protocol. For example, `www.example.com: https://example.com`. See [here](https://github.com/serverless-nextjs/serverless-next.js#i-was-expecting-for-automatic-subdomain-redirection-when-using-the-domaintype-wwwapex-input) for more information.

  bucketName                     `string`           `null`                                                               Custom bucket name where static assets are stored. By default is autogenerated.

  bucketRegion                   `string`           `null`                                                               Region where you want to host your s3 bucket. Make sure this is geographically closer to the majority of your end users to reduce latency when CloudFront proxies a request to S3.

  bucketTags                     `object`           `undefined`                                                          Custom bucket tags to set for your bucket. If undefined, the component will not update any tags. If set to an empty object, it will remove all tags.

  nextConfigDir                  `string`           `./`                                                                 Directory where your application `next.config.js` file is. This input is useful when the `serverless.yml` is not in the same directory as the next app.\
                                                                                                                         **Note:** `nextConfigDir` should be set if `next.config.js` `distDir` is used

  nextStaticDir                  `string`           `./`                                                                 If your `static` or `public` directory is not a direct child of `nextConfigDir` this is needed

  description                    `string`           `*lambda-type*@Edge for Next CloudFront distribution`                The description that will be used for both lambdas. Note that \"(API)\" will be appended to the API lambda description.

  policy                         `string|object`    `arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole`   The arn or inline policy that will be assigned to both lambdas.

  roleArn                        `string|object`    null                                                                 The arn of role that will be assigned to both lambdas.

  runtime                        `string|object`    `nodejs14.x`                                                         When assigned a value, both the default and api lambdas will be assigned the runtime defined in the value. When assigned to an object, values for the default and api lambdas can be separately defined

  memory                         `number|object`    `512`                                                                When assigned a number, both the default and api lambdas will be assigned memory of that value. When assigned to an object, values for the default and api lambdas can be separately defined

  tags                           `object`           `undefined`                                                          Tags to assign to a Lambda. If undefined, the component will not update any tags. If set to an empty object, it will remove all tags.

  timeout                        `number|object`    `10`                                                                 Same as above

  handler                        `string`           `index.handler`                                                      When assigned a value, overrides the default function handler to allow for configuration. Copies `handler.js` in route into the Lambda folders. Your handler MUST still call the `default-handler` afterwards or your function won\'t work with Next.JS

  name                           `object`           /                                                                    Names for all lambdas can be explicitly defined

  build                          `boolean|object`   `true`                                                               When true builds and deploys app, when false assume the app has been built and uses the `.next` `.serverless_nextjs` directories in `nextConfigDir` to deploy. If an object is passed `build` allows for overriding what script gets called and with what arguments.

  build.cmd                      `string`           `node_modules/.bin/next`                                             Build command, you may pass a no-op command (e.g `true` or `:` in Unix-based systems) which will then skip the Next.js build

  build.args                     `Array|string`     `['build']`                                                          Arguments to pass to the build

  build.cwd                      `string`           `./`                                                                 Override the current working directory

  build.enabled                  `boolean`          `true`                                                               Same as passing `build:false` but from within the config

  build.env                      `object`           `{}`                                                                 Add additional environment variables to the script

  build.postBuildCommands        `Array`            `[]`                                                                 Any commands to run post-build and pre-deploy. For example, you can run any custom code on the `.serverless_nextjs` directory e.g you can copy additional files into the Lambda: see [#767 (comment)](https://github.com/serverless-nextjs/serverless-next.js/issues/767#issuecomment-722967719){hovercard-url="/serverless-nextjs/serverless-next.js/issues/767/hovercard?comment_id=722967719&comment_type=issue_comment" hovercard-type="issue" url="https://github.com/serverless-nextjs/serverless-next.js/issues/767" permission-text="Title is private" data-id="737096785" error-text="Failed to load title"} for an example for `next-18n`. Only applies during execution of the `serverless` command.

  build.cleanupDotNext           `boolean`          `true`                                                               Whether to clean up `.next` directory before running the build step

  build.assetIgnorePatterns      `string[]`         `[]`                                                                 Glob patterns to ignore when discovering files to copy from \_next/static, public, static directories.

  build.useV2Handler             `boolean`          `false`                                                              **Experimental** Set this to true to use V2 handlers which starts to use genericized handlers. Note: this has the functionality of `separateApiLambda` and `disableOriginResponseHandler` so it should not be used together. Also, it is not completely optimized yet in terms of code size, but should still be performant. In the future, we will likely use this mode by default.

  cloudfront                     `object`           `{}`                                                                 Inputs to be passed to [aws-cloudfront](https://github.com/serverless-components/aws-cloudfront)

  certificateArn                 `string`           \`\`                                                                 Specific certificate ARN to use for CloudFront distribution. Helpful if you have a wildcard SSL cert you wish to use. This currently works only in tandem with the`domain`input. Please check [custom CloudFront configuration](https://github.com/serverless-nextjs/serverless-next.js#custom-cloudfront-configuration) for how to specify`certificate`without needing to use the`domain`input (note that doing so will override any certificate due to the domain input).

  domainType                     `string`           `"both"`                                                             Can be one of:`"apex"`- apex domain only, don\'t create a www subdomain.`"www"` - www domain only, don\'t create an apex subdomain.`"both"`- create both www and apex domains when either one is provided.

  domainMinimumProtocolVersion   `string`           `"TLSv1.2_2018"`                                                     Can be one of: `"SSLv3", "TLSv1", "TLSv1.1_2016", "TLSv1.2_2018", "TLSv1.2_2019", "TLSv1.2_2021" or "TLSv1_2016"`. See [reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-viewercertificate.html){rel="nofollow"}.

  publicDirectoryCache           `boolean|object`   `true`                                                               Customize the`public`/`static`folder asset caching policy. Assigning an object with`value`and/or`test`lets you customize the caching policy and the types of files being cached. Assigning false disables caching

  useServerlessTraceTarget       `boolean`          `false`                                                              Use the experimental-serverless-trace target to build your next app. This is the same build target that Vercel Now uses. See this [RFC](https://github.com/vercel/next.js/pull/8246){hovercard-url="/vercel/next.js/pull/8246/hovercard" hovercard-type="pull_request"} for details. Note: while using this, you may need to set`NODE_ENV`variable to`production`.

  minifyHandlers                 `boolean`          `false`                                                              Use pre-built minified handlers to reduce code size. Does not minify custom handlers.

  enableHTTPCompression          `boolean`          `false`                                                              When set to`true`the Lambda@Edge functions for SSR and API requests will use Gzip to compress the response. Note that you shouldn\'t need to enable this because CloudFront will compress responses for you out of the box.

  authentication                 `object`           `undefined`                                                          Authentication object for use with basic authentication (available from 1.19.0-alpha.3). It only supports a single username/password combination for now and is inlined in plaintext in the Lambda handler. You must also forward the`Authorization`header for CloudFront behaviors, e.g`defaults`, `api/*`, and `\_next/data/\_`. **Note: this is meant as a simple means of protecting an environment such as a development/test site, it is not recommended for production use.**

  authentication.username        `string`           `undefined`                                                          Username for basic authentication.

  enableS3Acceleration           `boolean`          `true`                                                               Whether to enable S3 transfer acceleration. This may be useful to disable as some AWS regions do not support it. See [reference](https://docs.amazonaws.cn/en_us/aws/latest/userguide/s3.html){rel="nofollow"}.

  removeOldLambdaVersions        `boolean`          `false`                                                              Basic support for removing old Lambda versions after deploying to ensure. If set to true, every time you deploy it will automatically removes up to \~50 old versions (starting from oldest) of all Lambdas that are not deployed/replicated. If you require more complex strategies, it is recommended to write your own script to remove old versions.
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Custom inputs can be configured like this:

    myNextApp:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        bucketName: my-bucket

### CDK Construct {#cdk-construct dir="auto" tabindex="-1"}

[](#cdk-construct){#user-content-cdk-construct aria-label="Permalink: CDK Construct"}

> (experimental) - more work required to bring this construct up to speed and
> also to reuse some of the serverless logic. As a result the construct is
> likely to adapt/change accordingly.

[Documentation can be found here.](https://serverless-nextjs.com/docs/cdkconstruct){rel="nofollow"}

### FAQ {#faq dir="auto" tabindex="-1"}

[](#faq){#user-content-faq aria-label="Permalink: FAQ"}

#### How production ready is this? {#how-production-ready-is-this dir="auto" tabindex="-1"}

[](#how-production-ready-is-this){#user-content-how-production-ready-is-this aria-label="Permalink: How production ready is this?"}

As we are emulating Next.js routing logic nearly from scratch to optimize it for a serverless environment, there may be some incomplete or missing features (as mentioned earlier). However, we feel that we\'ve covered the majority of features and have added good unit and end-to-end test coverage to ensure stability (e.g across 10+ end-to-end test suites). Several people are using this to power their startup, personal websites, etc.

Cloud provider limitations also apply - for example on AWS Lambda@Edge, there are cold starts, code size limits, 1 MB response size limit, etc to name a few. You are of course also tied to a single platform for now (AWS Lambda@Edge; more coming soon!).

We are also continuing to improve the deployment process by considering better infrastructure-as-code solutions in the near future (CDK, CDK Terraform, Pulumi, etc.).

#### My component doesn\'t deploy {#my-component-doesnt-deploy dir="auto" tabindex="-1"}

[](#my-component-doesnt-deploy){#user-content-my-component-doesnt-deploy aria-label="Permalink: My component doesn't deploy"}

Make sure your `serverless.yml` uses the `serverless-components` (beta) format. [serverless components](https://serverless.com/blog/what-are-serverless-components-how-use/){rel="nofollow"} differ from the original serverless framework, even though they are both accessible via the same CLI.

✅ **Do**

    # serverless.yml
    myNextApp:
      component: "@sls-next/serverless-component@{version_here}"

    myTable:
      component: serverless/aws-dynamodb
      inputs:
        name: Customers
    # other components

🚫 **Don\'t**

    # serverless.yml
    provider:
      name: aws
      runtime: nodejs10.x
      region: eu-west-1

    myNextApp:
      component: "@sls-next/serverless-component@{version_here}"

    Resources: ...

Note how the correct yaml doesn\'t declare a `provider`, `Resources`, etc.

For deploying, don\'t run `serverless deploy`. Simply run `serverless` and that deploys your components declared in the `serverless.yml` file.

For more information about serverless components go [here](https://serverless.com/blog/what-are-serverless-components-how-use/){rel="nofollow"}.

#### The Lambda@Edge code size is too large {#the-lambdaedge-code-size-is-too-large dir="auto" tabindex="-1"}

[](#the-lambdaedge-code-size-is-too-large){#user-content-the-lambdaedge-code-size-is-too-large aria-label="Permalink: The Lambda@Edge code size is too large"}

The API handler and default handler packages are deployed separately, but each has a limit of 50 MB zipped or 250 MB uncompressed per AWS - see [here](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html){rel="nofollow"} and [here](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-requirements-limits.html){rel="nofollow"}. By design, there is currently only one Lambda@Edge for all page routes and one Lambda@Edge for all API routes. This could lead to code size issues especially if you have many API routes, SSR pages, etc.

If you are encountering code size issues, please try the following:

-   Optimize your code size: reduce \# dependencies in your SSR pages and API routes, have fewer SSR pages (i.e don\'t use `getInitialProps()` or `getServerSideProps()`).

-   Minify the handler code itself by using the `minifyHandlers` input. This will reduce handler size from \~500 kB to \~200 kB.

-   Minify/minimize your server-side code using Terser by adding the following Webpack configuration to your `next.config.js`. It uses `NEXT_MINIMIZE` environment variable to tell it to minimize the SSR code. Note that this will increase build times, and minify the code so it could be harder to debug CloudWatch errors.

First, add `terser-webpack-plugin` to your dependencies. Then update `next.config.js`:

    const TerserPlugin = require("terser-webpack-plugin");

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      if (isServer && !dev && process.env.NEXT_MINIMIZE === "true") {
        config.optimization = {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              parallel: true,
              cache: true,
              terserOptions: {
                output: { comments: false },
                mangle: true,
                compress: true
              },
              extractComments: false
            })
          ]
        };
      }

      return config;
    };

Note that if you do not use any API routes, all JS files used only for prerendering static pages are automatically removed from the bundle. However, if you use API routes, we do not remove them as they may be used for preview mode. There\'s no official/non-hacky way to identify and remove these JS files not used in preview mode even when API routes are used. But we can add a new input to manually exclude them, if needed.

-   Use the `useServerlessTraceTarget` option in `serverless.yml`. This will cause Next.js to not bundle dependencies into each page (instead creating lightweight pages) and then `serverless-next.js` will reference a single set of dependencies in `node_modules`.

#### Serverless deployment takes a long time and times out with a message like \"TimeoutError: Connection timed out after 120000ms\" {#serverless-deployment-takes-a-long-time-and-times-out-with-a-message-like-timeouterror-connection-timed-out-after-120000ms dir="auto" tabindex="-1"}

[](#serverless-deployment-takes-a-long-time-and-times-out-with-a-message-like-timeouterror-connection-timed-out-after-120000ms){#user-content-serverless-deployment-takes-a-long-time-and-times-out-with-a-message-like-timeouterror-connection-timed-out-after-120000ms aria-label="Permalink: Serverless deployment takes a long time and times out with a message like \"TimeoutError: Connection timed out after 120000ms\""}

This is likely either because of a Lambda@Edge code size issue (see above for potential solutions. Related [GitHub Issue](https://github.com/serverless-nextjs/serverless-next.js/issues/611){hovercard-url="/serverless-nextjs/serverless-next.js/issues/611/hovercard" hovercard-type="issue"}) or if you have a slow network upload speed and/or are trying to deploy a large Lambda package.

In the second case, the `aws-sdk` npm package used has a default timeout of 120 seconds. Right now this is not configurable, but we may support longer timeouts in the near future (similar to [serverless/serverless#937](https://github.com/serverless/serverless/pull/937){hovercard-url="/serverless/serverless/pull/937/hovercard" hovercard-type="pull_request" url="https://github.com/serverless/serverless/issues/937" permission-text="Title is private" data-id="145499758" error-text="Failed to load title"}, which only applies to Serverless Framework, not Serverless Components).

#### When accessing the Host header in my SSR pages or APIs, I get an S3 domain instead of the CloudFront distribution or my domain name {#when-accessing-the-host-header-in-my-ssr-pages-or-apis-i-get-an-s3-domain-instead-of-the-cloudfront-distribution-or-my-domain-name dir="auto" tabindex="-1"}

[](#when-accessing-the-host-header-in-my-ssr-pages-or-apis-i-get-an-s3-domain-instead-of-the-cloudfront-distribution-or-my-domain-name){#user-content-when-accessing-the-host-header-in-my-ssr-pages-or-apis-i-get-an-s3-domain-instead-of-the-cloudfront-distribution-or-my-domain-name aria-label="Permalink: When accessing the Host header in my SSR pages or APIs, I get an S3 domain instead of the CloudFront distribution or my domain name"}

By default, CloudFront sets the `Host` header to the S3 origin host name. You need to forward the `Host` header to the origin. See the example below for forwarding it for your `api/*` cache behavior:

    myNextApplication:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        cloudfront:
          api/*:
            forward:
              headers: [Host]

#### Should I use the [serverless-plugin](https://github.com/serverless-nextjs/serverless-next.js/tree/master/packages/deprecated/serverless-plugin) or this component? {#should-i-use-the-serverless-plugin-or-this-component dir="auto" tabindex="-1"}

[](#should-i-use-the-serverless-plugin-or-this-component){#user-content-should-i-use-the-serverless-plugin-or-this-component aria-label="Permalink: Should I use the serverless-plugin or this component?"}

Users are encouraged to use this component instead of the `serverless-plugin`. This component was built and designed using lessons learned from the serverless plugin.

#### How do I interact with other AWS Services within my app? {#how-do-i-interact-with-other-aws-services-within-my-app dir="auto" tabindex="-1"}

[](#how-do-i-interact-with-other-aws-services-within-my-app){#user-content-how-do-i-interact-with-other-aws-services-within-my-app aria-label="Permalink: How do I interact with other AWS Services within my app?"}

See `examples/dynamodb-crud` for an example Todo application that interacts with DynamoDB. You can find a full list of examples [here](https://github.com/serverless-nextjs/serverless-next.js/tree/master/packages/serverless-components/nextjs-component/examples)

#### \[CI/CD\] Multi-stage deployments / A new CloudFront distribution is created on every CI build. I wasn\'t expecting that {#cicd-multi-stage-deployments-a-new-cloudfront-distribution-is-created-on-every-ci-build.-i-wasnt-expecting-that dir="auto" tabindex="-1"}

[](#cicd-multi-stage-deployments--a-new-cloudfront-distribution-is-created-on-every-ci-build-i-wasnt-expecting-that){#user-content-cicd-multi-stage-deployments--a-new-cloudfront-distribution-is-created-on-every-ci-build-i-wasnt-expecting-that aria-label="Permalink: [CI/CD] Multi-stage deployments / A new CloudFront distribution is created on every CI build. I wasn't expecting that"}

Unfortunately, because of the way Serverless Components works (at least the beta version), the deployment state needs to be synced outside of the main `serverless` command. So you can try the following solutions:

1.  You need to commit your application state in source control. That is the files under the `.serverless` directory. Although this is not recommended as it doesn\'t work well for multiple stages.
2.  Alternatively you could use S3 to store the `.serverless` files, see an example [here](https://gist.github.com/hadynz/b4e190e0ce10e5811cb462920a9c678f), [here](https://gist.github.com/dphang/7395ee09f6182f6b34f224660bed8e8c) (uses multiple `serverless.yml` files), or [here](https://github.com/serverless-nextjs/serverless-next.js/issues/328#issuecomment-655466654){hovercard-url="/serverless-nextjs/serverless-next.js/issues/328/hovercard" hovercard-type="issue"} (GitHub Actions-based, uses multiple `serverless.yml` files).
3.  You can also use the `distributionId` CloudFront input to specify an existing CloudFront distribution to deploy to.

In the future, we will look to improve this by integrating proper stage management into the component itself.

#### Why is this still using Serverless Components Beta? Is there a plan to upgrade to GA? {#why-is-this-still-using-serverless-components-beta-is-there-a-plan-to-upgrade-to-ga dir="auto" tabindex="-1"}

[](#why-is-this-still-using-serverless-components-beta-is-there-a-plan-to-upgrade-to-ga){#user-content-why-is-this-still-using-serverless-components-beta-is-there-a-plan-to-upgrade-to-ga aria-label="Permalink: Why is this still using Serverless Components Beta? Is there a plan to upgrade to GA?"}

This project was started by the original author when Serverless Components was in beta, and unfortunately GA components was released shortly afterwards. But this grew larger and larger, with several sub-components imported into this monorepo as they weren\'t maintained by Serverless. And then it became difficult to upgrade.

There was a plan to upgrade to GA components, but it was put on hold for a few reasons:

-   Since there is only one active maintainer, and it\'s been hard enough keeping up with Next.js parity and fixing bugs
-   Upon analysis of Serverless Components GA, it seems like there may be more drawbacks than benefits: now your code/temporary credentials might have to be built on Serverless infra and thus risks vendor lock-in (whereas beta components doesn\'t - it primarily provided reusable components but everything happened locally). In addition, it\'s not as configurable and robust as proper infrastructure-as-code (IaC) solutions, and a lot of components (especially non-AWS resources) are not well maintained. Finally, the current deployment logic is quite fragile and custom-written and requires lots of maintenance to keep up with new cloud provider features.

We are currently looking into proper IaC solutions (such as CDK for Terraform, CDK, Pulumi, etc.) to address this and to ease the burden of maintaining complex deployment logic, so that we can focus on the developer experience and feature parity with Next.js.

#### Are there plans to expand to other platforms? {#are-there-plans-to-expand-to-other-platforms dir="auto" tabindex="-1"}

[](#are-there-plans-to-expand-to-other-platforms){#user-content-are-there-plans-to-expand-to-other-platforms aria-label="Permalink: Are there plans to expand to other platforms?"}

Yes! The main blocker was that the Next.js routing logic used to be highly coupled with Lambda@Edge/CloudFront logic. However, we have genericized most of the core logic (into the `@sls-next/core` package) so that it can be reused in other platforms, simply by creating a wrapping handler, implementing some platform-specific client (e.g to retrieve pages, trigger static regeneration, etc.), and creating a deployer. If you were observant, you\'ll have noticed a new package currently in the works for Lambda deployments via API Gateway: <https://github.com/serverless-nextjs/serverless-next.js/tree/master/packages/libs/lambda>. Other platforms like Azure and Google Cloud should hopefully follow soon.

#### My lambda is deployed to `us-east-1`. How can I deploy it to another region? {#my-lambda-is-deployed-to-us-east-1.-how-can-i-deploy-it-to-another-region dir="auto" tabindex="-1"}

[](#my-lambda-is-deployed-to-us-east-1-how-can-i-deploy-it-to-another-region){#user-content-my-lambda-is-deployed-to-us-east-1-how-can-i-deploy-it-to-another-region aria-label="Permalink: My lambda is deployed to us-east-1. How can I deploy it to another region?"}

Serverless Next.js is *regionless*. By design, `serverless-next.js` applications will be deployed across the globe to every CloudFront edge location. The lambda might look like is only deployed to `us-east-1` but behind the scenes, it is replicated to every other region.

#### I require passing additional information into my build {#i-require-passing-additional-information-into-my-build dir="auto" tabindex="-1"}

[](#i-require-passing-additional-information-into-my-build){#user-content-i-require-passing-additional-information-into-my-build aria-label="Permalink: I require passing additional information into my build"}

See the sample below for an advanced `build` setup that includes passing additional arguments and environment variables to the build.

    # serverless.yml
    myDatabase:
      component: MY_DATABASE_COMPONENT
    myNextApp:
      component: "@sls-next/serverless-component@{version_here}"
      inputs:
        build:
          args: ["build", "custom/path/to/pages"]
          env:
            DATABASE_URL: ${myDatabase.databaseUrl}

#### Concatenating environment variables doesn\'t seem to work {#concatenating-environment-variables-doesnt-seem-to-work dir="auto" tabindex="-1"}

[](#concatenating-environment-variables-doesnt-seem-to-work){#user-content-concatenating-environment-variables-doesnt-seem-to-work aria-label="Permalink: Concatenating environment variables doesn't seem to work"}

If you try to concatenate an environment variable with another string, like `${env.VARIABLE}-blah`, Serverless framework seems to resolve it to only `${env.VARIABLE}`.

It seems to be a bug in Serverless Components - it may be due to not using the latest GA version, where it might have been fixed (this is still on Components Beta, unfortunately). For now, the workaround is:

1.  Don\'t concatenate but specify only environment variable, though this means duplicating environment variables.
2.  Follow [#530 (comment)](https://github.com/serverless-nextjs/serverless-next.js/issues/530#issuecomment-680122810){hovercard-url="/serverless-nextjs/serverless-next.js/issues/530/hovercard?comment_id=680122810&comment_type=issue_comment" hovercard-type="issue" url="https://github.com/serverless-nextjs/serverless-next.js/issues/530" permission-text="Title is private" data-id="672914398" error-text="Failed to load title"} and set a `serverless.yml` variable first, then concatenate:

<!-- -->

    stage: ${env.STAGE}
    my-app:
      component: "@sls-next/serverless-component@1.18.0"
      inputs:
        domain:
          - "${stage}-front-end"
          - mydomain.com

#### I was expecting for automatic subdomain redirection when using the domainType: www/apex input {#i-was-expecting-for-automatic-subdomain-redirection-when-using-the-domaintype-wwwapex-input dir="auto" tabindex="-1"}

[](#i-was-expecting-for-automatic-subdomain-redirection-when-using-the-domaintype-wwwapex-input){#user-content-i-was-expecting-for-automatic-subdomain-redirection-when-using-the-domaintype-wwwapex-input aria-label="Permalink: I was expecting for automatic subdomain redirection when using the domainType: www/apex input"}

You can use the new `domainRedirects` input, along with forwarding `Host` header and `domainType: both`, to redirect requests to the correct domain. See example configuration below that redirects `www.example.com` requests to `https://example.com`.

    next-app:
      component: "../../serverless-components/nextjs-component"
      inputs:
        cloudfront:
          defaults:
            forward:
              headers: [Host]
        domain: ["example.com"]
        domainType: "both"
        domainRedirects:
          www.example.com: https://example.com

All of this happens within the Lambda@Edge origin request handlers. Please note that this will not allow you to redirect requests at `_next/static/*` or `/static/*`, since those cache behaviors do not have a Lambda@Edge handler attached to them.

Otherwise, you can also use the manual workaround using an S3 bucket outlined [here](https://simonecarletti.com/blog/2016/08/redirect-domain-https-amazon-cloudfront/#configuring-the-amazon-s3-static-site-with-redirect){rel="nofollow"}.
In summary, you will have to create a new S3 bucket and set it up with static website hosting to redirect requests to your supported subdomain type (ex. \"[www.example.com](http://www.example.com/){rel="nofollow"}\" or \"example.com\"). To be able to support HTTPS redirects, you\'ll need to set up a CloudFront distribution with the S3 redirect bucket as the origin. Finally, you\'ll need to create an \"A\" record in Route 53 with your newly created CloudFront distribution as the alias target.

#### My environment variables set in `build.env` don\'t show up in my app {#my-environment-variables-set-in-build.env-dont-show-up-in-my-app dir="auto" tabindex="-1"}

[](#my-environment-variables-set-in-buildenv-dont-show-up-in-my-app){#user-content-my-environment-variables-set-in-buildenv-dont-show-up-in-my-app aria-label="Permalink: My environment variables set in build.env don't show up in my app"}

To allow your app to access the defined environment variables, you need to expose them via the `next.config.js` as outlined [here](https://nextjs.org/docs/api-reference/next.config.js/environment-variables){rel="nofollow"}.

Given a `serverless.yml` like this

    myApp:
      inputs:
        build:
          env:
            API_HOST: "http://example.com"

your next.config.js should look like that:

    module.exports = {
      env: {
        API_HOST: process.env.API_HOST
      }
    };

#### 502 Error when hitting CloudFront distribution {#error-when-hitting-cloudfront-distribution dir="auto" tabindex="-1"}

[](#502-error-when-hitting-cloudfront-distribution){#user-content-502-error-when-hitting-cloudfront-distribution aria-label="Permalink: 502 Error when hitting CloudFront distribution"}

You may see an error like below:

    502 ERROR
    The request could not be satisfied.
    The Lambda function returned invalid JSON: The JSON output is not parsable. We can't connect to the server for this app or website at this time. There might be too much traffic or a configuration error. Try again later, or contact the app or website owner.
    If you provide content to customers through CloudFront, you can find steps to troubleshoot and help prevent this error by reviewing the CloudFront documentation.
    Generated by cloudfront (CloudFront)

It commonly occurs when the size of the response is too large. Lambda@Edge currently does have a limitation of 1 MB returned by the origin request handler. See: [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-generating-http-responses-in-requests.html#lambda-generating-http-responses-errors](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-generating-http-responses-in-requests.html#lambda-generating-http-responses-errors){rel="nofollow"}. Unfortunately, there may not be a workaround other than trying to ensure your responses are smaller.

#### Automatic locale detection {#automatic-locale-detection dir="auto" tabindex="-1"}

[](#automatic-locale-detection){#user-content-automatic-locale-detection aria-label="Permalink: Automatic locale detection"}

Ensure you forward `Accept-Language` header via CloudFront configuration, otherewise it is not able to determine which languages the user understands and/or prefers. By default it is forwarded but if you override with your own configuration, you should add it back.

#### Third party integrations {#third-party-integrations dir="auto" tabindex="-1"}

[](#third-party-integrations){#user-content-third-party-integrations aria-label="Permalink: Third party integrations"}

If you are using third party libraries (only `next-i18next` for now) and use default paths, some files may need to be copied to the Lambda directories. This component will try to detect default files and copy them for you. However, if you have custom config, you may need to write your own `postBuildCommands` to copy files, etc.

Refer to the [README](https://github.com/serverless-nextjs/serverless-next.js/blob/master/packages/libs/lambda-at-edge/src/build/third-party/README.md) for more information and caveats.

## Reporting Issues {#reporting-issues dir="auto" tabindex="-1"}

[](#reporting-issues){#user-content-reporting-issues aria-label="Permalink: Reporting Issues"}

You can open a new issue [here](https://github.com/serverless-nextjs/serverless-next.js/issues). If posting a problem, please follow the [debugging wiki](https://github.com/serverless-nextjs/serverless-next.js/wiki/Debugging-Issues) first for some useful tips, and try to include as much information to reproduce the issue.

If you are reporting a security vulnerability, please follow the [security policy](https://github.com/serverless-nextjs/serverless-next.js/security/policy) instead.

Please note that there is only one core maintainer right now (@dphang), and a handful of community contributors, who all contribute to this library in their free time. So we hope you understand that our response is best-effort and may take several days, or more. So we hope you could at least help debug the issue or provide as much context. In case an issue hasn\'t been looked at for a long time (\> a few weeks) or it seems like a major issue, feel free to mention a maintainer and we will try to prioritize it.

## Contributing {#contributing dir="auto" tabindex="-1"}

[](#contributing){#user-content-contributing aria-label="Permalink: Contributing"}

We would love if you can help contribute, whether it\'s coding, triaging or debugging issues, helping with documentation, or financial support! Please see the [contributing](https://github.com/serverless-nextjs/serverless-next.js/blob/master/CONTRIBUTING.md) guide.

## Contributors {#contributors dir="auto" tabindex="-1"}

[](#contributors){#user-content-contributors aria-label="Permalink: Contributors"}

### Code Contributors {#code-contributors dir="auto" tabindex="-1"}

[](#code-contributors){#user-content-code-contributors aria-label="Permalink: Code Contributors"}

This project exists thanks to all the people who contribute. \[[Contribute](https://github.com/serverless-nextjs/serverless-next.js/blob/master/CONTRIBUTING.md)\].
[![](https://camo.githubusercontent.com/893e7c87c173170d4429981c45fd4501451787a3b37f14f974e155f733303d09/68747470733a2f2f636f6e747269622e726f636b732f696d6167653f7265706f3d7365727665726c6573732d6e6578746a732f7365727665726c6573732d6e6578742e6a73){canonical-src="https://contrib.rocks/image?repo=serverless-nextjs/serverless-next.js"}](https://github.com/serverless-nextjs/serverless-next.js/graphs/contributors)

Made with [contributors-img](https://contrib.rocks/){rel="nofollow"}.

### Financial Contributors {#financial-contributors dir="auto" tabindex="-1"}

[](#financial-contributors){#user-content-financial-contributors aria-label="Permalink: Financial Contributors"}

Become a financial contributor and help us sustain our community. \[[Contribute](https://opencollective.com/serverless-nextjs-plugin/contribute){rel="nofollow"}\]

#### Individuals {#individuals dir="auto" tabindex="-1"}

[](#individuals){#user-content-individuals aria-label="Permalink: Individuals"}

[![](https://camo.githubusercontent.com/e80cc6840e98fecf7e2368e3fb9019debfb777bc96af689852e3da3936b3d12c/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f696e646976696475616c732e7376673f77696474683d383930){canonical-src="https://opencollective.com/serverless-nextjs-plugin/individuals.svg?width=890"}](https://opencollective.com/serverless-nextjs-plugin){rel="nofollow"}

#### Organizations {#organizations dir="auto" tabindex="-1"}

[](#organizations){#user-content-organizations aria-label="Permalink: Organizations"}

Support this project with your organization. Your logo will show up here with a link to your website. \[[Contribute](https://opencollective.com/serverless-nextjs-plugin/contribute){rel="nofollow"}\]

[![](https://camo.githubusercontent.com/736df29acfc33ae34c669c2ef779128d7c96a3cc0644384da1939dc71c293b2f/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f6f7267616e697a6174696f6e2f302f6176617461722e737667){canonical-src="https://opencollective.com/serverless-nextjs-plugin/organization/0/avatar.svg"}](https://opencollective.com/serverless-nextjs-plugin/organization/0/website){rel="nofollow"}
[![](https://camo.githubusercontent.com/81b1d5d8164ed1e2dd288b4a76167823fae5859965d1a98a03d399fcf8d82a64/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f6f7267616e697a6174696f6e2f312f6176617461722e737667){canonical-src="https://opencollective.com/serverless-nextjs-plugin/organization/1/avatar.svg"}](https://opencollective.com/serverless-nextjs-plugin/organization/1/website){rel="nofollow"}
[![](https://camo.githubusercontent.com/e92099ddd6de4dbe8f420a9f0282c63790c293bfa31dc77a1140f74f14b15c0c/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f6f7267616e697a6174696f6e2f322f6176617461722e737667){canonical-src="https://opencollective.com/serverless-nextjs-plugin/organization/2/avatar.svg"}](https://opencollective.com/serverless-nextjs-plugin/organization/2/website){rel="nofollow"}
[![](https://camo.githubusercontent.com/870c6dd83c659a9affbfdaf8a9c1b4762d00233726b1d3e418b3f1cbb39ed53b/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f6f7267616e697a6174696f6e2f332f6176617461722e737667){canonical-src="https://opencollective.com/serverless-nextjs-plugin/organization/3/avatar.svg"}](https://opencollective.com/serverless-nextjs-plugin/organization/3/website){rel="nofollow"}
[![](https://camo.githubusercontent.com/f8f1ff20f7faa2642be906a04086668a7b6a6fa9ca02ae32f8b31b6ac6d9059b/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f6f7267616e697a6174696f6e2f342f6176617461722e737667){canonical-src="https://opencollective.com/serverless-nextjs-plugin/organization/4/avatar.svg"}](https://opencollective.com/serverless-nextjs-plugin/organization/4/website){rel="nofollow"}
[![](https://camo.githubusercontent.com/501d3db86dabdeb837161e310294713e2d55602892419b65efc7e83a1742f3ab/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f6f7267616e697a6174696f6e2f352f6176617461722e737667){canonical-src="https://opencollective.com/serverless-nextjs-plugin/organization/5/avatar.svg"}](https://opencollective.com/serverless-nextjs-plugin/organization/5/website){rel="nofollow"}
[![](https://camo.githubusercontent.com/7d1cf7b9d75629414626db3d30a5763cf0f5ef217f532e416b0c3e72f52abfbe/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f6f7267616e697a6174696f6e2f362f6176617461722e737667){canonical-src="https://opencollective.com/serverless-nextjs-plugin/organization/6/avatar.svg"}](https://opencollective.com/serverless-nextjs-plugin/organization/6/website){rel="nofollow"}
[![](https://camo.githubusercontent.com/4ee44b9ef3fb13a9b7f5f86ab1fb7a0249f69d617148319b9da2a1bcccaab665/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f6f7267616e697a6174696f6e2f372f6176617461722e737667){canonical-src="https://opencollective.com/serverless-nextjs-plugin/organization/7/avatar.svg"}](https://opencollective.com/serverless-nextjs-plugin/organization/7/website){rel="nofollow"}
[![](https://camo.githubusercontent.com/a57f4be003d4fde85401a93f38f450f65f9d28c07bdf25673162e6e8949828bc/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f6f7267616e697a6174696f6e2f382f6176617461722e737667){canonical-src="https://opencollective.com/serverless-nextjs-plugin/organization/8/avatar.svg"}](https://opencollective.com/serverless-nextjs-plugin/organization/8/website){rel="nofollow"}
[![](https://camo.githubusercontent.com/8eb3ba6e40dc4e01955d94d8d0f717ba86381e429919324a54c43a66a8b94b2c/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7365727665726c6573732d6e6578746a732d706c7567696e2f6f7267616e697a6174696f6e2f392f6176617461722e737667){canonical-src="https://opencollective.com/serverless-nextjs-plugin/organization/9/avatar.svg"}](https://opencollective.com/serverless-nextjs-plugin/organization/9/website){rel="nofollow"}
