---
eleventyNavigation:
  key: Overview
  parent: Errors
  order: 1
shouldShowContents: true
permalink: patterns/errors/
---

## Overview

The implementation of error states and the corresponding messages can vary from scenario to scenario. It is important that all error messages are visible, understandable and useful to the user.

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "All error messages should be clear, concise and ensure that users can easily see and understand the issue.",
            "Ensure the error message stays visible until the issue is resolved."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
          "Avoid using toasts, tooltips, or pop-ups for critical or blocking error messages. They offer limited space to communicate the error and can disappear after a certain duration or user action.",
            "Don't overwhelm users with technical jargon or vague messages.",
            "Don't leave users without a clear course of action."
        ]
    }
} %}

---

## Hierarchy

Each type of error provides specific feedback to help users understand and correct the issues, ensuring a more user-friendly experience.

These errors can be categorised into four main types:

- **Global error:** impacting the whole hub or the system
- **Page level and in-page error:** affecting a page or a specific section within a page.
- **Field error:** occurring within a specific input field.
- **Feedback error:** providing non-crucial feedback that doesn't block the user's flow.

These error types can be conveyed through different components, forming a hierarchy in how errors are managed and communicated to the user.

{% contentPageImage {
  src: "../../../assets/img/patterns/errors/hierarchy.svg",
  alt: "Diagram showing the hierarchy of error types: global, page level and in-page, field, and feedback errors.",
  width: 256
} %}

---

## Global error

Global errors affect the entire website or application and should be highly visible and communicated clearly. They are typically shown either as a [full width notification component](https://www.pie.design/components/notification/web/#full-width) at the top of the interface, or a [modal component](https://www.pie.design/components/modal/) can also be used to sit on top of all content.

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Apply to errors that affect the entire website or application.",
            "Explain the problem clearly and provide guidance for users to resolve the issue."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't apply to errors within a specific page or section."
        ]
    }
} %}

### Full width notification

Use a full-width notification for global errors such as network issues, server/app downtime, or loading failures. Interaction may be limited or temporarily blocked, but the interface can still be visible for users to understand where they are, and is often used for temporary error states.

Full width notification must be placed at the top of the page or screen, typically directly below the navigation bar. This ensures high visibility while maintaining the overall page context.

{% notification {
  type: "information",
  message: "Use the error variant in notification for global issues."
} %}

{% contentPageImage {
  src: "../../../assets/img/patterns/errors/global-full-width-01.svg",
  alt: "Desktop mockup of full-width error notification placed at the top of the page communicating a connectivity issue, directly below the navigation bar.",
  width: 256
} %}

{% contentPageImage {
  src: "../../../assets/img/patterns/errors/global-full-width-02.svg",
  alt: "Desktop mockup of a full-width error notification communicating something went wrong when loading the page and displaying contact support information.",
  width: 256
} %}

### Modal

Use a modal for critical errors that require immediate attention and block further interaction fully, such as session expiration that require users to log in again. It overlays the page and focuses the user on the required action before they can continue.

{% contentPageImage {
  src: "../../../assets/img/patterns/errors/global-modal.svg",
  alt: "A modal dialog displaying a session expired notification with a login button to sign back in.",
  width: 256
} %}

---

## Page level and in-page error

Page level and in-page errors relate to issues within either a specific page or a specific section within a page.

Both types of error can be communicated with [notification component](https://www.pie.design/components/notification/) or [error summary component](https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?node-id=10997-226990&t=LtrKC9YjiCsqqoZj-4). The error messages should appear near their context.

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Provide specific details about what went wrong and how to fix it.",
            "Keep the error message close to the related content for context."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't apply to errors that affect the entire website or application."
        ]
    }
} %}

### Inline notification

Use inline notification to address general errors, for example, a payment error on a checkout page.

{% contentPageImage {
  src: "../../../assets/img/patterns/errors/page-inline-notification.svg",
  alt: "A desktop mockup of a checkout page showing a payment error banner indicating the credit card payment was cancelled or failed.",
  width: 256
} %}

### Error summary

Use the error summary if it is a validation error or submission error that occurs when a user submits a form.

{% contentPageImage {
  src: "../../../assets/img/patterns/errors/page-summary-01.svg",
  alt: "A desktop mockup of a menu form showing a validation error banner with a red border at the top. The error message indicates that something went wrong and lists two fields that need to be checked: Item name and Description.",
  width: 256
} %}

{% contentPageImage {
  src: "../../../assets/img/patterns/errors/page-summary-02.svg",
  alt: "A desktop mockup of a sign-in form showing validation errors with a red error banner and error messages below both input fields.",
  width: 256
} %}

---

## Field error

Field error relates to individual input field within a form or data entry section. They provide feedback on the user's input to help users correct mistakes efficiently. Field errors can be highlighted using [assistive text](https://www.pie.design/components/assistive-text/).

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Apply to input field error only.",
            "Provide clear instructions on how to correct the error in the field, not just that an error exists."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't apply to errors that affect the entire website or application.",
            "Don't validate fields before the input is complete."
        ]
    }
} %}

### Assistive text

#### Real-time validation

Detects and displays errors as the user interacts with each field, providing immediate feedback as the user completes the input. Examples include: invalid input format, required fields left empty.

{% contentPageImage {
  src: "../../../assets/img/patterns/errors/field-assistive-text.svg",
  alt: "A form field showing a validation error with a red border and an error message underneath stating that the name must contain only letters.",
  width: 256
} %}

### Error summary

#### Validation on submit

Detects and displays errors only after the user submits the form, with messages below each field and an error summary at the top.

{% contentPageImage {
  src: "../../../assets/img/patterns/errors/field-error-summary.svg",
  alt: "A form showing multiple validation errors with red borders on fields and error messages below each field.",
  width: 256
} %}

---

## Feedback error

The [toast component](https://www.pie.design/components/toast/) can communicate errors that occur as a minor feedback about an operation or a user action that are non-critical and do not block the primary workflow or main functionality of the page or application.

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Apply to non-critical errors only.",
            "Provide clear instructions on how to correct the error, not just that an error exists."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use it for crucial errors that prevent users from continuing their flow, consider notification instead."
        ]
    }
} %}

### Toast

Use the toast component to provide feedback on errors, such as a failed user action that doesn't affect the user's current flow.

The toast component can be auto-dismissed, meaning it will automatically disappear after a certain amount of time to give users enough time to read the message without blocking the information behind it for too long. It can also include an optional action, and remain persistent until manually dismissed by the user.

{% contentPageImage {
  src: "../../../assets/img/patterns/errors/feedback-toast.svg",
  alt: "A desktop mockup of a map interface showing an error message about needing at least one postcode within the distance limit.",
  width: 256
} %}
