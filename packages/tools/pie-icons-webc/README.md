# @justeattakeaway/pie-icons-webc
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons-webc) | [Design Documentation](https://pie.design/foundations/iconography/) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-icons-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-icons-webc.svg">
  </a>
</p>

`@justeattakeaway/pie-icons-webc` is a Web Component icon library built using the [Lit library](https://lit.dev/docs/).

This package provides the PIE icon set as importable web components, to make sure that icons are used in accordance with PIE sizing guidelines.

This package takes the icon SVGs from the [pie-icons](https://www.npmjs.com/package/@justeattakeaway/pie-icons) package and compiles them into Lit web components which can be imported into any web application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Vanilla JavaScript](#vanilla-javascript)
    - [Importing a single icon](#importing-a-single-icon)
    - [Importing multiple icons](#importing-multiple-icons)
  - [Lit components](#lit-components)
  - [React](#react)
  - [Vue](#vue)
- [Props](#props)
  - [`size`](#size)
- [Browser support](#browser-support)
- [Contributing](#contributing)
  - [Adding new icons](#adding-new-icons)
  - [Building the module](#building-the-module)
- [Icon library](#icon-library)
- [Bundling](#bundling)

## Installation

To add the module to your project:

**Using Yarn:**

```bash
yarn add @justeattakeaway/pie-icons-webc
```

**Using NPM:**

```bash
npm install @justeattakeaway/pie-icons-webc
```

## Usage

### Vanilla JavaScript

#### Importing a single icon

The recommended approach for registering a single icon is to import it from its individual entry point.

```js
// Recommended
import '@justeattakeaway/pie-icons-webc/dist/IconCalendarFilledLarge.js';
```

The rest of the code does not directly reference an `IconCalendarFilledLarge` object, but the custom element has still been registered in the browser.
It can now be used inside your HTML template (as long as your JavaScript file is being loaded!).

```html
<div>
  <icon-calendar-filled-large></icon-calendar-filled-large>
<div>
```

Alternatively, you can import the class, which extends `HTMLElement` (via `LitElement`).

```js
// Also recommended, if you need to use the imported object.
import { IconCalendarFilledLarge } from '@justeattakeaway/pie-icons-webc/dist/IconCalendarFilledLarge.js';

function renderIcon() {
    // Using the imported class to create a new element
    const iconElement = new IconCalendarFilledLarge();
    document.body.appendChild(iconElement);
}
```

#### Importing multiple icons

The recommended approach for importing multiple icons is to import them one-by-one to keep your application lightweight and performant.

```js
import '@justeattakeaway/pie-icons-webc/dist/IconHeart.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';
```

```html
<div>
  <icon-heart></icon-heart>
  <icon-heart-filled></icon-heart-filled>
</div>
```

Whilst it *is* possible to import all of the icons at once, this is **not recommended** as it will bloat and slow down your application.

Similarly, it is also **not recommended** to import individual icons from the package's main entrypoint, because it is likely that all icons will still be registered as custom elements in the browser.

You may also encounter issues with tree-shaking if you import an object but don't use it.

### Lit components

Importing and using an icon inside a Lit web component is very straightforward.

```js
import '@justeattakeaway/pie-icons-webc/dist/IconAppRestaurant.js';

export class MyAmazingComponent extends LitElement {
  render () {
    return html`
      <h2>
        This is a heading
        <icon-app-restaurant size="xl"></icon-app-restaurant>
      </h2>`;
  }
}
```

### React

Each icon has a separate entrypoint for use in React applications.

```tsx
import { IconAlertTriangleLarge } from "@justeattakeaway/pie-icons-webc/dist/react/IconAlertTriangleLarge.js";
import { IconCalendar } from "@justeattakeaway/pie-icons-webc/dist/react/IconCalendar.js";

export default function App() {
  return (
    <div className="App">
      <IconAlertTriangleLarge fill={PIE_ALIAS_COLOR_TOKEN} />
      <IconCalendar />
    </div>
  );
}
```

### Vue

Note that you don't need to register the icons as Vue components, because they aren't!

```html
<template>
  <div>
    <icon-alert-triangle-large></icon-alert-triangle-large>
    <icon-calendar></icon-calendar>
  </div>
</template>

<script>
import '@justeattakeaway/pie-icons-webc/dist/IconAlertTriangleLarge.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCalendar.js';
</script>
```


## Props

### `size`

Icons are made available in different size variants:
- regular
- large, when its name has the `Large` suffix

A `regular` icon's default size is `xs` and can use one of the following pre-defined values for `size`: `xs`, `s`, `m`, `l`, `xl`, and `xxl`. You can learn more about regular icon sizes [here](https://www.pie.design/foundations/iconography/#sizes-for-the-small-icon-set).

A `large` icon's default (and minimum) `size` is `32`. Values larger than the minimum **must** be multiples of `8`, otherwise the default size will be used. You can learn more about large icon sizes [here](https://www.pie.design/foundations/iconography/#sizes-for-the-large-icon-set).

**Example:**

```js
<icon-alert-triangle size="s"></icon-alert-triangle>
<icon-alert-triangle-large size="80"></icon-alert-triangle-large>
```


## Browser support

The component extends [@justeattakeaway/browserslist-config-pie](https://github.com/justeattakeaway/pie/tree/main/packages/tools/browserslist-config-pie) package for the list of browsers to support.


## Contributing

Before starting, please read our [contributing guide](https://pie.design/engineers/contributing/).

### Adding new icons

Icons should be added as SVGs to the main pie-icons package and published, before simply incrementing the dependency of `pie-icons` in the `pie-icons-webc` package, to generate the new set of Web Components.

The PIE icon set is managed by our PIE Design System team. New icon requests should go through them to ensure that they meet our standards and follow our guidelines. Please reach out on the (internal) `#help-designsystem` Slack channel.

### Building the module

Run `yarn build --filter=pie-icons-webc` from the root of the monorepo.

## Icon library

You can view the full icon library on our [documentation site](https://pie.design/foundations/iconography/library/).

## Bundling
When we build the icons, we run a plugin for Rollup named `rollup-plugin-visualizer`. This generates a file named `stats.html` in the root of the package. This file can be viewed in the browser to visualise the bundled Javascript and better understand what contributes to the size of the final build output.
