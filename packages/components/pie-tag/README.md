# @justeattakeaway/pie-tag
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-tag) | [Design Documentation](https://pie.design/components/tag) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-tag)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-tag">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-tag.svg">
  </a>
</p>

`@justeattakeaway/pie-tag` is a Web Component built using the Lit library. It offers a simple and accessible tag component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [CSS Parts](#css-parts)
  - [Events](#events)
- [Usage Examples](#usage-examples)
- [Text Truncation](#text-truncation)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties
| Prop              | Options                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                      | Default     |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `size`            | `"small"`, `"large"`                                                                                                                                    | Sets the size of the tag.                                                                                                                                                                                                                                                                                        | `"large"`   |
| `variant`         | `"neutral"`, `"neutral-alternative"`, `"outline"`, `"ghost"`, `"information"`, `"success"`, `"error"`, `"brand-02"`, `"brand-03"`, `"brand-04"`, `"brand-05"`, `"brand-06"` | Sets the variant of the tag.                                                                                                                                                                                                                                                                                      | `"neutral"` |
| `isStrong`        | `true`, `false`                                                                                                                                          | If true, displays strong tag styles for `"neutral"`, `"information"`, `"success"`, `"error"`, `"warning"`, `"brand-03"`, `"brand-04"`, `"brand-05"`, `"brand-06"`, and `"brand-08"` variants. Has no effect for other variants.                                                                                                                | `false`     |
| `isDimmed`        | `true`, `false`                                                                                                                                          | When true, applies a dimmed styling to the tag.                                                        | `false`     |
| `isIconOnly`      | `true`, `false`                                                                                                                                          | Required to correctly render the tag when it contains only an icon. Icon only is only supported by design for the large size. Small icons will be rendered as large when they're icon only.                                                                                                                                                                                                                             | `false`     |
| `hasLeadingIcon`  | `true`, `false`                                                                                                                                          | Required to correctly render the tag when it has a leading icon plus text.                                                                                                                                                                                                                                      | `false`     |

### Slots
| Slot      | Description                                                  |
|-----------|--------------------------------------------------------------|
| `default` | The default slot is used to pass text into the tag component.|
| `icon`    | Used to pass in an icon to the tag component.                |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### CSS Parts
| Part      | Description                                                  |
|-----------|--------------------------------------------------------------|
| `body` | This part allows consumers to fully rewrite the styles of the tag container element. This allows for a lot of customisation, but should be used with caution. |
| `icon`    | Allows full customisation of the tag icon container.                |

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
<pie-tag hasLeadingIcon>
  <icon-placeholder slot="icon"></icon-placeholder>
  Label
</pie-tag>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/tag.js'
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';

<pie-tag hasLeadingIcon>
  <icon-placeholder slot="icon"></icon-placeholder>
  Label
</pie-tag>
```

**For React Applications:**

```jsx
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { IconPlaceholder } from '@justeattakeaway/pie-icons-webc/dist/react/IconPlaceholder.js';

<PieTag hasLeadingIcon={true}>
  <IconPlaceholder slot="icon"></IconPlaceholder>
  Label
</PieTag>
```

### Icon Properties Usage

These properties are required for correct rendering when using icons with tags.

**Icon-only tag:**

```html
<!-- HTML -->
<pie-tag isIconOnly>
  <icon-placeholder slot="icon"></icon-placeholder>
</pie-tag>
```

```jsx
// React
<PieTag isIconOnly={true}>
  <IconPlaceholder slot="icon" />
</PieTag>
```

**Tag with leading icon and text:**

```html
<!-- HTML -->
<pie-tag hasLeadingIcon>
  <icon-placeholder slot="icon"></icon-placeholder>
  Label
</pie-tag>
```

```jsx
// React
<PieTag hasLeadingIcon={true}>
  <IconPlaceholder slot="icon" />
  Label
</PieTag>
```

## Text Truncation

The pie-tag component automatically handles text truncation when the content exceeds the available width. Text will be truncated with an ellipsis (`...`) to ensure the tag maintains its intended layout.

### How Text Truncation Works

- Text content in the default slot will automatically truncate when it overflows the tag's container
- The truncation behaviour is controlled by applying a `width` or `max-width` to the tag component
- Both small and large tag sizes support text truncation
- Tags with icons will also truncate text content while preserving the icon display
- The truncation is CSS based, ensuring that the full text content remains accessible to screen readers

### Usage Examples

**Basic Text Truncation:**

```html
<!-- HTML -->
<div style="width: 150px;">
  <pie-tag style="width: 100%;">
    This is a very long text that will be truncated with ellipsis
  </pie-tag>
</div>
```

```jsx
// React
<div style={{ width: '150px' }}>
  <PieTag style={{ width: '100%' }}>
    This is a very long text that will be truncated with ellipsis
  </PieTag>
</div>
```

**Text Truncation with Icon:**

```html
<!-- HTML -->
<div style="max-width: 120px;">
  <pie-tag style="width: 100%;" hasLeadingIcon>
    <icon-info-circle slot="icon"></icon-info-circle>
    This long text will be truncated while keeping the icon visible
  </pie-tag>
</div>
```

```jsx
// React
<div style={{ maxWidth: '120px' }}>
  <PieTag style={{ width: '100%' }} hasLeadingIcon={true}>
    <IconInfoCircle slot="icon" />
    This long text will be truncated while keeping the icon visible
  </PieTag>
</div>
```

**Different Container Widths:**

```html
<!-- HTML -->
<!-- 150px container -->
<div style="max-width: 150px;">
  <pie-tag variant="information" style="width: 100%;">
    This text will truncate at 150px width
  </pie-tag>
</div>

<!-- 100px container -->
<div style="max-width: 100px;">
  <pie-tag variant="information" style="width: 100%;">
    This text will truncate at 100px width
  </pie-tag>
</div>

<!-- 50px container -->
<div style="max-width: 50px;">
  <pie-tag variant="information" style="width: 100%;">
    This text will truncate at 50px width
  </pie-tag>
</div>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
