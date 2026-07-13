---
eleventyNavigation:
  key: iOS
  parent: 'Modal - Native'
  order: 3
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them for alerting users about critical information or errors."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Displaying system-wide notifications or messages.",
            "For anything other than system prompted notifications and alerts use the custom Modal (Alert) instead."
        ]
    }
} %}

---

## Anatomy

### iOS 18 and older

{% contentPageImage {
    src:"../../../assets/img/components/modal-native/ios/anatomy.svg",
    alt: "Anatomy of a native modal that contains a title, body, and actions.",
    width: 300,
    variant: "secondary"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Title:** Concise heading for clarity.",
        "**Body:** The main message or information.",
        "**Action 1:** Main action for user interaction.",
        "**Action 2 (Optional):** Secondary action option.",
        "**Action 3 (Optional):** Tertiary action option.",
        "**Background:** Bounding box for the alert's content."
    ]
} %}

### iOS 26 and later

{% contentPageImage {
    src:"../../../assets/img/components/modal-native/ios/anatomy-ios26.svg",
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
        "**Action 3 (Optional):** Tertiary action option.",
        "**Liquid Glass container:** Bounding box for the alert's content."
    ]
} %}

---

## Variants (only iOS 26 and later)

{% contentLayout %}
  {% contentItem %}
  <h3>Light</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/modal-native/ios/variants-light-ios26.svg",
      width: "300px",
      alt: "A light variant of a native modal in iOS 26 and later."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Dark</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/modal-native/ios/variants-dark-ios26.svg",
      width: "300px",
      alt: "A dark variant of a native modal in iOS 26 and later.",
      variant: "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Modifiers

### No body

You can use a native dialog with no body for quick confirmation messages, alerts, notifications or confirmation prompts where the title alone is enough.

{% contentPageImage {
    src:"../../../assets/img/components/modal-native/ios/modifiers-no-body.svg",
    alt: "Example of a native modal with no body that contains a title and actions.",
    width: 300,
    variant: "secondary"
} %}

### Side by side call to Action

You can use side-by-side calls to action when space is limited or when both actions are equally important. This is often seen in confirmation prompts for efficient interaction, like "OK" and "Cancel."

{% contentPageImage {
    src:"../../../assets/img/components/modal-native/ios/modifiers-side-by-side.svg",
    alt: "Example of a native modal with side-by-side calls to action.",
    width: 300,
    variant: "secondary"
} %}

---

## Interactions

### Closing the dialog

Tapping outside the dialog's boundaries will close it, providing an intuitive way to dismiss it without interacting with specific UI elements like calls to action (unless that is otherwise specified by the interaction).

{% contentPageImage {
    src:"../../../assets/img/components/modal-native/ios/interactions-close.svg",
    alt: "Example of a native modal being closed by tapping outside its boundaries.",
    width: 300,
    variant: "secondary"
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
    src:"../../../assets/img/components/modal-native/ios/example-ltr.svg",
    alt: "Example of a native modal in LTR context.",
    width: 300
} %}

### RTL Examples

Here's an example of a Dialog in the RTL context:

{% contentPageImage {
    src:"../../../assets/img/components/modal-native/ios/example-rtl.svg",
    alt: "Example of a native modal in RTL context.",
    width: 300
} %}
