---
eleventyNavigation:
    key: Code
    parent: Tag
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-tag" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-tag.svg?label=pie-tag">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-tag` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible tag component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-tag) instance!"
} %}

## Installation

To install `pie-tag` in your application, run the following on your command line:

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

The interactive tag component does not emit any custom events. In order to add event listening to it, you can treat the component like a native HTML element in your application.

### Using `pie-icons-webc` with the `pie-tag` icon slot

We recommend using `pie-icons-webc` when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-tag and the icons that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-tag>
    <icon-vegan slot="icon"></icon-vegan>
    Label
</pie-tag>
```

#### Icon only tags

Icon only mode is inferred when the `icon` slot is used without any text content and the `size` property is assigned as `large`.

Using the component with the mentioned settings will implicitly disable the `isInteractive` property.

```html
<pie-tag size="large">
    <icon-vegan slot="icon"></icon-vegan>
</pie-tag>
```

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/tag.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-tag>Label</pie-tag>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/tag.js';

<pie-tag>Label</pie-tag>
```

For React Applications:

```jsx
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';

<PieTag>Label</PieTag>
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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-tag/CHANGELOG.md)."
} %}
