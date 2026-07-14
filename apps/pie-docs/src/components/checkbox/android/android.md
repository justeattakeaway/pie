---
eleventyNavigation:
    key: Android
    parent: 'Checkbox'
    order: 3
shouldShowContents: true
---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-apps/anatomy.svg",
    alt: "Anatomy of a checkbox component.",
    width: "84px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Checkbox:** A Checkbox input indicating the appropriate state. By default it is unselected.",
        "**Label (Optional):** Describes the item you want to select or unselect.",
        "**Assistive text (Optional):** The assistive text provides additional instructional information / error / success messaging."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-apps/variants-default.svg",
    alt: "Unchecked checkbox with label.",
    width: "70px"
} %}

---

## Modifiers

### Label - without

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-apps/modifiers-label-without.svg",
    alt: "Unchecked checkbox without label.",
    width: "24px"
} %}

### Label positioning

Place labels in the trailing position by default. Use a leading label when the design requires more flexibility. Only one label is allowed to be present.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/modifiers-label-right.svg",
      width: "70px",
      alt: "Unchecked checkbox with a trailing label."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/modifiers-label-left.svg",
      width: "70px",
      alt: "Unchecked checkbox with leading label."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Assistive text

Assistive text is used where needed to provide additional information or error / success messaging. The assistive text is always used for an error state to provide the user with the information required to complete the form element.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/modifiers-assistive-text.svg",
      width: "84px",
      alt: "Unchecked checkbox with assistive text."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/modifiers-error.svg",
      width: "118px",
      alt: "Unchecked checkbox with assistive text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Alignment

If there is a Checkbox grouping, they can be laid out vertically or horizontally depending on the use case; with the option of a label. When possible, arrange the Checkbox group vertically for easier reading.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/alignment-vertical.svg",
      width: "70px",
      alt: "Three checkboxes arranged vertically."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/alignment-horizontal.svg",
      width: "258px",
      alt: "Unchecked checkbox with assistive text."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Content

### Checkbox labels

- Always use clear and concise labels for Checkboxes.
- Be explicit about the results that will follow if the Checkbox is selected.

### Overrides

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-apps/content-overrides.svg",
    alt: "Checkbox with a label containing a link.",
    width: "360px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Label:** The label can include a [link](https://pie.design/components/link/), when the string is a complete sentence or more."
    ]
} %}

### Overflow

- If you are tight on space, consider rewording the label.
- Long labels may wrap to a second line, and this is preferable to truncation - text should wrap beneath the Checkbox so the control and label are top aligned.
  
{% contentPageImage {
    src:"../../../assets/img/components/checkbox-apps/overflow.svg",
    alt: "Checkbox with a label that wraps to a second line.",
    width: "221px"
} %}

---

## Layout

### Fill container

By default label container is set to hug. Designers can set the textbox to fill the container when using a leading label. This allows the layout to adapt more flexibly to different designs.

{% notification { 
  type: "information",
  message: "When using the Fill container layout, take tablet and landscape views into account."
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/layout-label-left.svg",
      width: "70px",
      alt: "Unchecked checkbox with a leading label."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/layout-label-left-space.svg",
      width: "258px",
      alt: "Unchecked checkbox with a space before the leading label."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/layout-label-error.svg",
      width: "258px",
      alt: "Unchecked checkbox with a leading label in error state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/layout-label-error-space.svg",
      width: "258px",
      alt: "Unchecked checkbox with a space before the leading label in error state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactions

If the checkbox has a label, the label is clickable for easier interaction.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/interactions-label.svg",
      width: "70px",
      alt: "Unchecked checkbox showing the label and checkbox are both clickable."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/interactions-no-label.svg",
      width: "24px",
      alt: "Unchecked checkbox showing the checkbox is clickable."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Links

If the label contains a link, the link has its own touch target, while the standard text remains selectable for the checkbox control.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/interactions-links-1.svg",
      width: "230px",
      alt: "Checkbox label containing a link, showing the clickable area around the link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/interactions-links-2.svg",
      width: "230px",
      alt: "Checkbox label containing a link."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## States

The Checkbox input allows for three states: unselected, selected, and partially selected. The default view of a set of Checkboxes is having no option selected.

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-apps/states.svg",
    alt: "Selected, unselected and partially selected checkboxes.",
    width: "300px"
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentPageImage {
    src:"../../../assets/img/components/checkbox-apps/interactive-states.svg",
    alt: "Checkboxes showing default, active, error and disabled states.",
    width: "300px"
} %}

---

## Examples

Potential use cases for the component.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/examples-1.svg",
      width: "147px",
      alt: "An example checkbox group showing email and text message communication preferences."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/examples-2.svg",
      width: "375px",
      alt: "An example of a terms and conditions checkbox showing an error state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL Examples

Here are some examples of Checkbox in RTL context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/examples-RTL-1.svg",
      width: "147px",
      alt: "An RTL example checkbox group showing email and text message communication preferences."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox-apps/examples-RTL-2.svg",
      width: "375px",
      alt: "An RTL example of a terms and conditions checkbox showing an error state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
