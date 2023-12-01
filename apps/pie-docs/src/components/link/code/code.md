---
eleventyNavigation:
    key: Code
    parent: Link
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-link">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-link.svg">
  </a>
</p>

`pie-link` is a Web Component built using the Lit library. It offers a simple and accessible link component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-link` in your application, run the following on your command line:

```shell
# npm
$ npm i @justeattakeaway/pie-link
```

```shell
# yarn
$ yarn add @justeattakeaway/pie-link
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

 <iframe
  src="https://webc.pie.design/?path=/story/link--default&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: 32px;"
></iframe>

## Variants

 <iframe
  src="https://webc.pie.design/?path=/docs/link--variants&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
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

### Using `pie-icons-webc` with the `pie-link` icon slot

We recommend using `pie-icons-webc` when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-link and the icons that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-link>
    <icon-plus-circle slot="icon"></icon-plus-circle>
    Search
</pie-link>
```

## Events

This component does not use any custom event handlers. However, in order to use event listeners such as `onclick` to this component, you should pass the `tag="button"` prop to the component so it's treated like a native button element while maintaining the link look.

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-link'
```

```html
<!-- pass js file into <script> tag -->
<pie-link href="https://www.pie.design">pie.design</pie-link>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.: 

```js
// Vue templates (using Nuxt 3)
import { PieLink } from '@justeattakeaway/pie-link';

<pie-link href="https://www.pie.design">pie.design</pie-link>
```

For React Applications:

```js
// React templates (using Next 13)
import { PieLink } from '@justeattakeaway/pie-link/dist/react';

<PieLink href="https://www.pie.design">pie.design</PieLink>

```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more examples, see [here](https://github.com/justeattakeaway/pie-aperture/tree/main)."
} %}


## Peer Dependencies

When using `pie-link`, you will also need to include a couple of dependencies to ensure the component renders as expected.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See the [PIE Wiki](https://github.com/justeattakeaway/pie-aperture/tree/main) for more information on peer dependencies."
} %}

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-link/CHANGELOG.md)."
} %}
