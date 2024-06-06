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
  <a href="https://www.npmjs.com/@justeattakeaway/pie-notification">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-notification.svg">
  </a>
</p>

`pie-notification` is a Web Component built using the Lit library. It offers a simple and accessible notification component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-notification` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-notification
```

```shell
yarn add @justeattakeaway/pie-notification
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

 <iframe
  src="https://webc.pie.design/?path=/story/notification--neutral&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: var(--dt-spacing-f);"
></iframe>

## Variants

 <iframe
  src="https://webc.pie.design/?path=/docs/notification--variants&viewMode=story&shortcuts=true&singleStory=true"
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
import '@justeattakeaway/pie-notification'
```

```html
<!-- pass js file into <script> tag -->
<pie-notification title="Heading">Content</pie-notification>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import { PieNotification } from '@justeattakeaway/pie-notification';

<pie-notification title="Heading">Content</pie-notification>
```

For React Applications:

```js
// React templates (using Next 13)
import { PieNotification } from '@justeattakeaway/pie-notification/dist/react';

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
