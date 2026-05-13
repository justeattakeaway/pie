# @justeattakeaway/pie-checkbox
<p align="center">
  <a href="https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-checkbox">
    <img alt="Source code" src="https://img.shields.io/badge/Source%20code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://pie.design/components/checkbox">
    <img alt="Design Documentation" src="https://img.shields.io/badge/Design%20Documentation-pie.design-ff8000?style=for-the-badge&logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjAgMjYwIiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTE0OS41IDM1LjZsLTExLjYgMTEuNSA4LjcgOWM0LjggNC45IDkuMyA4LjkgOS45IDguOSAxLjggMCAzMC42LTI5IDI5LjktMzAuMS0xLjEtMS44LTIxLjUtMTAuOS0yNC4zLTEwLjktLjUgMC02LjIgNS4yLTEyLjYgMTEuNnpNOTMgMjUuN2MtNi41IDIuNC0yMC4yIDkuNi0yMC43IDEwLjgtLjMgMSA1LjYgNy42IDE4LjIgMjAuMSAxOC41IDE4LjQgMTguNiAxOC42IDE2LjggMjAuNi0zLjggNC40LTMzLjcgMzMuOC0zNC4yIDMzLjgtLjQgMC04LjctOC4xLTE4LjYtMTgtOS45LTkuOS0xOC41LTE4LTE5LjItMTgtMS40IDAtNy4xIDExLjctOS44IDE5LjlsLTEuNyA1LjMgMTQuNiAxNC43YzggOCAxNC42IDE1LjEgMTQuNiAxNS42IDAgLjYtNi41IDcuNS0xNC40IDE1LjRsLTE0LjQgMTQuNCAxLjUgNS4xYzEuNiA1LjIgNy43IDE4LjMgOS40IDIwLjEuNi42IDE3LjgtMTUuOSA0Ni45LTQ1IDQxLjktNDEuOCA0Ni4xLTQ1LjcgNDcuNy00NC40IDIuMSAxLjcgMjkuOSAyOS41IDMyLjcgMzIuN2wxLjkgMi4yLTExLjQgMTEuNGMtNi4zIDYuMi0xMi4yIDEyLjMtMTMuMyAxMy40LTEuOCAyLjEtMS44IDIuMiA3LjEgMTEuMiA1IDQuOSA5LjMgOSA5LjYgOSAuOSAwIDc5LjctNzguNiA3OS43LTc5LjQgMC0yLjYtOC44LTIxLjUtMTEuMS0yNC4xLS42LS42LTguNSA2LjYtMjAuOCAxOC45LTEyLjkgMTIuOC0yMC4zIDE5LjYtMjEuMSAxOS4xLS43LS40LTIwLjMtMTkuNy00My42LTQzLTIzLjQtMjMuMS00My00Mi4yLTQzLjctNDIuMy0uNi0uMS0xLjkuMS0yLjcuNHpNOTEuNSAxNDVsLTguOSA5IDEzLjMgMTMuMyAxMy4zIDEzLjQtMTguMSAxOC4xYy0xMCAxMC0xOC4xIDE4LjgtMTcuOSAxOS40LjQgMS4zIDE3LjkgMTAuMyAyMS45IDExLjIgMi4yLjYgNC4zLTEuMiAxNy44LTE0LjZsMTUuMi0xNS4yIDQuNiA0LjRjMi41IDIuNCA5LjYgOS41IDE1LjkgMTUuOGwxMS40IDExLjQgNC4zLTEuM2M3LjEtMi4zIDIwLjctOC44IDIwLjctMTAgMC0xLjEtODIuOS04NC04NC04NC0uMyAwLTQuNiA0LjEtOS41IDkuMXpNMjAyLjMgMTQ0LjZjLTQuNiA0LjYtOC4zIDguOC04LjMgOS4zIDAgMS40IDI4IDI5LjEgMjkuNSAyOS4xIDEuNCAwIDcuOS0xMS43IDEwLjUtMTkuM2wxLjgtNS0xMS41LTExLjNjLTYuMy02LjMtMTItMTEuNC0xMi42LTExLjMtLjcgMC00LjkgMy44LTkuNCA4LjV6Ii8+PC9zdmc+">
  </a>
  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-checkbox">
    <img alt="npm version" src="https://img.shields.io/npm/v/@justeattakeaway/pie-checkbox?style=for-the-badge&color=ff8000&logo=npm&logoColor=white&label=npm">
  </a>
  <a href="https://github.com/justeattakeaway/pie/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/npm/l/@justeattakeaway/pie-checkbox?style=for-the-badge">
  </a>
</p>

`@justeattakeaway/pie-checkbox` is a Web Component built using the Lit library. It offers a simple and accessible checkbox component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Forms Usage](#forms-usage)
  - [Validation](#validation)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties

| Prop            | Options                               | Description                                                                                                                                                                                                                                                                                                                                                                      | Default     |
|------------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `name`           | `-`                                    | The name of the checkbox (used as a key/value pair with `value`). This is required in order to work properly with forms.                                                                                                                                                                                                                                                         | `-`         |
| `value`          | `-`                                    | The value of the input (used as a key/value pair in HTML forms with name). If not passed falls back to the html default value `"on"`.                                                                                                                                                                                                                                            | `"on"`      |
| `required`       | `-`                                    | If true, the checkbox is required to be checked before submitting the form. If it is not in checked state, the component validity state will be invalid.                                                                                                                                                                                                                         | `false`     |
| `disabled`       | `-`                                    | Indicates whether or not the checkbox is disabled.                                                                                                                                                                                                                                                                                                                               | `false`     |
| `checked`        | `-`                                    | Controls whether or not the checkbox is checked.                                                                                                                                                                                                                                                                                                                                 | `false`     |
| `defaultChecked` | `-`                                    | Sets the default checked state for the checkbox. This does not directly set the initial checked state when the page loads, use `checked` for that. If the checkbox is inside a form which is reset, the `checked` state will be updated to match `defaultChecked`.                                                                                                                | `false`     |
| `indeterminate`  | `-`                                    | Indicates whether the checkbox visually shows a horizontal line in the box instead of a check/tick. It has no impact on whether the checkbox's value is used in a form submission. That is decided by the checked state, regardless of the indeterminate state.                                                                          | `false`     |
| `assistiveText`  | `-`                                    | Allows assistive text to be displayed below the checkbox element.                                                                                                                                                                                                                                                                                                                | `-`         |
| `status`         | `"default"`, `"error"`, `"success"`    | The status of the checkbox component / assistive text. If you use `status` you must provide an `assistiveText` prop value for accessibility purposes.                                                                                                                                                                                                                            | `"default"` |

### Slots

| Slot     | Description                                                  |
|----------|--------------------------------------------------------------|
| `default`| The default, unnamed slot is used to pass label content to the component. This can be plain text or rich HTML for more complex labels (e.g., multi-line layouts with a title, price and description). When using rich HTML, use PIE design tokens for styling and typography utility classes from `@justeattakeaway/pie-css` for font styles. It is the consumer's responsibility to test screen reader narration when using complex slotted content. Test that the label reads in a logical order and conveys the intended meaning. |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

| Event     | Type          | Description                                                  |
|-----------|---------------|--------------------------------------------------------------|
| `change`  | `CustomEvent` | Triggered after the checked state of a checkbox changes.     |

## Forms Usage

### Validation
The checkbox component utilizes the [constraint validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) to provide a queryable validity state for consumers. This means that the component's validity can be checked via a `validity` getter.

#### Example:

```js
const checkbox = document.querySelector('pie-checkbox');
console.log(checkbox.validity.valid);
```

This getter can be useful for reducing the amount of validation code in your application. For example, if you want to create a checkbox that requires attention, you can set the `required` property on the component. You can then check the validity of the input in your application code:

```html
<pie-checkbox id="my-checkbox" required></pie-checkbox>
```

```js
const checkbox = document.querySelector('pie-checkbox');
const isValid = checkbox.validity.valid;

// We could use this to drive the status and assistiveText properties on our checkbox (this would likely be inside a submit event handler in a real application)
if (!isValid) {
  checkbox.status = 'error';
  checkbox.assistiveText = 'This checkbox is required';
}
```

These concepts work just as well inside a Vue or React application.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/checkbox.js'
```

```html
<pie-checkbox name="mycheckbox">Label</pie-checkbox>

<!-- Always use aria-label if you are not passing a label -->
<pie-checkbox name="mycheckbox" aria-label="Label"></pie-checkbox>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// import as module into a js file that will be loaded on the page where the component is used.
import '@justeattakeaway/pie-webc/components/checkbox.js';
```

```html
<pie-checkbox name="mycheckbox">Label</pie-checkbox>

<!-- Always use aria-label if you are not passing a label -->
<pie-checkbox name="mycheckbox" aria-label="Label"></pie-checkbox>
```

**For React Applications:**

```jsx
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';

<PieCheckbox name="mycheckbox">Label</PieCheckbox>

// Always use aria-label if you are not passing a label
<PieCheckbox name="mycheckbox" aria-label="Label"></PieCheckbox>
```

### Rich Label Slot Content

The default slot accepts HTML, so you can build more complex label layouts such as a product row with a title, price and description. Use PIE design tokens for spacing and `pie-css` typography utility classes for font styles.

> **Accessibility note:** When using rich slotted content, it is the consumer's responsibility to verify screen reader narration is acceptable. Test that the label reads in a logical order and conveys the intended meaning.

**HTML example:**

```html
<pie-checkbox name="carrots" value="carrots">
    <div style="
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: var(--dt-spacing-a);
    ">
        <span class="u-font-body-l">A nasty bag of carrots</span>
        <span class="u-font-body-l">£2.50</span>
        <span class="u-font-caption" style="
            width: 100%;
            color: var(--dt-color-content-subdued);
        ">
            Some description as a part of the label
        </span>
    </div>
</pie-checkbox>
```

**React example:**

```jsx
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';

<PieCheckbox name="carrots" value="carrots">
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 'var(--dt-spacing-a)',
    }}>
        <span className="u-font-body-l">A nasty bag of carrots</span>
        <span className="u-font-body-l">£2.50</span>
        <span className="u-font-caption" style={{
            width: '100%',
            color: 'var(--dt-color-content-subdued)',
        }}>
            Some description as a part of the label
        </span>
    </div>
</PieCheckbox>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
