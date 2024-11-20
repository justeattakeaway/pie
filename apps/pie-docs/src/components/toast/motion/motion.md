---
eleventyNavigation:
    key: Motion
    parent: 'Toast'
    order: 2
eleventyComputed:
    enterTransition: "{% include './enter-transition.json' %}"
    existTransition: "{% include './exit-transition.json' %}"
---

## Example

Illustrates the animations that happen when the Toast component enters and exits from view. You can see an animated example of this component here.

{% contentPageImage {
    src:"../../../assets/img/components/toast/motion-example.svg",
    alt: "A toast component is displayed in the bottom left of the page."
} %}

___

## Enter transition

When the toast component enters into view, it always enters from the left hand side of the screen at 200ms on the x axis. We use $easing-out to show the toast decelerate into position.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/toast/motion-enter-transition.svg",
        alt: "A chart showing the toast component's enter transition with an X Translate animation. It slides in from the left over 200ms, using an easing-out effect."
    } %}
    {% componentDetailsTable { tableData: enterTransition } %}
{% endcontentWrapper %}

___

## Exit transition

When the toast component exits from view, it always exits towards the left hand side of the screen at 100ms on the X axis. We use $easing-in to show the toast accelerate from stationary to off the screen. Exit transitions are always quicker than entrance transitions because they are no longer needed.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/toast/motion-exit-transition.svg",
        alt: "A chart showing the toast component's exit transition with an X Translate animation. It exits to the left over 100ms, using an easing-in effect to gently accelerate out of view."
    } %}
    {% componentDetailsTable { tableData: existTransition } %}
{% endcontentWrapper %}