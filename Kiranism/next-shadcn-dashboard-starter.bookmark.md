# Kiranism/next-shadcn-dashboard-starter (github.com)

<https://github.com/Kiranism/next-shadcn-dashboard-starter>

## Description

Admin Dashboard Starter with Nextjs15 and shadcn ui - Kiranism/next-shadcn-dashboard-starter

## Quote

> Admin Dashboard Starter with Nextjs14 and shadcn ui

## Tags

#next-auth #next-themes #nextjs-admin-template #nextjs-boilerplate #nextjs-example #nextjs-template #nextjs14 #nextjs14-starter #react-hook-form #shadcn-ui #shadcn-ui-starter #tanstack-table #typescript #uploadthing #zod #TypeScript

## Content

# GitHub - Kiranism/next-shadcn-dashboard-starter: Admin Dashboard Starter with Nextjs15 and shadcn ui {#github---kiranismnext-shadcn-dashboard-starter-admin-dashboard-starter-with-nextjs15-and-shadcn-ui .reader-title}

Kiranism

------------------------------------------------------------------------

**Next.js Admin Dashboard Starter Template With Shadcn-ui**

Built with the Next.js 15 App Router

## Overview {#overview dir="auto" tabindex="-1"}

[](#overview){#user-content-overview aria-label="Permalink: Overview"}

This is a starter template using the following stack:

-   Framework - [Next.js 15](https://nextjs.org/13){rel="nofollow"}
-   Language - [TypeScript](https://www.typescriptlang.org/){rel="nofollow"}
-   Styling - [Tailwind CSS](https://tailwindcss.com/){rel="nofollow"}
-   Components - [Shadcn-ui](https://ui.shadcn.com/){rel="nofollow"}
-   Schema Validations - [Zod](https://zod.dev/){rel="nofollow"}
-   State Management - [Zustand](https://zustand-demo.pmnd.rs/){rel="nofollow"}
-   Search params state manager - [Nuqs](https://nuqs.47ng.com/){rel="nofollow"}
-   Auth - [Auth.js](https://authjs.dev/){rel="nofollow"}
-   Tables - [Tanstack Tables](https://ui.shadcn.com/docs/components/data-table){rel="nofollow"}
-   Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form){rel="nofollow"}
-   Command+k interface - [kbar](https://kbar.vercel.app/){rel="nofollow"}
-   Linting - [ESLint](https://eslint.org/){rel="nofollow"}
-   Pre-commit Hooks - [Husky](https://typicode.github.io/husky/){rel="nofollow"}
-   Formatting - [Prettier](https://prettier.io/){rel="nofollow"}

*If you are looking for a React admin dashboard starter, here is the [repo](https://github.com/Kiranism/react-shadcn-dashboard-starter).*

## Pages {#pages dir="auto" tabindex="-1"}

[](#pages){#user-content-pages aria-label="Permalink: Pages"}

  Pages                                                                                                   Specifications
  ------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------
  [Signup](https://next-shadcn-dashboard-starter.vercel.app/){rel="nofollow"}                             Authentication with **NextAuth** supports Social logins and email logins (Enter dummy email for demo).
  [Dashboard (Overview)](https://next-shadcn-dashboard-starter.vercel.app/dashboard){rel="nofollow"}      Cards with recharts graphs for analytics.Parallel routes in the overview sections with independent loading, error handling, and isolated component rendering .
  [Product](https://next-shadcn-dashboard-starter.vercel.app/dashboard/product){rel="nofollow"}           Tanstack tables with server side searching, filter, pagination by Nuqs which is a Type-safe search params state manager in nextjs
  [Product/new](https://next-shadcn-dashboard-starter.vercel.app/dashboard/product/new){rel="nofollow"}   A Product Form with shadcn form (react-hook-form + zod).
  [Profile](https://next-shadcn-dashboard-starter.vercel.app/dashboard/profile){rel="nofollow"}           Mutistep dynamic forms using react-hook-form and zod for form validation.
  [Kanban Board](https://next-shadcn-dashboard-starter.vercel.app/dashboard/kanban){rel="nofollow"}       A Drag n Drop task management board with dnd-kit and zustand to persist state locally.
  [Not Found](https://next-shadcn-dashboard-starter.vercel.app/dashboard/notfound){rel="nofollow"}        Not Found Page Added in the root level
  \-                                                                                                      \-

## Feature based organization {#feature-based-organization dir="auto" tabindex="-1"}

[](#feature-based-organization){#user-content-feature-based-organization aria-label="Permalink: Feature based organization"}

``` {lang="plaintext"}
src/
├── app/ # Next.js App Router directory
│ ├── (auth)/ # Auth route group
│ │ ├── (signin)/
│ ├── (dashboard)/ # Dashboard route group
│ │ ├── layout.tsx
│ │ ├── loading.tsx
│ │ └── page.tsx
│ └── api/ # API routes
│
├── components/ # Shared components
│ ├── ui/ # UI components (buttons, inputs, etc.)
│ └── layout/ # Layout components (header, sidebar, etc.)
│
├── features/ # Feature-based modules
│ ├── feature/
│ │ ├── components/ # Feature-specific components
│ │ ├── actions/ # Server actions
│ │ ├── schemas/ # Form validation schemas
│ │ └── utils/ # Feature-specific utilities
│ │
├── lib/ # Core utilities and configurations
│ ├── auth/ # Auth configuration
│ ├── db/ # Database utilities
│ └── utils/ # Shared utilities
│
├── hooks/ # Custom hooks
│ └── use-debounce.ts
│
├── stores/ # Zustand stores
│ └── dashboard-store.ts
│
└── types/ # TypeScript types
└── index.ts
```

## Getting Started {#getting-started dir="auto" tabindex="-1"}

[](#getting-started){#user-content-getting-started aria-label="Permalink: Getting Started"}

Note

We are using **Next 15** with **React 19**, follow these steps:

Clone the repo:

    git clone https://github.com/Kiranism/next-shadcn-dashboard-starter.git

-   `pnpm install` ( we have legacy-peer-deps=true added in the .npmrc)
-   Create a `.env.local` file by copying the example environment file:
    `cp env.example.txt .env.local`
-   Add the required environment variables to the `.env.local` file.
-   `pnpm run dev`

You should now be able to access the application at [http://localhost:3000](http://localhost:3000/){rel="nofollow"}.

Warning

After cloning or forking the repository, be cautious when pulling or syncing with the latest changes, as this may result in breaking conflicts.

Cheers! 🥂
