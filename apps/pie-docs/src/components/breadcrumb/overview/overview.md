---
eleventyNavigation:
    key: Overview
    parent: Breadcrumb
    order: 1
shouldShowContents: true
permalink: components/breadcrumb/
---

## Overview

The purpose of breadcrumbs is to provide users with a clear and intuitive way to understand their location within a website or application's hierarchy and navigate back to higher-level pages. They enhance the user experience by offering contextual awareness and simplifying navigation, especially within complex or deeply nested structures.

Breadcrumbs serve a wide range of purposes in user interfaces, such as allowing users to retrace their steps, quickly access parent pages, and reduce the need for extensive scrolling or menu navigation. They improve efficiency and help users maintain their sense of orientation within the overall structure.

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/overview.svg",
    alt: "A breadcrumb navigation showing a hierarchical path with Home, SGG, and John's Pizza links."
} %}

---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Help users to understand where they are within a site hierarchy of more than one level.",
            "Provide a shortcut to parent pages.",
            "Show the full path of breadcrumb items, in the context of site hierarchy whenever possible.",
            "Use breadcrumbs to compliment existing methods of navigation."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't display on a top-level page, such as a home or high-level category page.",
            "Don't allow breadcrumbs to flow onto more than one line.",
            "Don't show the previous pages a user has taken to arrive at a page.",
            "Don't create a custom symbol to separate breadcrumb items."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/anatomy.svg",
    alt: "Anatomy of a breadcrumb component showing numbered elements including scrim, links, chevrons, current page indicator, ellipsis overflow, and popover.",
    width: 701
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Scrim (optional):** Provides contrast when used on an image or dark container.",
        "**Breadcrumb link:** The [Link](/components/link/) allows users to redirect to the first page within the flow.",
        "**Chevron:** Clearly divides each link and indicates the site hierarchies progression.",
        "**Current Page (Optional):** Highlights the page the user is currently viewing.",
        "**Ellipsis Overflow Link (Optional):** Appears when breadcrumb content exceeds the available width, allowing users to access the hidden breadcrumb links.",
        "**Popover (Optional):** Shows an interactive list of overflow breadcrumbs when they exceed the available width."
    ]
} %}

---

## Variations

### Default

The standard breadcrumb list to be used to specify the full site hierarchy in regards to the page which the user has selected.

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/variations-default.svg",
    alt: "Default breadcrumb showing a hierarchical path with three levels and a current page.",
    width: 460
} %}

### Back

Used to navigate to the higher-level page in the site hierarchy. This variant is optional for desktop interfaces and required for mobile.

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/variations-back.svg",
    alt: "Back breadcrumb variant showing a left arrow with destination page text.",
    width: 144
} %}

---

## Modifiers

### Scrim

The scrim variant of the Breadcrumb is to be used when the component is above an image or darker container to ensure high contrast and legibility.

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/modifiers-scrim.svg",
    alt: "Breadcrumb with a dark scrim background for better contrast on images or dark backgrounds.",
    width: 492
} %}

### Current page

Display the current page when no page title is visible to clarify its location and identity. If the page title is defined near the top of the current page, the current page breadcrumb is optional.

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/modifiers-current-page.svg",
    alt: "Breadcrumb with the current page highlighted.",
    width: 362
} %}

---

## Overflow

On desktop, breadcrumbs use overflow to maintain a single-line layout. The first item remains visible, followed by an ellipsis (...) that hides intermediate links. Lower-level items stay visible, ensuring clear navigation. On mobile, overflow is not used, as users rely on a back button.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/breadcrumb/overflow-do.svg",
            width: "362px",
            alt: "Breadcrumb with proper overflow showing first item, ellipsis, and last items."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/breadcrumb/overflow-dont.svg",
            width: "362px",
            alt: "Breadcrumb with improper overflow showing items flowing onto multiple lines."
        }]
    }
} %}

### Truncation

If a breadcrumb label is still too long to fit within a single line, even after overflow is applied, truncate it with an ellipsis at the end.
When truncated, display the full title in a tooltip on hover, focus, or single tap.

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/overflow-truncation.svg",
    alt: "Breadcrumb showing truncated text with tooltip on hover.",
    width: 460
} %}

### Popover overflow

The Popover's width should not exceed that of the Breadcrumb component's. At maximum, the width should be 600px. If a breadcrumb link exceeds the Popover's width, it wraps onto the next line.

---

## Narrow

Only the back variant is available in narrow screen sizes.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/breadcrumb/narrow-do.svg",
            alt: "Back breadcrumb variant on narrow screen showing destination page.",
            width: "456px"
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/breadcrumb/narrow-dont.svg",
            alt: "Default breadcrumb variant on narrow screen causing overflow issues.",
            width: "456px"
        }]
    }
} %}

---

## Interactions 

The Breadcrumb link’s target area width should be defined by the width of its label (not including the chevron). The height of the target area is 24px.

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/interactions.svg",
    alt: "Breadcrumb interaction target area showing width defined by label and height of 24px."
} %}

{% list {
    type: listTypes.highlight,
    highlightColour: ["support-brand-04", "support-brand-05", "support-brand-06"],
    items: [
        "**Opens the Breadcrumb link:** Navigates the user to the selected page.",
        "**Closes the popover:** The popover list will disappear.",
        "**Opens the popover:** Interacting with the ellipsis reveals a Popover containing the Breadcrumb links hidden due to overflow when the user clicks, or keyboard focuses."
    ]
} %}

---

## Content

### Breadcrumb links

Use the full name of each page referenced in the Breadcrumbs so that each link clearly indicates the different levels of the site structure to the user.

---

## Layout

### Placement

Breadcrumbs should be placed toward the top left of the page below any navigation elements but above the page title.

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/layout-placement.svg",
    alt: "Breadcrumb placement showing position at top left of page above the page title.",
    width: "732px"
} %}

### Alignment

#### Tooltip alignment

Align the tooltip to the centre of the Breadcrumb link to maintain clarity while preventing it from going out of bounds.

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/layout-alignment-tooltip.svg",
    alt: "Tooltip alignment centered on breadcrumb link to prevent overflow.",
    width: 460
} %}

#### Popover alignment

The Popover should be aligned to the left of the Breadcrumb component. To ensure that the Popover does not go out of bounds from it's container or screen.

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/layout-alignment-popover.svg",
    alt: "Popover alignment showing left alignment to prevent overflow.",
    width: 460
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/breadcrumb/interactive-state-default.svg",
      width: 362,
      alt: "Default state of breadcrumb links."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Hover</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/breadcrumb/interactive-state-hover.svg",
      width: 362,
      alt: "Hover state of breadcrumb links."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/breadcrumb/interactive-state-active.svg",
      width: 362,
      alt: "Active state of breadcrumb links."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Focus</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/breadcrumb/interactive-state-focus.svg",
      width: 362,
      alt: "Focus state of breadcrumb links."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of Breadcrumbs in left-to-right context:

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/examples-ltr-default.svg",
    alt: "Default breadcrumb in left-to-right context showing a hierarchical path with Home, Restaurants, Pizza, and a current page.",
    width: 460
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/breadcrumb/examples-ltr-back.svg",
      width: 362,
      alt: "Back variant breadcrumb in left-to-right context showing a single 'Pizza' link with a back arrow pointing left."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/breadcrumb/exmaples-ltr-popover.svg",
      width: 362,
      alt: "Breadcrumb with popover in left-to-right context showing hidden navigation items in a dropdown menu with 'Restaurants' option visible."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of Breadcrumbs in right-to-left context:

{% contentPageImage {
    src:"../../../assets/img/components/breadcrumb/examples-rtl-default.svg",
    alt: "Default breadcrumb in right-to-left context showing a hierarchical path with Hebrew text and chevrons pointing right instead of left.",
    width: 460
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/breadcrumb/examples-rtl-back.svg",
      width: 362,
      alt: "Back variant breadcrumb in right-to-left context showing Hebrew text with a back arrow pointing right for RTL navigation."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/breadcrumb/examples-rtl-popover.svg",
      width: 362,
      alt: "Breadcrumb with popover in right-to-left context showing Hebrew text with a dropdown menu displaying additional navigation options."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Resources

{% resourceTable {
    componentName: 'Breadcrumb'
} %}
