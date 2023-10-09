---
eleventyNavigation:
    key: 'Show More'
    parent: Components
---

## Overview
The purpose of a show more components is to provide users with control over the amount of content they want to view. They help manage long or detailed information by initially displaying a condensed version and giving users the option to expand for more details if desired.

When users click on the component, it expands the hidden content, revealing more information, additional sections, or longer text. This allows users to access the complete content that may have been truncated or hidden for brevity or space constraints.

{% contentPageImage {
    src:"../../assets/img/components/show-more/overview.svg",
    alt: "Show more placed underneath a paragraph of text."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Show More documentation, please see the resources below."
} %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14115-101942&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14115-101942&mode=design",
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
            link: "https://snacks.takeaway.com/portal/components/show-more/",
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
