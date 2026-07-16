---
eleventyNavigation:
    key: Web
    parent: Icon Button
    order: 2
eleventyComputed:
    sizes: "{% include '../overview/sizes.json' %}"
shouldShowContents: true
---

## Dos and Don'ts

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
            "Don't use if an icon on its own doesn't clearly indicate the action, in the case use a standard [Button](/components/button)."
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

## Variants

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
    <h3>Primary - alternative</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-primary-alternative.svg",
      width: 56,
      alt: "Primary alternative variant of an icon button."
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
    <h3>Translucent</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-translucent.svg",
      width: 56,
      alt: "Translucent variant of an icon button."
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
    <h3>Ghost secondary dark</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-ghost-secondary-dark.svg",
      width: 56,
      alt: "Ghost secondary dark variant of an icon button."
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
    <h3>Inverse outline</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-inverse-outline.svg",
      width: 56,
      alt: "Inverse outline variant of an icon button.",
      variant: 'inverse'
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Inverse ghost</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-ghost-inverse.svg",
      width: 56,
      alt: "Ghost Inverse variant of an icon button.",
      variant: 'inverse'
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Inverse ghost light</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/variation-inverse-ghost-light.svg",
      width: 56,
      alt: "Ghost Inverse light variant of an icon button.",
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
    alt: "Primary variant of an icon button.",
    width: 56
} %}

### Medium

The secondary and inverse icon buttons are of less importance and should have less prominence.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/hierarchy-medium-secondary.svg",
      width: 56,
      alt: "Secondary variant of an icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/hierarchy-medium-inverse.svg",
      width: 56,
      alt: "Secondary inverse variant of an icon button.",
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
      alt: "Ghost inverse variant of an icon button.",
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


## Overrides

### Icon colour override

Overrides are available in design and engineering for Secondary and Tertiary icon buttons which have orange icons. The default icon colour token $content-interactive-brand-solid (orange) can be replaced with $content-interactive-secondary-solid (black). 

This can be helpful if you need to use a Secondary or Tertiary icon button but the orange icon doesn’t work with the surrounding UI.

{% contentLayout %}
  {% contentItem %}
    <h4>Standard icon</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/overrides-standard-icon.svg",
      width: 97,
      alt: "A button with a standard coloured icon."
    } %}
  {% endcontentItem %}
    {% contentItem %}
    <h4>Overridden icon</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-button/overrides-overridden-icon.svg",
      width: 97,
      alt: "A button with an icon that has colour overridden."
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