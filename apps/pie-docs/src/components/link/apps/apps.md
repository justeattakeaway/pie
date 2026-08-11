---
eleventyNavigation:
    key: Apps
    parent: Link
    order: 3
shouldShowContents: true
---

## Dos and don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use standalone links to allow users to navigate to different pages within your product.",
            "Use standalone links to allow users to navigate to an entirely different website."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use standalone links as calls to action. Use buttons instead.",
            "Don’t use standalone links for actions that will change elements in a screen. Use buttons instead.",
            "Don't use the reversed styling when surrounded by regular text, as it will get lost."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/link/apps/anatomy.svg",
    alt: "Anatomy of a link.",
    width: 230
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Label:** Text label informing the user about the nature of the link.",
        "**Icon (Optional):**  Leading or trailing icon."
    ]
} %}

---

## Variants

### Default

Should be used as the default colour for all our links.

{% contentPageImage {
    src:"../../../assets/img/components/link/apps/variation-default.svg",
    alt: "A default link",
    width: 30
} %}

### High visibility

Uses a blue colour to increase the visibility of the link.

{% contentPageImage {
    src:"../../../assets/img/components/link/apps/variation-high-visibility.svg",
    alt: "A high visibility link",
    width: 30
} %}

### Inverse

It should be used in areas where an inversed background is used, or when contrast between the default or high visibility links isn’t sufficient to pass accessibility rules.

{% contentPageImage {
    src:"../../../assets/img/components/link/apps/variation-inverse.svg",
    alt: "An inverse link",
    width: 30,
    variant: "inverse"
} %}

### Inverse light

Inverse Light should be used in areas where in both light and dark mode, a dark container/background is being used for high contrast and to meet accessibility rules.

{% contentPageImage {
    src:"../../../assets/img/components/link/apps/variation-inverse-light.svg",
    alt: "An inverse light link",
    width: 30,
    variant: "inverse light"
} %}

---

## Modifiers

{% notification {
  type: "information",
  message: "Try to always underline your links, this ensures the user can determine they are interactive."
} %}

### Emphasis

Links can be de-emphasised by using their non-bold variant. When doing that, make sure these can still be identified as links. You can achieve that by:

- Adding a leading or trailing icon.
- Using the high visibility variant of the link.
- Using the default underline variant of the link.

{% contentLayout %}
  {% contentItem %}
    <h4>Bold</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/modifier-emphasis-bold.svg",
      width: 30,
      alt: "A bold link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Non-bold</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/modifier-emphasis-nonbold.svg",
      width: 30,
      alt: "A non bold link"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Styling

The underline in standalone links can be removed to achieve a more minimal look. This variant can be used when the link is repeated in a list or navigation. However, whenever you do that you’ll need to make sure they can still be identified as a link by ensuring it has enough emphasis.

{% contentLayout %}
  {% contentItem %}
    <h4>Default</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/modifier-styling-default.svg",
      width: 30,
      alt: "A default styling link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Reversed</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/modifier-styling-reversed.svg",
      width: 30,
      alt: "A reversed styling link"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Icon

You can use icons to reinforce the action that will take place when the user interacts with a standalone link. On the high visibility variant of the link the icon needs to use the same colour as the link.

{% contentLayout %}
  {% contentItem %}
    <h4>Leading</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/modifier-icon-leading.svg",
      width: 30,
      alt: "A link with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Trailing</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/modifier-icon-trailing.svg",
      width: 30,
      alt: "A link with a trailing icon"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Sizes

### Height

Both Medium and Small links have a minimum height of 32px. Height will increase if the content overflows.

{% notification {
  type: "information",
  message: "Because Links are Buttons with a link style, we will keep the links the same height as the smallest button, XS."
} %}

{% contentLayout %}
  {% contentItem %}
    <h3>Medium (M)</h3>
    <p>Type size 16dp/sp/px</p>
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/size-medium.svg",
      width: 30,
      alt: "A medium link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Small (S)</h3>
    <p>Type size 14dp/sp/px </p>
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/size-small.svg",
      width: 30,
      alt: "A small link."
    } %}
  {% endcontentItem %}
   {% contentItem %}
    <h3>XSmall (XS)</h3>
    <p>Type size 12dp/sp/px </p>
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/size-extra-small.svg",
      width: 30,
      alt: "An extra small link."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Width

Link has a minimum width of 48px.

{% contentPageImage {
    src:"../../../assets/img/components/link/apps/sizes-width.svg",
    alt: "Example of the link component in its minimum width",
    width: 30
} %}

---

## Content

- Use sentence-style capitalisation (only the first word in a phrase and any proper nouns capitalised).
- Make sure the words you convert into links are directly related to the contents that the link will lead you to.
- Use descriptive and meaningful text to the link.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/link/apps/content-do.svg",
            width: "200",
            alt: "Do example showing correct link content."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/link/apps/content-dont.svg",
            width: "200",
            alt: "Don't example showing incorrect link content."
        }]
    }
} %}

---

## Overflow

When the copy exceeds the available width, it will wrap onto a new line. Content will be centre-aligned.

{% contentPageImage {
    src:"../../../assets/img/components/link/apps/overflow.svg",
    alt: "Example of the link component when the text overflows to a second line and a trailing icon is centre-aligned",
    width: 30
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/interactive-state-default.svg",
      width: 30,
      alt: "A default link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/interactive-states-active.svg",
      width: 30,
      alt: "A active link."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

Outlines the atomic level interactive elements for the component.

### LTR examples

Here are some examples of links in left-to-right context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/example-ltr-left.svg",
      width: 360,
      alt: "A left to right example of a default link used inside a card component"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/example-ltr-right.svg",
      width: 440,
      alt: "A left to right example of an inverse link on a dark background",
      "variant": "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of links in right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/example-rtl-left.svg",
      width: 360,
      alt: "A right to left example of a default link used inside a card component"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/link/apps/example-rtl-right.svg",
      width: 440,
      alt: "A right to left example of an inverse link on a dark background",
      "variant": "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
