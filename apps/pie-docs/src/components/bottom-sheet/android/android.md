---
eleventyNavigation:
    key: Android
    parent: Bottom Sheet
    order: 2
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use bottom sheets when you need to display additional information, controls or functionalities related to the underlying content.",
            "Use where the user needs to perform one specific task.",
            "Use an overlay scrim in between the two layers of content."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use bottom sheets in wide screens (over 768px wide). Use a modal box instead.",
            "Avoid stacking a bottom sheet on top of another as this can create usability issues and confusion in a user flow. Check the [Overlay patterns](https://www.pie.design/patterns/overlay-patterns/) guidelines for alternatives.",
            "Don’t use them for multi-step flows. Use a full screen sheet instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/anatomy.svg",
    alt: "Anatomy of the bottom sheet component for android.",
    width: 126
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Header:** Area where the title of the bottom sheet is displayed, along with its control method.",
        "**Content:** Flexible area which can contain a wide range of contents and layouts.",
        "**Footer (Optional):** Contains the different actions you can perform with this bottom sheet.",
        "**Icon (Optional):** Visually highlights the nature of the contents in the bottom sheet.",
        "**Title (Optional):** Sums up the contents of the bottom sheet in one category.",
        "**Pull tab (Optional):** Allows the user to hide the bottom sheet.",
        "**Slot (Optional):** Nested component which will be replaced by the actual Bottom Sheet content.",
        "**Primary CTA (Optional):** Allows the user to perform an action.",
        "**Secondary CTA (Optional):** Allows the user to perform an action.",
        "**Image/Illustration CTA (Optional):** Used to display an image or illustration as the head of the bottom sheet."
    ]
} %}

---

## Variants

Variants are just indicative templates of the type of content a bottom sheet can hold. For custom bottom sheets check the ‘Custom bottom sheets’ section.

### Default

This is the default variation of the Bottom Sheet, which features a nested Slot component which can be replaced by local component containing the Bottom Sheet’s contents.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/variant-default.svg",
    alt: "A default Android bottom sheet with a header, content and footer.",
    width: 30
} %}

---

## Modifiers
 
{% notification { 
  type: "warning",
  message: "Don’t detach the header and footer nested components. Make sure you don’t detach the .bottom_sheet-header and .bottom_sheet-footer components, as these are nested components within the main Bottom Sheet component that need to be controlled globally. If you need to customise these, please get in touch with a member of the PIE Design System team."
} %}

### General modifiers

#### Footer toggle

The footer can be toggled off for instances where there isn’t a need for button actions.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/modifier-footer-toggle.svg",
    alt: "A bottom sheet with the footer toggled off.",
    width: 30
} %}

### Header specific modifiers

#### Controls

Controls define how the user can interact with the bottom sheet itself. There are two control variants available: Pull tab or None.

##### Pull tab

The user can close the Bottom Sheet by dragging the pull tab down. The user can expand the Bottom Sheet by dragging the pull tab up.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/modifier-controls-pull-tab.svg",
    alt: "A bottom sheet with a pull tab.",
    width: 30
} %}

##### None

The user can’t close or hide the bottom sheet.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/modifier-controls-none.svg",
    alt: "A bottom sheet with no controls.",
    width: 30
} %}

---

## Contents

Indicates the type of content displayed in the header area. There are four variants:

### Header 

#### Default

Text only header, which can include a title, an icon and a close/pull tab control.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/contents-default.svg",
    alt: "A bottom sheet with a default header with a title, icon and close/pull tab control.",
    width: 30
} %}

#### Empty

This instance will only show the selected control, removing any title, icon, image or illustration.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/contents-empty.svg",
    alt: "A bottom sheet with an empty header showing only the pull tab.",
    width: 30
} %}

#### Image

This header variation can be used to display an image.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/contents-image.svg",
    alt: "A bottom sheet with an image header.",
    width: 30
} %}

#### Small illustration 

This header variation can be used to display small illustrations only. They display at 120x120dp.

{% notification {
  type: "information",
  message: "You can change the colour of the illustration background to any of our brand colours, or remove it entirely."
} %}

{% notification {
  type: "warning",
  message: "**Use small illustrations only.** If you need to use large illustrations, use the large illustration property instead."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/contents-small-illustration.svg",
    alt: "A bottom sheet with a small illustration header.",
    width: 30
} %}

#### Large illustration 

This header variation can be used to display large illustrations only. They display at 180x180dp.

{% notification {
  type: "information",
  message: "You can change the colour of the illustration background to any of our brand colours, or remove it entirely."
} %}

{% notification {
  type: "warning",
  message: "**Use large illustrations only.** If you need to use small illustrations, use the small illustration property instead."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/contents-large-illustration.svg",
    alt: "A bottom sheet with a large illustration header.",
    width: 30
} %}

#### Header slot

This variation allows you to display any custom content within the header area. It spans the full width of the bottom sheet header. It’s especially useful for designs with full-width background elements.

{% notification {
  type: "information",
  message: "When using this variant with a pull tab, ensure your content has sufficient top margin to prevent it from overlapping with the pull tab."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/contents-header-slot.svg",
    alt: "A bottom sheet with a header slot.",
    width: 30
} %}

#### Header slot - with margin

This variation also supports custom content for the header, but it includes side margins, ensuring the content aligns with the standard layout.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/contents-header-slot-with-margin.svg",
    alt: "A bottom sheet with a header slot with margin.",
    width: 30
} %}

#### Hidden images on landscape mode

On landscape mode the visual property is disabled by default. Ensuring users can easily view and scroll through content.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/contents-landscape-mode-android.svg",
    alt: "A bottom sheet with hidden images on landscape mode.",
    width: 30
} %}

#### Title

There are several modifiers which have an effect on the way the title is displayed. This instance only shows the title.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/contents-title.svg",
    alt: "A bottom sheet with a title header.",
    width: 30
} %}

#### Title + icon

This instance shows the title paired with an icon to provide more context and visual flair.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/contents-title-and-icon.svg",
    alt: "A bottom sheet with a title and icon header.",
    width: 30
} %}

#### None

This modification hides the title. It should be used only when the title is not necessary.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/contents-none.svg",
    alt: "A bottom sheet with no content in the header.",
    width: 30
} %}

### Footer specific modifiers

#### Footer actions

Bottom sheets will often include actions that can be performed by the user to resolve, dismiss or acknowledge the information presented in the bottom sheet. However, these actions should be kept to a minimum. We offer the following two variants:

#### Two actions

Use it when you need to offer both a primary and secondary action. Usually these represent the main action of the Bottom Sheet (e.g. ‘Acknowledge’) and an alternative action (e.g. ‘Dismiss’).

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/footer-two-actions.svg",
    alt: "A bottom sheet with two action buttons in the footer.",
    width: 30
} %}

#### One action

Use it when you only have one action within your Bottom Sheet.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/footer-one-action.svg",
    alt: "A bottom sheet with one action button in the footer.",
    width: 30
} %}

#### Stacked buttons

Used for an alternative layout, mainly when button labels are too long.


{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/footer-stacked-buttons.svg",
    alt: "A bottom sheet with stacked action buttons in the footer.",
    width: 30
} %}

---

## Fixed elements

Sometimes the content inside our Bottom Sheets will be longer than the space available in our viewport. In these instances content might have to be scrolled so it can be read entirely by the user. The following section outlines the behaviours of the Bottom Sheet’s header and footer when there is an overflow of content.

### Scrolled header

In Bottom Sheets where content needs to be scrolled, the header should lay on top of the scrolled content. To visually indicate this, an elevation token ($elevation-04) has been applied to the ‘Scrolled’ variant of this nested component.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/fixed-header.svg",
    alt: "A bottom sheet with a fixed header.",
    width: 30
} %}

### Fixed footer

Used when the content inside the bottom sheet is longer than the total height of the screen, but the actions that can be performed in the Bottom Sheet need to be visible at all times. To visually indicate this, an elevation token ($elevation-05) has been applied to the ‘Fixed’ variant of this nested component.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/fixed-footer.svg",
    alt: "A bottom sheet with a fixed footer.",
    width: 30
} %}

---

// I'm intentionally not adding images to the slot section as the content of the slot can be very flexible and variable. This documentation might change soon due to Figma's update on slot in Q1 2026.
## Slot (nested component)

Our Bottom Sheets use nested Slots which help us make the component flexible without the need to detach it from it’s original instance. If you want to learn more about slots and how to use them, please check the [Slots documentation](https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/-Core--Apps-Component-Documentation--PIE-3-?node-id=29-31).

---

## Content

A bottom sheet causes all content and UI elements behind it to display a scrim. Tapping the scrim dismisses both the bottom sheet and scrim from view.
The contents of the bottom sheet can be customised by detaching the instance. For more information on how to create custom bottom sheets check the ‘Custom bottom sheets’ section.

### Overrides

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/content-overrides.svg",
    alt: "A bottom sheet with content overrides for action buttons in the footer.",
    width: 30
} %}

---

## Overflow

To provide access to its top actions, the initial vertical position of bottom sheets should be capped at 50% of the screen height. Bottom sheets whose contents exceed 50% of the screen height can then be pulled up across the full screen, scrolling internally to access their remaining items.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/overflow-half-screen.svg",
    alt: "A bottom sheet with content taking half the screen.",
    width: 30
} %}

Content from a bottom sheet that initially appears below the screen edge becomes visible when you drag the sheet into view.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/overflow-full-screen.svg",
    alt: "A bottom sheet with content taking the full screen.",
    width: 30
} %}

Once the bottom sheet has been scrolled up and the header has reached the top of the screen, the header will become fixed to the top so that Bottom Sheets can continue to be closed comfortably.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/overflow-full-screen-fixed-header.svg",
    alt: "A bottom sheet with a fixed header and scrollable content.",
    width: 30
} %}

---

## Accessible text scalling

### Text wrap

When a user activates the accessible text scaling options on their device, all text in the BottomSheet component and slot content scales. Text should wrap into a new line if needed within the container to accommodate the new text size. 

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/accessibility-text-wrap.svg",
    alt: "A bottom sheet containing several UI elements with text wrapping into a new line when text scaling is activated.",
    width: 30
} %}

### Buttons alignment

Text scaling can impact button alignment. If horizontal alignment was chosen and text scaling causes button labels to exceed the available space, the buttons will automatically shift to a vertical stack. Avoid button labels wrapping where possible.

**Do:** Test designs with text scaling to ensure that content remains legible and functional at larger sizes. Change the button alignment to vertical stack if needed to accommodate larger text sizes.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/accessibility-example-do.svg",
    alt: "A bottom sheet with buttons aligned vertically to accommodate larger text sizes.",
    width: 30
} %}

**Don't:** Avoid button labels wrapping where possible. 

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/accessibility-example-dont.svg",
    alt: "A bottom sheet with buttons aligned horizontally, causing text to wrap when text scaling is activated.",
    width: 30
} %}

---

## Examples

### LTR example

Here are some examples of Bottom Sheet in LTR context:

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/example-ltr.svg",
    alt: "An example of a bottom sheet in LTR context.",
    width: 30
} %}

### RTL example

Here are some examples of Bottom Sheet in RTL context:

{% contentPageImage {
    src:"../../../assets/img/components/bottom-sheet/example-rtl.svg",
    alt: "An example of a bottom sheet in RTL context.",
    width: 30
} %}

