# @justeattakeaway/pie-tag
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-tag) | [Design Documentation](https://pie.design/components/tag) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-tag)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-tag">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-tag.svg">
  </a>
</p>

`@justeattakeaway/pie-tag` is a Web Component built using the Lit library. It offers a simple and accessible interactive tag component for web applications.

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
| Prop           | Options                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                      | Default     |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `size`         | `"small"`, `"large"`                                                                                                                                    | Sets the size of the tag.                                                                                                                                                                                                                                                                                        | `"large"`   |
| `variant`      | `"neutral"`, `"neutral-alternative"`, `"outline"`, `"ghost"`, `"information"`, `"success"`, `"error"`, `"brand-02"`, `"brand-03"`, `"brand-04"`, `"brand-05"`, `"brand-06"` | Sets the variant of the tag.                                                                                                                                                                                                                                                                                      | `"neutral"` |
| `isStrong`     | `true`, `false`                                                                                                                                          | If true, displays strong tag styles for `"success"`, `"error"`, `"information"`, `"neutral"` and `"brand-05"` variants. Has no effect for other variants.                                                                                                                | `false`     |
| `isInteractive`| `true`, `false`                                                                                                                                          | When true, the tag will be rendered as a button and can be interacted with. When utilized in "icon only" mode, `isInteractive` will always be `false` regardless of the assigned prop value.                                       | `false`     |
| `disabled`     | `true`, `false`                                                                                                                                          | For an interactive tag, this applies the disabled attribute to the button and styles it appropriately. For a non-interactive tag, this only applies the disabled styling.                                                        | `false`     |
| `iconPlacement`| `"leading"`, `"trailing"`                                                                                                                               | Sets the position of the icon relative to the text. Leading comes before the text and trailing comes after, taking writing direction into account. To use this, you must pass an icon into the [icon slot](#slots). Only used if `isInteractive` is `true`. | `"leading"` |

### Slots
| Slot      | Description                                                  |
|-----------|--------------------------------------------------------------|
| `default` | The default slot is used to pass text into the tag component.|
| `icon`    | Used to pass in an icon to the tag component.                |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

> When using icons, we recommend using [@justeattakeaway/pie-icons-webc](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc) to ensure consistency with the rest of the design system.

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/tag.js'
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
```

```html
<!-- pass js file into <script> tag -->
<pie-tag>
  Label
  <icon-placeholder slot="icon"></icon-placeholder>
</pie-tag>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/tag.js'
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';

<pie-tag>
  Label
  <icon-placeholder slot="icon"></icon-placeholder>
</pie-tag>
```

**For React Applications:**

```jsx
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { IconPlaceholder } from '@justeattakeaway/pie-icons-webc/dist/react/IconPlaceholder.js';

<PieTag>
  Label
  <IconPlaceholder slot="icon"></IconPlaceholder>
</PieTag>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
