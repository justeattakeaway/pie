---
eleventyNavigation:
    key: Motion
    parent: Tooltip - Icon
    order: 3
shouldShowContents: true
eleventyComputed:
    enterTransition: "{% include './enter-transition.json' %}"
    exitTransition: "{% include './exit-transition.json' %}"
---

## Example

Illustrates the animations that happen when the Tooltip - Icon component enters and exits from view. You can see an animated example of this component [here](https://drive.google.com/drive/folders/1qTev3eXjn5YZJVn9A9YxK6OBxo4G_Bm3){target="_blank"}.

{% contentPageImage {
    src:"../../../../assets/img/components/tooltip/icon/motion/motion-example.svg",
    alt: "A tooltip - icon skeleton displayed above an icon button."
} %}

---

## Enter transition

When a tooltip - icon enters view, it moves 4px away from the point where it was activated at 150ms. It can move down, up, left or right depending on its ending position.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../../assets/img/components/tooltip/icon/motion/motion-enter-transition.svg",
        alt: "A chart showing the tooltip - icon's enter transition, with translate and opacity changes over 150ms."
    } %}
    {% componentDetailsTable { tableData: enterTransition } %}
{% endcontentWrapper %}

---

## Exit transition

When a tooltip - icon exits view, it moves 4px towards the point where it was activated at 100ms. It can move down, up, left or right depending on its starting position. Exit transitions are always quicker than entry.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../../assets/img/components/tooltip/icon/motion/motion-exit-transition.svg",
        alt: "A chart showing the tooltip - icon's exit transition, with translate and opacity changes over 100ms."
    } %}
    {% componentDetailsTable { tableData: exitTransition } %}
{% endcontentWrapper %}
