# @justeattakeaway/pie-notification
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-notification) | [Design Documentation](https://pie.design/components/notification) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-notification)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-notification">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-notification.svg">
  </a>
</p>

`@justeattakeaway/pie-notification` is a Web Component built using the Lit library. It offers a simple and accessible interactive notification component for web applications.

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
| --- | --- | --- | --- |
| `variant` | `"neutral"`, `"neutral-alternative"`, `"info"`, `"success"`, `"warning"`, `"error"`, `"translucent"` | Sets the variant of the notification. | `"neutral"` |
| `position` | `"inline-content"`, `"full-width"` | Defines the proper styles, whether the component appears within the content or at the top of the interface. | `"inline-content"` |
| `heading` | — | The heading text of the notification. | `undefined` |
| `headingLevel` | `h2`, `h3`, `h4`, `h5`, `h6` | The HTML tag to use for the notification's heading. | `h2` |
| `isDismissible` | `true`, `false` | When true, allows dismissing the notification by clicking on the close button. | `false` |
| `isCompact` | `true`, `false` | When true, aligns the footer with the header and icons, making the component compact. | `false` |
| `isOpen` | `true`, `false` | When true, the notification is set to be open and visible. | `true` |
| `hideIcon` | `true`, `false` | When true, the icon will be hidden. | `false` |
| `hasStackedActions` | `true`, `false` | When true, action buttons will stack on narrow screens. Not available when `isCompact` is true. | `false` |
| `leadingAction` | `{`<br>&nbsp;&nbsp;`text: string,`<br>&nbsp;&nbsp;`ariaLabel?: string,`<br>&nbsp;&nbsp;`size?: "small-productive" \| "xsmall",`<br>&nbsp;&nbsp;`href?: string,`<br>&nbsp;&nbsp;`target?: string,`<br>&nbsp;&nbsp;`rel?: string,`<br>&nbsp;&nbsp;`download?: string`<br>`}` | An object representing the leading action of the notification. When `href` is provided, renders as a link. | `undefined` |
| `supportingAction` | `{`<br>&nbsp;&nbsp;`text: string,`<br>&nbsp;&nbsp;`ariaLabel?: string,`<br>&nbsp;&nbsp;`size?: "small-productive" \| "xsmall",`<br>&nbsp;&nbsp;`href?: string,`<br>&nbsp;&nbsp;`target?: string,`<br>&nbsp;&nbsp;`rel?: string,`<br>&nbsp;&nbsp;`download?: string`<br>`}` | An object representing the supporting action of the notification. When `href` is provided, renders as a link. <br> The action will only render if `leadingAction` is passed. | `undefined` |
| `aria` | `{ close?: string, label?: string }` | The ARIA labels used for various parts of the notification. Only pass `label` if there is no heading to ensure the region is announced with a title. | `undefined` |

### Slots
| Slot      | Description                                                             |
|-----------|-------------------------------------------------------------------------|
| `default` | The default slot is used to pass text into the notification component.  |
| `icon`    | Used to pass in an icon to the notification component.                  |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events
| Event                                          | Type          | Description                                                |
|------------------------------------------------|---------------|------------------------------------------------------------|
| `pie-notification-leading-action-click`        | `CustomEvent` | Triggered when the user clicks on the leading action.      |
| `pie-notification-supporting-action-click`     | `CustomEvent` | Triggered when the user clicks on the supporting action.   |
| `pie-notification-close`                       | `CustomEvent` | Triggered when the user closes the notification.           |
| `pie-notification-open`                        | `CustomEvent` | Triggered when the user opens the notification.            |

## Usage Examples

> When using icons, we recommend using [@justeattakeaway/pie-icons-webc](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc) to ensure consistency with the rest of the design system.

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/notification.js'
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
```

```html
<!-- pass js file into <script> tag -->
<pie-notification title="Heading">
  <icon-placeholder slot="icon"></icon-placeholder>
  Content
</pie-notification>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/notification.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';

<pie-notification title="Heading">
  <icon-placeholder slot="icon"></icon-placeholder>
  Content
</pie-notification>
```

**For React Applications:**

```jsx
import { PieNotification } from '@justeattakeaway/pie-webc/react/notification.js';
import { IconPlaceholder } from '@justeattakeaway/pie-icons-webc/dist/react/IconPlaceholder.js';


<PieNotification title="Heading">
  <IconPlaceholder slot="icon"></IconPlaceholder>
  Content
</PieNotification>
```

### With Link Actions

Actions can be rendered as links by providing an `href` property. This is useful when you want to navigate to a URL or trigger a file download.

**For HTML:**

```html
<pie-notification
    heading="Update Available"
    id="my-notification">
    A new version is available with exciting features.
</pie-notification>

<script>
    const notification = document.getElementById('my-notification');
    notification.leadingAction = {
        text: 'Learn More',
        href: 'https://example.com',
        target: '_blank',
        rel: 'noopener noreferrer'
    };
    notification.supportingAction = {
        text: 'Download',
        href: '/path/to/file.pdf',
        download: 'release-notes.pdf'
    };
</script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```html
<!-- Vue templates (using Nuxt 3) -->
<pie-notification
    heading="Update Available"
    :leading-action="{
        text: 'Learn More',
        href: 'https://example.com',
        target: '_blank',
        rel: 'noopener noreferrer'
    }"
    :supporting-action="{
        text: 'Download',
        href: '/path/to/file.pdf',
        download: 'release-notes.pdf'
    }">
    A new version is available with exciting features.
</pie-notification>
```

**For React Applications:**

```jsx
import { PieNotification } from '@justeattakeaway/pie-webc/react/notification.js';

<PieNotification
    heading="Update Available"
    leadingAction={{
        text: 'Learn More',
        href: 'https://example.com',
        target: '_blank',
        rel: 'noopener noreferrer'
    }}
    supportingAction={{
        text: 'Download',
        href: '/path/to/file.pdf',
        download: 'release-notes.pdf'
    }}>
    A new version is available with exciting features.
</PieNotification>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
