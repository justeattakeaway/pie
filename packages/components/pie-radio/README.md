# @justeattakeaway/pie-radio

<p align="center">
  <a href="https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-radio">
    <img alt="Source code" src="https://img.shields.io/badge/Source%20code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://pie.design/components/radio">
    <img alt="Design Documentation" src="https://img.shields.io/badge/Design%20Documentation-pie.design-ff8000?style=for-the-badge&logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjAgMjYwIiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTE0OS41IDM1LjZsLTExLjYgMTEuNSA4LjcgOWM0LjggNC45IDkuMyA4LjkgOS45IDguOSAxLjggMCAzMC42LTI5IDI5LjktMzAuMS0xLjEtMS44LTIxLjUtMTAuOS0yNC4zLTEwLjktLjUgMC02LjIgNS4yLTEyLjYgMTEuNnpNOTMgMjUuN2MtNi41IDIuNC0yMC4yIDkuNi0yMC43IDEwLjgtLjMgMSA1LjYgNy42IDE4LjIgMjAuMSAxOC41IDE4LjQgMTguNiAxOC42IDE2LjggMjAuNi0zLjggNC40LTMzLjcgMzMuOC0zNC4yIDMzLjgtLjQgMC04LjctOC4xLTE4LjYtMTgtOS45LTkuOS0xOC41LTE4LTE5LjItMTgtMS40IDAtNy4xIDExLjctOS44IDE5LjlsLTEuNyA1LjMgMTQuNiAxNC43YzggOCAxNC42IDE1LjEgMTQuNiAxNS42IDAgLjYtNi41IDcuNS0xNC40IDE1LjRsLTE0LjQgMTQuNCAxLjUgNS4xYzEuNiA1LjIgNy43IDE4LjMgOS40IDIwLjEuNi42IDE3LjgtMTUuOSA0Ni45LTQ1IDQxLjktNDEuOCA0Ni4xLTQ1LjcgNDcuNy00NC40IDIuMSAxLjcgMjkuOSAyOS41IDMyLjcgMzIuN2wxLjkgMi4yLTExLjQgMTEuNGMtNi4zIDYuMi0xMi4yIDEyLjMtMTMuMyAxMy40LTEuOCAyLjEtMS44IDIuMiA3LjEgMTEuMiA1IDQuOSA5LjMgOSA5LjYgOSAuOSAwIDc5LjctNzguNiA3OS43LTc5LjQgMC0yLjYtOC44LTIxLjUtMTEuMS0yNC4xLS42LS42LTguNSA2LjYtMjAuOCAxOC45LTEyLjkgMTIuOC0yMC4zIDE5LjYtMjEuMSAxOS4xLS43LS40LTIwLjMtMTkuNy00My42LTQzLTIzLjQtMjMuMS00My00Mi4yLTQzLjctNDIuMy0uNi0uMS0xLjkuMS0yLjcuNHpNOTEuNSAxNDVsLTguOSA5IDEzLjMgMTMuMyAxMy4zIDEzLjQtMTguMSAxOC4xYy0xMCAxMC0xOC4xIDE4LjgtMTcuOSAxOS40LjQgMS4zIDE3LjkgMTAuMyAyMS45IDExLjIgMi4yLjYgNC4zLTEuMiAxNy44LTE0LjZsMTUuMi0xNS4yIDQuNiA0LjRjMi41IDIuNCA5LjYgOS41IDE1LjkgMTUuOGwxMS40IDExLjQgNC4zLTEuM2M3LjEtMi4zIDIwLjctOC44IDIwLjctMTAgMC0xLjEtODIuOS04NC04NC04NC0uMyAwLTQuNiA0LjEtOS41IDkuMXpNMjAyLjMgMTQ0LjZjLTQuNiA0LjYtOC4zIDguOC04LjMgOS4zIDAgMS40IDI4IDI5LjEgMjkuNSAyOS4xIDEuNCAwIDcuOS0xMS43IDEwLjUtMTkuM2wxLjgtNS0xMS41LTExLjNjLTYuMy02LjMtMTItMTEuNC0xMi42LTExLjMtLjcgMC00LjkgMy44LTkuNCA4LjV6Ii8+PC9zdmc+">
  </a>
  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-radio">
    <img alt="npm version" src="https://img.shields.io/npm/v/@justeattakeaway/pie-radio?style=for-the-badge&color=ff8000&logo=npm&logoColor=white&label=npm">
  </a>
  <a href="https://github.com/justeattakeaway/pie/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/npm/l/@justeattakeaway/pie-radio?style=for-the-badge">
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
