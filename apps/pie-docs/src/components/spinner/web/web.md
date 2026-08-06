---
eleventyNavigation:
    key: Web
    parent: 'Spinner'
    order: 2
eleventyComputed:
    sizes: "{% include '../overview/sizes.json'%}"
shouldShowContents: true
---

## Do's and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use a spinner whenever the wait anticipated wait time is between 2 and 5 seconds.",
            "Use when retrieving data or performing slow computations to notify the user that their request is being processed."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Avoid showing multiple spinners on a single page."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/spinner/web/spinner-anatomy.svg",
    alt: "Number one attached to the spinner component.",
    width: 210
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Spinner:** Visual indicator that continuously animates."
    ]
} %}

---

## Variants

### Brand

{% contentPageImage {
    src:"../../../assets/img/components/spinner/web/spinner-brand.svg",
    width: 48,
    alt: "Brand variation of the spinner component in orange"
} %}

### Secondary

{% contentPageImage {
    src:"../../../assets/img/components/spinner/web/spinner-secondary.svg",
    width: 48,
    alt: "Secondary variation of the spinner component in black and white"
} %}

### Secondary dark

{% contentPageImage {
    src:"../../../assets/img/components/spinner/web/spinner-secondary.svg",
    width: 48,
    alt: "Secondary dark variation of the spinner component in black and white colour"
} %}

### Inverse

{% contentPageImage {
    src:"../../../assets/img/components/spinner/web/spinner-inverse.svg",
    width: 48,
    variant: "inverse",
    alt: "Inverse variation of the spinner component in white and gray colour on a black background"
} %}

### Inverse light

{% contentPageImage {
    src:"../../../assets/img/components/spinner/web/spinner-inverse.svg",
    width: 48,
    variant: "inverse",
    alt: "Inverse variation of the spinner component in white and gray colour on a black background"
} %}

---

## Size

Outlines the spinner sizes that are available, and where they should be used across our products.

{% componentDetailsTable {
tableData: sizes
} %}

---

## Placement

Spinners should always be centred horizontally and vertically within the viewport, container, or component they indicate is loading.

### Page

The spinner should be centred in the viewport to indicate a full-page loading state.

{% contentPageImage {
    src:"../../../assets/img/components/spinner/web/spinner-placement-page.svg",
    width: 580,
    alt: "Three grey rectange sections with orange spinner placed top right"
} %}

### Section

The spinner should be centred in the loading section to indicate which section is loading.

{% contentPageImage {
    src:"../../../assets/img/components/spinner/web/spinner-placement-section.svg",
    width: 580,
    alt: "Inverse light variation of the spinner component"
} %}

### Components

The spinner should be centred within the component to indicate that an action is being processed.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/spinner/web/spinner-placement-component-1.svg",
      width: 70,
      alt: "A spinner centred within a button component to indicate it is processing an action."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/spinner/web/spinner-placement-component-2.svg",
      width: 48,
      alt: "A spinner centred within an icon button component to indicate it is processing an action."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of cards in left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/spinner/web/spinner-ltr-1.svg",
    width: 390,
    alt: "Inverse light variation of the spinner component"
} %}

### RTL examples

Here are some examples of cards in right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/spinner/web/spinner-rtl-1.svg",
    width: 390,
    alt: "Inverse light variation of the spinner component"
} %}
