---
eleventyNavigation:
    key: Web
    parent: List Item
    order: 2
eleventyComputed:
    listItemSizesData: "{% include './list-item-sizes.json' %}"
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use to logically group items that follow the same content structure."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Do not use if the list content needs to be nested more than one level deep and becomes overly complex and lengthy."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/anatomy.svg",
    alt: "Anatomy of the list item component, showing numbered parts including primary text, secondary text, divider, icon, icon with background, avatar, payment method icon, thumbnail, checkbox, radio, interactive icon, meta text, tag and switch.",
    width: 880
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Primary text:** Provides an overview of the content.",
        "**Secondary text (Optional):** Provides additional detail if required.",
        "**Divider (Optional):** Visually defines the end of one list item and the beginning of the next.",
        "**Icon (Optional):** Non-interactive icon that visually supports the primary text.",
        "**Icon with background (Optional):** Non-interactive icon that visually supports the primary text.",
        "**Avatar (Optional):** Visually supports the primary text if it references an individual or business.",
        "**Payment method icon (Optional):** Non-interactive payment method icon that supports the primary text.",
        "**Thumbnail (Optional):** Small image or media content that visually supports the primary text.",
        "**Checkbox (Optional):** Interactive element that allows users to select or deselect options from a list of choices.",
        "**Radio (Optional):** Interactive element that allows users to select a single option from a predefined set of choices.",
        "**Icon - interactive (Optional):** Interactive icon that indicates an action.",
        "**Meta text (Optional):** Provides more information about the context, status, or attributes of the primary content.",
        "**Tag (Optional):** Visual element used to represent and categorise information, only non-interactive variants permitted.",
        "**Switch (Optional):** Interactive element that allows users to switch between two states."
    ]
} %}

---

## Variants

### Non-interactive

The non-interactive variation should be used when the list item doesn't require any component level interactive states tied to the instance.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/variants-non-interactive.svg",
    alt: "A wallet list showing Just Eat Pay, Just Eat+ and Account credit items with price tags, and a View credit activity button below.",
    width: 345
} %}

### Interactive - Form selection

Includes form elements such as checkbox, radio or switch, which allows the user to make one or multiple choices.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/variants-interactive-form-selection.svg",
    alt: "Two examples of form selection list items: a multi-selection checkbox list asking why an article wasn't helpful, and a single-selection radio list for choosing between Credit card, Apple Pay and PayPal.",
    width: 829
} %}

### Interactive - Navigation

Functions as a link to redirect the user to a new destination.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/variants-interactive-navigation.svg",
    alt: "A Partner Hub side navigation panel showing a Management menu with list items such as Menu/Items, Item availability, History, Invoices, Payments, Pending charges and Tips.",
    width: 351
} %}

### Interactive - Action

Functions as a button to trigger an immediate operation or event.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/variants-interactive-action.svg",
    alt: "An icon button with an opened popover menu containing the action list items Deactivate, Edit charges and Delete area.",
    width: 247
} %}

---

## Modifiers

### Compact

The height of the component is decreased to reduce the vertical space, and used when space needs to be saved.

{% notification {
  type: "information",
  message: "If the secondary text is required, don't apply the compact prop."
} %}

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/modifiers-compact.svg",
    alt: "List item component in compact height.",
    width: 360
} %}

### Secondary text

The secondary text can be used to provide additional content that supports the primary text.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/modifiers-secondary-text.svg",
    alt: "List item component with primary and secondary text.",
    width: 360
} %}

### Bold primary text

There's an option to use bold in the primary text.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/modifiers-bold-primary-text.svg",
    alt: "List item component with bold primary text.",
    width: 360
} %}

### Leading content

#### Non-interactive

{% notification {
  type: "information",
  message: "**Avatar**, **icon with background** and **thumbnail** are not available in the compact size."
} %}

{% contentLayout %}
  {% contentItem %}
  <h4>Avatar</h4>
  <p>Any avatar variant can be used within the slot.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-leading-avatar.svg",
      width: "360px",
      alt: "List item component with leading avatar."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any visually supporting icon can be used within the slot.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-leading-icon.svg",
      width: "360px",
      alt: "List item component with leading icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Icon with background</h4>
  <p>A supporting icon can be used within the slot.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-leading-icon-background.svg",
      width: "360px",
      alt: "List item component with leading icon with background."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Payment method</h4>
  <p>Any payment method icon can be used within the slot.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-leading-payment.svg",
      width: "360px",
      alt: "List item component with leading payment method icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Thumbnail</h4>
  <p>Any image can be used within the thumbnail component.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-leading-thumbnail.svg",
      width: "360px",
      alt: "List item component with leading thumbnail."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Interactive

{% notification {
  type: "information",
  message: "**Avatar**, **icon with background** and **thumbnail** are not available in the compact size."
} %}

{% notification {
  type: "information",
  message: "All form elements: **checkbox**, **radio** and **switch** display their own interactive states rather than the list item container."
} %}

{% notification {
  type: "information",
  message: "Only one type of form control should be used within a single list."
} %}

{% contentLayout %}
  {% contentItem %}
  <h4>Avatar</h4>
  <p>Any avatar variant can be used within the slot.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-leading-avatar.svg",
      width: "360px",
      alt: "Interactive list item component with leading avatar."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any visually supporting icon can be used within the slot.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-leading-icon.svg",
      width: "360px",
      alt: "Interactive list item component with leading icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Icon with background</h4>
  <p>Any visually supporting icon can be used within the slot.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-leading-icon-background.svg",
      width: "360px",
      alt: "Interactive list item component with leading icon with background."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Payment method</h4>
  <p>Any payment method icon can be used within the slot.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-leading-payment.svg",
      width: "360px",
      alt: "Interactive list item component with leading payment method icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Thumbnail</h4>
  <p>Any image can be used within the thumbnail component.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-leading-thumbnail.svg",
      width: "360px",
      alt: "Interactive list item component with leading thumbnail."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Checkbox</h4>
  <p>Checkboxes should be used consistently, either leading or trailing, and allow the user to select any number of list items from a group.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-leading-checkbox.svg",
      width: "360px",
      alt: "Interactive list item component with leading checkbox."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Radio</h4>
  <p>Radio buttons should be used consistently, either leading or trailing, and allow the user to select one list item from a group.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-leading-radio.svg",
      width: "360px",
      alt: "Interactive list item component with leading radio."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Trailing content

#### Non-interactive

{% contentLayout %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any functional icon can be used within the slot.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-trailing-icon.svg",
      width: "360px",
      alt: "List item component with trailing icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Meta text</h4>
  <p>Provides more information about the context, status, or attributes of the primary content.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-trailing-meta.svg",
      width: "360px",
      alt: "List item component with trailing meta text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Tag</h4>
  <p>Non-interactive variant used to visually represent and categorise information.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-trailing-tag.svg",
      width: "360px",
      alt: "List item component with trailing tag."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Interactive

{% contentLayout %}
  {% contentItem %}
  <h4>Icon</h4>
  <p>Any functional icon can be used within the slot.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-trailing-icon.svg",
      width: "360px",
      alt: "Interactive list item component with trailing icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Meta text</h4>
  <p>Provides more information about the context, status, or attributes of the primary content.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-trailing-meta.svg",
      width: "360px",
      alt: "Interactive list item component with trailing meta text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Tag</h4>
  <p>Non-interactive variant used to visually represent and categorise information.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-trailing-tag.svg",
      width: "360px",
      alt: "Interactive list item component with trailing tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Checkbox</h4>
  <p>Checkboxes should be used consistently, either leading or trailing, and allow the user to select any number of list items from a group.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-trailing-checkbox.svg",
      width: "360px",
      alt: "Interactive list item component with trailing checkbox."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Radio</h4>
  <p>Radio buttons should be used consistently, either leading or trailing, and allow the user to select one list item from a group.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-trailing-radio.svg",
      width: "360px",
      alt: "Interactive list item component with trailing radio."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Switch</h4>
  <p>Allows the user to switch between two states.</p>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/modifiers-interactive-trailing-switch.svg",
      width: "360px",
      alt: "Interactive list item component with trailing switch."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Divider

The divider is optional. It is used to visually separate individual list items from each other. Dividers should never be used on the last item within a group.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/divider.svg",
    alt: "Three list item components stacked vertically, the first two separated by dividers.",
    width: 360
} %}

---

## Overrides

### Variants

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/overrides-variants.svg",
    alt: "List item components with numbered markers indicating the avatar, tag and icon with background overrides.",
    width: 520
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Avatar:** The [Avatar's](https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/-Core--Web-Component-Documentation--PIE-3-?node-id=14771-37976) variants can be overridden.",
        "**Tag:** The [Tag's](/components/tag/web/) variants can be overridden.",
        "**Icon with background:** The [Icon with background's](https://www.figma.com/design/k7gPJ4MZRUj4nlZK2hL0Op/-Core--Icons--PIE-3-?node-id=21149-20620) variants can be overridden."
    ]
} %}

### Alignment / Layout

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/overrides-alignment.svg",
    alt: "List item components with structure markers showing vertical alignment and horizontal padding overrides.",
    width: 799
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Alignment:** The vertical alignment of both leading and trailing content can be adjusted to centre alignment. However, both must maintain the same alignment.",
        "**Vertical spacing:** Vertical padding can be removed when being used within a component e.g. Modal, bottom sheet."
    ]
} %}

### Selected state

#### Navigation

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/overrides-selected-state.svg",
    alt: "A country list showing Germany selected with bold text and a trailing tick icon, compared with the unselected state.",
    width: 760
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon colour:** The icon colour token can be overridden with `$color-content-brand-solid` to provide an additional visual cue.",
        "**Tick icon:** Highly recommended using the tick icon to indicate the selected page or link. Optional when the distinction between states is clear."
    ]
} %}

---

## Layout

### Groups

List items can be stacked vertically to form a group, and groups can also be paired horizontally.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/layout-vertical.svg",
      width: "360px",
      alt: "A group of three list item components stacked vertically."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/layout-horizontal.svg",
      width: "424px",
      alt: "Two groups of three list item components paired horizontally."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Form controls

The radio form controls should always be used within a group, allowing users to make a single selection from a predefined set of options.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/layout-form-controls.svg",
    alt: "A group of three list item components with leading radio form controls.",
    width: 360
} %}

---

## Sizes

### Height

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

## Interactions

### Interactive

The entire container for interactive variants is clickable.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/interactions.svg",
    alt: "Three interactive list item components with an outline showing the clickable container area.",
    width: 360
} %}

---

## Overflow

### Primary and secondary text

The recommendation is to keep the copy short and concise to allow users to easily browse. If the length of the primary or secondary text exceeds the available horizontal space, the content will wrap onto a new line with no maximum.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/overflow-primary.svg",
    alt: "List item component with long primary and secondary text wrapping onto new lines.",
    width: 360
} %}

### Trailing content

If the trailing content contains a text element, its maximum width is 1/3 of the available space. If the width is exceeded the content will wrap onto a new line.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/overflow-trailingcontent.svg",
    alt: "List item component with trailing meta text wrapping, and shaded overlays showing the interactive area split into two thirds and one third.",
    width: 360
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
      src: "../../../../assets/img/components/list-item/list-item/web/states-form-selection-unselected.svg",
      width: "360px",
      alt: "Form selection list items with unselected checkbox, radio and switch form controls."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Selected</h4>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/states-form-selection-selected.svg",
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
      src: "../../../../assets/img/components/list-item/list-item/web/states-navigation-unselected.svg",
      width: "342px",
      alt: "A country list with regular weight primary text and no tick icons."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Selected</h4>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/states-navigation-selected.svg",
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
      src: "../../../../assets/img/components/list-item/list-item/web/states-navigation-unselected-bold.svg",
      width: "342px",
      alt: "A country list with bold primary text on all items and no tick icons."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Selected</h4>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/states-navigation-selected-bold.svg",
      width: "342px",
      alt: "A country list with bold primary text on all items and Germany distinguished by a trailing tick icon."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Action

Action list items are selectable and users can interact with them, but they do not require a persistent selected state. Selecting an action triggers an immediate outcome rather than indicating which item is currently selected.

#### No selected state

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/states-action-no-selected-state.svg",
    alt: "An icon button with an opened popover menu containing the action list items Deactivate, Edit charges and Delete area.",
    width: 247
} %}

---

## Interactive states

The interactive variation includes all interactive states, while the non-interactive variation only includes the default state.

{% contentLayout %}
  {% contentItem %}
  <h3>Default</h3>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/interactive-states-default.svg",
      width: "360px",
      alt: "List item components in the default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Hover</h3>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/interactive-states-hover.svg",
      width: "360px",
      alt: "List item components in the hover state, with a subtle background tint on the container.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h3>Active</h3>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/interactive-states-active.svg",
      width: "360px",
      alt: "List item components in the active state, with a stronger background tint on the container."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Focus</h3>
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/interactive-states-focus.svg",
      width: "360px",
      alt: "List item components in the focus state, with a focus ring around the container."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Disabled

Navigation type does not support a disabled state.

{% contentPageImage {
    src:"../../../../assets/img/components/list-item/list-item/web/interactive-states-disabled.svg",
    width: "360px",
    alt: "List item components in the disabled state, greyed out and not interactive."
} %}

---

## Examples

### LTR examples

Here are some examples of list items in left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/examples-ltr-1.svg",
      width: "360px",
      alt: "A support menu with navigation list items for GPS issues, Pause / end shift early, Order disappeared and Earnings."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/examples-ltr-2.svg",
      width: "360px",
      alt: "A menu list with radio selection for Medium fries, Large fries and Side salad, showing kilojoule details and price meta text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of list items in right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/examples-rtl-1.svg",
      width: "360px",
      alt: "A support menu with navigation list items in Hebrew for GPS issues, pausing or ending a shift early, a disappeared order and earnings."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../../assets/img/components/list-item/list-item/web/examples-rtl-2.svg",
      width: "360px",
      alt: "A menu list with radio selection in Hebrew for medium fries, large fries and side salad, showing kilojoule details and price meta text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
