---
eleventyNavigation:
    key: Web
    parent: Card
    order: 2
shouldShowContents: true
---

## Dos and don'ts

{% usage {
    do: {
        type: usageTypes.list,
        items: [
            "Use a card when the entire container is clickable.",
            "Use a card to display content and actions on a single topic.",
            "Card contents should be easy to scan for relevant and actionable information."
        ]
    },
    dont: {
        type: usageTypes.list,
        items: [
            "Don’t use a card if the container doesn’t need to be clickable, find an alternative component.",
            "Don't use a card for selection control, use radio groups, checkboxes or list items instead."
        ]
    }
} %}

---

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

## Variants

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/card/variation-default.svg",
      width: 100,
      alt: "A default card, which has a light background."
    } %}
  {% endcontentItem %}

  {% contentItem %}
    <h3>Outline</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/card/variation-outline.svg",
      width: 100,
      alt: "An outline card, which has a light background and an outline."
    } %}
  {% endcontentItem %}

  {% contentItem %}
    <h3>Inverse</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/card/variation-inverse.svg",
      width: 100,
      alt: "An inverse card, which has a dark background."
    } %}
  {% endcontentItem %}

  {% contentItem %}
    <h3>Inverse outline</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/card/variation-inverse-outline.svg",
      width: 100,
      alt: "An inverse outline card, which has a dark background and an outline."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Content

## Slot available

The card container comes with a slot, so you can add any content you like to the card. For the internal spacing of the card container, make sure to use PIE spacing tokens. You can find more information about these tokens in the spacing documentation.

{% notification { type: "information", message: "Find out more about using the slot in the [Figma slot guide](/designers/getting-started/best-practices/#use-figma-slots)." } %}

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

## Overrides

{% contentPageImage {
    src:"../../../assets/img/components/card/overrides.svg",
    alt: "Annotated examples of the elevation and border colour overrides available in the card component.",
    width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Elevation:** It can be removed or replaced with another elevation token as needed.",
        "**Border colour:** It can be replaced with another border colour token as needed. Ensure the chosen token provides sufficient contrast against the background on which the card is placed."
    ]
} %}

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

### Use when the entire card is clickable

Use cards only when the entire container is clickable and triggers an action, such as opening details or navigating to another page.
If only elements within the card (such as buttons, icon buttons, or avatars) are interactive, use a standard container or another suitable component instead.

{% notification {
  type: "warning",
  message: "Do not use a card if no interaction is required."
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/card/interactions-clickable-do.svg",
            width: "200",
            alt: "Example of four card components in that are interactive and clickable."
        }],
        caption: "Use a card when clicking anywhere on it navigates the user to another page."
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/card/interactions-clickable-dont.svg",
            width: "200",
            alt: "Example of a card component being misused as it contains an input field and a button."
        }],
        caption: "Don’t use a card when only the button inside the card is clickable and the rest of the card is not interactive."
    }
} %}

### Do not use cards for selection

Cards are designed to present content and actions, while selection components are designed to capture a user's choice. Using cards for selection can make the interaction less clear and introduce unnecessary complexity.

{% notification {
  type: "warning",
  message: "Don't use the card component for selections, use the radio group, checkbox or list item components instead."
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/card/interactions-selection-do.svg",
            width: "200",
            alt: "Example of four card components that are interactive and clickable."
        }],
        caption: "Use list items with form selection variants and clear selected/unselected states."
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/card/interactions-selection-dont.svg",
            width: "200",
            alt: "Example of a card component being misused as it contains an input field and a button."
        }],
        caption: "Don’t use cards to present selectable options."
    }
} %}

---

## Interactive states

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

### LTR examples

Here is an example of a Card in a left-to-right context:

{% contentPageImage {
    src: "../../../assets/img/components/card/example-ltr.svg",
    width: 100,
    alt: "A left-to-right example of a card being used on a menu page."
} %}

### RTL example

Here is an example of a Card in a right-to-left context:

{% contentPageImage {
    src: "../../../assets/img/components/card/example-rtl.svg",
    width: 100,
    alt: "A right-to-left example of a card being used on a menu page."
} %}
