---
eleventyNavigation:
    key: Overview
    parent: 'Radio Group'
    order: 1
shouldShowContents: true
permalink: components/radio-group/
---

## Overview
Radio groups offer users a single selection method,  Each radio button functions independently, providing immediate feedback through its selected or unselected state.

These groups are frequently utilised in forms, settings panels, and various interfaces requiring users to make a single selection or provide input from predefined options.

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Ensure each radio button has a concise and descriptive label that clearly indicates what selecting it will entail.",
            "Use a minimum of 2 radio buttons within a group."
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
    src:"../../../assets/img/components/button/anatomy.svg",
    alt: "Anatomy of a button.",
    width: 291
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (Optional):** The [form label](/components/form-label/) provides necessary content / information to a form.",
        "**Radio input:** A radio input indicates the appropriate state. By default it is unselected.",
        "**Radio label:** Describes the information you want to select or unselect.",
        "**Assistive text (Optional):** The [assistive text](/components/assistive-text/) provides additional instructional information / error / success messaging for the whole radio group."
    ]
} %}

---

## Variations
Radio groups can be laid out both horizontally and vertically depending on the use cas and the structure of the UI. Where possible, arrange the radio group vertically for easier reading.

### Horizontal

### Vertical

---

## Modifiers

### Form label
A form label is recommended to provide the user context of the form element and it’s content.

### Assistive text
Assistive text is used where needed to provide additional information or error / success messaging regarding the whole form element, and never to individual checkboxes. The assistive text is always used for an error state to provide the user with the information required to complete the form element.


---

## Content
All content should use sentence case.

### Form label

### Label
- Always use clear and concise labels for checkboxes.
- Labels appear to the right of checkbox input.

---

## Overflow

### Multiple words overflow

When the label exceeds the available width, the label will wrap onto a new line. Radios with the same row remain top aligned for consistency, and any additional rows underneath move down to accommodate the additional content.

---

## States
Individual radios have their own interactive states: default, hover, active, and focus. However, some states apply to the group as a collective because they affect all radios: error and disabled.

---

## Examples

### LTR examples
Here are some examples of the component in left-to-right context:

### RTL examples
Here are some examples of the component in right-to-left context:

---

## Resources
