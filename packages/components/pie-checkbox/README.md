<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-checkbox">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-checkbox.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-checkbox)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Events](#events)
7. [Contributing](#contributing)

## pie-checkbox

`pie-checkbox` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-checkbox` in your application, run the following on your command line:

```bash
npm i @justeattakeaway/pie-checkbox

yarn add @justeattakeaway/pie-checkbox
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieCheckbox } from '@justeattakeaway/pie-checkbox';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-checkbox';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieCheckbox } from '@justeattakeaway/pie-checkbox/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-checkbox`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.


## Props

| Property | Type  | Default | Description |
|---|---|---|---|
| `name` | `string` | - | The name of the checkbox (used as a key/value pair with `value`). This is required in order to work properly with forms. |
| `value` | `string`  `'on'` | The value of the input (used as a key/value pair in HTML forms with `name`). If not passed falls back to the html default value "on". |
| `required` | `boolean` | `false` | If true, the checkbox is required to be checked before submitting the form. If it is not in checked state, the component validity state will be invalid. |
| `label` | `string` | `''` | Text associated with the checkbox. If there is no label to provide, make sure to pass label, labelledby or describedby to the aria property. |
| `disabled` | `boolean` | `false` | Indicates whether or not the checkbox is disabled. |
| `disabledByParent` | `boolean` | `false` | Indicates whether or not the checkbox is disabled by the parent. |
| `checked` | `boolean` | `false` | Controls whether or not the checkbox is checked. |
| `defaultChecked` | `boolean` | `false` | Sets the default checked state for the checkbox. This does not directly set the initial checked state when the page loads, use `checked` for that. If the checkbox is inside a form which is reset, the `checked` state will be updated to match `defaultChecked`. |
| `indeterminate` | `boolean` | `false` | Indicates whether the checkbox visually shows a horizontal line in the box instead of a check/tick. It has no impact on whether the checkbox's value is used in a form submission. That is decided by the checked state, regardless of the indeterminate state. |
| `aria` | `object` | {} | accepts `label`, `labeledby` and `describedby` keys with string values. |
| `assistiveText` | `string` | `''` | Allows assistive text to be displayed below the checkbox element. |
| `status` | `'default'`, `'error'`, `'success'` | `'default'` | The status of the checkbox component / assistive text. If you use `status` you must provide an `assistiveText` prop value for accessibility purposes. |

In your markup or JSX, you can then use these to set the properties for the `pie-checkbox` component:

```html
<!-- Native HTML -->
<pie-checkbox
    name="mycheckbox"
    label="Checkbox Label">
</pie-checkbox>

<!-- JSX -->
<PieCheckbox
    name="mycheckbox"
    label="Checkbox Label">
</PieCheckbox>
```

## Events
| Event | Type | Description |
|-------|------|-------------|
| `change` | `CustomEvent` | Triggered after the checked state of a checkbox changes. |

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
