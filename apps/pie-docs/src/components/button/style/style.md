---
draft: true
eleventyNavigation:
    key: Style
    parent: Button
    order: 2
eleventyComputed:
    primaryColourTokens: "{% include './primary-colour-tokens.json' %}"
    secondaryColourTokens: "{% include './secondary-colour-tokens.json' %}"
    outlineColourTokens: "{% include './outline-colour-tokens.json' %}"
    ghostColourTokens: "{% include './ghost-colour-tokens.json' %}"
    inverseColourTokens: "{% include './inverse-colour-tokens.json' %}"
    ghostInverseColourTokens: "{% include './ghost-inverse-colour-tokens.json' %}"
    destructiveColourTokens: "{% include './destructive-colour-tokens.json' %}"
    destructiveGhostColourTokens: "{% include './destructive-ghost-colour-tokens.json' %}"
    typographyTokens: "{% include './typography-tokens.json' %}"
    radiusTokens: "{% include './radius-tokens.json' %}"
---

## Colour Tokens

### Primary

{% componentDetailsTable {
  tableData: primaryColourTokens
} %}

### Secondary

{% componentDetailsTable {
  tableData: secondaryColourTokens
} %}

### Outline

{% componentDetailsTable {
  tableData: outlineColourTokens
} %}

### Ghost

{% componentDetailsTable {
  tableData: ghostColourTokens
} %}


### Inverse

{% componentDetailsTable {
  tableData: inverseColourTokens
} %}

### Ghost inverse

{% componentDetailsTable {
  tableData: ghostInverseColourTokens
} %}

### Destructive

{% componentDetailsTable {
  tableData: destructiveColourTokens
} %}

### Destructive ghost

{% componentDetailsTable {
  tableData: destructiveGhostColourTokens
} %}

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [colour](/foundations/colour/overview) documentation."
} %}

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [design tokens](/foundations/design-tokens/overview)."
} %}

---

## Typography tokens

{% componentDetailsTable {
  tableData: typographyTokens
} %}

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [typography](/foundations/typography/overview) documentation."
} %}

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [design tokens](/foundations/design-tokens/overview)."
} %}

---

## Radius tokens

{% componentDetailsTable {
  tableData: radiusTokens
} %}

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [radius](/foundations/radius/overview) documentation."
} %}

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [design tokens](/foundations/design-tokens/overview)."
} %}

---

## Structure

Structure outlines the internal spacing of the component. 
The side padding of the label should always be maintained regardless of the length of the label.

### Large & medium

{% contentPageImage {
    src:"../../../assets/img/components/button/structure-large-and-medium.svg",
    alt: "Spacing and padding of a large and a medium button.",
    width: 193
} %}

{% contentLayout %}
  {% contentItem %}
    <h3>Small Expressive</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/button/structure-small-expressive.svg",
      width: 170,
      alt: "Spacing and padding of a small - expressive button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>XSmall</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/button/structure-xsmall.svg",
      width: 131,
      alt: "Spacing and padding of a xsmall button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
