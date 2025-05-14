---
eleventyNavigation:
    key: Code
    parent: Radio
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
    events: "{% include './events.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-radio" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-radio.svg?label=pie-radio">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-radio` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible radio button component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/story/components-radio) instance!"
} %}

## Installation

To install `pie-radio` in your application, run the following on your command line:

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

## Examples

{% notification {
  type: "information",
  iconName: "engineers",
  message: "When using multiple radio buttons, you will want to use the [Radio Group component](/components/radio-group/)"
} %}


For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/radio.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-radio></pie-radio>
<script>
    const pieRadio = document.querySelector('pie-radio');
    // Properties can be set like any JS object
    pieRadio.checked = checked;
</script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/radio.js';

// Setup code omitted
<pie-radio :checked="checked" value="value" @change="handleRadioChange"></pie-radio>
```

For React Applications. When using the React version of the component, please make sure you also include React as a dependency in your project as well. See Peer Dependencies section.

```jsx
import { PieRadio } from '@justeattakeaway/pie-webc/react/radio.js';

// Setup code omitted
<PieRadio
    checked={isRadioChecked}
    value="value"
    onInput={handleRadioInput}>
    {`checked: ${isRadioChecked}`}
</PieRadio>
```
For NextJS 13, please directly import from the individual component package. All other template usage is the same as above.
```jsx
// React templates (using Next 13 and SSR)
import { PieRadio } from '@justeattakeaway/pie-radio/dist/react';
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
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-radio/CHANGELOG.md)."
} %}
