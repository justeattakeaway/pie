# wc-nuxt2

## Build Setup

Install dependencies
```bash
yarn install
```

Start the development server on http://localhost:3000
```bash
yarn dev
```

## Using Web Components in Nuxt 2 apps

For this, we use `@justeattakeaway/pie-button` as an example component.

This assumes you already have fonts configured for your application.

### Install the component
```bash
yarn add @justeattakeaway/pie-button
```

### Register your component
We are doing this in a plugin to make the component available to all pages. At the moment this is client-side. We will investigate supporting server-side rendering (SSR) in the near future.

See `plugins/web-components.client.js`, where we import the component from npm.

Register the plugin in `nuxt.config.js`.

You can now use your web component on any of your pages!

To avoid a flash of unstyled content (FOUC) we make use of the `:defined` selector in `/assets/styles/web-components.css`, which is also registered in `nuxt.config.js`.
