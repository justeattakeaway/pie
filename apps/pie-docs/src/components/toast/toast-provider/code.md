---
eleventyNavigation:
    key: Toast Provider
    parent: Toast
    order: 4
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    events: "{% include './events.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-toast-provider" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-toast.svg?label=pie-toast-provider">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-toast-provider` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible toast provider component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

The `pie-toast-provider` component provides centralized management for toast notifications in an application. It ensures that toasts are displayed in [priority order](/components/toast/#priority-queue) based on their variant and actionable state, using a queueing system. The component handles the lifecycle of each toast, including dismissing the current toast and showing the next one.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/toast-provider) instance!"
} %}

## Installation

To install `pie-toast-provider` in your application, run the following on your command line:

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

## Events

{% componentDetailsTable {
  tableData: events
} %}

## Examples

The usage guideline is:

- Place `pie-toast-provider` at the root level of your application or page.
- Use the `toaster` utility from any where in your app to dynamically create toasts.

### Importing the component

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/toast-provider.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-toast-provider></pie-toast-provider>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/toast-provider.js';

<pie-toast-provider></pie-toast-provider>
```

For React Applications:

```jsx
import { PieToastProvider } from '@justeattakeaway/pie-webc/react/toast-provider.js';

<PieToastProvider></PieToastProvider>
```

### Creating Toasts with `toaster`

The `toaster` utility dynamically creates toasts. It can be imported and called from any file or component in your application.

```js
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';

toaster.createToast({
  message: 'This is a success toast!',
  variant: 'success',
  isDismissible: true,
});

```

To clear all active and queued toasts:

```js
toaster.clearToasts();

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
