---
eleventyNavigation:
    key: Overview
    parent: 'Spinner'
    order: 1
eleventyComputed:
    sizes: "{% include './sizes.json'
    %}"
shouldShowContents: true
permalink: components/spinner/
---

## Overview

The purpose of spinners is to communicate activity and progress to users, assuring them that the system is actively working and that their requested action is being processed. They enhance the user experience by reducing uncertainty and providing feedback during waiting periods.

Spinners are commonly used to indicate tasks such as content loading, data retrieval or processing that may require some time.

{% contentPageImage {
    src:"../../assets/img/components/spinner/overview.svg",
    alt: "A spinner component in the middle of a white container on a blue background."
} %}

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
    src:"../../../assets/img/components/spinner/spinner-anatomy.svg",
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

## Variations

### Brand

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-brand.svg",
    width: 48,
    alt: "Brand variation of the spinner component in orange"
} %}

### Secondary

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-secondary.svg",
    width: 48,
    alt: "Secondary variation of the spinner component in black and white"
} %}

### Secondary dark

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-secondary.svg",
    width: 48,
    alt: "Secondary dark variation of the spinner component in black and white colour"
} %}

### Inverse

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-inverse.svg",
    width: 48,
    variant: "inverse",
    alt: "Inverse variation of the spinner component in white and gray colour on a black background"
} %}

### Inverse light

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-inverse.svg",
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
    src:"../../../assets/img/components/spinner/spinner-placement-page.svg",
    width: 580,
    alt: "Three grey rectange sections with orange spinner placed top right"
} %}

### Section

The spinner should be centred in the loading section to indicate which section is loading.

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-placement-section.svg",
    width: 580,
    alt: "Inverse light variation of the spinner component"
} %}

### Components

The spinner should be centred within the component to indicate that an action is being processed.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/spinner/spinner-placement-component-1.svg",
      width: 70,
      alt: ""
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/spinner/spinner-placement-component-2.svg",
      width: 48,
      alt: ""
    } %}
  {% endcontentItem %}
{% endcontentLayout %} 

---

## Interactions

### Drag on mobile

Mobile devices don't have a hover cursor, so dragging actions might not be the most intuitive choice on mobile screens. If you’re using a draggable card container in your mobile designs, make sure to provide clear context and guidance to the user.

---

## Examples

### LTR examples 

Here are some examples of cards in left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-ltr-1.svg",
    width: 390,
    alt: "Inverse light variation of the spinner component"
} %}

### RTL examples 

Here are some examples of cards in right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-rtl-1.svg",
    width: 390,
    alt: "Inverse light variation of the spinner component"
} %}

---

## Resources

{% resourceTable {
componentName: 'Cookie Banner'
} %}
