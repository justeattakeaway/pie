---
eleventyNavigation:
    key: Overview
    parent: Divider
    order: 1
shouldShowContents: true
---

## Overview
The purpose of dividers is to create a clear visual distinction between elements or sections, improving the overall layout and user experience. It helps users understand the structure and hierarchy of the content, making it easier to navigate and understand the interface.

Dividers are commonly used to visually separate different sections, such as between paragraphs of text, in lists, or between distinct components or modules. They provide visual clarity, improve readability, and contribute to a more organised and aesthetically pleasing user interface.

{% contentPageImage {
    src:"../../../assets/img/components/divider/overview.svg",
    alt: "A horizontal divider that separates two sections."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use a divider to separate related elements into groups or break up dense content.",
            "Use a divider when items can’t be separated with open space."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t change the colour or stroke style of the divider.",
            "Don’t overuse dividers and create unnecessary noise."
        ]
    }
} %}

___

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/divider/anatomy.svg",
    alt: "Anatomy of a divider.",
    width: 450
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Divider:** 1px line."
    ]
} %}

---

## Variations

### Orientation

#### Horizontal

{% contentPageImage {
    src:"../../../assets/img/components/divider/variation-orientation-horizontal.svg",
    alt: "A horizontal divider.",
    width: 360
} %}

#### Vertical

{% contentPageImage {
    src:"../../../assets/img/components/divider/variation-orientation-vertical.svg",
    alt: "A vertical divider.",
    width: 1
} %}

---

## Modifiers

### Type

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/divider/modifier-type-default.svg",
      width: 1,
      alt: "A default divider."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Inverse</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/divider/modifier-type-inverse.svg",
      width: 1,
      alt: "An inverse divider.",
      variant: "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

--- 

## Examples

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/divider/example-menu.svg",
      width: 360,
      alt: "Examples of a divider inside of a menu."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/divider/example-allowance.svg",
      width: 1,
      alt: "Examples of a divider between different blocks of text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Divider documentation, please see the resources below."
} %}

{% resourceTable {
    componentName: 'Divider'
} %}
