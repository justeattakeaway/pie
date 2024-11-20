---
eleventyNavigation:
    key: Nuxt 3 Integration
    parent: engineers-web-components
    order: 2
---

## Installation
Please install the following JET dependencies (examples use `yarn` but feel free to use `npm` if preferred):

```bash
yarn add @justeattakeaway/pie-css @justeattakeaway/pie-webc @justeattakeaway/pie-icons-webc
```

And the following third party dependencies:
```bash
yarn add nuxt-ssr-lit
```

## Setup

### CSS and Design Token variables
You should add [@justeattakeaway/pie-css](https://www.npmjs.com/package/@justeattakeaway/pie-css) into your Nuxt config file (or wherever you prefer) so that the variables it provides are globally available (some of these variables are used by the component styles):

```js
// Example Nuxt Config - most of the properties removed for demonstration.
export default defineNuxtConfig({
  css: ['@justeattakeaway/pie-css'],
});
```

For more information on `pie-css` please take a look at the package [readme](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css)

### Typography
We have a [dedicated page](/foundations/typography/code/) which explains how to set up typography. In short, you need to install the JET fonts and set up the appropriate `font-face` CSS code.

### Nuxt config

To get our components working, ensure you are applying the following rules to your `nuxt.config.ts` file:

```ts
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

---

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

{% notification {
  type: "information",
  message: "Check individual component \`code\` pages on this website to see how to use them specifically in your application. Such as [PIE Button](/components/button/code/)."
} %}

You should now be able to use any components you need in your Nuxt application!

Please reach out to us if you have any troubles or spot any errors in our guide.
