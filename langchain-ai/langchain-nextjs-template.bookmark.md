# langchain-ai/langchain-nextjs-template (github.com)

<https://github.com/langchain-ai/langchain-nextjs-template>

## Description

LangChain + Next.js starter template. Contribute to langchain-ai/langchain-nextjs-template development by creating an account on GitHub.

## Quote

> LangChain + Next.js starter template

## Tags

# #TypeScript

## Content

# GitHub - langchain-ai/langchain-nextjs-template: LangChain + Next.js starter template {#github---langchain-ailangchain-nextjs-template-langchain-next.js-starter-template .reader-title}

langchain-ai

------------------------------------------------------------------------

## 🦜️🔗 LangChain + Next.js Starter Template {#langchain-next.js-starter-template dir="auto" tabindex="-1"}

[](#️-langchain--nextjs-starter-template){#user-content-️-langchain--nextjs-starter-template aria-label="Permalink: 🦜️🔗 LangChain + Next.js Starter Template"}

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/langchain-ai/langchain-nextjs-template){rel="nofollow"}
[![Deploy with Vercel](https://camo.githubusercontent.com/20bea215d35a4e28f2c92ea5b657d006b087687486858a40de2922a4636301ab/68747470733a2f2f76657263656c2e636f6d2f627574746f6e){canonical-src="https://vercel.com/button"}](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flangchain-ai%2Flangchain-nextjs-template){rel="nofollow"}

This template scaffolds a LangChain.js + Next.js starter app. It showcases how to use and combine LangChain modules for several
use cases. Specifically:

-   [Simple chat](https://github.com/langchain-ai/langchain-nextjs-template/blob/main/app/api/chat/route.ts)
-   [Returning structured output from an LLM call](https://github.com/langchain-ai/langchain-nextjs-template/blob/main/app/api/chat/structured_output/route.ts)
-   [Answering complex, multi-step questions with agents](https://github.com/langchain-ai/langchain-nextjs-template/blob/main/app/api/chat/agents/route.ts)
-   [Retrieval augmented generation (RAG) with a chain and a vector store](https://github.com/langchain-ai/langchain-nextjs-template/blob/main/app/api/chat/retrieval/route.ts)
-   [Retrieval augmented generation (RAG) with an agent and a vector store](https://github.com/langchain-ai/langchain-nextjs-template/blob/main/app/api/chat/retrieval_agents/route.ts)

Most of them use Vercel\'s [AI SDK](https://github.com/vercel-labs/ai) to stream tokens to the client and display the incoming messages.

The agents use [LangGraph.js](https://langchain-ai.github.io/langgraphjs/){rel="nofollow"}, LangChain\'s framework for building agentic workflows. They use preconfigured helper functions to minimize boilerplate, but you can replace them with custom graphs as desired.

agent-convo.mp4

It\'s free-tier friendly too! Check out the [bundle size stats below](#-bundle-size).

You can check out a hosted version of this repo here: [https://langchain-nextjs-template.vercel.app/](https://langchain-nextjs-template.vercel.app/){rel="nofollow"}

## 🚀 Getting Started {#getting-started dir="auto" tabindex="-1"}

[](#-getting-started){#user-content--getting-started aria-label="Permalink: 🚀 Getting Started"}

First, clone this repo and download it locally.

Next, you\'ll need to set up environment variables in your repo\'s `.env.local` file. Copy the `.env.example` file to `.env.local`.
To start with the basic examples, you\'ll just need to add your OpenAI API key.

Because this app is made to run in serverless Edge functions, make sure you\'ve set the `LANGCHAIN_CALLBACKS_BACKGROUND` environment variable to `false` to ensure tracing finishes if you are using [LangSmith tracing](https://docs.smith.langchain.com/){rel="nofollow"}.

Next, install the required packages using your preferred package manager (e.g. `yarn`).

Now you\'re ready to run the development server:

Open [http://localhost:3000](http://localhost:3000/){rel="nofollow"} with your browser to see the result! Ask the bot something and you\'ll see a streamed response:

[![A streaming conversation between the user and the AI](https://github.com/langchain-ai/langchain-nextjs-template/raw/main/public/images/chat-conversation.png)](https://github.com/langchain-ai/langchain-nextjs-template/blob/main/public/images/chat-conversation.png){rel="noopener noreferrer"}

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Backend logic lives in `app/api/chat/route.ts`. From here, you can change the prompt and model, or add other modules and logic.

## 🧱 Structured Output {#structured-output dir="auto" tabindex="-1"}

[](#-structured-output){#user-content--structured-output aria-label="Permalink: 🧱 Structured Output"}

The second example shows how to have a model return output according to a specific schema using OpenAI Functions.
Click the `Structured Output` link in the navbar to try it out:

[![A streaming conversation between the user and an AI agent](https://github.com/langchain-ai/langchain-nextjs-template/raw/main/public/images/structured-output-conversation.png)](https://github.com/langchain-ai/langchain-nextjs-template/blob/main/public/images/structured-output-conversation.png){rel="noopener noreferrer"}

The chain in this example uses a [popular library called Zod](https://zod.dev/){rel="nofollow"} to construct a schema, then formats it in the way OpenAI expects.
It then passes that schema as a function into OpenAI and passes a `function_call` parameter to force OpenAI to return arguments in the specified format.

For more details, [check out this documentation page](https://js.langchain.com/docs/how_to/structured_output){rel="nofollow"}.

## 🦜 Agents {#agents dir="auto" tabindex="-1"}

[](#-agents){#user-content--agents aria-label="Permalink: 🦜 Agents"}

To try out the agent example, you\'ll need to give the agent access to the internet by populating the `SERPAPI_API_KEY` in `.env.local`.
Head over to [the SERP API website](https://serpapi.com/){rel="nofollow"} and get an API key if you don\'t already have one.

You can then click the `Agent` example and try asking it more complex questions:

[![A streaming conversation between the user and an AI agent](https://github.com/langchain-ai/langchain-nextjs-template/raw/main/public/images/agent-conversation.png)](https://github.com/langchain-ai/langchain-nextjs-template/blob/main/public/images/agent-conversation.png){rel="noopener noreferrer"}

This example uses a [prebuilt LangGraph agent](https://langchain-ai.github.io/langgraphjs/tutorials/quickstart/){rel="nofollow"}, but you can customize your own as well.

## 🐶 Retrieval {#retrieval dir="auto" tabindex="-1"}

[](#-retrieval){#user-content--retrieval aria-label="Permalink: 🐶 Retrieval"}

The retrieval examples both use Supabase as a vector store. However, you can swap in
[another supported vector store](https://js.langchain.com/docs/integrations/vectorstores){rel="nofollow"} if preferred by changing
the code under `app/api/retrieval/ingest/route.ts`, `app/api/chat/retrieval/route.ts`, and `app/api/chat/retrieval_agents/route.ts`.

For Supabase, follow [these instructions](https://js.langchain.com/docs/integrations/vectorstores/supabase){rel="nofollow"} to set up your
database, then get your database URL and private key and paste them into `.env.local`.

You can then switch to the `Retrieval` and `Retrieval Agent` examples. The default document text is pulled from the LangChain.js retrieval
use case docs, but you can change them to whatever text you\'d like.

For a given text, you\'ll only need to press `Upload` once. Pressing it again will re-ingest the docs, resulting in duplicates.
You can clear your Supabase vector store by navigating to the console and running `DELETE FROM documents;`.

After splitting, embedding, and uploading some text, you\'re ready to ask questions!

For more info on retrieval chains, [see this page](https://js.langchain.com/docs/tutorials/rag){rel="nofollow"}.
The specific variant of the conversational retrieval chain used here is composed using LangChain Expression Language, which you can
[read more about here](https://js.langchain.com/docs/how_to/qa_sources/){rel="nofollow"}. This chain example will also return cited sources
via header in addition to the streaming response.

For more info on retrieval agents, [see this page](https://langchain-ai.github.io/langgraphjs/tutorials/rag/langgraph_agentic_rag/){rel="nofollow"}.

## 📦 Bundle size {#bundle-size dir="auto" tabindex="-1"}

[](#-bundle-size){#user-content--bundle-size aria-label="Permalink: 📦 Bundle size"}

The bundle size for LangChain itself is quite small. After compression and chunk splitting, for the RAG use case LangChain uses 37.32 KB of code space (as of [\@langchain/core 0.1.15](https://npmjs.com/package/@langchain/core){rel="nofollow"}), which is less than 4% of the total Vercel free tier edge function alottment of 1 MB:

[![](https://github.com/langchain-ai/langchain-nextjs-template/raw/main/public/images/bundle-size.png)](https://github.com/langchain-ai/langchain-nextjs-template/blob/main/public/images/bundle-size.png){rel="noopener noreferrer"}

This package has [\@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer){rel="nofollow"} set up by default - you can explore the bundle size interactively by running:

    $ ANALYZE=true yarn build

## 📚 Learn More {#learn-more dir="auto" tabindex="-1"}

[](#-learn-more){#user-content--learn-more aria-label="Permalink: 📚 Learn More"}

The example chains in the `app/api/chat/route.ts` and `app/api/chat/retrieval/route.ts` files use
[LangChain Expression Language](https://js.langchain.com/docs/concepts#langchain-expression-language){rel="nofollow"} to
compose different LangChain.js modules together. You can integrate other retrievers, agents, preconfigured chains, and more too, though keep in mind
`HttpResponseOutputParser` is meant to be used directly with model output.

To learn more about what you can do with LangChain.js, check out the docs here:

-   [https://js.langchain.com/docs/](https://js.langchain.com/docs/){rel="nofollow"}

## ▲ Deploy on Vercel {#deploy-on-vercel dir="auto" tabindex="-1"}

[](#-deploy-on-vercel){#user-content--deploy-on-vercel aria-label="Permalink: ▲ Deploy on Vercel"}

When ready, you can deploy your app on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme){rel="nofollow"}.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment){rel="nofollow"} for more details.

## Thank You! {#thank-you dir="auto" tabindex="-1"}

[](#thank-you){#user-content-thank-you aria-label="Permalink: Thank You!"}

Thanks for reading! If you have any questions or comments, reach out to us on Twitter
[\@LangChainAI](https://twitter.com/langchainai){rel="nofollow"}, or [click here to join our Discord server](https://discord.gg/langchain){rel="nofollow"}.
