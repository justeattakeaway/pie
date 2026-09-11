---
eleventyNavigation:
    key: Web
    parent: Pagination
    order: 2
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
    src:"../../../assets/img/components/pagination/web/anatomy.svg",
    alt: "Annotated diagram of a pagination component showing its main parts: pagination control, selected page, ellipsis, page count, and selected page/dropdown control.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Pagination control:** Icon Button which allows the user to show the information in the previous page. Will look disabled if there is no previous page.",
        "**Selected page:** Indicates which page is currently being viewed.",
        "**Ellipsis (Optional):** Represents other pages in between to save horizontal space.",
        "**Page count:** Indicates how many pages there are in total.",
        "**Selected page / Dropdown control:** Indicates both which page is currently being viewed and allows the user to skip to any page via the dropdown control."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/variants-default.svg",
    alt: "A pagination component showing the default variant with numbered page buttons.",
    width: "200"
} %}

### Dropdown

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/variants-dropdown.svg",
    alt: "A pagination component showing the dropdown variant with a page selector control.",
    width: "200"
} %}

---

## Behaviours

### Default

A minimum and maximum value must always be defined. Once the value reaches either threshold, the correlating Icon Button is disabled.

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/behaviours-default-start.svg",
    alt: "Default pagination at the start of a range, with the previous page button disabled.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/behaviours-default-middle.svg",
    alt: "Default pagination in the middle of a range, with both pagination controls enabled.",
    width: "200"
} %}

### Dropdown

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/behaviours-dropdown-start.svg",
    alt: "Dropdown pagination at the start of a range, with the previous page button disabled.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/behaviours-dropdown-middle.svg",
    alt: "Dropdown pagination in the middle of a range, with both pagination controls enabled.",
    width: "200"
} %}

### Ellipsis

The ellipsis is used with default Pagination when the quantity of pages gets too large and overwhelming. If the total page count is over 7, and the number of hidden pages is more than 1, the ellipsis is displayed.

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/behaviours-ellipsis-without.svg",
    alt: "Default pagination without ellipsis, showing all page numbers.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/behaviours-ellipsis-with.svg",
    alt: "Default pagination with ellipsis, condensing a large number of pages.",
    width: "200"
} %}

---

## Interactions

The Pagination's Icon Buttons and controls are used to paginate the user across the pages. Ellipsis and disabled pagination controls aren't interactive.

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/interactions-default-variant.svg",
    alt: "Default pagination variant illustrating interactive and non-interactive elements.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/interactions-dropdown-variant.svg",
    alt: "Dropdown pagination variant illustrating interactive and non-interactive elements.",
    width: "200"
} %}

---

## Alignment

Alignment is always relative to the container width instead of the entire page.

{% contentLayout %}
  {% contentItem %}
    <h3>Centre</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/pagination/web/alignment-centre.svg",
        alt: "Pagination component centred within its container.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Left</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/pagination/web/alignment-left.svg",
        alt: "Pagination component aligned to the left of its container.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Right</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/pagination/web/alignment-right.svg",
        alt: "Pagination component aligned to the right of its container.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Narrow

At narrow screen sizes the default variant uses dropdown controls in order to ensure content fits within the available width. This also allows users to skip to any page easily.

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/narrow.svg",
    alt: "Pagination component at a narrow screen size, switching to the dropdown variant.",
    width: "200"
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

### Default

{% contentLayout %}
  {% contentItem %}
    <h4>Unselected</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/pagination/web/interactive-states-unselected-default.svg",
        alt: "Pagination controls showing the default interactive state for unselected page items.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Selected</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/pagination/web/interactive-states-selected-default.svg",
        alt: "Pagination controls showing the default interactive state for the selected page item.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Hover

{% contentLayout %}
  {% contentItem %}
    <h4>Unselected</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/pagination/web/interactive-states-unselected-hover.svg",
        alt: "Pagination controls showing the hover interactive state for unselected page items.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Selected</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/pagination/web/interactive-states-selected-hover.svg",
        alt: "Pagination controls showing the hover interactive state for the selected page item.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Active

{% contentLayout %}
  {% contentItem %}
    <h4>Unselected</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/pagination/web/interactive-states-unselected-active.svg",
        alt: "Pagination controls showing the active interactive state for unselected page items.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Selected</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/pagination/web/interactive-states-selected-active.svg",
        alt: "Pagination controls showing the active interactive state for the selected page item.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Focus

{% contentLayout %}
  {% contentItem %}
    <h4>Unselected</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/pagination/web/interactive-states-unselected-focus.svg",
        alt: "Pagination controls showing the focus interactive state for unselected page items.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Selected</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/pagination/web/interactive-states-selected-focus.svg",
        alt: "Pagination controls showing the focus interactive state for the selected page item.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## LTR examples

Here are some examples of Pagination in LTR context.

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/examples-ltr-1.svg",
    alt: "First example of pagination used in a left-to-right web context.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/examples-ltr-2.svg",
    alt: "Second example of pagination used in a left-to-right web context.",
    width: "200"
} %}

---

## RTL Examples

Here are some examples of Pagination in RTL context.

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/examples-rtl-1.svg",
    alt: "First example of pagination in a right-to-left layout, with controls and page order mirrored.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/pagination/web/examples-rtl-2.svg",
    alt: "Second example of pagination in a right-to-left layout, with controls and page order mirrored.",
    width: "200"
} %}
