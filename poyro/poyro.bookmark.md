# poyro/poyro (github.com)

<https://github.com/poyro/poyro>

## Description

Test your web app LLM integrations using existing testing frameworks. Confidently launch AI-driven webapps to production. - poyro/poyro

## Quote

> Test your web app LLM integrations using existing testing frameworks. Confidently launch AI-driven webapps to production.

## Tags

#ai #evaluation #llm #llmops #nodejs #prompt #prompt-engineering #prompts #testing #vitest #TypeScript

## Content

# GitHub - poyro/poyro: Test your web app LLM integrations using existing testing frameworks. Confidently launch AI-driven webapps to production. {#github---poyropoyro-test-your-web-app-llm-integrations-using-existing-testing-frameworks.-confidently-launch-ai-driven-webapps-to-production. .reader-title}

poyro

------------------------------------------------------------------------

## Poyro {#poyro dir="auto" tabindex="-1"}

[](#poyro){#user-content-poyro aria-label="Permalink: Poyro"}

[![npm version](https://camo.githubusercontent.com/8e6cd6189644b0ecd7e63d88f956d5c0215f87f63a6c8228bc9aa5c5fbb20fd4/68747470733a2f2f62616467652e667572792e696f2f6a732f253430706f79726f2532467669746573742e737667){canonical-src="https://badge.fury.io/js/%40poyro%2Fvitest.svg"}](https://badge.fury.io/js/%40poyro%2Fvitest){rel="nofollow"} \| [![docs](https://camo.githubusercontent.com/469724b934644de8d89f9dff5f183f563070731e64cb156201f54050308377c6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f79726f2d646f63732d626c7565){canonical-src="https://img.shields.io/badge/poyro-docs-blue"}](https://docs.poyro.dev/){rel="nofollow"} \| [![Discord](https://camo.githubusercontent.com/057e62116813aa04c0111008e693205746af11d58caed8dc03bf3a6113d773ba/68747470733a2f2f696d672e736869656c64732e696f2f646973636f72642f313235303237343934383233333033393838333f6c6f676f3d646973636f7264266c6162656c3d446973636f7264){canonical-src="https://img.shields.io/discord/1250274948233039883?logo=discord&label=Discord"}](https://discord.gg/gmCjjJ5jSf){rel="nofollow"}

## What is Poyro? {#what-is-poyro dir="auto" tabindex="-1"}

[](#what-is-poyro){#user-content-what-is-poyro aria-label="Permalink: What is Poyro?"}

Poyro is a lightweight extension of [Vitest](https://vitest.dev/){rel="nofollow"} (a modern testing framework with a Jest-like API) for testing LLM applications. Familiarizing yourself with Vitest can help you get more out of Poyro.

Poyro follows the best practice of using LLMs to evaluate the outputs of your application LLM. Poyro converts natural language conditions into binary unit tests. Unit testing should be free and open source by default \-- that includes AI apps \-- so we [use a locally run small LLM](https://docs.poyro.dev/how-does-it-work){rel="nofollow"} to evaluate your application\'s outputs.

For more context on why to use Poyro and examples on how to use it along with Vitest to unit test LLM apps, read our essays:

-   [AI Testing as part of Full-Stack Engineering](https://docs.poyro.dev/essays/ai-testing-as-part-of-fullstack-engineering){rel="nofollow"}
-   [How To Write Unit Tests for Your AI Web App](https://docs.poyro.dev/essays/how-to-write-unit-tests-for-ai-web-app){rel="nofollow"}
-   [Case Study - Unit Testing a Legal AI App](https://docs.poyro.dev/essays/unit-testing-a-legal-ai-app){rel="nofollow"}
    -   [Runnable code examples for this article](https://github.com/poyro/unit-test-legal-ai-demo)

## Prerequisites {#prerequisites dir="auto" tabindex="-1"}

[](#prerequisites){#user-content-prerequisites aria-label="Permalink: Prerequisites"}

-   Node.js 20 or later
-   Vitest 1.6.0 or later
-   Your project must have \"type\": \"module\" in its package.json (this library is ESM only)
-   Recommended: CUDA-compatible GPU (Nvidia) or Metal-compatible GPU (Apple Silicon) for best performance, but not required

------------------------------------------------------------------------

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

### Install {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: Install"}

To get started quickly, simply run:

### Create your first test {#create-your-first-test dir="auto" tabindex="-1"}

[](#create-your-first-test){#user-content-create-your-first-test aria-label="Permalink: Create your first test"}

To use the matchers, create a file with the extension `.test.ts` anywhere within your project. Here is an example:

    // MyFirstTest.test.ts
    import { describe, expect, it } from "vitest";

    describe("MyFirstTest", () => {
      it("should be true", async () => {
        // Replace this with your LLM app's output
        const llmOutput = "Hello, world!";

        // Criterion in natural language: True or False
        await expect(llmOutput).toFulfillCriterion("Says hello");
      }, 10000); // Increase the timeout as needed with the third argument
    });

`toFulfillCriterion` can determine whether an LLM output meets or does not meet a natural language criterion.

The first time you run a test like the one above, the model file for our locally run LLM will be downloaded. It should take a couple of minutes.

### Run your test {#run-your-test dir="auto" tabindex="-1"}

[](#run-your-test){#user-content-run-your-test aria-label="Permalink: Run your test"}

Run vitest with your package manager, for example with `npm`:

Similar commands work with `yarn` and `pnpm`.

------------------------------------------------------------------------

## Help {#help dir="auto" tabindex="-1"}

[](#help){#user-content-help aria-label="Permalink: Help"}

### Troubleshooting {#troubleshooting dir="auto" tabindex="-1"}

[](#troubleshooting){#user-content-troubleshooting aria-label="Permalink: Troubleshooting"}

We provide solutions to common issues in our [Troubleshooting](https://docs.poyro.dev/troubleshooting){rel="nofollow"} page. Take a look at the solutions there, and if you continue to run into problems please don\'t hesitate to reach out to us.

### Submit an issue {#submit-an-issue dir="auto" tabindex="-1"}

[](#submit-an-issue){#user-content-submit-an-issue aria-label="Permalink: Submit an issue"}

You can submit an issue by going to our GitHub repository and [creating a new issue](https://github.com/poyro/poyro/issues/new). Prior to submitting an issue, please check if a similar issue has already been submitted.

### Join the community {#join-the-community dir="auto" tabindex="-1"}

[](#join-the-community){#user-content-join-the-community aria-label="Permalink: Join the community"}

If you want to get help, brainstorm on good evals, or if you just want to chat with other Poyro developers, join our community on [Discord](https://discord.gg/gmCjjJ5jSf){rel="nofollow"}!

## Contributing {#contributing dir="auto" tabindex="-1"}

[](#contributing){#user-content-contributing aria-label="Permalink: Contributing"}

If you would like to contribute to Poyro, please read our [contributing guide](https://github.com/poyro/poyro/blob/main/CONTRIBUTING.md).

Begin by cloning the repository:

    git clone https://github.com/poyro/poyro.git

Next, install all the dependencies:

When developing, you can either run `pnpm dev` at the root, which will automatically build all relevant packages when changes are made, or you can run `pnpm dev` within the package you are working on.
