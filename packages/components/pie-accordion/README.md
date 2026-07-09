# @justeattakeaway/pie-accordion

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-accordion) | [Design Documentation](https://pie.design/components/accordion) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-accordion)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-accordion">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-accordion.svg">
  </a>
</p>

`@justeattakeaway/pie-accordion` is a Web Component built using the Lit library. It offers a simple and accessible accordion component for web applications.

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
| `isOpen` | `true`, `false` | When `true`, the accordion panel is expanded. **This is a controlled property - you are responsible for updating its value in response to the `toggle` event.** | `false` |
| `headingLabel` | String | The text content for the accordion heading button. | `''` |
| `headingLevel` | `"h1"`, `"h2"`, `"h3"`, `"h4"`, `"h5"`, `"h6"` | The HTML heading element level used to wrap the trigger button. | `"h2"` |
| `secondaryLabel` | String | Optional secondary line of text displayed below the heading label. | `undefined` |
| `size` | `"auto"`, `"narrow"`, `"wide"` | Controls the responsive layout. `"auto"` responds to the viewport width; `"narrow"` and `"wide"` force the respective layout regardless of viewport. | `"auto"` |
| `isEmphasisReduced` | `true`, `false` | When `true`, applies reduced-emphasis typography to the heading label. | `false` |
| `isDividerHidden` | `true`, `false` | When `true`, hides the `pie-divider` rendered at the bottom of the accordion. | `false` |

### Slots

| Slot | Description |
|------|-------------|
| `default` | The accordion panel content, displayed when the accordion is expanded. |
| `icon` | An optional leading icon displayed inside the trigger button. We recommend using [@justeattakeaway/pie-icons-webc](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc). |

### CSS Variables

| Name                                          | Description                                             | Default           |
|------------------------------------------------|----------------------------------------------------------|--------------------|
| `--accordion-border-radius`                     | Controls the border radius of the accordion.          | `--dt-radius-rounded-none` |
| `--accordion-button-padding-block-start`        | Controls the the trigger button block-start padding.  | `--dt-spacing-d`  |
| `--accordion-button-padding-block-end`          | Controls the the trigger button block-end padding.    | `--dt-spacing-d`  |
| `--accordion-button-padding-inline-start`       | Controls the the trigger button inline-start padding. | `--dt-spacing-d`  |
| `--accordion-button-padding-inline-end`         | Controls the the trigger button inline-end padding.   | `--dt-spacing-d`  |
| `--accordion-panel-padding-block-start`         | Controls the the content panel block-start padding.   | `--dt-spacing-a`  |
| `--accordion-panel-padding-block-end`           | Controls the the content panel block-end padding.     | `--dt-spacing-d`  |
| `--accordion-panel-padding-inline-start`        | Controls the the content panel inline-start padding.  | `--dt-spacing-d`  |
| `--accordion-panel-padding-inline-end`          | Controls the the content panel inline-end padding.    | `--dt-spacing-d`  |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `toggle` | `Event` | Dispatched when the trigger button is clicked. |

## Usage Examples

`pie-accordion` is a controlled component. You are responsible for listening to `toggle` and updating the `isOpen` property yourself.

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/accordion.js'
```

```html
<!-- pass js file into <script> tag -->
<script type="module" src="/main.js"></script>

<pie-accordion id="my-accordion" headingLabel="Delivery information">
    Your order will be delivered between 30 and 45 minutes after placing your order.
</pie-accordion>

<script>
    const accordion = document.getElementById('my-accordion');
    accordion.addEventListener('toggle', () => {
        accordion.isOpen = !accordion.isOpen;
    });
</script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/accordion.js'
```

**For React Applications:**

```jsx
import { PieAccordion } from '@justeattakeaway/pie-webc/react/accordion.js';
import { useState } from 'react';

export default function AccordionExample () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <PieAccordion
            headingLabel="Delivery information"
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}>
            Your order will be delivered between 30 and 45 minutes after placing your order.
        </PieAccordion>
    );
}
```

### With an icon

We recommend using [@justeattakeaway/pie-icons-webc](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc) for the `icon` slot:

```html
<pie-accordion headingLabel="Delivery information">
    <icon-restaurant-filled slot="icon" size="m"></icon-restaurant-filled>
    Your order will be delivered between 30 and 45 minutes after placing your order.
</pie-accordion>
```

To follow the visual spec, the icon should have `size="m"`.

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
