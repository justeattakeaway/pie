---
eleventyNavigation:
    key: Code
    parent: Thumbnail
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-thumbnail" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-thumbnail.svg?label=pie-thumbnail">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-thumbnail` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible thumbnail component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-thumbnail) instance!"
} %}

## Installation

To install `pie-thumbnail` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-webc
```

```shell
yarn add @justeattakeaway/pie-webc
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Props

{% componentDetailsTable {
  tableData: props
} %}

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/thumbnail.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-thumbnail src="" alt=""></pie-thumbnail>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/thumbnail.js';

<pie-thumbnail src="" alt=""></pie-thumbnail>
```

For React Applications:

```jsx
import { PieThumbnail } from '@justeattakeaway/pie-webc/react/thumbnail.js';

<PieThumbnail src="" alt=""></PieThumbnail>
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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-thumbnail/CHANGELOG.md)."
} %}
