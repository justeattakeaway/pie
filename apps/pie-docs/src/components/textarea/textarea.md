---
eleventyNavigation:
    key: 'Textarea'
    parent: Components
---

## Overview
The purpose of textareas is to provide users with a larger input space for writing and editing text that requires more than one line. They offer a more user-friendly and efficient way to input and view longer pieces of textual information within a single user interface element.

Textareas differ from text inputs as they allow for multiline input, where users can freely type or paste more extensive content. They are commonly used in forms, text editors, messaging interfaces and any scenario where users need to input or view longer blocks of text.

{% contentPageImage {
    src:"../../assets/img/components/textarea/overview.svg",
    alt: "A textarea with character count."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Textarea documentation, please see the resources below."
} %}

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=972-5408&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=972-5408&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.VUE,
            link: "https://vue.pie.design/?path=/story/components-atoms-f-form-field--textarea-component",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.REACT,
            link: "https://snacks.takeaway.com/portal/components/textarea/",
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
            status: statusTypes.BETA
        },
        {
            resource: resourceTypes.ANDROID_JETPACK,
            status: statusTypes.BETA
        }
    ]
} %}
