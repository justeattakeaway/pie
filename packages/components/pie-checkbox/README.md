# @justeattakeaway/pie-checkbox
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-checkbox) | [Design Documentation](https://pie.design/components/checkbox) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-checkbox)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-checkbox">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-checkbox.svg">
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
| `default`| The default, unnamed slot is used to pass in text to the component. |

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

### HTML / Vanilla JS

```js
// Import the component
import '@justeattakeaway/pie-webc/components/checkbox.js';
```

#### Basic checkbox with a slotted label

```html
<pie-checkbox name="terms" value="accepted">I agree to the terms</pie-checkbox>
```

#### Checkbox without a visible label (always provide an aria-label)

```html
<pie-checkbox name="subscribe" aria-label="Subscribe to newsletter"></pie-checkbox>
```

#### Using a native HTML label with the `for` attribute

Because `pie-checkbox` is a form-associated custom element, native `<label>` elements work with it just like a regular `<input>`. Clicking the label will toggle the checkbox.

```html
<pie-checkbox id="marketing-checkbox" name="marketing" value="yes"></pie-checkbox>
<label for="marketing-checkbox">Send me marketing emails</label>
```

#### Wrapping the checkbox inside a native label

```html
<label>
    <pie-checkbox name="marketing" value="yes"></pie-checkbox>
    Send me marketing emails
</label>
```

#### Inside a form with validation

```html
<form id="signup-form">
    <pie-checkbox
        name="terms"
        value="accepted"
        required
        assistiveText="You must accept the terms to continue"
        status="error">
        I accept the terms and conditions
    </pie-checkbox>

    <button type="submit">Sign up</button>
    <button type="reset">Reset</button>
</form>

<script type="module">
    import '@justeattakeaway/pie-webc/components/checkbox.js';

    const form = document.querySelector('#signup-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const checkbox = form.querySelector('pie-checkbox');

        if (!checkbox.validity.valid) {
            checkbox.status = 'error';
            checkbox.assistiveText = 'You must accept the terms to continue';
            return;
        }

        checkbox.status = 'default';
        checkbox.assistiveText = '';

        const formData = new FormData(form);
        console.log(Object.fromEntries(formData));
    });
</script>
```

#### Prechecked and indeterminate states

```html
<!-- Checked by default -->
<pie-checkbox name="notifications" checked>Enable notifications</pie-checkbox>

<!-- Indeterminate (visual only — does not affect form value) -->
<pie-checkbox name="selectAll" indeterminate>Select all</pie-checkbox>

<!-- defaultChecked controls the state after a form reset -->
<pie-checkbox name="optin" defaultChecked>Opt in to updates</pie-checkbox>
```

### Vue

```js
// Import the component in your main entry file
import '@justeattakeaway/pie-webc/components/checkbox.js';
```

#### Basic usage with v-model

```html
<template>
    <pie-checkbox
        name="terms"
        value="accepted"
        :checked="isChecked"
        @change="isChecked = $event.target.checked">
        I agree to the terms
    </pie-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const isChecked = ref(false);
</script>
```

#### With a native label

```html
<template>
    <pie-checkbox
        id="marketing-checkbox"
        name="marketing"
        value="yes"
        :checked="marketingOptIn"
        @change="marketingOptIn = $event.target.checked">
    </pie-checkbox>
    <label for="marketing-checkbox">Send me marketing emails</label>
</template>

<script setup>
import { ref } from 'vue';

const marketingOptIn = ref(false);
</script>
```

#### Inside a form with validation

```html
<template>
    <form @submit.prevent="handleSubmit" @reset="handleReset">
        <pie-checkbox
            ref="termsCheckbox"
            name="terms"
            value="accepted"
            required
            :checked="termsAccepted"
            :status="status"
            :assistiveText="assistiveText"
            @change="termsAccepted = $event.target.checked">
            I accept the terms and conditions
        </pie-checkbox>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const termsAccepted = ref(false);
const status = ref('default');
const assistiveText = ref('');
const termsCheckbox = ref(null);

function handleSubmit () {
    if (!termsCheckbox.value.validity.valid) {
        status.value = 'error';
        assistiveText.value = 'You must accept the terms to continue';
        return;
    }

    status.value = 'default';
    assistiveText.value = '';
    console.log('Form submitted with terms accepted:', termsAccepted.value);
}

function handleReset () {
    termsAccepted.value = false;
    status.value = 'default';
    assistiveText.value = '';
}
</script>
```

### React

```jsx
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';
```

#### Basic usage

```jsx
<PieCheckbox name="terms" value="accepted">
    I agree to the terms
</PieCheckbox>
```

#### Without a visible label

```jsx
<PieCheckbox name="subscribe" aria-label="Subscribe to newsletter" />
```

#### With a native HTML label

```jsx
<PieCheckbox id="marketing-checkbox" name="marketing" value="yes" />
<label htmlFor="marketing-checkbox">Send me marketing emails</label>
```

#### Wrapping inside a native label

```jsx
<label>
    <PieCheckbox name="marketing" value="yes" />
    Send me marketing emails
</label>
```

#### Inside a form with state and validation

```jsx
import { useState, useRef } from 'react';
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';

function SignupForm () {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [status, setStatus] = useState('default');
    const [assistiveText, setAssistiveText] = useState('');
    const checkboxRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!checkboxRef.current.validity.valid) {
            setStatus('error');
            setAssistiveText('You must accept the terms to continue');
            return;
        }

        setStatus('default');
        setAssistiveText('');
        console.log('Form submitted with terms accepted:', termsAccepted);
    };

    return (
        <form onSubmit={handleSubmit}>
            <PieCheckbox
                ref={checkboxRef}
                name="terms"
                value="accepted"
                required
                checked={termsAccepted}
                status={status}
                assistiveText={assistiveText}
                onChange={(e) => setTermsAccepted(e.target.checked)}>
                I accept the terms and conditions
            </PieCheckbox>

            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
    );
}
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
