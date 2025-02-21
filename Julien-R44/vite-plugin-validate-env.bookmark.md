# Julien-R44/vite-plugin-validate-env (github.com)

<https://github.com/Julien-R44/vite-plugin-validate-env>

## Description

✅ Vite plugin for validating your environment variables - Julien-R44/vite-plugin-validate-env

## Quote

> ✅ Vite plugin for validating your environment variables

## Tags

#env-vars #validation #vite-plugin #TypeScript

## Content

# GitHub - Julien-R44/vite-plugin-validate-env: ✅ Vite plugin for validating your environment variables {#github---julien-r44vite-plugin-validate-env-vite-plugin-for-validating-your-environment-variables .reader-title}

Julien-R44

------------------------------------------------------------------------

[![](https://user-images.githubusercontent.com/8337858/188329992-e74b3393-5bec-48b3-bba9-a8c45d279866.png)](https://user-images.githubusercontent.com/8337858/188329992-e74b3393-5bec-48b3-bba9-a8c45d279866.png){rel="noopener noreferrer nofollow"}

This Vite plugin allows you to validate your environment variables at build or dev time. This allows your build/dev-server to [fail-fast](https://en.wikipedia.org/wiki/Fail-fast){rel="nofollow"} if your setup is misconfigured.

No more CI to restart because you are missing an environment variable, or to realize after 10 minutes of debugging that you forgot a variable 🥲

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   Validate your environment variables at **build time only**. No runtime overhead
-   Totally type-safe
-   Support [standard-schema](https://github.com/standard-schema/standard-schema), meaning you can use every libraries compatible with it ( Zod, Valibot, ArkType )
-   Parsing, validation and transformation of your variables
-   Custom rules and error messages

## Installation {#installation dir="auto" tabindex="-1"}

[](#installation){#user-content-installation aria-label="Permalink: Installation"}

    pnpm add -D @julr/vite-plugin-validate-env

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

`vite-plugin-validate-env` plugin allows you to validate your env, either with a very simplified builtin validation lib, or with Zod in the most complex cases when you want a very strict validation.

### Plugin options {#plugin-options dir="auto" tabindex="-1"}

[](#plugin-options){#user-content-plugin-options aria-label="Permalink: Plugin options"}

The easiest way to define the options is to directly define the scheme as follows:

    // vite.config.ts
    import { defineConfig } from "vite";
    import { Schema, ValidateEnv } from "@julr/vite-plugin-validate-env";

    export default defineConfig({
      plugins: [
        ValidateEnv({
          VITE_MY_VAR: Schema.string()
        }),
      ],
    })

In case you want to change some plugin options, in particular change the validator (for Zod), you have to set your options as follows:

    import { defineConfig } from "vite";
    import { z } from 'zod'
    import { ValidateEnv } from "@julr/vite-plugin-validate-env";

    export default defineConfig({
      plugins: [
        ValidateEnv({
          validator: 'zod',
          schema: {
            VITE_MY_VAR: z.string()
          }
        }),
      ],
    })

If you want to see what values are being evaluated for the build, for example when running in CI. You can pass the `debug` option as follows:

    import { defineConfig } from "vite";
    import { Schema, ValidateEnv } from "@julr/vite-plugin-validate-env";

    export default defineConfig({
      plugins: [
        ValidateEnv({
          debug: true,
          schema: {
            VITE_MY_VAR: Schema.string()
          }
        }),
      ],
    })

### Built-in validator {#built-in-validator dir="auto" tabindex="-1"}

[](#built-in-validator){#user-content-built-in-validator aria-label="Permalink: Built-in validator"}

    import { Schema, ValidateEnv } from "@julr/vite-plugin-validate-env"
    import { defineConfig } from "vite";

    export default defineConfig({
      plugins: [
        ValidateEnv({
          // Data types
          VITE_STRING_VARIABLE: Schema.string(),
          VITE_BOOLEAN_VARIABLE: Schema.boolean(),
          VITE_NUMBER_VARIABLE: Schema.number(),
          VITE_ENUM_VARIABLE: Schema.enum(['foo', 'bar'] as const),
          
          // Optional variable
          VITE_OPTIONAL_VARIABLE: Schema.boolean.optional(),

          // Specify string format
          VITE_AUTH_API_URL: Schema.string({ format: 'url', protocol: true }),

          // Specify error message
          VITE_APP_PORT: Schema.number({ message: 'You must set a port !' }),

          // Custom validator
          VITE_CUSTOM_VARIABLE: (key, value) => {
            if (!value) {
              throw new Error(`Missing ${key} env variable`)
            }

            if (value.endsWith('foo')) {
              throw new Error('Value cannot end with "foo"')
            }

            return value
          },
        }),
      ],
    })

### Zod Validator {#zod-validator dir="auto" tabindex="-1"}

[](#zod-validator){#user-content-zod-validator aria-label="Permalink: Zod Validator"}

To use the Zod validator, you must first install it if you have not already done so

Then, you can use it as follows:

    // env.ts
    import { defineConfig } from '@julr/vite-plugin-validate-env'
    import { z } from 'zod'

    export default defineConfig({
      validator: 'zod',
      schema: {
        VITE_MY_STRING: z.string().min(5, 'This is too short !'),
        VITE_ENUM: z.enum(['a', 'b', 'c']),
        VITE_BOOLEAN_VARIABLE: z.boolean(),
      }
    })

Beware, there are some limitations if you use Zod. For example, you can\'t use a boolean or number type directly. Because everything that comes from your `.env` file is a string by default.

So to validate other types than string you must use `preprocess`, and `transform`, like this:

    // env.ts
    import { defineConfig } from '@julr/vite-plugin-validate-env'
    import { z } from 'zod'

    export default defineConfig({
      validator: 'zod',
      schema: {
        // This will transform the string 'true' or '1' to a boolean
        VITE_BOOLEAN_VARIABLE: z
          .preprocess((value) => value === 'true' || value === '1', z.boolean()),

        // Will convert the string to a number
        VITE_NUMBER: z.preprocess((value) => Number(value), z.number()),

        // Will parse the string to an object
        VITE_OBJECT: z.preprocess(
          (value) => JSON.parse(value as string),
          z.object({
            a: z.string(),
            b: z.number(),
          }),
        ),
      }
    })

In this case, `true` and `1` will be transformed to `true` and your variable will be valid and considered as a boolean.

## Dedicated config file {#dedicated-config-file dir="auto" tabindex="-1"}

[](#dedicated-config-file){#user-content-dedicated-config-file aria-label="Permalink: Dedicated config file"}

You can also add a `env.ts` file at the root of your project to define your environment variables.

    // vite.config.ts
    import { defineConfig } from 'vite'
    import { ValidateEnv } from "@julr/vite-plugin-validate-env";

    export default defineConfig({
      plugins: [ValidateEnv()],
    })

    // env.ts
    import { defineConfig, Schema } from '@julr/vite-plugin-validate-env'

    export default defineConfig({
     VITE_MY_VAR: Schema.enum(['foo', 'bar'] as const),
    })

### Custom config file path {#custom-config-file-path dir="auto" tabindex="-1"}

[](#custom-config-file-path){#user-content-custom-config-file-path aria-label="Permalink: Custom config file path"}

By default, the plugin is looking for a file named `env.ts` at the root of your project. If you want to use a different file, you can specify the path to your file in the plugin options.

    // vite.config.ts
    import { defineConfig } from 'vite'
    import { ValidateEnv } from "@julr/vite-plugin-validate-env";

    export default defineConfig({
      plugins: [ValidateEnv({ configFile: 'config/env' })],
    })

This will look for a file named `env.ts` in the `config` folder at the root of your project. Make sure to not include the file extension in the path as the plugin will automatically search for `.js`, `.ts` and other valid file extensions.

## Transforming variables {#transforming-variables dir="auto" tabindex="-1"}

[](#transforming-variables){#user-content-transforming-variables aria-label="Permalink: Transforming variables"}

In addition to the validation of your variables, there is also a parsing that is done. This means that you can modify the value of an environment variable before it is injected.

Let\'s imagine the following case: you want to expose a variable `VITE_AUTH_API_URL` in order to use it to call an API. However, you absolutely need a trailing slash at the end of this environment variable. Here\'s how it can be done :

    // Built-in validation
    import { defineConfig, Schema } from '@julr/vite-plugin-validate-env'

    export default defineConfig({
      VITE_AUTH_API_URL: (key, value) => {
        if (!value) {
          throw new Error(`Missing ${key} env variable`)
        }

        if (!value.endsWith('/')) {
          return `${value}/`
        }

        return value
      },
    })

    // Zod validation
    import { defineConfig } from '@julr/vite-plugin-validate-env'
    import { z } from 'zod'

    export default defineConfig({
      validator: 'zod',
      schema: {
        VITE_AUTH_API_URL: z
          .string()
          .transform((value) => value.endsWith('/') ? value : `${value}/`),
      },
    })

Now, in your client front-end code, when you call `import.meta.env.VITE_AUTH_API_URL`, you can be sure that it will always end with a slash.

## Typing `import.meta.env` {#typing-import.meta.env dir="auto" tabindex="-1"}

[](#typing-importmetaenv){#user-content-typing-importmetaenv aria-label="Permalink: Typing import.meta.env"}

In order to have a type-safe `import.meta.env`, the ideal is to use the dedicated configuration file `env.ts`.
Once this is done, you would only need to add an `env.d.ts` in `src/` folder to augment `ImportMetaEnv` (as [suggested here](https://vitejs.dev/guide/env-and-mode.html#env-files){rel="nofollow"} ) with the following content:

    /// <reference types="vite/client" />

    type ImportMetaEnvAugmented = import('@julr/vite-plugin-validate-env').ImportMetaEnvAugmented<
      typeof import('../env').default
    >

    interface ImportMetaEnv extends ImportMetaEnvAugmented {
      // Now import.meta.env is totally type-safe and based on your `env.ts` schema definition
      // You can also add custom variables that are not defined in your schema
    }

## Standard Schema {#standard-schema dir="auto" tabindex="-1"}

[](#standard-schema){#user-content-standard-schema aria-label="Permalink: Standard Schema"}

Warning

As long as standard-schema has not been published in 1.0.0, I will possibly make breaking changes to the API without major release.

[standard-schema](https://github.com/standard-schema/standard-schema) is basically an attempt to standardize the way we can use validation librairies. It means that you can use any library that is compatible with it. As the date of writing, Zod, Valibot, Arktype, ArriSchema are compatible.

Here is an example of how to use it with the plugin:

    import { defineConfig } from '@julr/vite-plugin-validate-env'
    import { z } from 'zod'
    import * as v from 'valibot'
    import { type } from 'arktype'

    export default defineConfig({
      validator: 'standard', // Make sure to use 'standard' validator
      schema: {
        // Zod
        VITE_ZOD_VARIABLE: z.string(),

        // Valibot
        VITE_VALIBOT_VARIABLE: v.string(),

        // Arktype
        VITE_ARKTYPE_VARIABLE: type.string(),
      },
    })

Make sure to upgrade your validation library to the latest version to ensure using a compatible version with standard-schema. For example, Zod minimum version is `3.24.0`.

## Forbid unknown variables {#forbid-unknown-variables dir="auto" tabindex="-1"}

[](#forbid-unknown-variables){#user-content-forbid-unknown-variables aria-label="Permalink: Forbid unknown variables"}

Since we rely on module augmentation to type `import.meta.env`, using unknown variables won't trigger errors because the `ImportMetaEnv` interface from Vite includes a `[key: string]: string` signature.

To enforce stricter typing and prevent the use of unknown variables, you can set up the following:

    // lib/env.ts or wherever you want
    import { ImportMetaEnvAugmented } from '@julr/vite-plugin-validate-env';

    export const env: ImportMetaEnvAugmented = import.meta.env;

By using `env` instead of `import.meta.env` in your code, TypeScript will now throw an error if you try to access an unknown variable.

## Sponsors {#sponsors dir="auto" tabindex="-1"}

[](#sponsors){#user-content-sponsors aria-label="Permalink: Sponsors"}

If you like this project, [please consider supporting it by sponsoring it](https://github.com/sponsors/Julien-R44/). It will help a lot to maintain and improve it. Thanks a lot !

[![](https://github.com/julien-r44/static/raw/main/sponsorkit/sponsors.png?raw=true)](https://github.com/julien-r44/static/blob/main/sponsorkit/sponsors.png?raw=true){rel="noopener noreferrer"}

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

[MIT](https://github.com/Julien-R44/vite-plugin-validate-env/blob/main/LICENSE.md) License © 2022 [Julien Ripouteau](https://github.com/Julien-R44)
