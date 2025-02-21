# system76/docs (github.com)

<https://github.com/system76/docs>

## Description

System76 support documentation site. Contribute to system76/docs development by creating an account on GitHub.

## Quote

> System76 support documentation site

## Tags

#article #documentation #linux #nuxt-content #nuxtjs #support #Vue

## Content

# GitHub - system76/docs: System76 support documentation site {#github---system76docs-system76-support-documentation-site .reader-title}

system76

------------------------------------------------------------------------

## System76 Support Docs {#system76-support-docs dir="auto" tabindex="-1"}

[](#system76-support-docs){#user-content-system76-support-docs aria-label="Permalink: System76 Support Docs"}

The docs system is powered by [NuxtJS](https://nuxtjs.org/){rel="nofollow"} with [`@nuxtjs/content`](https://content.nuxtjs.org/){rel="nofollow"},
[tailwindcss](https://tailwindcss.com/){rel="nofollow"}, and some other packages. It uses Markdown in the `/content/`
folder to render every article. If you don\'t know what Markdown is (or need a
refresher), take a minute to look over [the basics](https://help.github.com/articles/markdown-basics/).

## Adding Articles {#adding-articles dir="auto" tabindex="-1"}

[](#adding-articles){#user-content-adding-articles aria-label="Permalink: Adding Articles"}

All articles are stored as Markdown files under [`/content/`](https://github.com/system76/docs/tree/master/content). For example,
take a look at the [`/content/upgrade-pop.md`](https://github.com/system76/docs/blob/master/content/upgrade-pop.md) file.

To create a new support article, click the **+** icon at the top of the
[`/content/`](https://github.com/system76/docs/tree/master/content) page.

Name the file something short but descriptive. This will be part of the URL, for
example `server-setup.md` will become
[https://support.system76.com/articles/server-setup](https://support.system76.com/articles/server-setup){rel="nofollow"}. Don\'t use spaces; instead,
use dashes (`-`).

Then include the following text at the very top of the file (including the
`---`es).

    ---
    title: Do the thing
    description: >
      A more descriptive sentence or two about the page; will show up in search
      engines and on the support home page.
    keywords:
      - List
      - of
      - keywords
      - about
      - this
      - page
      - System76

    facebookImage: /_social/article
    twitterImage: /_social/article

    hidden: true
    section:
    ---

A couple of notes:

-   After the `---` line, you can type the contents of the article in markdown.
    Feel free to use `# Heading1`, `## Heading2`, `**bold**`, `_italic_`, and other
    markdown to make the page look awesome.

-   For keyboard shortcuts, use the HTML tag `<kbd>`, i.e.
    `<kbd>Alt</kbd>+<kbd>F4</kbd>`.

-   The default publication status is set to `hidden: true`. To make your article
    visible, change the `hidden: true` to `hidden: false` in the top of the file.

-   To make your article visible within a section, write the section name in the
    `section: ` line. For instance, to add an article to the \"Switching to Linux\"
    section, the line should be `section: switching`.

When you\'re all done, fill out the \"Commit new file\" form at the bottom with the
description of your changes and press the \"Commit changes\" button.

## Editing an Article {#editing-an-article dir="auto" tabindex="-1"}

[](#editing-an-article){#user-content-editing-an-article aria-label="Permalink: Editing an Article"}

To edit or update an article, click on the article\'s file in [GitHub](https://github.com/system76/docs/tree/master/content). Then
click the pencil \"Edit this file\" icon on the top-right. You can now edit the
contents right on GitHub. To see what it will look like before you save it,
click the \"Preview changes\" tab at the top.

When you\'re all done, fill out the \"Commit changes\" form at the bottom with the
description of your changes and press the \"Commit changes\" button.

## Sections {#sections dir="auto" tabindex="-1"}

[](#sections){#user-content-sections aria-label="Permalink: Sections"}

Articles will only show up under the section they are configured for. If you
set `hidden: true` in an article, it will not be visible on any of the index
pages, and you will need to know the direct URL to view it.

If you want an article to **not** show up on the index page, but be visible
on `/articles`, set `hidden: false` and remove the `section: ` line from the
article.

To get an article to show up under **Frequently Answered Questions**, set
`section: faq`.

To get an article to show up under **Known Solutions**, set
`section: solutions`.

To get an article to show up under **Articles**, set `section: articles`.

## Files, Images, and Links {#files-images-and-links dir="auto" tabindex="-1"}

[](#files-images-and-links){#user-content-files-images-and-links aria-label="Permalink: Files, Images, and Links"}

To store files (i.e. BIOS updates), put them in the `/static/files` folder. If
it\'s a BIOS/fireware update, it goes in the `/static/files/firmware` folder and
should be named like `model-version.bio.zip`, i.e. `meer1-0358.bio.zip`.

Anything in the `static/` folder will be available at the base URL. For
instance, `/static/files/firmware/meer1-0358.bio.zip` will be downloadable at
[https://support.system76.com/files/firmware/meer1-0358.bio.zip](https://support.system76.com/files/firmware/meer1-0358.bio.zip){rel="nofollow"}.

When linking to files, please use the absolute path, i.e.
`/files/firmware/meer1-0358.bio.zip`.

## Icons {#icons dir="auto" tabindex="-1"}

[](#icons){#user-content-icons aria-label="Permalink: Icons"}

The Ubuntu logo can be included in a doc using the following HTML tag:

    <font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon>

You can embed this in other Markdown and Tags, for example, you can create an
Pop!\_OS (Super) key:

    <kbd>
      <font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon>
    </kbd>

## Local Development {#local-development dir="auto" tabindex="-1"}

[](#local-development){#user-content-local-development aria-label="Permalink: Local Development"}

This site is built with [NuxtJS](https://nuxtjs.org/){rel="nofollow"} and [`@nuxtjs/content`](https://content.nuxtjs.org/){rel="nofollow"}. To get started,
you will need to clone this repository to your local computer.

Next, you will need to setup `node` `14 <=` and `npm`. The [nodejs website](https://nodejs.org/en/download/package-manager/){rel="nofollow"}
has great documentation on how to do this.

After that, you can run `npm ci` to install the needed packages, and `npm start`
to start the development site. You will then see a `Listening: http://localhost:3000/` line in your console showing where you can access the
development site.

To deploy changes, simply make a PR to the [`system76/docs` GitHub
repository](https://github.com/system76/docs/tree/master/content) and once it\'s merged, it will be deployed to the live site!
