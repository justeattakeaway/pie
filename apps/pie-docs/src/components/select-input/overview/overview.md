---
eleventyNavigation:
    key: Overview
    parent: 'Select Input'
    order: 1
shouldShowContents: true
permalink: components/select-input/
---

## Overview

The purpose of select inputs is to allow users to easily and accurately choose a single option from a predefined list. Typically used in forms, they provide a compact and efficient way to present a list of options and enable user selection.

Select inputs consist of a clickable area that, when activated, displays the available options in a native dropdown menu. Users can then choose one option by clicking or tapping on it, and the selected option replaces the initially displayed selection.

{% contentPageImage {
    src:"../../../assets/img/components/select-input/overview.svg",
    alt: "A select input component showing a dropdown with multiple options."
} %}

---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.list,
        items: [
            "Only use within a form group as a form of data capturing."
        ]
    },
    dont: {
        type: usageTypes.list,
        items: [
            "Don't use a select input outside a form group, use a [dropdown](/components/dropdown/) instead.",
            "Don't use if there are fewer than three options, and use radio buttons instead.",
            "Don't use for complex data entry."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/select-input/anatomy-1.svg",
    alt: "Anatomy of a select input component showing the label, select field with chevron icon, and assistive text.",
    width: 420
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (Optional):** The [form label](/components/form-label/) provides necessary content / information to a form.",
        "**String:** Placeholder or user inputted value.",
        "**Chevron icon:** Used to indicate there is additional content revealed when interacting with the dropdown.",
        "**Assistive text (Optional):** The [assistive text](/components/assistive-text/) provides additional instructional information / error / success messaging."
    ]
} %}

{% contentPageImage {
    src:"../../../assets/img/components/select-input/anatomy-2.svg",
    alt: "Anatomy of a select input component showing standard options and grouped options.",
    width: 866
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Checkmark:** Used to indicate that an option has been selected.",
        "**Select option (Optional):** Allows the user to deselect an existing choice.",
        "**Option:** These represent the available selections that the user can choose from.",
        "**Option group:** A way to organise related options into logical categories."
    ]
} %}

---

## Variations

### Default

{% contentPageImage {
    src:"../../../assets/img/components/select-input/variations-default.svg",
    alt: "Default select input component showing a dropdown with options.",
    width: 320
} %}

### Grouped options

Organising options into logical categories can help users better understand the content within the select input.

{% contentPageImage {
    src:"../../../assets/img/components/select-input/variations-grouped-options.svg",
    alt: "Select input with options organised into logical groups for better categorization.",
    width: 544
} %}

---

## Modifiers

### Leading icon

Use a leading icon for non-interactive icons that visually support the select input.

{% contentPageImage {
    src:"../../../assets/img/components/select-input/modifiers-leading-icon.svg",
    alt: "Select input with a leading icon that provides visual context.",
    width: 256
} %}

---

## Sizes

### Height

Use a consistent select input height when it is being used alongside other form components on the same page.

{% contentLayout %}
  {% contentItem %}
    <h3>Small</h3>
    <p>Use when there isn't enough vertical space for the default select input size.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/sizes-height-small.svg",
      width: 256,
      alt: "Small-sized select input for limited vertical space."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Medium</h3>
    <p>Default size and should be used whenever possible.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/sizes-height-medium.svg",
      width: 256,
      alt: "Medium-sized select input."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Large

Choose this size when there is a lot of space to work with. This size is typically used in simple forms or when a select input is placed by itself on a page.

{% contentPageImage {
    src:"../../../assets/img/components/select-input/sizes-height-large.svg",
    alt: "Large-sized select input.",
    width: 256
} %}

---

## Content

All content should use sentence case.

### Select option

The recommended text is “Selected...”, but it can be modified if necessary with contextual changes.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/content-select-option-1.svg",
      width: 266,
      alt: "A select input component with a Select placeholder."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/content-select-option-2.svg",
      width: 266,
      alt: "Select input showing dropdown with the first option preselected."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Options

- Describe the option succinctly.
- We recommend presenting the options in alphabetical order.

---

## Overflow

### Field

If the selected option exceeds its available visible bound, the content truncates.

{% contentPageImage {
    src:"../../../assets/img/components/select-input/overflow-field.svg",
    alt: "Select input showing truncated text that exceeds the available space.",
    width: 256
} %}

### Options

If the option label exceeds the width of the form element, the popover container will expand horizontally to accommodate the label. It will continue to grow until it reaches the device's maximum width, at which point the label will wrap onto a new line.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
    src:"../../../assets/img/components/select-input/overflow-options-1.svg",
      width: 256,
      alt: "Select input dropdown showing a long option text that extends beyond the normal width."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
    src:"../../../assets/img/components/select-input/overflow-options-2.svg",
      width: 266,
      alt: "Select input dropdown showing a long option text that wraps to a new line when it reaches maximum width."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Behaviors

### Preselection

The first option is preselected by default and remains selected until the user manually chooses a different option.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/behaviours-preselection-1.svg",
      width: 256,
      alt: "Select input showing closed state with 'Select...' placeholder and the same input with dropdown open showing the first option preselected."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/behaviours-preselection-2.svg",
      width: 256,
      alt: "Select input showing closed state with 'Option 1' already selected and the same input with dropdown open showing Option 1 checked and additional options available."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Selection

Once the user selects an option, the popover closes automatically and the selection is displayed within the field.

{% contentPageImage {
    src:"../../../assets/img/components/select-input/behaviours-selection.svg",
    alt: "Three-step selection process showing: initial select input, dropdown with options and Option 1 highlighted, and final state with Option 1 selected.",
    width: 880
} %}

---

## Interactive states

The select input has various states to communicate its current status to the user.

### Field

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/interactive-states-field-default.svg",
      width: 256,
      alt: "Select input in its default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/interactive-states-field-hover.svg",
      width: 256,
      alt: "Select input in hover state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
    <h4>Active</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/interactive-states-field-active.svg",
      width: 256,
      alt: "Select input in active state with dropdown open."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Focus</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/interactive-states-field-focus.svg",
      width: 256,
      alt: "Select input in focus state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/interactive-states-field-disabled.svg",
      width: 256,
      alt: "Select input in disabled state.",
      variant: 'secondary'
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Error</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/interactive-states-field-error.svg",
      width: 256,
      alt: "Select input in error state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Options

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/interactive-states-options-default.svg",
      width: 256,
      alt: "Select input options in default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover / Focus</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/interactive-states-options-hover-focus.svg",
      width: 256,
      alt: "Select input options in hover/focus state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
{% contentLayout %}
  {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/select-input/interactive-states-options-disabled.svg",
      width: 256,
      alt: "Select input options in disabled state.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of select inputs in left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/select-input/examples-ltr-1.svg",
    alt: "Two select inputs in LTR format: one closed showing 'Select...' and another open showing file type options (PDF, JPEG, SVG).",
    width: 544
} %}

{% contentPageImage {
    src:"../../../assets/img/components/select-input/examples-ltr-2.svg",
    alt: "Two select inputs in LTR format: one closed showing 'This week' and another open showing time period options (Today, This week, This month, This year).",
    width: 544
} %}

### RTL examples

Here are some examples of select inputs in right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/select-input/examples-rtl-1.svg",
    alt: "Two select inputs in RTL format: one closed showing Hebrew text and another open showing file type options (PDF, JPEG, SVG) with Hebrew labels.",
    width: 544
} %}

{% contentPageImage {
    src:"../../../assets/img/components/select-input/examples-rtl-2.svg",
    alt: "Two select inputs in RTL format: one closed showing Hebrew text and another open showing time period options in Hebrew.",
    width: 544
} %}

---

## Resources

{% resourceTable {
    componentName: 'Select Input'
} %}
