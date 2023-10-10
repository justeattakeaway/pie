---
eleventyNavigation:
    key: 'Toast'
    parent: Components
---

## Overview
The purpose of toasts is to provide users with timely and relevant information in an unobtrusive manner. It enhances the user experience by keeping users informed without requiring them to navigate to a different screen or take immediate action.

Toast notifications are typically displayed at the bottom of the screen and disappear automatically after a short period of time. They are often used to notify users about successful actions, errors, warnings, or important updates without interrupting their current tasks.

{% contentPageImage {
    src:"../../assets/img/components/toast/overview.svg",
    alt: "A toast placed at the bottom of the page."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Toast documentation, please see the resources below."
} %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-324&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            status: statusTypes.PLANNED
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
            link: "https://snacks.takeaway.com/portal/components/toast/",
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
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.ANDROID_JETPACK,
            status: statusTypes.AVAILABLE
        }
    ]
} %}
