---
eleventyNavigation:
    key: Overview
    parent: Icon Button
    order: 1
eleventyComputed:
    sizes: "{% include './sizes.json' %}"
shouldShowContents: true
---

## Overview

The purpose of icon buttons is to offer a visually engaging and efficient way for users to interact with various functions or actions within an interface. They allow for clear and concise communication of functionality, particularly in situations where text may be less practical or necessary.

Icon buttons feature simple and recognizable icons that represent a specific action or functionality. They are often used in toolbars, navigation menus, or interactive elements where space is limited or a visual representation is more intuitive than text.

{% contentPageImage {
    src:"../../../assets/img/components/icon-button/overview.svg",
    alt: "Two icon buttons that are displayed together in a row."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
           "Use it when an icon button on its own can clearly indicate the action."
        ]
    },
    dont: { 
        type: usageTypes.text,
        items: [
            "Don’t use if an icon on its own doesn’t clearly indicate the action, in the case use a standard [Button](/components/button/overview)."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/icon-button/anatomy.svg",
    alt: "Anatomy of an icon button.",
    width: 180
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon:** Icon that visually represents the action."
    ]
} %}

---

## Variations

{% contentLayout %}
  {% contentItem %}
    <h3>Primary</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-primary.svg",
      width: 56,
      alt: "Primary variant of an icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Secondary</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-secondary.svg",
      width: 56,
      alt: "Secondary variant of an icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Outline</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-outline.svg",
      width: 56,
      alt: "Outline variant of an icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Ghost</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-ghost.svg",
      width: 56,
      alt: "Ghost variant of an icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Ghost secondary</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-ghost-secondary.svg",
      width: 56,
      alt: "Ghost secondary variant of an icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Inverse</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-inverse.svg",
      width: 56,
      alt: "Inverse variant of an icon button.",
      variant: 'inverse'
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Ghost Inverse</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-ghost-inverse.svg",
      width: 56,
      alt: "Ghost Inverse variant of an icon button.",
      variant: 'inverse'
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Sizes

Outlines the Icon Button sizes that are available, and where they should be used across our products.

{% componentDetailsTable {
  tableData: sizes
} %}

--- 

## Hierarchy

Icon buttons should follow a hierarchy of importance with regard to the action that is being committed by the user.

### High

The primary icon button should be the single most important button in the hierarchy and therefore the most prominent. There should only be one high-priority Icon Button on the page.

{% contentPageImage {
    src:"../../../assets/img/components/icon-button/hierarchy-high.svg",
    alt: "A single primary icon button",
    width: 56
} %}

### Medium 

The secondary and inverse icon buttons are of less importance and should have less prominence.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/hierarchy-medium-secondary.svg",
      width: 56,
      alt: "Primary variant of an icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/hierarchy-medium-inverse.svg",
      width: 56,
      alt: "Inverse variant of an icon button.",
      variant: "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Low 

The outline, ghost, ghost tertiary and ghost inverse Icon Buttons should have the lowest prominence.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/hierarchy-low-outline.svg",
      width: 56,
      alt: "Outline variant of an icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/hierarchy-low-ghost.svg",
      width: 56,
      alt: "Ghost variant of an icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/hierarchy-low-ghost-secondary.svg",
      width: 56,
      alt: "Ghost secondary variant of an icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/hierarchy-low-ghost-inverse.svg",
      width: 56,
      alt: "Ghost Inverse variant of an icon button.",
      variant: "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Layout

### Pairing

When using a Icon Button pairing, the key is to maintain consistency by all be the same type, with a 8px spacing between.

{% contentPageImage {
    src:"../../../assets/img/components/icon-button/layout-pairing.svg",
    alt: "Two icon buttons that are displayed together in a row.",
    width: "104px",
    variant: "secondary"
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/interactive-state-default.svg",
      width: 48,
      alt: "Default state of an icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Hover</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/interactive-state-hover.svg",
      width: 48,
      alt: "An icon button that is hovered."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/interactive-state-active.svg",
      width: 48,
      alt: "An icon button that is active."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Focus</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/interactive-state-focus.svg",
      width: 72,
      alt: "An icon button that is focused."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Disabled</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/interactive-state-disabled.svg",
      width: 48,
      alt: "An icon button that is disabled."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Loading</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/interactive-state-loading.svg",
      width: 48,
      alt: "An icon button that is loading."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Example

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/example-hamburger-menu.svg",
      width: 48,
      alt: "A hamburger menu icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/example-close.svg",
      width: 48,
      alt: "A close icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/example-icon-button-pair.svg",
      width: 104,
      alt: "Info and heart icon buttons."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

--- 

## Resources

{% resourceTable {
    componentName: 'Icon Button'
} %}