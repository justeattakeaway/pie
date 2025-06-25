---
eleventyNavigation:
    key: Overview
    parent: Chip
    order: 1
shouldShowContents: true
permalink: components/chip/
---

## Overview

The purpose of chips is to provide a visual representation of a specific entity or attribute, such as a selected option or a labelled category. Chips can also be interactive, allowing users to remove or modify the selected choices.

Chips are commonly used in various contexts, including filtering options, search results or any situation where concise and visually distinct information needs to be displayed.

{% contentPageImage {
    src:"../../../assets/img/components/chip/overview.svg",
    alt: "A group of chips that are horizontally stacked together."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.list,
        items: [
            "Chips should appear dynamically as a group of multiple interactive elements."
        ]
    },
    dont: {
        type: usageTypes.list,
        items: [
            "Don’t use when an interaction is not required, use a [tag](/components/tag/) if needed."
        ]
    }
} %}

___

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/chip/anatomy.svg",
    alt: "Anatomy of the chip component.",
    width: 210
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon (Optional):** Non-interactive icon that can be used to visually support the string.",
        "**String:** Text label informing the user of the option/selection.",
        "**Close (optional)**: Allows the Chip to be dismissible, but the application should provide a way for them to easily add it back."
    ]
} %}

---

## Variations

### Default

{% contentPageImage {
    src:"../../../assets/img/components/chip/variation-default.svg",
    alt: "The default variant of the chip component.",
    width: 63,
    variant: "secondary"
} %}

### Outline

{% contentPageImage {
    src:"../../../assets/img/components/chip/variation-outline.svg",
    alt: "The outline variant of the chip component.",
    width: 63
} %}

### Ghost

{% contentPageImage {
    src:"../../../assets/img/components/chip/variation-ghost.svg",
    alt: "The ghost variant of the chip component.",
    width: 63
} %}

---

## Modifiers

### Icon

Icons are always placed in a leading position.

{% contentPageImage {
    src:"../../../assets/img/components/chip/modifier-icon.svg",
    alt: "A chip component with a placeholder icon on the left.",
    width: 87
} %}

### Tick icon

Tick icon can be added for clarity and decision support when using chips to filter or multi-select to the selected state.

{% contentPageImage {
    src:"../../../assets/img/components/chip/modifier-tick-icon.svg",
    alt: "A chip component with a tick icon on the left.",
    width: 63
} %}

### Close icon

Close icon can be added to the selected state to allow users to remove the selection or filter.

{% contentPageImage {
    src:"../../../assets/img/components/chip/modifier-close-icon.svg",
    alt: "A chip component with a close icon on the right.",
    width: 63
} %}

---

## Size

Chips have a minimum width of 48px.

{% contentPageImage {
    src:"../../../assets/img/components/chip/size.svg",
    alt: "A chip component with the value of 1.",
    width: 48
} %}

---

## Content

- Keep the strings short so they are easy to read and scan.
- Use sentence case.

---

## Layout

If there is a Chip grouping, by default they are laid out horizontally and stack if required. A spacing of 8px is used horizontally, and 12px for vertical stacking.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/layout-single-row.svg",
      width: 237,
      alt: "A group of chip components flowing into multiple rows because the container isn’t wide enough.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/layout-double-row.svg",
      width: 237,
      alt: "A group of chip components laid out horizontally and stacked",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Usage

### Input

Input chips usually represent an entity or different attributes. They can be added or removed within input fields.

{% contentPageImage {
    src:"../../../assets/img/components/chip/usage-input.svg",
    alt: "Chip components used in an input field",
    width: 256
} %}

### Choice

Choice chips allow users to select one or more chips from a set of options (minimum of 2).

{% contentPageImage {
    src:"../../../assets/img/components/chip/usage-choice.svg",
    alt: "Chip components corresponding to a different weekday",
    width: 274,
    variant: "secondary"
} %}

### Filter

Filter chips allow users to refine content by selecting one or more chips from a set.

{% contentPageImage {
    src:"../../../assets/img/components/chip/usage-filter.svg",
    alt: "Chip components representing various cuisines",
    width: 297
} %}

### Action

Action chips trigger actions related to primary content.

{% contentPageImage {
    src:"../../../assets/img/components/chip/usage-action.svg",
    alt: "A chip component with a heart icon, allowing users to save an entity.",
    width: 266,
    variant: "secondary"
} %}

___

## Interactions

The whole chip is interactive, except when the close icon appears, in which case only the close icon is clickable to perform the action.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactions-whole-chip-interactive.svg",
      width: 63,
      alt: "A chip component where the entire component is interactive."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactions-close-icon-interactive.svg",
      width: 83,
      alt: "A chip component with a close icon, where only the close icon is interactive."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}


___

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactive-state-default.svg",
      width: 63,
      alt: "Four chip components in their default state, with three light-colored chips and one dark-colored chip.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactive-state-hover.svg",
      width: 63,
      alt: "Four chip components in a hover state, showing a slight visual change compared to the default state, with three light-colored chips and one dark-colored chip.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Active</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactive-state-active.svg",
      width: 63,
      alt: "Four chip components in an active state, with three light-colored chips and one dark-colored chip, showing a visual indication of being pressed or selected.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Focus</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactive-state-focus.svg",
      width: 63,
      alt: "Four chip components in a focus state, with three light-colored chips and one dark-colored chip, showing a clear outline or highlight indicating keyboard focus.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactive-state-disabled.svg",
      width: 63,
      alt: "Four chip components in a disabled state, appearing greyed out or muted, indicating they are not interactive.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Loading</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactive-state-loading.svg",
      width: 63,
      alt: "Four chip components in a loading state, showing a spinner or animation within each chip, indicating content is being loaded.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

___

## Examples

Outlines the atomic level interactive elements for the component.

### LTR examples

Here are some examples of chips in a left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/example-ltr-menu.svg",
      width: 329,
      alt: "A left-to-right example of a cuisines filter using the chip components"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/example-ltr-offer.svg",
      width: 273,
      alt: "A left-to-right example of an offers filter using the chip components"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of chips in a right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/example-rtl-menu.svg",
      width: 310,
      alt: "A right-to-left example of a cuisines filter using the chip components"    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/example-rtl-offer.svg",
      width: 257,
      alt: "A right-to-left example of an offers filter using the chip components"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

___

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Chip documentation, please see the resources below."
} %}

{% resourceTable {
    componentName: 'Chip'
} %}
