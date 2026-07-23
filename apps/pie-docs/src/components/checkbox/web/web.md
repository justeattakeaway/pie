---
eleventyNavigation:
    key: Web
    parent: 'Checkbox'
    order: 2
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
          "Make sure labels are concise and descriptive and that they clearly communicate what is being selected."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "If multiple checkboxes are needed, use a checkbox group."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/checkbox/anatomy.svg",
    alt: "Anatomy of a checkbox component.",
    width: "84px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Checkbox input:** A checkbox input indicates the appropriate state. By default it is unselected.",
        "**Label (Optional):** Describes the information you want to select or unselect.",
        "**Assistive text (Optional):** The [assistive text](/components/assistive-text/) provides additional instructional information / error / success messaging."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src:"../../../assets/img/components/checkbox/checkbox-default.svg",
    alt: "Checkbox component in a default state.",
    width: "70px"
} %}

---

## Modifiers

### Label

A label should always be present unless being utilised as a nested component and an alternative label is present.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/checkbox-default.svg",
      width: "70px",
      alt: "A blank checkbox followed by the label text."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/checkbox.svg",
      width: "24px",
      alt: "A blank checkbox component."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Label positioning

Place labels in the trailing position by default. Use a leading label when the design requires more flexibility.

{% notification {
type: "information",
message: "Use only one label per checkbox."
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/label-positioning-trailing.svg",
      width: "128px",
      alt: "A blank checkbox followed by the trailing label text."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/label-positioning-leading.svg",
      width: "128px",
      alt: "A leading label followed by a blank checkbox."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Assistive text

Assistive text is used where needed to provide additional information or error / success messaging. The assistive text is always used for an error state to provide the user with the information required to complete the form element.

{% contentPageImage {
    src:"../../../assets/img/components/checkbox/checkbox-with-assistive-text.svg",
    alt: "A blank checkbox followed by assistive text in red below it.",
    width: "112px"
} %}

---

## Content

All content should use sentence case.

### Label

- Always use clear and concise labels for checkboxes.
- Labels appear to the right of checkbox input by default.

### Overrides

{% contentPageImage {
    src:"../../../assets/img/components/checkbox/content-overrides.svg",
    alt: "A checkbox with a long text label containing a link.",
    width: "350px"
} %}

{% list {
type: listTypes.ordered,
items: [
"**Label**: The label can include a [link](https://pie.design/components/link/), when the string is a complete sentence or more."
]
} %}

---

## Overflow

### Multiple words overflow

When the label exceeds the available width, the label will wrap onto a new line.

{% contentPageImage {
    src:"../../../assets/img/components/checkbox/overflow.svg",
    alt: "A blank checkbox followed by the label that exceeds the available width and wraps onto a new line.",
    width: "281px"
} %}

---

## Layout

### Fill container

By default label container is set to hug. Designers can set the textbox to fill the container when using a leading label. This allows the layout to adapt more flexibly to different designs.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/layout-fill-container1.svg",
      width: "70px",
      alt: "Checkbox with a leading label."
    } %}
  {% endcontentItem %}
    {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/layout-fill-container2.svg",
      width: "200px",
      alt: "Checkbox with a leading label and a space between the label and checkbox."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/layout-fill-container3.svg",
      width: "204px",
      alt: "Checkbox with a leading label in an error state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/layout-fill-container4.svg",
      width: "206px",
      alt: "Checkbox with a leading label and a space between the label and checkbox in an error state"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Behaviours

### States

The checkbox input allows for a series of three states: unselected, selected, and partially selected. The default state for a checkbox is unselected.

Use the partially selected state when the checkbox contains a sublist of selections, some of which are selected, and some unselected.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/checkbox-unselected.svg",
      width: "112px",
      alt: "Checkbox component in a selected state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/checkbox-selected.svg",
      width: "94px",
      alt: "Checkbox component in an unselected state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/checkbox-partially-selected.svg",
      width: "154px",
      alt: "Checkbox component in a partially selected state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactions

Users can trigger the checkbox directly or by clicking the checkbox label. Having all regions interactive creates a more accessible click target.

{% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/interactions.svg",
      width: "70px",
      alt: "An illustration represents that users can trigger the checkbox directly."
    } %}
  {% endcontentItem %}

### Link

If the label contains a link, the link has its own touch target, while the standard text remains selectable for the checkbox control.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/interactions-link1.svg",
      width: "230px",
      alt: "An illustration represents that users can trigger the checkbox directly."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/interactions-link2.svg",
      width: "230px",
      alt: "An illustration represents that users can trigger the checkbox by clicking the checkbox label. "
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/checkbox-default.svg",
      width: "70px",
      alt: "Checkbox component in a default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Hover</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/checkbox-hovered.svg",
      width: "70px",
      alt: "Checkbox component when hovered over."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Active</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/checkbox-active.svg",
      width: "70px",
      alt: "Checkbox component in an active state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Focus</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/checkbox-focused.svg",
      width: "70px",
      alt: "Checkbox component when it has focus."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/checkbox-disabled.svg",
      width: "70px",
      alt: "Checkbox component in a disabled state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Error</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/checkbox-error.svg",
      width: "112px",
      alt: "Checkbox state example showing an error."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of the component in a left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/examples-LTR-1.svg",
      width: "375px",
      alt: "Checkbox labeled 'I have read and accepted the terms and conditions' in a left-to-right context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/examples-LTR-2.svg",
      width: "147px",
      alt: "Selected checkbox followed by the label text in a left-to-right context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of the component in a right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/examples-RTL-1.svg",
      width: "271px",
      alt: "Checkbox labeled 'I have read and accepted the terms and conditions' in a right-to-left context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/checkbox/examples-RTL-2.svg",
      width: "147px",
      alt: "Selected checkbox followed by the label text in a right-to-left context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
