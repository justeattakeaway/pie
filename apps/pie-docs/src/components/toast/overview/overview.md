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
Toasts are used to inform users about processes within a system. They can also provide contextual feedback. They appear temporarily at the bottom-left of the screen and disappear after a certain time period or when the user performs an action to remove them.

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
            "Only one toast at a time.",
            "Limit your message to 35 characters (abbr) for one line toast or 90 characters (abbr) for multi-line toast.",
            "Be mindful of how often you trigger toasts.",
            "Use for short messages that confirm an action taken by a user."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Interrupt the user experience.",
            "Use a toast of critical information that user needs to action   consider using a pop-alert instead.",
            "Place the toast over any navigation."
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
        "**Message:** Informs the user of the action they have performed",
        "**Action (optional):** [Button](/components/button/) action to either dismiss the toast or to undo the action.",
        "**Close (optional):** [Icon button](/components/icon-button/) to close the Toast."
    ]
} %}

---
## Variations

### Default

A default one-line toast, this can be used with or without an icon or action.

{% contentPageImage {
    src:"../../../assets/img/components/toast/variations-default.svg",
    alt: "A toast component on its default variation.",
    width: 300
} %}

### Multi-line

If you require additional text for your message, please use the multi-line component. Maximum of 3 lines.

{% contentPageImage {
    src:"../../../assets/img/components/toast/variations-multi-line.svg",
    alt: "A toast component on its multi-line variation.",
    width: 300
} %}

---
## Modifiers

### Strong

To create a stronger impact with your message, you can use strong variant. This uses colour to back-up your message

{% contentPageImage {
    src:"../../../assets/img/components/toast/modifiers-strong.svg",
    alt: "Multiple toasts with strong modifier.",
    width: 866
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Info:** Providing contextual information about the progress of an action",
        "**Warning:** Providing non-critical information about the progress of an action",
        "**Success:** Providing positive information about the progress of an action",
        "**Error:** Providing critical information about the progress of an action. Please review if Toast is correct to use it might be better to use a dialogue, notification or banner"
    ]
} %}

### Subtle

To create a message with less prominence you can use the subtle variant.

{% contentPageImage {
    src:"../../../assets/img/components/toast/modifiers-subtle.svg",
    alt: "Multiple toasts with strong modifier.",
    width: 788
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Info:** Providing contextual information about the progress of an action",
        "**Warning:** Providing non-critical information about the progress of an action",
        "**Success:** Providing positive information about the progress of an action",
        "**Error:** Providing critical information about the progress of an action. Please review if Toast is correct to use it might be better to use a dialogue, notification or banner",
        "**Neutral:** Providing critical information about the progress of an action. Please review if Toast is correct to use it might be better to use a dialogue, notification or banner"
    ]
} %}

### Icons

When incorporating an icon into a Toast, it is essential to ensure that the icon clearly conveys the intended feedback. You should only use the icons built into the component and not use a different icon.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/toast/modifiers-icons-do.svg",
            width: "456px",
            alt: "Two toast components with close icon button"
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/toast/modifiers-icons-dont.svg",
            width: "280px",
            alt: "A toast without close icon button nor dismiss button"
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
            alt: "A toast with a wrong dismiss button variation"
        }]
    }
} %}

---
## Sizes

### Height

The toast has a minimum height of 48px when displaying one line of body copy, and it should not exceed 122px in height to accommodate up to three lines of multi-line body copy.

{% contentPageImage {
    src:"../../../assets/img/components/toast/sizes-height.svg",
    alt: "A regular toast and a multi-line toast.",
    width: 300
} %}

### Width

The toast has a minimum width of 300px and a maximum width of 420px.

{% contentPageImage {
    src:"../../../assets/img/components/toast/sizes-width.svg",
    alt: "A regular toast and a multi-line toast.",
    width: 420
} %}

---
## Overflow

If the body copy extends beyond one line, it should automatically wrap to multiple lines. Yet, ensure that multi-line text is truncated to a maximum of three lines. For longer text content, consider utilising a pop-up component.

{% contentPageImage {
    src:"../../../assets/img/components/toast/overflow.svg",
    alt: "A regular toast and a multi-line toast.",
    width: 968
} %}

---
## Priority queue

Only one toast is displayed at a time. When toasts are consecutively or simultaneously triggered, their display order is defined by the priority queue.

{% componentDetailsTable {
  tableData: priorityQueue
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
      alt: "A toast without close icon button nor dismiss button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/behaviours-toast-with-close-icon-button.svg",
      width: 300,
      alt: "A toast without with a close icon button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/behaviours-toast-with-dismiss-button.svg",
      width: 300,
      alt: "A toast without a dismiss button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Persistent

If the toast includes a close icon button or button with a dismissing purpose, the toast can remain persistent until the user manually dismisses it using either of these actions.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/behaviours-toast-with-close-icon-button.svg",
      width: 300,
      alt: "A toast without with a close icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/behaviours-toast-with-dismiss-button.svg",
      width: 300,
      alt: "A toast without a dismiss button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---
## Interactions

If the toast includes a close option, the user can select either option to automatically dismiss the toast.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/interactions-close-icon-button.svg",
      width: 300,
      alt: "A toast without with a close icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast/interactions-dismiss-button.svg",
      width: 300,
      alt: "A toast without a dismiss button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---
## Layout

### LTR position

A toast should be located at the bottom left of the page’s content are; excluding any navigation.

{% contentPageImage {
    src:"../../../assets/img/components/toast/layout-ltr-position.svg",
    alt: "A toast placed at the bottom of the page in LTR position."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Wide:** 24px padding",
        "**Narrow:** 16px padding"
    ]
} %}

### RTL position

A toast should be located at the bottom right of the page’s content are; excluding any navigation.

{% contentPageImage {
    src:"../../../assets/img/components/toast/layout-rtl-position.svg",
    alt: "A toast placed at the bottom of the page in RTL position."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Wide:** 24px padding",
        "**Narrow:** 16px padding"
    ]
} %}

---

## Examples

### LTR examples

Here are some examples of Toast in left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/toast/example-ltr-toast.svg",
    alt: "A Toast in left-to-right context.",
    width: 272
} %}


### RTL examples

Here are some examples of Toast in right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/toast/example-rtl-toast.svg",
    alt: "A Toast in right-to-left context.",
    width: 272
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Toast documentation, please see the resources below."
} %}

{% resourceTable {
    componentName: 'Toast'
} %} 