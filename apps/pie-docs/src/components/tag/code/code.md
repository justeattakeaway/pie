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
  <a href="https://www.npmjs.com/@justeattakeaway/pie-tag">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-tag.svg">
  </a>
</p>

`pie-tag` is a Web Component built using the Lit library. It offers a simple and accessible tag component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-tag` in your application, run the following on your command line:

```shell
# npm
$ npm i @justeattakeaway/pie-tag
```

```shell
# yarn
$ yarn add @justeattakeaway/pie-tag
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

 <iframe
  src="https://webc.pie.design/?path=/story/tag--default&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: 32px;"
></iframe>

## Variants

 <iframe
  src="https://webc.pie.design/?path=/docs/tag--variants&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: 32px;"
></iframe>

## Props

{% componentDetailsTable {
  tableData: props
} %}

Since the component is not interactive, it doesn't have a disabled property. To give the Tag a disabled look, please set the `--tag-opacity` css variable. Recommended opacity level for disabled tag is 0.5.

## Slots

{% componentDetailsTable {
  tableData: slots
} %}

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

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-tag'
```

```html
<!-- pass js file into <script> tag -->
<pie-tag>Label</pie-tag>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.: 

```js
// Vue templates (using Nuxt 3)
import { PieTag } from '@justeattakeaway/pie-tag';

<pie-tag>Label</pie-tag>
```

For React Applications:

```js
// React templates (using Next 13)
import { PieTag } from '@justeattakeaway/pie-tag/dist/react';

<PieTag>Label</PieTag>

```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more examples, see [here](https://github.com/justeattakeaway/pie-aperture/tree/main)."
} %}


## Peer Dependencies

When using `pie-tag`, you will also need to include a couple of dependencies to ensure the component renders as expected.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See the [PIE Wiki](https://github.com/justeattakeaway/pie-aperture/tree/main) for more information on peer dependencies."
} %}

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-tag/CHANGELOG.md)."
} %}
