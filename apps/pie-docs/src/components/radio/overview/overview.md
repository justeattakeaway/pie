---
eleventyNavigation:
    key: Overview
    parent: Radio
    order: 1
shouldShowContents: true
permalink: components/radio/
---

## Overview
Radio buttons offer a mechanism for users to choose only one option from a predefined set of mutually-exclusive options.

They are commonly used in forms, settings panels, and various interfaces requiring users to make a single selection from multiple options.

{% contentPageImage {
    src:"../../assets/img/components/radio/overview.svg",
    alt: "A group of radios that are vertically stacked together."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Always use within a parent component.",
            "Always use as part of a group."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t apply an assistive text directly to the radio button, but instead to the parent component."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/radio/anatomy.svg",
    alt: "Anatomy of a radio button.",
    width: 70
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Radio input:** A radio input indicates the appropriate state. By default it is unselected.",
        "**Label (Optional):** Describes the information you want to select or unselect."
    ]
} %}

---

## Variations
### Default
{% contentPageImage {
    src:"../../../assets/img/components/radio/default-unselected-radio.svg",
    alt: "A default unselected radio button with a label.",
    width: 70
} %}

---

## Modifiers
### Label

A label should always be present unless being utilised as a nested component and an alternative label is present.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/default-unselected-radio.svg",
      width: 70,
      alt: "A default unselected radio button with a label."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/default-unselected-radio-unlabelled.svg",
      width: 24,
      alt: "A default unselected radio button without a label."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Content

All content should use sentence case.

### Label
- Always use clear and concise labels for radio buttons.
- Labels appear to the right of radio buttons.

---

## Overflow
### Multiple words overflow
When the label exceeds the available width, it will wrap onto a new line.

{% contentPageImage {
    src:"../../../assets/img/components/radio/overflow.svg",
    alt: "A default unselected radio button with a label.",
    width: 282
} %}

---

## Behaviours
### States
The radio button can be in one of two states: selected or unselected. The default state is unselected.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/radio/states-unselected.svg",
        width: 112,
        alt: "An unselected radio button with a label."
      } %}
  {% endcontentItem %}
    {% contentItem %}
      {% contentPageImage {
        src: "../../../assets/img/components/radio/states-selected.svg",
        width: 94,
        alt: "A selected radio button with a label."
      } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactions
Users can trigger the radio directly or by clicking the radio label. Having all regions interactive creates a more accessible click target.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/radio/interactions-1.svg",
        width: 70,
        alt: "An unselected radio button with some highlighting over the input to signify that it is interactive."
      } %}
  {% endcontentItem %}
    {% contentItem %}
      {% contentPageImage {
        src: "../../../assets/img/components/radio/interactions-2.svg",
        width: 70,
        alt: "An unselected radio button with some highlighting over the label to signify that it is interactive."
      } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive states
Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/radio/interactive-default.svg",
      width: 70,
      alt: "Default state of a radio button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Hover</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/radio/interactive-hover.svg",
      width: 70,
      alt: "A radio button that is hovered."
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/radio/interactive-active.svg",
      width: 70,
      alt: "A radio button that is active."
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h3>Focus</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/radio/interactive-focus.svg",
      width: 73,
      alt: "A radio button that is focused."
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h3>Disabled</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/radio/interactive-disabled.svg",
      width: 70,
      alt: "A radio button that is disabled."
    } %}
  {% endcontentItem %}
      {% contentItem %}
    <h3>Error</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/radio/interactive-error.svg",
      width: 65,
      alt: "A radio button that is in an error state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples
### LTR examples
Here are some examples of the component in a left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/radio/ltr-1.svg",
        width: 416,
        alt: "A left-to-right example of radio buttons being used within cards. The input circles are positioned on the right-hand side of each card. The radio buttons show that the options are mutually exclusive, while the cards allow for more detailed information than a standard label, such as an icon, heading, and description."
      } %}
  {% endcontentItem %}
    {% contentItem %}
      {% contentPageImage {
        src: "../../../assets/img/components/radio/ltr-2.svg",
        width: 360,
        alt: "A left-to-right example of radio buttons being used to select food options. Each option has an input circle on the left, followed by the item's name and description."
      } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples
Here are some examples of the component in right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/radio/rtl-1.svg",
        width: 416,
        alt: "This image shows the same content as the first left-to-right image but in Hebrew, with a right-to-left layout. The input selection circles are positioned to the left of the text for each option, opposite to the left-to-right version where the inputs are on the right."
      } %}
  {% endcontentItem %}
    {% contentItem %}
      {% contentPageImage {
        src: "../../../assets/img/components/radio/rtl-2.svg",
        width: 360,
        alt: "This image mirrors the content of the second left-to-right image but in Hebrew, using a right-to-left layout. The input selection circles are positioned to the right of the text for each option, opposite the left-to-right version where the inputs are on the left."
      } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Resources

{% resourceTable {
    componentName: 'Radio'
} %}
