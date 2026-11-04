---
eleventyNavigation:
    key: Apps
    parent: Card
    order: 3
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
            "Don't use a card if the container doesn't need to be clickable, find an alternative component.",
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

### Slot available 

The card container comes with a slot, so you can add any content you like to the card. For the internal spacing of the card container, make sure to use PIE spacing tokens. You can find more information about these tokens in the spacing documentation.

{% notification {
  type: "information",
  message: "Find out more about using the slot in the [Figma slot guide](/designers/getting-started/best-practices/#use-figma-slots)."
  } %}

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
    src:"../../../assets/img/components/card/anatomy.svg",
    alt: "Anatomy of a card.",
    width: 291
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Elevation:** Can be removed or replaced with another elevation token as needed.",
        "**Border colour:** Can be replaced with another border colour token as needed. Ensure the chosen token provides sufficient contrast against the card's background for clear visibility."
    ]
} %}

---

## Interactions

### Use when the entire card is clickable 

Use cards only when the entire container is clickable and triggers an action, such as opening details or navigating to another page. 
If only elements within the card (such as buttons, icon buttons, or avatars) are interactive, use a standard container or another suitable component instead.


{% notification {
  type: "warning",
  message: "Do not use a card if no interaction is required."
  } %}


### Do not use cards for selection

Cards are designed to present content and actions, while selection components are designed to capture a user's choice. Using cards for selection can make the interaction less clear and introduce unnecessary complexity.
For selections, use dedicated components such as radio groups, checkboxes or list items instead.

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
    <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/card/interactive-state-active.svg",
      width: 100,
      alt: "A card that is active."
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
    src: "../../../assets/img/components/card/apps-example-ltr.svg",
    width: 100,
    alt: "A left-to-right example of a card being used on a menu page."
} %}

### RTL example

Here is an example of a Card in a right-to-left context:

{% contentPageImage {
    src: "../../../assets/img/components/card/apps-example-rtl.svg",
    width: 100,
    alt: "A right-to-left example of a card being used on a menu page."
} %}
