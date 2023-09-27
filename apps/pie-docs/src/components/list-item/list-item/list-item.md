---
eleventyNavigation:
    key: 'List Item'
    parent: list-item
---

## Overview
The purpose of list items is to present individual pieces of content or data within a larger list, enabling users to easily scan, navigate, and interact with the information. It helps organise and structure content in a user-friendly and intuitive manner.

List items can be styled with various visual elements such as icons, illustrations, thumbnail (among others). They are commonly used in content listings or any situation where multiple items need to be displayed in a structured way.

{% contentPageImage {
    src:"../../../assets/img/components/list-item/list-item/overview.svg",
    alt: "Two list items that are vertically stacked together."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Line Chart documentation, please see the resources below."
} %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14779-121656&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14779-121656&mode=design",
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
            link: "https://snacks.takeaway.com/portal/components/list/",
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
