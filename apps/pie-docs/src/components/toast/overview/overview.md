---
eleventyNavigation:
    key: Overview
    parent: Toast
    order: 1
eleventyComputed:
    priorityQueue: "{% include './priority-queue.json' %}"
shouldShowContents: true
permalink: components/toast/
---

## Overview

Toasts are used to inform users about processes within a system. They can also provide contextual feedback. They appear temporarily at the bottom of the screen and disappear after a certain time period or when the user performs an action to remove them.

{% contentPageImage {
    src:"../../../assets/img/components/toast/overview.svg",
    alt: "A toast placed at the bottom of the page."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Display only one toast at a time.",
            "Limit your message to 35 characters for a single-line toast or 90 characters for a multi-line toast.",
            "Be mindful of how often you trigger toasts.",
            "Use for short messages that confirm an action taken by a user."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use toasts for critical information.",
            "Don’t place the toast over any navigational elements."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/toast/anatomy.svg",
    alt: "Anatomy of a toast.",
    width: 426
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon:** Leading icon that visually supports the label.",
        "**Message:** Informs the user of the action they have performed.",
        "**Action (optional):** [Button](/components/button/) action to either dismiss the toast or to undo the action.",
        "**Close (optional):** [Icon button](/components/icon-button/) to close the Toast."
    ]
} %}

---

## Variations

### Default

A default single-line toast; this can be used with or without an icon or action.

{% contentPageImage {
    src:"../../../assets/img/components/toast/variations-default.svg",
    alt: "A toast component on its default variation.",
    width: 300
} %}

### Multi-line

If you require additional text for your message, please use the multi-line component. Maximum of 3 lines.

{% contentPageImage {
    src:"../../../assets/img/components/toast/variations-multi-line.svg",
    alt: "A toast component with multiple lines of text. The text is truncated so that a maximum of three lines are shown.",
    width: 300
} %}

---

## Modifiers

### Strong

Use strong colour variants to increase the visual impact of your message.

{% contentPageImage {
    src:"../../../assets/img/components/toast/modifiers-strong.svg",
    alt: "The info, warning, success and error toast variants with the strong modifier applied.",
    width: 866
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Info:** Providing contextual information about the progress of an action.",
        "**Warning:** Providing non-critical information about the progress of an action.",
        "**Success:** Providing positive information about the progress of an action.",
        "**Error:** Providing critical information about the progress of an action. Please review if toast is the correct component to use. It may be better to use a dialogue, notification or banner."
    ]
} %}

### Subtle

To create a message with less prominence you can use the subtle variant.

{% contentPageImage {
    src:"../../../assets/img/components/toast/modifiers-subtle.svg",
    alt: "Multiple toasts with the subtle modifier.",
    width: 788
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Info:** Providing contextual information about the progress of an action.",
        "**Warning:** Providing non-critical information about the progress of an action.",
        "**Success:** Providing positive information about the progress of an action.",
        "**Error:** Providing critical information about the progress of an action. Please review if toast is the correct component to use. It may be better to use a dialogue, notification or banner.",
        "**Neutral:** Neutral: Providing non-urgent general information about the progress of an action."
    ]
} %}

### Icons

When using an icon inside the toast component, you should make sure that the icon clearly conveys the intended meaning. Only use the icons that have been built into the component - do not supply your own.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/toast/modifiers-icons-do.svg",
            width: "456px",
            alt: "Two toast components using approved icons for the error and info states."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/toast/modifiers-icons-dont.svg",
            width: "280px",
            alt: "An error toast using an unapproved icon"
        }]
    }
} %}

### Actions 

If you are using actions, only use the pre-built button in the toast.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/toast/modifiers-actions-do.svg",
            width: "456px",
            alt: "Two toast components with close icon button and dismiss button"
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/toast/modifiers-actions-dont.svg",
            width: "280px",
            alt: "A toast incorrectly using a custom dismiss button."
        }]
    }
} %}

---

## Sizes

### Height

The toast has a minimum height of 48px when displaying one line of text. It should not exceed 122px in height, which is enough to accommodate up to three lines of text.

{% contentPageImage {
    src:"../../../assets/img/components/toast/sizes-height.svg",
    alt: "A regular toast and a multi-line toast.",
    width: 300
} %}

### Width

The toast has a minimum width of 300px and a maximum width of 420px.

{% contentPageImage {
    src:"../../../assets/img/components/toast/sizes-width.svg",
    alt: "A 420px wide toast",
    width: 420
} %}

---

## Overflow

If the body copy extends beyond one line, it should automatically wrap to multiple lines. Multi-line text will be truncated so that it does not exceed three lines. For longer text content, consider an alternative component.

{% contentPageImage {
    src:"../../../assets/img/components/toast/overflow.svg",
    alt: "A regular toast and a multi-line toast.",
    width: 968
} %}

---

## Priority queue

Only one toast is displayed at a time. When toasts are consecutively or simultaneously triggered, their display order is defined by the priority queue.

Each level takes priority over those below it, queues alongside toasts of the same priority, and yields to higher priority levels.

{% componentDetailsTable {
  tableData: priorityQueue
} %}

{% notification {
  type: "information",
  message: "Refer to the [Toast Provider](/components/toast/toast-provider/code/) documentation for guidance on how to manage the queue priority."
} %}

---

## Behaviours

### Auto-dismiss
By default the toast automatically disappears after 5 seconds. However, the user can manually dismiss the toast before the timer ends if a close option is present. Additionally, users can pause the auto-dismissal by hovering over the toast, with the timer resetting once the mouse moves away.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/behaviours-toast.svg",
      width: 300,
      alt: "A toast without a close icon button nor a dismiss button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/behaviours-toast-with-close-icon-button.svg",
      width: 300,
      alt: "A toast with a close icon button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/behaviours-toast-with-dismiss-button.svg",
      width: 300,
      alt: "A toast with a dismiss button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Persistent

If the toast has a close icon button or a dismiss button, the toast can be persisted until the user manually dismisses it.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/behaviours-toast-with-close-icon-button.svg",
      width: 300,
      alt: "A toast with a close icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/behaviours-toast-with-dismiss-button.svg",
      width: 300,
      alt: "A toast with a dismiss button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactions

If the toast includes either a close icon button or a dismiss button, either can be used to dismiss the toast.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/interactions-close-icon-button.svg",
      width: 300,
      alt: "A toast with a close icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/interactions-dismiss-button.svg",
      width: 300,
      alt: "A toast with a dismiss button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Layout

### Page position

#### LTR

By default, toasts should appear at the bottom-left of the page’s content area, excluding any navigation. Alternatively, they may be placed at the bottom-right.

{% contentPageImage {
    src:"../../../assets/img/components/toast/layout-ltr-position-left.svg",
    alt: "A toast placed at the bottom-left of a page with a left-to-right direction."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/toast/layout-ltr-position-right.svg",
    alt: "A toast placed at the bottom-right of a page with a left-to-right direction."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Wide:** 24px padding <br /> **Narrow:** 16px padding"
    ]
} %}

#### RTL

By default, toasts should appear at the bottom-right of the page’s content area, excluding any navigation in RTL layout. Alternatively, they may be placed at the bottom-left.

{% contentPageImage {
    src:"../../../assets/img/components/toast/layout-rtl-position-right.svg",
    alt: "A toast placed at the bottom-right of a page with a right-to-left direction."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/toast/layout-rtl-position-left.svg",
    alt: "A toast placed at the bottom-left of a page with a right-to-left direction."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Wide:** 24px padding <br /> **Narrow:** 16px padding"
    ]
} %}

### Modal position

A toast should be located at the bottom centre of the modal content. The toast shouldn’t overlay a pinned footer. 

{% contentPageImage {
    src:"../../../assets/img/components/toast/layout-modal-position.svg",
    alt: "A toast placed at the bottom of a modal."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Wide:** 24px padding <br /> **Narrow:** 16px padding"
    ]
} %}

---

## Examples

### LTR examples

Here are some examples of the toast component in a left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/toast/example-ltr-toast.svg",
    alt: "A toast component in a left-to-right context.",
    width: 272
} %}


### RTL examples

Here are some examples of the toast component in a right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/toast/example-rtl-toast.svg",
    alt: "A toast component in a right-to-left context.",
    width: 272
} %}

---

## Resources

{% resourceTable {
    componentName: 'Toast'
} %} 