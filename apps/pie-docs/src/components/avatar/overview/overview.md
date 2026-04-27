---
eleventyNavigation:
    key: Overview
    parent: Avatar
    order: 1
shouldShowContents: true
permalink: components/avatar/
---

## Overview

The purpose of avatars is to provide a visual representation of the user or entity, which helps personalise the user experience and creates a sense of identity and recognition.

Avatars can vary in design and appearance, ranging from simple user icons to initials. They can also be static icons or dynamic and interactive elements that respond to user actions or display additional information upon interaction.


{% contentPageImage {
    src:"../../../assets/img/components/avatar/overview.svg",
    alt: "An avatar that contains initials."
} %}



---

## Do's & don’ts

### Do
- Prioritise initials avatar over user icon avatar for individuals.
- Make sure you use the correct size for its placement, whether it's in a list, stand-alone, or any other context.
- Always maintain equal width and height dimensions.

### Don'ts
- Don’t use the initials avatar for a non-individuals entity  (e.g. a company).

---

### Anatomy

1. **Container:** Background container that organises the information.
2. **Initials:** Displays the user's first and last name initials.
3. **User Icon**

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Avatar documentation, please see the resources below."
} %}

{% resourceTable {
    componentName: 'Avatar'
} %}
