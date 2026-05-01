# @justeattakeaway/pie-select
<p align="center">
  <a href="https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-select">
    <img alt="Source code" src="https://img.shields.io/badge/Source%20code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://pie.design/components/select-input">
    <img alt="Design Documentation" src="https://img.shields.io/badge/Design%20Documentation-pie.design-ff8000?style=for-the-badge&logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjAgMjYwIiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTE0OS41IDM1LjZsLTExLjYgMTEuNSA4LjcgOWM0LjggNC45IDkuMyA4LjkgOS45IDguOSAxLjggMCAzMC42LTI5IDI5LjktMzAuMS0xLjEtMS44LTIxLjUtMTAuOS0yNC4zLTEwLjktLjUgMC02LjIgNS4yLTEyLjYgMTEuNnpNOTMgMjUuN2MtNi41IDIuNC0yMC4yIDkuNi0yMC43IDEwLjgtLjMgMSA1LjYgNy42IDE4LjIgMjAuMSAxOC41IDE4LjQgMTguNiAxOC42IDE2LjggMjAuNi0zLjggNC40LTMzLjcgMzMuOC0zNC4yIDMzLjgtLjQgMC04LjctOC4xLTE4LjYtMTgtOS45LTkuOS0xOC41LTE4LTE5LjItMTgtMS40IDAtNy4xIDExLjctOS44IDE5LjlsLTEuNyA1LjMgMTQuNiAxNC43YzggOCAxNC42IDE1LjEgMTQuNiAxNS42IDAgLjYtNi41IDcuNS0xNC40IDE1LjRsLTE0LjQgMTQuNCAxLjUgNS4xYzEuNiA1LjIgNy43IDE4LjMgOS40IDIwLjEuNi42IDE3LjgtMTUuOSA0Ni45LTQ1IDQxLjktNDEuOCA0Ni4xLTQ1LjcgNDcuNy00NC40IDIuMSAxLjcgMjkuOSAyOS41IDMyLjcgMzIuN2wxLjkgMi4yLTExLjQgMTEuNGMtNi4zIDYuMi0xMi4yIDEyLjMtMTMuMyAxMy40LTEuOCAyLjEtMS44IDIuMiA3LjEgMTEuMiA1IDQuOSA5LjMgOSA5LjYgOSAuOSAwIDc5LjctNzguNiA3OS43LTc5LjQgMC0yLjYtOC44LTIxLjUtMTEuMS0yNC4xLS42LS42LTguNSA2LjYtMjAuOCAxOC45LTEyLjkgMTIuOC0yMC4zIDE5LjYtMjEuMSAxOS4xLS43LS40LTIwLjMtMTkuNy00My42LTQzLTIzLjQtMjMuMS00My00Mi4yLTQzLjctNDIuMy0uNi0uMS0xLjkuMS0yLjcuNHpNOTEuNSAxNDVsLTguOSA5IDEzLjMgMTMuMyAxMy4zIDEzLjQtMTguMSAxOC4xYy0xMCAxMC0xOC4xIDE4LjgtMTcuOSAxOS40LjQgMS4zIDE3LjkgMTAuMyAyMS45IDExLjIgMi4yLjYgNC4zLTEuMiAxNy44LTE0LjZsMTUuMi0xNS4yIDQuNiA0LjRjMi41IDIuNCA5LjYgOS41IDE1LjkgMTUuOGwxMS40IDExLjQgNC4zLTEuM2M3LjEtMi4zIDIwLjctOC44IDIwLjctMTAgMC0xLjEtODIuOS04NC04NC04NC0uMyAwLTQuNiA0LjEtOS41IDkuMXpNMjAyLjMgMTQ0LjZjLTQuNiA0LjYtOC4zIDguOC04LjMgOS4zIDAgMS40IDI4IDI5LjEgMjkuNSAyOS4xIDEuNCAwIDcuOS0xMS43IDEwLjUtMTkuM2wxLjgtNS0xMS41LTExLjNjLTYuMy02LjMtMTItMTEuNC0xMi42LTExLjMtLjcgMC00LjkgMy44LTkuNCA4LjV6Ii8+PC9zdmc+">
  </a>
  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-select">
    <img alt="npm version" src="https://img.shields.io/npm/v/@justeattakeaway/pie-select?style=for-the-badge&color=ff8000&logo=npm&logoColor=white&label=npm">
  </a>
  <a href="https://github.com/justeattakeaway/pie/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/npm/l/@justeattakeaway/pie-select?style=for-the-badge">
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
| `assistiveText`| `string`                               | An optional assistive text to display below the select element. Must be provided when the status is `error`.                                                               | `undefined` |
| `status`       | `"default"`, `"error"`                 | The status of the select component / assistive text.                                                                                                                       | `default`   |
| `name`         | `string`                               | The name of the select (used as a key/value pair with `value`). This is required in order to work properly with forms.                                                     | `undefined` |
| `options`      | `array`                                | The options to display in the select. Can be an array of option objects or option group objects. See [Using the options prop](#using-the-options-prop) for more details.   | `[]`        |
| `value`        | `string`                               | The programatically set value of the select. It overrides any option set as selected.                                                                                      | ``          |

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
    value="option2">
  <icon-placeholder slot="leadingIcon"></icon-placeholder>
</pie-select>
```

```js
// Set options programmatically
const select = document.querySelector('pie-select');
select.options = [
  { tag: 'option', text: 'Select an option' },
  { tag: 'option', text: 'Option 1', value: 'option1' },
  { tag: 'option', text: 'Option 2', value: 'option2' }
];
```

**For Native JS Applications, Vue, Angular, Svelte, etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/select.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';

<pie-select
    name="my-select"
    value="option2"
    :options="[
      { tag: 'option', text: 'Select an option' },
      { tag: 'option', text: 'Option 1', value: 'option1' }
      { tag: 'option', text: 'Option 2', value: 'option2' }
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
    value="option2"
    options={[
      { tag: 'option', text: 'Select an option' },
      { tag: 'option', text: 'Option 1', value: 'option1' },
      { tag: 'option', text: 'Option 2', value: 'option2' },
    ]}>
  <IconPlaceholder slot="leadingIcon"></IconPlaceholder>
</PieSelect>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
