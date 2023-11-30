---
eleventyNavigation:
    key: Code
    parent: Modal
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-modal">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-modal.svg">
  </a>
</p>

`pie-modal` is a Web Component built using the Lit library. It offers a simple and accessible modal component for web applications, which uses the native HTML dialog element under the hood.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-modal` in your application, run the following on your command line:

```shell
# npm
$ npm i @justeattakeaway/pie-modal
```

```shell
# yarn
$ yarn add @justeattakeaway/pie-modal
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

 <iframe
  src="https://webc.pie.design/?path=/story/modal--default&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: 32px;"
></iframe>

## Props

{% componentDetailsTable {
  tableData: props
} %}

## Legacy browser support

`pie-modal` uses the Dialog element which might not be supported by legacy browsers.

To support them, `pie-modal` uses the [dialog-polyfill](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-modal/README.md#:~:text=modal%20uses%20the-,dialog%2Dpolyfill,-package.%20It%20works) package. It works automatically and doesn't need any setup.

The polyfill comes with a few limitations, as noted on its [documentation page](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-modal/README.md#:~:text=noted%20on%20its-,documentation%20page,-%3A):

Dialogs should not be contained by parents that create a stacking context
 - The browser's chrome may not always be accessible via the tab key
 - Changes to the CSS top/bottom values while open aren't retained
 - For more details, check the package documentation mentioned above.

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-modal'
```

```html
<!-- pass js file into <script> tag -->
<pie-modal heading='My Awesome Heading' headingLevel='h3'>Click me!</pie-modal>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import { PieModal } from '@justeattakeaway/pie-modal';

<PieModal heading="My Awesome Heading" headingLevel="h3">Click me!</PieModal>
```

For React Applications. When using the React version of the component, please make sure you also include React as a dependency in your project as well. See Peer Dependencies section.

```js
// React templates (using Next 13)
import { PieModal } from '@justeattakeaway/pie-modal/dist/react';

<PieModal heading='My Awesome Heading' headingLevel='h3'>Click me!</PieModal>

```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more examples, see [here](https://github.com/justeattakeaway/pie-aperture/tree/main)."
} %}


## Peer Dependencies

When using `pie-modal`, you will also need to include a couple of dependencies to ensure the component renders as expected.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See the [PIE Wiki](https://github.com/justeattakeaway/pie-aperture/tree/main) for more information on peer dependencies."
} %}

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-modal/CHANGELOG.md)."
} %}
