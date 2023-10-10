---
eleventyNavigation:
    key: 'Tooltip'
    parent: Components
---

## Overview
The purpose of tooltips is to enhance the user experience by providing context and guidance, particularly when elements may not have enough space to display all the information or when certain functionalities need clarification.

Tooltips are displayed as a small box near the element they are associated with. They are triggered by user actions like hovering over an element with a mouse cursor or tapping on it in touch-based interfaces.

{% contentPageImage {
    src:"../../assets/img/components/tooltip/overview.svg",
    alt: "A tooltip that contains multiple lines of text and a close icon to dismiss."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Tooltip documentation, please see the resources below."
} %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-325&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-325&mode=design",
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
            link: "https://snacks.takeaway.com/portal/components/tooltip/",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE
        },
        {
            resource: resourceTypes.ANDROID_XML,
            status: statusTypes.TBC
        },
        {
            resource: resourceTypes.ANDROID_JETPACK,
            status: statusTypes.TBC
        }
    ]
} %}
