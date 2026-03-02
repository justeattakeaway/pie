# @justeattakeaway/pie-divider
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-divider) | [Design Documentation](https://pie.design/components/divider) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-divider)

<p>
  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-divider">
    <img alt="npm version" src="https://img.shields.io/npm/v/@justeattakeaway/pie-divider.svg">
  </a>
</p>

`@justeattakeaway/pie-divider` is a Web Component built using the Lit library. It offers a customizable divider element for visual separation of content.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties

| Prop         | Type                                  | Description                                                                                     | Default        |
|--------------|---------------------------------------|-------------------------------------------------------------------------------------------------|----------------|
| `variant`    | `"default"`, `"inverse"`              | Sets the variant of the divider.                                                                | `"default"`    |
| `label`      | `string`                              | The label text for the divider. Label is only available for the horizontal variant.             | `""`           |
| `orientation`| `"horizontal"`, `"vertical"`          | Sets the orientation of the divider.                                                            | `"horizontal"` |

### Slots

This component does not expose any slots.

### CSS Variables

This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/divider.js';
```

```html
<pie-divider orientation="horizontal" label="OR"></pie-divider>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/divider.js';

<pie-divider orientation="horizontal" label="OR"></pie-divider>
```

**For React Applications:**

```jsx
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';

<PieDivider orientation="horizontal" label="OR" />
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
