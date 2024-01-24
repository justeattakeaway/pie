---
eleventyNavigation:
    key: Overview
    parent: Card
    order: 1
shouldShowContents: true
---

## Overview

The purpose of cards is to provide a cohesive and structured way of displaying content. Cards are interactive, allowing users to click or tap for more details or to perform specific actions related to the displayed item.

Cards are designed to present concise and focused information organised in a visually appealing manner. They are commonly used to showcase individual items, such as products or articles, and are usually arranged in a grid or stacked layout.


{% contentPageImage {
    src:"../../../assets/img/components/card/overview.svg",
    alt: "A card container with text and an icon inside of it."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.list,
        items: [
            "Use a card to display content and actions on a single topic.",
            "Card contents should be easy to scan for relevant and actionable information."
        ]
    },
    dont: {
        type: usageTypes.list,
        items: [
            "Don't use a card if the container doesn't need to be clickable, find an alternative component."
        ]
    }
} %}

___

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/card/anatomy.svg",
    alt: "Anatomy of a card.",
    width: 291
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Container**: Background container that organises the information."
    ]
} %}

---

## Variations

### Default

{% contentPageImage {
    src: "../../../assets/img/components/card/variation-default.svg",
    width: "100",
    alt: "A default card, which has a light background."
} %}

### Outline

{% contentPageImage {
    src: "../../../assets/img/components/card/variation-outline.svg",
    width: "100",
    alt: "An outline card, which has a light background and an outline."
} %}

### Inverse

{% contentPageImage {
    src: "../../../assets/img/components/card/variation-inverse.svg",
    width: "100",
    alt: "An inverse card, which has a dark background."
} %}

### Inverse outline

{% contentPageImage {
    src: "../../../assets/img/components/card/variation-inverse-outline.svg",
    width: "100",
    alt: "An inverse outline card, which has a dark background and an outline."
} %}

---

## Content

The card container comes with a slot, so you can add any content you like to the card. For the internal spacing of the card container, make sure to use PIE spacing tokens. You can find more information about these tokens in the spacing documentation.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/card/content-padding.svg",
      width: 100,
      alt: "Padding of the card."
    } %}
  {% endcontentItem %}

  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/card/content-spacing.svg",
      width: 100,
      alt: "Internal spacing within a card."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Behaviour

Cards can be used as draggable items. When the card is grabbed, the pointer changes and the drag state is activated.

{% contentPageImage {
    src: "../../../assets/img/components/card/behaviour.svg",
    width: 100,
    alt: "Behaviour of a card when it is being dragged."
} %}

---

## Interactions

### Drag on mobile

Mobile devices don't have a hover cursor, so dragging actions might not be the most intuitive choice on mobile screens. If you're using a draggable card in your mobile designs, make sure to provide clear context and guidance to the user.

---

## Interactive States

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/card/interactive-state-default.svg",
      width: 100,
      alt: "Default state of a card."
    } %}
  {% endcontentItem %}

  {% contentItem %}
    <h3>Hover</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/card/interactive-state-hover.svg",
      width: 100,
      alt: "A card that is hovered."
    } %}
  {% endcontentItem %}

  {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/card/interactive-state-active.svg",
      width: 100,
      alt: "A card that is active."
    } %}
  {% endcontentItem %}

  {% contentItem %}
    <h3>Focus</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/card/interactive-state-focus.svg",
      width: 100,
      alt: "A card that is focused."
    } %}
  {% endcontentItem %}

  {% contentItem %}
    <h3>Drag</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/card/interactive-state-drag.svg",
      width: 100,
      alt: "A card that is being dragged."
    } %}
  {% endcontentItem %}

  {% contentItem %}
    <h3>Disabled</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/card/interactive-state-disabled.svg",
      width: 100,
      alt: "A disabled card."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

Outlines the atomic level interactive elements for the component.

### LTR examples

Here is an example of a Card in a left-to-right context:

{% contentPageImage {
    src: "../../../assets/img/components/card/example-ltr.svg",
    width: 100,
    alt: "A left-to-right example of a card being used on a menu page."
} %}

### RTL Example

Here is an example of a Card in a right-to-left context:

{% contentPageImage {
    src: "../../../assets/img/components/card/example-rtl.svg",
    width: 100,
    alt: "A right-to-left example of a card being used on a menu page."
} %}

---

## Resources

{% resourceTable {
componentName: 'Card'
} %}
