---
eleventyNavigation:
    key: Apps
    parent: Segmented Controls
    order: 3
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use when a segment always has to be selected. If a selection isn't required use a Radio Button group.",
            "Limit the number of segments to improve usability.",
            "Test the segmented control on small screen sizes of 320px and with all expected translations."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Do not allow segments to truncate; the entire label should be displayed. If the content doesn't fit within the segments, we recommend using other solutions."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/segmented-controls/apps/anatomy.svg",
    alt: "Annotated diagram of a segmented control component showing its main parts: container, segment, icon, and label.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Container:** Fluid or fixed width.",
        "**Segment:** Displays all options, and highlights the selected segment clearly. One segment must always be selected.",
        "**Icon (Optional):** Icon that can be used to visually support the string.",
        "**Label:** Describes the item you want to select or unselect."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src:"../../../assets/img/components/segmented-controls/apps/variants-default.svg",
    alt: "A default segmented control showing three segments with the first segment selected.",
    width: "200"
} %}

---

## Modifiers

### Segments

The minimum number of segments is two, with a maximum number of four. If you need to use more than four segments then we suggest finding a different solution.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/segmented-controls/apps/modifiers-segments-minimum.svg",
        alt: "A segmented control showing the minimum of two segments.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/segmented-controls/apps/modifiers-segments-maximum.svg",
        alt: "A segmented control showing the maximum of four segments.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Icons

Icons are always positioned to the left of the string and only used if they visually support the label.

{% contentPageImage {
    src:"../../../assets/img/components/segmented-controls/apps/modifiers-icons.svg",
    alt: "A segmented control showing segments with icons displayed to the left of each label.",
    width: "200"
} %}

---

## Sizes

### Height

#### Large

- **Height min:** 48px
- **Height max:** 64px (overflow)
- **Use cases:** Default, and primary action.

#### Small

- **Height min:** 32px
- **Height max:** 52px (overflow)
- **Use cases:** Secondary action, or limited space on the page.

### Width

#### Fixed

Container width is flexible and will fit the individual width of the segments. Segments will retain a 24px left and right padding as default.

{% contentPageImage {
    src:"../../../assets/img/components/segmented-controls/apps/sizes-width-fixed.svg",
    alt: "A segmented control with fixed width, showing segments that fit to their individual content width with 24px padding.",
    width: "200"
} %}

#### Fluid

Left and right segment padding is automated depending on the fluid width of the container.

{% contentPageImage {
    src:"../../../assets/img/components/segmented-controls/apps/sizes-width-fluid.svg",
    alt: "A segmented control with fluid width, showing segments that stretch to fill the container width with automated padding.",
    width: "200"
} %}

---

## Content

### Labels

- Segmented control labels should always be as succinct as possible but clear enough that the user fully understands what is being selected; avoid using multiple words where possible.
- Use sentence-style capitalisation (only the first word in a phrase and any proper nouns capitalised).
- As much as possible, use content with a similar size in each segment to avoid the component feeling unbalanced or disjointed.
- It is highly encouraged that label translations be tested on different screen sizes.

---

## Overflow

{% notification {
    type: "warning",
    message: "**Components will change automatically in product**. To allow for the entire text to be displayed, the component will remove all icons, then the padding of all segments will decrease to 4px. Then multiple words will go to multi-line (max lines of 2) and singular words will show an ellipsis. Teams should test their designs thoroughly to ensure that the entirety of the text is displayed; an ellipsis / truncation should be avoided."
} %}

### Singular word overflow

For designers trying to create more space for a singular word overflow: remove the icons to give the label more room. Where necessary, such as on smaller screens and using more than two segments, we allow the left and right padding to decrease to 4px to allow more space for the label to comfortably fit within the segment. Designers should override our default padding to accommodate this in their designs.

Segments should always be the same height and of equal width, with the label centre aligned within the segments.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/segmented-controls/apps/overflow-singular-word-do.svg",
            width: "200",
            alt: "A segmented control showing the correct handling of a singular word overflow, with icons removed and padding reduced to fit the label."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/segmented-controls/apps/overflow-singular-word-dont.svg",
            width: "200",
            alt: "A segmented control showing the incorrect handling of a singular word overflow, with a label truncated by an ellipsis."
        }]
    }
} %}

### Multiple word overflow

When a group of words extend beyond the available horizontal space, the text automatically wraps onto a new line. This should never exceed two lines.

Segments should always be the same height and of equal width, with the label centre aligned within the segments.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/segmented-controls/apps/overflow-multiple-word-do.svg",
            width: "200",
            alt: "A segmented control showing the correct handling of a multiple word overflow, with text wrapping onto a second line within the segment."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/segmented-controls/apps/overflow-multiple-word-dont.svg",
            width: "200",
            alt: "A segmented control showing the incorrect handling of a multiple word overflow, with text exceeding two lines within the segment."
        }]
    }
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/segmented-controls/apps/interactive-states-default.svg",
        alt: "A segmented control showing the default state with no segment active.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/segmented-controls/apps/interactive-states-active.svg",
        alt: "A segmented control showing the active state with one segment selected.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Disabled</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/segmented-controls/apps/interactive-states-disabled.svg",
        alt: "A segmented control showing the disabled state with all segments visually dimmed and non-interactive.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of segmented control in left-to-right context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/segmented-controls/apps/examples-ltr-1.svg",
        alt: "Example of segmented control delivery toggle in a left-to-right layout.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/segmented-controls/apps/examples-ltr-2.svg",
        alt: "Example of segmented control in the preparing stages of an food order in a left-to-right layout.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of segmented control in RTL context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/segmented-controls/apps/examples-rtl-1.svg",
        alt: "Example of segmented control delivery toggle in a right-to-left layout.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/segmented-controls/apps/examples-rtl-2.svg",
        alt: "Example of segmented control in the preparing stages of an food order in a right-to-left layout.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
