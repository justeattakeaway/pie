---
eleventyNavigation:
    key: Apps
    parent: Badge
    order: 3
shouldShowContents: true
eleventyComputed:
    sizes: "{% include './sizes.json' %}"
---

## Do's and don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Badges are usually placed before or after the label of the thing they're quantifying.",
            "Use multi-digit variant for numbers greater than 10."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use for alphanumeric content — use the Tag component."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
src: "../../../assets/img/components/badge/anatomy.svg",
alt: "Example of a badge component anatomy.",
width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Label:** Numeric informative information to the user.",
        "**Container:** Background container that organises the information."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
src: "../../../assets/img/components/badge/variants-default.svg",
alt: "Example of the badge in the default variant.",
width: 200
} %}

### Primary

{% contentPageImage {
src: "../../../assets/img/components/badge/variants-primary.svg",
alt: "Example of the badge in the primary variant.",
width: 200
} %}

### Secondary

{% contentPageImage {
src: "../../../assets/img/components/badge/variants-secondary.svg",
alt: "Example of the badge in the secondary variant.",
variant: "secondary",
width: 200
} %}

### Inverse

{% contentPageImage {
src: "../../../assets/img/components/badge/variants-inverse.svg",
alt: "Example of the badge in the inverse variant.",
variant: "inverse",
width: 200
} %}

---

## Size

Outlines the badge sizes that we use, and where they should be used across our products.

{% componentDetailsTable {
  tableData: sizes
} %}

---

## Behaviour

If the user has control over changing the Badge's quantity, and changes from '9' to '10' the width of the container will grow to accommodate the wider content.

{% contentPageImage {
src: "../../../assets/img/components/badge/behaviour.svg",
alt: "Example of the badge behaviour when the quantity changes.",
width: 200
} %}

---

## Content

- Content should be single-digit or multi-digit number.
- It doesn't accept decimal numbers. The number should be always rounded up.
- It doesn't accept special characters.
- In certain use cases, it accepts up to one character that supports the numeric value, but the character cannot be used on its own.

{% contentPageImage {
src: "../../../assets/img/components/badge/content.svg",
alt: "Example of badge content guidelines.",
width: 200
} %}

---

## States

Each variant of the badge has two states: default and disabled.

### Brand

{% contentLayout %}
  {% contentItem %}
  <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/badge/states-brand-default.svg",
      width: 200,
      alt: "Example of the badge brand variant in the default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/badge/states-brand-disabled.svg",
      width: 200,
      alt: "Example of the badge brand variant in the disabled state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Primary

{% contentLayout %}
  {% contentItem %}
  <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/badge/states-primary-default.svg",
      width: 200,
      alt: "Example of the badge primary variant in the default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/badge/states-primary-disabled.svg",
      width: 200,
      alt: "Example of the badge primary variant in the disabled state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Secondary

{% contentLayout %}
  {% contentItem %}
  <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/badge/states-secondary-default.svg",
      width: 200,
      variant: "secondary",
      alt: "Example of the badge secondary variant in the default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/badge/states-secondary-disabled.svg",
      width: 200,
      variant: "secondary",
      alt: "Example of the badge secondary variant in the disabled state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Inverse

{% contentLayout %}
  {% contentItem %}
  <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/badge/states-inverse-default.svg",
      width: 200,
      variant: "inverse",
      alt: "Example of the badge inverse variant in the default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Disabled</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/badge/states-inverse-disabled.svg",
      width: 200,
      variant: "inverse",
      alt: "Example of the badge inverse variant in the disabled state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Narrow

Narrow variants use Narrow tokens for text. Narrow text tokens are smaller than wide and are suitable for smaller screens.

{% contentPageImage {
src: "../../../assets/img/components/badge/narrow.svg",
alt: "Example of the badge narrow variant.",
width: 200
} %}

---

## Examples

Potential use-cases for the component.

### LTR examples

Here are some examples of the badge in left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-ltr-button.svg",
      width: 200,
      alt: "Example of a badge used on a button in a left-to-right context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-ltr-icon-button.svg",
      width: 200,
      alt: "Example of a badge used on an icon button in a left-to-right context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-ltr-list-item.svg",
      width: 200,
      alt: "Example of a badge used on a list item in a left-to-right context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-ltr-card.svg",
      width: 200,
      variant: "secondary",
      alt: "Example of a badge used on a card in a left-to-right context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-ltr-stepper.svg",
      width: 200,
      alt: "Example of a badge used on a stepper in a left-to-right context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-ltr-tabs.svg",
      width: 200,
      alt: "Example of a badge used on tabs in a left-to-right context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of the badge in right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-rtl-button.svg",
      width: 200,
      alt: "Example of a badge used on a button in a right-to-left context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-rtl-icon-button.svg",
      width: 200,
      alt: "Example of a badge used on an icon button in a right-to-left context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-rtl-list-item.svg",
      width: 200,
      alt: "Example of a badge used on a list item in a right-to-left context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-rtl-card.svg",
      width: 200,
      variant: "secondary",
      alt: "Example of a badge used on a card in a right-to-left context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-rtl-stepper.svg",
      width: 200,
      alt: "Example of a badge used on a stepper in a right-to-left context."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/badge/example-rtl-tabs.svg",
      width: 200,
      alt: "Example of a badge used on tabs in a right-to-left context."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
