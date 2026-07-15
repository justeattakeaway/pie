---
eleventyNavigation:
    key: Android
    parent: Tooltip
    order: 3
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Ensure messaging is succinct and only use when necessary to provide an explanation for an interface element.",
            "Use tooltips consistently throughout the page.",
            "Consider clarifying the design and language if you require lots of tooltips."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use tooltips to communicate errors or critical information.",
            "Do not use tooltips to restate visible UI text."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
src:"../../../assets/img/components/tooltip/android/anatomy.svg",
alt: "Anatomy of the Android tooltip component.",
width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Title (Optional):** Provides overall context of the content.",
        "**Body copy:** Provides supporting information to the user.",
        "**Close icon (Optional):** Allows the user to dismiss the tooltip.",
        "**Pointer:** A visual link between the tooltip container and the trigger element.",
        "**Button (Optional):** A button to outline the user's next options."
    ]
} %}

---

## Variants

Ensure the correct variation of the tooltip is used depending on the background content to ensure enough contrast.

### Default

Used on light backgrounds or containers.

{% contentPageImage {
src:"../../../assets/img/components/tooltip/android/variants-default.svg",
alt: "Default variant of the Android tooltip component.",
width: 200
} %}

### Inverse

Used on dark backgrounds or containers.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/variants-inverse-solid-bg.svg",
      width: 200,
      alt: "Inverse variant of the Android tooltip component in an inverse solid background.",
      variant: "inverse"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/variants-inverse-complex-bg.svg",
      alt: "Inverse variant of the Android tooltip component in a complex background."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Modifiers

### Pointer placement

A tooltip can open at the top, bottom, left or right depending on the position of the UI trigger on the screen. In addition, we can select the alignment to the associated UI element. The UI element can be aligned to the left, centre or right of the tooltip depending on the space available.

By default, the tooltip opens from the bottom, which means the pointer is positioned top-centre.

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
  <h4>Top-left</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-pointer-top-left.svg",
      width: 200,
      alt: "Tooltip positioned at the top-left of the trigger element."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Top-centre</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-pointer-top-centre.svg",
      width: 200,
      alt: "Tooltip positioned at the top-centre of the trigger element."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Top-right</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-pointer-top-right.svg",
      width: 200,
      alt: "Tooltip positioned at the top-right of the trigger element."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Bottom-left</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-pointer-bottom-left.svg",
      width: 200,
      alt: "Tooltip positioned at the bottom-left of the trigger element."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Bottom-centre</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-pointer-bottom-centre.svg",
      width: 200,
      alt: "Tooltip positioned at the bottom-centre of the trigger element."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Bottom-right</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-pointer-bottom-right.svg",
      width: 200,
      alt: "Tooltip positioned at the bottom-right of the trigger element."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Right-centre</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-pointer-right-centre.svg",
      width: 200,
      alt: "Tooltip positioned at the right-centre of the trigger element."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Left-centre</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-pointer-left-centre.svg",
      width: 200,
      alt: "Tooltip positioned at the left-centre of the trigger element."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Title

The title can be removed where it is not necessary.

{% contentLayout %}
  {% contentItem %}
  <h4>With title</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-title-with-title.svg",
      width: 200,
      alt: "Tooltip with a title."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Without title</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-title-without-title.svg",
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
      src: "../../../assets/img/components/tooltip/android/modifiers-action-with-action.svg",
      width: 200,
      alt: "Tooltip with an action."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Without action</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-action-without-action.svg",
      width: 200,
      alt: "Tooltip without an action."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Close

For tooltips that need to be closed manually.

{% contentLayout %}
  {% contentItem %}
  <h4>With close</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-close-icon-with-close.svg",
      width: 200,
      alt: "Tooltip with a close button."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Without close</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/modifiers-close-icon-without-close.svg",
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
src:"../../../assets/img/components/tooltip/android/sizes-width-predefined.svg",
alt: "Example of Android tooltip component with the predefined width.",
width: 200
} %}

#### Fluid to content

The width of the container is dynamic to the width of the content and retains 12px left and right padding if there is no close icon, and 8px to the right if there is a close icon.

{% contentPageImage {
src:"../../../assets/img/components/tooltip/android/sizes-width-fluid-content.svg",
alt: "Example of Android tooltip component with width fluid to content.",
width: 200
} %}

#### Fluid to container

The width is 100% of the container in which the trigger and tooltip are placed, and can only be applied to top and bottom tooltips.

{% contentPageImage {
src:"../../../assets/img/components/tooltip/android/sizes-width-fluid-container.svg",
alt: "Example of Android tooltip component with width fluid to container.",
width: 200
} %}

---

## Placement

### Spacing

Tooltip should have 4px spacing between the pointer and the associated UI element.

{% contentPageImage {
src:"../../../assets/img/components/tooltip/android/placement-spacing.svg",
alt: "Example of Android tooltip component showing 4px spacing between end of the pointer and element.",
width: 200
} %}

### Pointer

Always position the tooltip pointer relative to the centre of the element.

{% contentPageImage {
src:"../../../assets/img/components/tooltip/android/placement-pointer.svg",
alt: "Example of Android tooltip component showing the pointer centered relative to the element.",
width: 200,
variant: "secondary"
} %}

{% notification {
  type: "information",
  message: "The pointer remains centered to the element when the tooltip is at the edge of the screen."
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/placement-pointer-screen-1.svg",
      alt: "Tooltip opening to the right of a trigger near the left edge of the screen, with the pointer centred on the trigger element."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/placement-pointer-screen-2.svg",
      alt: "Tooltip repositioning away from the screen edge with the pointer remaining centred on the trigger element."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Behaviours

### Trigger

A trigger can be any UI element, such as a standalone icon, icon button or text.

- Tooltips are triggered by tapping.
- Tooltips can also be triggered automatically by the system, without any manual input from the user.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/behaviours-trigger-left.svg",
      alt: "Tooltip placed on the left.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/behaviours-trigger-left-top.svg",
      alt: "Tooltip placed on the left top.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Close

#### Auto-dismiss

The tooltip will automatically disappear 1500ms after being triggered. Since the user cannot manually dismiss it, the close function has been removed.

{% contentPageImage {
src:"../../../assets/img/components/tooltip/android/behaviours-close-auto-dismiss.svg",
alt: "Example of Android tooltip component showing the pointer centered relative to the element.",
width: 200
} %}

#### Persistent

If the tooltip includes a close icon or button, the tooltip can remain persistent until the user manually dismisses it or taps outside of the tooltip.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/behaviours-close-persistent-left.svg",
      alt: "Example of the tooltip with a close icon button.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/behaviours-close-persistent-right.svg",
      alt: "Example of the tooltip with a close icon and an action button.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Only one tooltip at a time

If more tooltips need to be displayed, the previous tooltip will be dismissed when the new tooltip is triggered, even if the tooltips are persistent.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/tooltip/android/behaviours-only-one-do.svg",
            width: 200,
            alt: "Example of only one tooltip being displayed at a time."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/tooltip/android/behaviours-only-one-dont.svg",
            width: 200,
            alt: "Example of two tooltips being triggered at the same time."
        }]
    }
} %}

---

## Interactions

### Trigger

When a tooltip is manually triggered, the touch target area must be at least 48px by 48px to ensure accessibility. If the UI element is smaller than this size, the touch target area can extend beyond the visible element.

{% contentPageImage {
src:"../../../assets/img/components/tooltip/android/interactions-trigger.svg",
alt: "Example of the tooltip component triggered by an interactive icon and the touch target area around the interactive element.",
width: 200
} %}

### Close

A tooltip can be closed in one of three ways: by tapping on the close icon, by tapping on the action button or outside the tooltip.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/interaction-close-left.svg",
      alt: "Example of the tooltip with a close icon button.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/interaction-close-right.svg",
      alt: "Example of the tooltip with a close icon and an action button.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Content

- All content should use sentence case.
- Tooltip messages should be brief, always using clear and concise phrasing.
- Should not contain crucial information. Important information should always be visible, not hidden in tooltips.
- The title should aim to be kept between 1–2 lines of text.
- The body copy should aim to not exceed 4 lines of text.
- The body copy weight can be increased to highlight specific pieces of text within the content.

---

## Overflow

If the content exceeds the available width, the title and body copy wrap to a new line. Content will be left aligned.

{% contentPageImage {
src:"../../../assets/img/components/tooltip/android/overflow.svg",
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
      src: "../../../assets/img/components/tooltip/android/examples-ltr-left.svg",
      alt: "Example of the tooltip component in left-to-right context.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/examples-ltr-right.svg",
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
      src: "../../../assets/img/components/tooltip/android/examples-rtl-left.svg",
      alt: "Example of the tooltip component in right-to-left context.",
      width: 200
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/tooltip/android/examples-rtl-right.svg",
      alt: "Example of the tooltip component in right-to-left context.",
      width: 200
    } %}
  {% endcontentItem %}
{% endcontentLayout %}