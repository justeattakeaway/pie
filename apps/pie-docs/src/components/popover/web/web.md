---
eleventyNavigation:
    key: Web
    parent: Popover
    order: 2
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use popover to display lists of options.",
            "Ensure content is easy to scan for relevant and actionable information."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use popovers for static content, use tooltips instead.",
            "Don't display critical options in a popover."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/popover/web/anatomy.svg",
    alt: "Annotated diagram of a popover component showing its two main parts: the container and the slot.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Container:** Background container that organises the information.",
        "**Slot:** Open slot for any content required."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src:"../../../assets/img/components/popover/web/variants-default.svg",
    alt: "A default popover component shown open with placeholder content inside.",
    width: "200"
} %}

---

## Size

The width and height of the container is dynamic to the content with a minimum width of 160px. The container retains 8px of padding around the slot.

{% contentPageImage {
    src:"../../../assets/img/components/popover/web/size.svg",
    alt: "Diagram illustrating the dynamic sizing of a popover container, showing minimum width and padding around the slot.",
    width: "200"
} %}

---

## Content

The popover container comes with a slot, so you can add any content you like to the popover. For the internal spacing of the card container, make sure to use PIE spacing tokens. You can find more information about these tokens in the spacing documentation.

{% notification {
  type: "information",
  message: "Find out more about using the slot in the [Figma slot guide](/designers/getting-started/best-practices/#use-figma-slots)."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/popover/web/content.svg",
    alt: "Example of the popover component with the internal spacing highlighted.",
    caption: "Example of the popover component with the internal spacing highlighted.",
    width: "200"
} %}

---

## Placement

### Spacing

Popover should have 8px spacing between the container and the associated UI element.

{% contentPageImage {
    src:"../../../assets/img/components/popover/web/placement-spacing.svg",
    alt: "Diagram showing 8px spacing between a popover container and its associated UI trigger element.",
    width: "200"
} %}

### Position

A popover can open at the top, bottom, left or right depending on the position of the UI trigger on the screen, but it should never be centred.

By default, the popover opens from the bottom. If the trigger appears near to the edge of the interface, the popover may open from a different position to avoid cropping, bleeding off the page or covering important information.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/popover/web/placement-position-bottom-left.svg",
        alt: "Popover opening from the bottom-left position relative to its trigger.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/popover/web/placement-position-bottom-right.svg",
        alt: "Popover opening from the bottom-right position relative to its trigger.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/popover/web/placement-position-top-left.svg",
        alt: "Popover opening from the top-left position relative to its trigger.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/popover/web/placement-position-top-right.svg",
        alt: "Popover opening from the top-right position relative to its trigger.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Behaviours

### Trigger

A trigger should be an interactive UI element, such as an icon button or a button. Popovers are triggered by clicking (on desktop) or tapping (on tablet and mobile) the trigger element.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/popover/web/behaviours-trigger-button.svg",
        alt: "A popover triggered by a button element.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/popover/web/behaviours-trigger-icon-button.svg",
        alt: "A popover triggered by an icon button element.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Only one popover at a time

When a new popover is triggered, the previous one is dismissed.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/popover/web/behaviours-do.svg",
            alt: "Correct example showing only one popover open at a time.",
            width: "200"
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/popover/web/behaviours-dont.svg",
            alt: "Incorrect example showing multiple popovers open simultaneously, which should be avoided.",
            width: "200"
        }]
    }
} %}

---

## Interactions

### Close

Popover remains persistent until the user interacts with its content, clicks/taps the trigger again, or clicks/taps outside of the popover.

{% contentPageImage {
    src:"../../../assets/img/components/popover/web/interactions-close-left.svg",
    alt: "Popover closing when the user clicks outside of it, shown from the left side.",
    caption: "Example of the interactive area in a slot.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/popover/web/interactions-close-right.svg",
    alt: "Popover closing when the user clicks outside of it, shown from the right side.",
    caption: "Example of the interactive area outside the popover.",
    width: "200"
} %}

---

## Examples

Here are some examples of the component in left-to-right context.

### LTR examples

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/popover/web/example-ltr-left.svg",
        alt: "Example of the popover component in a left-to-right layout, positioned on the left.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/popover/web/example-ltr-right.svg",
        alt: "Example of the popover component in a left-to-right layout, positioned on the right.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of the component in right-to-left context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/popover/web/example-rtl-left.svg",
        alt: "Example of the popover component in a right-to-left layout, positioned on the left.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/popover/web/example-rtl-right.svg",
        alt: "Example of the popover component in a right-to-left layout, positioned on the right.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
