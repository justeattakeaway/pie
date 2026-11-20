---
eleventyNavigation:
    key: Android
    parent: List Item
    order: 3
eleventyComputed:
    listItemSizesData: "{% include './list-item-sizes.json' %}"
    shouldShowContents: true
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
src:"../../../assets/img/components/list-item/android/anatomy.svg",
alt: "Anatomy of the list item component.",
width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Primary text:** Gives the users an overview of the content, aiming to be contained within one line.",
        "**Secondary content (Optional):** Provides additional detail if required, aiming to be contained within two lines.",
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
        "**Tag (Optional):** Used to highlight special conditions like 'sold out'.",
        "**Badge (Optional):** Use to display a numeric value or count."
    ]
} %}

---

## Variants

### Non-interactive

The non-interactive variation should be used when the list item doesn't require any component level interactive states tied to the instance.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/variants-non-interactive.svg",
alt: "List item component in non-interactive variant.",
width: 200
} %}

### Interactive - Form selection

Includes form elements such as checkbox, radio or switch, which allows the user to make one or multiple choices.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/variants-interactive-form-selection.svg",
alt: "Examples of the list item component in interactive variant with form selections.",
width: 200
} %}

### Interactive - Navigation

Functions as a link to redirect the user to a new destination.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/variants-interactive-navigation.svg",
alt: "Examples of the list item component with navigations.",
width: 200
} %}

### Interactive - Action

Functions as a button to trigger an immediate operation or event.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/variants-interactive-action.svg",
alt: "Examples of the list item component with actions.",
width: 200
} %}

---

## Modifiers

### Compact

{% notification {
  type: "information",
  message: "The height of the component is decreased to reduce the vertical space, and used when space needs to be saved. If the secondary text is required, don't apply the compact prop."
} %}

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/modifiers-compact.svg",
alt: "List item component in compact variant.",
width: 200
} %}

### Secondary content

Use secondary content to add supporting details, such as text and tag, alongside the primary text.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/modifiers-secondary-content.svg",
alt: "List item component with secondary content.",
width: 200
} %}

### Bold primary text

There's an option to use bold in the Primary text.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/modifiers-bold-primary-text.svg",
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
      src: "../../../assets/img/components/list-item/android/modifiers-leading-avatar.svg",
      width: "400px",
      alt: "List item component with leading avatar."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any decorative icon can be inserted into the placeholder.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-leading-icon.svg",
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
      src: "../../../assets/img/components/list-item/android/modifiers-leading-icon-background.svg",
      width: "400px",
      alt: "List item component with leading icon with background."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Payment method</h4>
  <p>Payment method icon can be selected in properties.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-leading-payment.svg",
      width: "400px",
      alt: "List item component with leading payment method."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Thumbnail</h4>
  <p> Not available in the Compact variant.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-leading-thumbnail.svg",
      width: "400px",
      alt: "List item component with leading thumbnail."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Badge</h4>
  <p>Use badge to display a numeric value or count.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-leading-badge.svg",
      width: "400px",
      alt: "List item component with leading badge."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

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
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-leading-avatar.svg",
      width: "400px",
      alt: "Interactive list item component with leading avatar."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Checkbox</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-leading-checkbox.svg",
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
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-leading-icon.svg",
      width: "400px",
      alt: "Interactive list item component with leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Icon with background</h4>
  <p>Any decorative icon can be inserted into the placeholder.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-leading-icon-background.svg",
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
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-leading-payment.svg",
      width: "400px",
      alt: "Interactive list item component with leading payment method."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Radio</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-leading-radio.svg",
      width: "400px",
      alt: "Interactive list item component with leading radio."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Thumbnail</h4>
  <p> Not available in the Compact variant.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-leading-thumbnail.svg",
      width: "400px",
      alt: "List item component with leading thumbnail."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Badge</h4>
  <p>Use badge to display a numeric value or count.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-leading-badge.svg",
      width: "400px",
      alt: "List item component with leading badge."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Trailing content (Non-interactive)

{% contentLayout %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any decorative icon can be inserted into the placeholder.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-trailing-icon.svg",
      width: "400px",
      alt: "Interactive list item component with trailing icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Meta text</h4>
  <p>Highlights additional basic information about the List item.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-trailing-meta.svg",
      width: "400px",
      alt: "Interactive list item component with trailing meta text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Tag</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-trailing-tag.svg",
      width: "400px",
      alt: "Interactive list item component with trailing tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Badge</h4>
  <p>Use badge to display a numeric value or count.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-trailing-badge.svg",
      width: "400px",
      alt: "Interactive list item component with trailing badge."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

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
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-trailing-icon.svg",
      width: "400px",
      alt: "Interactive list item component with trailing icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Checkbox</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-trailing-checkbox.svg",
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
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-trailing-meta.svg",
      width: "400px",
      alt: "Interactive list item component with trailing meta text."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Radio</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-trailing-radio.svg",
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
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-trailing-switch.svg",
      width: "400px",
      alt: "Interactive list item component with trailing switch."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Tag</h4>
  <p>Alignment should be consistent through the pillar.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-trailing-tag.svg",
      width: "400px",
      alt: "Interactive list item component with trailing tag."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Badge</h4>
  <p>Use badge to display a numeric value or count.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/modifiers-interactive-trailing-badge.svg",
      width: "400px",
      alt: "Interactive list item component with trailing badge."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Divider

The divider is used to visually separate individual list items from each other. Dividers should never be used on the last item within a group.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/divider.svg",
alt: "Example of three list item components stacked vertically with dividers.",
width: 200
} %}

---

## Overrides

### Variants

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/overrides-variants.svg",
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
src:"../../../assets/img/components/list-item/android/overrides-alignment.svg",
alt: "List item components with structure markers showing vertical alignment, horizontal padding and trailing content alignment overrides.",
width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Vertical alignment:** The vertical alignment of both leading and trailing content can be adjusted to centre alignment. However, both must maintain the same alignment.",
        "**Horizontal spacing:** Horizontal padding can be removed when being used within a component e.g. Modal, bottom sheet.",
        "**Trailing content alignment:** Trailing content can be aligned to the right edge or hug the body content, maintaining 12px of spacing between elements."
    ]
} %}

### Selected state

Prioritise using the selected state from form control variants. The following recommendation applies to the navigation variant only.

{% notification {
  type: "information",
  message: "Find more information in the [Selected state patterns documentation](/patterns/selected-state/)."
} %}

#### Navigation

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/overrides-selected-state.svg",
alt: "List item components with icon colour and tick icon overrides in selected state.",
width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon colour** The icon colour token can be overridden with `$color-content-brand-solid ` to provide an additional visual cue.",
        "**Tick icon:** Highly recommended using the tick icon to indicate the selected page or link. Optional when the distinction between states is clear."
    ]
} %}

### Colour

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/overrides-colour.svg",
alt: "List item components with icon colour override options.",
width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Trailing icon colour - Positive:** The icon colour token can be overridden to `$color-content-positive` to convey positive information for the user.",
        "**Trailing icon colour - Error** The icon colour token can be overridden to `$color-content-error` to highlight critical information for the user. Please review whether an icon alone is sufficient, or whether an error notification or toast would communicate the message more effectively."
    ]
} %}

---

## Layout

### Stacking

List items can be vertically stacked and horizontally, and if dividers are being used; it is suggested that the last item's divider is removed.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/layout-vertical.svg",
alt: "Example of a group of list item components stacked vertically.",
width: 200
} %}

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/layout-horizontal.svg",
alt: "Example of a group of list item components stacked horizontally in two columns.",
width: 200
} %}

### Form controls

The radio form controls should always be used within a group, allowing users to make a single selection from a predefined set of options.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/layout-form-controls.svg",
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
src:"../../../assets/img/components/list-item/android/placement-wide.svg",
alt: "Example of a group of list item components in a wide screen size in an inset container.",
width: 200
} %}

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/placement-narrow.svg",
alt: "Example of a group of list item components in a narrow screen size in an inset container.",
width: 200
} %}

### Device container

Only List items at narrow have the option to be the full width of the device.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/placement-device.svg",
alt: "Example of a group of list item components in a narrow screen size in a device container.",
width: 200
} %}

---

## Interactions

### Interactive variants

The entire container for interactive variants is clickable.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/interactions.svg",
alt: "Example of the interactive area in list item components.",
width: 200
} %}

---

## Overflow

### Primary and secondary text

The recommendation is to keep the copy short and concise to allow users to easily browse. If the length of the primary or secondary text exceeds the available horizontal space, the content will wrap onto a new line with no maximum.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/overflow-primary.svg",
alt: "Example of a group of list item components with primary and secondary text overflow.",
width: 200
} %}

### Trailing content

If the trailing content contains a text element, it's maximum width is 1/3 of the available space. If the width is exceeded the content will wrap onto a new line.

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/overflow-trailingcontent-1.svg",
alt: "Example of a group of list item components with trailing meta text overflow.",
width: 200
} %}

{% contentPageImage {
src:"../../../assets/img/components/list-item/android/overflow-trailingcontent-2.svg",
alt: "Example of a group of list item components with trailing tag text overflow.",
width: 200
} %}

---

## States

Interactive list items have two states: unselected and selected. How the selected state is presented depends on the interaction type.

### Form selection

When a form control is present, the form control element indicates the selected state.

{% contentLayout %}
  {% contentItem %}
  <h4>Unselected</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/states-form-selection-unselected.svg",
      width: "360px",
      alt: "Form selection list items with unselected checkbox, radio and switch form controls."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Selected</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/states-form-selection-selected.svg",
      width: "360px",
      alt: "Form selection list items with selected checkbox, radio and switch form controls."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Navigation

In navigation, the currently selected item should be indicated using bold text, with an optional tick icon. Apply this convention consistently throughout the experience.

{% contentLayout %}
  {% contentItem %}
  <h4>Unselected</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/states-navigation-unselected.svg",
      width: "342px",
      alt: "A country list with regular weight primary text and no tick icons."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Selected</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/states-navigation-selected.svg",
      width: "342px",
      alt: "A country list with Germany selected using bold text and a trailing tick icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

If bold text is used for unselected items, a trailing tick icon should always be present to clearly distinguish them from the selected state. Additionally, the icon can use a brand colour to provide an additional visual cue and reinforce the distinction between states.

{% contentLayout %}
  {% contentItem %}
  <h4>Unselected</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/states-navigation-unselected-bold.svg",
      width: "342px",
      alt: "A country list with bold primary text on all items and no tick icons."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Selected</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/states-navigation-selected-bold.svg",
      width: "342px",
      alt: "A country list with bold primary text on all items and Germany distinguished by a trailing tick icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Action

Action list items are selectable and users can interact with them, but they do not require a persistent selected state. Selecting an action triggers an immediate outcome rather than indicating which item is currently selected.

#### No selected state

{% contentPageImage {
    src:"../../../assets/img/components/list-item/android/states-action-no-selected-state.svg",
    alt: "An icon button with an opened popover menu containing the action list items Deactivate, Edit charges and Delete area.",
    width: 247
} %}

---

## Interactive states

The interactive variation includes all interactive states, while the non-interactive variation only includes the default state.

{% notification {
  type: "information",
  message: "All form elements: **Checkbox**, **Radio** and **Switch** display their own interactive states alongside the container's active overlay."
} %}

{% contentLayout %}
  {% contentItem %}
  <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/interactive-states-default.svg",
      width: "300px",
      alt: "Examples of list item components in the default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/interactive-states-active.svg",
      width: "300px ",
      alt: "Examples of list item components in the active state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Disabled

 {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/interactive-states-disabled.svg",
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
      src: "../../../assets/img/components/list-item/android/examples-ltr-1.svg",
      width: "300px",
      alt: "Examples of list item components in left-to-right context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/examples-ltr-2.svg",
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
      src: "../../../assets/img/components/list-item/android/examples-rtl-1.svg",
      width: "300px",
      alt: "Examples of list item components in right-to-left context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/list-item/android/examples-rtl-2.svg",
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
            src: "../../../assets/img/components/list-item/android/text-scaling-do.svg",
            width: "256px",
            alt: "Example of list item component with text scaling applied correctly."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/list-item/android/text-scaling-dont.svg",
            width: "256px",
            alt: "Example of list item component with text scaling applied incorrectly."
        }]
    }
} %}

{% notification {
  type: "neutral",
  iconName: "link",
  message: "Check out the [Text scaling documentation](/accessibility/text-scaling/) for more information."
} %}
