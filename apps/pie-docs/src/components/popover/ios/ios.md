---
eleventyNavigation:
    key: iOS
    parent: Popover
    order: 4
shouldShowContents: true
---

{% notification {
  type: "information",
  message: "This component is defined by Human Interface Guidelines. See [Apple documentation](https://developer.apple.com/design/human-interface-guidelines/context-menus) for more information."
} %}

## Overview

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them for iOS overflow solutions such as when you need to add more options into header content.",
            "Order your menus by which items are used the most frequently."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't put too much information into a context menu. Context menus should be easy to scan."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/popover/ios/anatomy.svg",
    alt: "Annotated diagram of an iOS context menu showing its parts: liquid glass container, label, selected state, leading icon, border, and chevron.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Liquid Glass Container:** Bounding box for the menu's content.",
        "**Label:** The main message or information.",
        "**Selected (Optional):** Shows selected menu items.",
        "**Leading icon (Optional):** Provides visual context.",
        "**Border (Optional):** Divides content.",
        "**Chevron (Optional):** Shows that a menu item opens further options."
    ]
} %}

---

## Variants

### Light

Use light theme Liquid Glass Context Menus in light theme.

{% contentPageImage {
    src:"../../../assets/img/components/popover/ios/variants-light.svg",
    alt: "An iOS context menu displayed in the light variant.",
    width: "200"
} %}

### Dark

Use dark theme Liquid Glass Context Menus in dark theme.

{% contentPageImage {
    src:"../../../assets/img/components/popover/ios/variants-dark.svg",
    alt: "An iOS context menu displayed in the dark variant.",
    variant: "inverse",
    width: "200"
} %}

---

## Modifiers

### Selected

The selected modifier can be toggled on to highlight a menu item that is user selected.

{% contentPageImage {
    src:"../../../assets/img/components/popover/ios/modifiers-selected.svg",
    alt: "An iOS context menu showing a menu item in the selected state, highlighted to indicate user selection.",
    width: "200"
} %}

### Leading icon

Leading icons can be added to menu items to provide visual context and quick recognition.

{% contentPageImage {
    src:"../../../assets/img/components/popover/ios/modifiers-leading-icon.svg",
    alt: "An iOS context menu with leading icons displayed alongside each menu item label.",
    width: "200"
} %}

### Chevron

A trailing chevron shows that a menu item opens further options.

{% contentPageImage {
    src:"../../../assets/img/components/popover/ios/modifiers-chevron.svg",
    alt: "An iOS context menu with a trailing chevron on a menu item to indicate it opens a submenu.",
    width: "200"
} %}

---

## Interactions

### Opening a menu

Contextual menus are always hidden, and can be revealed usually by clicking an icon button (such as an overflow menu). Context menus will open close to their point of origin.

{% contentPageImage {
    src:"../../../assets/img/components/popover/ios/interactions-opening-menu.svg",
    alt: "Diagram showing an iOS context menu appearing near its trigger icon button when tapped.",
    width: "200"
} %}

### Closing a menu

You can close a context menu by either making a selection of the menu items or by tapping outside the menu's boundaries. This provides an intuitive way to dismiss it without interacting with the menu item selection.

{% contentPageImage {
    src:"../../../assets/img/components/popover/ios/interactions-closing-menu.svg",
    alt: "Diagram showing the interactive areas to dismiss the iOS context menu by tapping on one option or outside its boundaries.",
    width: "200"
} %}

---

## Content

### Labels

Ensure the content follows platform specific wording.

---

## LTR examples

Here's an example of a context menu in context.

{% contentPageImage {
    src:"../../../assets/img/components/popover/ios/examples-ltr.svg",
    alt: "Example of an iOS context menu used in a left-to-right layout.",
    width: "200"
} %}

---

## RTL examples

Here's an example of a context menu in RTL context.

{% contentPageImage {
    src:"../../../assets/img/components/popover/ios/examples-rtl.svg",
    alt: "Example of an iOS context menu used in a right-to-left layout.",
    width: "200"
} %}
