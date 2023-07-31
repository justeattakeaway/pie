---
eleventyNavigation:
    key: Overview
    parent: Iconography
    order: 1
---

## Icon sets

We have two icon sets that can be used in our products and communications.

### Small icon set

This is the default icon set used throughout our products across Web, Android and iOS. It features less details, which helps with making them simpler when used at smaller sizes.

{% contentPageImage {
    src: "../../../assets/img/foundations/iconography/small-icon-set.svg",
    width: "33.91",
    caption: "The example above shows what our ‘Kebab bowl’ icon looks like on the small set."
} %}

### Large icon set

This set should be used for illustrative purposes, such as communications or marketing materials. The icons are more detailed, which helps make them look better when used at bigger sizes.

{% contentPageImage {
    src: "../../../assets/img/foundations/iconography/large-icon-set.svg",
    width: "65.65px",
    caption: "The example above shows what our ‘Kebab bowl’ icon looks like on the Large set."
} %}

---

## Icon anatomy

Our icons are always placed inside a bounding box, which ensures that vertical and horizontal spacing adhere to our [spacing guides](/foundations/spacing/overview/).

When exporting icons for your products, please export the whole bounding box, instead of just the icon area.

{% contentPageImage {
    src: "../../../assets/img/foundations/iconography/icon-anatomy.svg",
    width: "199px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon area:** (small (default size): 14x14px / large (default size): 28x28px).",
        "**Bounding box:** (small (default size): 16x16px / large (default size): 32x32px)."
    ]
} %}

---

## Sizing

When using icons there will be instances where the default sizes assigned to our icon sets aren’t enough. In these instances you can use the following sizes:

### Sizes for the Small icon set

Our small icon set can be used at the following sizes:

{% list {
    type: listTypes.pill,
    items: [
        "16px",
        "20px",
        "24px",
        "28px",
        "32px",
        "40px"
    ]
} %}

{% contentPageImage {
    src: "../../../assets/img/foundations/iconography/small-icon-set-sizes.svg",
    width: "40px",
    caption: "The example above shows the multiple sizes at which icons from the Small icon set can be placed at."
} %}

## Sizes for the Large icon set

The minimum for this set of icons is 32px. However, because they can be used as supporting icons in communications and marketing materials, they can be resized at any scale, sticking to 8px increments.

{% contentPageImage {
    src: "../../../assets/img/foundations/iconography/large-icon-set-sizes.svg",
    width: "80px",
    caption: "The example above shows the minimum size at which icons from the Large icon set must be placed at."
} %}

---

## Appearance

There are two types of appearance options for our icons:

### Default

This is the default look for our icons and should always be considered as the first option to use when placing icons in your designs.

{% contentPageImage {
    src: "../../../assets/img/foundations/iconography/appearance-default.svg",
    width: "32.8px"
} %}

### Fill

Fill icons should be used sparingly, mainly for icons that need to present interactive states (e.g. selected/unselected) or in certain specific places in legacy products.

{% contentPageImage {
    src: "../../../assets/img/foundations/iconography/appearance-fill.svg",
    width: "32.81px"
} %}

---

## Interactive states

There are three types of interaction patterns for interactive icons:

### Default

In this first instance the icon can be placed on its own. When the user hovers over the icon its bounding box will change its background colour to reflect the change in state.

{% contentPageImage {
    src: "../../../assets/img/foundations/iconography/interactive-states-default.svg",
    width: "328px"
} %}

### Icon button

Used for CTA, in this instance the interactive icon sits inside an icon button and uses its hover and active states to highlight that the icon is being interacted with.

{% contentPageImage {
    src: "../../../assets/img/foundations/iconography/interactive-states-button.svg",
    width: "328px"
} %}

### Selectable

This instance uses the fill appearance of the icon to indicate the change in its state. It should only be used when the icon needs to show something is selected.

{% contentPageImage {
    src: "../../../assets/img/foundations/iconography/interactive-states-selectable.svg",
    width: "328px"
} %}

---
## Using icons in your products

Choosing and using icons for your products isn’t an easy task. An excellent icon can extract the most important visual characteristics of a product or idea, making the depiction instantly recognisable.

In this section you’ll find some factors you need to keep in mind when using icons within your interfaces.

### How to choose an icon

Abstract icons are more difficult to comprehend than literal icons. Instead of using metaphorical icons, try using those which convey the most basic idea or concept you’re trying to represent.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src:"../../../assets/img/foundations/iconography/how-to-choose-an-icon-do.svg",
            width: "234px"
        }]
    },
    dont: { 
        type: usageTypes.image,
        items: [{
            src:"../../../assets/img/foundations/iconography/how-to-choose-an-icon-dont.svg",
            width: "234px"
        }]
    }
} %}

### Pairing text with icons

Icons act as a visual cue to improve the legibility and scannability of your products. As a general rule, try to place icons near a text label or title. Don’t place icons by themselves unless they represent an universally understood action.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src:"../../../assets/img/foundations/iconography/pairing-text-with-icons-do.svg",
            width: "375px"
        }]
    },
    dont: { 
        type: usageTypes.image,
        items: [{
        src:"../../../assets/img/foundations/iconography/pairing-text-with-icons-dont.svg",
        width: "375px"
        }]
    }
} %}

### Pairing colour and icons

By default our icons use our $content-default colour token. However, you can use other colours for icons placed on certain contexts. The colors you can use are all under the category **‘Content Static’** and **‘Content interactive’**.

{% notification {
    type: "information",
    message: "See [colour token foundations](/foundations/colour/tokens/alias/light/) for more information. (PIE 2.0 guidance only)."
} %}

{% contentPageImage {
    src: "../../../assets/img/foundations/iconography/icon-with-colour.svg",
    width: "251px",
    caption: "The example above shows some of the colours you can use with your icons."
} %}
