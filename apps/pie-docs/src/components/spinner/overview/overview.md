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
    alt: "A spinner placed in the middle of a container."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Spinner documentation, please see the resources below."
} %}

{% resourceTable {
    componentName: 'Spinner'
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
    alt: "Anatomy of the spinner component.",
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
    alt: "Brand variation of the spinner component"
} %}

### Secondary

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-secondary.svg",
    width: 48,
    alt: "Secondary variation of the spinner component"
} %}

### Secondary dark

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-secondary.svg",
    width: 48,
    alt: "Secondary dark variation of the spinner component"
} %}

### Inverse

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-inverse.svg",
    width: 48,
    variant: "inverse",
    alt: "Inverse variation of the spinner component"
} %}

### Inverse light

{% contentPageImage {
    src:"../../../assets/img/components/spinner/spinner-inverse.svg",
    width: 48,
    variant: "inverse",
    alt: "Inverse light variation of the spinner component"
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
    src:"../../../assets/img/components/spinner/spinner-page.svg",
    width: 580,
    alt: "Inverse light variation of the spinner component"
} %}







