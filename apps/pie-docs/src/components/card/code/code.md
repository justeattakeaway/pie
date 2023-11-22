---
eleventyNavigation:
    key: Code
    parent: Card
    order: 2
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/{component}">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-card.svg">
  </a>
</p>

`pie-card` is a Web Component built using Lit. It offers a simple, functional and reusable card component for use in web applications.

This component can be easily integrated into a variety of frontend frameworks (or simply plain JavaScript and HTML). Its appearance and functionality can be customised with props.

## Installation

To install `pie-card` in your application, run one of the following on your command line:

```shell
# yarn
$ yarn add @justeattakeaway/pie-card
```

```shell
# npm
$ npm i @justeattakeaway/pie-card
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

<iframe
  src="https://webc.pie.design/?path=/story/card--default&viewMode=story&shortcuts=false&singleStory=true"
  width="100%",
  height="600px"
  style="border: none; margin-top: 32px;"
></iframe>

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
import '@justeattakeaway/pie-card';
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

For React Applications. When using the React version of the component, please make sure you also include React as a dependency in your project as well. See Peer Dependencies section.

```jsx
import { PieCard } from '@justeattakeaway/pie-card/dist/react';

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
