# @justeattakeaway/pie-radio-group
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-radio-group) | [Design Documentation](https://pie.design/components/radio) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-radio-group)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-radio-group">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-radio-group.svg">
  </a>
</p>

`@justeattakeaway/pie-radio-group` is a Web Component built using the Lit library. It offers a simple and accessible interactive radio group component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Forms Usage](#forms-usage)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties
| Prop           | Options                                      | Description                                                                                                              | Default     |
|----------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-------------|
| `name`         | —                                            | The name associated with the group.                                                                                      | `undefined` |
| `value`        | —                                            | The value of the radio group (used as a key/value pair in HTML forms with `name`).                                       | `""`        |
| `isInline`     | `true`, `false`                              | Inline (horizontal) positioning of radio items.                                                                          | `false`     |
| `disabled`     | `true`, `false`                              | Indicates whether or not the radio group is disabled.                                                                    | `false`     |
| `assistiveText`| —                                            | An optional assistive text to display below the checkbox group.                                                          | `undefined` |
| `status`       | `"default"`, `"success"`, `"error"`          | The status of the radio group component / assistive text. Can be `default`, `success`, or `error`.                       | `"default"` |

### Slots
| Slot      | Description                                                                                      |
|-----------|--------------------------------------------------------------------------------------------------|
| `default` | This should be [`pie-radio-button`](/components/radio) components without any other HTML.        |
| `label`   | To provide a custom label for the radio group. Please use [`pie-form-label`](/components/form-label). |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events
| Event    | Description                                              |
|----------|----------------------------------------------------------|
| `change` | Fires when one of the radio group's state is changed.    |

## Forms Usage

There are two kinds of forms usage to consider:
1. Controlled forms: These are when forms are built using HTML, but controlled via application state. This is a common pattern in React and Vue applications.
2. Uncontrolled forms: These are when forms are built using HTML and the form data is collected natively, usually via the [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) interface.

When using the radio group component, the most important thing to be aware of is that if you are using an uncontrolled form (whether or not it is in a single-paged application or just HTML), you *must* apply the `name` property directly to each radio button inside the group. This ensures it is correctly captured in the `FormData` object when the form is submitted.

When using controlled forms in an framework such as Vue or React, you can simply apply the `name` property to the radio group and omit adding it to each individual radio button.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
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

<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
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

**For React Applications:**

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

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
