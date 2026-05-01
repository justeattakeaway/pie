# @justeattakeaway/pie-link

<p align="center">
  <a href="https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-link">
    <img alt="Source code" src="https://img.shields.io/badge/Source%20code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://pie.design/components/link">
    <img alt="Design Documentation" src="https://img.shields.io/badge/Design%20Documentation-pie.design-ff8000?style=for-the-badge&logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjAgMjYwIiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTE0OS41IDM1LjZsLTExLjYgMTEuNSA4LjcgOWM0LjggNC45IDkuMyA4LjkgOS45IDguOSAxLjggMCAzMC42LTI5IDI5LjktMzAuMS0xLjEtMS44LTIxLjUtMTAuOS0yNC4zLTEwLjktLjUgMC02LjIgNS4yLTEyLjYgMTEuNnpNOTMgMjUuN2MtNi41IDIuNC0yMC4yIDkuNi0yMC43IDEwLjgtLjMgMSA1LjYgNy42IDE4LjIgMjAuMSAxOC41IDE4LjQgMTguNiAxOC42IDE2LjggMjAuNi0zLjggNC40LTMzLjcgMzMuOC0zNC4yIDMzLjgtLjQgMC04LjctOC4xLTE4LjYtMTgtOS45LTkuOS0xOC41LTE4LTE5LjItMTgtMS40IDAtNy4xIDExLjctOS44IDE5LjlsLTEuNyA1LjMgMTQuNiAxNC43YzggOCAxNC42IDE1LjEgMTQuNiAxNS42IDAgLjYtNi41IDcuNS0xNC40IDE1LjRsLTE0LjQgMTQuNCAxLjUgNS4xYzEuNiA1LjIgNy43IDE4LjMgOS40IDIwLjEuNi42IDE3LjgtMTUuOSA0Ni45LTQ1IDQxLjktNDEuOCA0Ni4xLTQ1LjcgNDcuNy00NC40IDIuMSAxLjcgMjkuOSAyOS41IDMyLjcgMzIuN2wxLjkgMi4yLTExLjQgMTEuNGMtNi4zIDYuMi0xMi4yIDEyLjMtMTMuMyAxMy40LTEuOCAyLjEtMS44IDIuMiA3LjEgMTEuMiA1IDQuOSA5LjMgOSA5LjYgOSAuOSAwIDc5LjctNzguNiA3OS43LTc5LjQgMC0yLjYtOC44LTIxLjUtMTEuMS0yNC4xLS42LS42LTguNSA2LjYtMjAuOCAxOC45LTEyLjkgMTIuOC0yMC4zIDE5LjYtMjEuMSAxOS4xLS43LS40LTIwLjMtMTkuNy00My42LTQzLTIzLjQtMjMuMS00My00Mi4yLTQzLjctNDIuMy0uNi0uMS0xLjkuMS0yLjcuNHpNOTEuNSAxNDVsLTguOSA5IDEzLjMgMTMuMyAxMy4zIDEzLjQtMTguMSAxOC4xYy0xMCAxMC0xOC4xIDE4LjgtMTcuOSAxOS40LjQgMS4zIDE3LjkgMTAuMyAyMS45IDExLjIgMi4yLjYgNC4zLTEuMiAxNy44LTE0LjZsMTUuMi0xNS4yIDQuNiA0LjRjMi41IDIuNCA5LjYgOS41IDE1LjkgMTUuOGwxMS40IDExLjQgNC4zLTEuM2M3LjEtMi4zIDIwLjctOC44IDIwLjctMTAgMC0xLjEtODIuOS04NC04NC04NC0uMyAwLTQuNiA0LjEtOS41IDkuMXpNMjAyLjMgMTQ0LjZjLTQuNiA0LjYtOC4zIDguOC04LjMgOS4zIDAgMS40IDI4IDI5LjEgMjkuNSAyOS4xIDEuNCAwIDcuOS0xMS43IDEwLjUtMTkuM2wxLjgtNS0xMS41LTExLjNjLTYuMy02LjMtMTItMTEuNC0xMi42LTExLjMtLjcgMC00LjkgMy44LTkuNCA4LjV6Ii8+PC9zdmc+">
  </a>
  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-link">
    <img alt="npm version" src="https://img.shields.io/npm/v/@justeattakeaway/pie-link?style=for-the-badge&color=ff8000&logo=npm&logoColor=white&label=npm">
  </a>
  <a href="https://github.com/justeattakeaway/pie/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/npm/l/@justeattakeaway/pie-link?style=for-the-badge">
  </a>
</p>

`@justeattakeaway/pie-link` is a Web Component built using the Lit library. It offers a simple and accessible link component for web applications.

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
| Prop           | Options                                                                   | Description                                                                                                                                                                                                                                                                                                                                                      | Default     |
|----------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `size`         | `"small"`, `"medium"`                                                     | Sets the size of the link.                                                                                                                                                                                                                                                                                                                                      | `"medium"`  |
| `variant`      | `"default"`, `"high-visibility"`, `"inverse"`                             | Sets the variant of the link.                                                                                                                                                                                                                                                                                                                                   | `"default"` |
| `tag`          | `"a"`, `"button"`                                                         | Which HTML tag to use for the link.                                                                                                                                                                                                                                                                                                                             | `"a"`       |
| `href`         | —                                                                          | The `href` attribute to apply.<br>Cannot be used if `tag` is set to `"button"`.                                                                                                                                                                                                                                                                                | `undefined` |
| `target`       | —                                                                          | The `target` attribute to apply.<br>Cannot be used if `tag` is set to `"button"`.                                                                                                                                                                                                                                                                               | `undefined` |
| `download`     | `string`                                                                   | Sets the download attribute to trigger file downloads. Pass an empty string `""` to enable download with the original filename, or provide a custom filename. Only available when `tag` is `a`. **Use same origin URLs** and point to the file using the `href` property.                                                                                  | `undefined` |
| `rel`          | —                                                                          | The `rel` attribute to apply.<br>Cannot be used if `tag` is set to `"button"`.                                                                                                                                                                                                                                                                                  | `undefined` |
| `type`         | `"button"`, `"reset"`, `"submit"`                                         | The `type` attribute to apply when `tag` is set to `"button"`.                                                                                                                                                                                                                                                                                                  | `"submit"`  |
| `underline`    | `"default"`, `"reversed"`                                                 | The underline behaviour of the link. The default behaviour has the link text underlined, with the underline disappearing on hover. `"reversed"` will only take effect if `isStandalone` is set to `true`.                                                                                                               | `"default"` |
| `isBold`       | `true`, `false`                                                           | If true, makes the link text bold.                                                                                                                                                                                                                                                                                                                              | `false`     |
| `isStandalone` | `true`, `false`                                                           | If true, sets the link as a block element.                                                                                                                                                                                                                                                                                                                      | `false`     |
| `hasVisited`   | `true`, `false`                                                           | If true, the link will apply the styles for the visited state. Only takes effect if `tag` is `"a"`.                                                                                                                                                                                                                                                             | `false`     |
| `iconPlacement`| `"leading"`, `"trailing"`                                                 | Sets the position of the icon relative to the text. Leading comes before the text and trailing comes after, taking writing direction into account. To use this, you must pass an icon into the [icon slot](#slots). **Will have no effect if `isStandalone` is false.**                                                  | `undefined` |
| `aria`         | `{ label?: string }`                                                      | Aria properties for the link to help with making it accessible.                                                                                                                                                                                                                                                                                                 | `undefined` |


### Slots
| Slot      | Description                                                                                                                                                                                                                              |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `default` | The default slot is used to pass text into the link component.                                                                                                                                                                           |
| `icon`    | Used to pass in an icon to the link component. The icon placement can be controlled via the `iconPlacement` prop and we recommend using `pie-icons-webc` for defining this icon. **Please note the icon size is hardcoded and cannot be overridden.** |

### CSS Variables

| Name                     | Description                                 |
|--------------------------|---------------------------------------------|
| `--link-font-weight`      | Controls the font weight of the link text.   |
| `--link-text-color`       | Controls the color of the link text.        |
| `--link-text-decoration`  | Controls the text decoration of the link.   |

### Events
This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

> When using icons, we recommend using [@justeattakeaway/pie-icons-webc](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc) to ensure consistency with the rest of the design system.

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/link.js'
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
```

```html
<!-- pass js file into <script> tag -->
<pie-link href="https://www.pie.design">
  <icon-placeholder slot="icon"></icon-placeholder>
  pie.design
</pie-link>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/link.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';

<pie-link href="https://www.pie.design">
  <icon-placeholder slot="icon"></icon-placeholder>
  pie.design
</pie-link>
```
**For React Applications:**

```jsx
import { PieLink } from '@justeattakeaway/pie-webc/react/link.js';
import { IconPlaceholder } from '@justeattakeaway/pie-icons-webc/dist/react/IconPlaceholder.js';

<PieLink href="https://www.pie.design">
  <IconPlaceholder slot="icon" />
  pie.design
</PieLink>
```

## Downloading files

### Basic download (using original filename)
```html
<pie-link
  tag="a"
  href="/path/to/file.pdf"
  download="">
  Download PDF
</pie-link>
```

### Download with custom filename
```html
<pie-link
  tag="a"
  href="/path/to/file.pdf"
  download="my-custom-name.pdf">
  Download PDF
</pie-link>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
