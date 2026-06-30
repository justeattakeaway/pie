---
eleventyNavigation:
  key: Overview
  parent: 'Selected State'
  order: 1
shouldShowContents: true
permalink: patterns/selected-state/
---

## Overview

Selecting a UI element is a fundamental and common interaction in many user interfaces. It allows users to identify and interact with specific items within a group.

---

## Do's and Don'ts

{% usage {
  do: {
    type: usageTypes.text,
    items: [
      "Ensure selected elements are clearly distinct.",
      "Use our suggested visual cues to avoid ambiguity.",
      "Use our suggested visual cues to maintain consistency across designs."
    ]
  },
  dont: {
    type: usageTypes.text,
    items: [
      "Avoid excessive visual changes to prevent clutter.",
      "Don't compromise the readability of text or content within the selected element."
    ]
  }
} %}

---

## Visual indicators

We've put together a list of items and visual cues which you should or could use to highlight selected boxes and cards.

Make sure you use the ones in 'Must do' for all your selections and consider using the ones in 'Can do' to make the selection stand out more explicitly.

### Border

- Change the border colour to $color-border-selected-brand as the default token for selected state. Use $color-border-selected as an alternative to orange.

- Change the border weight to 2px.

#### Using $color-border-selected

{% contentPageImage {
src:"../../../assets/img/patterns/selected-state/visual-border-selected.svg",
alt: "Example of list components with selected state using the border-selected token.",
width: 200
} %}

#### Using $color-border-selected-brand

{% contentPageImage {
src:"../../../assets/img/patterns/selected-state/visual-border-selected-brand.svg",
alt: "Example of list components with selected state using the border-selected-brand token.",
width: 200
} %}

### Iconography

- In components using a specific placeholder slot, use the tick icon.

- In components using placeholder slots with different size options, use a 24x24px tick icon, and set it to $color-content-brand colour.

{% contentPageImage {
src:"../../../assets/img/patterns/selected-state/visual-iconography.svg",
alt: "Example of list components unselected and selected using iconography a combination of border and iconography to communicate selection.",
width: 200
} %}

### Component variant

- Use UI controls like radio buttons or checkboxes to indicate selections.

- Make sure you're using the 'selected' variant of the component.

{% contentPageImage {
src:"../../../assets/img/patterns/selected-state/component-examples.svg",
alt: "Example of different components in the selected variant.",
width: 200
} %}

### Aim for consistency

If selected state is presented across several steps of the journey use the same border for all components.

{% usage {
  do: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/patterns/selected-state/consistency-do.svg",
            width: "200px",
            alt: "Example of a mobile screen with several list item components with consistent selected state."
        }]
  },
  dont: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/patterns/selected-state/consistency-dont.svg",
            width: "200px",
            alt: "Example of a mobile screen with several list item components with inconsistent selected state."
        }]
  }
} %}
