---
eleventyNavigation:
    key: 'Spinner'
    parent: Components
---

## Overview
The purpose of spinners is to communicate activity and progress to users, assuring them that the system is actively working and that their requested action is being processed. They enhance the user experience by reducing uncertainty and providing feedback during waiting periods.

Spinners are commonly used to indicate tasks such as content loading, data retrieval or processing that may require some time.

{% contentPageImage {
    src:"../../assets/img/components/spinner/overview.svg",
    alt: "A spinner placed in the middle of a container."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Spinner documentation, please see the resources below."
} %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-329&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-329&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.VUE,
            link: "https://vue.pie.design/?path=/story/components-atoms--v-spinner-component",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.REACT,
            link: "https://snacks.takeaway.com/portal/components/loading/",
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
            status: statusTypes.ALPHA
        }
    ]
} %}
