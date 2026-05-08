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

Content within an Accordion is flexible to the use-case. When using the design component in it’s expanded state, the divider should be removed and placed underneath the expanded content.

---

## Overview

**Do**
- Use to organise related information.
- Use to shorten pages and reduce scrolling when content isn’t crucial to read in full.

**Don't**
- Don’t use if the quantity of the content within the Accordion is too large, consider Tabs instead.

---

## Anatomy
1. Icon (Optional): Non-interactive icon that can be used to visually support the primary text.
2. Primary Text: Informs the user the type of content contained within the Accordion.
3. Secondary Text (Optional): Provides additional detail if required, aiming to be contained within two lines.
4. Chevron: Indicates whether the Accordion is open or closed.
5. Divider (Optional): Helps visually defining the end of a list item and the beginning of the next one.

---

## Variations

### Default
Used when the category title needs to be prominent on the page.

### Low emphasis
Used when the category title doesn’t need to be highly prominent. 

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Accordion documentation, please see the resources below."
} %}

{% resourceTable {
    componentName: 'Accordion'
} %}
