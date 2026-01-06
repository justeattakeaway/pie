---
eleventyNavigation:
    key: Overview
    parent: Modal
    order: 1
eleventyComputed:
    sizes: "{% include './sizes.json' %}"
shouldShowContents: true,
permalink: components/modal/
---


## Overview
The purpose of modals is to focus the user's attention on a specific task, message, or interaction, and to prevent interaction with other elements on the page while the Modal is active.

Modals are commonly used for tasks such as displaying notifications, presenting detailed information, requesting user input, or confirming critical actions.

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview.svg",
    alt: "A Modal containing a heading, a body slot, and a button placed on the bottom right corner."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use dialogs in the neutral-alternative variant to display critical information and display urgent messages.",
            "Choose variants in brand colours for promotional and non-critical content.",
            "Use dialogs to drive user input or prompt for decisions.",
            "Use dialogs for confirmations for important actions.",
            "All content meets AA accessibility standards and is read by assistive technologies."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't allow excessive content length. Modals are for focused tasks, so a different component might be more suitable.",
            "Don't use dialogs for minor notifications.",
            "Limit and avoid excessive interruptions.",
            "Don’t add crucial information to images."
        ]
    }
} %}


---

## Anatomy

{% contentPageImage {
    src: "../../../assets/img/components/modal/anatomy.svg",
    alt: "Anatomy of a Modal.",
    shouldShowPadding: true
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Header (optional):** Adds content to the header. Choose from illustration or imagery.",
        "**Back (optional):** The chevron icon button allows the user to return back a stage in a multi-step modal.",
        "**Title:** Gives the users an overview of the content.",
        "**Close:** The close icon button will close the modal without submitting any data.",
        "**Main content:** Text input or open slot for any content required",
        "**CTAs (optional):** Single or dual call to action buttons to outline the user’s next options.",
        "**Checkbox (optional):** Confirmation checkbox for the primary button.",
        "**Footer content (optional):** Text can be added to the footer below actions.",
        "**Overlay:** Screen overlay that obscures the on-page content."
    ]
} %}

---
## Variants

### Colours

#### Neutral - alternative

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-neutral-alternative.svg",
    alt: "Neutral variation of modal.",
    width: 600
} %}

#### 01 Orange

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-01-orange.svg",
    alt: "01 Orange variation of modal.",
    width: 600
} %}

#### 02 Orange

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-02-orange.svg",
    alt: "02 Orange variation of modal.",
    width: 600
} %}

#### 03 Cupcake

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-03-cupcake.svg",
    alt: "03 Cupcake variation of modal.",
    width: 600
} %}

#### 03 Cupcake subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-03-cupcake-subtle.svg",
    alt: "03 Cupcake subtle variation of modal.",
    width: 600
} %}

#### 04 Berry

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-04-berry.svg",
    alt: "04 Berry variation of modal.",
    width: 600
} %}

#### 04 Berry subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-04-berry-subtle.svg",
    alt: "04 Berry subtle variation of modal.",
    width: 600
} %}

#### 05 Turmeric

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-05-turmeric.svg",
    alt: "05 Turmeric variation of modal.",
    width: 600
} %}

#### 05 Turmeric subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-05-turmeric-subtle.svg",
    alt: "05 Turmeric subtle variation of modal.",
    width: 600
} %}

#### 06 Aubergine

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-06-aubergine.svg",
    alt: "06 Aubergine variation of modal.",
    width: 600
} %}

#### 06 Aubergine subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-06-aubergine-subtle.svg",
    alt: "06 Aubergine subtle variation of modal.",
    width: 600
} %}

#### 08 Latte

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-08-latte.svg",
    alt: "08 Latte variation of modal.",
    width: 600
} %}

#### 08 Latte subtle

{% contentPageImage {
    src: "../../../assets/img/components/modal/variants-08-latte-subtle.svg",
    alt: "08 Latte subtle variation of modal.",
    width: 600
} %}

---

## Modifiers

### Header

#### Back

If a multi-step Modal is required, from steps two onwards a back Icon Button is displayed allowing the user to move back to the preview view.

{% contentPageImage {
    src: "../../../assets/img/components/modal/modifier-header-back.svg",
    alt: "A Modal with a back icon button in the header.",
    width: 600
} %}

#### Close

Use this Header modifier when the Modal can be dismissed.

{% contentPageImage {
    src: "../../../assets/img/components/modal/modifier-header-close.svg",
    alt: "A Modal with a close icon button in the header.",
    width: 600
} %}

#### Header Content

Header may include an illustration or an image.

{% contentLayout %}
  {% contentPageImage {
      src: "../../../assets/img/components/modal/modifier-header-content-illustration.svg",
      alt: "A Modal with an image in \"illustration\" mode in the header.",
      width: 478
  } %}
  {% contentPageImage {
    src: "../../../assets/img/components/modal/modifier-header-content-image.svg",
    alt: "A Modal with an image in \"image\" mode in the header.",
    width: 478
  } %}
{% endcontentLayout %}

### Body

#### Body content

The body can be toggled on and off and may include text or an open slot to add in a specified design.

{% contentLayout %}
  {% contentPageImage {
      src: "../../../assets/img/components/modal/modifier-body-content-slot.svg",
      alt: "A Modal displaying an empty slot.",
      width: 478
  } %}
  {% contentPageImage {
    src: "../../../assets/img/components/modal/modifier-body-content-text.svg",
    alt: "A Modal displaying text content.",
    width: 478
  } %}
{% endcontentLayout %}

### Footer

#### Footer content

The footer may include buttons stacked or side-by-side buttons, with the option of adding footer content in the form of either a text input or a slot to add specified content.

{% notification {
  type: "warning",
  message: "Stacked button option will only available for narrow modal components."
} %}

{% contentLayout %}
  {% contentPageImage {
      src: "../../../assets/img/components/modal/modifier-footer-content-none.svg",
      alt: "A Modal without content assigned to its footer slot.",
      width: 316
  } %}
  {% contentPageImage {
    src: "../../../assets/img/components/modal/modifier-footer-content-text.svg",
    alt: "A Modal with text content assigned to its footer slot.",
    width: 316
  } %}
  {% contentPageImage {
      src: "../../../assets/img/components/modal/modifier-footer-content-slot.svg",
      alt: "A Modal displaying an empty footer slot.",
      width: 316
  } %}
{% endcontentLayout %}

### Emphasis

#### Emphasis through colour

Depending on the level of visual prominence you want to give to the Modal, you can choose between strong or subtle emphasis.

{% contentLayout %}
  {% contentPageImage {
      src: "../../../assets/img/components/modal/modifier-emphasis-color-aubergine-subtle.svg",
      alt: "A Modal using the aubergine subtle variant.",
      width: 478
  } %}
  {% contentPageImage {
    src: "../../../assets/img/components/modal/modifier-emphasis-color-aubergine.svg",
    alt: "A Modal using the aubergine variant.",
    width: 478
  } %}
{% endcontentLayout %}

#### Text

The title can be changed to italic for more prominence.

{% contentLayout %}
  {% contentPageImage {
    src: "../../../assets/img/components/modal/modifier-emphasis-title-regular.svg",
    alt: "A Modal with the title in italic style.",
    width: 478
  } %}
  {% contentPageImage {
      src: "../../../assets/img/components/modal/modifier-emphasis-title-prominent.svg",
      alt: "A Modal with the standard title style.",
      width: 478
  } %}
{% endcontentLayout %}

### Footer

You can replace the footer Buttons with any Button or Button pair defined within the Button guidance.

#### Dual actions

A maximum of two Buttons are allowed within the Modal’s footer, with the primary Button right aligned and the lower emphasis Button on the left.

{% contentPageImage {
    src: "../../../assets/img/components/modal/modifier-footer-double.svg",
    alt: "A Modal with dual buttons",
    width: 600
} %}

#### Single

A single Button variant is available when only one action is required.

{% contentPageImage {
    src: "../../../assets/img/components/modal/modifier-footer-single.svg",
    alt: "A Modal with a single primary button in its footer.",
    width: 600
} %}

#### Checkbox confirmation

The checkbox control means users must select and acknowledge the required information before proceeding. The primary button remains disabled until the checkbox is checked.

{% notification {
  type: "warning",
  message: "It's recommended to use this only on medium and large modals. In narrow modals, it should be used only when buttons are stacked to ensure the checkbox label has enough space."
} %}

{% contentPageImage {
    src: "../../../assets/img/components/modal/modifier-footer-checkbox-confirmation.svg",
    alt: "A Modal with a checkbox confirmation.",
    width: 600
} %}

#### Passive

You can use the Passive modifier for the footer in instances where the user doesn't need to take an action. This will remove the buttons at the bottom of the Modal.

{% contentPageImage {
    src: "../../../assets/img/components/modal/modifier-footer-passive.svg",
    alt: "A Modal with a pair of primary and ghost buttons in its footer.",
    width: 600
} %}

---

## Imagery usage

#### Sizes

{% notification {
  type: "warning",
  message: "Aspect ratios vary depending on the modal variant being used. Narrow and Wide component obtain different aspect ratios to maintain the correct visual proportions of the component."
} %}

#### Narrow modal

The Narrow modal component supports three fixed aspect ratios for imagery. To prevent improper cropping, ensure all images are created to match one of the following ratios:
- Small: **3:1**
- Medium: **16:9**
- Large: **4:3**

{% contentLayout %}
  {% contentItem %}
    <h5>Small</h5>
    {% contentPageImage {
      src: "../../../assets/img/components/modal/imagery-usage-narrow-ratio-small.svg",
      alt: "A narrow Modal with an image assigned with a small aspect ratio.",
      width: 478
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h5>Medium</h5>
    {% contentPageImage {
      src: "../../../assets/img/components/modal/imagery-usage-narrow-ratio-medium.svg",
      alt: "A narrow Modal with an image assigned with a medium aspect ratio.",
      width: 478
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h5>Large</h5>
    {% contentPageImage {
      src: "../../../assets/img/components/modal/imagery-usage-narrow-ratio-large.svg",
      alt: "A narrow Modal with an image assigned with a large aspect ratio.",
      width: 478
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Wide modal

The wide modal component supports three fixed aspect ratios for imagery. To prevent improper cropping, ensure all images are created to match one of the following ratios:
- Small: **4:1**
- Medium: **3:1**
- Large: **21:9**

{% contentLayout %}
  {% contentItem %}
    <h5>Small</h5>
    {% contentPageImage {
      src: "../../../assets/img/components/modal/imagery-usage-wide-ratio-small.svg",
      alt: "A wide Modal with an image assigned with a small aspect ratio.",
      width: 478
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h5>Medium</h5>
    {% contentPageImage {
      src: "../../../assets/img/components/modal/imagery-usage-wide-ratio-medium.svg",
      alt: "A wide Modal with an image assigned with a medium aspect ratio.",
      width: 478
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h5>Large</h5>
    {% contentPageImage {
      src: "../../../assets/img/components/modal/imagery-usage-wide-ratio-large.svg",
      alt: "A wide Modal with an image assigned with a large aspect ratio.",
      width: 478
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

## Overrides

### Title

{% contentPageImage {
    src: "../../../assets/img/components/modal/overrides-title.svg",
    alt: "Two Modals are displayed, the first in regular style title, the second in emphasised style.",
    shouldShowPadding: true
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Title:** Title can be overridden to use any of the **Heading** font tokens. As a  default state, the title will use **Heading M / Narrow**. When the prominent toggle is engaged, **Heading XL / Narrow italic** is applied."
    ]
} %}

### Buttons

{% contentPageImage {
    src: "../../../assets/img/components/modal/overrides-buttons.svg",
    alt: "A Modal with custom buttons in its footer.",
    shouldShowPadding: true
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Buttons:** The Button’s size can be decreased, and their variant can be changed. But all changes must adhere to the button pair guidelines if they are kept as a pair, including the size of both buttons remaining consistent."
    ]
} %}

---

#### Sizes

There are three responsive Modal sizes: large, medium and small. Choose a size that works best for the amount of Modal content you have.

Modals with short messages should use the small Modal to avoid long single lines; for complex or larger content, medium or large Modal will be more suitable.

{% componentDetailsTable {
  tableData: sizes
} %}

### Large

{% contentPageImage {
    src: "../../../assets/img/components/modal/size-large.svg",
    alt: "Large size modal.",
    width: 968
} %}

### Medium

{% contentPageImage {
    src: "../../../assets/img/components/modal/size-medium.svg",
    alt: "Medium size modal.",
    width: 520
} %}

### Small

{% contentPageImage {
    src: "../../../assets/img/components/modal/size-small.svg",
    alt: "Small size modal.",
    width: 336
} %}

---

## Narrow

### Sizes

#### Full screen

Large modals will expand to fill the entire page width at narrow viewports.
{% contentPageImage {
    src: "../../../assets/img/components/modal/narrow-size-full-screen.svg",
    alt: "A fullscreen Modal on a mobile screen.",
    width: 302
} %}

#### 75% width

Medium and small modals will expand to 75% page width at narrow viewports.

{% contentPageImage {
    src: "../../../assets/img/components/modal/narrow-size-75-percent.svg",
    alt: "A Modal with 75% width on a mobile screen.",
    width: 336
} %}

### Modifiers

#### Footer

As well as the standard Modal footer modifiers, at a narrow size you have the option to have full-width buttons that are stacked.

{% contentLayout %}
  {% contentPageImage {
      src: "../../../assets/img/components/modal/narrow-modifier-footer-single-action.svg",
      alt: "A Modal with a single primary button in its footer on a mobile screen.",
      width: 336
  } %}
  {% contentPageImage {
    src: "../../../assets/img/components/modal/narrow-modifier-footer-dual-action.svg",
    alt: "A Modal with a single primary button in its footer on a mobile screen.",
    width: 288
  } %}
{% endcontentLayout %}

---

## Behaviours

### Loading

In order to keep the size consistent when the content inside the Modal is loading, we have set a fixed height of 360px while the loading spinner is visible.

{% contentPageImage {
  src: "../../../assets/img/components/modal/behaviour-loading.svg",
  alt: "Loading behaviour of a modal.",
  width: 600
} %}

---

## Layout

### Position

{% notification {
  type: "information",
  message: "Only applicable to Modals that aren’t full screen."
} %}

#### Center

The Modal is positioned at the center of the screen by default.

{% contentPageImage {
  src: "../../../assets/img/components/modal/layout-position-center.svg",
  alt: "A Modal that is positioned in the middle of the screen.",
  shouldShowPadding: true
} %}

#### Top

The Modal is positioned at the top of the screen by default.

{% contentPageImage {
  src: "../../../assets/img/components/modal/layout-position-top.svg",
  alt: "A Modal that is positioned at the top of the screen.",
  shouldShowPadding: true
} %}

---

## Overflow

### Title

When the title exceeds the available width, it wraps onto a new line.

{% contentPageImage {
  src: "../../../assets/img/components/modal/overflow-title.svg",
  alt: "A Modal with a long title.",
  width: 600
} %}

### Body content

When the Modal’s content is longer than the available Modal height, then the body section should scroll vertically with the header, and a footer fixed in place. Modal content should never scroll horizontally; instead, use a larger size modal.

#### Footer pinned = true

If the actions are required to be sticky, they are pinned to the bottom of the Modal container whilst the user scrolls to indicate there is more content below.

{% contentPageImage {
  src: "../../../assets/img/components/modal/overflow-body-content-footer-pinned.svg",
  alt: "A Modal with a pinned footer.",
  width: 400
} %}

#### Footer pinned = false

If the actions aren’t required to be sticky and are placed at the bottom of the content, the passive footer is pinned to the bottom of the Modal container whilst the user scrolls to indicate the presence of additional content below.

{% contentPageImage {
  src: "../../../assets/img/components/modal/overflow-body-content-footer-not-pinned.svg",
  alt: "A Modal with an unpinned footer.",
  width: 400
} %}

---

## Interactions

### Close

#### Dismissible

If the Modal can be dismissed by the user, they should be able to dismiss it by clicking the close Icon Button or anywhere on the overlay. Doing this will close the Modal.

{% contentPageImage {
  src: "../../../assets/img/components/modal/interaction-close-dismissible.svg",
  alt: "A dismissible Modal with a close button.",
  shouldShowPadding: true
} %}

#### Non-dismissible

If the Modal is not dismissible, the user has to complete the flow in order to close the Modal.

{% contentPageImage {
  src: "../../../assets/img/components/modal/interaction-close-non-dismissible.svg",
  alt: "A non-dismissible Modal without a close button.",
  shouldShowPadding: true
} %}

---

## Examples

Outlines the atomic level interactive elements for the component.

### LTR examples

Here are some examples of modals in a left-to-right context:

{% contentPageImage {
    src: "../../../assets/img/components/modal/example-ltr-stampcards.svg",
    alt: "A left-to-right example of a Modal with form fields in the Modal body.",
    shouldShowPadding: true
} %}

{% contentPageImage {
    src: "../../../assets/img/components/modal/example-ltr-my-account.svg",
    alt: "A left-to-right example of list items and buttons in the Modal body.",
    shouldShowPadding: true
} %}

{% contentPageImage {
    src: "../../../assets/img/components/modal/example-ltr-personal-information.svg",
    alt: "A left-to-right example of tabs and cards in the Modal body.",
    shouldShowPadding: true
} %}

### RTL examples

Here are some examples of Buttons in right-to-left context:

{% contentPageImage {
    src: "../../../assets/img/components/modal/example-rtl-stampcards.svg",
    alt: "A right-to-left example of a Modal with form fields in the Modal body.",
    shouldShowPadding: true
} %}

{% contentPageImage {
    src: "../../../assets/img/components/modal/example-rtl-my-account.svg",
    alt: "A right-to-left example of list items and buttons in the Modal body.",
    shouldShowPadding: true
} %}

{% contentPageImage {
    src: "../../../assets/img/components/modal/example-rtl-personal-information.svg",
    alt: "A right-to-left example of tabs and cards in the Modal body.",
    shouldShowPadding: true
} %}

---

## Resources

{% resourceTable {
    componentName: 'Modal'
} %}
