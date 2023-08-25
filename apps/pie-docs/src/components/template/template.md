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

### Example embed of Modal
<br />
{% storybookEmbed "https://webc.pie.design/iframe.html?args=&id=modal--scroll-locking&viewMode=story" %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://google.co.uk",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            status: statusTypes.DEPRECATED,
            note: "YYYY-MM-DD"
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PRE_RELEASE
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.TBC
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.DEPRECATED,
            note: "YYYY-MM-DD"
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
