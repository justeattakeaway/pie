---
eleventyNavigation:
    key: Code
    parent: Modal
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
    events: "{% include './events.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-modal" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-modal.svg?label=pie-modal">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-modal` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible modal component for web applications, which uses the native HTML dialog element under the hood.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/story/components-modal) instance!"
} %}

## Installation

To install `pie-modal` in your application, run the following on your command line:

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

## Slots

{% componentDetailsTable {
  tableData: slots
} %}

## Events

{% componentDetailsTable {
  tableData: events
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
import '@justeattakeaway/pie-webc/components/modal.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-modal heading='My Awesome Heading' headingLevel='h3'>Click me!</pie-modal>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/modal.js';

<pie-modal heading="My Awesome Heading" headingLevel="h3">Click me!</pie-modal>
```

For React Applications. When using the React version of the component, please make sure you also include React as a dependency in your project as well. See Peer Dependencies section.

```jsx
import { PieModal } from '@justeattakeaway/pie-webc/react/modal.js';

<PieModal heading='My Awesome Heading' headingLevel='h3'>Click me!</PieModal>
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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-modal/CHANGELOG.md)."
} %}
