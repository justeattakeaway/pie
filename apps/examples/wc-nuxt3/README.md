## Setup

Make sure to install the dependencies:

```bash

yarn install

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

## Using Web Components in Nuxt 3 apps

### Update Nuxt config to enable web components

Refer to the `nuxt.config.ts` file. A compiler option was added to tell Vue to treat tags with dashes as custom components: `isCustomElement: (tag) => tag.includes('-')`.

### Install the `@justeattakeaway/pie-button` package

`yarn add @justeattakeaway/pie-button`

### Import and use the component

For a complete example refer to `app.vue`.

```
<template>
    <pie-button @click="increment" />
</template>

<script>
import '@justeattakeaway/pie-button';
</script>
```

### Optional: enable server side rendering

Install the module `nuxt-ssr-lit`: `yarn add nuxt-ssr-lit`

Add the following settings to the `nuxt.config.ts` file:

```js
    ssr: true,
    modules: [
      ["nuxt-ssr-lit", { litElementPrefix: ["pie-"] }]
    ],
```
