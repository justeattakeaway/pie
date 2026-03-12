---
eleventyNavigation:
    key: Overview
    parent: 'Forms'
    order: 1
shouldShowContents: true
permalink: patterns/forms/
---


## What are forms?

Forms refer to a collection of interactive fields that allow users to provide information or make selections within our products. They are an essential element of user interfaces, enabling users to communicate their intentions, preferences, 
or data.

By designing clear, accessible, and intuitive forms, we aim to create experiences that are seamless and user-friendly, ensuring that users can efficiently engage with 
our interfaces.

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/what-are-forms.svg",
  mobileSrc: "../../../assets/img/patterns/haptic-feedback/overview-mobile.svg",
  alt: ""
} %}

---

## Best practices

### Focus on relevant data

Only ask questions which are necessary to acquire the data which is actually needed. Use hint text to give users the context that they need to understand why you’re asking them for certain information.

### Surfaces

Forms have the option to be positioned flexibly depending on the needs of the user. For example, on top of a visual element such as a map displaying relevant delivery details or to separate it from other related content.

### Optional fields

Most users assume that data asked of them is mandatory and that is often the case. Therefore, marking only the optional fields reduces noise for the user. It's also best to limit your optional fields since too many will confuse users.
Find more on our best practices with form labels.

### Call to action

Call to action buttons should always remain active, unless there is some kind of issue on our end with the form and therefore the data will not be possible to submit. In this case, try to provide context where possible.

### Character limits and user feedback

When a character limit is necessary support users by providing guidance as they
type, with for example a character counter to show how much space is left. Plus,
allow users to exceed the cap temporarily to allow them to refine their message
without disruption.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/forms/text-input-do.svg",
            width: "144px",
            alt: ""
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/forms/text-input-dont.svg",
            width: "144px",
            alt: ""
        }]
    }
} %}
