---
eleventyNavigation:
    key: Code
    parent: Template
    order: 4
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
    events: "{% include './events.json' %}"
    methods: "{% include './methods.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-template" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-template.svg?label=pie-template">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`{component}` overview content

## Installation

To install `{component}` in your application, run the following on your command line:

```shell
# npm
$ npm i @justeattakeaway/{component}
```

```shell
# yarn
$ yarn add @justeattakeaway/{component}
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

## Slots

{% componentDetailsTable {
  tableData: slots
} %}

## Events

{% componentDetailsTable {
  tableData: events
} %}

## Methods

{% componentDetailsTable {
  tableData: methods
} %}


## Examples

For HTML:

```html

```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js

```

For React Applications:

```js

```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more examples, see [here](https://github.com/justeattakeaway/pie-aperture/tree/main)."
} %}


## Peer Dependencies

When using `{component}`, you will also need to include a couple of dependencies to ensure the component renders as expected.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See the [PIE Wiki](https://github.com/justeattakeaway/pie-aperture/tree/main) for more information on peer dependencies."
} %}

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/{component}/CHANGELOG.md)."
} %}
