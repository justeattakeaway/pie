---
eleventyNavigation:
    key: 'Modal'
    parent: Components
---

## Overview
The purpose of modals is to focus the user's attention on a specific task, message, or interaction, and to prevent interaction with other elements on the page while the modal is active. 

Modals are commonly used for tasks such as displaying notifications, presenting detailed information, requesting user input, or confirming critical actions.

{% contentPageImage {
    src:"../../assets/img/components/modal/overview.svg",
    alt: "A modal containing a heading, body copy and a button placed on the bottom right corner."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Modal documentation, please see the resources below."
} %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=1098-1144&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=1098-1144&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: "https://webc.pie.design/?path=/story/modal--default",
            status: statusTypes.ALPHA
        },
        {
            resource: resourceTypes.VUE,
            link: "https://vue.pie.design/?path=/story/components-molecules--mega-modal-component",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.REACT,
            link: "https://snacks.takeaway.com/portal/components/modal/",
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
