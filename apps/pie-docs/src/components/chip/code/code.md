---
eleventyNavigation:
    key: Code
    parent: Chip
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-chip" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-chip.svg?label=pie-chip">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-chip` is a Web Component built using the Lit library. It offers a simple and accessible chip component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-chip` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-webc
```

```shell
yarn add @justeattakeaway/pie-webc
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

 <iframe
  src="https://webc.pie.design/?path=/story/chip--default&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: var(--dt-spacing-f);"
></iframe>

## Variants

 <iframe
  src="https://webc.pie.design/?path=/docs/chip--variants&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: var(--dt-spacing-f);"
></iframe>

## Props

{% componentDetailsTable {
  tableData: props
} %}

## Slots

{% componentDetailsTable {
  tableData: slots
} %}

### Using `pie-icons-webc` with the `pie-chip` icon slot

We recommend using `pie-icons-webc` when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-chip and the icons that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-chip>
    <icon-vegan slot="icon"></icon-vegan>
    String
</pie-chip>
```

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/chip.js'
```

```html
<!-- pass js file into <script> chip -->
<pie-chip>String</pie-chip>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import { PieChip } from '@justeattakeaway/pie-webc/components/chip.js';

<pie-chip>String</pie-chip>
```

For React Applications:

```jsx
import { PieChip } from '@justeattakeaway/pie-webc/react/chip.js';

<PieChip>String</PieChip>
```

```jsx
// React templates (using Next 13)
import { PieChip } from '@justeattakeaway/pie-webc/react/chip';

<PieChip>String</PieChip>
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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-chip/CHANGELOG.md)."
} %}
