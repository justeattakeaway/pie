---
eleventyNavigation:
    key: Motion
    parent: Skeleton
    order: 4
eleventyComputed:
    motionEasingData: "{% include './motion-easing.json' %}"
    shimmerTokensData: "{% include './shimmer-tokens.json' %}"
    transitionToLoadedStateData: "{% include './transition-to-loaded-state.json' %}"
---

## Shimmer animation

The shimmer includes a layer blur with a width of 80 pixels set to a 135° angle and moves from left to right of the component.

{% notification {
    type: "information",
    message: "Note: This animation is a constant loop."
} %}

{% contentPageImage {
    src: "../../../assets/img/components/skeleton/animation-shimmer.svg",
    alt: "Three frames of a skeleton card showing the shimmer moving from left to right across the content."
} %}

---

## Shimmer

All shimmer animations on screen should animate in the same direction and at the same time. Do not offset them.

{% contentWrapper %}
    {% contentPageImage {
        src: "../../../assets/img/components/skeleton/animation-shimmer-timing.svg",
        alt: "A timeline chart showing the shimmer blur moving across a component for 1000ms, followed by a 200ms delay before repeating."
    } %}
    {% componentDetailsTable { tableData: motionEasingData } %}
{% endcontentWrapper %}

---

## The 2.5 second rule

- On **native (mobile) screens**: always show the shimmer animation.
- On **larger web screens**: only show the shimmer if loading takes longer than 2.5 seconds.

---

## Shimmer tokens

Shimmer tokens have been assigned for each skeleton token.

{% simpleTable {
    tableData: shimmerTokensData,
    isFullWidth: true
} %}

---

## Transition to loaded state

When content finishes loading, it fades in to replace the skeleton.

{% simpleTable {
    tableData: transitionToLoadedStateData,
    isFullWidth: true
} %}
