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

## Do’s & don’ts

### Do's
- Prioritise initials avatar over user icon avatar for individuals.
- Make sure you use the correct size for its placement, whether it's in a list, stand-alone, or any other context.
- Always maintain equal width and height dimensions.

### Don'ts
- Don’t use the initials avatar for a non-individuals entity  (e.g. a company).

---

## Anatomy
1. **Container:** Background container that organises the information.
2. **Initials:** Displays the user's first and last name initials.
3. **User Icon:** It can represent any entity, such as a user or a business.
4. **Photo:** Displays a picture of the user.

---

## Variants
### Initials
Use the initials avatar variation when you want to represent an individual user. Use it only when the name is known.
### Icon
Use the user icon avatar variation when you want to represent an individual user whose name has not been specified, or for non-individual entities such as companies, teams or groups.
### Photo
Use the Photo avatar variation when you want to display a picture of the user. 
### Unauthenticated
Use the unauthenticated variation when the user hasn't logged in or authenticated their session yet. 

---

## Modifiers
### Emphasis
Depending on the level of visual prominence you want to give to your avatar, you can choose between strong or subtle emphasis. Only available for Initials and Icon variations.  

---

## Resources

{% notification {
  type: "warning",
  message: "We’re currently working on updating our Avatar documentation, please see the resources below."
} %}

{% resourceTable {
    componentName: 'Avatar'
} %}
