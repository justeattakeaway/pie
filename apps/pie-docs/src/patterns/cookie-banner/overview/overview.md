---
eleventyNavigation:
    key: Overview
    parent: 'Cookie Banner'
    order: 1
shouldShowContents: true
---


## Anatomy

{% contentPageImage {
    src:"../../../assets/img/patterns/cookie-banner/anatomy-banner.svg",
    alt: "Anatomy of the Banner.",
    width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/anatomy-modal.svg",
alt: "Anatomy of the Modal.",
width: 120
} %}


{% list {
    type: listTypes.ordered,
    items: [
        "**Banner:** Contains the content.",
        "**Title:** Provides context to the Banner.",
        "**Body copy:** Provides supporting context to the user.",
        "**Call to actions:** Allow the user to proceed with multiple options.",
        "**Modal:** A closeable window that overlays a page.",
        "**Content:** Provides information for the user about the cookie preference options available.",
        "**“Save” button:**  Allows the user to save their preferences and continue with their flow.",
        "**Scrim:** Screen overlay that obscures the on-page content."
    ]
} %}

---

## Variations

### Banner

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/variations-banner.svg",
alt: "Cookie banner with copy about cookies and buttons to accept or manage preferences.",
width: 120
} %}

### Modal

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/variations-modal.svg",
alt: "Modal with options to authorise cookies.",
width: 120
} %}

___

## Modifiers

### Banner

#### Default

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/modifier-default.svg",
alt: "Default cookie banner, with Accept All as primary action only.",
width: 120
} %}

#### Primary actions only

This version is used when legal compliance in the country requires you to do so. In countries that do not require this, the default variation is used.

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/modifier-primary-actions.svg",
alt: "Cookie banner, with Accept All and Necessary Only as primary actions.",
width: 120
} %}

---

## Interaction area

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/interaction-area-banner.svg",
alt: "Banner with highlights on the areas of interaction: links and buttons.",
width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/interaction-area-modal.svg",
alt: "Modal with highlights on the areas of interaction: links and buttons.",
width: 120
} %}

{% list {
    type: listTypes.highlight,
    highlightColour: ["support-brand-03", "support-brand-04", "support-brand-07", "support-brand-05", "support-brand-06"],
    items: [
        "**Redirect:**  IRedirects the user to the page they have selected in a new tab, the cookie banner will continue to show until the user makes a selection.",
        "**Confirm selection:**  Saves the user's selection and closes the modal and cookie banner.",
        "**Opens a “Manage preferences” modal:**  A modal will open to allow the user to manage their preferences.",
        "**Toggle on/off:**  Allows the user to toggle selections on or off.",
        "**Back button:**  Closes the modal and shows the cookie banner again."
    ]
} %}

---

## Content

{% notification {
  type: "warning",
  iconName: "alert-triangle",
  message: "The ‘header’, ‘body copy’, and ‘button labels’ are set and should not be changed, unless you need to translate them into another language."
} %}

---

## Behaviours

### Background

#### Banner

The background page of the cookie banner isn’t disabled, and is only disabled once the modal is opened. The “Select your country” popover from the top navigation should sit on top of the banner so that the users can change the locale.

{% contentPageImage {
  src:"../../../assets/img/patterns/cookie-banner/behaviours-background-banner.svg",
  alt: "Banner possitioned at the bottom with the “Select your country” popover on top of the banner.",
  width: 120
} %}

#### Modal

The background page is disabled when the modal is opened until the user has made a selection and is ready to continue with their flow, or returns to the banner. A scrim is applied and the banner disappears.

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/behaviours-background-modal.svg",
alt: "Cookie modal that positioned in the middle of the screen, on top of a dark overlay.",
width: 120
} %}

#### Turn all on / off

Once the overarching toggle is toggled on/off, the child toggles follow suit. The overarching toggle will not be toggled on unless all child toggles are selected.

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/behaviours-turn-all-on-off.svg",
alt: "Modal showing the toggles states when \"Toggle All\" is or is not selected.",
width: 120
} %}


---

## Positioning

### Banner

The cookie banner is always positioned at the bottom of the screen with default bottom, left and right padding of 16px from the container of the banner.

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/positioning-banner.svg",
alt: "Image of a frame with the banner positioned at the bottom.",
width: 120
} %}

### Modal

The modal is positioned in the centre of the screen with a scrim applied.

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/positioning-modal.svg",
alt: "Image of a frame with the modal positioned in the middle of the screen.",
width: 120
} %}

---

## Responsive design

### Narrow

At the narrow breakpoints, the banner has a maximum height of 432px, and the modal is set to full screen. If the content overflows due to a change in language, the available height, the call to action buttons and header become sticky and the body content scrolls.

#### Banner

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/responsive-banner.svg",
alt: "Responsive banner as it looks on mobile views showcasing a scroll bar for the content.",
width: 120
} %}

#### Modal

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/responsive-banner.svg",
alt: "Responsive modal as it looks on mobile views showcasing a scroll bar for the options and content.",
width: 120
} %}

---

## Right to left languages

For languages that read right to left, the layout and alignment of the content is reorganised so the readability of the component makes logical sense.

### Wide

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/rtl-banner.svg",
alt: "Banner displaying right to left content.",
width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/rtl-modal.svg",
alt: "Modal displaying right to left content.",
width: 120
} %}

### Narrow

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/rtl-narrow-banner.svg",
alt: "Responsive banner displaying right to left content.",
width: 120
} %}

{% contentPageImage {
src:"../../../assets/img/patterns/cookie-banner/rtl-narrow-modal.svg",
alt: "Responsive modal displaying right to left content.",
width: 120
} %}


___

## Resources

{% resourceTable {
componentName: 'Cookie Banner'
} %}
