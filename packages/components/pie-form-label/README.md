# @justeattakeaway/pie-form-label
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-form-label) | [Design Documentation](https://pie.design/components/form-label) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-form-label)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-form-label">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-form-label.svg">
  </a>
</p>

`@justeattakeaway/pie-form-label` is a Web Component built using the Lit library. It provides a flexible and accessible label component for form inputs.

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

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties

| Prop       | Options | Description                                               | Default     |
|------------|---------|-----------------------------------------------------------|-------------|
| `for`      | —       | The native `for` HTML attribute.                          | `undefined` |
| `optional` | —       | Optional text to be placed next to the main label.        | `undefined` |
| `trailing` | —       | What the trailing text of the label component should be.  | `undefined` |

### Slots

| Slot     | Description                                                         |
|----------|---------------------------------------------------------------------|
| `default`| The default, unnamed slot is used to pass in text to the component. |

### CSS Variables

This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/form-label.js';
```

```html
<pie-form-label for="username" trailing="X of X">Label</pie-form-label>
<pie-text-input id="username" name="username" type="text"></pie-text-input>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/form-label.js';

<pie-form-label for="username" trailing="X of X">Label</pie-form-label>
<pie-text-input id="username" name="username" type="text"></pie-text-input>
```

**For React Applications:**

```jsx
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';

<PieFormLabel for="username" trailing="X of X">Label</PieFormLabel>
<PieTextInput id="username" name="username" type="text" />
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
