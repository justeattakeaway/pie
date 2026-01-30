---
eleventyNavigation:
    key: Motion
    parent: Modal
    order: 2
eleventyComputed:
    enterTransition: "{% include './enter-transition.json' %}"
    existTransition: "{% include './exit-transition.json' %}"
---

## Example

Illustrates the movement taking place when a modal enters and exit from view. You can see an animated example of this component [here](https://drive.google.com/drive/folders/1Gis7qhjs30rGMyo5nE-sQUDzhL0hE1c3){target=“_blank”}.

{% contentPageImage {
    src:"../../../assets/img/components/modal/motion-example.svg",
    alt: "A modal component skeleton displayed in the center the page."
} %}

___

## Enter transition

When a modal loads into view, it uses $enter-fade-slide. It moves down 40px on the Y axis from it’s starting point, regardless of if the modal is pinned at the top or centre. The opacity starts at 0% and increases to 100%.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/modal/motion-enter-transition.svg",
        alt: "A chart showing the modal component's enter transition with an Y Translate animation."
    } %}
    {% componentDetailsTable { tableData: enterTransition } %}
{% endcontentWrapper %}

___

## Exit transition

When a modal is dismissed, it uses $exit-fade-slide. It moves up 40px on the Y axis from it’s starting point, regardless of if the modal is pinned at the top or centre. The opacity starts at 100% and decreases to 0%. The exit transition is always faster.

{% contentWrapper %}
    {% contentPageImage {
        src:"../../../assets/img/components/modal/motion-exit-transition.svg",
        alt: "A chart showing the modal component's exit transition with an Y Translate animation"
    } %}
    {% componentDetailsTable { tableData: existTransition } %}
{% endcontentWrapper %}