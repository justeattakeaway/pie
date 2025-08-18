---
eleventyNavigation:
    key: Overview
    parent: 'Textarea'
    order: 1
eleventyComputed:
    autoResize: "{% include './auto-resize.json' %}"
    manualResize: "{% include './manual-resize.json' %}"
shouldShowContents: true
permalink: components/textarea/
---

## Overview

The purpose of textareas is to provide users with a larger input space for writing and editing text that requires more than one line. They offer a more user-friendly and efficient way to input and view longer pieces of textual information within a single user interface element.

Textareas differ from text inputs as they allow for multiline input, where users can freely type or paste more extensive content. They are commonly used in forms, text editors, messaging interfaces and any scenario where users need to input or view longer blocks of text.

{% contentPageImage {
    src:"../../../assets/img/components/textarea/overview.svg",
    alt: "Textarea with 'Add note' label and character count."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
          "Use when the user needs to input a longer unique information that cannot be predicted with a preset list of options."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use if it is likely that the input will not exceed one line, if this is the case use a [text input](/components/text-input/) instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/textarea/anatomy.svg",
    alt: "Textarea with numbers specifying four different parts of textarea anatomy.",
    width: "416px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (optional):** The [form label](/components/form-label) provides necessary content / information to the form.",
        "**String:** Placeholder or user inputted value.",
        "**Resize tab (optional):** Allows the user to manually resize the form container.",
        "**Assistive text (optional):** The [assistive text](/components/assistive-text/) provides additional instructional information / error / success messaging."
    ]
} %}

---

## Variations

### Default

{% contentPageImage {
    src:"../../../assets/img/components/textarea/default.svg",
    alt: "Textarea component with a label to specify a default state.",
    width: "256px"
} %}

---

## Modifiers

### Type

{% contentLayout %}
  {% contentItem %}
    <h4>Placeholder</h4>
    <p>Placeholder text should not contain crucial information, and should only be displayed if beneficial to the user.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/default.svg",
      width: "256px",
      alt: "A blank textarea with placeholder followed by the label text."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Filled</h4>
    <p>Placeholder text within the input field disappears after the user begins entering data into the input.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/filled.svg",
      width: "256px",
      alt: "Textarea component with a label and string content inside it."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Height

The height, unlike the width, of a textarea is flexible, with two different options available.

{% contentLayout %}
  {% contentItem %}
    <h4>Auto-resize</h4>
    <p>Used when the intended behaviour is for the form's height to dynamically adjust based on input length.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/default.svg",
      width: "256px",
      alt: "Textarea component with auto-resizing option."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Manual-resize</h4>
    <p>Used when the intended behaviour is for the user to have control over the form’s height.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/manual-resize.svg",
      width: "256px",
      alt: "Textarea component with manual-resizing option."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Sizes

Use a consistent height when it is being used alongside other form components on the same page.

{% contentLayout %}
  {% contentItem %}
    <h4>Small</h4>
    <p>Use when there isn’t enough vertical space for the default textarea size.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/small.svg",
      width: "206px",
      alt: "Textarea component with a small height."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Medium</h4>
    <p>Default size and should always be used wherever it is practically possible.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/medium.svg",
      width: "206px",
      alt: "Textarea component with a medium height."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Large</h4>
    <p>Choose this size when there is a lot of space to work with. This size is typically used in simple forms or when a textarea is placed by itself on a page.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/large.svg",
      width: "206px",
      alt: "Textarea component with a large height."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Auto-resize</h4>
  {% endcontentItem %}
{% endcontentLayout %}

{% componentDetailsTable {
  tableData: autoResize
} %}

#### Manual-resize

{% componentDetailsTable {
  tableData: manualResize
} %}

---

## Content

### Placeholder

Use clear placeholder text so that users understand the purpose of the textarea.

{% contentPageImage {
    src:"../../../assets/img/components/textarea/placeholder.svg",
    alt: "Textarea component with a placeholder.",
    width: "256px"
} %}

### Input types

#### Alphanumeric

Both letters, numbers and certain special characters are allowed, for the majority of use-cases this will be used.

{% contentPageImage {
    src:"../../../assets/img/components/textarea/alphanumeric.svg",
    alt: "Textarea component with text 'String' inside it represents that placeholder text disappears after the user begins entering data into the input.",
    width: "256px"
} %}

---

## Behaviours

### Form inputs

When typing into a textarea and reaching the end of the field, the cursor should remain as static in the bottom right corner (for left-to-right languages) while text above it overflows through the top of the field.

#### Auto-resize

{% notification {
  type: "information",
  message: "The scroll function within auto-resize is active across all states, including disabled and read-only."
} %}

{% contentLayout { columns: 3 } %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/auto-resize-focused-small.svg",
      width: "256px",
      alt: "A small-sized textarea component with auto-resize functionality is focused and has text inside it."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/auto-resize-focused-medium.svg",
      width: "256px",
      alt: "A medium-sized textarea component with auto-resize functionality is focused and has text inside it."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/auto-resize-focused-large.svg",
      width: "256px",
      alt: "A large-sized textarea component with auto-resize functionality is focused and has text inside it."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentItem %}
  <h4>Manual-resize</h4>
{% endcontentItem %}

{% notification {
  type: "information",
  message: "The manual-resize function is active across all states, including disabled and read-only."
} %}

{% contentLayout { columns: 3 } %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/manual-resize-focused-small.svg",
      width: "256px",
      alt: "A small-sized textarea component with manual-resize functionality is focused and has text inside it."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/manual-resize-focused-medium.svg",
      width: "256px",
      alt: "A medium-sized textarea component with manual-resize functionality is focused and has text inside it."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/manual-resize-focused-large.svg",
      width: "256px",
      alt: "A large-sized textarea component with manual-resize functionality is focused and has text inside it."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Character counter

The character limit and counter is used to let users know how long their entry can be before they begin typing.

{% notification {
  type: "warning",
  message: "This is the suggested pattern for development. The functionality can be handled by consumers if required."
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/character-counter-empty.svg",
      width: "256px",
      alt: "An empty textarea component with a label and character counter on the top right. The counter shows zero out of fifty characters."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/character-counter.svg",
      width: "256px",
      alt: "A textarea component with a label and text inside it. The character counter at the top right shows 93 out of 50 characters. At the bottom, assistive text in an error state indicates that the character limit has been exceeded by 43 characters."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Mobile devices

### Manual-resize

The manual-resize feature on mobile devices doesn't provide an optimal user experience. Therefore, it's replaced with a fixed height that enables users to scroll vertically.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/fixed-height.svg",
      width: "256px",
      alt: "A textarea component with a label, and text inside it. The character counter on the top right of the component shows fifty out of fifty characters."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/scrolled.svg",
      width: "256px",
      alt: "An example of a textarea component containing lots of text content on a mobile device. This textarea has a fixed height and scroll functionality."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/default.svg",
      width: "256px",
      alt: "Textarea component with a label to specify a default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/hover.svg",
      width: "256px",
      alt: "Textarea component with a label and a black border. Textarea is a bit greyed out to specify a hovered state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Focus</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/focus.svg",
      width: "256px",
      alt: "Textarea component with a label has two types of borderlines: black and blue to specify a focused state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/disabled.svg",
      width: "256px",
      alt: "Textarea component with a label. Textarea is greyed out to specify a disabled state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Read only</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/read-only.svg",
      width: "256px",
      alt: "Textarea component with a label. Textarea is greyed out and has a black border to specify a read only state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Error</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/error.svg",
      width: "256px",
      alt: "Textarea component with a label and red assistive text underneath specifying error state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Error - hover</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/error-hover.svg",
      width: "256px",
      alt: "Textarea component with a label, red border and red assistive text underneath specifying error-hover state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Error - focus</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/error-focus.svg",
      width: "256px",
      alt: "Textarea component with a label has focus, red border and red assistive text underneath specifying error-focus state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of textareas in a left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/example-ltr-auto.svg",
      width: "373px",
      alt: "An auto-resized textarea component with a label aligned to the left."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/example-ltr-manual.svg",
      width: "373px",
      alt: "A manual-resized textarea component with a label aligned to the left."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of textareas in a right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/example-rtl-auto.svg",
      width: "373px",
      alt: "An auto-resized textarea component with a label aligned to the right."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/textarea/example-rtl-manual.svg",
      width: "373px",
      alt: "A manual-resized textarea component with a label aligned to the right."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Resources

{% resourceTable {
    componentName: 'Textarea'
} %}
