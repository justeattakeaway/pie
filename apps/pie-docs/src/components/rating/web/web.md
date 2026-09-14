---
eleventyNavigation:
    key: Web
    parent: Rating
    order: 2
shouldShowContents: true
eleventyComputed:
    ratingSizesData: "{% include './rating-sizes.json' %}"
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use as a tool for users to compare others' opinions."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't customise the amount of stars. Ratings should always have five available stars."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/rating/anatomy.svg",
    alt: "Annotated diagram of a rating component showing its three star states: filled, partially filled, and empty.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Star:** Filled.",
        "**Star:** Partially filled and only available in the static variant.",
        "**Star:** Empty."
    ]
} %}

---

## Variants

### Interactive

Used to collect the user's satisfaction regarding a product, service or item.

{% contentPageImage {
    src:"../../../assets/img/components/rating/variants-interactive.svg",
    alt: "A rating component in the interactive variant, showing five stars for user input.",
    width: "200"
} %}

### Static

Used to display the average rating of user's reviews.

{% contentPageImage {
    src:"../../../assets/img/components/rating/variants-static.svg",
    alt: "A rating component in the static variant, showing a filled star rating display.",
    width: "200"
} %}

---

## Sizes

{% simpleTable {
    tableData: ratingSizesData,
    isFullWidth: true
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

### Default

{% contentPageImage {
    src:"../../../assets/img/components/rating/interactive-states-default.svg",
    alt: "Rating component showing the default interactive state.",
    width: "200"
} %}

### Hover

{% contentPageImage {
    src:"../../../assets/img/components/rating/interactive-states-hover.svg",
    alt: "Rating component showing the hover interactive state.",
    width: "200"
} %}

### Selected

{% contentPageImage {
    src:"../../../assets/img/components/rating/interactive-states-selected.svg",
    alt: "Rating component showing the selected interactive state.",
    width: "200"
} %}

---

## Examples

### LTR example

Here are some examples of the Rating component in the LTR context.

{% contentPageImage {
    src:"../../../assets/img/components/rating/examples-ltr-1.svg",
    alt: "First example of a rating component in a left-to-right layout.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/rating/examples-ltr-2.svg",
    alt: "Second example of a rating component in a left-to-right layout.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/rating/examples-ltr-3.svg",
    alt: "Third example of a rating component in a left-to-right layout.",
    width: "200"
} %}

### RTL example

Here are some examples of the Rating component in the RTL context.

{% contentPageImage {
    src:"../../../assets/img/components/rating/examples-rtl-1.svg",
    alt: "First example of a rating component in a right-to-left layout.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/rating/examples-rtl-2.svg",
    alt: "Second example of a rating component in a right-to-left layout.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/rating/examples-rtl-3.svg",
    alt: "Third example of a rating component in a right-to-left layout.",
    width: "200"
} %}
