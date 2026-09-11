---
eleventyNavigation:
    key: Apps
    parent: Pagination
    order: 3
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use it to enable users to focus on a smaller section of content at once.",
            "Use it for separating large amounts of content.",
            "Use it to clarify that more content is available to explore."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use it when there's only a small amount of content which fits in one single page."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/pagination/apps/anatomy.svg",
    alt: "Annotated diagram of a pagination component showing its main parts: pagination control, selected page/dropdown control, and page count.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Pagination control:** Icon Button which allows the user to show the information in the previous page. Will look disabled if there is no previous page.",
        "**Selected page / Dropdown control:** Indicates both which page is currently being viewed and allows the user to skip to any page via the dropdown control.",
        "**Page count:** Indicates how many pages there are in total."
    ]
} %}

---

## Variants

### Dropdown

{% contentPageImage {
    src:"../../../assets/img/components/pagination/apps/variants-dropdown.svg",
    alt: "A pagination component showing the dropdown variant.",
    width: "200"
} %}

---

## Behaviours

### Dropdown

A minimum and maximum value must always be defined. Once the value reaches either threshold, the correlating Icon Button is disabled.

{% contentPageImage {
    src:"../../../assets/img/components/pagination/apps/behaviours-dropdown-start.svg",
    alt: "Pagination component showing the dropdown at the start of a range, with the previous page button disabled.",
    caption: "Pagination component showing the dropdown at the start of a range, with the previous page button disabled.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/pagination/apps/behaviours-dropdown-middle.svg",
    alt: "Pagination component showing the dropdown in the middle of a range, with both pagination controls enabled.",
    caption: "Pagination component showing the dropdown in the middle of a range, with both pagination controls enabled.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/pagination/apps/behaviours-dropdown-end.svg",
    alt: "Pagination component showing the dropdown at the end of a range, with the next page button disabled.",
    caption: "Pagination component showing the dropdown at the end of a range, with the next page button disabled.",
    width: "200"
} %}

---

## Interactions

The Pagination's Icon Buttons and controls are used to paginate the user across the pages. Disabled pagination controls aren't interactive.

{% contentPageImage {
    src:"../../../assets/img/components/pagination/apps/interactions.svg",
    alt: "Pagination component illustrating interactive and disabled states of the pagination controls.",
    width: "200"
} %}

---

## Alignment

Alignment is always relative to the container width instead of the entire page.

### Centre

{% contentPageImage {
    src:"../../../assets/img/components/pagination/apps/alignment-centre.svg",
    alt: "Pagination component centred within its container.",
    width: "200"
} %}

### Left

{% contentPageImage {
    src:"../../../assets/img/components/pagination/apps/alignment-left.svg",
    alt: "Pagination component aligned to the left of its container.",
    width: "200"
} %}

### Right

{% contentPageImage {
    src:"../../../assets/img/components/pagination/apps/alignment-right.svg",
    alt: "Pagination component aligned to the right of its container.",
    width: "200"
} %}

---

## LTR examples

Here is an example of the Pagination in RTL context.

{% contentPageImage {
    src:"../../../assets/img/components/pagination/apps/example-ltr.svg",
    alt: "Example of pagination used in an app context, showing a list of items with pagination controls below.",
    width: "200"
} %}

---

## RTL Examples

Here is an example of the Pagination in RTL context.

{% contentPageImage {
    src:"../../../assets/img/components/pagination/apps/example-rtl.svg",
    alt: "Example of pagination in a right-to-left layout, with controls and page order mirrored accordingly.",
    width: "200"
} %}
