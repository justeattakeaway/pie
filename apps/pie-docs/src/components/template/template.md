---
eleventyNavigation:
    key: '[Component name]'
    parent: Components
    order: 1
---

## Overview
[Component Overview]


{% contentPageImage {
    src:""
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our [Component name] documentation, please see the resources below."
} %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "google.co.uk",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.ALPHA
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.BETA
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.DEPRECATED,
            note: "07/04/1990"
        },
        {
            resource: resourceTypes.IOS,
            status: statusTypes.REMOVED
        },
        {
            resource: resourceTypes.ANDROID,
            status: statusTypes.NOT_APPLICABLE
        }
    ]
} %}
