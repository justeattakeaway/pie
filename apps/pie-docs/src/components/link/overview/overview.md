---
eleventyNavigation:
    key: Overview
    parent: Link
    order: 1
shouldShowContents: true
---

## Overview
The purpose of links is to provide a visual and interactive way for users to explore and navigate through an interface. By clicking or tapping on a link, users can quickly access additional information or move to a different location, enhancing their browsing experience and enabling efficient interaction.

Links are often used to connect various pages, sections, or external resources, creating navigation menus and directing users to related content. They also enable interactions like opening new tabs or windows.

{% contentPageImage {
    src:"../../../assets/img/components/link/overview.svg",
    alt: "A group of links that are displayed together in a row."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use standalone links to allow users to navigate to different pages within your product.",
            "Use standalone links to allow users to navigate to an entirely different website.",
            "Use standalone links as means to jump between sections of a page."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use standalone links as calls to action. Use buttons instead.",
            "Don’t use standalone links for actions that will change elements in a screen. Use buttons instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/link/anatomy.svg",
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

## Variations

### Default

Should be used as the default colour for all our links.

{% contentPageImage {
    src:"../../../assets/img/components/link/variation-default.svg",
    alt: "A default link",
    width: 30
} %}

### High visibility

Uses a blue colour to increase the visibility of the link.

{% contentPageImage {
    src:"../../../assets/img/components/link/variation-high-visibility.svg",
    alt: "A high visibility link",
    width: 30
} %}

### Inverse

It should be used in areas where an inversed background is used, or when contrast between the default or high visibility links isn’t sufficient to pass accessibility rules.

{% contentPageImage {
    src:"../../../assets/img/components/link/variation-inverse.svg",
    alt: "An inverse link",
    width: 30,
    variant: "inverse"
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
      src: "../../../assets/img/components/link/modifier-emphasis-bold.svg",
      width: 30,
      alt: "A bold link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Non-bold</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/link/modifier-emphasis-nonbold.svg",
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
      src: "../../../assets/img/components/link/modifier-styling-default.svg",
      width: 30,
      alt: "A default styling link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Reversed</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/link/modifier-styling-reversed.svg",
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
      src: "../../../assets/img/components/link/modifier-icon-leading.svg",
      width: 30,
      alt: "A link with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Trailing</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/link/modifier-icon-trailing.svg",
      width: 30,
      alt: "A link with a trailing icon"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Sizes

{% contentLayout %}
  {% contentItem %}
    <h3>Medium (M)</h3>
    <p>Type size 16dp/sp/px</p>
    {% contentPageImage {
      src: "../../../assets/img/components/link/size-medium.svg",
      width: 30,
      alt: "A medium link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Small (S)</h3>
    <p>Type size 14dp/sp/px </p>
    {% contentPageImage {
      src: "../../../assets/img/components/link/size-small.svg",
      width: 30,
      alt: "A small link."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

--- 

## Content

- Be mindful of which words in a paragraph you use for your links. Make sure the words you convert into links are directly related to the content that the link will lead you to.

- Use sentence-style capitalization (only the first word in a phrase and any proper nouns capitalized). 

---

## Using inline links

{% notification {
  type: "information",
  message: "Due to limitations in Figma, inline links can’t be componentised. Instead, we apply a typographic style (underlined) and a colour (link colour) to the bit of text that we want to turn into an inline link."
} %}


### Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use inline links to allow users to navigate to different pages within your product.",
            "Use inline links to allow users to navigate to an entirely different website.",
            "Use inline links as means to jump between sections of a page.",
            "Use inline links to present phone numbers or email addresses."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use inline links as calls to action. Use buttons instead.",
            "Don’t use inline links for actions that will change elements in a screen. Use buttons instead.",
            "Don’t use an icon with inline links. Use standalone links instead."
        ]
    }
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/link/interactive-state-default.svg",
      width: 30,
      alt: "A default link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Hover</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/link/interactive-state-hover.svg",
      width: 30,
      alt: "A hovered link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/link/interactive-state-active.svg",
      width: 30,
      alt: "A active link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Focus</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/link/interactive-state-focus.svg",
      width: 30,
      alt: "A focused link."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Visited</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/link/interactive-state-visited.svg",
      width: 30,
      alt: "A visited link."
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
      src: "../../../assets/img/components/link/example-ltr-link.svg",
      width: 360,
      alt: "A left to right example of a default link"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/link/example-ltr-link-inverse.svg",
      width: 440,
      alt: "A left to right example of an inverse link on a dark background",
      "variant": "inverse"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/link/example-ltr-link-inline.svg",
      width: 380,
      alt: "A left to right example of an inlined link"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/link/example-ltr-link-inline-inverse.svg",
      width: 380,
      alt: "A left to right example of an inlined link on a dark background",
      "variant": "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of links in right-to-left context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/link/example-rtl-link.svg",
      width: 360,
      alt: "A right to left example of a default link"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/link/example-rtl-link-inverse.svg",
      width: 440,
      alt: "A right to left example of an inverse link on a dark background",
      "variant": "inverse"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/link/example-rtl-link-inline.svg",
      width: 380,
      alt: "A right to left example of an inlined link"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/link/example-rtl-link-inline-inverse.svg",
      width: 380,
      alt: "A right to left example of an inlined link on a dark background",
      "variant": "inverse"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Link documentation, please see the resources below."
} %}

{% resourceTable {
    componentName: 'Link'
} %}
