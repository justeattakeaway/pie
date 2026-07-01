---
eleventyNavigation:
    key: iOS
    parent: Radio Group
    order: 4
shouldShowContents: true
---

{% notification {
  type: "information",
  message: "**Design only.** The Radio Group is provided as a Figma component. In iOS development, this pattern is built using native platform controls rather than a shared component."
} %}

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Ensure each radio button has a concise and descriptive label that clearly indicates what selecting it will entail.",
            "Use a minimum of two radio buttons within a group."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "If the user can select multiple option from a group, checkboxes should be used instead of radio buttons.",
            "Limit the number of radio buttons presented to users to avoid overwhelming them with choices."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
src:"../../../assets/img/components/radio-group/ios/anatomy.svg",
alt: "Anatomy of the radio group component.",
width: "400px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (Optional):** A form label provides necessary content / information to a form.",
        "**Radio input:** A radio input indicates the appropriate state. By default it is unselected.",
        "**Radio label:** Describes the information you want to select or unselect.",
        "**Assistive text (Optional):** The assistive text provides additional instructional information, error or success messaging for the whole radio group."
    ]
} %}

---

## Variants

Radio groups can be laid out both horizontally and vertically depending on the use case and the structure of the UI. Where possible, arrange the radio group vertically for easier reading.

### Horizontal

{% contentPageImage {
src:"../../../assets/img/components/radio-group/ios/variants-horizontal.svg",
alt: "Horizontal variant of the radio group component.",
width: "300px"
} %}

### Vertical

{% contentPageImage {
src:"../../../assets/img/components/radio-group/ios/variants-vertical.svg",
alt: "Vertical variant of the radio group component.",
width: "90px"
} %}

---

## Modifiers

### Form label

A form label is recommended to provide the user context of the form element and it's content.

{% contentPageImage {
src:"../../../assets/img/components/radio-group/ios/modifiers-form-label.svg",
alt: "Radio group component in the horizontal variant with a form label.",
width: "300px"
} %}

### Assistive text

Assistive text is used where needed to provide additional information or error / success messaging regarding the whole form element, and never to individual checkboxes. The assistive text is always used for an error state to provide the user with the information required to complete the form element.

{% contentPageImage {
src:"../../../assets/img/components/radio-group/ios/modifiers-assistive-text.svg",
alt: "Radio group component in the error statewith assistive text.",
width: "300px"
} %}

---

## Content

All content should use sentence case.

### Form label

{% notification {
  type: "neutral",
  message: "Check out the [form label documentation](https://www.pie.design/components/form-label/).",
  iconName: "link"
} %}

### Label

- Always use clear and concise labels for checkboxes.
- Labels appear to the right of checkbox input.

### Overflow

When the label exceeds the available width, the label will wrap onto a new line. Radios with the same row remain top aligned for consistency, and any additional rows underneath move down to accommodate the additional content.

{% contentPageImage {
src:"../../../assets/img/components/radio-group/ios/overflow.svg",
alt: "Example of radio group component with textoverflow.",
width: "500px"
} %}

---

## States

Individual radios have their own interactive states: default, hover, active, and focus. However, some states apply to the group as a collective because they affect all radios: error and disabled.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio-group/ios/states-error.svg",
      width: "300px",
      alt: "A radio group in an error state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio-group/ios/states-disabled.svg",
      width: "300px",
      alt: "A radio group in a disabled state.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of the radio group in left-to-right context:

{% contentPageImage {
src:"../../../assets/img/components/radio-group/ios/examples-ltr.svg",
alt: "Examples of the radio group component in left-to-right context.",
width: "100px"
} %}

### RTL examples

Here are some examples of the radio group in right-to-left context:

{% contentPageImage {
src:"../../../assets/img/components/radio-group/ios/examples-rtl.svg",
alt: "Examples of the radio group component in right-to-left context.",
width: "100px"
} %}
