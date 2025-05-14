---
eleventyNavigation:
    key: Code
    parent: Notification
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
    events: "{% include './events.json' %}"
---

## Overview
<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-notification" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-notification.svg?label=pie-notification">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-notification` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible notification component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-notification) instance!"
} %}

## Installation

To install `pie-notification` in your application, run the following on your command line:

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

The table below provides a list of events you can listen for:

{% componentDetailsTable {
tableData: events
} %}

### Using `pie-icons-webc` with the `pie-notification` icon slot

We recommend using `pie-icons-webc` when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-notification and the icons that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-notification>
    <icon-vegan slot="icon"></icon-vegan>
    Label
</pie-notification>
```

{% notification {
  type: "information",
  message: "The `info`, `success`, `error`, and `warning` variants come with default icons. These icons will be overridden if an icon slot is provided."
} %}

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/notification.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-notification title="Heading">Content</pie-notification>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/notification.js';

<pie-notification title="Heading">Content</pie-notification>
```

For React Applications:

```jsx
import { PieNotification } from '@justeattakeaway/pie-webc/react/notification.js';

<PieNotification title="Heading">Content</PieNotification>
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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-notification/CHANGELOG.md)."
} %}
