---
eleventyNavigation:
    key: Code
    parent: Form Label
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-form-label" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-form-label.svg?label=pie-form-label">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-form-label` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible form label component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/form-label) instance!"
} %}

## Installation

To install `pie-form-label` in your application, run the following on your command line:

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

## Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/form-label.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-form-label for="name-input" trailing="X of X">Name</pie-form-label>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/link.js';

<pie-form-label for="name-input" trailing="X of X">Name</pie-form-label>
```

For React Applications:

```jsx
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';

<PieFormLabel for="name-input" trailing="X of X">Name</PieFormLabel>
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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-form-label/CHANGELOG.md)."
} %}
