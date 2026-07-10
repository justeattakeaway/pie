---
eleventyNavigation:
    key: Android guidance
    parent: 'Overlay Patterns'
    order: 4
shouldShowContents: true
eleventyComputed:
    zIndexes: "{% include './z-indexes.json' %}"
---

## Decision tree

You can follow this decision tree to choose the most appropriate UI component based on the specific context, importance, and user interaction requirements of your product interface.

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/android-guidance/android-decision-tree.svg",
  alt: "",
  width: "940px"
} %}

---

## Dialog modal

Dialogs are a surface that overlays the page’s main content and is used to display information, gather input or confirm actions.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full Android Modal Dialog documentation](/components/modal/android/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/android-guidance/android-alert.svg",
  alt: "",
  width: "290px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use dialogs in the neutral-alternative variant to display critical information and display urgent messages.",
            "Choose variants in brand colours for promotional and non-critical content.",
            "Use them to display important information that needs user’s action or dismissal.",
            "Use them when the user needs to perform one specific task.",
            "They are triggered by the user.",
            "All content meets AA accessibility standards and is read by assistive technologies."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't allow excessive content length. Dialog modals are for focused tasks, so check out this documentation for alternatives.",
            "Don’t use them for multi-step flows.",
            "Don't use dialogs for minor notifications",
            "Limit and avoid excessive interruptions",
            "Don't add crucial information to images"
        ]
    }
} %}

---

## Bottom sheet

A modal bottom sheet is a surface that slides up from the bottom of the screen, remaining attached while displaying additional information or actions, all while keeping the main content visible.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full Bottom Sheet documentation](/components/bottom-sheet/android/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/android-guidance/android-bottom-sheet-modal.svg",
  alt: "",
  width: "360px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use to display semi-critical information.",
            "Use where the user needs to perform one specific task.",
            "Use them as contextual interactions.",
            "They are triggered by the user.",
            "Use an overlay scrim in between the two layers of content."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them for multi-step flows. Use a full screen sheet instead.",
            "Avoid stacking a bottom sheet on top of another as this can create usability issues and confusion in a user flow. Check the decision tree for alternatives."
            ]
    }
} %}

---

## Bottom sheet - full screen

A full-screen bottom sheet is a surface anchored to the bottom of the screen that keeps the main content visible. It can be dragged up to reveal additional information when needed.

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/android-guidance/android-bottom-sheet-full-screen.svg",
  alt: "",
  width: "375px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them to display long form content.",
            "Use where an expandable content display benefits the user.",
            "Use for permanent content that shouldn’t be dismissed."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them for multi-step flows. Use a screen instead.",
            "Don’t use with an overlay scrim.",
            "They are not triggered by the user."
            ]
    }
} %}

---

## Popover menu - native

Popovers are a small overlay that appears above content, offering extra information, context, or options to the user.

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/android-guidance/android-popover-menu-native.svg",
  alt: "",
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

## Screen

A screen is a surface that fully replaces the previous display, functioning as an independent screen rather than overlaying the existing content. The surface can optionally slide up from the bottom of the screen if needed.

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/android-guidance/android-full-screen-sheet.svg",
  alt: "",
  width: "375px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use for focused tasks that require the user’s full attention.",
            "Use for multi-step or single-step flows.",
            "They are triggered by the user."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use when the flow isn’t critical to the user."
            ]
    }
} %}

---

## System dialogue

Also known as Dialog - Native, a system native dialog is a pre-built element provided by the operating system for displaying alerts, notifications, or messages within an app, adhering to platform design guidelines.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full System Dialog documentation](/components/modal-native/android/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/android-guidance/android-dialogue-native.svg",
  alt: "",
  width: "280px"
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

A toast shows short updates about app processes at the bottom of the screen.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full Toast documentation](/components/toast/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/toast.svg",
  alt: "",
  width: "280px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them for quick, succinct messaging.",
            "They can be triggered by the system as a response to a user’s action."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them for long form content.",
            "Don’t use them when the message needs to be persistent, unless expecting an action from the user.",
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
  message: "Check out our [full Tooltip documentation](/components/tooltip/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/android-guidance/android-tooltip.svg",
  alt: "",
  width: "280px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them to explain UI function or give quick information.",
            "They should be primarily triggered by the user."
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

Z-index is a property used in design to control the stacking order of elements on a page. It determines which elements appear in front of others, making it useful for managing overlapping elements in user interfaces.

We’ve prepared a table to help you understand how our components stack on top of each other.

{% componentDetailsTable {
tableData: zIndexes
} %}
