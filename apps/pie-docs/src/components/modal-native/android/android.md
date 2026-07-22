---
eleventyNavigation:
  key: Android
  parent: 'Modal - Native'
  order: 2
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them for alerting users about critical information or errors.",
            "Use them for displaying system-wide messages about critical information or errors."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Displaying system-wide notifications or messages.",
            "Don't use Modal-native components for anything other than system prompted notifications. For other types of messages use the [custom Modal (Dialog)](components/modal/android/) instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/modal-native/android/anatomy.svg",
    alt: "Anatomy of a native modal that contains a title, body, and actions.",
    width: 300
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Title:** Concise heading for clarity.",
        "**Body:** The main message or information.",
        "**Action 1:** Main action for user interaction.",
        "**Action 2 (Optional):** Secondary action option.",
        "**Background:** Bounding box for the dialog's content."
    ]
} %}

---

## Modifiers

### No body

You can use a native dialog with no body for quick confirmation messages, alerts, notifications or confirmation prompts where the title alone is enough.

{% contentPageImage {
    src:"../../../assets/img/components/modal-native/android/modifiers-no-body.svg",
    alt: "Example of a native modal with no body that contains a title and actions.",
    width: 300
} %}

---

## Interactions

### Closing the dialog

Tapping outside the dialog's boundaries will close it, providing an intuitive way to dismiss it without interacting with specific UI elements like calls to action (unless that is otherwise specified by the interaction).

{% contentPageImage {
    src:"../../../assets/img/components/modal-native/android/interactions-close.svg",
    alt: "Example of a native modal being closed by tapping outside its boundaries.",
    width: 300
} %}

---

## Content

### Title

- Ensure the content follows platform specific wording

### Body

- Ensure the content follows platform specific wording

### Calls to action

- Ensure the content follows platform specific wording

---

## Examples

### LTR examples

Here's an example of a Dialog in the LTR context:

{% contentPageImage {
    src:"../../../assets/img/components/modal-native/android/example-ltr.svg",
    alt: "Example of a native modal in LTR context.",
    width: 300
} %}

### RTL Examples

Here's an example of a Dialog in the RTL context:

{% contentPageImage {
    src:"../../../assets/img/components/modal-native/android/example-rtl.svg",
    alt: "Example of a native modal in RTL context.",
    width: 300
} %}
