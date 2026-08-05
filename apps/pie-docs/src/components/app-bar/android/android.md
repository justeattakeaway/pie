---
eleventyNavigation:
  key: Android
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
            "Use native Android scrolling behaviours."      
        ]
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
    src:"../../../assets/img/components/app-bar/android/anatomy.svg",
    alt: "Anatomy of an app bar.",
    width: 834
} %}

{% list {
    type: listTypes.ordered,
    items: [
    "**Container:** Provides a filled or transparent background.",
    "**Android status bar [native]:** Native element that displays device current information.",
    "**Leading controls:** Option of three controls (back, menu, close) to aid user navigation.",
    "**Title (optional):** Provides an optional heading for the page content.",
    "**Divider (only on filled variants):** Separates header from content.",
    "**Trailing controls (only in title variants):** Provides optional overflow menu icon or choice of up to two custom icons to aid user navigation.",
    "**Search input (only on search variant):** Allows users to search product content; option of placeholder or search text."
    ]
} %}

---

## Variants

### Filled

A filled background provides a tokenised container for header content and titles, which should be used as default.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/variant-filled.svg",
    alt: "An app bar with a filled background.",
    width: 360
} %}

### Transparent

A transparent background allows the page background or image to be visible, allowing for more creative header solutions.  Inverse icon buttons are used in transparent background headers to ensure they are easily visible against any content beneath. 

If using the transparent header above a page background colour you may need to do additional checks to make sure the text is accessible. If using the transparent header above an image, please ensure titles are hidden.

We suggest setting a 50% opacity behind status bar content to make it more visible, as this is a system setting this is not controlled through PIE and must be actioned on the consumer side.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/variant-transparent.svg",
    alt: "An app bar with a transparent background.",
    width: 360
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/app-bar/android/variant-transparent-do.svg",
            width: "362px",
            alt: "An app bar with inverse icon buttons which are legible on a complex background."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/app-bar/android/variant-transparent-dont.svg",
            width: "362px",
            alt: "An app bar with text over a complex background making it different to read."
        }]
    }
} %}

----

## Modifiers

### Title

#### Regular

Use as default to provide screen navigation, we allow titles to be hidden for certain use cases but we must always have a title to ensure screen reading accessibility.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/title-regular.svg",
    alt: "An app bar with a regular title.",
    width: 360
} %}

#### Prominent

Use when you need to make a title more prominent.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/title-prominent.svg",
    alt: "An app bar with a prominent title.",
    width: 360
} %}

### Search

Can be used when you need to use high level search functionality. Use placeholder option to show placeholder text, use string to show when a user has entered a string of text.

Do not allow header search functionality if you’re using the prominent header, we only allow header search functionality to be accessed via the regular title variant. 

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/search-1.svg",
    alt: "An app bar with a search box that contains placeholder text.",
    width: 360
} %}

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/search-2.svg",
    alt: "An app bar with a search box that contains a search string.",
    width: 360
} %}

### Leading controls

We always use leading controls to assist with navigation. There are three options to choose from.

#### Back

Aligns with native behaviour, allowing users to navigate back to the screen before.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/controls-back.svg",
    alt: "An app bar with a back button.",
    width: 360
} %}

#### Close

Aligns with native behaviour, allowing users to close the application or view.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/controls-close.svg",
    alt: "An app bar with a close button.",
    width: 360
} %}

#### Menu

Allows users to open a side-sheet menu, used on tablet rather than mobile.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/controls-menu.svg",
    alt: "An app bar with a menu button.",
    width: 360
} %}

### Trailing controls

You can use up to two icons in the trailing controls to aid user navigation and provide additional functionality.

#### Overflow menu

Aligns with native behaviour, allowing users to open a native overflow menu that hides additional functionality. When paired with another icon the overflow menu always appears to the right.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/controls-overflow-menu.svg",
    alt: "An app bar with an overflow menu.",
    width: 360
} %}

#### Custom icons

We allow up to two custom icons within our trailing controls, these are available only to provide additional functionality to the app header component.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/app-bar/android/controls-custom-icons-1.svg",
      width: 360,
      alt: "An app bar containing leading and trailing custom icon buttons."
    } %}
    {% endcontentItem %}
    {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/app-bar/android/controls-custom-icons-2.svg",
      width: 360,
      alt: "An app bar containing one leading and two trailing custom icon buttons."
    } %}
    {% endcontentItem %}
{% endcontentLayout %}

---

## Placement

The header always sits flush to the top of the screen, and over the page content.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/placement.svg",
    alt: "A diagram showing the header flush with the top of the screen.",
    width: 360
} %}

---

## Content

### Titles

Titles should be used as default; they should always be clear, succinct, and provide the relevant content to aid a user's navigation of the app.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/content-titles.svg",
    alt: "An app bar with a succinct title.",
    width: 360
} %}

### Overflow

#### Titles

Titles should not go over one line of text. If they do the text will truncate - you should avoid this happening by  keeping text succinct and testing any translations across devices. Use alternative titles if translations are too long.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/content-overflow-text-1.svg",
    alt: "An app bar with a long title that truncates.",
    width: 360
} %}

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/content-overflow-text-2.svg",
    alt: "An app bar with a long title that truncates.",
    width: 360
} %}

### Search

If placeholder text exceeds the length of the search input container, it will truncate. Please avoid this by keeping placeholder text succinct and by testing placeholder text translations.

String variants should never have overflow solutions. See Behaviours for when a user types a string of text that is longer than the search bar container.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/search.svg",
    alt: "An app bar with a search input field containing a long truncated search string.",
    width: 360
} %}

---

## Behaviours

### Scrolling

When scrolling through the page content we only allow filled background variants to  remain sticky at the top of the screen, allow the content to scroll beneath.

We also allow app bar headers with prominent text to change to non-prominent text upon scrolling to allow for more space on the screen. 

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/scrolling.svg",
    alt: "Before and after scrolling showing the change from a prominent to a non-prominent app bar.",
    width: 360
} %}

### Search bar

When typing, a text cursor (not visible in design) indicates where text will be placed when entered.

If the user inputs a string of text longer than the container, the search input will scroll automatically so the user will continue to see what they are typing.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/search-bar.svg",
    alt: "An app bar with a search input field showing how a long string of text will automatically scroll across when typing.",
    width: 360
} %}

### Overflow menu

Use the native Android menu component to provide an overflow menu solution. The overflow menu can be activated using the overflow menu icon provided in the trailing controls.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/overflow-menu.svg",
    alt: "An app bar with an overflow menu revealing more options.",
    width: 360
} %}

---

## Interactions

### Touch targets

Defines the touch targets of interactive elements across variants.

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/interactions-touch-targets.svg",
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
      src: "../../../assets/img/components/app-bar/android/ltr-1.svg",
      width: 375,
      alt: "An app bar with a non-prominent header in left to right context."
    } %}
    {% endcontentItem %}
    {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/app-bar/android/ltr-2.svg",
      width: 375,
      alt: "An app bar with a prominent header in left to right context."
    } %}
    {% endcontentItem %}
{% endcontentLayout %}

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/ltr-3.svg",
    alt: "An app bar with a search box in left to right context.",
    width: 360
} %}

### RTL examples

Here are some examples of the App header in a right-to-left context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/app-bar/android/rtl-1.svg",
      width: 375,
      alt: "An app bar with a non-prominent header in right to left context."
    } %}
    {% endcontentItem %}
    {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/app-bar/android/rtl-2.svg",
      width: 375,
      alt: "An app bar with a prominent header in right to left context."
    } %}
    {% endcontentItem %}
{% endcontentLayout %}

{% contentPageImage {
    src:"../../../assets/img/components/app-bar/android/rtl-3.svg",
    alt: "An app bar with a search box in right to left context.",
    width: 360
} %}