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
          "Use to make it easier and faster to look at or manage a group of larger images.",
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
    src:"../../../assets/img/components/textarea/anatomy.svg",
    alt: "Textarea with numbers specifying four different parts of textarea anatomy.",
    width: "416px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
      "**Container:** To align the image in the center and highlight white-space around the image.",
      "**Image:** Placeholder for the image to be inserted.",
      "**Background color:** Defaults to white, update it based on PNG needs or themes."
    ]
} %}

---

## Variations

### Default

Use it for logos or previews of bigger images.

{% contentPageImage {
    src:"../../../assets/img/components/textarea/default.svg",
    alt: "Textarea component with a label to specify a default state.",
    width: "256px"
} %}

### Outline

A border can be applied to ensure the container of the thumbnail is visible.

{% contentPageImage {
    src:"../../../assets/img/components/textarea/default.svg",
    alt: "Textarea component with a label to specify a default state.",
    width: "256px"
} %}

---

## Modifiers

### Padding

Adds extra space around the thumbnail, useful to center and add space around logos.

{% contentPageImage {
    src:"../../../assets/img/components/textarea/default.svg",
    alt: "Textarea component with a label to specify a default state.",
    width: "256px"
} %}

### Container fill

The fill behind the image is set to `$container-default` by default.

{% notification {
  type: "information",
  message: "When using transparent PNGs, the background colour is set to $container-default, and can be changed as needed to any container colour token."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/container-fill.svg",
    alt: "Textarea component with a label to specify a default state.",
    width: "64px",
    variant: "secondary"
} %}

---

## Sizes

Thumbnails have 3 main sizes to account for corner radius readability. XSmall, Small, and Medium, each of them with maximum and minimum widths and heights to signal where it’s necessary to change into the variant with a different corner radius.

The following table outlines the available Thumbnail sizes, and where they should be used across our products.

{% notification {
  type: "warning",
  message: "To calculate the border-radius of the inner container, subtract the padding (2px) from the thumbnail radius."
} %}

{% componentDetailsTable {
  tableData: sizes
} %}

### Aspect ratio

#### 1:1

The default most common ratio is 1:1. Ideal for logos and item previews. Stick to 8px increments when resizing the component.

{% contentPageImage {
    src:"../../../assets/img/components/textarea/default.svg",
    alt: "Textarea component with a label to specify a default state.",
    width: "256px"
} %}

#### 4:3

4:3 ratio is also allowed but recommended in Medium size. Stick to 8px increments for the width.

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/4by3-aspect-ratio-example.svg",
    alt: "Textarea component with a label to specify a default state.",
    width: "120px"
} %}


#### 16:9

16:9 is also ideal for in card placement and reserved for high quality on brand photos. Stick to 8px increments for the width.

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/16by9-aspect-ratio-example.svg",
    alt: "Textarea component with a label to specify a default state.",
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
      alt: "Default state of a tag.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Small</h3>
    <p>Preview of items within lists or cards</p>
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/size-small.svg",
      width: "56px",
      alt: "Hover state of a tag.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Medium</h3>
    <p>Aimed for brand photography</p>
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/size-medium.svg",
      width: "128px",
      alt: "Active state of a tag.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Placeholder

If an image is unavailable, a placeholder can be used to ensure there is always something visible to users.

{% contentPageImage {
    src:"../../../assets/img/components/thumbnail/placeholder.svg",
    alt: "Textarea component with a label to specify a default state.",
    width: "64px",
    variant: "secondary"
} %}

---

## Interactive states


{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    <p>Empty container with 100% opacity that can be replaced with any other image.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/state-default.svg",
      width: "64px",
      alt: "Default state of a tag.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Disabled</h3>
    <p>Thumbnail changes opacity from 100% to 50%</p>
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/state-disabled.svg",
      width: "64px",
      alt: "Hover state of a tag.",
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
      alt: "Example of a left-to-right checkbox field with assistive text."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/example-ltr-order-card.svg",
      width: "375px",
      alt: "Example of a left-to-right input field with assistive text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

    {% contentPageImage {
      src: "../../../assets/img/components/thumbnail/example-ltr-menu-item-card.svg",
      width: "343px",
      alt: "Example of a left-to-right input field with assistive text."
    } %}

### RTL examples

---

## Resources

{% resourceTable {
    componentName: 'Thumbnail'
} %}
