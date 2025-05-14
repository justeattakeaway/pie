---
eleventyNavigation:
    key: Code
    parent: Chip
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
    events: "{% include './events.json' %}"
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

`pie-chip` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible chip component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-chip) instance!"
} %}

## Installation

To install `pie-chip` in your application, run the following on your command line:

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

## Events

When the chip component is not dismissible, it does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

When the component is dismissible, you will need to listen to the close event listed in the table below.

{% componentDetailsTable {
  tableData: events
} %}

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
import '@justeattakeaway/pie-webc/components/chip.js';

<pie-chip>String</pie-chip>
```

For React Applications:

```jsx
import { PieChip } from '@justeattakeaway/pie-webc/react/chip.js';

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
