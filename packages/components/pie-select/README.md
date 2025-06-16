# @justeattakeaway/pie-select
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-select) | [Design Documentation](https://pie.design/components/select-input) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-select)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-select">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-select.svg">
  </a>
</p>

`@justeattakeaway/pie-select` is a Web Component built using the Lit library. It offers a simple and accessible interactive select input component for web applications.

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
| Prop           | Options                                | Description                                                                                                                                                                | Default     |
|----------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `size`         | `"small"`, `"medium"`, `"large"`       | The size of the select component.                                                                                                                                          | `medium`    |
| `disabled`     | `boolean`                              | Whether the select is disabled.                                                                                                                                            | `false`     |
| `assistiveText`| `string`                               | An optional assistive text to display below the select element. Must be provided when the status is `error`.                                                              | `undefined` |
| `status`       | `"default"`, `"error"`                 | The status of the select component / assistive text.                                                                                                                       | `default`   |
| `name`         | `string`                               | The name of the select (used as a key/value pair with `value`). This is required in order to work properly with forms.                                                    | `undefined` |
| `options`      | `array`                                | The options to display in the select. Can be an array of option objects or option group objects. See [Using the options prop](#using-the-options-prop) for more details. | `[]`        |

#### Using the options prop
The `options` prop accepts an array of option objects or option group objects:

##### Option objects

| Prop       | Options        | Description                                     | Default     |
|------------|----------------|-------------------------------------------------|-------------|
| `tag`      | `"option"`     | Must be `option` to identify this as an option. | `undefined` |
| `text`     | `string`       | The text to display for the option.             | `undefined` |
| `value`    | `string`       | The value for the option.                       | `undefined` |
| `disabled` | `boolean`      | Whether the option is disabled.                 | `false`     |
| `selected` | `boolean`      | Whether the option is selected by default.      | `false`     |

##### Option group objects
| Prop       | Options      | Description                                           | Default     |
|------------|--------------|-------------------------------------------------------|-------------|
| `tag`      | `"optgroup"` | Must be `optgroup` to identify this as an option group. | `undefined` |
| `label`    | `string`     | The label for the group.                             | `undefined` |
| `disabled` | `boolean`    | Whether the entire group is disabled.                | `false`     |
| `options`  | `array`      | Array of option objects within this group.           | `[]`        |

### Slots
| Slot          | Description                                 |
|---------------|---------------------------------------------|
| `leadingIcon` | An icon to display at the start of the select. |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events
| Event   | Description                                 |
|---------|---------------------------------------------|
| `change`| Fires when the selected option is changed.  |

## Usage Examples

> When using icons, we recommend using [@justeattakeaway/pie-icons-webc](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc) to ensure consistency with the rest of the design system.

**For HTML:**

```js
// import as module into a js file that will be loaded on the page where the component is used.
import '@justeattakeaway/pie-webc/components/select.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
```

```html
<pie-select
    name="my-select"
    options="[
      { tag: 'option', text: 'Select an option' },
      { tag: 'option', text: 'Option 1', value: 'option1' }
    ]">
  <icon-placeholder slot="leadingIcon"></icon-placeholder>
</pie-select>
```

**For Native JS Applications, Vue, Angular, Svelte, etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/select.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';

<pie-select
    name="my-select"
    :options="[
      { tag: 'option', text: 'Select an option' },
      { tag: 'option', text: 'Option 1', value: 'option1' }
    ]">
<icon-placeholder slot="leadingIcon"></icon-placeholder>
</pie-select>
```
**For React Applications:**

```jsx
import { PieSelect } from '@justeattakeaway/pie-webc/react/select.js';
import { IconPlaceholder } from '@justeattakeaway/pie-icons-webc/dist/react/IconPlaceholder.js';

<PieSelect
    name="my-select"
    options={[
      { tag: 'option', text: 'Select an option' },
      { tag: 'option', text: 'Option 1', value: 'option1' }
    ]}>
  <IconPlaceholder slot="leadingIcon"></IconPlaceholder>
</PieSelect>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
