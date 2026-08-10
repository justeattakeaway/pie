---
eleventyNavigation:
    key: Web
    parent: Bottom Sheet
    order: 2
shouldShowContents: true
---

## Do's and don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use bottom sheets when you need to display additional information, controls or functionalities related to the underlying content."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use bottom sheets in wide screens (over 768px wide). Use a modal instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/anatomy.svg",
    alt: "A bottom sheet anatomy.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Header:** Area where the title of the bottom sheet is displayed along with its control method.",
        "**Content:** Flexible area which can contain a wide range of contents and layouts.",
        "**Footer** (optional): Contains the different actions you can perform with this bottom sheet.",
        "**Icon** (optional): Visually highlights the nature of the contents in the bottom sheet.",
        "**Title** (optional): Sums up the contents of the bottom sheet in one category.",
        "**Pull tab** (optional): Allows the user to hide the bottom sheet.",
        "**Slot** (optional): Nested component which will be replaced by the actual Bottom Sheet content.",
        "**Primary CTA** (optional): Allows the user to perform an action.",
        "**Secondary CTA** (optional): Allows the user to perform an action.",
        "**Image/Illustration** (optional): Used to display an image or illustration as the head of the bottom sheet.",
        "**Close button** (optional): Allows the user to close the bottom sheet."
    ]
} %}

---

## Variants

Variants are just indicative templates of the type of content a bottom sheet can hold. For custom bottom sheets check the 'Custom bottom sheets' section.

### Default

This is the default variation of the Bottom Sheet, which features a nested Slot component which can be replaced by a local component containing the Bottom Sheet's contents.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/variants-default.svg",
    alt: "A default bottom sheet with a header, scrollable content slot, and footer containing two action buttons.",
    width: "200"
} %}

---

## Modifiers

Variants are just indicative templates of the type of content a bottom sheet can hold. For custom bottom sheets check the 'Custom bottom sheets' section.

{% notification {
    type: "warning",
    message: "**Don't detach the header and footer nested components.** Make sure you don't detach the `.bottom_sheet-header` and `.bottom_sheet-footer` components, as these are nested components within the main Bottom Sheet component that need to be controlled globally. If you need to customise these, please get in touch with a member of the PIE Design System team."
} %}

### General modifiers

#### Footer toggle

The footer can be toggled off for instances where there isn't a need for button actions.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-general.svg",
    alt: "Two bottom sheets side by side: one with a footer containing action buttons, and one with the footer toggled off.",
    width: "200"
} %}

### Header specific modifiers

#### Controls

Controls define how the user can interact with the bottom sheet itself. There are three control variants available: Close, Pull tab or None.

##### Close

The user can close the bottom sheet.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-header-close.svg",
    alt: "A bottom sheet header with a close button (×) displayed in the top-right corner.",
    width: "200"
} %}

##### Pull tab

The user can hide the bottom sheet.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-header-pull-tab.svg",
    alt: "A bottom sheet header with a pull tab handle displayed at the top centre, allowing the user to drag the sheet down to hide it.",
    width: "200"
} %}

##### None

The user can't close or hide the bottom sheet.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-header-none.svg",
    alt: "A bottom sheet header with no close button or pull tab, leaving the header area with only the title.",
    width: "200"
} %}

#### Contents

Indicates the type of content displayed in the header area. There are four variants:

##### Default

Text only header, which can include a title, an icon and a close/pull tab control.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-header-default.svg",
    alt: "A bottom sheet with a text-only header showing a title and a close button.",
    width: "200"
} %}

##### Image

This header variation can be used to display an image.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/contents-header-image.svg",
    alt: "A bottom sheet with an image displayed in the header area at the top of the sheet.",
    width: "200"
} %}

##### Small illustration

This header variation can be used to display small illustrations only. They display at 120x120dp.

{% notification {
    type: "information",
    message: "You can change the colour of the illustration background to any of our brand colours, or remove it entirely."
} %}

{% notification {
    type: "warning",
    message: "Use small illustrations only. If you need to use large illustrations, use the large illustration property instead."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-header-small-illustration.svg",
    alt: "A bottom sheet with a small 120×120dp illustration displayed in a coloured circular background in the header area.",
    width: "200"
} %}

##### Large illustration

This header variation can be used to display large illustrations only. They display at 180x180dp.

{% notification {
    type: "information",
    message: "Use large illustrations only. If you need to use small illustrations, use the small illustration property instead."
} %}

{% notification {
    type: "warning",
    message: "We only specify the types of trailing content in design. In development, however, trailing content is simply free-form text."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-header-large-illustration.svg",
    alt: "A bottom sheet with a large 180×180dp illustration displayed prominently in the header area.",
    width: "200"
} %}

##### Empty

This instance will only show the selected control, removing any title, icon, image or illustration.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-header-empty.svg",
    alt: "A bottom sheet with an empty header showing only the close button and no title, icon, or imagery.",
    width: "200"
} %}

#### Title

There are several modifiers which have an effect on the way the title is displayed:

##### Title

This instance only shows the title.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-title.svg",
    alt: "A bottom sheet header displaying a title text without any accompanying icon.",
    width: "200"
} %}

##### Title + Icon

This instance shows the title paired with an icon to provide more context and visual flair.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-title-icon.svg",
    alt: "A bottom sheet header displaying a title text alongside a small icon to the left for additional visual context.",
    width: "200"
} %}

##### None

This modification hides the title. It should be used only when the title is not necessary.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-title-none.svg",
    alt: "A bottom sheet header with no title displayed, showing only the control element.",
    width: "200"
} %}

### Footer specific modifiers

#### Footer actions

Bottom sheets will often include actions that can be performed by the user to resolve, dismiss or acknowledge the information presented in the bottom sheet. However, these actions should be kept to a minimum. We offer the following two variants:

##### Two actions

Use it when you need to offer both a primary and secondary action. Usually these represent the main action of the Bottom Sheet (e.g. 'Acknowledge') and an alternative action (e.g. 'Dismiss').

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-footer-two-actions.svg",
    alt: "A bottom sheet footer containing two side-by-side buttons: a primary action button and a secondary action button.",
    width: "200"
} %}

##### One action

Use it when you only have one action within your Bottom Sheet.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-footer-one-action.svg",
    alt: "A bottom sheet footer containing a single primary action button.",
    width: "200"
} %}

##### Full width buttons

Used for an alternative layout, mainly when button labels are too long.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-footer-actions-full-width.svg",
    alt: "A bottom sheet footer with two stacked full-width buttons, used when button labels are too long to fit side by side.",
    width: "200"
} %}

---

## Fixed elements

Sometimes the content inside our Bottom Sheets will be longer than the space available in our viewport. In these instances content might have to be scrolled so it can be read entirely by the user. The following section outlines the behaviours of the Bottom Sheet's header and footer when there is an overflow of content.

### Scrolled header

In Bottom Sheets where content needs to be scrolled, the header should lay on top of the scrolled content. To visually indicate this, an elevation token (`$elevation-04`) has been applied to the 'Scrolled' variant of this nested component.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-fixed-header.svg",
    alt: "A bottom sheet showing a fixed header with an elevation shadow applied as content scrolls beneath it.",
    width: "200"
} %}

### Fixed footer

Used when the content inside the bottom sheet is longer than the total height of the screen, but the actions that can be performed in the Bottom Sheet need to be visible at all times. To visually indicate this, an elevation token (`$elevation-05`) has been applied to the 'Fixed' variant of this nested component.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/modifiers-fixed-footer.svg",
    alt: "A bottom sheet showing a fixed footer with an elevation shadow, remaining visible while long content scrolls above it.",
    width: "200"
} %}

---

## Content

- A bottom sheet causes all content and UI elements behind it to display a scrim. Tapping the scrim dismisses both the bottom sheet and scrim from view.
- The contents of the bottom sheet can be customised by using the Figma slot.

{% notification {
    type: "information",
    message: "Find out more about using the slot in the [Figma slot guide](designers/getting-started/best-practices/#use-figma-slots)."
} %}

### Overrides

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/content-overrides.svg",
    alt: "A bottom sheet highlighting the actions buttons that are open for overrides.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Buttons:** The Button's size can be decreased, and their variant can be changed. But all changes must adhere to the button pair guidelines if they are kept as a pair, including the size of both buttons remaining consistent."
    ]
} %}

---

## Overflow

To provide access to its top actions, the initial vertical position of bottom sheets should be capped at 50% of the screen height. Bottom sheets whose contents exceed 50% of the screen height can then be pulled up across the full screen, scrolling internally to access their remaining items.

{% notification {
    type: "information",
    message: "Please note that the 50% sizing rule is just an orientation. If you think that the fact it takes 50% of the screen might be detrimental for the experience, you can set the size to an initial size which you think is appropriate."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/overflow-example-1.svg",
    alt: "A bottom sheet initially displayed at 50% of the screen height with content partially hidden below the fold.",
    width: "200"
} %}

Content from a bottom sheet that initially appears below the screen edge becomes visible when you drag the sheet into view.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/overflow-example-2.svg",
    alt: "A bottom sheet being dragged upward by the user, revealing more content as the sheet expands towards full screen.",
    width: "200"
} %}

Once the bottom sheet has been scrolled up and the header has reached the top of the screen, the header will become fixed to the top so that Bottom Sheets can continue to be closed comfortably.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/overflow-example-3.svg",
    alt: "A bottom sheet fully expanded to full screen height with the header fixed at the top and content scrolling internally.",
    width: "200"
} %}

---

## RTL Example

Here are some examples of Bottom Sheet in RTL context:

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/web/example-rtl.svg",
    alt: "A bottom sheet displayed in a right-to-left layout, with the close button and title mirrored accordingly.",
    width: "200"
} %}
