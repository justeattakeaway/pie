---
eleventyNavigation:
    key: Overview
    parent: Chip
    order: 1
shouldShowContents: true
permalink: components/chip/
---

## Overview

The purpose of chips is to provide a visual representation of a specific entity or attribute, such as a selected option or a labelled category. Chips can also be interactive, allowing users to remove or modify the selected choices.In the system, chips are categorised into three types: Selection, Filter, and Action, each serving a distinct purpose.

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
    width: 456
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Leading icon (optional):** Visually supports the label.",
        "**String:** Text label informing the user of the option/selection.",
        "**Close (optional):** Allows the Chip to be dismissible, but the application should provide a way for them to easily add it back.",
        "**Tick icon (optional):** A tick icon indicates the chip is selected.",
        "**Trailing action (optional):** A trailing icon indicates further interactions."
    ]
} %}

---

## Types of chip

### Selection chip

Selection chips represent choices or inputs made by the user. They can be used for single or multiple selection among predefined options, or to display context-based suggestions and recommendations.


{% contentLayout { columns: 3 } %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/usage-selection-left.svg",
      width: "256px",
      alt: "A multi-select dropdown menu used as a filter, showing Pizzas and Desserts as the two selected options."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/usage-selection-mid.svg",
      width: "203px",
      alt: "A group of selection chips for days of the week, with Wed, Thu, and Fri selected.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/usage-selection-right.svg",
      width: "301px",
      alt: "A chatbot interface displaying three suggestion chips: Get help with medication selection, Order medication, and Other.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Filter chip

Filter chips allow users to refine or narrow down content. They are commonly used on search or results pages and can also open additional controls or menus for more advanced filtering.

{% contentPageImage {
    src:"../../../assets/img/components/chip/usage-filter.svg",
    alt: "A user interface example of filter chips on a food delivery page, with options like Free delivery and No minimum order above a list of restaurant results.",
    width: 820
} %}

### Action chip

Action chips behave as interactive elements that trigger navigation or perform an action. They can act as links or anchors leading to another page or view.

{% usage {
    do: {
        type: usageTypes.list,
        items: [
            "Present action chips in a group that offer relevant contextual options."
        ]
    },
    dont: {
        type: usageTypes.list,
        items: [
            "Don’t use chips for CTAs, use buttons instead.",
            "Don’t use only one single chip."
        ]
    }
} %}

{% contentPageImage {
    src:"../../../assets/img/components/chip/type-action.svg",
    alt: "A user interface example of action chips, showing their use for toggling order status (Prepare, Handover, Done) and navigating settings tabs (Summary, Additional price(s)).",
    width: 702
} %}

---

## Variants

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

### Translucent

{% contentPageImage {
    src:"../../../assets/img/components/chip/variation-translucent.svg",
    alt: "The translucent variant of the chip component.",
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

### Leading icon

Leading icon provides context and visually supports the label. It is available for all variants.

{% contentPageImage {
    src:"../../../assets/img/components/chip/modifier-icon.svg",
    alt: "A chip component with a placeholder icon on the left.",
    width: 87
} %}

### Trailing icon

A trailing icon can be applied to indicate further interaction, such as opening up a popover or bottom sheet. Only available in Filter chip. 

{% contentPageImage {
    src:"../../../assets/img/components/chip/modifier-trailing-icon.svg",
    alt: "A chip component with a chevron icon on the right.",
    width: 87
} %}

### Tick icon

Tick icon can be added for clarity and decision support when using chips to filter or multi-select to the selected state. Only available in selected Selection and Filter chips.

{% contentPageImage {
    src:"../../../assets/img/components/chip/modifier-tick-icon.svg",
    alt: "A chip component with a tick icon on the left.",
    width: 63
} %}

### Close icon

Close icon can be added to the selected state to allow users to remove the selection. Clicking a chip with a close icon will dismiss the chip. Only available in selected Selection chip.

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
    alt: "A chip component with the value of 48.",
    width: 48
} %}

---

## Content

### String

- Keep the strings short so they are easy to read and scan.
- Use sentence case.


### Overrides

#### Icon

{% contentPageImage {
    src: "../../../assets/img/components/chip/content-overrides-icon.svg",
    alt: "A selected chip component with the value of string.",
    width: 48
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Trailing icon:** In Filter chips, the trailing icon can only be replaced with icons from the [Chevron](/foundations/iconography/library/#category-chevron) section."
    ]
} %}

#### Alignment

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/content-overrides-alignment-left.svg",
      width: 171,
      alt: "A chip with an icon and text, demonstrating hug content alignment where the container fits tightly around the content"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/content-overrides-alignment-right.svg",
      width: 184,
      alt: "A chip with a leading icon, text, and a trailing x icon, demonstrating fill alignment where the container expands to push the trailing icon to the far right."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Overall content:** By default, the chip container is set to Hug the content. If a chip needs to fit within a specific layout or grid, the overall content can be aligned to either centre or left.",
        "**Trailing content:** When a chip has a trailing icon, content can be set to Fill to expand and match the container width, allowing the trailing icon to align with the right edge."
    ]
} %}

---

## Layout

If there is a Chip grouping, by default are laid out horizontally and stack if required. A spacing of 8px is used horizontally, and 12px for vertical stacking.

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

## Interactions

### Close 

The whole chip is interactive, except when the close icon appears, in which case only the close icon is clickable to perform the action.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactions-whole-chip-interactive.svg",
      width: 63,
      alt: "A chip component where the entire component is interactive.",
      variant: "secondary"
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

## States

The chip has two states:

{% contentLayout %}
  {% contentItem %}
    <h3>Unselected</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/states-unselected.svg",
      width: 288,
      alt: "Three visual styles for an unselected chip: default, outline, and ghost.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Selected</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/states-selected.svg",
      width: 103,
      alt: "A single selected UI chip shown with a dark, solid background and a checkmark icon.",
      variant: "secondary"
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
      src: "../../../assets/img/components/chip/interactive-state-default.svg",
      width: 63,
      alt: "Five chip components in their default state, with three light-colored chips and one dark-colored chip.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactive-state-hover.svg",
      width: 63,
      alt: "Five chip components in a hover state, showing a slight visual change compared to the default state, with three light-colored chips and one dark-colored chip.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Active</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactive-state-active.svg",
      width: 63,
      alt: "Five chip components in an active state, with three light-colored chips and one dark-colored chip, showing a visual indication of being pressed or selected.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Focus</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactive-state-focus.svg",
      width: 63,
      alt: "Five chip components in a focus state, with three light-colored chips and one dark-colored chip, showing a clear outline or highlight indicating keyboard focus.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactive-state-disabled.svg",
      width: 63,
      alt: "Five chip components in a disabled state, appearing greyed out or muted, indicating they are not interactive.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Loading</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/chip/interactive-state-loading.svg",
      width: 63,
      alt: "Five chip components in a loading state, showing a spinner or animation within each chip, indicating content is being loaded.",
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

{% resourceTable {
    componentName: 'Chip'
} %}
