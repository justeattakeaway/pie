---
eleventyNavigation:
    key: Code
    parent: Template
    order: 4
shouldShowContents: true
eleventyComputed:
    propTableData: "{% include './props.json' %}"
---

## Overview

`pie-button` is a Web Component built using the Lit library. It offers a simple and accessible button component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-button` in your application, run the following on your command line:

```shell
# npm
$ npm i @justeattakeaway/pie-button
```

```shell
# yarn
$ yarn add @justeattakeaway/pie-button
```

 <iframe
  src="http://localhost:6006/?path=/docs/button--pie-button-playground&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="800px"
  style="border: none; margin-top: 24px;"
></iframe>

## Variants

 <iframe
  src="http://localhost:6006/?path=/docs/button--documentation&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="800px"
  style="border: none; background-color: #fcfcfc; margin-top: 24px;"
></iframe>

## Examples

For Native JS Applications, Vue, Angular, Svelte etc.: 

```js
import { PieButton } from '@justeattakeaway/pie-button';
```

For React Applications. When using the React version of the component, please make sure you also include React as a dependency in your project as well. See Peer Dependencies section.

```js
import { PieButton } from '@justeattakeaway/pie-button/dist/react';
```

##### HTML

```html
<!-- Other attributes omitted for clarity -->
<pie-button onclick="e => console.log(e)">Click me!</pie-button>
```

##### Vue templates (using Nuxt 3)

```js
import { PieButton } from '@justeattakeaway/pie-button';

// Other attributes omitted for clarity
<pie-button @click="handleClick">Click me!</pie-button>
```

##### React templates (using Next 13)

```js
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

// Other attributes omitted for clarity
<PieButton onClick={handleClick}>increment</PieButton>

```

## Props

{% simpleTable {
  isFullWidth: true,
  useMonospace: true,
  tableData: propTableData
} %}