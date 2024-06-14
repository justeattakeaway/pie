---
eleventyNavigation:
    key: Overview
    parent: 'Assistive Text'
    order: 1
shouldShowContents: true
---

## Overview

Assistive text helps users understand what kind of information they should enter, how to format it, or any specific requirements related to the input. It can provide examples, suggestions, error messages, validation rules, or any other relevant details that aid in accurate and meaningful input.

The purpose of assistive text is to enhance the user experience by reducing confusion, improving input accuracy, and ensuring users provide the expected information in the desired format.


{% contentPageImage {
    src:"../../../assets/img/components/assistive-text/overview.svg",
    alt: "Assistive text that is highlighting an error underneath a text input."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
          "Always use in combination with a form element to provide additional information or feedback."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "If displaying success or error variants, don’t show until the user has finished entering information."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/assistive-text/anatomy.svg",
    alt: "Anatomy of an assistive text.",
    width: 195
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon:** Visually supports the type of message. Only available for error and success validation.",
        "**String:** Provides informative information to the user."
    ]
} %}

---

## Variations

### Default

Shown when instructional information is required to help the user complete a form element.

{% contentPageImage {
    src:"../../../assets/img/components/assistive-text/variations-default.svg",
    alt: "Assistive text component in default state.",
    width: "85px"
} %}

### Error

Shown when an input fails validation, and feedback is required on an individual form.

{% contentPageImage {
    src:"../../../assets/img/components/assistive-text/variations-error.svg",
    alt: "Assistive text component in error state.",
    width: "110px"
} %}

### Success

Shown when an input passes validation, and feedback is required on an individual form.

{% contentPageImage {
    src:"../../../assets/img/components/assistive-text/variations-success.svg",
    alt: "Assistive text component in success state.",
    width: "110px"
} %}

---

## Content

All content should use sentence case.

### Default

- Should provide additional instructional information that helps the user fill out a form field, as clearly and succinctly as possible.
- Use sentence case.

### Error

- Should describe the error and inform the user on how to fix it, as clearly and succinctly as possible.
- Use sentence case.

### Success

- Should describe the success as clearly and succinctly as possible.
- Use sentence case.

---

## Overflow

### Multiple words overflow

When a group of words extends beyond the available horizontal space, the text automatically wraps onto a new line, with no maximum height restriction.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/assistive-text/overflow-1.svg",
      width: "256px",
      alt: "Assistive text component with overflow displayed."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/assistive-text/overflow-2.svg",
      width: "256px",
      alt: "Assistive text component with overflow displayed."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Behaviours

If a validation variant of the assistive text is required for error or success, it appears once the field has been validated; and will replace the default assistive text if one was present.

{% contentPageImage {
    src:"../../../assets/img/components/assistive-text/behaviours.svg",
    alt: "Assistive text component showing its behaviours in various states.",
    width: "570px"
} %}

---

## Examples

### LTR examples

Here are some examples of assistive text in left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/assistive-text/examples-LTR-checkbox.svg",
      width: "173px",
      alt: "Example of a left-to-right checkbox field with assistive text."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/assistive-text/examples-LTR-input.svg",
      width: "256px",
      alt: "Example of a left-to-right input field with assistive text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of assistive text in right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/assistive-text/examples-RTL-checkbox.svg",
      width: "180px",
      alt: "Example of a right-to-left checkbox field with assistive text."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/assistive-text/examples-RTL-input.svg",
      width: "256px",
      alt: "Example of a right-to-left input field with assistive text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Assistive Text documentation, please see the resources below."
} %}

{% resourceTable {
    componentName: 'Assistive Text'
} %}

---



