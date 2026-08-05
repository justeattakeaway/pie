---
eleventyNavigation:
  key: iOS
  parent: App Bar
  order: 2
draft: false
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use to display page titles and additional functionality.",
            "Follow native iOS scrolling behaviours.",
            "Always use iOS headers relevant to the device you're designing for."        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Do not use anywhere other than the top of the screen.",
            "Do not use images behind transparent heading text.",
            "Never break from the app header component - it is essential to the product architecture."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/anatomy.svg",
    alt: "Anatomy of an app bar.",
    width: 834
} %}

{% list {
    type: listTypes.ordered,
    items: [
    "**Container:** Provides a filled or transparent background.",
    "**iOS Notch [native]:** Native area of non-design that houses device functionality.",
    "**iOS Status bar [native]:** Native element that displays current device information.",
    "**Leading controls (optional):** Option of three controls (back, menu, close) to aid user navigation.",
    "**Title (optional):** Provides an optional heading for the page content.",
    "**Secondary text (optional):** Provides optional supplementary information.",
    "**Divider (only on solid and blur variants):** Separates header from content.",
    "**Trailing controls (only in title variants):** Provides optional overflow menu icon or choice of up to two custom icons to aid user navigation.",
    "**Search input (only on search variant):** Allows users to search product content; option of placeholder or search text."
    ]
} %}

---

## Devices

iOS 26 and Liquid Glass is available on iPhone devices ranging from the iPhone 11 series up through the latest iPhone 17, plus the iPhone SE (2nd generation and later). Our app header component is designed to stay up to date with the latest iPhone model. Currently using notch and status bar for iPhone 17.

## Variants

### Filled

A filled background provides a tokenised container for header content and titles, which should be used as default.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/variant-filled.svg",
    alt: "An app bar with a filled background.",
    width: 360
} %}

### Blurred

Blurred headers can also be used as an option; these allow the background to be partly visible whilst keeping the text fully accessible. These headers are best used over photos, illustrations, and other strong imagery.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/variant-blurred.svg",
    alt: "An app nar with a blurred background.",
    width: 360
} %}

### Transparent

A transparent background allows the page background or image to be fully visible, allowing for more creative header solutions. Inverse icon buttons are used in transparent background headers to ensure they are easily visible against any content beneath.

If using the transparent header above a page background colour, you may need to do additional checks to make sure the text is accessible. If using the transparent header above an image, please ensure titles are turned off.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/variant-transparent.svg",
    alt: "An app nar with a transparent background.",
    width: 360
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/app-bar/ios/variant-transparent-do.svg",
            width: "362px",
            alt: "An app bar with inverse icon buttons which are legible on a complex background."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/app-bar/ios/variant-transparent-dont.svg",
            width: "362px",
            alt: "An app bar with text over a complex background making it different to read."
        }]
    }
} %}

----

## Modifiers

### Title

#### Regular

Use as default to provide screen navigation. Titles may be hidden for certain use cases, but there must always be a title to ensure screen reading accessibility.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/title-regular.svg",
    alt: "An app bar with a regular title.",
    width: 360
} %}

#### Prominent

Use when you need to make a title more prominent.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/title-prominent.svg",
    alt: "An app bar with a prominent title.",
    width: 360
} %}

### Secondary text

You can add secondary text to the header to provide supplementary information for the user.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/title-secondary.svg",
    alt: "An app bar with a title and secondary text.",
    width: 360
} %}

### Alignment

Our app header can use both centre and left alignment for text options. Titles may be hidden for certain use cases, but there must always be a title to ensure screen reading accessibility.

#### Centre

Use as default to provide screen navigation. If you need 2 or more trailing buttons, we suggest using left-aligned text to allow for more room.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/alignment-centre.svg",
    alt: "An app bar with a centre aligned title.",
    width: 360
} %}

#### Left

Left-aligned text can be used as an option for longer titles and secondary text, or if you need to add two trailing icons.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/alignment-left.svg",
    alt: "An app bar with a left aligned title.",
    width: 360
} %}

### Search

Can be used when you need to use high-level search functionality. Use the placeholder option to show placeholder text; use filled to show when a user has entered a string of text.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/search-1.svg",
    alt: "An app bar with a search box that contains placeholder text.",
    width: 360
} %}

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/search-2.svg",
    alt: "An app bar with a search box that contains a search string.",
    width: 360
} %}

### Leading controls

#### Back

Aligns with native behaviour, allowing users to navigate back to the previous screen. An optional label is provided to assist with navigation; this can be turned on or off depending on pillar decisions.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/controls-back.svg",
    alt: "An app bar with a back button.",
    width: 360
} %}

#### Close

Aligns with native behaviour, allowing users to close the application or view.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/controls-close.svg",
    alt: "An app bar with a close button.",
    width: 360
} %}

#### Menu

Allows users to open a side-sheet menu. Used on tablet rather than mobile.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/controls-menu.svg",
    alt: "An app bar with a menu button.",
    width: 360
} %}

### Trailing controls

You can use up to two icons in the trailing controls to aid user navigation and provide additional functionality.

#### Overflow menu

Aligns with native behaviour, allowing users to open a native overflow menu that hides additional functionality. When paired with another icon, the overflow menu always appears to the right.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/controls-overflow-menu.svg",
    alt: "An app bar with an overflow menu.",
    width: 360
} %}

#### Custom icons

We allow up to two custom icons within our trailing controls; these are available only to provide additional functionality to the app header component.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/app-bar/ios/controls-custom-icons-1.svg",
      width: 360,
      alt: "An app bar containing leading and trailing custom icon buttons."
    } %}
    {% endcontentItem %}
    {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/app-bar/ios/controls-custom-icons-2.svg",
      width: 360,
      alt: "An app bar containing one leading and two trailing custom icon buttons."
    } %}
    {% endcontentItem %}
{% endcontentLayout %}

#### Dual icons

iOS 26 allows for a *dual style* of Liquid Glass button that combines two icon buttons into one Liquid Glass container.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/controls-dual-icons.svg",
    alt: "An app bar containing two trailing icon buttons in a Liquid Glass style container.",
    width: 360
} %}

---

## Placement

The header always sits flush to the top of the screen, and over the page content.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/placement.svg",
    alt: "A diagram showing the header flush with the top of the screen.",
    width: 360
} %}

---

## Content

### Titles

Titles should be used as default; they should always be clear, succinct, and provide the relevant content to aid a user's navigation of the app.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/content-titles.svg",
    alt: "An app bar with a succinct title.",
    width: 360
} %}

### Overflow text

Text should not go over one line. If it does, the text will truncate — you should avoid this happening by keeping text succinct and testing any translations across devices. Use alternative titles if translations are too long.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/content-overflow-text-1.svg",
    alt: "An app bar with a long title and secondary text that truncates.",
    width: 360
} %}

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/content-overflow-text-2.svg",
    alt: "An app bar with a long title and secondary text that truncates.",
    width: 360
} %}

### Search

If placeholder text exceeds the length of the search input container, it will truncate. Please avoid this by keeping placeholder text succinct and by testing placeholder text translations.

String variants should never have overflow solutions. See Behaviours for when a user types a string of text that is longer than the search bar container.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/search.svg",
    alt: "An app bar with a search input field containing a long truncated search string.",
    width: 360
} %}

---

## Behaviours

### Modal

Modal is a native iOS navigation pattern that is characterised by a focused workflow appearing from the bottom of the screen, pushing the original view further back.

For more information and animated examples of iOS navigation patterns, please see [PIE's Mobile Design System Playbook](https://docs.google.com/presentation/d/1VY3K6aUHG2tX-EptRe-1Nc6iZoIvl1CB08uv14-QBrI/edit?usp=sharing).

Use modal patterns when you need to show a multi-step workflow or full-screen task. Modals activate from a clicked element in the default view. Leading icons can be used to navigate and dismiss a modal view. You can also dismiss modals by completing the action or task.

{% notification {
  type: "warning",
  message: "Not to be confused with our Modal (Alert) component."
} %}

{% notification {
  type: "information",
  message: "Illustrative example only — not a PIE component."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/behaviours-modal.svg",
    alt: "An example of a native iOS modal.",
    width: 360
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use modals for multi-step workflows, full-screen tasks, complex or prolonged flows."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Do not use modals for small, focussed tasks that closely relate to a specific element — use an iOS bottom sheet instead."
        ]
    }
} %}

### Scrolling

When scrolling through the page content, the header remains sticky at the top of the screen. The background variant is allowed to follow native patterns and use a background blur and opacity.

{% notification {
  type: "information",
  message: "Currently only documented for engineering purposes - follows native iOS behaviours."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/scrolling-1.svg",
    alt: "A transparent app bar with scrolling content visible underneath.",
    width: 360
} %}

We also allow app bar headers with prominent text to change to non-prominent text upon scrolling, to allow for more space on the screen.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/scrolling-2.svg",
    alt: "Before and after scrolling showing the change from a prominent to a non-prominent app bar.",
    width: 360
} %}

### Search bar

When typing, a text cursor (not visible in design) indicates where text will be placed when entered.

If the user inputs a string of text longer than the container, the search input will scroll automatically so the user will continue to see what they are typing.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/search-bar.svg",
    alt: "An app bar with a search input field showing how a long string of text will automatically scroll across when typing.",
    width: 360
} %}

### Overflow menu

Use the native iOS menu component to provide an overflow menu solution. The overflow menu can be activated using the overflow menu icon provided in the trailing controls.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/overflow-menu.svg",
    alt: "An app bar with an overflow menu revealing more options.",
    width: 360
} %}

## Interactions

### Touch targets

Defines the touch targets of interactive elements across variants.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/interactions-touch-targets.svg",
    alt: "Anatomy of touch target interactions.",
    width: 360
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Navigation:** Navigates to the previous screen, closes a modal stack, or opens a menu.",
        "**Select:** Allows for selections within the screen.",
        "**Clear:** Clears a search query."
    ]
} %}

---

## Examples

### LTR examples

Here are some examples of the App header in a left-to-right context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/app-bar/ios/ltr-1.svg",
      width: 375,
      alt: "An app bar with a non-prominent header in left to right context."
    } %}
    {% endcontentItem %}
    {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/app-bar/ios/ltr-2.svg",
      width: 375,
      alt: "An app bar with a prominent header in left to right context."
    } %}
    {% endcontentItem %}
{% endcontentLayout %}

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/ltr-3.svg",
    alt: "An app bar with a search box in left to right context.",
    width: 360
} %}

### RTL examples

Here are some examples of the App header in a right-to-left context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/app-bar/ios/rtl-1.svg",
      width: 375,
      alt: "An app bar with a non-prominent header in right to left context."
    } %}
    {% endcontentItem %}
    {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/app-bar/ios/rtl-2.svg",
      width: 375,
      alt: "An app bar with a prominent header in right to left context."
    } %}
    {% endcontentItem %}
{% endcontentLayout %}

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/ios/rtl-3.svg",
    alt: "An app bar with a search box in right to left context.",
    width: 360
} %}