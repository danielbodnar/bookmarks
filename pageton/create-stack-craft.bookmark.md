# pageton/create-stack-craft (github.com)

<https://github.com/pageton/create-stack-craft>

## Description

create-stack-craft is a CLI tool that simplifies the process of setting up modern web development stacks. With support for Express, Hono, and Prisma, it helps you quickly set up projects with best practices and essential configurations. - pageton/create-stack-craft

## Quote

> create-stack-craft is a CLI tool that simplifies the process of setting up modern web development stacks. With support for Express, Hono, and Prisma, it helps you quickly set up projects with best practices and essential configurations.

## Tags

#create-stack-craft #developer #developer-tools #express #expressjs #hono #honojs #javascript #lib #library #nodejs #npm #pnpm #stack #stack-craft #template #templates #typescript #TypeScript

## Content

# GitHub - pageton/create-stack-craft: create-stack-craft is a CLI tool that simplifies the process of setting up modern web development stacks. With support for Express, Hono, and Prisma, it helps you quickly set up projects with best practices and essential configurations. {#github---pagetoncreate-stack-craft-create-stack-craft-is-a-cli-tool-that-simplifies-the-process-of-setting-up-modern-web-development-stacks.-with-support-for-express-hono-and-prisma-it-helps-you-quickly-set-up-projects-with-best-practices-and-essential-configurations. .reader-title}

pageton

------------------------------------------------------------------------

## Create Stack Craft {#create-stack-craft dir="auto" tabindex="-1"}

[](#create-stack-craft){#user-content-create-stack-craft aria-label="Permalink: Create Stack Craft"}

**Create Stack Craft** is a CLI tool to create projects with Express, Hono, and Prisma. This tool helps you quickly set up a new project with the desired framework, language, and Prisma integration.

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   Create projects with Express or Hono.
-   Choose between TypeScript or JavaScript.
-   Optionally include Prisma for database management.
-   Automatically set up the project structure and dependencies.

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

You can create a new project by running the following command with `npm`:

    npm create stack-craft@latest

Or with `pnpm`:

    pnpm create stack-craft@latest

### Interactive Prompts {#interactive-prompts dir="auto" tabindex="-1"}

[](#interactive-prompts){#user-content-interactive-prompts aria-label="Permalink: Interactive Prompts"}

You will be prompted to enter the following information:

1.  **Project Name**: Enter the name of your project.
2.  **Framework**: Choose between Express or Hono.
3.  **Language**: Choose between TypeScript or JavaScript.
4.  **Include Prisma**: Optionally include Prisma in your project.
5.  **Run npm install**: Optionally run `npm install` after setting up the project.

### Example {#example dir="auto" tabindex="-1"}

[](#example){#user-content-example aria-label="Permalink: Example"}

    npm create stack-craft@latest

or

    pnpm create stack-craft@latest

Follow the prompts to create your project. Once the setup is complete, navigate to your project directory and start the development server:

    cd my-project
    npm run dev

## Project Structure {#project-structure dir="auto" tabindex="-1"}

[](#project-structure){#user-content-project-structure aria-label="Permalink: Project Structure"}

The generated project structure will look like this:

    my-project/
    ├── prisma/
    │   └── schema.prisma (if Prisma is included)
    ├── src/
    │   ├── app.ts (or app.js)
    │   └── routes/
    │       └── index.ts (or index.js)
    ├── .env (if Prisma is included)
    ├── .env.example (if Prisma is included)
    ├── package.json
    └── tsconfig.json (if TypeScript is selected)

## Template Files {#template-files dir="auto" tabindex="-1"}

[](#template-files){#user-content-template-files aria-label="Permalink: Template Files"}

The template files for different setups can be found in the [Stack Craft Templates repository](https://github.com/dev-rio/stack-craft-templates/).

## Scripts {#scripts dir="auto" tabindex="-1"}

[](#scripts){#user-content-scripts aria-label="Permalink: Scripts"}

The generated `package.json` will include the following scripts:

-   `build`: Compile the TypeScript code (if TypeScript is selected).
-   `start`: Run the compiled code.
-   `lint`: Run ESLint on the project.
-   `db:generate`: Generate Prisma client (if Prisma is included).
-   `db:migrate`: Run Prisma migrations (if Prisma is included).
-   `db:push`: Push the Prisma schema to the database (if Prisma is included).
-   `db:studio`: Open Prisma Studio (if Prisma is included).

## Available Templates {#available-templates dir="auto" tabindex="-1"}

[](#available-templates){#user-content-available-templates aria-label="Permalink: Available Templates"}

### Frameworks {#frameworks dir="auto" tabindex="-1"}

[](#frameworks){#user-content-frameworks aria-label="Permalink: Frameworks"}

-   **[Express](https://expressjs.com/){rel="nofollow"}**
-   **[Fastify](https://fastify.dev/){rel="nofollow"}**
-   **[Hapi](https://hapi.dev/){rel="nofollow"}**
-   **[Hono](https://hono.dev/){rel="nofollow"}**
-   **[Koa](https://koajs.com/){rel="nofollow"}**

### Additional Tools {#additional-tools dir="auto" tabindex="-1"}

[](#additional-tools){#user-content-additional-tools aria-label="Permalink: Additional Tools"}

-   **[Prisma](https://www.prisma.io/){rel="nofollow"}**

## Contributing {#contributing dir="auto" tabindex="-1"}

[](#contributing){#user-content-contributing aria-label="Permalink: Contributing"}

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

This project is licensed under the MIT License.
