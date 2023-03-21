## How to use the Vue app

### Install dependencies

```sh
yarn
```

### During development

```sh
yarn dev
```

### For creating a production build

```sh
yarn build
```

### Configuration settings

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Using Web Components in Vue 3 apps

### Update Vite config to enable web components

Refer to the `vite.config.ts` file. A compiler option was added to tell Vue to treat tags with dashes as custom components: `isCustomElement: (tag) => tag.includes('-')`.

### Install the `@justeattakeaway/pie-button` package

`yarn add @justeattakeaway/pie-button`

### Import and use the component

For a complete example refer to `src/App.vue`.

```
<template>
    <pie-button @click="increment" />
</template>

<script>
import '@justeattakeaway/pie-button';
</script>
```
