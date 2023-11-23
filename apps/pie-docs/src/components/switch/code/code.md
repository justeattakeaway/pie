---
eleventyNavigation:
    key: Code
    parent: Switch
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-switch">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-switch.svg">
  </a>
</p>

`pie-switch` is a Web Component built using the Lit library. It offers a simple and accessible switch component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-switch` in your application, run the following on your command line:

```shell
# npm
$ npm i @justeattakeaway/pie-switch
```

```shell
# yarn
$ yarn add @justeattakeaway/pie-switch
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

 <iframe
  src="https://webc.pie.design/?path=/story/switch--default&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: 32px;"
></iframe>

## Props

{% componentDetailsTable {
  tableData: props
} %}

## Events

This component emits the `pie-switch-changed` event when switched. In order to add event listening to this component, you can treat it like a native HTML element in your application.

For example, to add a click handler in various templates:

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-switch'
```

```html
<!-- pass js file into <script> tag -->
<pie-switch id="switch" isChecked label="Label" labelPlacement="trailing"></pie-switch>
<script>
document.querySelector('#switch').addEventListener('pie-switch-changed', () => {
    // Code to execute when switch is toggled
});
</script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import { PieSwitch } from '@justeattakeaway/pie-switch';

<pie-switch isChecked label="Label" labelPlacement="trailing" @pie-switch-changed="handleChange"></pie-switch>
```

For React Applications.

```js
// React templates (using Next 13)
import { PieSwitch } from '@justeattakeaway/pie-switch/dist/react';

<PieSwitch isChecked label="Label" labelPlacement="trailing" onPieSwitchChanged={handleChange}></PieSwitch>
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more examples, see [here](https://github.com/justeattakeaway/pie-aperture/tree/main)."
} %}


## Peer Dependencies

When using `pie-switch`, you will also need to include a couple of dependencies to ensure the component renders as expected.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See the [PIE Wiki](https://github.com/justeattakeaway/pie-aperture/tree/main) for more information on peer dependencies."
} %}

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-switch/CHANGELOG.md)."
} %}
