---
eleventyNavigation:
    key: Overview
    parent: Form Label
    order: 1
shouldShowContents: true
permalink: components/form-label/
---

## Overview
The purpose of form labels is to improve the usability and accessibility of form inputs by providing descriptive and meaningful text that enhances the user experience. It helps users understand the purpose of the input field, improving form comprehension and data entry accuracy.

Form labels are displayed as a concise and clear text above an input field that describes the information it requires. They provide guidance, instructions, or prompts to users, ensuring they are able to provide the appropriate data.

{% contentPageImage {
    src:"../../assets/img/components/form-label/overview.svg",
    alt: "A form label that is placed above a textarea."
} %}

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Build form labels for the components that need it using the atomic variants.",
            "Each form label must contain no more than one trailing content.",
            "Link the labels with corresponding input fields to establish a clear visual association.",
            "Use a consistent style and formatting for labels throughout the form to maintain visual harmony."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Avoid placing labels away from the fields, as it may lead to user confusion or difficulty in filling out the form.",
            "Avoid overcrowding the form with excessive labels, which can overwhelm users and make the form look cluttered.",
            "Don’t create permanent trailing content without creating a variant in the Form Label component."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/form-label/anatomy.svg",
    alt: "Anatomy of a form label.",
    width: 968
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Label:** Describes the purpose and function of the form.",
        "**Help tooltip icon (optional):** An icon the user can hover to obtain additional information to understand the meaning of the label.",
        "**Optional (optional):** Text that tells users the field is not required.",
        "**Character count (optional):** Shows how many characters are left within the input field.",
        "**Percentage (optional):** Indicates the proportion of a task that has been completed. ",
        "**Stepper (optional):** Indicates the progression through a series of steps.",
        "**String (optional):** Dynamic text-only content."
    ]
} %}

---

## Variantions

### Leading content

All leading content tells the user what type of information is expected in the field.

{% contentLayout %}
  {% contentItem %}
    <h4>Label</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/variation-leading-label.svg",
      width: 34,
      alt: "A leading content form label"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Help tooltip icon</h4>
    {% contentPageImage {
      src:"../../../assets/img/components/form-label/variation-leading-tooltip-icon.svg",
      alt: "A form label with help tooltip icon",
      width: 20
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Optional</h4>
    {% contentPageImage {
      src:"../../../assets/img/components/form-label/variation-leading-optional.svg",
      alt: "A form label with optional text",
      width: 96
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Trailing content

All trailing content is dynamic and based on user actions, selections, inputs, and statuses.

{% notification {
  type: "information",
  message: "We only specify the types of trailing content in design. In development, however, trailing content is simply free-form text."
} %}


{% contentLayout %}
  {% contentItem %}
    <h4>Character count</h4>
    {% contentPageImage {
      src:"../../../assets/img/components/form-label/variation-trailing-character-count.svg",
      alt: "A form label with trailing character count",
      width: 30
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Percentage</h4>
    {% contentPageImage {
      src:"../../../assets/img/components/form-label/variation-trailing-percentage.svg",
      alt: "A form label with trailing percentage",
      width: 22
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Stepper</h4>
    {% contentPageImage {
      src:"../../../assets/img/components/form-label/variation-trailing-stepper.svg",
      alt: "A form label with trailing stepper",
      width: 36
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>String</h4>
    {% contentPageImage {
      src:"../../../assets/img/components/form-label/variation-trailing-string.svg",
      alt: "A form label with trailing string",
      width: 38
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Modifiers

You can customise the form label to suit individual use cases.

### Leading

#### Help tooltip icon

Provides users with more context or information about the label when interacting with the field, especially when the label alone may not provide sufficient explanation.

{% contentPageImage {
    src:"../../../assets/img/components/form-label/variation-leading-tooltip-icon.svg",
    alt: "A leading form label with help tooltip icon",
    width: 154
} %}

#### Optional

Informs the user that filling in the field is optional.

{% contentPageImage {
    src:"../../../assets/img/components/form-label/variation-leading-optional.svg",
    alt: "A leading form label with optional text",
    width: 54
} %}

#### Multiline label

If that label length exceeds the width of the form, the label wraps onto a second line.

If the help tooltip icon or the Optional identifier are active, they trail the end of the label.

{% contentPageImage {
    src:"../../../assets/img/components/form-label/variation-leading-multiline-label.svg",
    alt: "A leading form label with multiline text",
    width: 176
} %}

### Trailing

{% notification {
  type: "warning",
  message: "There can only be one trailing element in a form label at a time."
} %}

#### Character count

Used in input forms such as textarea and text input, to show how many characters are left within the input field.

{% contentPageImage {
    src:"../../../assets/img/components/form-label/variation-trailing-character-count.svg",
    alt: "A form label with trailing character count",
    width: 30
} %}

#### Stepper

Used to indicate the users progression through a series of steps.

{% contentPageImage {
    src:"../../../assets/img/components/form-label/variation-trailing-stepper.svg",
    alt: "A form label with trailing stepper",
    width: 36
} %}

#### Percentage

Indicates the proportion of a task that has been completed.

{% contentPageImage {
    src:"../../../assets/img/components/form-label/variation-trailing-percentage.svg",
    alt: "A form label with trailing percentage",
    width: 256
} %}

#### String

If none of the trailing content above suits your use cases, you can use this dynamic text-only content to meet the needs or requirements of the field to which the form label is associated.

{% contentPageImage {
    src:"../../../assets/img/components/form-label/variation-trailing-string.svg",
    alt: "A form label with trailing string",
    width: 256
} %}

---

## Content

### Label

A good form label has certain qualities that make it user-friendly and improve the overall experience. Here are some important attributes of a good form label:


{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use clear and specific language that directly communicates the purpose of the input field.",
            "Use action-oriented labels that describe what users need to enter rather than generic terms.",
            "Prioritise brevity and simplicity, using concise wording that is easy to read and understand.",
            "Use consistent and standardised terminology across all form labels for clarity and coherence.",
            "Consider the context and expectations of your target users when crafting the labels.",
            "Use sentence case in the label."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use vague or ambiguous terms that may confuse users or lead to incorrect data entry.",
            "Don't use technical jargon or industry-specific language that users may not be familiar with.",
            "Don't overcrowd the label with unnecessary information or excessive details.",
            "Don't use overly creative or clever wording that may obscure the meaning or purpose of the input field.",
            "Don't sacrifice clarity for brevity - ensure that the label provides sufficient guidance without being overly wordy.",
            "Don't use labels as instructional text. For example, use “Email” instead of “Put your email here”.",
            "The label should not be used as a minimum value for a Slider or Progress Bar."
        ]
    }
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/form-label/content-label-do-1.svg",
            width: "256px",
            alt: "Examples of encouraged form label usage."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/form-label/content-label-dont-1.svg",
            width: "256px",
            alt: "Examples of discouraged form label usage."
        }]
    }
} %}

{% usage {
    do: {
        type: usageTypes.image,
        variant: "secondary",
        items: [{
            src: "../../../assets/img/components/form-label/content-label-do-2.svg",
            width: "288px",
            alt: "Examples of encouraged form label usage."
        }]
    },
    dont: {
        type: usageTypes.image,
        variant: "secondary",
        items: [{
            src: "../../../assets/img/components/form-label/content-label-dont-2.svg",
            width: "288px",
            alt: "Examples of discouraged form label usage."
        }]
    }
} %}

### String

When using the String modifier, ensure that the content is dynamic and is updated to reflect the user’s input.

{% notification {
  type: "information",
  message: "String content should be concise and clear. Use Assistive text for any supplementary information needed."
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/content-string-do-1.svg",
      width: 308,
      variant: "secondary",
      alt: "Example of encouraged form label usage."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/content-string-do-2.svg",
      width: 288,
      variant: "secondary",
      alt: "Example of encouraged form label usage."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Character count, Stepper, Percentage

{% notification {
  type: "information",
  message: "X can be replaced by numbers only."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/form-label/content-character-count-stepper-percentage.svg",
    alt: "Examples of form labels with character count, percentage, and stepper.",
    width: 168
} %}

---

## Behaviours

### Character counter

Text fields and text areas may have a character limit and counter. Use the character limit and counter to let users know how long their entry can be before they begin typing.

{% notification {
  type: "warning",
  message: "Once the user reaches the character limit, they can’t enter more characters."
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/behaviours-character-counter-1.svg",
      width: 256,
      alt: "Example of empty form label with character counter."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/behaviours-character-counter-2.svg",
      width: 257,
      alt: "Example of filled form label with character counter."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Stepper, Percentage, String

User’s actions, selections, inputs and statuses are reflected on the trailing content.

{% contentPageImage {
    src:"../../../assets/img/components/form-label/behaviours-stepper-percentage-string.svg",
    alt: "Examples of form label with stepper, percentage, and string.",
    variant: "secondary",
    width: 298
} %}

---

## Interactions

### Help tooltip icon

A tooltip is triggered by hovering (on desktop) or clicking (on tablet and mobile) the Help tooltip icon in the form label. A tooltip will close once the user hovers off the icon or taping outside of the icon.

{% contentPageImage {
    src:"../../../assets/img/components/form-label/interactions-tooltip-icon.svg",
    alt: "A form label with help tooltip icon",
    width: 256
} %}

**Open a tooltip:** Display information, description or helping text.

---

## Layout

### Position

Leading content should always be left-aligned and follow the order of Label, Help tooltip and Optional.

Trailing content is positioned at the end of a form label and should be right-aligned.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/form-label/layout-position-do.svg",
            width: "280px",
            alt: "Example of encouraged form label usage."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/form-label/layout-position-dont.svg",
            width: "280px",
            alt: "Examples of discouraged form label usage."
        }]
    }
} %}

---

## Examples

### LTR examples

Here are some examples of form label in left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/examples-ltr-1.svg",
      width: 256,
      alt: "Example of encouraged form label usage."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/examples-ltr-2.svg",
      width: 326,
      alt: "Example of encouraged form label usage."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/examples-ltr-3.svg",
      width: 288,
      variant: "secondary",
      alt: "Example of encouraged form label usage."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/examples-ltr-4.svg",
      width: 288,
      variant: "secondary",
      alt: "Example of encouraged form label usage."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/examples-ltr-5.svg",
      width: 308,
      variant: "secondary",
      alt: "Example of encouraged form label usage."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of form label in right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/examples-rtl-1.svg",
      width: 256,
      alt: "Example of encouraged form label usage."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/examples-rtl-2.svg",
      width: 326,
      alt: "Example of encouraged form label usage."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/examples-rtl-3.svg",
      width: 288,
      variant: "secondary",
      alt: "Example of encouraged form label usage."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/form-label/examples-rtl-4.svg",
      width: 288,
      variant: "secondary",
      alt: "Example of encouraged form label usage."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% notification {
  type: "information",
  message: "If you need more support or example to implement RTL for this component, please reach out to the PIE team."
} %}

---

## Resources

{% resourceTable {
    componentName: 'Form Label'
} %}
