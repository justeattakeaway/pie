# @justeattakeaway/pie-icon-button

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-icon-button) | [Design Documentation](https://pie.design/components/icon-button) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-icon-button)
<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-icon-button">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-icon-button.svg">
  </a>
</p>

`@justeattakeaway/pie-icon-button` is a Web Component built using the Lit library. It offers a simple and accessible icon button component for web applications.

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
| Prop | Options | Description | Default |
|------|---------|-------------|---------|
| `aria` | `{ label?: string }`, `{ labelledby?: string }`, `{ describedby?: string }`, `{ expanded?: boolean }`, `{ controls?: string }` | The ARIA attributes available to use on the icon button. Offers `label`, `labelledby`, `describedby`, `expanded` and `controls`. | `undefined` |
| `size` | `"xsmall"`, `"small"`, `"medium"`, `"large"` | Set the size of the icon button. | `"medium"` |
| `variant` | `"primary"`, `"primary-alternative"`, `"primary-alternative-dark"`, `"secondary"`, `"outline"`, `"ghost"`, `"ghost-secondary"`, `"inverse"`, `"ghost-inverse"`, `"translucent"` | Set the variant of the icon button. | `"primary"` |
| `disabled` | `true`, `false` | If true, disables the icon button. | `false` |
| `isLoading` | `true`, `false` | If true, displays a loading indicator inside the icon button. | `false` |


### Slots
| Slot      | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `default` | The default slot is used to pass an icon into the icon button component. Please use an icon from `justeattakeaway/pie-icons-webc`.  |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';
```

```html
<!-- pass js file into <script> tag -->
<pie-icon-button onclick="e => console.log(e)">
  <icon-close></icon-close>
</pie-icon-button>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte, etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/icon-button.js';

<pie-icon-button @click="handleClick">
  <icon-close></icon-close>
</pie-icon-button>
```

**For React Applications:**

```jsx
import { PieIconButton } from '@justeattakeaway/pie-webc/react/icon-button.js';
import { IconClose } from '@justeattakeaway/pie-icons-webc/dist/react/IconClose.js';

<PieIconButton onClick={handleClick}>
  <IconClose></IconClose>
</PieIconButton>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
