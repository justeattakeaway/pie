---
eleventyNavigation:
    key: Code
    parent: Card
    order: 2
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-card" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-card.svg?label=pie-card">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-card` is a Web Component built using [Lit](https://lit.dev/). It offers a simple, functional and reusable card component for use in web applications.

This component can be easily integrated into a variety of frontend frameworks (or simply plain JavaScript and HTML). Its appearance and functionality can be customised with props.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/story/components-card) instance!"
} %}

## Installation

To install `pie-card` in your application, run one of the following on your command line:

```shell
yarn add @justeattakeaway/pie-webc
```

```shell
npm i @justeattakeaway/pie-webc
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

## Examples

You will need to import the component module in JavaScript, this registers the web component as a custom element within the browser so that you can use it in your HTML.

You can do this by using a standalone script which is referenced by an HTML file, or split across the `<script>` and `<template>` sections if you are using single-file components in a framework like Vue, for example.

### main.js
```js
import '@justeattakeaway/pie-webc/components/card.js';
```

### index.html
```html
<html>
    <body>
        <script type="module" src="/main.js"></script>
        <pie-card
            tag="a"
            href="https://www.example.com"
            target="_blank"
            padding="d">
            Take me to example.com!
        </pie-card>
    </body>
</html>
```

For React Applications:

```jsx
import { PieCard } from '@justeattakeaway/pie-webc/react/card.js';

<PieCard tag="a" href="https://www.example.com" target="_blank" padding="d">
    Take me to example.com!
</PieCard>
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more integration examples, see [here](https://github.com/justeattakeaway/pie-aperture/tree/main)."
} %}


## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-card/CHANGELOG.md) for the full component changelog."
} %}
