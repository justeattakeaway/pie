---
eleventyNavigation:
    key: Code
    parent: Checkbox Group
    order: 2
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
    events: "{% include './events.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-checkbox-group" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-checkbox-group.svg?label=pie-checkbox-group">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-checkbox-group` is a Web Component built using the Lit library.

It is a helper component that groups PieCheckbox components into a visual and functional group.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-checkbox-group` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-webc
```

```shell
yarn add @justeattakeaway/pie-webc
```

## Peer Dependencies

When using `pie-checkbox-group`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

 <iframe
  src="https://webc.pie.design/?path=/story/checkbox-group--default&viewMode=story&shortcuts=true&singleStory=true"
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

## Events

{% componentDetailsTable {
  tableData: events
} %}

## Importing and usage in templates

For Native JS Applications:
```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/checkbox-group.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-checkbox-group>
  <pie-checkbox name="my-checkbox-one">Checkbox Label 1</pie-checkbox>
  <pie-checkbox name="my-checkbox-two">Checkbox Label 2</pie-checkbox>
  <pie-checkbox name="my-checkbox-three">Checkbox Label 3</pie-checkbox>
</pie-checkbox-group>
<script type="module" src="/main.js"></script>
```

For Vue Applications:

```js
// import as module into a js file that will be loaded on the page where the component is used.
import '@justeattakeaway/pie-webc/components/checkbox-group.js';
```

```html
<pie-checkbox-group>
  <pie-checkbox name="my-checkbox-one">Checkbox Label 1</pie-checkbox>
  <pie-checkbox name="my-checkbox-two">Checkbox Label 2</pie-checkbox>
  <pie-checkbox name="my-checkbox-three">Checkbox Label 3</pie-checkbox>
</pie-checkbox-group>
```

For React Applications:

```jsx
import { PieCheckboxGroup } from '@justeattakeaway/pie-webc/react/checkbox-group.js';

<PieCheckboxGroup>
  <PieCheckbox name="my-checkbox-one">Checkbox Label 1</PieCheckbox>
  <PieCheckbox name="my-checkbox-two">Checkbox Label 2</PieCheckbox>
  <PieCheckbox name="my-checkbox-three">Checkbox Label 3</PieCheckbox>
</PieCheckboxGroup>
```

```jsx
// React templates (using Next 13 and SSR)
import { PieCheckboxGroup } from '@justeattakeaway/pie-checkbox-group/dist/react';

<PieCheckboxGroup>
  <PieCheckbox name="my-checkbox-one">Checkbox Label 1</PieCheckbox>
  <PieCheckbox name="my-checkbox-two">Checkbox Label 2</PieCheckbox>
  <PieCheckbox name="my-checkbox-three">Checkbox Label 3</PieCheckbox>
</PieCheckboxGroup>
```

## Forms Usage
Please use the [form label](/components/form-label/) component for adding a label to the Checkbox Group component. Similar to native HTML, the label should be a sibling of the input component and reference the input's `id` attribute using the `for` attribute.

```html
 <PieCheckboxGroup>
  <PieFormLabel slot="label">Choose the way we can contact you:</PieFormLabel>
  <PieCheckbox>
    Contact By Email
  </PieCheckbox>
  <PieCheckbox>
    Contact By Phone
  </PieCheckbox>
</PieCheckboxGroup>
```

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-checkbox-group/CHANGELOG.md)."
} %}
