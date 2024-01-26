---
eleventyNavigation:
    key: Overview
    parent: Tag
    order: 1
shouldShowContents: true
---

## Overview

The purpose of tags is to provide a quick and visually appealing way to highlight or identify specific items, topics or attributes. Tags enhance the user experience by simplifying content organisation and facilitating content discovery and filtering.
Tags can be embedded in other components such as cards, data tables (among others) to help users understand and filter information more effectively.

{% contentPageImage {
    src:"../../../assets/img/components/tag/overview.svg",
    alt: "A group of tags."
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
            "Don’t use when an interaction is required, use a [chip](/components/chip/) if needed."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/tag/anatomy.svg",
    alt: "Anatomy of a tag.",
    width: 120
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon (Optional):** Visually supports the label.",
        "**Label:** Provides information about the content or purpose of the tag.",
        "**Container**: Background container that organises the information."
    ]
} %}

---

## Variations

### Type

Tag can use colour for visual categorisation.

{% contentLayout %}
  {% contentItem %}
    <h3>Neutral</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-neutral.svg",
      width: "106px",
      alt: "A pair of strong and subtle neutral tags."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Blue</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-blue.svg",
      width: "106px",
      alt: "A pair of strong and subtle tags in blue color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Green</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-green.svg",
      width: "106px",
      alt: "A pair of strong and subtle tags in green color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Yellow</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-yellow.svg",
      width: "106px",
      alt: "A pair of strong and subtle tags in yellow color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Red</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-red.svg",
      width: "106px",
      alt: "A pair of strong and subtle tags in red color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Brand</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-brand.svg",
      width: "49px",
      alt: "A subtle tag in brand color."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Neutral - alternative</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-neutral-alternative.svg",
      width: "49px",
      alt: "A subtle alternative for neutral tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Outline</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-outline.svg",
      width: "49px",
      alt: "An outline tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Ghost</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/variation-type-ghost.svg",
      width: "49px",
      alt: "A ghost tag."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

___

## Modifiers

### Emphasis

Tags are available in two types of emphasis. 
Not all colours available within the subtle emphasis are available within the strong emphasis, for example, brand, neutral - alternative, outline and ghost have only subtle variations.

{% contentLayout %}
  {% contentItem %}
    <h4>Strong</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/modifier-emphasis-strong.svg",
      width: "49px",
      alt: "A variation of tag which uses strong colors."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Subtle</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/modifier-emphasis-subtle.svg",
      width: "49px",
      alt: "A variation of tag which uses subtle colors."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Icon

Icons can be used to visually support the Tag’s label. Only available at the large size.

{% contentLayout %}
  {% contentItem %}
    <h4>With icon</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/modifier-icon.svg",
      width: "69px",
      alt: "A tag with an icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Without icon</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/modifier-no-icon.svg",
      width: "49px",
      alt: "A tag without an icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

--- 

## Sizes

{% contentLayout %}
  {% contentItem %}
    <h3>Small</h3>
    <p>16px height. Small tags don't support icons.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/size-small.svg",
      width: "37px",
      alt: "Small size tag with 16px height."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Large</h3>
    <p>24px height.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/size-large.svg",
      width: "126px",
      alt: "Large size tag with 24px height."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## States

Tag is available in 2 states. The disabled state has an opacity of 50%.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/state-default.svg",
      width: "126px",
      alt: "Default state of a tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Disabled</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag/state-disabled.svg",
      width: "126px",
      alt: "Disabled state of a tag."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

--- 

## Content

### Label guidance

Tag doesn’t have a maximum width or overflow. The container width is dynamic to the content’s width. 

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use concise and scannable text.",
            "Use 3 words or fewer.",
            "Use sentence case."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't overcrowd the label with unnecessary information or excessive details.",
            "Don't use more than 3 words in the label."
        ]
    }
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/tag/content-label-guidance-do.svg",
            width: "88px",
            alt: "A tag with a one-word label."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/tag/content-label-guidance-don_t.svg",
            width: "175px",
            alt: "A tag with a sentence in the label."
        }]
    }
} %}

___

## Visual representation 

Tags and colours can be used to indicate status or used to convey specific meanings within JET which are displayed below.

{% contentPageImage {
    src:"../../../assets/img/components/tag/visual-representation.svg",
    alt: "Specific meaning of colors and the purpose of tags.",
    width: "352px"
} %}

---

## Examples

Outlines the atomic level interactive elements for the component.

### LTR examples

Here are some examples of tags in left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tag/ltr-example-offer.svg",
      width: "226px",
      alt: "A left-to-right example of an offer with a subtle green tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  {% contentPageImage {
      src: "../../../assets/img/components/tag/ltr-example-opening-hours.svg",
      width: "402px",
      alt: "A left-to-right example of opening hours of a restaurant with a subtle brand tag."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentPageImage {
    src:"../../../assets/img/components/tag/example-ltr-restaurant-listing.svg",
    alt: "A left-to-right example of a tag used on a restaurant listing card.",
    width: "827px"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/tag/ltr-example-disabled-menu-card.svg",
    alt: "A left-to-right example of disabled offer tag in a menu item card.",
    width: "827px"
} %}

### RTL examples

Here are some examples of tags in right-to-left context:

{% contentPageImage {
    src: "../../../assets/img/components/tag/rtl-example-restaurant-listing.svg",
    alt: "A right-to-left example of neutral and brand tags used on a restaurant listing card.",
    width: "827px"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/tag/rtl-example-price-breakdown.svg",
    alt: "A right-to-left example of an offer tag used in a price breakdown.",
    width: "359px"
} %}

___

## Resources

{% resourceTable {
    rows: [
        {
            resource: resourceTypes.COMPONENT,
            link: "https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-328&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-328&mode=design",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE
        },
        {
            resource: resourceTypes.REACT,
            link: "https://snacks.takeaway.com/portal/components/tag/",
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.AVAILABLE
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.ANDROID_XML,
            status: statusTypes.PLANNED
        },
        {
            resource: resourceTypes.ANDROID_JETPACK,
            status: statusTypes.PLANNED
        }
    ]
} %}
