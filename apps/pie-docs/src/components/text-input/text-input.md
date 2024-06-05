---
eleventyNavigation:
    key: 'Text Input'
    parent: Components
    order: 45
---

## Overview
The purpose of text inputs is to gather user input in the form of text, enabling them to provide specific information, such as names, addresses, messages or any other textual data required by the application or website.

Text inputs are fundamental elements used in forms, login screens and any user interface where users need to provide textual information.

{% contentPageImage {
    src:"../../assets/img/components/text-input/overview.svg",
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
    alt: "Anatomy of a text-input.",
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
      alt: "A modification of text input which uses a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <p>Use a trailing icon for interactive icons within the text input.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-trailing-icon.svg",
      width: "256px",
      alt: "A modification of text input which uses a trailing icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <p>Use both leading & trailing icons when none-interactive and interactive icons are required.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-both-icons.svg",
      width: "256px",
      alt: "A modification of text input which uses both leading & trailing icons."
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
      alt: "A modification of text input which uses an alphanumeric leading symbol."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-alphanumeric-trailing.svg",
      width: "256px",
      alt: "A modification of text input which uses an alphanumeric trailing symbol."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-alphanumeric-both.svg",
      width: "256px",
      alt: "A modification of text input which uses alphanumeric both leading & trailing symbol."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Payment method

Payment method is only available in trailing content.
Use when a text input requires a card number to be entered, and reflect the card  entered by the user.

{% contentPageImage {
    src:"../../../assets/img/components/text-input/modifiers-paymentmethod.svg",
    alt: "A modification of text input which uses a payment method.",
    width: "256px"
} %}

#### Type

Use when text input requires clarification of the input format, such as a symbol or unit of measure.

{% contentLayout %}
  {% contentItem %}
    <h4>Placeholder</h4>
    <p>Placeholder text should not contain crucial information, and only displayed if beneficial to the user.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-type-placeholder.svg",
      width: "256px",
      alt: "A modification of text input which uses a placeholder."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Filled</h4>
    <p>Placeholder text disappears after the user begins entering data into the input.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-type-filled.svg",
      width: "256px",
      alt: "A modification of text input which is filled."
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
      alt: "Small height text input."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Medium</h4>
    <p>Default size and should be used whenever possible.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/sizes-height-medium.svg",
      width: "256px",
      alt: "Medium height text input."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Large</h4>
    <p>Choose this size when there is a lot of space to work with. This size is typically used in simple forms or when a text input is placed by itself on a page.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/sizes-height-large.svg",
      width: "256px",
      alt: "Large height text input."
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
      alt: "Small height text input."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/size-width-small.svg",
      width: "110px",
      alt: "Medium height text input."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Text Input documentation, please see the resources below."
} %}

{% resourceTable {
    componentName: 'Text Input'
} %}
