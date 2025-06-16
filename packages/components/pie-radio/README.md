# @justeattakeaway/pie-radio

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-radio) | [Design Documentation](https://pie.design/components/radio) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-radio)
<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-radio">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-radio.svg">
  </a>
</p>

`@justeattakeaway/pie-radio` is a Web Component built using the Lit library. It offers a simple and accessible radio button component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties
| Prop            | Options                        | Description                                                                                                                                                                                                                                         | Default     |
|------------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `checked`        | `true`, `false`                | The checked state of the radio.                                                                                                                                                                                                                     | `false`     |
| `defaultChecked` | `true`, `false`                | The default checked state of the radio (not necessarily the same as the current checked state). Used when the radio is part of a form that is reset.                                                                                               | `false`     |
| `disabled`       | `true`, `false`                | Same as the HTML `disabled` attribute — indicates whether or not the radio is disabled.                                                                                                                                                             | `false`     |
| `name`           | `string`                       | The name of the radio (used as a key/value pair with `value`). This is required in order to work properly with forms.                                                                                                                              | `undefined` |
| `required`       | `true`, `false`                | Same as the native `required` attribute. If any radio button in a same-named group has the `required` attribute, a radio button in that group must be checked, although it doesn't have to be the one with the attribute applied.                   | `false`     |
| `value`          | `string`                       | The value of the radio (used as a key/value pair in HTML forms with `name`).                                                                                                                                                                        | `undefined` |
| `status`         | `"default"`, `"error"`         | The status of the radio component. Can be `default` or `error`.                                                                                                                                                                                     | `"default"` |

### Slots
| Slot      | Description                                 |
|-----------|---------------------------------------------|
| `default` | The default slot is used for the radio label text. |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events
| Event     | Description                                              |
|-----------|----------------------------------------------------------|
| `change`  | Fires when the radio is checked (but not when unchecked).|
| `input`   | Should fire whenever a user toggles the radio.           |

## Usage Examples

> ⚠️ It is likely you will want to use this component inside of our [Radio Group component](https://webc.pie.design/?path=/story/components-radio-group), which allows you to group radio buttons together and manage their state and keyboard navigation.

**For HTML:**

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

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/radio.js';

<pie-radio :checked="checked" value="value" @change="handleRadioChange"></pie-radio>
```

**For React Applications:**

```jsx
import { PieRadio } from '@justeattakeaway/pie-webc/react/radio.js';

<PieRadio
    checked={isRadioChecked}
    value="value"
    onInput={handleRadioInput}>
    {`checked: ${isRadioChecked}`}
</PieRadio>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
