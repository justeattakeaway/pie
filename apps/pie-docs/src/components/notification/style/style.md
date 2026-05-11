---
eleventyNavigation:
    key: Style
    parent: Notification
    order: 2
eleventyComputed:
    colourNeutral: "{% include './colour-neutral.json' %}"
    colourNeutralAlternative: "{% include './colour-neutral-alternative.json' %}"
    colourTranslucent: "{% include './colour-translucent.json' %}"
    colourInfo: "{% include './colour-info.json' %}"
    colourSuccess: "{% include './colour-success.json' %}"
    colourWarning: "{% include './colour-warning.json' %}"
    colourError: "{% include './colour-error.json' %}"
    typographyLarge: "{% include './typography-large.json' %}"
    typographySmall: "{% include './typography-small.json' %}"
    radiusInline: "{% include './radius-inline.json' %}"
shouldShowContents: false
permalink: components/notification/style/
---

## Colour

### Neutral

{% componentDetailsTable {
  tableData: colourNeutral
} %}

### Neutral alternative

{% componentDetailsTable {
  tableData: colourNeutralAlternative
} %}

### Translucent

{% componentDetailsTable {
  tableData: colourTranslucent
} %}

### Info

{% componentDetailsTable {
  tableData: colourInfo
} %}

### Success

{% componentDetailsTable {
  tableData: colourSuccess
} %}

### Warning

{% componentDetailsTable {
  tableData: colourWarning
} %}

### Error

{% componentDetailsTable {
  tableData: colourError
} %}

<div>
    <pie-notification class="c-contentPage-notification" variant="neutral">
        <icon-link slot="icon" style="background-color: var(--dt-color-container-default); color: var(--dt-color-content-default);"></icon-link>
        <span>Check out the <a href="/foundations/iconography/">Placeholder - Icon with background</a> colour properties.</span>
    </pie-notification>
</div>

<div>
    <pie-notification class="c-contentPage-notification" variant="neutral">
        <icon-link slot="icon" style="background-color: var(--dt-color-container-default); color: var(--dt-color-content-default);"></icon-link>
        <span>Check out the <a href="/foundations/colour/">colour</a> documentation.</span>
    </pie-notification>
</div>

---

## Typography

### Wide + Narrow - large

{% componentDetailsTable {
  tableData: typographyLarge
} %}

### Narrow - small

{% componentDetailsTable {
  tableData: typographySmall
} %}

<div>
    <pie-notification class="c-contentPage-notification" variant="neutral">
        <icon-link slot="icon" style="background-color: var(--dt-color-container-default); color: var(--dt-color-content-default);"></icon-link>
        <span>Check out the <a href="/foundations/typography/">typography</a> documentation.</span>
    </pie-notification>
</div>

---

## Radius

### Inline variants

{% componentDetailsTable {
  tableData: radiusInline
} %}

<div>
    <pie-notification class="c-contentPage-notification" variant="neutral">
        <icon-link slot="icon" style="background-color: var(--dt-color-container-default); color: var(--dt-color-content-default);"></icon-link>
        <span>Check out the <a href="/foundations/radius/">radius</a> documentation.</span>
    </pie-notification>
</div>

---

## Structure

Outlines the internal spacing structure of the component. See the [Spacing](/foundations/spacing/) documentation for token details.

### Wide

{% contentPageImage {
    src:"../../../assets/img/components/notification/structure-wide.svg",
    alt: "Structure diagram of the notification component on wide screens showing internal spacing values",
    width: 1024
} %}

### Narrow - large

{% contentPageImage {
    src:"../../../assets/img/components/notification/structure-narrow.svg",
    alt: "Structure diagram of the notification component on narrow screens in large size showing internal spacing values",
    width: 360
} %}

### Narrow - small

{% contentPageImage {
    src:"../../../assets/img/components/notification/structure-narrow-small.svg",
    alt: "Structure diagram of the notification component on narrow screens in small size showing internal spacing values",
    width: 360
} %}

<div>
    <pie-notification class="c-contentPage-notification" variant="neutral">
        <icon-link slot="icon" style="background-color: var(--dt-color-container-default); color: var(--dt-color-content-default);"></icon-link>
        <span>Check out the <a href="/foundations/spacing/">spacing</a> documentation.</span>
    </pie-notification>
</div>

<div>
    <pie-notification class="c-contentPage-notification" variant="neutral">
        <icon-link slot="icon" style="background-color: var(--dt-color-container-default); color: var(--dt-color-content-default);"></icon-link>
        <span>Check out the <a href="/foundations/design-tokens/">design tokens</a>.</span>
    </pie-notification>
</div>
