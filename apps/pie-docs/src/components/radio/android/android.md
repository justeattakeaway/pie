---
eleventyNavigation:
    key: Android
    parent: Radio
    order: 3
shouldShowContents: true
---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use radio buttons when the user must pick exactly one option from a list.",
            "Write labels in plain, concise language that makes each option clearly distinct."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use radio buttons for yes/no questions where a toggle or checkbox fits better.",
            "Don't use radio buttons when the user can pick more than one option (use checkboxes instead)."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
src:"../../../assets/img/components/radio/android/anatomy.svg",
alt: "Anatomy of the radio button component.",
width: "90px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Radio button:** A Radio Button input indicating the appropriate state. By default it is unselected.",
        "**Label (Optional):** Describes the item you want to select or unselect."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
src:"../../../assets/img/components/radio/android/variants-default.svg",
alt: "Default state of the radio button component.",
width: "90px"
} %}

---

## Modifiers

### Label

The radio button can be used with or without a label. When a label is used, it should be concise and clearly describe the option.

{% contentPageImage {
src:"../../../assets/img/components/radio/android/modifiers-no-label.svg",
alt: "Label modifier of the radio button component.",
width: "30px"
} %}

---

## Alignment

If there is a Radio Button grouping, they can be laid out vertically or horizontally depending on the use case. When possible, arrange the Radio Button group vertically for easier reading.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/alignment-vertical.svg",
      width: "90px",
      alt: "A group of radio buttons with label stacked vertically."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/alignment-horizontal.svg",
      width: "360px",
      alt: "A group of radio buttons with label stacked horizontally."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Content

### Radio Button labels

- Always use clear and concise labels for Radio Buttons.
- Be explicit about the results that will follow if the Radio Button is selected.

---

## Overflow

- If you are tight on space, consider rewording the label.
- Long labels may wrap to a second line, and this is preferable to truncation - text should wrap beneath the Radio Button so the control and label are top aligned.

{% contentPageImage {
src:"../../../assets/img/components/radio/android/overflow.svg",
alt: "Radio button component with overflowing label text.",
width: "300px"
} %}

---

## Interactions

If the Radio has a label, the label is clickable for easier interaction.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/interactions-label-true.svg",
      width: "90px",
      alt: "A radio button with a clickable label."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/interactions-label-false.svg",
      width: "30px",
      alt: "A radio button without a clickable label."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## States

The Radio Button input allows for two states: unselected and selected. The default view of a set of Radio Buttons is having an option selected.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/states-unselected.svg",
      width: "30px",
      alt: "A radio button in an unselected state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/states-selected.svg",
      width: "30px",
      alt: "A radio button in a selected state."
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
      src: "../../../assets/img/components/radio/android/interactive-states-default.svg",
      width: "90px",
      alt: "A radio button in the default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/interactive-states-active.svg",
      width: "120px",
      alt: "A radio button in an active state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h3>Error</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/interactive-states-error.svg",
      width: "90px",
      alt: "A radio button in an error state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Disabled</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/interactive-states-disabled.svg",
      width: "90px",
      variant: "secondary",
      alt: "A radio button in a disabled state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## LTR Examples

Here are some examples of Radio in LTR context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/examples-ltr-1.svg",
      width: "90px",
      alt: "A radio button stacked vertically in an LTR context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/examples-ltr-2.svg",
      width: "180px",
      variant: "secondary",
      alt: "A radio button stacked horizontally in an LTR context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

## RTL Examples

Here are some examples of Radio in RTL context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/examples-rtl-1.svg",
      width: "90px",
      alt: "A radio button stacked vertically in an RTL context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/radio/android/examples-rtl-2.svg",
      width: "180px",
      variant: "secondary",
      alt: "A radio button stacked horizontally in an RTL context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
