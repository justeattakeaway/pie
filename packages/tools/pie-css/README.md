<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-css">
    <img alt="Currently released NPM version" src="https://img.shields.io/npm/v/@justeattakeaway/pie-css.svg">
  </a>
</p>

# PIE CSS

# Table of Contents

1. [Introduction](#pie-css)
2. [Installation](#installation)
   1. JS or Framework import (via bundler)
   2. NuxtJS
   3. Sass /SCSS
   4. Native HTML
3. [Using the PIE CSS – SCSS helpers](#helpers)

## Introduction

PIE CSS is A styling library that provides both a shared collection of ready to use CSS styles to be used across JET web front-ends, and SCSS-based style helpers for our PIE Web Component library.

---

## Installing PIE CSS shared CSS styles

To install the PIE CSS library, run the following on your command line:

```bash
# npm
npm i @justeattakeaway/pie-css

# yarn
yarn add @justeattakeaway/pie-css
```

Once installed, how you include PIE CSS will largely depend on the type of application you are building (and your own preference), but here are a few examples.


### JS or Framework import (via bundler)

One common way of importing PIE CSS would be through a regular JS import as part of your application bundle.

```js
import '@justeattakeaway/pie-css';
```


For example, in React (or NextJS), you could add the `pie-css` import to your `App.js` file:

```js
import '@justeattakeaway/pie-css';

function App () {
    return (
        …
    );
}

export default App;
```

Similarly, in Vue 3, you will likely include it as part of your `/src/main.ts` file:


```js
import { createApp } from 'vue';
import '@justeattakeaway/pie-css';
import App from './App.vue';

createApp(App).mount('#app');
```

### NuxtJS

If you are using NuxtJS, you can import PIE CSS in your `nuxt.config.js` file.


For NuxtJS v3, this would look like this:

```js
// Nuxt v3
export default defineNuxtConfig({
    css: ['@justeattakeaway/pie-css'],
    …
});
 ```

For NuxtJS v2, it is very similar, looking more like this:

```js
export default {
    css: [
        '@justeattakeaway/pie-css',
    ],
    …
}
```


### Sass / SCSS

If you are using Sass, you could import the CSS file as part of your styles directly.

```scss
@use 'node_modules/@justeattakeaway/pie-css/dist/index.css';
```


### Native HTML

Of course, you could include the styles straight inside your HTML document – most likely you'd want to link to the `/@justeattakeaway/pie-css/dist/index.css` CSS file in the head of your HTML.



## Using the PIE CSS – SCSS helpers

PIE CSS also has an optional set of SCSS helpers that are used by the PIE Web Components.

These are for carrying out common tasks in our styles, such as setting font sizes in consistent ways and sharing styles across components via SCSS mixins and functions.

We will be writing more in-depth docs on these SCSS helpers shortly, but for now, feel free to browse the [SCSS code in the PIE mono-repo](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css/scss).
