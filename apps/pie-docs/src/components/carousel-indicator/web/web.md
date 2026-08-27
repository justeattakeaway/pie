---
eleventyNavigation:
    key: Web
    parent: Carousel Indicator
    order: 2
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Place the Carousel Indicator below the tallest element within the row.",
            "Always position the Carousel Indicator in centre alignment only."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use the Carousel Indicator on its own without the context of a Carousel."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src: "../../../assets/img/components/carousel-indicator/anatomy.svg",
    alt: "A carousel indicator with two numbered callouts identifying the selected indicator and the unselected indicator.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Selected indicator:** Highlights which slide is currently in view.",
        "**Indicator:** Indicates how many slides there are in total."
    ]
} %}

---

## Variants

{% contentLayout %}
  {% contentItem %}
  <h3>Default</h3>
    {% contentPageImage {
        src: "../../../assets/img/components/carousel-indicator/variants-default.svg",
        alt: "A carousel indicator in the default variant, showing a row of small circular dots.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Primary</h3>
    {% contentPageImage {
        src: "../../../assets/img/components/carousel-indicator/variants-primary.svg",
        alt: "A carousel indicator in the primary variant, showing a row of small circular dots in the primary brand colour.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Modifiers

{% contentLayout %}
  {% contentItem %}
  <h3>Selected</h3>
    {% contentPageImage {
        src: "../../../assets/img/components/carousel-indicator/modifiers-selected.svg",
        alt: "A carousel indicator showing the selected modifier, with one dot filled to indicate the active slide.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Unselected</h3>
    {% contentPageImage {
        src: "../../../assets/img/components/carousel-indicator/modifiers-unselected.svg",
        alt: "A carousel indicator showing the unselected modifier, with all dots unfilled.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Layout

### Alignment

The Carousel Indicator should always be centre aligned underneath the 'view' container.

{% contentPageImage {
    src: "../../../assets/img/components/carousel-indicator/layout-alignment.svg",
    alt: "A carousel with a row of indicator dots centred horizontally beneath the slide content.",
    width: "200"
} %}

---

## Behaviour

The quantity of indicators should be equal to the number of slides. All items within the slide transition together when navigating. For example, when there are three items in a carousel, the initial two items move off screen so the following item come into view. The number of items shown can be adjusted per breakpoint to show more/less depending on available space.

{% contentPageImage {
    src: "../../../assets/img/components/carousel-indicator/behaviour-start.svg",
    alt: "A carousel at the start position with the first indicator dot selected.",
    width: "200",
    caption: "A carousel at the start position with the first indicator dot selected."
} %}

{% contentPageImage {
    src: "../../../assets/img/components/carousel-indicator/behaviour-end.svg",
    alt: "A carousel at the end position with the last indicator dot selected.",
    width: "200",
    caption: "A carousel at the end position with the last indicator dot selected."
} %}

---

## Interactive states

{% contentLayout %}
  {% contentItem %}
  <h3>Default</h3>
    {% contentPageImage {
        src: "../../../assets/img/components/carousel-indicator/interactive-states-default.svg",
        alt: "A carousel indicator in its default state with no interaction applied.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Hover</h3>
    {% contentPageImage {
        src: "../../../assets/img/components/carousel-indicator/interactive-states-hover.svg",
        alt: "A carousel indicator with one dot in its hover state.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h3>Active</h3>
    {% contentPageImage {
        src: "../../../assets/img/components/carousel-indicator/interactive-states-active.svg",
        alt: "A carousel indicator with one dot in its active (pressed) state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Focus</h3>
    {% contentPageImage {
        src: "../../../assets/img/components/carousel-indicator/interactive-states-focus.svg",
        alt: "A carousel indicator with one dot showing a visible focus ring.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR example

Here are some examples of a Carousel indicator in LTR context.

{% contentPageImage {
    src: "../../../assets/img/components/carousel-indicator/example-ltr.svg",
    alt: "A carousel indicator displayed in a left-to-right layout context.",
    width: "200"
} %}

### RTL example

Here are some examples of a Carousel indicator in RTL context.

{% contentPageImage {
    src: "../../../assets/img/components/carousel-indicator/example-rtl.svg",
    alt: "A carousel indicator displayed in a right-to-left layout context.",
    width: "200"
} %}
