---
eleventyNavigation:
    key: Android
    parent: Dropdown
    order: 3
shouldShowContents: true
---

## Dos and don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use them mainly to perform actions, and for searching or filtering content.",
            "Use them sparingly when placed in forms, and only when you need search or filtering functionalities.",
            "Use them when screen real estate is limited.",
            "Use clear labels."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "If most of your experience is form-based or frequently used on mobile platforms, use Select Input instead.",
            "Don't use Dropdowns when there are fewer than three options. Use Radio Buttons instead.",
            "Don't add more than 7 options visible at the same time inside the popover as it will become overwhelming for the user."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/anatomy.svg",
    alt: "Annotated diagram of a dropdown component showing its main parts: form label, dropdown field, placeholder text, chevron icon, clear icon, and assistive text.",
    width: "200"
} %}

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/anatomy-2.svg",
    alt: "Annotated diagram showing two open dropdown variants side by side: a single-select dropdown with a check mark on the selected option, and a multi-select dropdown with a chip, checkboxes, and a scrollbar. Numbers 7 to 13 indicate the focus ring, chip, dropdown popover, option, checkbox, check icon, and scrollbar.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label (optional)** : The Form Label provides a clear and concise information to describe the contents of the field.",
        "**Dropdown field**: Acts as the main interactive area of the component, where the user's selection and controls for the Dropdown live.",
        "**Placeholder/Selection**: Indicates the placeholder text or option selected by the user.",
        "**Chevron icon**: Used to indicate there is additional content revealed when interacting with the dropdown.",
        "**Clear icon (optional)**: Clears the user's selection when clicked.",
        "**Assistive text (optional)**: The Assistive Text provides additional instructional information, as well as error and success messages.",
        "**Focus ring**: Used to indicate the user is currently interacting with the Dropdown.",
        "**Chip (optional)**: Our Chip component is used to indicate the number of selected items in all multiple selection variants of the Dropdown.",
        "**Dropdown popover**: Contains a list of selectable options for the user to choose from.",
        "**Option**: These represent the available selections that the user can choose from.",
        "**Checkbox (optional)**: The Checkbox component acts as a visual cue to indicate the user has selected an option.",
        "**Check icon (optional)**: Used to indicate that an option has been selected more clearly.",
        "**Scrollbar (optional)**: Allows users to scroll through the content when there are more options than can be displayed in a single view."
    ]
} %}

---

## Variants

### Default dropdown

Use our default Dropdown variant when you need to present a list of options or choices to the user, so they can select one or more of them.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/variants-default.svg",
    alt: "A default dropdown component in its closed state, showing a label, placeholder text, and a chevron icon.",
    width: "200"
} %}

### Multi-select dropdown

Use multi select dropdown variant when you need to present a list of options or choices to the user, so they can select multiple options.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/variants-multiselect.svg",
    alt: "A multi-select dropdown component showing a selected chip inside the dropdown for filtering options.",
    width: "200"
} %}

### Search dropdown

This variant allows our users to type and search for specific options by providing a text input field within the dropdown. This enables users to filter the available options based on their input.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/variants-search.svg",
    alt: "A search dropdown component showing a text input field inside the dropdown for filtering options.",
    width: "200"
} %}

### Search multi-select dropdown

This variant allows our users to type and search for specific options by providing a text input field within the dropdown. This enables users to filter the available options based on their input and select multiple options.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/variants-search-multiselect.svg",
    alt: "A search dropdown component showing a text input field and a selected chip inside the dropdown for filtering options.",
    width: "200"
} %}

---

## Modifiers

### General modifiers

#### Expanded

Use this modifier when you want to show the options the user can select after interacting with the Dropdown.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/modifiers-general-expanded.svg",
    alt: "A dropdown component in its expanded state, showing a popover with a list of selectable options.",
    width: "200"
} %}

#### Content

Use this modifier when you want to show a Dropdown where the user has already selected an option.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/modifiers-general-content.svg",
    alt: "A dropdown component displaying a previously selected option in the field.",
    width: "200"
} %}

### Field modifiers

#### Label

You can remove the label in situations where the dropdown's purpose is already clear and there are contextual clues, or when space needs to be conserved.

{% notification {
    type: "warning",
    message: "The label of a Dropdown is an important piece of information that helps users understand its purpose. Please make sure you only remove the label when the component is set in a clear and obvious context."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/modifiers-field-label.svg",
    alt: "Two dropdown components side by side: one with a visible label and one without.",
    width: "200"
} %}

#### Assistive text

Use the assistive text modifier to provide additional information which can help the user figure out the option they need to select.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/modifiers-field-assistive-text.svg",
    alt: "A dropdown component with assistive text displayed below the field.",
    width: "200"
} %}

#### Label details

Use label details to provide additional information, such as marking the dropdown as optional.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/modifiers-field-label-details.svg",
    alt: "A dropdown component with label details showing additional text next to the label, such as 'Optional'.",
    width: "200"
} %}

### Popover modifiers

#### Multi-select

Use this modifier when you want to allow users to make multiple selections from a list of options simultaneously.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/modifiers-popover-multiselect.svg",
    alt: "A dropdown popover showing multiple options with checkboxes, allowing multi-selection.",
    width: "200"
} %}

#### Scrollable

When the number of options exceeds the available space within the popover, use the Scroll modifier to indicate that there are additional options available.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/modifiers-popover-scrollable.svg",
    alt: "A dropdown popover with a scrollbar on the right side, indicating more options are available below.",
    width: "200"
} %}

#### Loading

Use this modifier to reflect the Dropdown is retrieving or processing information based on the user input. This helps manage the user's expectations, improving responsiveness and maintaining visual continuity.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/modifiers-popover-loading.svg",
    alt: "A dropdown popover in a loading state, showing a spinner to indicate content is being retrieved.",
    width: "200"
} %}

### Option modifiers

#### Multi-select

In the single-selection version, you can visually indicate a selected option with a check mark symbol. This helps the user understand which selection is active.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/modifiers-option-multiselect.svg",
    alt: "Dropdown options with checkboxes shown next to each item, indicating multi-select is enabled.",
    width: "200"
} %}

#### Selected

Use this modifier to indicate one or more options have been selected.

In the single-selection version, the selected option's text is bold and is followed by a check mark icon.

For the multiple-selection version, the selected option's text is bold and the checkbox's state becomes selected.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/modifiers-option-selected.svg",
    alt: "Dropdown options showing a selected state: in single-select with a check mark icon, and in multi-select with a checked checkbox.",
    width: "200"
} %}

---

## Sizes

### Small

Field height of 40px.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/sizes-small.svg",
    alt: "A small dropdown component with a field height of 40px.",
    width: "200"
} %}

### Medium

Field height of 48px.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/sizes-medium.svg",
    alt: "A medium dropdown component with a field height of 48px.",
    width: "200"
} %}

### Large

Field height of 56px.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/sizes-large.svg",
    alt: "A large dropdown component with a field height of 56px.",
    width: "200"
} %}

---

## Interactive states

### Field states

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/dropdown/android/interactive-states-default.svg",
        alt: "A dropdown component in its default resting state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Error</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/dropdown/android/interactive-states-error.svg",
        alt: "A dropdown component in its error state, with an error colour applied to the border and assistive text.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/dropdown/android/interactive-states-disabled.svg",
        alt: "A dropdown component in its disabled state, appearing greyed out and non-interactive.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Option states

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/dropdown/android/interactive-states-option-default.svg",
        alt: "Dropdown options in their default state, showing unselected items in the popover.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Active</h4>
    {% contentPageImage {
        src:"../../../assets/img/components/dropdown/android/interactive-states-option-active.svg",
        alt: "A dropdown option in its active state, showing the pressed visual feedback.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Behaviours

### Expand

This will expand the Dropdown by clicking or tapping on its field. This will open or close the dropdown, revealing or hiding the options in a popover.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/behaviour-expand.svg",
    alt: "A dropdown component expanded.",
    width: "200"
} %}

### Selection

When the user selects an option, it will be displayed in the field, replacing the initial placeholder text.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/behaviour-selection.svg",
    alt: "A dropdown showing a selected option displayed in the field after the user has made a choice.",
    width: "200"
} %}

### Search

As the user types in the search field, the options are dynamically updated to display matching results.

{% notification {
    type: "warning",
    message: "Options that match the criteria should be highlighted by bolding and underlining the characters typed by the user."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/behaviour-search.svg",
    alt: "A search dropdown with a user typing in the input field, with matching option text bolded and underlined in the filtered results.",
    width: "200"
} %}

---

## Interactions

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/interactions.svg",
    alt: "A dropdown component with interaction areas highlighted: the clear selection area and the open/expand area.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Clear selection**: Clicking or tapping on this area will remove any selected options.",
        "**Open/Expand the dropdown**: Represents the placeholder text or value selected by the user."
    ]
} %}

---

## Contents

Below you can find some do's and don'ts which can help you write better dropdown labels, placeholder text and selectable options:

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use clear and concise labels that accurately describe the purpose or content of the dropdown.",
            "Provide informative placeholder text that guides users on the expected input or selection.",
            "Use meaningful and descriptive option labels that accurately represent the available choices.",
            "Organise options in a logical and intuitive order, such as alphabetical or hierarchical grouping, to facilitate easy scanning and selection.",
            "Consider user context and language preferences when writing labels and option text to ensure inclusivity and localisation."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use vague or ambiguous labels that can confuse users about the purpose or expected input of the dropdown.",
            "Don't leave the placeholder text empty or provide placeholder text that doesn't provide any meaningful guidance.",
            "Don't use lengthy or excessive option labels that can create visual clutter and make it harder for users to scan and select options quickly."
        ]
    }
} %}

---

## Using the Dropdown in form layouts

When you place a Dropdown in a form using auto layout, you'll sometimes need to show the expanded version of the component in context. Unfortunately, this will push down all your contents.

In order to prevent this, please follow these steps:

1. Toggle the 'Expanded' property in Figma's design panel (right hand panel).
2. Add the contents you need in the popover.
3. Detach the component (don't worry, you'll still have editing capabilities).
4. Select the popover and assign it an absolute position.

---

## RTL

For right-to-left (RTL) languages, the layout of the Dropdown is mirrored. The chevron icon is left-aligned and the label and placeholder text are right-aligned.

{% contentPageImage {
    src:"../../../assets/img/components/dropdown/android/example-rtl.svg",
    alt: "A dropdown component displayed in a right-to-left layout, with the chevron icon on the left and text aligned to the right.",
    width: "200"
} %}

{% notification {
    type: "information",
    message: "If you need more support or examples to implement RTL for this component, please reach out to us."
} %}
