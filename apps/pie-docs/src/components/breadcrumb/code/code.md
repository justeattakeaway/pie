---
eleventyNavigation:
    key: Code
    parent: Breadcrumb
    order: 3
shouldShowContents: true
eleventyComputed:
    breadcrumbProps: "{% include './breadcrumb-props.json' %}"
    breadcrumbItemProps: "{% include './breadcrumb-item-props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-breadcrumb" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-breadcrumb.svg?label=pie-breadcrumb">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-breadcrumb` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible breadcrumb navigation component for web applications. The component exports a sub-component called `pie-breadcrumb-item` which is used to create individual items within the breadcrumb.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-breadcrumb) instance!"
} %}

## Installation

To install `pie-breadcrumb` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-webc
```

```shell
yarn add @justeattakeaway/pie-webc
```

{% componentCodeMoreInformationNotification %}

## Props

### `pie-breadcrumb` Props

{% componentDetailsTable {
  tableData: breadcrumbProps
} %}

### `pie-breadcrumb-item` Props

{% componentDetailsTable {
  tableData: breadcrumbItemProps
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
import '@justeattakeaway/pie-webc/components/breadcrumb.js'
import '@justeattakeaway/pie-webc/components/breadcrumb-item.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-breadcrumb>
  <pie-breadcrumb-item href="/">Home</pie-breadcrumb-item>
  <pie-breadcrumb-item href="/category">Category</pie-breadcrumb-item>
  <pie-breadcrumb-item>Current Page</pie-breadcrumb-item>
</pie-breadcrumb>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/breadcrumb.js';
import '@justeattakeaway/pie-webc/components/breadcrumb-item.js';

<pie-breadcrumb>
  <pie-breadcrumb-item href="/">Home</pie-breadcrumb-item>
  <pie-breadcrumb-item href="/category">Category</pie-breadcrumb-item>
  <pie-breadcrumb-item>Current Page</pie-breadcrumb-item>
</pie-breadcrumb>
```

For React Applications:

```jsx
import { PieBreadcrumb } from '@justeattakeaway/pie-webc/react/breadcrumb.js';
import { PieBreadcrumbItem } from '@justeattakeaway/pie-webc/react/breadcrumb-item.js';

<PieBreadcrumb>
  <PieBreadcrumbItem href="/">Home</PieBreadcrumbItem>
  <PieBreadcrumbItem href="/category">Category</PieBreadcrumbItem>
  <PieBreadcrumbItem>Current Page</PieBreadcrumbItem>
</PieBreadcrumb>
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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-breadcrumb/CHANGELOG.md)."
} %}