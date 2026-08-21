---
eleventyNavigation:
    key: Web
    parent: Icon with background
    order: 2
shouldShowContents: true
draft: true
---

## Dos and don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Make sure you use the correct size for its placement, whether it's in a list, stand-alone, or any other context."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use this component as avatar. For this use case, use the [[App] Avatar - icon](/components/avatar/apps/) or [[Web] Avatar - icon](/components/avatar/web/) components instead.",
            "Don't use this component as button or interactive solution. For this use case, use the [[App] Icon button](/components/icon-button/) or [[Web] Icon button](/components/icon-button/web/) component instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/icon-with-background/anatomy.svg",
    alt: "Anatomy of an icon with a background.",
    width: "121px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Container:** Background container that organises the information.",
        "**Icon:** Icon that visually represents the action and/or supports the written content."
    ]
} %}

---

## Variants

Two shape options are available for icons with a background.

### Circle

{% contentPageImage {
    src:"../../../assets/img/components/icon-with-background/variants-circle.svg",
    alt: "An icon with a background using the circle shape.",
    width: 200
} %}

### Square

{% contentPageImage {
    src:"../../../assets/img/components/icon-with-background/variants-square.svg",
    alt: "An icon with a background using the square shape.",
    width: 200
} %}

---

## Modifiers

### Emphasis

Depending on the level of visual prominence you want to give to the icon's background, you can choose between strong or subtle emphasis.

{% contentLayout %}
  {% contentItem %}
  <h4>Strong</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-emphasis-strong.svg",
      width: 200,
      alt: "An icon with a background using strong emphasis."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Subtle</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-emphasis-subtle.svg",
      width: 200,
      alt: "An icon with a background using subtle emphasis."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Colours

Select from a palette of distinct brand colours for the icon.

{% contentLayout %}
  {% contentItem %}
  <h4>Neutral</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-neutral.svg",
      width: 200,
      alt: "An icon with a background in the neutral colour.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Neutral - alternative</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-neutral-alternative.svg",
      width: 200,
      alt: "An icon with a background in the neutral alternative colour."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>01 Orange</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-01orange.svg",
      width: 200,
      alt: "An icon with a background in the 01 Orange colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>02 Orange subtle</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-02orange-subtle.svg",
      width: 200,
      alt: "An icon with a background in the 02 Orange subtle colour."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>03 Cupcake</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-03cupcake.svg",
      width: 200,
      alt: "An icon with a background in the 03 Cupcake colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>04 Berry</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-04berry.svg",
      width: 200,
      alt: "An icon with a background in the 04 Berry colour."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>05 Turmeric</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-05turmeric.svg",
      width: 200,
      alt: "An icon with a background in the 05 Turmeric colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>06 Aubergine</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-06aubergine.svg",
      width: 200,
      alt: "An icon with a background in the 06 Aubergine colour."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>08 Latte</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-08latte.svg",
      width: 200,
      alt: "An icon with a background in the 08 Latte colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Error</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-error.svg",
      width: 200,
      alt: "An icon with a background in the error colour."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Warning</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-warning.svg",
      width: 200,
      alt: "An icon with a background in the warning colour."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Success</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-success.svg",
      width: 200,
      alt: "An icon with a background in the success colour."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>Information</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/modifiers-colours-information.svg",
      width: 200,
      alt: "An icon with a background in the information colour."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Sizes

### Circle

{% contentLayout %}
  {% contentItem %}
  <h4 id="sizes-circle-small">Small (S)</h4>
    <p>Height and width of 24px, with a 16px icon.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/sizes-circle-small.svg",
      width: 200,
      alt: "A small circle icon with a background."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4 id="sizes-circle-medium">Medium (M)</h4>
    <p>Height and width of 32px, with a 20px icon.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/sizes-circle-medium.svg",
      width: 200,
      alt: "A medium circle icon with a background."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4 id="sizes-circle-large">Large (L)</h4>
    <p>Height and width of 40px, with a 24px icon.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/sizes-circle-large.svg",
      width: 200,
      alt: "A large circle icon with a background."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4 id="sizes-circle-extra-large">X large (XL)</h4>
    <p>Height and width of 56px, with a 32px icon.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/sizes-circle-extra-large.svg",
      width: 200,
      alt: "An extra large circle icon with a background."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Square

{% contentLayout %}
  {% contentItem %}
  <h4 id="sizes-square-small">Small (S)</h4>
    <p>Height and width of 24px, with a 20px icon.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/sizes-square-small.svg",
      width: 200,
      alt: "A small square icon with a background."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4 id="sizes-square-medium">Medium (M)</h4>
    <p>Height and width of 32px, with a 24px icon.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/sizes-square-medium.svg",
      width: 200,
      alt: "A medium square icon with a background."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4 id="sizes-square-large">Large (L)</h4>
    <p>Height and width of 40px, with a 28px icon.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/sizes-square-large.svg",
      width: 200,
      alt: "A large square icon with a background."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4 id="sizes-square-extra-large">X large (XL)</h4>
    <p>Height and width of 56px, with a 36px icon.</p>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/sizes-square-extra-large.svg",
      width: 200,
      alt: "An extra large square icon with a background."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive states

{% contentLayout %}
  {% contentItem %}
  <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/interactive-state-default.svg",
      width: 200,
      alt: "An icon with a background in its default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Disabled</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/icon-with-background/interactive-state-disabled.svg",
      width: 200,
      alt: "An icon with a background in its disabled state.",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR example

Here are some examples of the icon with background in LTR context:

{% contentPageImage {
    src:"../../../assets/img/components/icon-with-background/example-ltr.svg",
    alt: "An icon with a background used as the leading element of a multi-line list item that displays text from left to right.",
    width: "360px"
} %}

### RTL example

Here are some examples of the icon with background in RTL context:

{% contentPageImage {
    src:"../../../assets/img/components/icon-with-background/example-rtl.svg",
    alt: "An icon with a background used as the leading element of a multi-line list item that displays text from right to left.",
    width: "360px"
} %}
