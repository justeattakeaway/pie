---
eleventyNavigation:
    key: Overview
    parent: Tag
    order: 1
shouldShowContents: true
permalink: components/tag/
eleventyComputed:
    sizes: "{% include './sizes.json' %}"
---

## Overview

The purpose of tags is to provide a quick and visually appealing way to highlight or identify specific items, topics or attributes. Tags enhance the user experience by simplifying content organisation and facilitating content discovery and filtering.
Tags can be embedded in other components such as cards, data tables (among others) to help users understand and filter information more effectively.

{% contentPageImage {
    src:"../../../assets/img/components/tag/overview.svg",
    alt: "A group of tags indicating Evening menu only, Spicy and vegetarian."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use when content is mapped to multiple categories, and the user needs a way to differentiate between them.",
            "Use to call attention to details in a way that makes it easy to scan."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use for interactions crucial for the flow.",
            "If only an icon is required to convey the message, use the tag: icon only component instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/tag/anatomy.svg",
    alt: "Anatomy of a tag.",
    width: 169
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon (Optional):** Visually supports the label.",
        "**Label:** Provides information to the user.",
        "**Trailing icon (Optional):** Indicates additional actions or further interactions."
    ]
} %}

---

## Variations

### Non-interactive 

The non-interactive variation should be used by default, and should be used when the tag doesn’t require any interactivity.

{% contentPageImage {
    src:"../../../assets/img/components/tag/non-interactive-tag.svg",
    alt: "A tag with a leading icon placeholder and a label text",
    width: "69px"
} %}

### Interactive

The interactive variation should be used for non-crucial interactions.

{% contentPageImage {
    src:"../../../assets/img/components/tag/interactive-tag.svg",
    alt: "The image shows different states of the interactive tag component such as default, hover and active states",
    width: "224px"
} %}

--- 

## Modifiers

### Icon

When incorporating an icon into a tag, it is essential to ensure that the icon clearly supports the label. Icons are only available in the large size of the tag. 

{% contentLayout %}
  {% contentItem %}
    <h4>Leading</h4>
    <p>Leading icon provides context and visually supports the label and it is available for both variants.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/modifier-icon-leading.svg",
      width: "69px",
      alt: "A tag component with a leading placeholder icon and a label text"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Trailing</h4>
    <p>Trailing icon offers additional actions or indicates further interactions, for this reason it is only available in the interactive set.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/modifier-icon-trailing.svg",
      width: "69px",
      alt: "A tag component with a trailing placeholder icon and a label text"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Emphasis

Depending on the level of visual prominence you want to give to the tag, you can choose between strong or subtle emphasis.

{% contentLayout %}
  {% contentItem %}
    <h4>Strong</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/modifier-emphasis-strong.svg",
      width: "69px",
      alt: "A tag component with an icon placeholder and label text. The component has a dark background color to indicate string emphasis."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Subtle</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/modifier-emphasis-subtle.svg",
      width: "69px",
      alt: "A tag component with an icon placeholder and label text. The component has a subtle background color (light grey) to indicate subtle emphasis.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Colours

Select from a range of colour options across the two levels of emphasis.

{% contentLayout %}
  {% contentItem %}
    <h3>Neutral</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-neutral.svg",
      width: "163px",
      alt: "A pair of strong and subtle neutral tags.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Neutral alternative</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-neutral-alternative.svg",
      width: "77px",
      alt: "A subtle alternative for neutral tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Ghost</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-ghost.svg",
      width: "77px",
      alt: "A pair of strong and subtle tags in green color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Outline</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-outline.svg",
      width: "77px",
      alt: "A tag component with an outline."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Information</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-information.svg",
      width: "164px",
      alt: "A pair of strong and subtle tags in blue color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Success</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-success.svg",
      width: "164px",
      alt: "A pair of strong and subtle tags in green color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Error</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-error.svg",
      width: "164px",
      alt: "A pair of strong and subtle tags in red color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>05 Warning</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-warning.svg",
      width: "164px",
      alt: "A pair of strong and subtle tags in yellow color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>02 Orange subtle</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-brand-02.svg",
      width: "77px",
      alt: "A tag component in orange color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>03 Cupcake</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-brand-03.svg",
      width: "78px",
      alt: "A tag component in light blue color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>04 Berry</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-brand-04.svg",
      width: "78px",
      alt: "A tag component in light pink color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>06 Aubergine</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-brand-06.svg",
      width: "78px",
      alt: "A tag component in purple color."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

___

## Sizes

### Height

Two size options are available to suit the scale required.

{% componentDetailsTable {
  tableData: sizes
} %}

### Width

Container width is dynamic to the content’s width and retains 4px left and right padding.

{% contentPageImage {
    src:"../../../assets/img/components/tag/long-label.svg",
    alt: "A tag component with a long text",
    width: "128px"
} %}

___ 

## Meaning and purpose

Tags can be used to indicate status or used to convey specific meanings within JET which are displayed below.

{% contentPageImage {
    src:"../../../assets/img/components/tag/meaning-and-purpose.svg",
    alt: "A collection of different tag variants",
    width: "358px"
} %}

---

## Interactive states

The interactive variation includes all interactive states, while the non-interactive variation only includes the default and disabled states.


{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/state-default.svg",
      width: "70px",
      alt: "Default state of a tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Hover</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/state-hover.svg",
      width: "70px",
      alt: "Hover state of a tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/state-active.svg",
      width: "70px",
      alt: "Active state of a tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Focus</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/state-focus.svg",
      width: "78px",
      alt: "Focus state of a tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Disabled</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/state-disabled.svg",
      width: "70px",
      alt: "Disabled state of a tag."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of tags in left-to-right context:


{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tag/example-ltr-restaurant-listing.svg",
      width: "343px",
      alt: "A Burger King restaurant listing in a left-to-right language. with two tags in the top left corner, Promoted on the left and Stampcards on the right"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  {% contentPageImage {
      src: "../../../assets/img/components/tag/example-ltr-disabled-menu-item.svg",
      width: "343px",
      alt: "A menu item listing in a left to right language with a title, Menu item. Below it, an offer tag with 'Offer' and dietary tags indicating Vegan, Vegetarian, and Spicy",
      width: "827px"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of tags in right-to-left context:


{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tag/example-rtl-restaurant-listing.svg",
      width: "343px",
      alt: "A Burger King restaurant listing in a right-to-left language (hebrew). with two tags in the top left corner, Promoted on the left and Stampcards on the right"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  {% contentPageImage {
      src: "../../../assets/img/components/tag/example-rtl-disabled-menu-item.svg",
      width: "343px",
      alt: "A menu item listing in a right to left (hebrew) language with a title, Menu item. Below it, an offer tag with 'Offer' and dietary tags indicating Vegan, Vegetarian, and Spicy",
      width: "359px"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Resources

{% resourceTable {
    componentName: 'Tag'
} %}
