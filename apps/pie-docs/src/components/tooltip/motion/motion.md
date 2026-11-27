---
eleventyNavigation:
    key: Motion
    parent: Tooltip
    order: 5
shouldShowContents: true
eleventyComputed:
    enterTransition: "{% include './enter-transition.json' %}"
    exitTransition: "{% include './exit-transition.json' %}"
---

## Example

Illustrates the animations that happen when the Tooltip component enters and exits from view. You can see an animated example of this component [here](https://drive.google.com/drive/folders/1HRWNZwO8J8p-SZZP8AIZOl66ngyuMqtS){target="_blank"}.

{% contentPageImage {
    src:"../../../assets/img/components/tooltip/motion/motion-example.svg",
    alt: "A tooltip skeleton displayed next to an information icon."
} %}

---

## Enter transition

When a tooltip enters view, it moves 4px away from the point where it was activated at 200ms. It can move down, up, left or right depending on its ending position.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/tooltip/motion/motion-enter-transition.svg",
        alt: "A chart showing the tooltip's enter transition, with translate and opacity changes over 200ms."
    } %}
    {% componentDetailsTable { tableData: enterTransition } %}
{% endcontentWrapper %}

---

## Exit transition

When a tooltip exits view, it moves 4px towards the point where it was activated at 150ms. It can move down, up, left or right depending on its starting position. Exit transitions are always quicker than entry.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/tooltip/motion/motion-exit-transition.svg",
        alt: "A chart showing the tooltip's exit transition, with translate and opacity changes over 150ms."
    } %}
    {% componentDetailsTable { tableData: exitTransition } %}
{% endcontentWrapper %}
