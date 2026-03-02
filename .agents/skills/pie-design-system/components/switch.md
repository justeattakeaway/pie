# @justeattakeaway/pie-switch
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-switch) | [Design Documentation](https://pie.design/components/switch) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-switch)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-switch">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-switch.svg">
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
