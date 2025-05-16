---
eleventyNavigation:
    key: Code
    parent: Icon Button
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-icon-button" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-icon-button.svg?label=pie-icon-button">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-icon-button` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible icon button component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-icon-button) instance!"
} %}

## Installation

To install `pie-icon-button` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-webc
```

```shell
yarn add @justeattakeaway/pie-webc
```

{% componentCodeMoreInformationNotification %}

## Importing Icons

We recommend using the `pie-icons-webc` package alongside `pie-icon-button`. This package contains all of the PIE icons as importable web components and are built to work alongside our other PIE components.

`pie-icon-button` provides a slot into which you can pass your chosen icon, and it will automatically size it to the correct dimensions depending on the `size` of the `pie-icon-button` component.

### Importing an icon with `pie-icons-webc`

To import an icon using `pie-icons-webc`, you should import the icon that you would like to use alongside the `pie-icon-button` component:

```js
import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';
```

Then, in your markup, you would implement the component like this:

```html
<pie-icon-button>
  <icon-close></icon-close>
</pie-icon-button>
```

{% notification {
  type: "warning",
  message: "Icons imported from `pie-icons-webc` can be resized by specifying the size prop, such as `<icon-close size=\"xl\"></icon-close>`. The size prop will have no effect when used inside the `pie-icon-button` component, as the icon is sized by the component."
} %}

## Props

{% componentDetailsTable {
  tableData: props
} %}

## Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';
```

```html
<!-- pass js file into <script> tag -->
<pie-icon-button onclick="e => console.log(e)">
  <icon-close></icon-close>
</pie-icon-button>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte, etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/icon-button.js';

<pie-icon-button @click="handleClick">
  <icon-close></icon-close>
</pie-icon-button>
```

For React Applications:

```jsx
import { PieIconButton } from '@justeattakeaway/pie-webc/react/icon-button.js';
import { IconClose } from '@justeattakeaway/pie-icons-webc/dist/react/IconClose.js';

<PieIconButton onClick={handleClick}>
  <IconClose></IconClose>
</PieIconButton>
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more examples, see [here](https://github.com/justeattakeaway/pie-aperture/tree/main)."
} %}


## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-icon-button/CHANGELOG.md)."
} %}
