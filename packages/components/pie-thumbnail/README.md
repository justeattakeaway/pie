# @justeattakeaway/pie-thumbnail
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-thumbnail) | [Design Documentation](https://pie.design/components/thumbnail) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-thumbnail)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-thumbnail">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-thumbnail.svg">
  </a>
</p>

`@justeattakeaway/pie-thumbnail` is a Web Component built using the Lit library. It offers a simple and accessible thumbnail component for web applications.

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
| Prop                   | Options                                                                                           | Description                                                                                                               | Default     |
|------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|-------------|
| `src`                  | —                                                                                                 | The `src` attribute for the underlying image tag.                                                                         | `""`        |
| `alt`                  | —                                                                                                 | The `alt` attribute for the underlying image tag.                                                                         | `""`        |
| `variant`              | `"default"`, `"outline"`                                                                          | Sets the variant of the thumbnail.                                                                                        | `"default"` |
| `backgroundColor`      | `"default"`, `"subtle"`, `"strong"`, `"dark"`, `"inverse"`, `"inverse-alternative"`               | Sets the background color of the thumbnail container.                                                                     | `"default"` |
| `size`                 | A number between 24 and 128, in multiples of 8                                                    | Sets the size of the thumbnail.                                                                                           | `48`        |
| `aspectRatio`          | `"1by1"`, `"4by3"`, `"16by9"`                                                                     | Sets the aspect-ratio of the thumbnail image.                                                                             | `"1by1"`    |
| `disabled`             | `true`, `false`                                                                                   | When true, the disabled styles are applied.                                                                               | `false`     |
| `hasPadding`           | `true`, `false`                                                                                   | When true, extra spacing around the thumbnail container is applied.                                                       | `false`     |
| `hideDefaultPlaceholder` | `true`, `false`                                                                                 | When true, hides the component default placeholder on image load failure.                                                 | `false`     |
| `placeholder`          | `{ src?: string, alt?: string }`                                                                  | Overrides the component default placeholder with a custom one on image load failure.                                     | `{}`        |

### Slots
This component does not have any slots. All content is controlled through properties.

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/thumbnail.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-thumbnail src="" alt=""></pie-thumbnail>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/thumbnail.js';

<pie-thumbnail src="" alt=""></pie-thumbnail>
```

**For React Applications:**

```jsx
import { PieThumbnail } from '@justeattakeaway/pie-webc/react/thumbnail.js';

<PieThumbnail src="" alt=""></PieThumbnail>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
