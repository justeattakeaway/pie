# @justeattakeaway/pie-list

<p align="center">
  <a href="https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-list">
    <img alt="Source code" src="https://img.shields.io/badge/Source%20code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-list">
    <img alt="npm version" src="https://img.shields.io/npm/v/@justeattakeaway/pie-list?style=for-the-badge&color=ff8000&logo=npm&logoColor=white&label=npm">
  </a>
  <a href="https://github.com/justeattakeaway/pie/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/npm/l/@justeattakeaway/pie-list?style=for-the-badge">
  </a>
</p>

`@justeattakeaway/pie-list` is a Web Component built using the Lit library. It can be easily integrated into various frontend frameworks and customized through a set of properties.

## Table of Contents

- [Installation](#installation)
  - [Importing the component](#importing-the-component)
  - [Peer Dependencies](#peer-dependencies)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

To install `pie-list` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-list

# yarn
$ yarn add @justeattakeaway/pie-list
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).

### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieList } from '@justeattakeaway/pie-list';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-list';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieList } from '@justeattakeaway/pie-list/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.

### Peer Dependencies

> [!IMPORTANT]
> When using `pie-list`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

## Documentation

### Properties

| Property | Type | Default | Description |
|---|---|---|---|
| - | - | - | - |

### Slots

This component does not currently expose any slots.

### CSS Variables

This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

```html
<!-- Native HTML -->
<pie-list></pie-list>

<!-- JSX -->
<PieList></PieList>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
