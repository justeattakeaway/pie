# @justeattakeaway/pie-icon-with-background
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-icon-with-background) | [Design Documentation](https://pie.design/components/icon-with-background) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-icon-with-background)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-icon-with-background">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-icon-with-background.svg">
  </a>
</p>

`@justeattakeaway/pie-icon-with-background` is a Web Component built using the Lit library. It offers a simple and accessible `icon-with-background` component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [CSS Parts](#css-parts)
  - [Events](#events)
  - [Accessibility](#accessibility)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties
| Prop       | Options                                                                                                                                           | Description                                                             | Default   |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|-----------|
| `shape`    | `circle`, `square`                                                                                                                                | The shape of the background surrounding the icon.                       | `circle`  |
| `size`     | `small`, `medium`, `large`, `xlarge`                                                                                                              | The size of the component, sizing both the container and slotted icon.  | `medium`  |
| `variant`  | `neutral`, `neutral-alternative`, `information`, `success`, `error`, `warning`, `brand-02`, `brand-03`, `brand-04`, `brand-05`, `brand-06`, `brand-08` | The background colour variant of the component.                         | `neutral` |
| `isStrong` | `true`, `false`                                                                                                                                   | When true, applies a stronger colour emphasis (no effect on `neutral-alternative`). | `false`   |
| `isDimmed` | `true`, `false`                                                                                                                                   | When true, applies a dimmed visual styling to indicate a disabled context. Useful when this component is placed inside a parent component that has a disabled state (e.g. a disabled card or form section). Named `isDimmed` rather than `disabled` as this component is non-interactive. | `false`   |

### Slots
| Slot      | Description                                     |
|-----------|-------------------------------------------------|
| (default) | The icon to render inside the background shape. |

### CSS Variables

This component does not expose any CSS variables for style overrides.

### CSS Parts
| Part   | Description                        |
|--------|------------------------------------|
| `body` | The main container of the component. |

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

### Accessibility

This component is decorative and non-interactive, and it intentionally applies no ARIA attributes of its own.

PIE icons already render with `role="presentation"` and `focusable="false"`, so an icon passed into the default slot is not announced by screen readers without any further work. Adding `aria-hidden` to the container would therefore be redundant.

If the icon conveys meaning on its own rather than being purely decorative, labelling it is the consumer's responsibility. Provide an accessible name on the surrounding interactive element, or on the slotted content, rather than expecting this component to supply one.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/icon-with-background.js'
```

```html
<!-- pass js file into <script> tag -->

<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/icon-with-background.js'

```

**For React Applications:**

```jsx
import { PieIconWithBackground } from '@justeattakeaway/pie-webc/react/icon-with-background.js';

```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
