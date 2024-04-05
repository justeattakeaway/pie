---
eleventyNavigation:
    key: Code
    parent: Iconography
    order: 3
---

## Overview
- [Our packages](#our-packages)
- [Vanilla JS (pie-icons)](#vanilla-js-pie-icons)
- [React (pie-icons-react)](#react-pie-icons-react)
- [Vue (pie-icons-vue)](#vue-pie-icons-vue)
- [Web Components (pie-icons-webc)](#web-components-pie-icons-webc)

---

## Our packages

We have a number of different icon packages available for use in our applications. We have a package for each framework we support, as well as a base package for the icons themselves.

---

## Vanilla JS (pie-icons)

`@justeattakeaway/pie-icons` is our base icon package, from which our other icon packages extend.

It is essentially a collection of the SVG files that make up the PIE Iconset. This means that you can use these icons in all the same ways you can use SVGs (e.g. img, background-image, inline, object, embed, iframe).

[This package](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons) also provides a JavaScript API for the iconset, and this is what is used to build the framework-specific icons for Web Components, React and Vue.


{% notification {
  type: "warning",
  message: "Whilst the `pie-icons` package can be used for web applications, we strongly advise that you use one of our framework-specific implementations instead."
} %}

### Usage - Client-side Javascript

To use the icons in your application, you need to include the package in your project, add the icons using data-attributes and invoke the `replace()` function:

#### Installation
You can install the package using `npm` or `yarn`:

```sh
npm install @justeattakeaway/pie-icons --save
```
```sh
yarn add @justeattakeaway/pie-icons
```

#### Include the package
You can load directly from the installed package, or from a CDN provider.

```html
<script src="path/to/dist/pie-icons.js"></script>
```
```html
<!-- choose one -->
<script src="https://unpkg.com/@justeattakeaway/pie-icons"></script>
<script src="https://cdn.jsdelivr.net/npm/@justeattakeaway/pie-icons/dist/pie-icons.min.js"></script>
```

#### HTML
Simply add a `data-pie-icons` attribute with the icon name to an element. You can see all of our icons on the [library page](/foundations/iconography/library/).

```html
<i data-pie-icons="menu"></i>
```

#### Invoke the package
Calling the `replace()` function will replace all elements with the `data-pie-icons` attribute with the relevant icon.

```html
<script>
  window['pie-icons'].default.replace();
</script>
```
---

### Usage - NodeJS

#### Installation
You can install the package using `npm` or `yarn`:

```sh
npm install @justeattakeaway/pie-icons --save
```
```sh
yarn add @justeattakeaway/pie-icons
```

#### Import the package
Simply import the package in your application where needed:

```js
import pieIcons from '@justeattakeaway/pie-icons';
```

#### Call the APIs
The package exposes a number of APIs for you to use:

```js
const { icons } = pieIcons.default;

icons.x
// {
//    name: 'x',
//    contents: '<line ... /><line ... />`,
//    tags: ['cancel', 'close', 'delete', 'remove'],
//    attrs: {
//      class: 'c-pieIcon c-pieIcon--x',
//      xmlns: 'http://www.w3.org/2000/svg',
//    },
//    toSvg: [Function],
// }

icons.x.toSvg()
// <svg class="c-pieIcon c-pieIcon--x" ...><line ... /><line ... /></svg>

icons.x.toSvg({ class: 'foo bar', 'stroke-width': 1, color: 'red' })
// <svg class="c-pieIcon c-pieIcon--x foo bar" stroke-width="1" color="red" ...><line ... /><line ... /></svg>
```

{% notification {
  type: "information",
  message: "For more information about the APIs in this package, please take a look at the [API reference](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons#api-reference) in the project README."
} %}


---

## React (pie-icons-react)

This package generates an icon set for React applications using the base [pie-icons](https://www.npmjs.com/package/@justeattakeaway/pie-icons) package. The SVGs in `pie-icons` are compiled into React components.

The icons are bundled as CommonJS and ES Modules, to be more easily adopted for modern React Applications.


### Usage

#### Installation
You can install the package using `npm` or `yarn`:

```sh
npm install @justeattakeaway/pie-icons-react --save
```
```sh
yarn add @justeattakeaway/pie-icons-react
```

#### Import into your project
Simply import the icons you need into your project:

```tsx
import { IconAlertTriangleLarge, IconCalendar } from "@justeattakeaway/pie-icons-react";

export default function App() {
  return (
    <div className="App">
      <IconCalendar />
      <IconAlertTriangleLarge />
    </div>
  );
}
```

#### Size

Icons are made available in different size variants:
- small
- large, when its name has the `Large` suffix

Small icons default size is `xs` and can use one of the following pre-determined values for `size`: `xs`, `s`, `m`, `l`, `xl`, and `xxl`. You can learn more about small icon sizes [here](/foundations/iconography/overview/#:~:text=Sizes%20for%20the%20Small%20icon%20set).

Large icons `size` default and minimum value is `32`. Values larger than the minimum must be multiples of `8`, otherwise they will fallback to the default value. You can learn more about large icon sizes [here](/foundations/iconography/overview/#:~:text=Sizes%20for%20the%20Large%20icon%20set).

Example:

```tsx
<IconAlertTriangle size="l" />
<IconAlertTriangleLarge size={40} />
```

{% notification {
  type: "information",
  message: "For more information, please refer to the package [README](https://github.com/justeattakeaway/pie/blob/main/packages/tools/pie-icons-react/README.md)."
} %}

---

## Vue (pie-icons-vue)

This package generates an icon set for Vue.js applications using the base [pie-icons](https://www.npmjs.com/package/@justeattakeaway/pie-icons) package. The SVGs in `pie-icons` are compiled into single file components that can be imported into Vue applications.

{% notification {
  type: "warning",
  message: "The package is fully compatible with Vue 2. To use these icons in Vue 3, you may need to take some extra steps when building your application. Please reach out to **#help-designsystem** for assistance."
} %}

### Usage

#### Installation
You can install the package using `npm` or `yarn`:

```sh
npm install @justeattakeaway/pie-icons-vue --save
```
```sh
yarn add @justeattakeaway/pie-icons-vue
```

#### Import into your project
Simply import the icons you need into your project:

```html
  <template>
      <icon-calendar />
      <icon-alert-triangle-large />
  </template>

  <script>
  import { IconCalendar, IconAlertTriangleLarge } from '@justeattakeaway/pie-icons-vue';

  export default {
      components: {
          IconCalendar,
          IconAlertTriangleLarge
      }
  };

  </script>
  <style>
    svg {
      fill: {PIE_ALIAS_COLOR_TOKEN};
    }
  </style>
  ```

#### Size

Icons are made available in different size variants:
- small
- large, when its name has the `Large` suffix

Small icons default size is `xs` and can use one of the following pre-determined values for `size`: `xs`, `s`, `m`, `l`, `xl`, and `xxl`. You can learn more about small icon sizes [here](/foundations/iconography/overview/#:~:text=Sizes%20for%20the%20Small%20icon%20set).

Large icons `size` default and minimum value is `32`. Values larger than the minimum must be multiples of `8`, otherwise they will fallback to the default value. You can learn more about large icon sizes [here](/foundations/iconography/overview/#:~:text=Sizes%20for%20the%20Large%20icon%20set).

Example:

```js
<IconAlertTriangle size="l" />
<IconAlertTriangleLarge size="40" />
```

{% notification {
  type: "information",
  message: "For more information, please refer to the [package README](https://github.com/justeattakeaway/pie/blob/main/packages/tools/pie-icons-vue/README.md)."
} %}

---
## Web Components (pie-icons-webc)

This package generates a framework-agnostic Web Component icon set for web applications. It uses the base [pie-icons](https://www.npmjs.com/package/@justeattakeaway/pie-icons) package. The SVGs in `pie-icons` are compiled into [Lit](https://lit.dev/) web components.

{% notification {
  type: "warning",
  message: "Our Web Components package is still in **active development** and is not yet production ready. We will be adding integration guides for different frameworks in the near future."
} %}

### Usage - In Lit Components

#### Installation

```sh
npm install @justeattakeaway/pie-icons-webc --save
```
```sh
yarn add @justeattakeaway/pie-icons-webc
```

#### Import into your project
We suggest importing the bundle for an individual component directly.

{% notification {
  type: "information",
  message: "These components are compiled from TypeScript and have type definitions available. Therefore they will work in TypeScript projects."
} %}

```js

```js
import '@justeattakeaway/pie-icons-webc/dist/IconAppRestaurant.js';

export class MyAmazingComponent extends LitElement {
  render () {
    return html`
      <h2>
        This is a heading
        <icon-app-restaurant size="xl" />
      </h2>`;
  }
}
```

#### Size

Icons are made available in different size variants:
- small
- large, when its name has the `Large` suffix

Small icons default size is `xs` and can use one of the following pre-determined values for `size`: `xs`, `s`, `m`, `l`, `xl`, and `xxl`. You can learn more about small icon sizes [here](/foundations/iconography/overview/#:~:text=Sizes%20for%20the%20Small%20icon%20set).

Large icons `size` default and minimum value is `32`. Values larger than the minimum must be multiples of `8`, otherwise they will fallback to the default value. You can learn more about large icon sizes [here](/foundations/iconography/overview/#:~:text=Sizes%20for%20the%20Large%20icon%20set).

Example:

```js
<IconAlertTriangle size="l" />
<IconAlertTriangleLarge size="40" />
```

{% notification {
  type: "information",
  message: "For more information, please refer to the [package README](https://github.com/justeattakeaway/pie/blob/main/packages/tools/pie-icons-webc/README.md)."
} %}
