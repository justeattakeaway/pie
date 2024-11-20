---
eleventyNavigation:
    key: Motion
    parent: 'Radio'
    order: 2
shouldShowContents: true
eleventyComputed:
    hover: "{% include './hover.json' %}"
    active: "{% include './active.json' %}"
    selected: "{% include './selected.json' %}"
    unselected: "{% include './unselected.json' %}"
---

## Example

Illustrates the animations that happen in the radio component. In this component we have animations on hover and active states as well as when the component is selected and unselected.

{% contentPageImage {
    src:"../../../assets/img/components/radio/motion/overview.svg",
    alt: "Three radio button circles sat horizontally showing different stages of an animation that goes from empty to filled.",
    width: "1032px",
    height: "m"
} %}

---

## Hover

When the user hovers over an unselected radio (on:Hover), the hover state `$hover01` fades in at 200ms. When a user moves the mouse away (off:Hover) the hover state `$hover01` fades out at 200ms.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/radio/motion/hover.svg",
        alt: "A chart showing timing in milliseconds for the hover-01 token."
    } %}
    {% componentDetailsTable { tableData: hover } %}
{% endcontentWrapper %}

---

## Active

When the user clicks a radio (on:Click), the active state `$active01` fades in at 100ms and then out at 100ms.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/radio/motion/active.svg",
        alt: "A chart showing timing in milliseconds for the active-01 token."
    } %}

    {% componentDetailsTable { tableData: active } %}
{% endcontentWrapper %}

---

## Selected

When a radio is selected the colour fill `$interactive-brand` scales from the centre 0-100%. The middle scales 0-100% at a slight offset of 50ms for a transition that takes 150ms in total.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/radio/motion/selected.svg",
        alt: "A chart showing the duration of an animation for the radio button and its fill colour when selected."
    } %}

    {% componentDetailsTable {
    tableData: selected
    } %}
{% endcontentWrapper %}

---

## Unselected

When a radio is unselected both the control and the fill scale down 100-0% at 100ms.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/radio/motion/unselected.svg",
        alt: "A chart showing the duration of an animation for the radio button and its fill colour when unselected."
    } %}

    {% componentDetailsTable {
    tableData: unselected
    } %}
{% endcontentWrapper %}
