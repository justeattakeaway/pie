<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-checkbox-group">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-checkbox-group.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-checkbox-group)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)

## pie-checkbox-group

`pie-checkbox-group` is a Web Component built using the Lit library.

It is a helper component that groups PieCheckbox components into a visual and functional group.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-checkbox-group` in your application, run the following on your command line:

```bash
$ npm i @justeattakeaway/pie-checkbox-group
```
```bash
$ yarn add @justeattakeaway/pie-checkbox-group
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieCheckboxGroup } from '@justeattakeaway/pie-checkbox-group';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-checkbox-group';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieCheckboxGroup } from '@justeattakeaway/pie-checkbox-group/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-checkbox-group`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.


## Props

| Property | Type | Default | Description |
|---|---|---|---|
| `name` | string | - | The name associated with the group. |
| `label` | string | - | The label value of the component |
| `disabled` | boolean | - | Same as the HTML disabled attribute - indicates whether or not the checkbox group is disabled. |
| `assistiveText` | `string` | - | Allows assistive text to be displayed below the checkbox group. |
| `status` | `'default'`, `'error'`, `'success'` | `'default'` | The status of the checkbox group / assistive text. If you use `status` you must provide an `assistiveText` prop value for accessibility purposes. |


In your markup or JSX, you can then use these to set the properties for the `pie-checkbox-group` component:

```html
<!-- Native HTML -->
<pie-checkbox-group name="TESTNAME">
  <pie-checkbox
    name="my-checkbox-one"
    label="Checkbox Label 1">
  </pie-checkbox>
  <pie-checkbox
      name="my-checkbox-two"
      label="Checkbox Label 2">
  </pie-checkbox>
  <pie-checkbox
      name="my-checkbox-three"
      label="Checkbox Label 3">
  </pie-checkbox>
</pie-checkbox-group>

<!-- JSX -->
<PieCheckboxGroup name="TESTNAME">
  <PieCheckbox
    name="my-checkbox-one"
    label="Checkbox Label 1">
  </PieCheckbox>
  <PieCheckbox
      name="my-checkbox-two"
      label="Checkbox Label 2">
  </PieCheckbox>
  <PieCheckbox
      name="my-checkbox-three"
      label="Checkbox Label 3">
  </PieCheckbox>
</PieCheckboxGroup>
```

## Events
| Event | Type | Description |
|-------|------|-------------|
| `pie-checkbox-group-disabled` | `CustomEvent` | Triggered after the disabled state of the checkbox group changes. |

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).