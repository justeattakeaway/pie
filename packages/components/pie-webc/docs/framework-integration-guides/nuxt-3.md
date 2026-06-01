# Nuxt 3

This guide will show you how to set up the PIE Web Components in a Nuxt 3 application.

> This guide assumes you have first followed the [Getting started](https://webc.pie.design/?path=/docs/introduction-getting-started--docs), [Typography](https://webc.pie.design/?path=/docs/introduction-typography--docs) and [CSS setup](https://webc.pie.design/?path=/docs/introduction-css-setup--docs) guides.
> Please make sure to follow them before continuing with this guide.

## Table of Contents

- [Dependencies](#dependencies)
- [Nuxt config](#nuxt-config)
- [Usage](#usage)
- [Configuring the test-id attribute](#configuring-the-test-id-attribute)


## Dependencies
The first step is to install some React and Next.js specific dependencies:

**Using Yarn:**

```bash
yarn add nuxt-ssr-lit
```

**Using NPM:**

```bash
npm install nuxt-ssr-lit
```

## Nuxt config

To get our components working, ensure you are applying the following rules to your `nuxt.config.ts` file:

```js
export default defineNuxtConfig({
    ssr: true,

    nitro: {
        moduleSideEffects: [
            '@justeattakeaway/pie-icons-webc',
            '@justeattakeaway/pie-webc',
        ],
    },

    modules: [['nuxt-ssr-lit', { litElementPrefix: ['pie-', 'icon-'] }]],

    imports: {
        transform: {
            exclude: [/\bpie-\b/, /\bicon-\b/],
        },
    },

    css: ['@justeattakeaway/pie-css'],
    devtools: { enabled: true },

    devServer: {
        port: 3002,
    },

    compatibilityDate: '2024-07-23',
});
```

### Nuxt Configuration Breakdown

#### 1. **Server-Side Rendering**
- **`ssr: true`**
  Enables **Server-Side Rendering (SSR)** for improved SEO and faster initial page loads by rendering pages on the server.

#### 2. **Nitro Configuration**
- **`moduleSideEffects`**
    Includes the following modules during the build to ensure side effects like custom element registration:
    - `@justeattakeaway/pie-icons-webc`
    - `@justeattakeaway/pie-webc`

#### 3. **Modules**
- Adds the **`nuxt-ssr-lit`** module to enable SSR compatibility for Lit web components.
- **`litElementPrefix`** specifies the prefixes for custom elements to be treated as Lit elements:
    - `pie-`
    - `icon-`

#### 4. **Imports**
- **`imports.transform.exclude`**
    Prevents Nuxt from automatically transforming imports matching these patterns:
    - `pie-`
    - `icon-`

#### 5. **Global CSS**
- Includes global styles from the `@justeattakeaway/pie-css` package for styling custom components.

#### 6. **Compatibility Date**
- **`compatibilityDate: '2024-07-23'`**
    Ensures behaviour aligns with Nuxt's functionality as of the specified date, preventing breaking changes introduced after this date.


## Usage

It is recommended to import all components from [@justeattakeaway/pie-webc](https://www.npmjs.com/package/@justeattakeaway/pie-webc).

In your components, you should be able to render components like so:

```html
<script setup>
// No need to destructure any imports - just directly import the js file
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCamera.js';
</script>

<template>
    <div>
        <pie-button size="small-productive" iconPlacement="leading">
        <icon-camera slot="icon"></icon-camera>
        hello, world
        </pie-button>
    </div>
</template>
```

You should now be able to use any components you need in your Nuxt application!

## Configuring the test-id attribute

PIE components expose their internal test hooks using the `data-test-id` attribute by default. If your test tooling targets a different attribute (for example, Playwright's `testConfig.testIdAttribute`), you can tell PIE to use the same attribute name so a single `getByTestId` strategy works for both your own markup and PIE internals.

Because the app is server-side rendered, set this in a **client-only** plugin so it runs in the browser before PIE components hydrate:

```ts
// plugins/pie-test-id.client.ts
import { setPieTestIdAttribute } from '@justeattakeaway/pie-webc-core';

export default defineNuxtPlugin(() => {
    setPieTestIdAttribute('data-qa');
});
```

- The `.client.ts` suffix ensures the plugin only runs on the client, and Nuxt runs plugins before mounting the app.
- Defaults to `data-test-id`. Pass any valid attribute name (e.g. `data-qa`). Invalid names are ignored with a warning.
- During SSR the server-rendered HTML still contains `data-test-id`; the configured name is applied on the client after hydration (which is what Playwright e2e tests observe).
- `setPieTestIdAttribute` is provided by `@justeattakeaway/pie-webc-core`, which is installed automatically as a dependency of the PIE components.
