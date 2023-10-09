---
eleventyNavigation:
    key: 'Skeleton'
    parent: Components
---

## Overview
The purpose of skeletons is to provide a visual indication of ongoing loading, reducing perceived waiting time and improving the user experience. By showing a skeleton representation of the content, users can anticipate and understand the structure of the upcoming information.

Skeletons mimic the layout and structure of the expected content, but with simplified or stylized representations. They consist of simple shapes that give users a sense of the content's location and size.

{% contentPageImage {
    src:"../../assets/img/components/skeleton/overview.svg",
    alt: "A group of text and image skeletons."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Skeleton documentation, please see the resources below."
} %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=24738-224311&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=24738-224311&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.VUE,
            link: "https://vue.pie.design/?path=/story/components-molecules--skeleton-loader-component",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.REACT,
            link: "https://snacks.takeaway.com/portal/components/skeleton-bar/",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.ANDROID_XML,
            status: statusTypes.ALPHA
        },
        {
            resource: resourceTypes.ANDROID_JETPACK,
            status: statusTypes.PLANNED
        }
    ]
} %}
