---
eleventyNavigation:
    key: Apps
    parent: Toast
    order: 3
shouldShowContents: true
eleventyComputed:
    priorityQueue: "{% include '../apps/priority-queue.json' %}"
    touchArea: "{% include '../apps/touch-area.json' %}"
---

## Dos and Don'ts

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
            "Don’t interrupt the user experience.",
            "Don't use toasts for critical information.",
            "Don't place the toast over any navigational elements.",
            "Don’t use Toast for error messages. See [Error patterns docs](https://www.pie.design/patterns/errors/) for alternatives.",
            "Don’t overload with information, keep the messaging focused."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/anatomy.svg",
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

## Variants

### Default

A default single-line toast; this can be used with or without an icon or action.

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/variants-default.svg",
    alt: "A toast component on its default variation.",
    width: 300
} %}

### Multi-line

If you require additional text for your message, please use the multi-line component. Maximum of 3 lines.

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/variants-multi-line.svg",
    alt: "A toast component with multiple lines of text. The text is truncated so that a maximum of three lines are shown.",
    width: 300
} %}

---

## Modifiers

### Strong

Use strong colour variants to increase the visual impact of your message.

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/modifiers-strong.svg",
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
    src:"../../../assets/img/components/toast-apps/modifiers-subtle.svg",
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
            src: "../../../assets/img/components/toast-apps/modifiers-icons-do.svg",
            width: "456px",
            alt: "Two toast components using approved icons for the error and info states."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/toast-apps/modifiers-icons-dont.svg",
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
            src: "../../../assets/img/components/toast-apps/modifiers-actions-do.svg",
            width: "456px",
            alt: "Two toast components with close icon button and dismiss button"
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/toast-apps/modifiers-actions-dont.svg",
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
    src:"../../../assets/img/components/toast-apps/sizes-height.svg",
    alt: "A regular toast and a multi-line toast.",
    width: 300
} %}

### Width

The toast has a minimum width of 300px and a maximum width of 720px.

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/sizes-width-1.svg",
    alt: "Example of the toast component taking 90% of a screen with 360px width."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/sizes-width-2.svg",
    alt: "Example of the toast component in a 1024px screen with a maximum width of 720px."
} %}

---

## Overflow

If the body copy extends beyond one line, it should automatically wrap to multiple lines. Multi-line text will be truncated so that it does not exceed three lines. For longer text content, consider an alternative component.

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/overflow.svg",
    alt: "A regular toast and a multi-line toast.",
    width: 968
} %}

---

## Priority queue

Only one toast is displayed at a time. When toasts are consecutively or simultaneously triggered, their display order is defined by the priority queue.

Below it’s a reference for how a priority queue could be implemented by pillar engineers. Each level of priority takes over those below it, queues alongside toasts of the same priority, and yields to higher priority levels.

{% notification {
  type: "information",
  message: "This is the suggested pattern for development, this functionality, if required is handled by pillar engineers."
} %}

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
      src: "../../../assets/img/components/toast-apps/behaviours-toast-no-action.svg",
      width: 300,
      alt: "A toast without a close icon button nor a dismiss button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast-apps/behaviours-toast-icon-button.svg",
      width: 300,
      alt: "A toast with a close icon button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast-apps/behaviours-toast-action-button.svg",
      width: 300,
      alt: "A toast with an action dismiss button."
    } %}
  {% endcontentItem %}
    {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast-apps/behaviours-toast-action-icon-button.svg",
      width: 300,
      alt: "A toast with an icon and action dismiss button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Persistent

If the toast has a close icon button or a dismiss button, the toast can be persisted until the user manually dismisses it.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast-apps/behaviours-persistent-icon-button.svg",
      width: 300,
      alt: "A toast with a close icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast-apps/behaviours-persistent-action-button.svg",
      width: 300,
      alt: "A toast with a dismiss button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactions

If the toast includes either a close icon button or a dismiss button, either can be used to dismiss the toast.

### Touch area

{% componentDetailsTable {
  tableData: touchArea
} %}

{% notification {
  type: "information",
  message: "“Dp” in Android stands for “Density-independent Pixel”. A scaling measurement system used to maintain consistent sizing across a variety of screen densities."
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast-apps/interactions-touch-icon.svg",
      width: 300,
      alt: "A toast with a close icon button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/toast-apps/interactions-touch-action.svg",
      width: 300,
      alt: "A toast with a dismiss button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Close icon button**: Target area to close the toast by clicking on the close button.",
        "**Action button**: Target area that leads to an action configuration which consequently dismisses the toast."
    ]
} %}

---

## Layout

### Content area

The content area is determined by the fixed content on the screen, such as Navigation Menu and Home Indicator Bar.

#### Full screen

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/layout-fullscreen.svg",
    alt: "A toast placed at the bottom-left of a page with a left-to-right direction."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "Full screen content area."
    ]
} %}

<br />

#### Docked bottom navigation

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/layout-docked-nav.svg",
    alt: "A toast placed at the bottom of a page with a docked bottom navigation."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "Content area in relation to the docked bottom navigation."
    ]
} %}

<br />

#### Floating bottom navigation

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/layout-floating-nav.svg",
    alt: "Content area for placing A toast placed above a floating bottom navigation."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "Content area in relation to the floating bottom navigation."
    ]
} %}

<br />

#### Home indicator

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/layout-home-indicator.svg",
    alt: "A toast placed above the home indicator."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "Content area in relation to the home indicator."
    ]
} %}

### Positioning

The toast should always be positioned at the bottom centre of the mobile and tablet screens and to avoid the bottom navigation bar and a pinned footer. The bottom of the toast should be 24px from the base of the content area.

#### No fixed content

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/positioning-no-content.svg",
    alt: "A toast placed at the bottom of a page with no fixed content."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "24px from the base of the toast."
    ]
} %}

<br />

#### Bottom navigation

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/positioning-bottom-nav.svg",
    alt: "A toast placed at the bottom of a page with a bottom navigation."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "24px from the base of the bottom navigation."
    ]
} %}

<br />

#### Floating navigation

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/positioning-floating-nav.svg",
    alt: "A toast placed at the bottom of a page with a floating bottom navigation."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "24px from the base of the toast in relation to the floating navigation."
    ]
} %}

<br />

#### Home indicator

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/positioning-home-indicator.svg",
    alt: "A toast placed at the bottom of a page with a home indicator."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "24px from the base of the toast in relation to the home indicator."
    ]
} %}

---

## Examples

### LTR examples

Here are some examples of the toast component in a left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/examples-ltr.svg",
    alt: "A toast component in a left-to-right context.",
    width: 272
} %}

### RTL examples

Here are some examples of the toast component in a right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/toast-apps/examples-rtl.svg",
    alt: "A toast component in a right-to-left context.",
    width: 272
} %}
