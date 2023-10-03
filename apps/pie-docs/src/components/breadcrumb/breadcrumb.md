---
eleventyNavigation:
    key: 'Breadcrumb'
    parent: Components
---

## Overview

The purpose of breadcrumbs is to enhance the user's navigation experience by providing an intuitive way to track and retrace their steps within a website or application's structure. 

It helps users understand their location and relationship to other pages, making it easier to explore and move through the site's content. Each link in the breadcrumb corresponds to a higher-level category or page in the website's hierarchy.


{% contentPageImage {
    src:"../../assets/img/components/breadcrumb/overview.svg",
    alt: "A breadcrumb placed at the top left of a container."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Breadcrumb documentation, please see the resources below."
} %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2425-1312&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2425-1312&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.VUE,
            link: "https://vue.pie.design/?path=/story/components-molecules--breadcrumbs-component",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.REACT,
            link: "https://snacks.takeaway.com/portal/components/breadcrumbs/",
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
