---
eleventyNavigation:
    key: Code
    parent: Divider
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-divider">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-divider.svg">
  </a>
</p>

`pie-divider` is a Web Component built using the Lit library. It offers a simple and accessible divider component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-divider` in your application, run the following on your command line:

```shell
# npm
$ npm i @justeattakeaway/pie-divider
```

```shell
# yarn
$ yarn add @justeattakeaway/pie-divider
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

 <iframe
  src="https://webc.pie.design/?path=/story/divider--default&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: 32px;"
></iframe>

## Variants

 <iframe
  src="https://webc.pie.design/?path=/docs/divider--variants&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: 32px;"
></iframe>

## Props

{% componentDetailsTable {
  tableData: props
} %}

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-divider'
```

```html
<!-- pass js file into <script> tag -->
<pie-divider></pie-divider>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.: 

```js
// Vue templates (using Nuxt 3)
import { PieDivider } from '@justeattakeaway/pie-divider';

<pie-divider></pie-divider>
```

For React Applications:

```js
// React templates (using Next 13)
import { PieDivider } from '@justeattakeaway/pie-divider/dist/react';

<PieDivider></PieDivider>

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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-divider/CHANGELOG.md)."
} %}
