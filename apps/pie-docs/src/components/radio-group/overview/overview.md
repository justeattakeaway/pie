---
eleventyNavigation:
    key: Overview
    parent: 'Radio Group'
    order: 1
shouldShowContents: true
permalink: components/radio-group/
---

## Overview
Radio groups present a set of mutually exclusive options, allowing users to select only one option from a predefined list.

They are commonly used in forms, settings panels, and other interfaces where users need to make a single selection from multiple options.

{% contentPageImage {
    src:"../../../assets/img/components/radio-group/overview.svg",
    alt: "A group of radio buttons that are vertically stacked together."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Make sure each radio button has a label which is clear, concise and accurate.",
            "Use a minimum of 2 radio buttons within a group."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "If the user can select multiple options from a group, checkboxes should be used instead of radio buttons.",
            "Limit the number of radio buttons presented to users to avoid overwhelming them with choices."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/radio-group/anatomy.svg",
    alt: "Anatomy of a radio group.",
    width: 340
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
{% contentPageImage {
    src:"../../../assets/img/components/radio-group/variations-horizontal.svg",
    alt: "A row of radio buttons grouped together by a single label above them.",
    width: 258
} %}

### Vertical
{% contentPageImage {
    src:"../../../assets/img/components/radio-group/variations-vertical.svg",
    alt: "A vertical stack of radio buttons grouped together by a single label above them.",
    width: 257
} %}

---

## Modifiers

### Form label
A form label is recommended to provide the user context of the form element and it’s content.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src:"../../../assets/img/components/radio-group/modifiers-form-label-1.svg",
      alt: "A row of radio buttons grouped together by a single label above them.",
      width: 258
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src:"../../../assets/img/components/radio-group/modifiers-form-label-2.svg",
      alt: "A row of radio buttons grouped together but missing a label.",
      width: 258
    } %}
  {% endcontentItem %}
{% endcontentLayout %}


### Assistive text
Assistive text is used where needed to provide additional information or error / success messaging regarding the whole form element, and never to individual checkboxes. The assistive text is always used for an error state to provide the user with the information required to complete the form element.

{% contentPageImage {
  src:"../../../assets/img/components/radio-group/modifiers-assistive-text.svg",
  alt: "A row of radio buttons grouped with an error colour around their borders. Below is a message with an error icon. The colour used for both the text and icon is the same as the error border.",
  width: 258
} %}

---

## Content
All content should use sentence case.

### Form label
{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [form label content](/components/form-label/) documentation."
} %}

### Label
- Always use clear and concise labels for checkboxes.
- Labels appear to the right of checkbox input.

---

## Overflow

When the label exceeds the available width, the label will wrap onto a new line. Radios with the same row remain top aligned for consistency, and any additional rows underneath move down to accommodate the additional content.

{% contentPageImage {
  src:"../../../assets/img/components/radio-group/overflow.svg",
  alt: "A horizontal row of radio buttons. The first radio has a label that is very long, this forces the row to break to a new line.",
  width: 470
} %}

---

## States
Individual radios have their own interactive states: default, hover, active, and focus. However, some states apply to the group as a collective because they affect all radios: error and disabled.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src:"../../../assets/img/components/radio-group/states-1.svg",
      alt: "A row of radio buttons grouped with an error colour around their borders. Below is a message with an error icon. The colour used for both the text and icon is the same as the error border.",
      width: 258
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src:"../../../assets/img/components/radio-group/states-2.svg",
      alt: "A row of radio buttons grouped together by a single label above them. Their background colours are faded to signify that they are currently in a disabled state.",
      width: 258
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples
Here are some examples of the component in left-to-right context:

{% contentPageImage {
  src:"../../../assets/img/components/radio-group/ltr.svg",
  alt: "A vertical stack of radio buttons. The first one is selected. The radio buttons sit on the left hand side of the label text. This demonstrates a left-to-right reading direction.",
  width: 257
} %}

### RTL examples
Here are some examples of the component in right-to-left context:

{% contentPageImage {
  src:"../../../assets/img/components/radio-group/rtl.svg",
  alt: "A vertical stack of radio buttons. The first one is selected. The radio buttons sit on the right hand side of the label text. This demonstrates a right-to-left reading direction.",
  width: 88
} %}

---

## Resources

{% resourceTable {
    componentName: 'Radio'
} %}
