---
eleventyNavigation:
    key: 'Banner'
    parent: Components
---

## Overview

Banners are wider than other UI elements, spanning across the width of the screen and usually include text, icons and buttons.

The purpose of banners is to deliver critical information, highlight special messages, convey notifications, or guide users towards specific actions. They are commonly used in websites, mobile apps, or online platforms to provide immediate visual impact and engage users effectively.


{% contentPageImage {
    src:"../../assets/img/components/banner/overview.svg",
    alt: "An error banner placed at the top of a container."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Banner documentation, please see the resources below."
} %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=877-2984&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=877-2984&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.VUE,
            link: "https://vue.pie.design/?path=/story/components-molecules--alert-component",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.REACT,
            link: "https://snacks.takeaway.com/portal/components/notification/",
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
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.ANDROID_JETPACK,
            status: statusTypes.PLANNED
        }
    ]
} %}
