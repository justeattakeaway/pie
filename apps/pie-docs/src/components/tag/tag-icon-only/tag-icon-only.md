---
eleventyNavigation:
    key: 'Tag - Icon Only'
    parent: tag
shouldShowContents: true
---

## Overview
The purpose of the icon only tag is to provide a quick and visually appealing way to highlight or identify specific items, topics or attributes. Icon only tags enhance the user experience by simplifying content organisation and facilitating content discovery and filtering. Icon only tags can be embedded in other components such as cards, data tables (among others) to help users understand and filter information more effectively.

{% contentPageImage {
    src:"../../../assets/img/components/tag-icon-only/overview.svg",
    alt: "Tags containing icons only inside a Toast component."
} %}

---

## Dos and Don’ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
          "Use to call attention to details in a way that makes it easy to scan.",
          "Use it when an icon on it’s own can clearly communicate the purpose.",
          "Use when there is not enough space for a standard tag."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
          "Don’t use for interactions crucial for the flow.",
          "Don’t use the icon only tag if a label is required to communicate the purpose, use a tag instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/tag-icon-only/anatomy.svg",
    alt: "Anatomy of an icon only tag.",
    width: 32
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon:** A symbol used to communicate a message to the user."
    ]
} %}

---

## Variations

### Default

{% contentPageImage {
    src:"../../../assets/img/components/tag-icon-only/variations-default.svg",
    alt: "A tag with a leading icon placeholder and no text",
    width: 32
} %}

---

## Modifiers

### Emphasis

Depending on the level of visual prominence you want to give to the icon only tag, you can choose between strong or subtle emphasis.

{% contentLayout %}
  {% contentItem %}
    <h4>Strong</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/modifiers-strong.svg",
      width: "32px",
      alt: "A tag component with a leading placeholder icon and a label text"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Subtle</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/modifiers-subtle.svg",
      width: "32px",
      alt: "A tag component with a trailing placeholder icon and a label text",
      variant: "secondary"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Colours

Select from a range of colour options across the two levels of emphasis.

{% contentLayout %}
  {% contentItem %}
    <h4>Neutral</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-neutral.svg",
      width: "72px",
      alt: "A pair of strong and subtle neutral tags."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Neutral alternative</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-neutral-alternative.svg",
      width: "32px",
      alt: "A subtle alternative for neutral tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Ghost</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-ghost.svg",
      width: "32px",
      alt: "A tag component with the ghost colour alternative."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Outline</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-outline.svg",
      width: "32px",
      alt: "A tag component with an outline."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Information</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-information.svg",
      width: "72px",
      alt: "A pair of strong and subtle information tags."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Success</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-success.svg",
      width: "72px",
      alt: "A pair of strong and subtle success tags."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Warning</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-warning.svg",
      width: "72px",
      alt: "A pair of strong and subtle warning tags."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Error</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-error.svg",
      width: "72px",
      alt: "A pair of strong and subtle error tags."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>02 Orange subtle</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-orange.svg",
      width: "32px",
      alt: "A orange colour tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>03 Cupcake</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-cupcake.svg",
      width: "72px",
      alt: "A cupcake colour tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>04 Berry</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-berry.svg",
      width: "72px",
      alt: "A pair of strong and subtle berry colour tags."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>06 Aubergine</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/colours-aubergine.svg",
      width: "72px",
      alt: "A pair of strong and subtle aubergine tags."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Content

### Icons

It is essential to ensure that the icon clearly conveys the intended message of the icon only tag. The icon should be directly related to the flow the user is taking, helping to reinforce the contextual information as required.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/tag-icon-only/content-icons-do.svg",
            width: "32px",
            alt: "A tag with an icon that conveys meaning related to the context."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/tag-icon-only/content-icons-dont.svg",
            width: "32px",
            alt: "A tag with an icon that does not conveys meaning related to the context."
        }]
    }
} %}

___

## Meaning and purpose

Icon only tags can be used to indicate status or used to convey specific meanings within JET, some examples are displayed below.

{% contentPageImage {
    src:"../../../../assets/img/components/tag-icon-only/meaning-and-purpose.svg",
    alt: "A collection of different tag variants",
    width: "192px"
} %}

{% list {
    type: listTypes.ordered,
    items: [
      "**Info:** Drawing attention to contextual information for the user",
      "**Warning:** Drawing attention to non-critical information for the user",
      "**Success:** Drawing attention to positive information for the user",
      "**Error:** Drawing attention to critical information for the user. Please review if an icon only tag is appropriate it might be better to use a dialogue, notification, toast or banner component",
      "**Offers:** Drawing attention to contextual information about the details of a deal or promotion to the user"
    ]
} %}

---

## Interactive states

Icon only tags include default and disabled states.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/interactive-states-default.svg",
      width: "32px",
      alt: "Default state of a tag."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Disabled</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/tag-icon-only/interactive-states-disabled.svg",
      width: "32px",
      alt: "Disabled state of a tag."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here is an example of an icon only tag in a left-to-right context:

{% contentPageImage {
  src: "../../../assets/img/components/tag-icon-only/example.svg",
  width: "408px",
  alt: "A card containing two tags."
} %}

### RTL examples

{% notification {
  type: "information",
  message: "The icon only tag doesn’t change in RTL."
} %}

---

## Resources

{% resourceTable {
    componentName: 'Tag'
} %}
