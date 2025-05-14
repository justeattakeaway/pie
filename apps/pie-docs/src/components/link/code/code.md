---
eleventyNavigation:
    key: Code
    parent: Link
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-link" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-link.svg?label=pie-link">
  </a>

   <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
      <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
   </a>
</p>

`pie-link` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible link component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-link) instance!"
} %}

## Installation

To install `pie-link` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-webc
```

```shell
yarn add @justeattakeaway/pie-webc
```

{% componentCodeMoreInformationNotification %}

## Props

{% componentDetailsTable {
  tableData: props
} %}

## Slots

{% componentDetailsTable {
  tableData: slots
} %}

### Using `pie-icons-webc` with the `pie-link` icon slot

We recommend using `pie-icons-webc` when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-link and the icons that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-link>
    <icon-plus-circle slot="icon"></icon-plus-circle>
    Search
</pie-link>
```

## Events

This component does not emit any custom events. However, in order to use event listeners such as `onclick` to this component, you should pass the `tag="button"` prop to the component so it's treated like a native button element while maintaining the link look.

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/link.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-link href="https://www.pie.design">pie.design</pie-link>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/link.js';

<pie-link href="https://www.pie.design">pie.design</pie-link>
```

For React Applications:

```jsx
import { PieLink } from '@justeattakeaway/pie-webc/react/link.js';

<PieLink href="https://www.pie.design">pie.design</PieLink>
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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-link/CHANGELOG.md)."
} %}
