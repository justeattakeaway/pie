---
eleventyNavigation:
  key: Overview
  parent: 'Nested Overrides'
  order: 1
shouldShowContents: true
permalink: patterns/nested-overrides/
---

## Overview

Nested component overrides offer designers the flexibility to adapt components based on specific design needs while maintaining overall system consistency. Overrides ensure that nested elements support their parent components without disrupting the design language.

---

## Types of overrides

Overrides are useful when adjusting nested components to ensure they align with different design contexts while maintaining visual and functional consistency. These overrides typically apply to the following areas:

### Variant override

Nested elements can be adjusted to different types, styles or colours to match the context.

<!-- [image to go here] -->

### Size override

Nested component can be resized to create a clear hierarchy within the component.

<!-- [image to go here] -->

### Alignment override

Vertical alignment can be adjusted to improve layout balance.

<!-- [image to go here] -->

### Typography styling

Body content styling can be modified to enhance readability.

<!-- [image to go here] -->

---

## Contents

* Override summary
* Variant overrides
* Size & Variant overrides
* Alignment overrides
* Restricted overrides
* Typography styling

---

## Override summary


| Example             | Component/Element | Variant override | Size override | Alignment overrides |
| :------------------ | :--------------- | :--------------: | :-----------: | :-----------------: |
| Visually supportive nested elements        |   <ul><li>Avatar</li><li>Tag</li><li>Icon</li></ul>  | Yes | No | No |
| Bulk quantity nested components             |   <ul><li>Data table’s icon button, buttons, link</li></ul>           | Yes | No | No |
| Nested actions in full-page overlay components      |  <ul><li>Modal</li><li>Bottom sheet</li><li>Date picker</li></ul>           | Yes | Yes | No |
| Nested actions in non-full-page overlay components   |  <ul><li>Notification</li><li>Uploader</li></ul>| No | Yes Only decrease in size | No |
| Nested actions with specific function or purpose   |  <ul><li>Close button</li></ul>| No | No | No |
| Alignment with leading and trailing content   |  <ul><li>List item</li></ul>| No | No | Yes |

---

## Variant overrides

### Typography styling

Within a larger component, nested elements such as tags, avatars and icons often serve as visual support. 

<!-- [image to go here] -->

<!-- [image to go here] -->

Overrides help in colour and style adjustments to match the parent component's theme and ensuring contrast and readability across different design contexts.  Size should remain consistent to maintain visual balance and avoid disrupting the component’s proportions.

### Do

<!-- [image to go here] -->

Nested components can be changed to different variants and styles.

### Don't

<!-- [image to go here] -->

Nested components cannot be increased or decreased in size. 

### Do

<!-- [image to go here] -->

Icons can be changed to a different one as long as it fits the context.

### Don't

<!-- [image to go here] -->

Icons cannot be increased or decreased in size.

### Bulk quantity nested components

Components that contain bulk quantity nested components, such as data tables, often include buttons, icons, and other interactive elements. These nested components can be overridden to provide designers with more flexibility while maintaining usability.

<!-- [image to go here] -->

Variants can be adjusted to better support the data table’s structure and hierarchy. However, size adjustments are not recommended, as they can disrupt consistency, affect spacing, and impact the overall usability of the table layout.

### Do

<!-- [image to go here] -->

Icons cannot be increased or decreased in size.

### Don't

<!-- [image to go here] -->

Nested components cannot be increased or decreased in size. 

## Size & Variant overrides

### Nested ctions in full-page overlay components

Bulk action buttons, such as those in full-page overlays (e.g., modals, bottom sheets, date pickers), may need adjustments to ensure they are usable and consistent across various layouts and screen sizes.

<!-- [image to go here] -->

<!-- [image to go here] -->

<!-- [image to go here] -->

Overrides help in scaling button sizes to fit within bulk action toolbars or containers, ensuring they are proportionate and visually balanced. Style can be adjusted to any variant, as long as it aligns with the visual hierarchy. Ensure primary actions are more prominent than secondary actions.

### Do

<!-- [image to go here] -->

Nested actions in full-page overlay components can be adjusted to different sizes, but all actions within the same set must maintain a consistent size.

### Don't

<!-- [image to go here] -->

Nested actions cannot have different sizes individually within the same component.

### Do

<!-- [image to go here] -->

Nested actions in full-page overlay components can be adjusted to different variants. However, the primary action must always be more prominent than secondary actions.

### Don't

<!-- [image to go here] -->

Nested actions cannot use the same variant for both primary and secondary actions, nor should the primary action be less prominent than the secondary action.

### Size overrides only

##### Nested actions in non-full-page overlay components

Action buttons within non-full-page overlays components (e.g. notifications, uploaders) may need size adjustments to ensure they match the overall layout and user expectations.

<!-- [image to go here] -->

<!-- [image to go here] -->

Nested actions can be decreased in size to fit the available space and maintain visual balance. However, the variant should remain unchanged to ensure consistency with the overall visual hierarchy.

### Do

<!-- [image to go here] -->

Nested action(s) can be decreased in size.

### Don't

<!-- [image to go here] -->

Nested action(s) cannot be increased in size nor changed to a different variant.

### Do

<!-- [image to go here] -->

Nested bulk actions can be decreased in size.

### Don't

<!-- [image to go here] -->

Nested bulk actions cannot be increased in size nor changed to a different variant.

---

## Alignment overrides

By default, content within components is top-aligned. However, certain nested elements may require vertical alignment adjustments to maintain a proper visual hierarchy and ensure balance within the layout.

<!-- [image to go here] -->

When necessary, content can be center-aligned, ensuring that all elements—including leading and trailing content—are aligned consistently for a cohesive and well-balanced layout.

### Do

<!-- [image to go here] -->

All content within the component should be consistently aligned.

### Don't

<!-- [image to go here] -->

Content within the component should not have mixed alignments.

---

## Restricted overrides

### Nested actions with specific function or purpose

Certain nested actions that serve a specific function or purpose cannot be overwritten. For example, a close button, which is typically a standard icon or action, cannot be overridden in terms of style or size. This ensures functionality is preserved and prevents visual disruption in key interactive elements.

<!-- [image to go here] -->

<!-- [image to go here] -->

<!-- [image to go here] -->

<!-- [image to go here] -->

### Don't

<!-- [image to go here] -->

Specific function or purpose actions should not be changed to a different variant.

---

## Typography styling

Typography overrides are useful to tailor text to suit different use cases and visual needs.

### Style

Only body text and captions can be styled, e.g. bold or underlined. These changes should be evaluated on a case-by-case basis by the design system team.

### Weight

The font weight should remain consistent and cannot be scaled up or down to maintain clarity and visual consistency across all components.
