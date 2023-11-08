---
eleventyNavigation:
    key: Style
    parent: Template
    order: 2
eleventyComputed:
    colourTokens: "{% include './colour-tokens.json' %}"
    typographyTokens: "{% include './typography-tokens.json' %}"
---

## Colour Tokens

{% componentDetailsTable {
  tableData: colourTokens
} %}

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [link](/foundations/design-tokens/overview)."
} %}

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [link](/foundations/design-tokens/overview)."
} %}

--- 

## Typography

{% componentDetailsTable {
  tableData: typographyTokens
} %}

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [link](/foundations/design-tokens/overview)."
} %}

---

## Structure

Outlines the internal spacing structure of the component. See the Spacing documentation for token details.

{% contentPageImage {
    src:"../../../assets/img/components/button/overview.svg",
    alt: "Spacing and padding of a large and a medium button.",
    width: 193
} %}