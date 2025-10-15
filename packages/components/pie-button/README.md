# @justeattakeaway/pie-button
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-button) | [Design Documentation](https://pie.design/components/button) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-button)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-button">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-button.svg">
  </a>
</p>

`@justeattakeaway/pie-button` is a Web Component built using the Lit library. It offers a simple and accessible button component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Forms Usage](#forms-usage)
  - [Button Attributes](#button-attributes)
  - [Form Integration Example](#form-integration-example)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties
| Prop             | Options                                                                                                                                                                  | Description                                                                                                                                                                                                         | Default        |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| `size`           | `"xsmall"`, `"small-productive"`, `"small-expressive"`, `"medium"`, `"large"`                                                                                            | Sets the size of the button.                                                                                                                                                                                        | `"medium"`     |
| `isResponsive`   | `true`, `false`                                                                                                                                                          | If true, uses the next larger size on wide viewports.                                                                                                                                                               | `false`        |
| `responsiveSize` | `"productive"`, `"expressive"`                                                                                                                                           | Sets which `"small-"` size an xsmall button should grow to when `isResponsive` is true.                                                                                                                             | `"productive"` |
| `type`           | `"button"`, `"reset"`, `"submit"`                                                                                                                                        | Sets the type of the button.                                                                                                                                                                                        | `"submit"`     |
| `variant`        | `"primary"`, `"primary-alternative"`, `"secondary"`, `"outline"`, `"outline-inverse"`, `"ghost"`, `"inverse"`, `"ghost-inverse"`, `"destructive"`, `"destructive-ghost"` | Sets the variant of the button.                                                                                                                                                                                     | `"primary"`    |
| `disabled`       | `true`, `false`                                                                                                                                                          | If true, disables the button.                                                                                                                                                                                       | `false`        |
| `isFullWidth`    | `true`, `false`                                                                                                                                                          | If true, sets the button's width to 100% of its container.                                                                                                                                                          | `false`        |
| `isLoading`      | `true`, `false`                                                                                                                                                          | If true, displays a loading indicator inside the button.                                                                                                                                                            | `false`        |
| `iconPlacement`  | `"leading"`, `"trailing"`                                                                                                                                                | Sets the position of the icon relative to the text. Leading comes before the text and trailing comes after, taking writing direction into account. To use this, you must pass an icon into the [icon slot](#slots). | `"leading"`    |
| `name`           | –                                                                                                                                                                        | The name of the button, submitted as a pair with the button's value as part of the form data, when that button is used to submit the form.                                                                          | `undefined`    |
| `value`          | –                                                                                                                                                                        | Defines the value associated with the button's name when it's submitted with the form data. This value is passed to the server in params when the form is submitted using this button.                              | `undefined`    |
| `formaction`     | –                                                                                                                                                                        | The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner. Does nothing if there is no form owner.                                                  | `undefined`    |
| `formenctype`    | `"application/x-www-form-urlencoded"`, `"multipart/form-data"`, `"text/plain"`                                                                                           | If the button is a submit button, specifies how to encode the form data that is submitted.                                                                                                                          | `undefined`    |
| `formmethod`     | `"post"`, `"get"`, `"dialog"`                                                                                                                                            | If the button is a submit button, this attribute specifies the HTTP method used to submit the form.                                                                                                                 | `undefined`    |
| `formnovalidate` | `true`, `false`                                                                                                                                                          | If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted.                                                                                       | `undefined`    |
| `formtarget`     | `"_self"`, `"_blank"`, `"_parent"`, `"_top"`                                                                                                                             | If the button is a submit button, this attribute is an author-defined name or standardized, underscore-prefixed keyword indicating where to display the response from submitting the form.                          | `undefined`    |
| `tag` | `"button"`, `"a"` | Which HTML element to use when rendering the button. | `"button"` |
| `href` | `string` | The URL to direct the user to. Only available when `tag` is `a`. | `undefined` |
| `download` | `string` | Sets the download attribute to trigger file downloads. When an empty string, sets the download attribute without a value. When a non-empty string, sets the download attribute with the specified filename. Only available when `tag` is `a`. **Use same origin URLs** and point to the file using the `href` property. | `undefined` |
| `target` | `string` | Where to display the linked URL. Only available when `tag` is `a`. | `undefined` |
| `rel` | `string` | The relationship of the linked URL as space-separated link types. Only available when `tag` is `a`. | `undefined` |

### Slots

| Slot     | Description                                                                                                                                                                                                                                                                         |
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `default`| The default slot is used to pass text into the button component.                                                                                                                                                                                                                    |
| `icon`   | Used to pass in an icon to the button component. The icon placement can be controlled via the `iconPlacement` prop and we recommend using `pie-icons-webc` for defining this icon, but this can also accept an SVG icon.                                                           |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Forms Usage

The `pie-button` web component is designed to integrate with standard HTML forms just like a native HTML button. When positioned inside a form, the component will automatically associate itself, enabling it to directly interact with the form context.

### Button Attributes

The `pie-button` provides a set of attributes to customise its behaviour within forms:

- `type`: Determines the button's function. Set to `submit` for form submissions or `reset` to clear form fields.
- `formaction`: Designates an alternative URL for form data submission when this specific button is clicked.
- `formenctype`: Specifies the form data encoding type during submission via this button.
- `formmethod`: Sets the HTTP method (e.g., GET or POST) for form data when initiated by this button.
- `formnovalidate`: If present, ensures the form is submitted without validation checks.
- `formtarget`: Dictates where to display the response after form submission.

### Form Integration Example

```html
<form action="/default-endpoint" method="post">
    <input type="text" name="username" required>
    <pie-button
        type="submit"
        formaction="/alternate-endpoint"
        formenctype="multipart/form-data"
        formmethod="post"
        formnovalidate
        formtarget="_blank">
        Submit
    </pie-button>
</form>
```

In this example:

- The pie-button, when clicked, will send the form data to /alternate-endpoint instead of the form's default /default-endpoint.
- It uses the multipart/form-data encoding type for form submission.
- The form will submit using the POST method.
- No validation will be performed during submission, thanks to formnovalidate.
- The form's submission response will be opened in a new browser tab/window because of the formtarget="_blank" attribute.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/button.js'
```

```html
<pie-button type="reset" isFullWidth="true" onclick="e => console.log(e)">
  Click me!
</pie-button>

<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/button.js';

<pie-button @click="handleClick" size="large" type="button" variant="secondary">
  Click me!
</pie-button>
```

**For React Applications:**

```jsx
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';

<PieButton onClick={handleClick}>
  increment
</PieButton>
```

## Downloading files

### Basic download
```html
<pie-button
  tag="a"
  href="/path/to/file.pdf"
  download="">
  Download PDF
</pie-button>
```

### Download with custom filename
```html
<pie-button
  tag="a"
  href="/path/to/file.pdf"
  download="my-custom-name.pdf">
  Download PDF
</pie-button>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
