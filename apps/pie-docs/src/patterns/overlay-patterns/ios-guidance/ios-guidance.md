---
eleventyNavigation:
    key: IOS guidance
    parent: 'Overlay Patterns'
    order: 3
shouldShowContents: true
eleventyComputed:
    zIndexes: "{% include './z-indexes.json' %}"
---

## Decision tree

You can follow this decision tree to choose the most appropriate UI component based on the specific context, importance, and user interaction requirements of your product interface.

You can take a closer look at this in our [overlay patterns](https://www.figma.com/design/Rqz8KHogVsGCS4j0nDueNo/branch/OsUnZnAk7zDlRrpFGmYn5O/%5BCore%5D-Patterns-%5BPIE-3%5D?node-id=4069-10559&t=epQdyBRv5LX6UjRC-0) file.

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/ios-guidance/ios-decision-tree.svg",
  alt: "",
  width: "950px"
} %}

---

## Video guide

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Click [here to see](https://www.youtube.com/watch?v=2xZaiR2k4_k) the full guide on how to choose an overlay for iOS."
} %}

{% youtubeVideo {
  videoId: "2xZaiR2k4_k"
} %}

---

## Alert modal

Alerts are a surface that overlays the page’s main content and is used to display information, gather input or confirm actions.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/%5BCore%5D-Apps-Component-Documentation-%5BPIE-3%5D?node-id=11866-11978&t=mcgPcbSYnfVk1kQT-0) for this component."
} %}


{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/ios-guidance/ios-alert.svg",
  alt: "",
  width: "290px"
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

## Bottom sheet 

A bottom sheet is a surface that slides up from the bottom of the screen, remaining anchored to the bottom while displaying additional information or actions, all while keeping the main content visible.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://pie.design/components/bottom-sheet/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/ios-guidance/ios-bottom-sheet.svg",
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
            "Avoid stacking a bottom sheet on top of another as this can create usability issues and confusion in a user flow. Check the [decision tree](https://www.figma.com/design/Rqz8KHogVsGCS4j0nDueNo/branch/OsUnZnAk7zDlRrpFGmYn5O/%5BCore%5D-Patterns-%5BPIE-3%5D?node-id=4069-10559&t=6LSpk2DW2rUZXHWu-0) for alternatives."       
            ]
    }
} %}

---

## Full screen sheet 

A full screen sheet is a surface that slides up from the bottom of the screen, and is a full screen display that overlays the previous screen.  

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/ios-guidance/ios-full-screen-sheet.svg",
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

## Popover menu - native 

Popovers are a small overlay that appears above content, offering extra information, context, or options to the user.

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/ios-guidance/ios-menu-native.svg",
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

## Sheet

A sheet is a surface that slides up from the bottom of the screen, and is a display that overlays the previous screen, all while still providing a visual hint of the underlying content.

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/ios-guidance/ios-sheet.svg",
  alt: "",
  width: "375px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them as contextual interactions.",
            "Use for single-step or multi-step flows, ideally with a maximum of two steps.",
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


## System alert

Also known as Alert - Native, a system native alert is a pre-built element provided by the operating system for displaying alerts, notifications, or messages within an app, adhering to platform design guidelines.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/%5BCore%5D-Apps-Component-Documentation-%5BPIE-3%5D?node-id=5692-5002&t=cJVgY2sP0q1ybIah-0) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/ios-guidance/ios-alert-native.svg",
  alt: "",
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

A toast shows short updates about app processes at the bottom of the screen.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full documentation](https://pie.design/components/toast/) for this component."
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
  src:"../../../../assets/img/patterns/overlay-patterns/ios-guidance/ios-tooltip.svg",
  alt: "",
  width: "1030px"
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

