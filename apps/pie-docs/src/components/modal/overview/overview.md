---
eleventyNavigation:
    key: Overview
    parent: Modal
    order: 1
eleventyComputed:
    sizes: "{% include './sizes.json' %}"
shouldShowContents: true,
---


## Overview
The purpose of modals is to focus the user's attention on a specific task, message, or interaction, and to prevent interaction with other elements on the page while the modal is active.

Modals are commonly used for tasks such as displaying notifications, presenting detailed information, requesting user input, or confirming critical actions.

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/overview.svg",
    alt: "A modal containing a heading, body copy and a button placed on the bottom right corner."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use to inform users about a task can can contain information, require decisions or involve multiple tasks."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Modals interrupt a user’s flow by design, so while effective when used correctly, they should be used sparingly to limit disruption to the user."
        ]
    }
} %}


---

## Anatomy

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/anatomy.png",
    alt: "Anatomy of a modal.",
    shouldShowPadding: true
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Back (optional)**: The chevron Icon button allows the user to return back a stage in a multi-step modal.",
        "**Title**: Gives the users an overview of the content.",
        "**Close (optional)**: The close Icon button will close the modal without submitting any data.",
        "**Main content**: Open slot for any content required.",
        "**CTAs (optional)**: Single or dual call to action Buttons to outline the user’s next options.",
        "**Overlay**: Screen overlay that obscures the on-page content (1.Elements/1. Backgrounds/3. Page/Overlay)."
    ]
} %}

---
## Variations

### Default

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/variation-default.png",
    alt: "Default variation of modal.",
    width: 600
} %}

---

## Modifiers

### Header

#### Back

If a multi-step Modal is required, from steps two onwards a back Icon Button is displayed allowing the user to move back to the preview view.

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/modifier-header-back.png",
    alt: "A modal with a back icon button in the header.",
    width: 600
} %}

#### Close

Use this Header modifier when the modal can be dismissed.

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/modifier-header-close.png",
    alt: "A modal with a close icon button in the header.",
    width: 600
} %}

### Footer

You can replace the footer Buttons with any Button or Button pair defined within the Button guidance.

#### Double

A maximum of two Buttons are allowed within the Modal’s footer, with the primary Button right-aligned and the lower-emphasis Button on the left.

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/modifier-footer-double.png",
    alt: "A modal with dual buttons",
    width: 600
} %}

#### Single

A single Button variant is available when only one action is required.
{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/modifier-footer-single.png",
    alt: "A modal with a single primary button in its footer.",
    width: 600
} %}

#### Passive

You can use the Passive modifier for the footer in instances where the user doesn't need to take an action. This will remove the buttons at the bottom of the Modal.

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/modifier-footer-passive.png",
    alt: "A modal with a pair of primary and ghost buttons in its footer.",
    width: 600
} %}

---

#### Sizes

There are three responsive Modal sizes: large, medium and small. Choose a size that works best for the amount of Modal content you have.

Modals with short messages should use the small Modal to avoid long single lines; for complex or larger content, medium or large Modal will be more suitable.

{% componentDetailsTable {
  tableData: sizes,
  priority: 2
} %}

### Large

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/size-large.png",
    alt: "Large size modal.",
    width: 968
} %}

### Medium

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/size-medium.png",
    alt: "Medium size modal.",
    width: 520
} %}

### Small

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/size-small.png",
    alt: "Small size modal.",
    width: 336
} %}

---

## Narrow

### Sizes

#### Full screen

The Wide large and optionally medium size, has the corresponding responsive option of fullscreen at narrow.

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/narrow-size-full-screen.png",
    alt: "A full screen modal on a mobile screen.",
    width: 302
} %}

#### 75% width

The Wide small and optionally medium size, has the corresponding responsive option of 75% width at narrow.

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/narrow-size-75-percent.png",
    alt: "A modal with 75% width on a mobile screen.",
    width: 336
} %}

### Modifiers

#### Footer

As well as the standard Modal footer modifiers, at a narrow size you have the option to have full width Buttons that are stacked.

{% contentLayout %}
  {% contentPageImage {
      src: "../../../assets/img/components/modal/overview/narrow-modifier-footer-single-action.png",
      alt: "A modal with a single primary button in its footer on a mobile screen.",
      width: 336
  } %}
  {% contentPageImage {
    src: "../../../assets/img/components/modal/overview/narrow-modifier-footer-dual-action.png",
    alt: "A modal with a single primary button in its footer on a mobile screen.",
    width: 288
  } %}
{% endcontentLayout %}

---

## Behaviours

### Loading

In order to keep the size consistent when the content inside the Modal is loading, we have set a fixed height of 360px while the loading spinner is visible.

{% contentPageImage {
  src: "../../../assets/img/components/modal/overview/behaviour-loading.png",
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
  src: "../../../assets/img/components/modal/overview/layout-position-center.png",
  alt: "A modal that is positioned in the middle of the screen.",
  shouldShowPadding: true
} %}

#### Top

The Modal is positioned at the top of the screen by default.

{% contentPageImage {
  src: "../../../assets/img/components/modal/overview/layout-position-top.png",
  alt: "A modal that is positioned at the top of the screen.",
  shouldShowPadding: true
} %}

---

## Overflow

### Title

When the title exceeds the available width, it wraps onto a new line.

{% contentPageImage {
  src: "../../../assets/img/components/modal/overview/overflow-title.png",
  alt: "A modal with a long title.",
  width: 600
} %}

### Body content

When the Modal’s content is longer than the available Modal height, then the body section should scroll vertically with the header, and a footer fixed in place. Modal content should never scroll horizontally; instead, use a larger size modal.

#### Footer pinned = true

If the actions are required to be sticky, they are pinned to the bottom of the Modal container whilst the user scrolls to indicate there is more content below.

{% contentPageImage {
  src: "../../../assets/img/components/modal/overview/overflow-body-content-footer-pinned.png",
  alt: "A modal with a pinned footer.",
  width: 400
} %}

#### Footer pinned = false

If the actions aren’t required to be sticky and placed at the bottom of the content, and the passive footer is pinned to the bottom of the Modal container whilst the user scrolls to indicate there is more content below.

{% contentPageImage {
  src: "../../../assets/img/components/modal/overview/overflow-body-content-footer-not-pinned.png",
  alt: "A modal with an unpinned footer.",
  width: 400
} %}

---

## Interactions

### Close

#### Dismissible

If the Modal can be dismissed by the user, they should be able to dismiss it by clicking the close Icon Button or anywhere on the overlay. Doing this will close the Modal.

{% contentPageImage {
  src: "../../../assets/img/components/modal/overview/interaction-close-dismissible.png",
  alt: "A dismissible modal with a close button.",
  shouldShowPadding: true
} %}

#### Non-dismissible

If the Modal is not dismissible, the user has to complete the flow in order to close the Modal.

{% contentPageImage {
  src: "../../../assets/img/components/modal/overview/interaction-close-non-dismissible.png",
  alt: "A non-dismissible modal without a close button.",
  shouldShowPadding: true
} %}

---

## Examples

Outlines the atomic level interactive elements for the component.

### LTR examples

Here are some examples of modals in a left-to-right context:

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/example-ltr-stampcards.png",
    alt: "A left-to-right example of a modal with form fields in the modal body.",
    shouldShowPadding: true
} %}

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/example-ltr-my-account.png",
    alt: "A left-to-right example of list items and buttons in the modal body.",
    shouldShowPadding: true
} %}

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/example-ltr-personal-information.png",
    alt: "A left-to-right example of tabs and cards in the modal body.",
    shouldShowPadding: true
} %}

### RTL examples

Here are some examples of Buttons in right-to-left context:

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/example-rtl-stampcards.png",
    alt: "A right-to-left example of a modal with form fields in the modal body.",
    shouldShowPadding: true
} %}

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/example-rtl-my-account.png",
    alt: "A right-to-left example of list items and buttons in the modal body.",
    shouldShowPadding: true
} %}

{% contentPageImage {
    src: "../../../assets/img/components/modal/overview/example-rtl-personal-information.png",
    alt: "A right-to-left example of tabs and cards in the modal body.",
    shouldShowPadding: true
} %}

---

## Resources

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=1098-1144&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=1098-1144&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: "https://webc.pie.design/?path=/story/modal--default",
            status: statusTypes.ALPHA
        },
        {
            resource: resourceTypes.VUE,
            link: "https://vue.pie.design/?path=/story/components-molecules--mega-modal-component",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.REACT,
            link: "https://snacks.takeaway.com/portal/components/modal/overview/",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.ANDROID_XML,
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.ANDROID_JETPACK,
            status: statusTypes.AVAILABLE
        }
    ]
} %}
