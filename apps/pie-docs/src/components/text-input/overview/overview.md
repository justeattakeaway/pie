---
eleventyNavigation:
    key: Overview
    parent: 'Text Input'
    order: 1
shouldShowContents: true
---

## Overview
The purpose of text inputs is to gather user input in the form of text, enabling them to provide specific information, such as names, addresses, messages or any other textual data required by the application or website.

Text inputs are fundamental elements used in forms, login screens and any user interface where users need to provide textual information.

{% contentPageImage {
    src:"../../../assets/img/components/text-input/overview.svg",
    alt: "Two text inputs that are vertically stacked together."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
          "Use it when you want the user to enter a single-line value."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use if it is likely that the input will exceed one line, if this is the case use a [textarea](/components/textarea/) instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/text-input/anatomy.svg",
    alt: "Anatomy of a text input.",
    width: 420
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (optional):** The [form label](/components/form-label/) provides necessary content / information to a form.",
        "**String:** Placeholder or user inputted value.",
        "**Leading content (optional):** An icon, text, or symbol that is used to visually support the input. It is displayed before the input’s value. ",
        "**Trailing content (optional):** An icon, text, or symbol that is used to visually support the input. It is displayed after the input's value.",
        "**Assistive text (optional):** The [assistive text](components/assistive-text/) provides additional instructional information / error / success messaging."
    ]
} %}

---

## Modifiers

### Leading and trailing content

An icon, text, or symbol can be added to visually support the input. Leading & trailing content can be combined depending on the use-case.

#### Icon

{% contentLayout %}
  {% contentItem %}
    <p>Use a leading icon for non-interactive icons that visually support the text input.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-leading-icon.svg",
      width: "256px",
      alt: "Text input with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <p>Use a trailing icon for interactive icons within the text input.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-trailing-icon.svg",
      width: "256px",
      alt: "Text input with a trailing icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <p>Use both leading & trailing icons when none-interactive and interactive icons are required.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-both-icons.svg",
      width: "256px",
      alt: "Text input with both leading and trailing icons."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Alphanumeric

Use when text input requires clarification of the input format, such as a symbol or unit of measure.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-alphanumeric-leading.svg",
      width: "256px",
      alt: "Text input with alphanumeric content and a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-alphanumeric-trailing.svg",
      width: "256px",
      alt: "Text input with alphanumeric content and a trailing icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-alphanumeric-both.svg",
      width: "256px",
      alt: "Text input with alphanumeric content and both leading and trailing icons."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Payment method

Payment method is only available in trailing content.
Use when a text input requires a card number to be entered, and reflect the card  entered by the user.

{% contentPageImage {
    src:"../../../assets/img/components/text-input/modifiers-paymentmethod.svg",
    alt: "Text input with payment method modifier.",
    width: "256px"
} %}

### Type

Use when text input requires clarification of the input format, such as a symbol or unit of measure.

{% contentLayout %}
  {% contentItem %}
    <h4>Placeholder</h4>
    <p>Placeholder text should not contain crucial information, and only displayed if beneficial to the user.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-type-placeholder.svg",
      width: "256px",
      alt: "Text input with placeholder type modifier."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Filled</h4>
    <p>Placeholder text disappears after the user begins entering data into the input.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-type-filled.svg",
      width: "256px",
      alt: "Text input with filled type modifier."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Sizes

### Height

Use a consistent text input height when it is being used alongside other form components on the same page.

{% contentLayout %}
  {% contentItem %}
    <h4>Small</h4>
    <p>Use when there isn’t enough vertical space for the default text input size.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/sizes-height-small.svg",
      width: "256px",
      alt: "Text input with small height."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Medium</h4>
    <p>Default size and should be used whenever possible.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/sizes-height-medium.svg",
      width: "256px",
      alt: "Text input with medium height."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Large</h4>
    <p>Choose this size when there is a lot of space to work with. This size is typically used in simple forms or when a text input is placed by itself on a page.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/sizes-height-large.svg",
      width: "256px",
      alt: "Text input with large height."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Width

Use the field width to set the users’ expectations, this can help us communicate how much input is required. For example, if a field should only have 5 characters, a full width field would not be suitable.
When used in a form, all text input widths should be aligned.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/size-width-default.svg",
      width: "256px",
      alt: "Text input with default width."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/size-width-small.svg",
      width: "110px",
      alt: "Text input with small width."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Content

### Placeholder

Use clear placeholder text for the text input trigger so that users understand the purpose.

{% contentPageImage {
    src:"../../../assets/img/components/text-input/content-placeholder.svg",
    alt: "Text input with placeholder content.",
    width: "256px"
} %}

### Input types

{% contentLayout %}
  {% contentItem %}
    <h4>Alphanumeric</h4>
    <p>Both letters, numbers and certain special characters are allowed, for the majority of use-cases this will be used.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/content-inputtypes-alphanumeric.svg",
      width: "256px",
      alt: "Text input with alphanumeric content."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Numeric</h4>
    <p>Only numeric values can be entered, for use-cases such as zip code, phone number, card number.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/content-inputtypes-numeric.svg",
      width: "135px",
      alt: "Text input with numeric content."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Password</h4>
    <p>Both letters and number are replaced with dots that hide password text by default.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/content-inputtypes-password.svg",
      width: "256px",
      alt: "Text input with password content."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Formatting

#### Date

A date format can be applied to date entries such as DOB, expiry date, start/end date - a slash is automatically displayed when the user enters a value that fits a date format. The user can only enter numeric values in a date text input.
We support several types of numeric date formats in engineering. The position of the date, month and year can be interchangeable.

{% contentPageImage {
    src:"../../../assets/img/components/text-input/content-formatting-date.svg",
    alt: "Text input with date formatting.",
    width: "690px"
} %}

#### Card number

Specifically for card number entry, the card number is displayed in groups of 4 digits. A space appears automatically after the user has entered 4 digits.
The user can enter a maximum of 16 digits.

{% contentPageImage {
    src:"../../../assets/img/components/text-input/content-formatting-cardnumber.svg",
    alt: "Text input with date formatting.",
    width: "790px"
} %}

---

## Overflow

If the string exceeds its available visible bound, the content overflows to the left.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/overflow-left.svg",
      width: "256px",
      alt: "Text input content overflows to the left."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/overflow-right.svg",
      width: "256px",
      alt: "Text input content overflows to the right."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Behavior

### Assistive text

{% contentPageImage {
    src:"../../../assets/img/components/text-input/behaviour-assistivetext.svg",
    alt: "Example of assistive text behavior.",
    width: "300px"
} %}

### Payment method

{% notification {
  type: "warning",
  message: "This is the suggested pattern for development, this functionality, if required is handled by pillar engineers'."
} %}

When using the payment method, the specific card icon will appear as soon as the system detects the type of card entered by the user.

{% contentPageImage {
    src:"../../../assets/img/components/text-input/behaviour-paymentmethod.svg",
    alt: "Example of payment method behavior.",
    width: "884px"
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/interactivestates-default.svg",
      width: "256px",
      alt: "Default interactive state example."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/interactivestates-hover.svg",
      width: "256px",
      alt: "Interactive state example when input is hovered over."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Focus</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/interactivestates-focus.svg",
      width: "256px",
      alt: "Interactive state example when input is focused."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/interactivestates-disabled.svg",
      width: "256px",
      alt: "Interactive state example when input is disabled."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Read only</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/interactivestates-readonly.svg",
      width: "256px",
      alt: "Interactive state example in read only mode."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Error</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/interactivestates-error.svg",
      width: "256px",
      alt: "Interactive state example showing an error."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

Outlines the atomic level interactive elements for the component.

### LTR examples

Here are some examples of Buttons in left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/text-input/examples-LTR-default.svg",
    alt: "Default example layout with left-to-right text alignment.",
    width: "333px"
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/examples-LTR-password.svg",
      width: "256px",
      alt: "Password input example with left-to-right text alignment."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/examples-LTR-date.svg",
      width: "112px",
      alt: "Date selection example with left-to-right text alignment."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/examples-LTR-search.svg",
      width: "256px",
      alt: "Search bar example with left-to-right text alignment."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/examples-LTR-phone.svg",
      width: "256px",
      alt: "Phone number input example with left-to-right text alignment."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of Buttons in right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/text-input/examples-RTL-default.svg",
    alt: "Default example layout with right-to-left text alignment.",
    width: "333px"
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/examples-RTL-password.svg",
      width: "256px",
      alt: "Password input example with right-to-left text alignment."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/examples-RTL-date.svg",
      width: "112px",
      alt: "Date selection example with right-to-left text alignment."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/examples-RTL-search.svg",
      width: "256px",
      alt: "Search bar example with right-to-left text alignment."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/examples-RTL-phone.svg",
      width: "256px",
      alt: "Phone number input example with right-to-left text alignment."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Resources

{% resourceTable {
    componentName: 'Text Input'
} %}
