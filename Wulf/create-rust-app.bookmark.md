# Wulf/create-rust-app (github.com)

<https://github.com/Wulf/create-rust-app>

## Description

Set up a modern rust+react web app by running one command. - GitHub - Wulf/create-rust-app: Set up a modern rust+react web app by running one command.

## Quote

> Set up a modern rust+react web app by running one command. 

## Tags

# #Rust

## Content

# GitHub - Wulf/create-rust-app: Set up a modern rust+react web app by running one command. {#github---wulfcreate-rust-app-set-up-a-modern-rustreact-web-app-by-running-one-command. .reader-title}

Wulf

------------------------------------------------------------------------

## [![](https://user-images.githubusercontent.com/4259838/150465966-7ac954d1-9f0c-48d4-a37a-10543b3bbfe1.png){height="40px"}](https://user-images.githubusercontent.com/4259838/150465966-7ac954d1-9f0c-48d4-a37a-10543b3bbfe1.png){rel="noopener noreferrer nofollow"} Create Rust App {#create-rust-app dir="auto" tabindex="-1"}

[](#-create-rust-app){#user-content--create-rust-app aria-label="Permalink:  Create Rust App"}

[![License: MIT OR Apache-2.0](https://camo.githubusercontent.com/3171655cbd32cccedcf7d3cea17bd3712a5938ee7586a3233d9f63e33a54369e/68747470733a2f2f696d672e736869656c64732e696f2f6372617465732f762f6372656174652d727573742d6170702e7376673f7374796c653d666f722d7468652d6261646765){canonical-src="https://img.shields.io/crates/v/create-rust-app.svg?style=for-the-badge" height="20"}](https://crates.io/crates/create-rust-app){rel="nofollow"}

Set up a modern rust+react web app by running one command. [Join us on discord](https://discord.gg/tm6Ey33ZPN){rel="nofollow"}.

[create-rust-app.dev](https://create-rust-app.dev/){rel="nofollow"}

## Requirements {#requirements dir="auto" tabindex="-1"}

[](#requirements){#user-content-requirements aria-label="Permalink: Requirements"}

-   [Rust](https://www.rust-lang.org/tools/install){rel="nofollow"}
-   [`diesel_cli`](http://diesel.rs/guides/getting-started#installing-diesel-cli){rel="nofollow"}
    -   For SQLite, if you don\'t wish to dynamically link `diesel_cli` with your system\'s `libsqlite3`, you may run `cargo install diesel_cli --no-default-features --features sqlite-bundled`.

## Install {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: Install"}

    cargo install create-rust-app_cli

## Quick start {#quick-start dir="auto" tabindex="-1"}

[](#quick-start){#user-content-quick-start aria-label="Permalink: Quick start"}

    create-rust-app my-todo-app
    # .. select backend framework, plugins, etc.

    # Code-gen resources for your project
    cd ./my-todo-app
    create-rust-app
    # .. select resource type / properties

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

### 1. Project creation {#project-creation dir="auto" tabindex="-1"}

[](#1-project-creation){#user-content-1-project-creation aria-label="Permalink: 1. Project creation"}

    create-rust-app create <project_name>

-   Run frontend & backend with a single command: `cargo fullstack`
-   Rust backend
    -   One of the following frameworks:
        -   `actix-web`
        -   `poem` (support temporarily on hold, use version 9.2.2: `cargo install create-rust-app_cli@9.2.2`)
    -   Database migrations (using diesel.rs)
        -   Generate diesel structs and types by running `cargo dsync` in your project (see codegen section below).
    -   Sending mail
    -   PostgreSQL, SQLite 3.35+ support
    -   ViteJS (blazing fast frontend compile speeds)
    -   SSR templating with an option to include bundles that are automatically code-split
        -   The `/views` folder contains all templates
        -   The `/frontend/bundles` folder contains all the bundles which can be included in your views via `{{bundle(name="MyBundle.tsx")}}`
    -   Automatically route to your single page application(s)
        -   Use `create_rust_app::render_single_page_application("/app","your_spa.html")` (if you\'re using Poem, the parameters are slightly different, an example is provided in the function\'s documentation)
-   React frontend (or install your own framework!)
    -   Typescript, with backend type definition generation (run `cargo tsync` in your project folder; see codegen section below)
    -   Routing (via `react-router-dom`)
    -   Typed `react-query` hooks generation (`$ cd my_project && create-rust-app`, then select \"Generate react-query hooks\")

#### Available Plugins {#available-plugins dir="auto" tabindex="-1"}

[](#available-plugins){#user-content-available-plugins aria-label="Permalink: Available Plugins"}

-   **Authentication (+ Authorization) plugin**

    -   Add JWT token-based auth with a simple command
    -   Session management: restoration of previous session, revoking of refresh tokens
    -   Credentials management/recovery
    -   Email validation / activation flow
    -   Adds frontend UI + react hooks
    -   Adds auth service, and user / session models
    -   Block your endpoints via `Auth` guard
    -   Follows OWASP security best practices
    -   RBAC permissions out of the box (assign roles and permissions to users)

-   **Social authentication (OIDC) plugin**

    -   Adds Oauth2-based authentication (requires auth plugin)
    -   Just configure some OIDC providers:

    <!-- -->

        app.app_data(Data::new(AuthConfig {
          oidc_providers: vec![GOOGLE(
          "client_id",
          "client_secret",
          "/success/redirect",
          "/error/redirect",
          )],
        }))

    Then, redirect your users to start the flow!

        <a href={"/api/auth/google"}>Login with Google</a>

-   **Container plugin**

    -   Dockerfile to containerize your rust app into a single image

-   **Development plugin**

-   **Storage plugin**

    -   Adds `Storage` extractor which allows you to upload/download files from an S3-compatible object store

    -   Seamlessly add single or multiple attachments to your models using `Attachment::*`!

    -   Here are some examples:

        -   Adding an avatar to a user in your users table:

        <!-- -->

            let s3_key = Attachment::attach("avatar", "users", user_id, AttachmentData {
                file_name: "image.png",
                data: bytes
            })?;

        -   Getting the url for the attachment

        <!-- -->

            let storage: Storage // retreive this via the appropriate extractor in your frameowrk of choice
            let url = storage.download_uri(s3_key)?;

        (note: see `Attachment::*` and `Storage::*` for more functionality!)

-   **GraphQL plugin**

    -   Adds all the boilerplate necessary to expose GraphQL
    -   Requires the auth plugin: authentication and authorization setup out-of-the-box
    -   Find a graphql playground at `localhost:3000/graphql`

-   **Utoipa plugin**

    -   Uses the [utoipa](https://github.com/juhaku/utoipa) crate to add OpenAPI documentation and serve it in a SwaggerUI playground.
    -   Find the playground at `http://localhost:3000/swagger-ui/`
    -   Requires the backend be Actix (for now ;) )
    -   check out [this page](https://github.com/juhaku/utoipa/tree/master/examples) to see how to document your own API endpoints with a variety of backends
    -   Has a soft dependency on the Auth plugin

-   **Tasks Plugin**

    -   For running background jobs, currently only supports actix-web and postgresql
    -   Uses [`fang`](https://github.com/ayrat555/fang) under the hood and all it\'s features are exposed.
    -   Add a task to the queue with `create_rust_app::tasks::queue()`
    -   Run the queue with `cargo run --bin tasks`

-   **Workspace Support** (Enabled by default, not tied to a feature flag)

    -   allows you to organize your rust app in workspaces, and changes the defaults for the environment variables that specify paths to various important places.
    -   to organize you project as a workspace:
        -   enable this feature
        -   refactor your codebase into workspaces (see [#194](https://github.com/Wulf/create-rust-app/issues/194){hovercard-url="/Wulf/create-rust-app/issues/194/hovercard" hovercard-type="issue"})
        -   Optional: set the following environment variables (paths are relative to the directory you call cargo fullstack/backend/run from)
            -   `CRA_MANIFEST_PATH`: default `./frontend/dist/manifest.json` when called from workspace root, `../frontend/dist/manifest.json` otherwise.
            -   `CRA_FRONTEND_DIR`: default `./frontend` when called from workspace root, `../frontend` otherwise.
            -   `CRA_VIEWS_GLOB`: default `backend/views/\*\*/\*.html` when called from workspace root, `views/\*\*/\*.html` otherwise.
        -   Note that in any non-standard setup, you will need to set the above environment variables to the correct values for your project to ensure correct behavior.

### 2. Code-gen to reduce boilerplate {#code-gen-to-reduce-boilerplate dir="auto" tabindex="-1"}

[](#2-code-gen-to-reduce-boilerplate){#user-content-2-code-gen-to-reduce-boilerplate aria-label="Permalink: 2. Code-gen to reduce boilerplate"}

-   Run this commmand to generate diesel model structs and queries in your `backend/models` folder!
-   See dsync docs [here](https://github.com/Wulf/dsync)

<!-- -->

-   Run this command to generate typescript types for your rust code marked with `#[tsync::tsync]`. You\'ll find the output for this command here: `frontend/src/types/rust.d.ts`.
-   See tsync docs [here](https://github.com/Wulf/tsync)

<!-- -->

    cd my_project && create-rust-app

-   CRUD code-gen to reduce boilerplate
    -   Scaffolds the db model, endpoints service file, and hooks it up in your `/api`!
-   `react-query` hooks generation for frontend
    -   Generates a hook for each handler function defined in the `services/` folder
    -   Edit generated hooks afterwards \-- they won\'t be regenerated unless you delete (or rename) the hook!

## Walkthrough (old) {#walkthrough-old dir="auto" tabindex="-1"}

[](#walkthrough-old){#user-content-walkthrough-old aria-label="Permalink: Walkthrough (old)"}

[![Gif](https://github.com/Wulf/create-rust-app/raw/main/docs/create-rust-app-v2.gif){animated-image=""}](https://github.com/Wulf/create-rust-app/blob/main/docs/create-rust-app-v2.mp4)

## Contributing {#contributing dir="auto" tabindex="-1"}

[](#contributing){#user-content-contributing aria-label="Permalink: Contributing"}

Questions and comments are welcome in the issues section!

If you\'re experiencing slow compilation time, make sure there isn\'t any bloat in the template files (look for `node_modules` or typescript / parcel caches and delete them).
Moreover, you can try using the [mold](https://github.com/rui314/mold) linker which may also improve compilation times.
