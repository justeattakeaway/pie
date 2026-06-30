---
eleventyNavigation:
    key: Android
    parent: List Item
    order: 3
eleventyComputed:
    listItemSizesData: "{% include './list-item-sizes.json' %}"
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Aim to keep the primary text to a single line without wrapping, and the secondary text to two lines if possible.",
            "Use list items to logically group items that follow the same content structure."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Consider a different component or clarify the design if you require lots of text.",
            "Do not use if the list content needs to be nested more than one level deep and becomes overly complex and lengthy."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/anatomy.svg",
alt: "Anatomy of the list item component.",
width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Primary text:** Gives the users an overview of the content, aiming to be contained within one line.",
        "**Secondary text (Optional):** Provides additional detail if required, aiming to be contained within two lines.",
        "**Leading icon with background (Optional):** Non-interactive icon with a background that can be used to visually support the primary text.",
        "**Divider (Optional):** Helps visually define the end of a list item and the beginning of the next one.",
        "**Avatar (Optional):** Placeholder to be replaced with a close-up photo of a person.",
        "**Thumbnail (Optional):** Placeholder to be replaced with an image.",
        "**Leading icon (Optional):** Non-interactive icon that can be used to visually support the primary text.",
        "**Checkbox (Optional):** Allows users to select none, one, or more items from the list. Left or right alignment should be consistent through the pillar.",
        "**Radio (Optional):** Allowing the user to select a single option from the list. Left or right alignment should be consistent through the pillar.",
        "**Payment icon (Optional):** Non-interactive payment icon that is used to visually support a payment method.",
        "**Switch (Optional):** Used to quickly switch between two possible states.",
        "**Trailing icon (Optional):** Interactive icon (i.e. a bin or drag), but is not to be used as a secondary CTA.",
        "**Meta text (Optional):** Highlights basic information about the List item.",
        "**Tag (Optional):** Used to highlight special conditions like 'sold out'."
    ]
} %}

---

## Variants

### Non-interactive

The non-interactive variation should be used when the list item doesn't require any component level interactive states tied to the instance.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/variants-not-interactive.svg",
alt: "List item component in non-interactive variant.",
width: 200
} %}

### Interactive

The interactive variations should be used when the list item requires component level, or nested component level interactive states tied to the instance.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/variants-interactive.svg",
alt: "Examples of the list item component in interactive variant in the default and active interactive states.",
width: 200
} %}

---

## Modifiers

### Compact

The height of the component is decreased to reduce the vertical space, and used when space needs to be saved. If the secondary text is required, don't apply the compact prop.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/modifiers-compact.svg",
alt: "List item component in compact variant.",
width: 200
} %}

### Secondary text

The secondary text can be used to provide additional content that supports the primary text.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/modifiers-secondary-text.svg",
alt: "List item component with secondary text.",
width: 200
} %}

### Bold primary text

There's an option to use bold in the Primary text.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/modifiers-bold-primary-text.svg",
alt: "List item component with bold primary text.",
width: 200
} %}

### Leading content (Non-interactive)

{% notification {
  type: "information",
  message: "**Avatar**, **Icon with background** and **Thumbnail** are not available in the compact size."
} %}

{% contentLayout %}
  {% contentItem %}
  <h4>Avatar</h4>
  <p>Not available in the Compact variant.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-leading-avatar.svg",
      width: "400px",
      alt: "List item component with leading avatar."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any decorative icon can be inserted into the placeholder.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-leading-icon.svg",
      width: "400px",
      alt: "List item component with leading icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Icon with background</h4>
  <p> Any decorative icon can be inserted into the placeholder.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-leading-icon-background.svg",
      width: "400px",
      alt: "List item component with leading icon with background."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Payment method</h4>
  <p>Payment method icon can be selected in properties.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-leading-payment.svg",
      width: "400px",
      alt: "List item component with leading payment method."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Thumbnail

Not available in the Compact variant.

{% contentPageImage {
src: "../../../../assets/img/components/list-item/list-item/android/modifiers-leading-thumbnail.svg",
alt: "List item component with leading thumbnail.",
width: 200
} %}

### Leading content (Interactive)

{% notification {
  type: "information",
  message: "**Avatar**, **Icon with background** and **Thumbnail** are not available in the compact size."
} %}

{% notification {
  type: "information",
  message: "All form elements: **Checkbox**, **Radio** and **Switch** display their own interactive states rather than the list item container."
} %}

{% contentLayout %}
  {% contentItem %}
  <h4>Avatar</h4>
  <p>Not available in the Compact variant.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-leading-avatar.svg",
      width: "400px",
      alt: "Interactive list item component with leading avatar."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Checkbox</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-leading-checkbox.svg",
      width: "400px",
      alt: "Interactive list item component with leading checkbox."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any decorative icon can be inserted into the placeholder.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-leading-icon.svg",
      width: "400px",
      alt: "Interactive list item component with leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Icon with background</h4>
  <p>Any decorative icon can be inserted into the placeholder.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-leading-icon-background.svg",
      width: "400px",
      alt: "Interactive list item component with leading icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Payment method</h4>
  <p>Payment method icon can be selected in properties..</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-leading-payment.svg",
      width: "400px",
      alt: "Interactive list item component with leading payment method."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Radio</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-leading-radio.svg",
      width: "400px",
      alt: "Interactive list item component with leading radio."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Thumbnail

Not available in the Compact variant.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-leading-thumbnail.svg",
alt: "Interactive list item component with leading thumbnail.",
width: 200
} %}

### Trailing content (Non-interactive)

{% contentLayout %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any decorative icon can be inserted into the placeholder.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-trailing-icon.svg",
      width: "400px",
      alt: "Interactive list item component with trailing icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Meta text</h4>
  <p>Highlights additional basic information about the List item.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-trailing-meta.svg",
      width: "400px",
      alt: "Interactive list item component with trailing meta text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Tag

Alignment should be consistent through the pillar.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/modifiers-trailing-tag.svg",
alt: "Interactive list item component with trailing tag.",
width: 200
} %}

### Trailing content (Interactive)

{% notification {
  type: "information",
  message: "All form elements: **Checkbox**, **Radio** and **Switch** display their own interactive states rather than the list item container."
} %}

{% contentLayout %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any decorative icon can be inserted into the placeholder.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-trailing-icon.svg",
      width: "400px",
      alt: "Interactive list item component with trailing icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Checkbox</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-trailing-checkbox.svg",
      width: "400px",
      alt: "Interactive list item component with trailing checkbox."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Meta text</h4>
  <p>Highlights additional basic information about the List item.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-trailing-meta.svg",
      width: "400px",
      alt: "Interactive list item component with trailing meta text."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Radio</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-trailing-radio.svg",
      width: "400px",
      alt: "Interactive list item component with trailing radio."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Switch</h4>
  <p>Used to quickly switch between two possible states.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-trailing-switch.svg",
      width: "400px",
      alt: "Interactive list item component with trailing switch."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Tag</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/modifiers-interactive-trailing-tag.svg",
      width: "400px",
      alt: "Interactive list item component with trailing tag."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Divider

The divider is used to visually separate individual list items from each other. Dividers should never be used on the last item within a group.

> IMAGE PLACEHOLDER

---

## Overrides

### Variants

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/overrides-variants.svg",
alt: "Overview of overrides available at variant level for the Avatar, Tag and Icon with background.",
width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Avatar:** The Avatar's variants can be overridden.",
        "**Tag:** The Tag's variants can be overridden.",
        "**Icon with background:** The Icon with background's variants can be overridden."
    ]
} %}

### Alignment / Layout

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/overrides-alignment.svg",
alt: "Overview of alignment overrides available.",
width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Alignment:** The vertical alignment of both leading and trailing content can be adjusted to centre alignment. However, both must maintain the same alignment.",
        "**Vertical spacing:** Vertical padding can be removed when being used within a component e.g. Modal, Bottom sheet."
    ]
} %}

### Selected state

{% notification {
  type: "information",
  message: "Find more information in the [Selected state patterns documentation](https://www.pie.design/patterns/selected-state/)."
} %}

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/overrides-selected-state.svg",
alt: "Overview of selected state overrides available.",
width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Border colour** The border colour token can be overridden with `$color-border-selected`.",
        "**Icon colour:** The icon colour token can be overridden with `$color-content-brand-solid`."
    ]
} %}

---

## Layout

### Stacking

List items can be vertically stacked and horizontally, and if dividers are being used; it is suggested that the last item's divider is removed.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/layout-vertical.svg",
alt: "Example of a group of list item components stacked vertically.",
width: 200
} %}

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/layout-horizontal.svg",
alt: "Example of a group of list item components stacked horizontally in two columns.",
width: 200
} %}

### Form controls

The radio form controls should always be used within a group, allowing users to make a single selection from a predefined set of options.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/layout-form-controls.svg",
alt: "Example of a group of list item components with form controls.",
width: 200
} %}

---

## Sizes

Depending on the properties applied to the component, the minimum height of the component fluctuates.

<style>
  .c-listItem-sizes .c-simpleTable { table-layout: fixed; }
</style>
<div class="c-listItem-sizes">
{% simpleTable {
  tableData: listItemSizesData,
  isFullWidth: true
} %}
</div>

---

## Placement

### Inset container

List items at both wide & narrow can be full width of an inset container.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/placement-wide.svg",
alt: "Example of a group of list item components in a wide screen size in an inset container.",
width: 200
} %}

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/placement-narrow.svg",
alt: "Example of a group of list item components in a narrow screen size in an inset container.",
width: 200
} %}

### Device container

Only List items at narrow have the option to be the full width of the device.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/placement-device.svg",
alt: "Example of a group of list item components in a narrow screen size in a device container.",
width: 200
} %}

---

## Interactions

The entire container for interactive variants is clickable.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/interactions.svg",
alt: "Example of the interactive area in list item components.",
width: 200
} %}

---

## Overflow

### Primary and secondary text

The recommendation is to keep the copy short and concise to allow users to easily browse. If the length of the primary or secondary text exceeds the available horizontal space, the content will wrap onto a new line with no maximum.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/overflow-primary.svg",
alt: "Example of a group of list item components with primary and secondary text overflow.",
width: 200
} %}

### Trailing content

If the trailing content contains a text element, it's maximum width is 1/3 of the available space. If the width is exceeded the content will wrap onto a new line.

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/overflow-trailingcontent-1.svg",
alt: "Example of a group of list item components with trailing meta text overflow.",
width: 200
} %}

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/overflow-trailingcontent-2.svg",
alt: "Example of a group of list item components with trailing tag text overflow.",
width: 200
} %}

---

## States

The list item allows for two states: unselected and selected. By default, the `$color-border-select-brand` is used.

### Unselected

{% contentPageImage {
src:"../../../../assets/img/components/list-item/list-item/android/states-unselected.svg",
alt: "Example of a group of list item components in the unselected state.",
width: 200
} %}

### Selected

{% contentLayout %}
  {% contentItem %}
  <h4>Form control variants</h4>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/states-selected-form.svg",
      width: "300px",
      alt: "Example of list item components in the selected state with form control variants."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>All other variants</h4>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/states-selected-all-variants.svg",
      width: "300px ",
      alt: "Example of list item components in the selected state in all variants except form control."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive states

The interactive variation includes all interactive states, while the non-interactive variation only includes the default and disabled states.

{% notification {
  type: "information",
  message: "All form elements: **Checkbox**, **Radio** and **Switch** display their own interactive states rather than the list item container."
} %}

{% contentLayout %}
  {% contentItem %}
  <h3>Default</h3>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/interactive-states-default.svg",
      width: "300px",
      alt: "Examples of list item components in the default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Active</h3>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/interactive-states-active.svg",
      width: "300px ",
      alt: "Examples of list item components in the active state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Disabled

 {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/interactive-states-disabled.svg",
      width: "300px ",
      alt: "Examples of list item components in the disabled state."
    } %}

---

## Examples

### LTR example

Here are some examples of a list item component in LTR context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/examples-ltr-1.svg",
      width: "300px",
      alt: "Examples of list item components in left-to-right context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/examples-ltr-2.svg",
      width: "300px ",
      alt: "Examples of list item components in left-to-right context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL example

Here are some examples of a list item component in RTL context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/examples-rtl-1.svg",
      width: "300px",
      alt: "Examples of list item components in right-to-left context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/android/examples-rtl-2.svg",
      width: "300px ",
      alt: "Examples of list item components in right-to-left context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Accessibility

### Text scaling

Text with critical information should wrap to the next line to ensure understandability. Truncation might happen but it should be kept to a minimum.

In case truncation happens on important information offer an alternative for the user to read the full content. For example, add a “see more” link button to expand the container and provide access to the content.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../../assets/img/components/list-item/list-item/android/text-scaling-do.svg",
            width: "256px",
            alt: "Example of list item component with text scaling applied correctly."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../../assets/img/components/list-item/list-item/android/text-scaling-dont.svg",
            width: "256px",
            alt: "Example of list item component with text scaling applied incorrectly."
        }]
    }
} %}

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [Text scaling documentation](https://www.pie.design/accessibility/text-scaling/) for more information."
} %}
