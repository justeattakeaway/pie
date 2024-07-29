---
eleventyNavigation:
    key: Overview
    parent: 'Checkbox Group'
    order: 1
shouldShowContents: true
permalink: components/checkbox-group/
---

## Overview

Checkbox groups offer users a binary selection method, allowing them to make multiple selections from a predefined set of options. Each checkbox functions independently, providing immediate feedback through its checked or unchecked state.

These groups are frequently utilised in forms, settings panels, and various interfaces requiring users to make multiple selections or provide input from predefined options.

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-group/overview.svg",
    alt: "Four vertically aligned checkboxes with 'Restaurant settings' group label with second option checked."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Ensure each checkbox has a concise and descriptive label that clearly indicates what selecting it will entail.",
            "Use a minimum of 2 checkboxes within a group."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "If the user can only select one option from a group, radio buttons should be used instead of checkboxes.",
            "Limit the number of checkboxes presented to users to avoid overwhelming them with choices."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-group/anatomy.svg",
    alt: "Three horizontally aligned checkboxes with numbers specifying four different parts of checkbox group anatomy.",
    width: "338px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (Optional):** The [form label](/components/form-label/) provides necessary content / information to a form.",
        "**Checkbox input:** A checkbox input indicates the appropriate state. By default it is unselected.",
        "**Checkbox label:** Describes the information you want to select or unselect.",
        "**Assistive text (Optional):** The [assistive text](/components/assistive-text/) provides additional instructional information / error / success messaging for the whole checkbox group."
    ]
} %}

---

## Variations

Checkbox groups can be laid out both horizontally and vertically depending on the use cas and the structure of the UI. Where possible, arrange the checkbox group vertically for easier reading.

### Horizontal

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-group/variations-horizontal.svg",
    alt: "Three horizontally aligned checkboxes with group label.",
    width: "258px"
} %}

### Vertical

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-group/variations-vertical.svg",
    alt: "Three vertically aligned checkboxes with group label.",
    width: "71px"
} %}

---

## Modifiers

### Form label

A form label is recommended to provide the user context of the form element and it’s content.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-group/modifiers-form-label-1.svg",
      width: "258px",
      alt: "Three horizontally aligned checkboxes with group label."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-group/modifiers-form-label-2.svg",
      width: "258px",
      alt: "Three horizontally aligned checkboxes without group label."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Assistive text

Assistive text is used where needed to provide additional information or error / success messaging regarding the whole form element, and never to individual checkboxes. The assistive text is always used for an error state to provide the user with the information required to complete the form element.

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-group/modifiers-assistive-text.svg",
    alt: "Three horizontally aligned checkboxes with group label and red assistive text underneath specifying error state.",
    width: "258px"
} %}

---

## Content

All content should use sentence case.

### Label

- Always use clear and concise labels for checkbox group.

---

## Overflow

### Multiple words overflow

When the label exceeds the available width, the label will wrap onto a new line. Checkboxes with the same row remain top aligned for consistency, and any additional rows underneath move down to accommodate the additional content.

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-group/overflow.svg",
    alt: "Six horizontally aligned checkboxes. First checkbox has a label that overflows to a second line. ",
    width: "469px"
} %}

---

## States

Individual checkbox’s have their own interactive states: default, hover, active, and focus. However, some states apply to the group as a collective because they affect all checkboxes: error and disabled.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-group/states-error.svg",
      width: "258px",
      alt: "Three horizontally aligned checkboxes with group label and red assistive text underneath specifying error state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-group/states-disabled.svg",
      width: "258px",
      alt: "Three horizontally aligned checkboxes with group label. Checkbox boxes are greyed out to specify a disabled state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of the component in a left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-group/examples-ltr.svg",
    alt: "Two vertically aligned checkboxes with a group label aligned to the right.",
    width: "141px"
} %}

### RTL examples

Here are some examples of the component in a right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-group/examples-rtl.svg",
    alt: "Two vertically aligned checkboxes with a group label aligned to the left.",
    width: "132px"
} %}

---

## Resources

{% resourceTable {
    componentName: 'Checkbox Group'
} %}
