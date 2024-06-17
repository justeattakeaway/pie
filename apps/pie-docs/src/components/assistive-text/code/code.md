---
eleventyNavigation:
    key: Code
    parent: Assistive Text
    order: 2
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-assistive-text">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-assistive-text.svg">
  </a>
</p>

`pie-assistive-text` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-assistive-text` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-assistive-text
```

```shell
yarn add @justeattakeaway/pie-assistive-text
```

## Peer Dependencies

When using `pie-assistive-text`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

 <iframe
  src="https://webc.pie.design/?path=/story/assistive-text--default&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: var(--dt-spacing-f);"
></iframe>

## Variants

### Success

<iframe
src="https://webc.pie.design/?path=/docs/assistive-text--success&viewMode=story&shortcuts=true&singleStory=true"
width="100%"
height="600px"
style="border: none; margin-top: var(--dt-spacing-f);"
></iframe>

### Error

<iframe
src="https://webc.pie.design/?path=/docs/assistive-text--error&viewMode=story&shortcuts=true&singleStory=true"
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

## Importing and usage in templates

For Native JS Applications:
```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-assistive-text'
```

```html
<!-- pass js file into <script> tag -->
<pie-assistive-text href="https://www.pie.design">pie.design</pie-assistive-text>
<script type="module" src="/main.js"></script>
```

For Vue Applications:

```js
// import as module into a js file that will be loaded on the page where the component is used.
import '@justeattakeaway/pie-assistive-text';
```

```html
<pie-assistive-text
  variant="success">
  Your request has been submitted.
</pie-assistive-text>
```

For React Applications:

```jsx
import { PieTextInput } from '@justeattakeaway/pie-assistive-text/dist/react';

<pie-assistive-text
  variant="success">
  Your request has been submitted.
</pie-assistive-text>
```

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-assistive-text/CHANGELOG.md)."
} %}
