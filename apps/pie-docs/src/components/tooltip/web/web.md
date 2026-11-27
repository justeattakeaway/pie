---
eleventyNavigation:
    key: Web
    parent: Tooltip
    order: 2
shouldShowContents: true

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Ensure messaging is succinct and only use when necessary to provide an explanation for an interface element.",
            "Use tooltips consistently throughout the page.",
            "Consider clarifying the design and language if you require lots of tooltips.",
            "The close icon button and action button are the only available interactive elements."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use tooltips to communicate errors or critical information.",
            "Do not use tooltips to restate visible UI text.",
            "Don’t use tooltip for complex interactions or content, use a more appropriate component, such as a popover or modal."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/tooltip/web/anatomy.svg",
    alt: "Example of the tooltip component anatomy.",
    width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Title (Optional):** Provides overall context of the content.",
        "**Body copy:** Provides text information to the user.",
        "**Close icon (Optional):** Lets the user dismiss the tooltip.",
        "**Pointer:** A visual link between the tooltip container and the trigger element.",
        "**Button (Optional):** A [button](/components/button/) to outline the user’s next options."
    ]
} %}

---

## Variants

Ensure the correct variation of the tooltip is used depending on the background content to ensure enough contrast.

### Default

Used on light backgrounds or containers.

{% contentPageImage {
    src:"../../../assets/img/components/tooltip/web/variants-default.svg",
    alt: "Example of the default tooltip variant.",
    width: 200
} %}

### Inverse

Used on dark backgrounds or containers.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/variants-inverse-solid-bg.svg",
      width: 200,
      alt: "Example of the inverse tooltip variant on a solid dark background.",
      variant: "inverse"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/variants-inverse-complex-bg.svg",
      alt: "Example of the inverse tooltip variant on a complex background."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Modifiers

### Placement

A tooltip can open at the top, bottom, left or right depending on the position of the UI trigger on the screen. In addition, we can select the alignment to the associated UI element. The UI element can be aligned to the start, centre or end of the tooltip container depending on the space available.

By default, the tooltip opens from the bottom position.

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Ensure tooltips are clearly positioned in relation to their trigger or related content."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Avoid placing a tooltip over any important information.",
            "Avoid placing a tooltip over any navigation.",
            "Avoid the tooltip extending off the page and getting cropped."
        ]
    }
} %}

{% contentLayout %}
  {% contentItem %}
  <h4>Bottom - start</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-bottom-start.svg",
      width: 200,
      alt: "Tooltip positioned at the bottom-start of the trigger element."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Bottom - centre</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-bottom-centre.svg",
      width: 200,
      alt: "Tooltip positioned at the bottom-centre of the trigger element."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Bottom - end</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-bottom-end.svg",
      width: 200,
      alt: "Tooltip positioned at the bottom-end of the trigger element."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Top - start</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-top-start.svg",
      width: 200,
      alt: "Tooltip positioned at the top-start of the trigger element."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Top - centre</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-top-centre.svg",
      width: 200,
      alt: "Tooltip positioned at the top-centre of the trigger element."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Top - end</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-top-end.svg",
      width: 200,
      alt: "Tooltip positioned at the top-end of the trigger element."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Left - start</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-left-start.svg",
      width: 200,
      alt: "Tooltip positioned at the left-start of the trigger element."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Left - centre</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-left-centre.svg",
      width: 200,
      alt: "Tooltip positioned at the left-centre of the trigger element."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Left - end</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-left-end.svg",
      width: 200,
      alt: "Tooltip positioned at the left-end of the trigger element."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Right - start</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-right-start.svg",
      width: 200,
      alt: "Tooltip positioned at the right-start of the trigger element."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Right - centre</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-right-centre.svg",
      width: 200,
      alt: "Tooltip positioned at the right-centre of the trigger element."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Right - end</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-pointer-right-end.svg",
      width: 200,
      alt: "Tooltip positioned at the right-end of the trigger element."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Title

The title can be removed where it is not necessary.

{% contentLayout %}
  {% contentItem %}
  <h4>With title</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-title-with-title.svg",
      width: 200,
      alt: "Tooltip with a title."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Without title</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-title-without-title.svg",
      width: 200,
      alt: "Tooltip without a title."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Action

Tooltips can offer a single action through the use of a button.

{% contentLayout %}
  {% contentItem %}
  <h4>With action</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-action-with-action.svg",
      width: 200,
      alt: "Tooltip with an action."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Without action</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-action-without-action.svg",
      width: 200,
      alt: "Tooltip without an action."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Close

For tooltips that need to be closed manually due to being activated by a tap (on narrow screen).

{% contentLayout %}
  {% contentItem %}
  <h4>With close</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-close-icon-with-close.svg",
      width: 200,
      alt: "Tooltip with a close button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Without close</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/modifiers-close-icon-without-close.svg",
      width: 200,
      alt: "Tooltip without a close button."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Sizes

### Width

#### Predefined

By default, tooltips have a fixed width of 280px and are not dynamic with the content or container.

{% contentPageImage {
    src:"../../../assets/img/components/tooltip/web/sizes-width-predefined.svg",
    alt: "Example of a tooltip with the predefined width.",
    width: 200
} %}

#### Fit to content

The width of the container is dynamic to the width of the content and retains 12px left and right padding if there is no close icon, and 8px to the right if there is a close icon.

{% contentPageImage {
    src:"../../../assets/img/components/tooltip/web/sizes-width-fluid-content.svg",
    alt: "Example of a tooltip with width fluid to content.",
    width: 200
} %}

#### Fill container

The width is 100% of the container of the UI trigger. It can only be applied to top and bottom tooltips.

{% contentPageImage {
    src:"../../../assets/img/components/tooltip/web/sizes-width-fluid-container.svg",
    alt: "Example of a tooltip with width fluid to container.",
    width: 200
} %}

---

## Placement

### Offset

By default the tooltip has 4px offset between the pointer and the associated UI element. User can override the offset if needed.

{% contentPageImage {
    src:"../../../assets/img/components/tooltip/web/placement-offset.svg",
    alt: "Example of a tooltip showing 4px spacing between the end of the pointer and the element.",
    width: 200
} %}

### Position

If the trigger appears near to the edge of the interface, the tooltip will open from a different position or adjust its alignment to avoid cropping, bleeding off the page or covering important information.

{% contentPageImage {
    src:"../../../assets/img/components/tooltip/web/placement-position.svg",
    alt: "Example of a tooltip showing the pointer positioned relative to the element.",
    width: 200
} %}

---

## Behaviours

### Trigger

A trigger can be any UI element, such as a standalone icon, icon button or text.

- Tooltips are triggered by hovering or tabbing (on desktop) or tapping (on tablet and mobile) the trigger element.
- Tooltips can also be triggered automatically by the system, without any manual input from the user.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/behaviours-trigger-1.svg",
      alt: "Tooltip triggered by a chip.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/behaviours-trigger-2.svg",
      alt: "Tooltip triggered by a floating action button.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Auto-dismiss

When close icon or button is not shown, the tooltip will disappear when user hover away from the associated UI element.

{% contentPageImage {
    src:"../../../assets/img/components/tooltip/web/behaviours-close-auto-dismiss.svg",
    alt: "Example of a tooltip that dismisses automatically.",
    width: 200
} %}

### Persistent

If the tooltip includes a close icon or button, the tooltip can remain persistent until the user manually dismisses it or taps outside of the tooltip.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/behaviours-close-persistent-left.svg",
      alt: "Example of a persistent tooltip with a close icon button.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/behaviours-close-persistent-right.svg",
      alt: "Example of a persistent tooltip with a close icon and an action button.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Only one tooltip at a time

When a new tooltip is triggered, the previous one is dismissed, even if the tooltips are persistent.

{% notification {
  type: "information",
  message: "This is the suggested pattern for development, this functionality, if required is handled by pillar engineers'."
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/tooltip/web/behaviours-only-one-do.svg",
            width: 200,
            alt: "Example of only one tooltip being displayed at a time."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/tooltip/web/behaviours-only-one-dont.svg",
            width: 200,
            alt: "Example of two tooltips being triggered at the same time."
        }]
    }
} %}

---

## Interactions

### Close

A tooltip can be closed in one of three ways: either by hovering away from the trigger, or alternatively by clicking/tapping on the close icon or outside the tooltip.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/interaction-close-left.svg",
      alt: "Example of a tooltip closed by hovering away from the trigger.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/interaction-close-right.svg",
      alt: "Example of a tooltip closed with the close icon.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Action

An action button in a tooltip should provide a simple, contextual action that directly relates to the tooltip’s purpose. It should not contain additional links or essential information. For more complex interactions or content, use a more appropriate component, such as a [popover](/components/popover/) or [modal](/components/modal/).

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/tooltip/web/interaction-action-do.svg",
            width: 200,
            alt: "Example of a tooltip with a simple, contextual action button."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/tooltip/web/interaction-action-dont.svg",
            width: 200,
            alt: "Example of a tooltip with an action button that contains essential information."
        }]
    }
} %}

---

## Content

- All content should use sentence case.
- Tooltip message should be brief, always using clear and concise phrasing.
- Should not contain crucial information. Important information should always be visible, not hidden in tooltips.

---

## Overflow

If the content exceeds the available width, the title and body copy wrap to a new line. Content will be left aligned.
Keep the title within 1-2 lines and the body copy to a maximum of 4 lines.

{% contentPageImage {
    src:"../../../assets/img/components/tooltip/web/overflow.svg",
    alt: "Example of the tooltip component with content overflow.",
    width: 200
} %}

---

## Examples

### LTR examples

Here are some examples of the component in left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/examples-ltr-price.svg",
      alt: "Example of the tooltip component in left-to-right context.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/examples-ltr-address.svg",
      alt: "Example of the tooltip component in left-to-right context.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of the component in right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/examples-rtl-price.svg",
      alt: "Example of the tooltip component in right-to-left context.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/web/examples-rtl-address.svg",
      alt: "Example of the tooltip component in right-to-left context.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
