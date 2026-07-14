---
eleventyNavigation:
    key: Web guidance
    parent: 'Overlay Patterns'
    order: 2
eleventyComputed:
    zIndexes: "{% include './z-indexes.json' %}"
shouldShowContents: true
---

## Decision tree

You can follow this decision tree to choose the most appropriate UI component based on the specific context, importance, and user interaction requirements of your product interface.

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/web-decision-tree.svg",
  alt: "A decision tree to choose the most appropriate UI component based on the specific context.",
  width: "700px"
} %}

---

## Modal

A modal is a surface that overlays the page’s main content and is used to display information, gather input or confirm actions.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full Modal documentation](/components/modal/web/) for this component."
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/overlay-patterns/modal.svg",
  mobileSrc:"../../../../assets/img/patterns/overlay-patterns/modal-narrow.svg",
  alt: "A modal containing a heading, multiple lines of text and two buttons placed below the modal heading.",
  width: "600px"
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use the modal in the neutral-alternative variant to display critical information and display urgent messages.",
            "Choose variants in brand colours for promotional and non-critical content.",
            "Use for multi-step or single-step flows.",
            "Use them to display important information that needs the user’s action or dismissal.",
            "Use them when the user needs to perform one specific task.",
            "They are triggered by the user.",
            "All content meets AA accessibility standards and is read by assistive technologies."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use them if the user’s primary flow doesn’t have to be disrupted.",
            "Limit and avoid excessive interruptions"
        ]
    }
} %}

---

## Popover

A popover is a small overlay that appears above content, offering extra information, context, or options to the user.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full Popover documentation](/components/popover/) for this component."
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

## Toast

A toast shows short updates about app processes at the bottom of the screen.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Check out our [full Toast documentation](/components/toast/) for this component."
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
  message: "Check out our [full Tooltip documentation](/components/tooltip/) for this component."
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
