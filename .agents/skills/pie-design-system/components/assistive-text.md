# @justeattakeaway/pie-assistive-text
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-assistive-text) | [Design Documentation](https://pie.design/components/assistive-text) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-assistive-text)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-assistive-text">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-assistive-text.svg">
  </a>
</p>

`@justeattakeaway/pie-assistive-text` is a Web Component built using the Lit library. It offers a simple and accessible assistive-text component for web applications to use in forms.

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

| Prop              | Options                           | Description                                                                                                                                                                                                                                   | Default   |
|-------------------|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| `variant`         | `"default"`, `"error"`, `"success"` | Sets the type of message displayed to one of three potential options: `error`, `success` or `default`. `error` and `success` include an icon and are used for validation messages. `default` provides users with extra context and guidance. | `default` |
| `isVisuallyHidden`| `true`, `false`                    | If true, hides the component visually but leaves it accessible for screen readers.                                                                                                                                                           | `false`   |


### Slots

| Slot     | Description                                                  |
|----------|--------------------------------------------------------------|
| `default`| The default, unnamed slot is used to pass in text to the component. |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/assistive-text.js'
```

```html
<pie-assistive-text variant="success">
  Your request has been submitted.
</pie-assistive-text>

<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// import as module into a js file that will be loaded on the page where the component is used.
import '@justeattakeaway/pie-webc/components/assistive-text.js';
```

```html
<pie-assistive-text variant="success">
  Your request has been submitted.
</pie-assistive-text>
```

**For React Applications:**

```jsx
import { PieAssistiveText } from '@justeattakeaway/pie-webc/react/assistive-text.js';

<PieAssistiveText variant="success">
  Your request has been submitted.
</PieAssistiveText>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
