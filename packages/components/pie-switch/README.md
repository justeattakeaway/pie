# @justeattakeaway/pie-switch
<p align="center">
  <a href="https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-switch">
    <img alt="Source code" src="https://img.shields.io/badge/Source%20code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://pie.design/components/switch">
    <img alt="Design Documentation" src="https://img.shields.io/badge/Design%20Documentation-pie.design-ff8000?style=for-the-badge&logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjAgMjYwIiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTE0OS41IDM1LjZsLTExLjYgMTEuNSA4LjcgOWM0LjggNC45IDkuMyA4LjkgOS45IDguOSAxLjggMCAzMC42LTI5IDI5LjktMzAuMS0xLjEtMS44LTIxLjUtMTAuOS0yNC4zLTEwLjktLjUgMC02LjIgNS4yLTEyLjYgMTEuNnpNOTMgMjUuN2MtNi41IDIuNC0yMC4yIDkuNi0yMC43IDEwLjgtLjMgMSA1LjYgNy42IDE4LjIgMjAuMSAxOC41IDE4LjQgMTguNiAxOC42IDE2LjggMjAuNi0zLjggNC40LTMzLjcgMzMuOC0zNC4yIDMzLjgtLjQgMC04LjctOC4xLTE4LjYtMTgtOS45LTkuOS0xOC41LTE4LTE5LjItMTgtMS40IDAtNy4xIDExLjctOS44IDE5LjlsLTEuNyA1LjMgMTQuNiAxNC43YzggOCAxNC42IDE1LjEgMTQuNiAxNS42IDAgLjYtNi41IDcuNS0xNC40IDE1LjRsLTE0LjQgMTQuNCAxLjUgNS4xYzEuNiA1LjIgNy43IDE4LjMgOS40IDIwLjEuNi42IDE3LjgtMTUuOSA0Ni45LTQ1IDQxLjktNDEuOCA0Ni4xLTQ1LjcgNDcuNy00NC40IDIuMSAxLjcgMjkuOSAyOS41IDMyLjcgMzIuN2wxLjkgMi4yLTExLjQgMTEuNGMtNi4zIDYuMi0xMi4yIDEyLjMtMTMuMyAxMy40LTEuOCAyLjEtMS44IDIuMiA3LjEgMTEuMiA1IDQuOSA5LjMgOSA5LjYgOSAuOSAwIDc5LjctNzguNiA3OS43LTc5LjQgMC0yLjYtOC44LTIxLjUtMTEuMS0yNC4xLS42LS42LTguNSA2LjYtMjAuOCAxOC45LTEyLjkgMTIuOC0yMC4zIDE5LjYtMjEuMSAxOS4xLS43LS40LTIwLjMtMTkuNy00My42LTQzLTIzLjQtMjMuMS00My00Mi4yLTQzLjctNDIuMy0uNi0uMS0xLjkuMS0yLjcuNHpNOTEuNSAxNDVsLTguOSA5IDEzLjMgMTMuMyAxMy4zIDEzLjQtMTguMSAxOC4xYy0xMCAxMC0xOC4xIDE4LjgtMTcuOSAxOS40LjQgMS4zIDE3LjkgMTAuMyAyMS45IDExLjIgMi4yLjYgNC4zLTEuMiAxNy44LTE0LjZsMTUuMi0xNS4yIDQuNiA0LjRjMi41IDIuNCA5LjYgOS41IDE1LjkgMTUuOGwxMS40IDExLjQgNC4zLTEuM2M3LjEtMi4zIDIwLjctOC44IDIwLjctMTAgMC0xLjEtODIuOS04NC04NC04NC0uMyAwLTQuNiA0LjEtOS41IDkuMXpNMjAyLjMgMTQ0LjZjLTQuNiA0LjYtOC4zIDguOC04LjMgOS4zIDAgMS40IDI4IDI5LjEgMjkuNSAyOS4xIDEuNCAwIDcuOS0xMS43IDEwLjUtMTkuM2wxLjgtNS0xMS41LTExLjNjLTYuMy02LjMtMTItMTEuNC0xMi42LTExLjMtLjcgMC00LjkgMy44LTkuNCA4LjV6Ii8+PC9zdmc+">
  </a>
  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-switch">
    <img alt="npm version" src="https://img.shields.io/npm/v/@justeattakeaway/pie-switch?style=for-the-badge&color=ff8000&logo=npm&logoColor=white&label=npm">
  </a>
  <a href="https://github.com/justeattakeaway/pie/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/npm/l/@justeattakeaway/pie-switch?style=for-the-badge">
  </a>
</p>

`@justeattakeaway/pie-switch` is a Web Component built using the Lit library. It offers a simple and accessible interactive switch component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Forms Usage](#forms-usage)
  - [Form Validation](#form-validation)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties
| Prop            | Options                                | Description                                                                                                                       | Default     |
|------------------|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-------------|
| `checked`        | `true`, `false`                        | Same as the HTML `checked` attribute; indicates whether the switch is on or off.                                                 | `false`     |
| `disabled`       | `true`, `false`                        | Same as the HTML `disabled` attribute; indicates whether the switch is disabled or not.                                          | `false`     |
| `required`       | `true`, `false`                        | Same as the HTML `required` attribute; indicates whether the switch must be turned on when submitted as part of a form.          | `false`     |
| `label`          | —                                      | The label text for the switch.                                                                                                   | —           |
| `labelPlacement` | `"leading"`, `"trailing"`              | Set the placement of the label. Leading will have the label before the switch, taking writing direction into account.            | `"leading"` |
| `aria`           | `{ label?: string, describedBy?: string }` | The ARIA labels used for the switch.                                                                                             | `undefined` |
| `name`           | —                                      | Indicates the name of the switch (for use with forms).                                                                            | —           |
| `value`          | —                                      | Indicates the value of the switch (for use with forms).                                                                           | `"on"`      |

### Slots
This component does not have any slots. All content is passed through properties.

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Forms Usage
The `pie-switch` component can be integrated into HTML forms similarly to native HTML input elements. The component will associate itself with any form it is placed inside. As long as you provide a `name` attribute, the component will be included in the form's submission payload. A `value` attribute can also be provided, but if not then it will have a default value of `on`.

```html
<form action="/default-endpoint" method="POST">
  <pie-switch name="switch" value="someValue" label="Click me"></pie-switch>
  <button type="submit">Submit</button>
</form>
```

### Form Validation
To make `pie-switch` a required form field, simply add the `required` attribute to the component markup. This will prevent the form from being submitted if the switch is not toggled and will trigger native HTML form validation.

Currently this defaults to browser styling, but this may be updated in the future.

```html
<form action="/default-endpoint" method="POST">
  <pie-switch name="switch" value="someValue" label="Click me" required></pie-switch>
  <button type="submit">Submit</button>
</form>
```

To set a custom validation message, please call the `setCustomValidity` method exposed by the component. This will allow you to set a custom message that will be displayed when the form is submitted without the switch being toggled.

This behaviour is consistent with native HTML input elements. We may revisit this to provide a prop to set the custom validation message in the future.

```js
const switch = document.querySelector('pie-switch');
switch.setCustomValidity('Please toggle the switch');
```

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/card.js';
```

```html
<pie-switch
  id="switch"
  checked
  label="Label"
  labelPlacement="trailing"
  onchange="(event) => {
    console.log(event.target.checked);
  }"></pie-switch>

<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/switch.js';

<pie-switch
  id="switch"
  checked
  label="Label"
  labelPlacement="trailing"
  @change="handleChange">
</pie-switch>
```

**For React Applications:**

```jsx
import { PieSwitch } from '@justeattakeaway/pie-webc/react/switch.js';

<PieSwitch
  id="switch"
  checked
  label="Label"
  labelPlacement="trailing"
  onChange={handleChange}/></PieSwitch>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
