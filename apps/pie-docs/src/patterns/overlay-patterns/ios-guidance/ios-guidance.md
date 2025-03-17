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
  message: "Click [here](https://www.youtube.com/watch?v=2xZaiR2k4_k) to see the full guide on how to choose an overlay for iOS."
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
  message: "Check out our [full documentation](https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/%5BCore%5D-Apps-Component-Documentation-%5BPIE-3%5D?t=Q20mWFgBBjI2VLiy-0) for this component."
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

## Z-index

Z-index is a property used in design to control the stacking order of elements on a page. It determines which elements appear in front of others, making it useful for managing overlapping elements in user interfaces.

We’ve prepared a table to help you understand how our components stack on top of each other.

{% componentDetailsTable {
tableData: zIndexes
} %}

