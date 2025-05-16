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
  <a href="https://www.npmjs.com/@justeattakeaway/pie-assistive-text" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-assistive-text.svg?label=pie-assistive-text">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-assistive-text` is a Web Component built using [Lit](https://lit.dev/).

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/story/components-assistive-text) instance!"
} %}

## Installation

To install `pie-assistive-text` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-webc
```

```shell
yarn add @justeattakeaway/pie-webc
```

### Peer Dependencies

When using `pie-assistive-text`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

{% componentCodeMoreInformationNotification %}

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
import '@justeattakeaway/pie-webc/components/assistive-text.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-assistive-text variant="success">Your request has been submitted.</pie-assistive-text>
<script type="module" src="/main.js"></script>
```

For Vue Applications:

```js
// import as module into a js file that will be loaded on the page where the component is used.
import '@justeattakeaway/pie-webc/components/assistive-text.js';
```

```html
<pie-assistive-text
  variant="success">
  Your request has been submitted.
</pie-assistive-text>
```

For React Applications:

```jsx
import { PieAssistiveText } from '@justeattakeaway/pie-webc/react/assistive-text.js';

<PieAssistiveText
  variant="success">
  Your request has been submitted.
</PieAssistiveText>
```

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-assistive-text/CHANGELOG.md)."
} %}
