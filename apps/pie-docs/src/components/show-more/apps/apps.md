---
eleventyNavigation:
    key: Apps
    parent: Show More
    order: 3
shouldShowContents: true
---

## Dos and don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use only as a block, not inline.",
            "Use to save space while preserving visual balance and maintaining information hierarchy."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use if entire content needs to be expanded or collapsed. Use an Accordion instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/show-more/anatomy.svg",
    alt: "Show more component anatomy with numbered callouts indicating the label and chevron icon.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Label:** Text label informing the user about the nature of the link.",
        "**Chevron icon:** Visually support the Label."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src:"../../../assets/img/components/show-more/variants-default.svg",
    alt: "The default variant of the Show more component showing the label and downward chevron.",
    width: "200"
} %}

---

## Position

Always place the component below the paragraph or sentence. It does not support being inline with content.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/show-more/position-do.svg",
            width: "200",
            alt: "Example of the Show more component below a paragraph."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/show-more/position-dont.svg",
            width: "200",
            alt: "Example of the Show more component inline with content, which is not supported."
        }]
    }
} %}

---

## Behaviours

The component was designed to be collapsed by default, but can be modified to be expanded by default. Consider context and the role the content plays when deciding which option is best.

Tapping "Show More" reveals the hidden content at the bottom of a paragraph. When this component is expanded, the text changes to "Show Less," and the chevron flips to show the direction of the previously hidden content.

{% contentPageImage {
    src:"../../../assets/img/components/show-more/behaviours-do.svg",
    alt: "Examples showing the Show more component in both collapsed and expanded states within paragraphs of text.",
    width: "200"
} %}

---

## States

Outlines the atomic level interactive elements for the component.

### Show more

{% contentPageImage {
    src:"../../../assets/img/components/show-more/states-show-more.svg",
    alt: "The Show more state of the component showing the label with a downward pointing chevron.",
    width: "200"
} %}

### Show less

{% contentPageImage {
    src:"../../../assets/img/components/show-more/states-show-less.svg",
    alt: "The Show less state of the component showing the label with an upward pointing chevron.",
    width: "200"
} %}

---

## Examples

### LTR examples

Here are some examples of the component in left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/show-more/examples-ltr.svg",
    alt: "Show more component used in left-to-right text examples.",
    width: "200"
} %}

### RTL examples

Here are some examples of the component in right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/show-more/examples-rtl.svg",
    alt: "Show more component used in right-to-left text examples.",
    width: "200"
} %}
