---
eleventyNavigation:
    key: Overview
    parent: Accordion
    order: 1
shouldShowContents: true
permalink: components/accordion/
---

## Overview

Accordions are vertical stacks of headers that categorise content. Clicking or interacting with a header expands or collapses its associated content, enabling users to selectively view information while keeping the interface clean.

Accordions are useful for presenting categorised information like FAQs, product features, or menus, and managing large content volumes while ensuring a streamlined user experience.

{% notification {
  type: "information",
  message: "Content within an Accordion is flexible to the use-case. When using the design component in its expanded state, the divider should be removed and placed underneath the expanded content."
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use to organise related information.",
            "Use to shorten pages and reduce scrolling when content isn't crucial to read in full."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use if the quantity of the content within the Accordion is too large, consider Tabs instead."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/accordion/anatomy.svg",
    alt: "Anatomy of an accordion showing a collapsed accordion with numbered labels pointing to the icon, primary text, chevron, and divider, and an expanded accordion with numbered labels pointing to the secondary text and content area."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon (Optional):** Non-interactive icon that can be used to visually support the primary text.",
        "**Primary Text:** Informs the user the type of content contained within the Accordion.",
        "**Secondary Text (Optional):** Provides additional detail if required, aiming to be contained within two lines.",
        "**Chevron:** Indicates whether the Accordion is open or closed.",
        "**Divider (Optional):** Helps visually defining the end of a list item and the beginning of the next one."
    ]
} %}

---

## Variations

### Default

Used when the category title needs to be prominent on the page.

{% contentPageImage {
    src:"../../../assets/img/components/accordion/variation-default.svg",
    alt: "A default accordion with prominent primary text and a chevron."
} %}

### Low emphasis

Used when the category title doesn't need to be highly prominent.

{% contentPageImage {
    src:"../../../assets/img/components/accordion/variation-low-emphasis.svg",
    alt: "A low emphasis accordion with less prominent primary text and a chevron."
} %}

---

## Modifiers

### Icons

When incorporating an icon into a Accordion, it is essential to ensure that the icon clearly connects to the content of the Accordion, helping reinforce the Accordion's purpose.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/accordion/modifier-icons-do.svg",
            width: "400px",
            alt: "An accordion with an icon that is relevant to the accordion content."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/accordion/modifier-icons-dont.svg",
            width: "400px",
            alt: "An accordion with an icon that does not relate to the accordion content."
        }]
    }
} %}

#### Leading

{% contentPageImage {
    src:"../../../assets/img/components/accordion/modifier-icons-leading.svg",
    alt: "An accordion with a leading icon positioned before the primary text."
} %}

### Secondary text

Used for Accordions that require an additional secondary line of information to provide clarity to the user.

{% contentPageImage {
    src:"../../../assets/img/components/accordion/modifier-secondary-text.svg",
    alt: "An accordion displaying both primary text and secondary text below it."
} %}

### Divider

By default the divider is used, with the exception of the last Accordion in a stack to signify the end of the section.

{% contentPageImage {
    src:"../../../assets/img/components/accordion/modifier-divider.svg",
    alt: "Three accordions stacked vertically with dividers between them and no divider on the last item."
} %}

---

## Behaviours

### States

The Accordion has states, collapsed and expanded. The chevron pinned right of the Accordion indicates which state it is in. The chevron points down to indicate collapsed, and up to indicate expanded. Accordions, by default are collapsed with all content panels closed. Starting in the collapses state allows the user a high level overview of the available information.

{% contentLayout %}
  {% contentItem %}
    <h4>Collapsed</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/behaviour-state-collapsed.svg",
      alt: "A collapsed accordion with a downward pointing chevron."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Expanded</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/behaviour-state-expanded.svg",
      alt: "An expanded accordion with an upward pointing chevron and content visible below."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

Accordions expand independently allowing multiple Accordions to be open at once.

{% contentPageImage {
    src:"../../../assets/img/components/accordion/behaviour-multiple-expanded.svg",
    alt: "A stack of four accordions with the first two expanded showing content and dividers, and the last two collapsed."
} %}

### Text wrapping

When the content is too long to fit in one line, both the Primary and Secondary text should wrap into a new line.

{% contentPageImage {
    src:"../../../assets/img/components/accordion/behaviour-text-wrapping.svg",
    alt: "An accordion with long primary and secondary text that wraps onto multiple lines."
} %}

---

## Interactions

The whole container is clickable to expand or collapse the Accordion.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/interaction-collapsed.svg",
      alt: "A collapsed accordion with an overlay indicating the entire container is the interactive area."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/interaction-expanded.svg",
      alt: "An expanded accordion with an overlay indicating only the header area is the interactive area, not the content below."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Content

### Primary text

The primary text should be as brief as possible while still being clear and descriptive. Use sentence-style capitalisation (only the first world in a phrase and any proper nouns capitalised).

---

## Examples

Here are some examples of Accordions in context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/example-ltr-faq.svg",
      alt: "An example of an accordion used in a FAQ context, with one item expanded showing detailed answer text about gift cards."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/example-ltr-menu.svg",
      alt: "An example of an accordion used in a restaurant menu context, with a category expanded showing food items with images and prices."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL Examples

Here are some examples of Accordions in RTL context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/example-rtl-faq.svg",
      alt: "A right to left example of an accordion used in a FAQ context with Hebrew text, with one item expanded showing detailed content."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/example-rtl-menu.svg",
      alt: "A right to left example of an accordion used in a restaurant menu context, with a category expanded showing food items with images and prices in a mirrored layout."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Interactive States

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/interactive-state-default.svg",
      alt: "Default state of an accordion."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Hover</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/interactive-state-hover.svg",
      alt: "An accordion that is hovered."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/interactive-state-active.svg",
      alt: "An accordion that is active."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Focus</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/accordion/interactive-state-focus.svg",
      alt: "An accordion that is focused."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Structure

Outlines the internal spacing structure of the component.

{% contentPageImage {
    src:"../../../assets/img/components/accordion/structure.svg",
    alt: "Structure diagram showing the internal spacing of accordion variants including default, icon, and secondary text configurations for both wide and narrow breakpoints, with spacing values of 16px for padding and 4px between primary and secondary text."
} %}

---

## Resources

{% resourceTable {
    componentName: 'Accordion'
} %}
