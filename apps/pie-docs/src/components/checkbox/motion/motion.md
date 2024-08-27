---
eleventyNavigation:
    key: Motion
    parent: 'Checkbox'
    order: 2
shouldShowContents: true
eleventyComputed:
    hover: "{% include './hover.json' %}"
    active: "{% include './active.json' %}"
    selected: "{% include './selected.json' %}"
    unselected: "{% include './unselected.json' %}"
---

## Example

Illustrates the animations that happen in the checkbox component. In this component we have animations on hover and active states as well as when the component is selected and unselected.

{% contentPageImage {
    src:"../../../assets/img/components/checkbox/motion-example.svg",
    alt: "Three checkboxes in a horizontal row. First one in default state, second one in hover state and third one in checked state.",
    width: "586px",
    height: "m"
} %}

---

## Hover

When the user hovers over an unselected checkbox, the hover state `$hover-01` fades in at 200ms. When a user moves the mouse away the hover state `$hover-01` fades out at 200ms.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/checkbox/checkbox-hover-animation.svg",
        alt: "A chart showing timing in milliseconds for hover 01 property."
    } %}
    {% componentDetailsTable { tableData: hover } %}
{% endcontentWrapper %}

---

## Active

When the user clicks a checkbox, the active state `$active-01` fades in at 100ms and then out at 100ms.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/checkbox/checkbox-active-animation.svg",
        alt: "A chart showing timing in milliseconds for active 01 property."
    } %}

    {% componentDetailsTable { tableData: active } %}
{% endcontentWrapper %}

---

## Selected

When a checkbox is selected the colour fill `$interactive-brand` scales from the centre 0-100% and the tick path animates in, both at 150ms.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/checkbox/checkbox-selected-animation.svg",
        alt: "A chart showing timing in milliseconds for tick and fill properties."
    } %}

    {% componentDetailsTable {
    tableData: selected
    } %}
{% endcontentWrapper %}

---

## Unselected

When a checkbox is unselected both the tick and the fill scale down 100-0% at 100ms.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/checkbox/checkbox-unselected-animation.svg",
        alt: "A chart showing timing in milliseconds for tick and fill properties."
    } %}

    {% componentDetailsTable {
    tableData: unselected
    } %}
{% endcontentWrapper %}
