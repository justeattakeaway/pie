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


{% contentPageImage {
    src:"../../../assets/img/components/accordion/overview.svg",
    alt: "Three accordions that are vertically stacked together."
} %}

---

## Dos and dont's

### Do

- Use to organise related information.
- Use to shorten pages and reduce scrolling when content isn’t crucial to read in full.

### Don't

- Don’t use if the quantity of the content within the Accordion is too large, consider [Tabs](https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?node-id=2087%3A13001) instead.

---

## Anatomy

- Icon (Optional): Non-interactive icon that can be used to visually support the primary text.
- Primary Text: Informs the user the type of content contained within the Accordion.
- Secondary Text (Optional): Provides additional detail if required, aiming to be contained within two lines.
- Chevron: Indicates whether the Accordion is open or closed.
- Divider (Optional): Helps visually defining the end of a list item and the beginning of the next one.

---

## Variations
### Default

{% contentPageImage {
    src:"../../../assets/img/components/accordion/overview.svg",
    alt: "Three accordions that are vertically stacked together."
} %}

Used when the category title needs to be prominent on the page.

### Low Emphasis

{% contentPageImage {
    src:"../../../assets/img/components/accordion/overview.svg",
    alt: "Three accordions that are vertically stacked together."
} %}

Used when the category title doesn’t need to be highly prominent. 

---

## Modifiers
### Icons

When incorporating an icon into a Accordion, it is essential to ensure that the icon clearly connects to the content of the Accordion, helping reinforce the Accordion’s purpose.

### Leading
{% contentPageImage {
    src:"../../../assets/img/components/accordion/overview.svg",
    alt: "Three accordions that are vertically stacked together."
} %}
{% contentPageImage {
    src:"../../../assets/img/components/accordion/overview.svg",
    alt: "Three accordions that are vertically stacked together."
} %}
### Secondary text

Used for Accordions that require an additional secondary line of information to provide clarity to the user.

{% contentPageImage {
    src:"../../../assets/img/components/accordion/overview.svg",
    alt: "Three accordions that are vertically stacked together."
} %}

### Divider

By default the divider is used, with the exception of the last Accordion in a stack to signify the end of the section.

{% contentPageImage {
    src:"../../../assets/img/components/accordion/overview.svg",
    alt: "Three accordions that are vertically stacked together."
} %}

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Accordion documentation, please see the resources below."
} %}

{% resourceTable {
    componentName: 'Accordion'
} %}
