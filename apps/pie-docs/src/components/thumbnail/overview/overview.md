---
eleventyNavigation:
    key: Overview
    parent: 'Thumbnail'
    order: 1
shouldShowContents: true
permalink: components/thumbnail/
eleventyComputed:
    sizes: "{% include './sizes.json' %}"
---

## Overview

The purpose of thumbnails is to improve the user experience by offering a visual preview of the content without the need to load or display the full-sized version immediately. Thumbnails help users quickly identify items of interest, making it easier for them to choose which items they want to view in more detail.

Thumbnails are commonly used in cards, image grids, file managers, and various other scenarios to provide users with a quick overview of multiple items.

{% contentPageImage {
    src:"../../assets/img/components/thumbnail/overview.svg",
    alt: "A thumbnail that displays placeholder image."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
          "Use to give visibility to content on other pages.",
          "Use to show logos and photography."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t insert images of users, if this is needed, use an [Avatar](/components/avatar/) instead.",
            "Don’t use illustrations."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/anatomy.svg",
    alt: "Thumbnail with two numbers specifying different parts of thumbnail anatomy.",
    width: "218px",
    variant: "secondary"
} %}

{% list {
    type: listTypes.ordered,
    items: [
      "**Container:** To align the image in the center and highlight the white-space around the image.",
      "**Image:** The fill can be an image, placeholder icon or a fill color."
    ]
} %}

---

## Variations

### Default

Use it for logos or as previews for images that lead to primary content.

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/variant-default.svg",
    alt: "A thumbnail component with a centred, small transparent image preview.",
    width: "64px",
    variant: 'secondary'
} %}

### Outline

A border can be applied to ensure the container of the thumbnail is visible.

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/variant-outline.svg",
    alt: "A thumbnail placeholder with a thin border and a centred, small transparent image preview.",
    width: "64px",
    variant: "secondary"
} %}

---

## Modifiers

### Padding

Adds extra space around the thumbnail, useful to center and add space around logos.

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/modifier-padding.svg",
    alt: "A thumbnail placeholder with additional space around an image preview.",
    width: "64px",
    variant: "secondary"
} %}

### Container fill

The fill behind the image is set to $container-default by default, it can be changed as needed to any container colour token.

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/container-fill.svg",
    alt: "A thumbnail placeholder with a filled background behind image preview.",
    width: "64px",
    variant: "secondary"
} %}

---

## Sizes

Thumbnails have 3 main sizes to account for corner radius readability,XSmall, Small and Medium, each of them with maximum and minimum widths and heights to signal where it’s necessary to change into the variant with a different corner radius.

The following table outlines the available Thumbnail sizes:

{% notification {
  type: "information",
  message: "To calculate the border-radius of the inner container, subtract the padding (2px) from the thumbnail radius."
} %}

{% componentDetailsTable {
  tableData: sizes
} %}


{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/thumbnail/sizes-example-do.svg",
            width: "128px",
            alt: "An example of a correctly used thumbnail displaying a burger meal. The image is clear, properly sized, and fits within the designated thumbnail area."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/thumbnail/sizes-example-dont.svg",
            width: "128px",
            alt: "An example of incorrect thumbnail usage, displaying an illustration. This is discouraged because thumbnails should contain real images, not illustrations."
        }]
    }
} %}

### Aspect ratio

The Thumbnail component can be easily resized along the aspect ratio constraints and always in 8px increments.

#### 1:1

The default most common ratio is 1:1. Ideal for logos and item previews.

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/1by1-aspect-ratio-example.svg",
    alt: "A thumbnail (1:1 ratio) featuring a burger image.",
    width: "64px"
} %}

#### 4:3

4:3 ratio is also allowed but recommended in Medium size.

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/4by3-aspect-ratio-example.svg",
    alt: "A thumbnail (4:3 ratio) displaying a burger with a side dish.",
    width: "120px"
} %}


#### 16:9

16:9 is also ideal for in card placement and reserved for high quality on brand photos.

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/16by9-aspect-ratio-example.svg",
    alt: "A wide thumbnail (16:9 ratio) showing a chef assembling a burger in a kitchen.",
    width: "128px"
} %}

---

### Content

#### Imagery

Use always logos, product pictures or on brand photos.

{% contentLayout { columns: 3 } %}
  {% contentItem %}
    <h3>Xsmall</h3>
    <p>Use for logos in information dense cases</p>
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/size-xsmall.svg",
      width: "40px",
      alt: "A very small thumbnail displaying a logo of the Burgermeister franchise.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Small</h3>
    <p>Preview of items within lists or cards</p>
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/size-small.svg",
      width: "56px",
      alt: "A small thumbnail showing a package of Shreddies cereal.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Medium</h3>
    <p>Aimed for brand photography</p>
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/size-medium.svg",
      width: "128px",
      alt: "A medium-sized thumbnail featuring two smiling people in a kitchen setting.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Placeholder

If an image is unavailable, a placeholder can be used to ensure there is always something visible to users.

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/placeholder.svg",
    alt: "A thumbnail placeholder with a centred small Just Eat Takeaway.com logo, indicating a missing or unavailable image.",
    width: "64px"
} %}

---

## Interactive states

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/state-default.svg",
      width: "64px",
      alt: "A thumbnail with a transparent placeholder image. Represents the default thumbnail state.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Disabled</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/state-disabled.svg",
      width: "64px",
      alt: "A thumbnail with a transparent placeholder image in a faded appearance.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of Thumbnail in left to right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/example-ltr-restaurant-card.svg",
      width: "343px",
      alt: "A 'Burgermeister' restaurant listing card follows a left-to-right layout, where a thumbnail of the brand logo on the left. Next to it, the restaurant name, rating, food category, delivery time, and pricing details are displayed, ensuring the thumbnail serves as a visual entry point before the textual details."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/example-ltr-order-card.svg",
      width: "375px",
      alt: "A 'Burger King' order history card, a left-aligned thumbnail of the Burger King logo is followed by order details on the right, including the delivery date, number of items, total cost, and a 'View order' link. Below the text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentPageImage {
    src: "../../../assets/img/components/thumbnail/example-ltr-menu-item-card.svg",
    width: "343px",
    alt: "A 'Double Cheeseburger' menu item card follows a left-to-right structure, where the product name, description, and price appear first. A small placeholder thumbnail is positioned on the right."
} %}

### RTL examples

{% notification {
  type: "information",
  message: "The Thumbnail doesn’t change in RTL."
} %}

---

## Resources

{% resourceTable {
    componentName: 'Thumbnail'
} %}
