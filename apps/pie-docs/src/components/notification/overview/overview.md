---
eleventyNavigation:
    key: Overview
    parent: Notification
    order: 1
eleventyComputed:
    usage: "{% include './usage.json' %}"
shouldShowContents: true,
permalink: components/notification/
---

## Overview

The purpose of notifications is to promptly inform users about relevant information or changes that require their attention. Notifications can be used to communicate messages like new messages, system updates, completed actions, errors or reminders.

Notifications often include options for users to interact with the displayed information, such as dismissing the notification, taking action or accessing related content. They play a crucial role in keeping users informed and engaged with the application or system.

{% contentPageImage {
    src:"../../../assets/img/components/notification/overview.svg",
    alt: "An informational notification with a single button"
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use the component to provide feedback on the user’s status, outcome of an action, or info on a task.  "
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use notification pinned to the top of the interface. See below for full usage guidelines between notification and toast."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/notification/anatomy.svg",
    alt: "Anatomy of a notification that contains a leading icon, title and supporting text as well as dual actions and a dismiss button.",
    width: 1024,
    variant: "secondary"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon (Optional):** Leading icon that visually reinforces the content.",
        "**Title (Optional)**: Provides overall content of the content.",
        "**Supporting text**: Provides supporting information to the user.",
        "**Close (Optional)**: Let the user dismiss the notification.",
        "**Actions (Optional)**: Button options let the user proceed with or dismiss the notification."
    ]
} %}

---

## Variants

### Neutral

Neutral notification provides generic messages to users that may not be related to the current action or task they’re performing. Does not require immediate action and can be dismissed on a timer or persist, depending on the content.

{% contentPageImage {
    src:"../../../assets/img/components/notification/variation-neutral.svg",
    alt: "The neutral variant of the notification component.",
    width: 1024,
    variant: "secondary"
} %}

### Neutral alternative

Exists as an alternative option to Neutral that can be visible over grey backgrounds, with the same usage as the neutral variation.

{% contentPageImage {
    src:"../../../assets/img/components/notification/variation-neutral-alternative.svg",
    alt: "The neutral alternative variant of the notification component.",
    width: 1024
} %}

### Translucent

Translucent notifications appear on top of content, creating a layered effect.

{% contentPageImage {
    src:"../../../assets/img/components/notification/variation-translucent.svg",
    alt: "The translucent variant of the notification component.",
    width: 1024
} %}

### Info

Provide additional information to users that may not be related to the current action or task they’re performing. Do not require immediate action and can be dismissed on a timer or persist, depending on the content.

{% contentPageImage {
    src:"../../../assets/img/components/notification/variation-info.svg",
    alt: "The info variant of the notification component.",
    width: 1024
} %}

### Success

Confirm a task was completed as expected. Typically do not require further action and can be dismissed automatically or persist in a nonintrusive manner.

{% contentPageImage {
    src:"../../../assets/img/components/notification/variation-success.svg",
    alt: "The success variant of the notification component.",
    width: 1024
} %}

### Warning

Inform users that they are taking actions that are not desirable or might have unexpected results. Often persist until the user dismisses the notification or continues in their task.

{% contentPageImage {
    src:"../../../assets/img/components/notification/variation-warning.svg",
    alt: "The warning variant of the notification component.",
    width: 1024
} %}

### Error

Inform users of an error or critical failure and optionally block the user from proceeding until the issue has been resolved. Always persist until the user dismisses them or resolves error.

{% contentPageImage {
    src:"../../../assets/img/components/notification/variation-error.svg",
    alt: "The error variant of the notification component.",
    width: 1024
} %}

---

## Modifiers

### Compact

The action(s) relocate to be in line with the supporting text, which helps to reduce the vertical space. The close prop is not available due to the repositioning of the actions.

{% notification {
  type: "information",
  message: "If the close icon is required, don’t use the compact prop."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/notification/modifiers-compact-top.svg",
    alt: "The compact variant of the notification where the trailing icon, title, supporting text and actions are on the same line.",
    width: 1024
} %}

{% contentPageImage {
    src:"../../../assets/img/components/notification/modifiers-compact-bottom.svg",
    alt: "The compact variant of the notification where the trailing icon, supporting text and actions are on the same line.",
    width: 1024
} %}

### Icons

#### Removing icons

Supporting icons can be removed for all variants if not required.

{% contentPageImage {
    src:"../../../assets/img/components/notification/modifier-icons-removing-icons.svg",
    alt: "A notification component with a title, supporting text and dismiss button only",
    width: 1024
} %}

#### Replacing icons

When choosing an icon, ensure that is visually supports the content and message of the notification.

{% usage {
    do: {
        type: usageTypes.image,
        hasPadding: false,
        items: [{
            src: "../../../assets/img/components/notification/modifier-icons-replacing-icons-do.svg",
            alt: "An error notification that uses a cross icon as a trailing icon to indicate the order is canceled",
            width: 524
        }]
    },
    dont: {
        type: usageTypes.image,
        hasPadding: false,
        items: [{
            src: "../../../assets/img/components/notification/modifier-icons-replacing-icons-dont.svg",
            alt: "An error notification that uses a microphone icon as a trailing icon to indicate the order is canceled",
            width: 524
        }]
    }
} %}

### Title

The title can be removed where it is not necessary.

{% contentPageImage {
    src:"../../../assets/img/components/notification/modifier-title.svg",
    alt: "A notification with only a trailing icon, supporting text and dismiss button",
    width: 1024
} %}

### Actions

#### Dual actions

When two separate actions are required.

{% contentPageImage {
    src:"../../../assets/img/components/notification/modifier-actions-dual-actions.svg",
    alt: "A notification with a title, a trailing icon, supporting text, dismiss button and two action buttons",
    width: 1024
} %}

#### Single action

When a single action is required.

{% contentPageImage {
    src:"../../../assets/img/components/notification/modifier-actions-single-action.svg",
    alt: "A notification with a title, a trailing icon, supporting text, dismiss button and one action button",
    width: 1024
} %}

#### No actions

When the user is not required to take action against the notification.

{% contentPageImage {
    src:"../../../assets/img/components/notification/modifier-actions-no-actions.svg",
    alt: "A notification with a title, a trailing icon, supporting text, dismiss button and no action buttons",
    width: 1024
} %}

---

## Usage


{% componentDetailsTable {
  tableData: usage
} %}

---

## Content

Notifications provide limited space for content, and therefore the content must be short and concise. A user should be able to quickly scan the notification, be apprised of the situation, and know what to do next.

### Title

- The title should be short and descriptive, explaining the most important piece of information.
- When possible, communicate the main message using just the title.

### Supporting text

- Be concise and avoid repeating or paraphrasing the title.
- Limit content to one or two short sentences.

### Overrides   

{% contentPageImage {
    src:"../../../assets/img/components/notification/content-overrides.svg",
    alt: "a success notification with a title, supporting text, and two action buttons on the right.",
    width: 845
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Leading icon:** Variants of the leading icon can be overridden, but the chosen icon must align with the message context. Find more information in the [Modifiers: Icon](#icons) section.",
        "**Supporting text:** The supporting text can include a [link](/components/link) or bold type, when the string is a complete sentence or more.",
        "**Buttons:** The [Button’s](/components/button/#sizes) size can be decreased, and if they are kept as a pair, the size of both buttons remaining consistent."
    ]
} %}

### Alignments

Text content is top-aligned with the icon by default. If there is only a single line of content (without a title), the text is centre-aligned with the icon for visual balance.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/notification/alignment-left.svg",
      width: "609px",
      alt: "Two examples demonstrating the default top-alignment of text with an icon. The top example shows an icon with a title and supporting text, where the title is top-aligned with the icon. The bottom example shows an icon with two lines of supporting text, where the first line is top-aligned with the icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/notification/alignment-right.svg",
      width: "603px",
      alt: "An example showing a special alignment case. An icon is displayed next to a single line of supporting text, and a dotted line indicates that the text is vertically center-aligned with the icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactions

### Close icon

When the user clicks the icon button, the notification is dismissed.

{% contentPageImage {
    src:"../../../assets/img/components/notification/interaction-close-icon.svg",
    alt: "A notification component with a dismiss button",
    width: 1024
} %}

### Actions

The actions in the notification can do things like redirecting the user. This might result in the notification closing once a task is done, or it could directly close the notification.

{% contentPageImage {
    src:"../../../assets/img/components/notification/interaction-actions.svg",
    alt: "A notification component with a user action buttons",
    width: 1024
} %}

---

## Narrow

All props are available in narrow screen sizes.

{% contentPageImage {
    src:"../../../assets/img/components/notification/narrow.svg",
    alt: "The notification component on narrow screens",
    width: 360
} %}

### Compact

{% notification {
  type: "warning",
  message: "It’s recommended that the compact prop isn’t used below 600px, due to available horizontal space."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/notification/narrow-compact.svg",
    alt: "The notification component on narrow screens and compact mode where all content  is in one line to accommodate for space",
    width: 600
} %}

### Actions

Actions have the option to wrap on narrow screens due to the available horizontal space.

{% notification {
  type: "information",
  message: "Not available in conjunction with the compact prop."
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/notification/narrow-dual-actions.svg",
      width: "360px",
      alt: "A notification component for narrow screens that includes a leading icon, title, supporting text, a dismiss button, and action buttons. The action buttons are stacked and span the entire available space."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/notification/narrow-single-action.svg",
      width: "360px",
      alt: "A notification component for narrow screens that includes a leading icon, title, supporting text, a dismiss button, and one action button that spans the entire available space."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Position

There are two position options available for the notification component.

### Inline with content

Notifications can appear anywhere inline within the content.

{% contentPageImage {
    src:"../../../assets/img/components/notification/position-inline-with-content.svg",
    alt: "A screenshot of how a notification component is used among other user interfaces elements and container",
    width: 896
} %}

### Full width

Notifications can appear full width, and always appears at the top of the interface, under the header.

{% contentPageImage {
    src:"../../../assets/img/components/notification/position-full-width.svg",
    alt: "A screenshot of how a notification component is used as a banner under a header",
    width: 896
} %}

---

## Examples

### LTR examples

Here are some examples of Buttons in left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/notification/example-ltr-error-variant.svg",
    alt: "An error notification that informs users their connect is interrupted in English representing how the component looks in a LTR context",
    width: 1024
} %}

{% contentPageImage {
    src:"../../../assets/img/components/notification/example-ltr-success-variant.svg",
    alt: "An success notification that informs users email is confirmed in English representing how the component looks in a LTR context",
    width: 1024
} %}

### RTL examples

{% contentPageImage {
    src:"../../../assets/img/components/notification/example-rtl-error-variant.svg",
    alt: "An error notification that informs users their connect is interrupted in Hebrew representing how the component looks in a RTL context",
    width: 1024
} %}

{% contentPageImage {
    src:"../../../assets/img/components/notification/example-rtl-success-variant.svg",
    alt: "An success notification that informs users email is confirmed in Hebrew representing how the component looks in a RTL context",
    width: 1024
} %}

---

## Resources

{% resourceTable {
    componentName: 'Notification'
} %}
