# leerob/next-saas-starter (github.com)

<https://github.com/leerob/next-saas-starter>

## Description

Get started quickly with Next.js, Postgres, Stripe, and shadcn/ui. - nextjs/saas-starter

## Quote

> Get started quickly with Next.js, Postgres, Stripe, and shadcn/ui.

## Tags

#nextjs #postgres #shadcn-ui #stripe #TypeScript

## Content

# GitHub - nextjs/saas-starter: Get started quickly with Next.js, Postgres, Stripe, and shadcn/ui. {#github---nextjssaas-starter-get-started-quickly-with-next.js-postgres-stripe-and-shadcnui. .reader-title}

nextjs

------------------------------------------------------------------------

## Next.js SaaS Starter {#next.js-saas-starter dir="auto" tabindex="-1"}

[](#nextjs-saas-starter){#user-content-nextjs-saas-starter aria-label="Permalink: Next.js SaaS Starter"}

This is a starter template for building a SaaS application using **Next.js** with support for authentication, Stripe integration for payments, and a dashboard for logged-in users.

**Demo: [https://next-saas-start.vercel.app/](https://next-saas-start.vercel.app/){rel="nofollow"}**

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   Marketing landing page (`/`) with animated Terminal element
-   Pricing page (`/pricing`) which connects to Stripe Checkout
-   Dashboard pages with CRUD operations on users/teams
-   Basic RBAC with Owner and Member roles
-   Subscription management with Stripe Customer Portal
-   Email/password authentication with JWTs stored to cookies
-   Global middleware to protect logged-in routes
-   Local middleware to protect Server Actions or validate Zod schemas
-   Activity logging system for any user events

## Tech Stack {#tech-stack dir="auto" tabindex="-1"}

[](#tech-stack){#user-content-tech-stack aria-label="Permalink: Tech Stack"}

-   **Framework**: [Next.js](https://nextjs.org/){rel="nofollow"}
-   **Database**: [Postgres](https://www.postgresql.org/){rel="nofollow"}
-   **ORM**: [Drizzle](https://orm.drizzle.team/){rel="nofollow"}
-   **Payments**: [Stripe](https://stripe.com/){rel="nofollow"}
-   **UI Library**: [shadcn/ui](https://ui.shadcn.com/){rel="nofollow"}

## Getting Started {#getting-started dir="auto" tabindex="-1"}

[](#getting-started){#user-content-getting-started aria-label="Permalink: Getting Started"}

    git clone https://github.com/nextjs/saas-starter
    cd saas-starter
    pnpm install

## Running Locally {#running-locally dir="auto" tabindex="-1"}

[](#running-locally){#user-content-running-locally aria-label="Permalink: Running Locally"}

Use the included setup script to create your `.env` file:

Then, run the database migrations and seed the database with a default user and team:

    pnpm db:migrate
    pnpm db:seed

This will create the following user and team:

-   User: `test@test.com`
-   Password: `admin123`

You can, of course, create new users as well through `/sign-up`.

Finally, run the Next.js development server:

Open [http://localhost:3000](http://localhost:3000/){rel="nofollow"} in your browser to see the app in action.

Optionally, you can listen for Stripe webhooks locally through their CLI to handle subscription change events:

    stripe listen --forward-to localhost:3000/api/stripe/webhook

## Testing Payments {#testing-payments dir="auto" tabindex="-1"}

[](#testing-payments){#user-content-testing-payments aria-label="Permalink: Testing Payments"}

To test Stripe payments, use the following test card details:

-   Card Number: `4242 4242 4242 4242`
-   Expiration: Any future date
-   CVC: Any 3-digit number

## Going to Production {#going-to-production dir="auto" tabindex="-1"}

[](#going-to-production){#user-content-going-to-production aria-label="Permalink: Going to Production"}

When you\'re ready to deploy your SaaS application to production, follow these steps:

### Set up a production Stripe webhook {#set-up-a-production-stripe-webhook dir="auto" tabindex="-1"}

[](#set-up-a-production-stripe-webhook){#user-content-set-up-a-production-stripe-webhook aria-label="Permalink: Set up a production Stripe webhook"}

1.  Go to the Stripe Dashboard and create a new webhook for your production environment.
2.  Set the endpoint URL to your production API route (e.g., `https://yourdomain.com/api/stripe/webhook`).
3.  Select the events you want to listen for (e.g., `checkout.session.completed`, `customer.subscription.updated`).

### Deploy to Vercel {#deploy-to-vercel dir="auto" tabindex="-1"}

[](#deploy-to-vercel){#user-content-deploy-to-vercel aria-label="Permalink: Deploy to Vercel"}

1.  Push your code to a GitHub repository.
2.  Connect your repository to [Vercel](https://vercel.com/){rel="nofollow"} and deploy it.
3.  Follow the Vercel deployment process, which will guide you through setting up your project.

### Add environment variables {#add-environment-variables dir="auto" tabindex="-1"}

[](#add-environment-variables){#user-content-add-environment-variables aria-label="Permalink: Add environment variables"}

In your Vercel project settings (or during deployment), add all the necessary environment variables. Make sure to update the values for the production environment, including:

1.  `BASE_URL`: Set this to your production domain.
2.  `STRIPE_SECRET_KEY`: Use your Stripe secret key for the production environment.
3.  `STRIPE_WEBHOOK_SECRET`: Use the webhook secret from the production webhook you created in step 1.
4.  `POSTGRES_URL`: Set this to your production database URL.
5.  `AUTH_SECRET`: Set this to a random string. `openssl rand -base64 32` will generate one.

## Other Templates {#other-templates dir="auto" tabindex="-1"}

[](#other-templates){#user-content-other-templates aria-label="Permalink: Other Templates"}

While this template is intentionally minimal and to be used as a learning resource, there are other paid versions in the community which are more full-featured:

-   [https://achromatic.dev](https://achromatic.dev/){rel="nofollow"}
-   [https://shipfa.st](https://shipfa.st/){rel="nofollow"}
-   [https://makerkit.dev](https://makerkit.dev/){rel="nofollow"}
