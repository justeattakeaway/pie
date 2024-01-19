---
eleventyNavigation:
    key: Code
    parent: Icon Button
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-icon-button">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-icon-button.svg">
  </a>
</p>

`pie-icon-button` is a Web Component built using the Lit library. It offers a simple and accessible icon button component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-icon-button` in your application, run the following on your command line:

```shell
# npm
$ npm i @justeattakeaway/pie-icon-button
```

```shell
# yarn
$ yarn add @justeattakeaway/pie-icon-button
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

 <iframe
  src="https://webc.pie.design/?path=/story/icon-button--primary&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: 32px;"
></iframe>

## Variants

 <iframe
  src="https://webc.pie.design/?path=/docs/icon-button--variants&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: 32px;"
></iframe>

## Importing Icons

We recommend using the `pie-icon-button` component alongside the `pie-icons-webc` package. This package contains all of the PIE icons as importable web components and are built to work alongside our other PIE components.

`pie-icon-button` provides a slot into which you can pass your chosen icon, and it will automatically size it to the correct dimensions depending on the `size` of the `pie-icon-button` component.

### Importing an icon with `pie-icons-webc`

To import an icon using `pie-icons-webc`, you should import the icon that you would like to use alongside the `pie-icon-button` component:

```js
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/IconClose';
```

Then, in your markup, you would implement the component like this:

```html
<pie-icon-button><icon-close></icon-close></pie-icon-button>
```

{% notification {
  type: "warning",
  message: "Icons imported from `pie-icons-webc` can be resized by specifying the size prop, such as `<icon-close size=\"xl\"></icon-close>`. The size prop will have no effect when used alongside the `pie-icon-button` component, as the icon is resized with respect to the component size."
} %}

## Props

{% componentDetailsTable {
  tableData: props
} %}

## Events

This component does not use any custom event handlers. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-icon-button';
```

```html
<!-- pass js file into <script> tag -->
<pie-icon-button onclick="e => console.log(e)"><icon-close></icon-close></pie-icon-button>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.: 

```js
// Vue templates (using Nuxt 3)
import { PieIconButton } from '@justeattakeaway/pie-icon-button';

<pie-icon-button @click="handleClick"><icon-close></icon-close></pie-icon-button>
```

For React Applications: 

```js
// React templates (using Next 13)
import { PieIconButton } from '@justeattakeaway/pie-icon-button/dist/react';

<PieIconButton onClick={handleClick}><icon-close></icon-close></PieIconButton>

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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-icon-button/CHANGELOG.md)."
} %}
