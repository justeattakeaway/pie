---
eleventyNavigation:
    key: Code
    parent: 'Radio Group'
    order: 2
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
    events: "{% include './events.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-radio-group" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-radio-group.svg?label=pie-radio-group">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-radio-group` is a Web Component built with [Lit](https://lit.dev/), providing a simple and accessible group of [radio buttons](/components/radio) for web applications.

This component integrates easily with various frontend frameworks and can be customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-radio-group) instance!"
} %}

## Installation

To install `pie-radio-group` in your application via `npm` or `yarn`:

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

{% notification {
  type: "warning",
  message: "In React, the change event is similar to the input event. Our components adhere to the web standards definition of the change event, which means it is triggered when the element loses focus after its value has been changed. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)"
} %}

{% componentDetailsTable {
  tableData: events
} %}

## Importing and usage in templates
For HTML:

Please ensure you apply the `name` property to each individual radio button.

```js
import '@justeattakeaway/pie-webc/components/radio-group.js';
import '@justeattakeaway/pie-webc/components/radio.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
```

```html
<pie-radio-group>
    <pie-form-label slot="label">Favourite takeaway:</pie-form-label>
    <pie-radio name="favouriteTakeaway" value="chinese">Chinese</pie-radio>
    <pie-radio name="favouriteTakeaway" value="shawarma">Shawarma</pie-radio>
</pie-radio-group>
```

For Vue applications:
```js
import '@justeattakeaway/pie-webc/components/radio-group.js';
import '@justeattakeaway/pie-webc/components/radio.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
```

```html
<pie-radio-group name="favouriteTakeaway" @change="favouriteTakeaway = $event.target.value">
  <pie-form-label>Your favourite takeaway:</pie-form-label>
  <pie-radio value="chinese">Chinese</pie-radio>
  <pie-radio value="shawarma">Shawarma</pie-radio>
</pie-radio-group>
```
For React Applications:
```jsx
import { PieRadioGroup } from '@justeattakeaway/pie-webc/react/radio-group.js';
import { PieRadio } from '@justeattakeaway/pie-webc/react/radio.js';
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';

<PieRadioGroup name="favouriteTakeaway" onChange={handleFavouriteTakeaway}>
    <PieFormLabel slot="label">Choose a radio button:</PieFormLabel>
    <PieRadio value="chinese">Chinese</PieRadio>
    <PieRadio value="shawarma">Shawarma</PieRadio>
</PieRadioGroup>
```


## Forms usage
{% notification {
  type: "information",
  iconName: "link",
  message: "For general guidance on using our web components within forms, see [our wiki page](https://github.com/justeattakeaway/pie/wiki/Form-Controls#pie-forms-usage)."
} %}

There are two kinds of forms usage to consider:
1. Controlled forms: These are when forms are built using HTML, but controlled via application state. This is a common pattern in React and Vue applications.
2. Uncontrolled forms: These are when forms are built using HTML and the form data is collected natively, usually via the [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) interface.

When using the radio group component, the most important thing to be aware of is that if you are using an uncontrolled form (whether or not it is in a single-paged application or just HTML), you *must* apply the `name` property directly to each radio button inside the group. This ensures it is correctly captured in the `FormData` object when the form is submitted.

When using controlled forms in an framework such as Vue or React, you can simply apply the `name` property to the radio group and omit adding it to each individual radio button.

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-radio-group/CHANGELOG.md)."
} %}
