# @justeattakeaway/pie-card
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-card) | [Design Documentation](https://pie.design/components/card) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-card)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-card">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-card.svg">
  </a>
</p>

`@justeattakeaway/pie-card` is a Web Component built using the Lit library. It offers a simple and accessible interactive card component for web applications.

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
| Prop         | Options                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                              | Default     |
|--------------|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `tag`        | `"a"`, `"button"`                                                       | Which HTML tag to use for the card.                                                                                                                                                                                                                                                                                                                                                      | `"button"`  |
| `variant`    | `"default"`, `"outline"`, `"inverse"`, `"outline-inverse"`              | Which variant of the card to use.                                                                                                                                                                                                                                                                                                                                                         | `"default"` |
| `href`       | —                                                                       | The `href` attribute to apply when `tag` is set to `"button"`.                                                                                                                                                                                                                                                                                                                           | `undefined` |
| `target`     | —                                                                       | The `target` attribute to apply when `tag` is set to `"button"`.                                                                                                                                                                                                                                                                                                                         | `undefined` |
| `rel`        | —                                                                       | The `rel` attribute to apply when `tag` is set to `"button"`.                                                                                                                                                                                                                                                                                                                            | `undefined` |
| `disabled`   | `true`, `false`                                                         | Whether or not the card should be disabled. This applies disabled styles and turns off interactivity. <br /> If the card is used as a link, the `href` attribute will be removed so the link can no longer be navigated.                                                                                                                                                                 | `false`     |
| `aria`       | `{ label?: string }`                                                    | Aria properties for the card to help with making it accessible.                                                                                                                                                                                                                                                                                                                          | `undefined` |
| `isDraggable`| `true`, `false`                                                         | Whether the card is draggable or not. Styling and pointer changes only. Implementation is left to the consuming application.                                                                                                                                                                                                                                                              | `false`     |
| `padding`    | `a-g`                                                                   | Which spacing token(s) to use for the card's padding. Pass two (comma-separated) values for different vertical and horizontal padding, or one value to pad all sides evenly, e.g., `"a"` or `"a,b"`.                                                                                                                                                                                       | `undefined` |

### Slots
| Slot     | Description                                                       |
|----------|-------------------------------------------------------------------|
| `default`| The default slot is used to pass content into the card component. |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/card.js';
```

```html
<html>
    <body>
        <pie-card
            tag="a"
            href="https://www.example.com"
            target="_blank"
            padding="d">
            Take me to example.com!
        </pie-card>
        <script type="module" src="/main.js"></script>
    </body>
</html>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/card.js';

<pie-card tag="a" href="https://www.example.com" target="_blank" padding="d">
  Take me to example.com!
</pie-card>
```

**For React Applications:**

```jsx
import { PieCard } from '@justeattakeaway/pie-webc/react/card.js';

<PieCard tag="a" href="https://www.example.com" target="_blank" padding="d">
    Take me to example.com!
</PieCard>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
