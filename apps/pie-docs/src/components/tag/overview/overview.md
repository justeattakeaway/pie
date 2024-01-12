---
eleventyNavigation:
    key: Tag
    parent: Components
    order: 1
eleventyComputed:
    sizes: "{% include './sizes.json' %}"
shouldShowContents: true
---

## Overview

The purpose of tags is to provide a quick and visually appealing way to highlight or identify specific items, topics or attributes. Tags enhance the user experience by simplifying content organisation and facilitating content discovery and filtering.
Tags can be embedded in other components such as cards, data tables (among others) to help users understand and filter information more effectively.

{% contentPageImage {
    src:"../../../assets/img/components/tag/overview.svg",
    alt: "A group of tags that are horizontally stacked together."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use when content is mapped to multiple categories, and the user needs a way to differentiate between them.",
            "Use to call attention to details in a way that makes it easy to scan."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use when an interaction is required, use a [chip](/components/chip/) if needed."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/tag/anatomy.svg",
    alt: "Anatomy of a tag.",
    width: 120
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon (Optional):** Visually supports the label.",
        "**Label:** Provides informative information to the user."
    ]
} %}

---

## Variations

Tags have two levels of emphasis, strong and subtle. Not all colour available within the subtle emphasis are available within the strong emphasis.

### Strong

Used when a high contrast tag is required.

{% contentPageImage {
    src:"../../../assets/img/components/tag/variation-strong.svg",
    alt: "Strong tags with bold and strong background color.",
    width: 286
} %}

### Subtle

Used when a low contrast tag is required.

{% contentPageImage {
    src:"../../../assets/img/components/tag/variation-subtle.svg",
    alt: "Subtle tag with less contrast colors.",
    width: 362
} %}

--- 

## Modifiers

### Icon

Icons can be used to visually support the Tag’s label. Only available at the large size.

{% contentPageImage {
    src:"../../../assets/img/components/tag/modifier-icon.svg",
    alt: "A tag with an icon.",
    width: 61
} %}

### Disabled

{% contentPageImage {
    src:"../../../assets/img/components/tag/modifier-disabled.svg",
    alt: "A disabled tag.",
    width: 61
} %}

---

## Sizes

Outlines the Tag sizes that are available, and where they should be used across our products.

### Height

Two size options are available to suit the scale required.

{% componentDetailsTable {
  tableData: sizes
} %}

### Width

Container width is dynamic to the content’s width and retains 4px left and right padding.

{% contentPageImage {
    src:"../../../assets/img/components/tag/size-width.svg",
    alt: "A tag tag with flexible width that hugs the content inside.",
    width: 92
} %}

--- 

## Meaning and purpose

Tags can be used to indicate status or used to convey specific meanings within JET which are displayed below.

{% contentPageImage {
    src:"../../../assets/img/components/tag/meaning-and-purpose.svg",
    alt: "Meaning of colors in a tag and purpose of the tags.",
    width: 318
} %}

___

## Examples

Outlines the atomic level interactive elements for the component.

### LTR examples

Here are some examples of tags in left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/tag/example-ltr-restaurant-listing.svg",
    alt: "A left-to-right example of a tag used on a restaurant listing card.",
    width: 827
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tag/example-ltr-menu-item.svg",
    alt: "A left-to-right example of disabled tags on a menu item card.",
    width: 912
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tag/example-ltr-disabled-menu-item.svg",
    alt: "A left-to-right example of disabled tag on a disabled menu item card.",
    width: 912
} %}

### RTL examples

Here are some examples of tags in right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/tag/example-rtl-restaurant-listing.svg",
    alt: "A right-to-left example of a tag used on a restaurant listing card.",
    width: 827
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tag/example-rtl-disabled-menu-item.svg",
    alt: "A right-to-left example of disabled tag on a disabled menu item card.",
    width: 912
} %}

___

## Resources

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-328&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-328&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE
        },
        {
            resource: resourceTypes.REACT,
            link: "https://snacks.takeaway.com/portal/components/tag/",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.ANDROID_XML,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.ANDROID_JETPACK,
            status: statusTypes.PLANNED
        }
    ]
} %}
