---
eleventyNavigation:
    key: Code
    parent: Toast
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    events: "{% include './events.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-toast" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-toast.svg?label=pie-toast">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-toast` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible toast component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-toast) instance!"
} %}

## Installation

To install `pie-toast` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-webc
```

```shell
yarn add @justeattakeaway/pie-webc
```

{% componentCodeMoreInformationNotification %}

## Props

{% componentDetailsTable {
  tableData: props
} %}

## Events

{% componentDetailsTable {
  tableData: events
} %}

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/toast.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-toast message="Message"></pie-toast>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/toast.js';

<pie-toast message="Message"></pie-toast>
```

By default, the toast will auto-dismiss in five seconds. To disable the auto-dismiss functionality, you must set the duration to `null`.

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/toast.js';

<pie-toast message="Message" duration={null}></pie-toast>
```

For React Applications:

```jsx
import { PieToast } from '@justeattakeaway/pie-webc/react/toast.js';

<PieToast message="Message"></PieToast>
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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-toast/CHANGELOG.md)."
} %}
