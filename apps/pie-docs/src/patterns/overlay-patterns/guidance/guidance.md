---
eleventyNavigation:
    key: Guidance
    parent: 'Overlay Patterns'
    order: 2
eleventyComputed:
    zIndexes: "{% include './z-indexes.json' %}"
shouldShowContents: true
---

## Decision tree

You can follow this decision tree to choose the most appropriate UI component based on the specific context, importance, and user interaction requirements of your product interface.

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/decision-tree.svg",
  mobileSrc:"../../../../assets/img/patterns/overlay-patterns/decision-tree-narrow.svg",
  alt: "A decision tree to choose the most appropriate UI component based on the specific context.",
  width: "1440px"
} %}

---

## Full width notification

A full width notification is a visual element that appears at the top of the screen. It's commonly used to display important messages, announcements or alerts.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://pie.design/components/notification/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/banner.svg",
  mobileSrc:"../../../../assets/img/patterns/overlay-patterns/banner-narrow.svg",
  alt: "The error variant of the full width notification component that contains heading, one line of text and a close icon to dismiss.",
  width: "872px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them at the top of the screen, only under the header.",
            "Use them for succinct messaging.",
            "They are triggered by the system."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them to display long form content.",
            "Don’t use them for non-essential information."
        ]
    }
} %}

---

## Bottom sheet

A bottom sheet is a surface attached to the bottom of the screen that displays additional information or actions while keeping the main content visible.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://pie.design/components/bottom-sheet/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/bottom-sheet.svg",
  alt: "A bottom sheet containing a heading and a list of action items.",
  width: "360px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use to display semi-critical information.",
            "Use where the user needs to perform one specific task.",
            "Use them as contextual interactions.",
            "They are triggered by the user."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them for multi-step flows. Use a modal view instead."
        ]
    }
} %}

---

## Modal

A modal is a surface that overlays the page’s main content and is used to display information, gather input or confirm actions.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://pie.design/components/modal/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/modal.svg",
  mobileSrc:"../../../../assets/img/patterns/overlay-patterns/modal-narrow.svg",
  alt: "A modal containing a heading, multiple lines of text ant two buttons placed below the modal heading.",
  width: "600px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them to display important information that needs user’s action or dismissal.",
            "Use them when the user needs to perform one specific task.",
            "They are triggered by the user."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them for multi-step flows."
        ]
    }
} %}

---

## Full page modal

Also known as Modal View (iOS) or Scaffold View (Android) are a surface that overlays the page’s main content entirely and is used to display information, gather input or confirm actions.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://pie.design/components/modal/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/frame.svg",
  mobileSrc:"../../../../assets/img/patterns/overlay-patterns/frame-narrow.svg",
  alt: "A surface that overlays the page’s main content entirely and displays a list of payment methods.",
  width: "360px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them for container multi-step interactions.",
            "Use them when the user needs to perform various tasks.",
            "They are triggered by the user."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them purely to display information. <br/> Use a bottom sheet instead.",
            "Don’t use them for a contextual interaction. <br/> Use a bottom sheet instead."
        ]
    }
} %}

---

## Notification

A notification is an element used to display brief messages, alerts, or updates to users within a user interface.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://pie.design/components/notification/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/notification.svg",
  mobileSrc:"../../../../assets/img/patterns/overlay-patterns/notification-narrow.svg",
  alt: "The warning variant of the notification component that contains one line of text.",
  width: "872px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them to display information which sits close to other UI components.",
            "Use them when the message needs to be persistent.",
            "They are not triggered by the user."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them for short-mid form content.",
            "Don’t use them for generic non-contextual information."
        ]
    }
} %}

---

## Popover

A popover is a small overlay that appears above content, offering extra information, context, or options to the user.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://pie.design/components/popover/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/popover.svg",
  alt: "A popover that contains a list of items.",
  width: "160px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them to display contextual actions.",
            "They are triggered by the user."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them when there are no actions to perform.",
            "Don’t use them for large amounts of content or actions."
        ]
    }
} %}

---

## Stacked notification

Stacked notifications allow us to provide users with timely and relevant information or alerts related to certain elements of the interface.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://pie.design/components/notification/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/stacked-notification.svg",
  mobileSrc:"../../../../assets/img/patterns/overlay-patterns/stacked-notification-narrow.svg",
  alt: "The compact variant of the notification where the trailing icon and supporting text are on the same line.",
  width: "320px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them when you want/need information to be attached or dependant of another block of UI.",
            "Use them only for succinct messaging.",
            "They are not triggered by the user."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them for long form content.",
            "Don’t use multiple stacked notifications at the same time."
        ]
    }
} %}

---

## System dialogue

A system native dialog is a pre-built element provided by the operating system for displaying alerts, notifications, or messages within an app, adhering to platform design guidelines.

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/system-dialog.svg",
  alt: "A system native dialog that contains title, multiple lines of text and two buttons to dismiss or confirm.",
  width: "275px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them only for critical system related information or permissions.",
            "They can be both triggered by the user or the system."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them for anything other than critical system messaging or permissions."
        ]
    }
} %}

---

## Toast

A toast show short updates about app processes at the bottom of the screen.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://pie.design/components/toast/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/toast.svg",
  alt: "A toast component that contains one line of text and a close icon to dismiss.",
  width: "280px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them for quick, succinct messaging.",
            "They can are triggered by the system as a response to a user’s action."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them for long form content.",
            "Don’t use them when the message needs to be persistent.",
            "Don’t use multiple toasts at the same time."
        ]
    }
} %}

---

## Tooltip

A tooltip is a contextual message that appears when users interact with an element, providing additional information or guidance.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://pie.design/components/tooltip/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/tooltip.svg",
  alt: "A tooltip that contains multiple lines of text and a close icon to dismiss.",
  width: "280px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them to explain UI function or give quick information.",
            "They are triggered by the user."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them for long form content.",
            "Don’t use them to display (or hide) essential information which the user would need to complete their tasks."
        ]
    }
} %}

---

## Z-index

Z-index is a CSS property used in web design to control the stacking order of elements on a page. It determines which elements appear in front of others, making it useful for managing overlapping elements in user interfaces.

We’ve prepared a table to help you understand how our components stack on top of each other.

{% componentDetailsTable {
tableData: zIndexes
} %}
