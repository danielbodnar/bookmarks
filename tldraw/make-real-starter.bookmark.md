# tldraw/make-real-starter (github.com)

<https://github.com/tldraw/make-real-starter>

## Description

Make it real. Contribute to tldraw/make-real-starter development by creating an account on GitHub.

## Quote

> Make it real

## Tags

# #TypeScript

## Content

# GitHub - tldraw/make-real-starter: Make it real {#github---tldrawmake-real-starter-make-it-real .reader-title}

tldraw

------------------------------------------------------------------------

## Make Real {#make-real dir="auto" tabindex="-1"}

[](#make-real){#user-content-make-real aria-label="Permalink: Make Real"}

Use this repo as a template to create Make Real style apps like
[makereal.tldraw.com](https://makereal.tldraw.com/){rel="nofollow"}. To get started:

1.  Use the template and clone your new repo to your computer
2.  Run `npm install` to install dependencies
3.  Get an OpenAI API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys){rel="nofollow"}. Make sure
    you are at least a
    [Tier 1](https://platform.openai.com/docs/guides/rate-limits/usage-tiers){rel="nofollow"} API
    user, which means you have access to GPT-4 Vision. You can check your tier on
    the [OpenAI API Limits](https://platform.openai.com/account/limits){rel="nofollow"}.
4.  Create a `.env.local` file that contains `OPENAI_API_KEY=your api key here`
5.  Run `npm run dev`
6.  Open [localhost:3000](http://localhost:3000/){rel="nofollow"} and make some stuff real!

## How it works {#how-it-works dir="auto" tabindex="-1"}

[](#how-it-works){#user-content-how-it-works aria-label="Permalink: How it works"}

Make Real is built with [tldraw](https://tldraw.dev/){rel="nofollow"}, a very good React library for
creating whiteboards and other infinite canvas experiences.

To use it, first draw a mockup for a piece of UI. When
you\'re ready, select the drawing, and press the Make Real button.
We\'ll capture an image of your selection, and send it to
[OpenAI\'s GPT-4V](https://platform.openai.com/docs/guides/vision){rel="nofollow"} along with
instructions to turn it into a HTML file.

We take the HTML response and add it to a tldraw
[custom shape](https://tldraw.dev/docs/shapes#Custom-shapes){rel="nofollow"}. The custom shape
shows the response in an iframe so that you can interact with it on the canvas. If you
want to iterate on the response, annotate the iframe, select it all, and press \'Make Real\' again.

## To make changes {#to-make-changes dir="auto" tabindex="-1"}

[](#to-make-changes){#user-content-to-make-changes aria-label="Permalink: To make changes"}

To change how Make Real works, start from the [`makeReal()`](https://github.com/tldraw/make-real-starter/blob/main/app/makeReal.tsx)
function. From there, you can change the prompt that gets sent to gpt-4.

If you\'d like Make Real to create something other than HTML, you\'ll need to
either update the [`PreviewShape`](https://github.com/tldraw/make-real-starter/blob/main/app/PreviewShape/PreviewShape.tsx) to
display something different, or use one of tldraw\'s built-in shapes like image
or text.

## The dangerous API key input method {#the-dangerous-api-key-input-method dir="auto" tabindex="-1"}

[](#the-dangerous-api-key-input-method){#user-content-the-dangerous-api-key-input-method aria-label="Permalink: The dangerous API key input method"}

For prototyping or at least until the vision APIs are able to support higher usage limits, we\'ve also included the `RiskyButCoolAPIKeyInput`, similar to the one found on [makereal.tldraw.com](https://makereal.tldraw.com/){rel="nofollow"}. Please use this as carefully and ethically as you can, as users should be reluctant to add API keys to public sites.
