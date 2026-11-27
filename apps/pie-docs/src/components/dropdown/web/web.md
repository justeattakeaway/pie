---
eleventyNavigation:
    key: Web
    parent: Dropdown
    order: 2
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them mainly to perform actions, and for searching or filtering content.",
            "Use them when screen real estate is limited.",
            "Use clear labels."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "If most of your experience is form-based or frequently used on mobile platforms, use [Select Input](/components/select-input/) instead.",
            "Don't use Dropdowns when there are fewer than three options. Use [Radio Buttons](/components/radio-group/) instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/anatomy.svg",
    alt: "Annotated diagram of a closed dropdown component showing its main parts. Numbers 1 to 7 indicate the form label, dropdown field, leading icon, placeholder and selection text, chevron icon, clear icon and assistive text.",
    width: 480
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (optional):** The [form label](/components/form-label/) provides a clear and concise information to describe the contents of the field.",
        "**Dropdown field:** Acts as the main interactive area of the component, where the user's selection and controls for the Dropdown live.",
        "**Leading icon:** Visually supports the options.",
        "**Placeholder/Selection:** Indicates the placeholder text or option selected by the user.",
        "**Chevron icon:** Used to indicate there is additional content revealed when interacting with the dropdown.",
        "**Clear icon (optional):** Appears upon user selection, and clears the selection when clicked.",
        "**Assistive text (optional):** The [assistive text](/components/assistive-text/) provides additional instructional information, as well as error and success messages."
    ]
} %}

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/anatomy-2.svg",
    alt: "Annotated diagram of two open dropdowns side by side: a single select dropdown with a focus ring on the field, and a multi select dropdown with a chip, checkboxes and a scrollbar. Numbers 8 to 14 indicate the focus ring, multi select chip, dropdown popover, option, checkbox, check icon and scrollbar.",
    width: 817
} %}

{% list {
    type: listTypes.ordered,
    start: 8,
    items: [
        "**Focus ring:** Used to indicate the user is currently interacting with the Dropdown.",
        "**Multi-select chip:** Used to indicate the number of selected items in all multiple selection variants.",
        "**Dropdown popover:** Contains a list of selectable options for the user to choose from.",
        "**Option:** These represent the available selections that the user can choose from.",
        "**Checkbox (optional):** Allows users to select options in all multiple selection variants, and used to indicate that an option has been selected.",
        "**Check icon:** Used to indicate that an option has been selected for single selection variants.",
        "**Scrollbar (optional):** Allows users to scroll through the content when there are more options than can be displayed in a single view."
    ]
} %}

---

## Variants

### Single select

The single select variant allows users to select a single option from a list.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/variants-single-select.svg",
    alt: "A single select dropdown with 'Option 1' selected in the field and a check mark next to it in the open popover.",
    width: 280
} %}

### Multi select

The multi select variant allows users to select one or more options from a list.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/variants-multi-select.svg",
    alt: "A multi select dropdown with a chip showing the number of selected items in the field and checkboxes next to each option in the open popover.",
    width: 280
} %}

---

## Modifiers

### Field

#### Type

##### Placeholder

Placeholder text should not contain crucial information, and should only be displayed if beneficial to the user. Placeholder text disappears after the user has selected an option.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/modifiers-field-type-placeholder.svg",
    alt: "A dropdown progressing from placeholder text in the field, to an expanded popover of options, to a selected option shown in the field.",
    width: 880
} %}

##### Filled

The user's selection is always displayed in the field for both single and multi select.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/modifiers-field-type-filled-1.svg",
    alt: "A single select dropdown showing 'Option 1' selected in the field and the same option marked with a check mark in the expanded popover.",
    width: 580
} %}

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/modifiers-field-type-filled-2.svg",
    alt: "A multi select dropdown showing a '1 selected' chip in the field and checkboxes in the expanded popover.",
    width: 580
} %}

#### Form label

You can remove the label in situations where the dropdown's purpose is already clear and there are contextual clues.

{% notification {
    type: "warning",
    message: "The label of a Dropdown is an important piece of information that helps users understand its purpose. Please make sure you only remove the label when the component is set in a clear and obvious context."
} %}

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/modifiers-form-label.svg",
    alt: "A dropdown component displayed without a form label.",
    width: 256
} %}

#### Assistive text

Use the assistive text modifier to provide additional information which can help the user figure out the option they need to select.

{% notification {
    type: "information",
    message: "The assistive text is always provided in the error state to inform the user how to fix the error."
} %}

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/modifiers-field-assistive-text.svg",
    alt: "A dropdown component with assistive text displayed below the field.",
    width: 256
} %}

#### Leading icon

A leading icon can be added to visually support the input, and is persistent.

{% notification {
    type: "warning",
    message: "The use of leading icons should be carefully considered due to the available space within the component and the complexity."
} %}

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/modifiers-field-leading-icon.svg",
    alt: "Two dropdowns with a leading icon inside the field: one showing placeholder text and one showing a selected option.",
    width: 696
} %}

### Popover

#### Secondary text

Supporting secondary text is available for additional information that provides value to the user. If secondary text is used, it will be applied to all option items.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/modifiers-popover-secondary-text.svg",
    alt: "Dropdown popovers where each option has a primary line of text with supporting secondary text beneath it.",
    width: 892
} %}

#### Leading icon

A leading icon can be added to visually support the options, and is persistent.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/modifiers-popover-leading-icon.svg",
    alt: "Dropdown popovers where each option has a leading icon next to its label.",
    width: 892
} %}

---

## Sizes

### Height

Use a consistent dropdown height when it is being used alongside other components on the same page.

#### Small

Use when there isn't enough vertical space for the default dropdown size.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/sizes-height-small.svg",
        alt: "A dropdown component with a small field height.",
        width: 256
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/sizes-height-medium.svg",
        alt: "A dropdown component with a medium field height.",
        width: 256
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Large

Choose this size when there is a lot of space to work with.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/sizes-height-large.svg",
    alt: "A dropdown component with a large field height.",
    width: 320
} %}

### Width

The dropdown width is flexible, and the options popover matches the width of the field.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/sizes-width.svg",
    alt: "An expanded dropdown showing the options popover matching the width of the field.",
    width: 504
} %}

---

## Content

### Placeholder

Use clear placeholder text for the dropdown so that users understand the purpose.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/content-placeholder.svg",
    alt: "A dropdown field with the form label 'Restaurant locations' and the placeholder text 'Select countries'.",
    width: 256
} %}

### Options

#### Primary text

Describe the dropdown option succinctly ideally within one line of text. We recommend presenting the options in alphabetical order.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/content-options-primary-text.svg",
    alt: "An expanded dropdown listing countries in alphabetical order: Australia, Belgium, Canada, Denmark, England and France.",
    width: 280
} %}

#### Secondary text

Provides additional detail if required, aiming to be contained within two lines.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/content-options-secondary-text.svg",
    alt: "An expanded dropdown with the form label 'Restaurant address', listing restaurants where each option has a secondary line of text showing its address.",
    width: 280
} %}

---

## Overflow

### Field

#### String

If the placeholder string or single selection string exceeds the available horizontal width of the field, the string will truncate.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/overflow-field-string-1.svg",
        alt: "A dropdown field where long placeholder text is truncated with an ellipsis.",
        width: 256
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/overflow-field-string-2.svg",
        alt: "A dropdown field where long selected text is truncated with an ellipsis.",
        width: 256
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Chip

If the chip's label exceeds the available width, the clear icon is given priority and the label is truncated.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/overflow-field-chip.svg",
    alt: "A dropdown field where a chip label is truncated with an ellipsis while the clear icon remains visible.",
    width: 256
} %}

### Popover

#### String

If the primary or secondary option string exceeds the available horizontal width of the popover, the string will wrap onto a new line.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/overflow-popover-string-1.svg",
        alt: "An expanded dropdown where a long option name wraps onto a second line in the popover.",
        width: 280
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/overflow-popover-string-2.svg",
        alt: "An expanded dropdown where long option names and secondary text wrap onto new lines in the popover.",
        width: 280
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Option quantity

If the quantity of options exceeds 5, the popover will increase in height to show the first 5 1/2 options, with the height being depicted by the content.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/overflow-popover-option-quantity-1.svg",
        alt: "An expanded dropdown with more than five options showing a cropped sixth option and a scrollbar in the popover.",
        width: 280
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/overflow-popover-option-quantity-2.svg",
        alt: "An expanded dropdown with many options showing a taller popover with a scrollbar.",
        width: 280
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Behaviours

### Universal

#### Loading

If the options list doesn't populate automatically, the loading state can be applied whilst the options are populating.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/behaviours-universal-loading.svg",
    alt: "An expanded dropdown showing a loading state with a spinner and the text 'Loading results...'.",
    width: 592
} %}

### Single select

#### Making a selection

Users can select a single option from the popover list and the popover will close once the user has made a selection. The selected option will be indicated within the popover, and the selection displayed within the field.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/behaviours-single-select-making-selection.svg",
    alt: "A sequence showing a single select dropdown open with the cursor hovering 'Option 1', followed by the field displaying the selection with the clear icon.",
    width: 904
} %}

#### Removing a selection

The user can remove the selection by clicking the clear icon within the field.

{% notification {
    type: "information",
    message: "The current selection cannot be removed by clicking on the selected option within the popover."
} %}

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/behaviours-single-select-removing-selection.svg",
    alt: "A sequence showing an open dropdown with a selected option, and the cursor moving to the clear icon in the field to remove the selection.",
    width: 592
} %}

#### Preselection

A preselection can be made by default if the dropdown always requires an input. In this case, the first option is preselected by default and remains selected until the user manually chooses a different option. The clear functionality is additionally removed to ensure a selection is always present.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/behaviours-single-select-preselection.svg",
    alt: "A dropdown with 'Option 1' preselected in the field and no clear icon available.",
    width: 580
} %}

### Multi select

#### Making a selection

Users can select one or more options from the popover list and the popover will remain open whilst the user is making selections. All selected options will be indicated within the popover, and the chip will dynamically display the number of selections.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/behaviours-multi-select-making-selection-1.svg",
    alt: "A sequence showing a multi select dropdown open with the cursor selecting an option, the chip count updating, and the selected options marked with checked checkboxes.",
    width: 904
} %}

Selected options shift to the top of the popover list in alphanumeric order if the popover is reopened post selection.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/behaviours-multi-select-making-selection-2.svg",
    alt: "A multi select dropdown where previously selected options have shifted to the top of the popover list in alphanumeric order.",
    width: 904
} %}

#### Removing selections

The user has two options to remove selections. They can either deselect individual options via the popover by clicking on the desired option or batch remove all selections using the chip in the field.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/behaviours-multi-select-removing-selection.svg",
    alt: "A sequence showing selections being removed by deselecting an option in the popover with the cursor, and by using the chip's clear icon in the field.",
    width: 592
} %}

---

## Interactions

### Collapsed

The interactions for both the single and multi select are the same in the collapsed state.

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/interactions-collapsed.svg",
    alt: "A collapsed dropdown field with a dashed orange outline and the marker 1 indicating the area that opens the popover.",
    width: 336
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Opens the popover:** A popover list will appear underneath."
    ]
} %}

### Expanded (single select)

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/interactions-expanded-single-select.svg",
    alt: "An expanded single select dropdown with dashed orange outlines and numbered markers indicating the areas that close the popover, select an option and deselect the selection, with the surrounding canvas tinted to show where the popover closes."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Close the popover:** A popover list will disappear from underneath.",
        "**Selects option and closes the popover:** Selection made, and the popover list will disappear from underneath.",
        "**Deselects option:** Selection removed."
    ]
} %}

### Expanded (multi select)

{% contentPageImage {
    src: "../../../assets/img/components/dropdown/interactions-expanded-multi-select.svg",
    alt: "An expanded multi select dropdown with dashed orange outlines and numbered markers indicating the areas that close the popover, select or deselect an option and deselect all options, with the surrounding canvas tinted to show where the popover closes."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Close the popover:** A popover list will disappear from underneath.",
        "**Selects or deselects option:** Selection made.",
        "**Deselects all options:** All selections removed."
    ]
} %}

---

## States

### Popover

#### Unselected

By default all options are unselected.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/states-popover-unselected-1.svg",
        alt: "A single select popover with all options unselected.",
        width: 280
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/states-popover-unselected-2.svg",
        alt: "A multi select popover with all options unselected.",
        width: 280
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Selected

How many options that can be selected by the user is determined by whether the single or multi select variant is in use.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/states-popover-selected-1.svg",
        alt: "A single select popover with one option selected, marked with a check mark.",
        width: 280
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/states-popover-selected-2.svg",
        alt: "A multi select popover with a selected checkbox next to an option.",
        width: 280
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive states

### Field

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/interactive-states-field-default.svg",
        alt: "A dropdown field in its default state.",
        width: 256
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/interactive-states-field-hover.svg",
        alt: "A dropdown field in its hover state, with a subtle background highlight.",
        width: 256
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Active</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/interactive-states-field-active.svg",
        alt: "A dropdown field in its active state, with a stronger background highlight.",
        width: 256
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Focus</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/interactive-states-field-focus.svg",
        alt: "A dropdown field in its focus state, showing a focus ring around the field.",
        width: 256
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/interactive-states-field-disabled.svg",
        alt: "A dropdown field in its disabled state, appearing greyed out and non-interactive.",
        width: 256
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Error</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/interactive-states-field-error.svg",
        alt: "A dropdown field in its error state, with a red border and error assistive text below.",
        width: 256
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Popover

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/interactive-states-popover-default.svg",
        alt: "A single select popover and a multi select popover in their default state.",
        width: 448
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/interactive-states-popover-hover.svg",
        alt: "A single select popover and a multi select popover with an option highlighted on hover.",
        width: 448
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Active</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/interactive-states-popover-active.svg",
        alt: "A single select popover and a multi select popover with an option in its active, pressed state.",
        width: 448
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Focus</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/interactive-states-popover-focus.svg",
        alt: "A single select popover and a multi select popover with a focus ring around an option.",
        width: 448
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/interactive-states-popover-disabled.svg",
        alt: "A single select popover and a multi select popover in a disabled state, appearing greyed out.",
        width: 448
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of Dropdowns in left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/examples-ltr-1.svg",
        alt: "A dropdown in left-to-right context with the form label 'Delivery areas' and a chip showing '5 selected'.",
        width: 320
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/examples-ltr-2.svg",
        alt: "An expanded dropdown in left-to-right context with 'Best match' selected from a 'Sort by' list.",
        width: 280
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of Dropdowns in right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/examples-rtl-1.svg",
        alt: "A dropdown in right-to-left context with a Hebrew form label and a chip showing the number of selected items in Hebrew.",
        width: 320
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src: "../../../assets/img/components/dropdown/examples-rtl-2.svg",
        alt: "An expanded dropdown in right-to-left context with Hebrew text, a selected option marked with a check mark, and the chevron on the left.",
        width: 276
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
