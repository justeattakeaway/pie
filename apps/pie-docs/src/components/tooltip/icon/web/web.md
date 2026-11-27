---
eleventyNavigation:
    key: Web
    parent: Tooltip - Icon
    order: 2
shouldShowContents: true
---

## Dos and don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use one or two words."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "If additional information needs to be displayed to the user, use the [Tooltip](/components/tooltip/) instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../../assets/img/components/tooltip/icon/web/anatomy.svg",
    alt: "Anatomy of the icon tooltip, showing the body copy.",
    width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Body copy:** Describes the function or action in one or two words."
    ]
} %}

---

## Variants

### Default

Used on light backgrounds or containers.

{% contentPageImage {
    src:"../../../../assets/img/components/tooltip/icon/web/variants-default.svg",
    alt: "Example of the default icon tooltip.",
    width: 200
} %}

### Inverse

Used on dark backgrounds or containers. Ensure the inverse tooltip is entirely within the dark container and does not overlap the light background.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/tooltip/icon/web/variants-inverse-solid-bg.svg",
      width: 200,
      alt: "Example of the inverse icon tooltip on a dark background.",
      variant: "inverse"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/tooltip/icon/web/variants-inverse-complex-bg.png",
      alt: "Example of the inverse icon tooltip on a complex background."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Sizes

### Width

#### Fixed

The container width is fixed to fit the content and retains 12px left and right padding.

{% contentPageImage {
    src:"../../../../assets/img/components/tooltip/icon/web/sizes-width-fixed.svg",
    alt: "Example of an icon tooltip with a fixed width.",
    width: 200
} %}

---

## Placement

### Offset

By default, the icon tooltip has a 4px offset between the pointer and the associated UI element. The offset can be overridden if needed.

{% contentPageImage {
    src:"../../../../assets/img/components/tooltip/icon/web/placement-offset.svg",
    alt: "Example showing the 4px offset between the icon tooltip and its trigger.",
    width: 200
} %}

### Position and alignment

A tooltip can open at the top, bottom, left or right, with alignment to the start, centre or end of the content, depending on the position of the UI trigger on the screen. For example, if the trigger appears near the edge of the interface, the tooltip may open from a different position or with a different alignment to avoid cropping, bleeding off the page or covering important information. By default, our tooltips open at the bottom.

#### Bottom

{% contentPageImage {
    src:"../../../../assets/img/components/tooltip/icon/web/placement-position-alignment-bottom.svg",
    alt: "Icon tooltip positioned at the bottom, with start, centre and end alignment.",
    width: 200
} %}

#### Top

{% contentPageImage {
    src:"../../../../assets/img/components/tooltip/icon/web/placement-position-alignment-top.svg",
    alt: "Icon tooltip positioned at the top, with start, centre and end alignment.",
    width: 200
} %}

#### Left and right

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/tooltip/icon/web/placement-position-alignment-left.svg",
      alt: "Icon tooltip positioned to the left of its trigger.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/tooltip/icon/web/placement-position-alignment-right.svg",
      alt: "Icon tooltip positioned to the right of its trigger.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Inverse tooltip

If an inverse tooltip is required, ensure that it is entirely within the dark container and does not overlap with the light background to avoid visual issues.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../../assets/img/components/tooltip/icon/web/placement-inverse-tooltip-do.png",
            width: 300,
            alt: "Example of an inverse icon tooltip fully contained within a dark background."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../../assets/img/components/tooltip/icon/web/placement-inverse-tooltip-dont.png",
            width: 300,
            alt: "Example of an inverse icon tooltip overlapping a light background."
        }]
    }
} %}

---

## Behaviours

### Trigger

A trigger can be any UI element, such as a standalone icon or [icon button](/components/icon-button/) that has no label. Tooltips are triggered by hovering (on desktop) over a trigger.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/tooltip/icon/web/behaviours-trigger-1.svg",
      alt: "Icon tooltip triggered by hovering over an icon button.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/tooltip/icon/web/behaviours-trigger-2.svg",
      alt: "Icon tooltip triggered by hovering over a stamp card icon.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactions

### Close

The tooltip disappears when the user moves the pointer away from the associated UI element.

{% contentPageImage {
    src:"../../../../assets/img/components/tooltip/icon/web/interactions-close.svg",
    alt: "Example of an icon tooltip closing when the pointer moves away from its trigger.",
    width: 200
} %}

---

## Content

- All content should use sentence case.
- Tooltip messages should only be one or two words.
- Do not include crucial information. Important information should always be visible, not hidden in tooltips.

---

## Examples

### LTR examples

Here are some examples of the component in left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/tooltip/icon/web/examples-ltr-scheduled.svg",
      alt: "Example of the icon tooltip in a left-to-right context, showing the label 'Scheduled'.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/tooltip/icon/web/examples-ltr-gifts.svg",
      alt: "Example of the icon tooltip in a left-to-right context, showing the label 'Gifts'.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of the component in right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/tooltip/icon/web/examples-rtl-scheduled.svg",
      alt: "Example of the icon tooltip in a right-to-left context, showing the label 'מתוזמן'.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/tooltip/icon/web/examples-rtl-gifts.svg",
      alt: "Example of the icon tooltip in a right-to-left context, showing the label 'מתנות'.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}