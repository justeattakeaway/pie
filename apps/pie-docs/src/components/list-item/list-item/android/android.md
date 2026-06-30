---
eleventyNavigation:
    key: Android
    parent: List Item
    order: 3
---

## Overview

A list item is a single element in a list that displays specific information in an organised manner, allowing users to optionally interact with it.

The purpose of list items is to present individual pieces of content or data within a larger list, enabling users to easily scan, navigate, and interact with the information. It helps organise and structure content in a user-friendly and intuitive manner.

List items can be styled with various visual elements such as icons, illustrations, thumbnail (among others). They are commonly used in content listings or any situation where multiple items need to be displayed in a structured way.

> IMAGE PLACEHOLDER

---

## Dos and Don'ts

### Do

Aim to keep the primary text to a single line without wrapping, and the secondary text to two lines if possible. Consider a different component or clarify the design if you require lots of text.

Use to logically group items that follow the same content structure.

> IMAGE PLACEHOLDER

### Don't

Do not use if the list content needs to be nested more than one level deep and becomes overly complex and lengthy.

> IMAGE PLACEHOLDER

---

## Anatomy

1. **Primary text:** Gives the users an overview of the content, aiming to be contained within one line.

2. **Secondary text (optional):** Provides additional detail if required, aiming to be contained within two lines.

3. **Leading icon with background (optional):** Non-interactive icon with a background that can be used to visually support the primary text.

4. **Divider (optional):** Helps visually define the end of a list item and the beginning of the next one.

5. **Avatar (optional):** Placeholder to be replaced with a close-up photo of a person.

6. **Thumbnail (optional):** Placeholder to be replaced with an image.

7. **Leading icon (optional):** Non-interactive icon that can be used to visually support the primary text.

8. **Checkbox (optional):** Allows users to select none, one, or more items from the list. Left or right alignment should be consistent through the pillar.

9. **Radio (optional):** Allowing the user to select a single option from the list. Left or right alignment should be consistent through the pillar.

10. **Payment icon (optional):** Non-interactive payment icon that is used to visually support a payment method.

11. **Switch (optional):** Used to quickly switch between two possible states.

12. **Trailing icon (optional):** Interactive icon (i.e. a bin or drag), but is not to be used as a secondary CTA.

13. **Meta text (optional):** Highlights basic information about the List item.

14. **Tag (optional):** Used to highlight special conditions like 'sold out'.

> IMAGE PLACEHOLDER

---

## Variants

### Non-interactive

The non-interactive variation should be used when the list item doesn't require any component level interactive states tied to the instance.

> IMAGE PLACEHOLDER

### Interactive

The interactive variations should be used when the list item requires component level, or nested component level interactive states tied to the instance.

> IMAGE PLACEHOLDER

---

## Modifiers

### Compact

The height of the component is decreased to reduce the vertical space, and used when space needs to be saved. If the secondary text is required, don't apply the compact prop.

> IMAGE PLACEHOLDER

### Secondary text

The secondary text can be used to provide additional content that supports the primary text.

> IMAGE PLACEHOLDER

### Bold primary text

There's an option to use bold in the Primary text.

> IMAGE PLACEHOLDER

---

## Leading content (Non-interactive)

Avatar, Icon with background and thumbnail are not available in the compact size.

### Avatar

Not available in the Compact variant.

> IMAGE PLACEHOLDER

### Icon

Any decorative icon can be inserted into the placeholder.

> IMAGE PLACEHOLDER

### Icon with background

Any decorative icon can be inserted into the placeholder.

> IMAGE PLACEHOLDER

### Payment method

Payment method icon can be selected in properties.

> IMAGE PLACEHOLDER

### Thumbnail

Not available in the Compact variant.

> IMAGE PLACEHOLDER

---

## Leading content (Interactive)

Both avatar, icon with background and thumbnail are not available in the compact size.

All form elements: checkbox, radio and switch display their own interactive states rather than the list item container.

### Avatar

Not available in the Compact variant.

> IMAGE PLACEHOLDER

### Checkbox

Alignment should be consistent through the pillar.

> IMAGE PLACEHOLDER

### Radio

Alignment should be consistent through the pillar.

> IMAGE PLACEHOLDER

### Thumbnail

Not available in the Compact variant.

> IMAGE PLACEHOLDER

---

## Trailing content (Non-interactive)

### Icon

Any decorative icon can be inserted into the placeholder.

> IMAGE PLACEHOLDER

### Meta text

Highlights additional basic information about the List item.

> IMAGE PLACEHOLDER

### Tag

Alignment should be consistent through the pillar.

> IMAGE PLACEHOLDER

---

## Trailing content (Interactive)

All form elements: checkbox, radio and switch display their own interactive states rather than the list item container.

### Checkbox

Alignment should be consistent through the pillar.

> IMAGE PLACEHOLDER

### Icon

Any decorative icon can be inserted into the placeholder.

> IMAGE PLACEHOLDER

### Meta text

Highlights additional basic information about the List item.

> IMAGE PLACEHOLDER

### Radio

Alignment should be consistent through the pillar.

> IMAGE PLACEHOLDER

### Switch

Used to quickly switch between two possible states.

> IMAGE PLACEHOLDER

### Tag

Alignment should be consistent through the pillar.

> IMAGE PLACEHOLDER

---

## Divider

The divider is used to visually separate individual list items from each other. Dividers should never be used on the last item within a group.

> IMAGE PLACEHOLDER

---

## Overrides

### Variants

1. **Avatar:** The Avatar's variants can be overridden.

2. **Tag:** The Tag's variants can be overridden.

3. **Icon with background:** The Icon with background's variants can be overridden.

> IMAGE PLACEHOLDER

### Alignment / Layout

1. **Alignment:** The vertical alignment of both leading and trailing content can be adjusted to centre alignment. However, both must maintain the same alignment.

2. **Vertical spacing:** Vertical padding can be removed when being used within a component e.g. Modal, Bottom sheet.

> IMAGE PLACEHOLDER

### Selected state

Find more information in the Selected state patterns.

1. **Border colour:** The border colour token can be overridden with `$color-border-selected`.

2. **Icon colour:** The icon colour token can be overridden with `$color-content-brand-solid`.

> IMAGE PLACEHOLDER

---

## Layout

### Stacking

List items can be vertically stacked and horizontally, and if dividers are being used; it is suggested that the last item's divider is removed.

> IMAGE PLACEHOLDER

---

## Form controls

The radio form controls should always be used within a group, allowing users to make a single selection from a predefined set of options.

> IMAGE PLACEHOLDER

---

## Sizes

Depending on the properties applied to the component, the minimum height of the component fluctuates.

| Compact | Secondary text | Minimum height | Notes |
|---------|----------------|----------------|-------|
| ✓ | | 48 px | One line of primary text. |
| | ✓ | 76 px | One line of primary and secondary text. |
| | | 56 px | One line of primary text. |

> IMAGE PLACEHOLDER

---

## Placement

### Inset container

List items at both wide & narrow can be full width of an inset container.

> IMAGE PLACEHOLDER

### Device container

Only List items at narrow have the option to be the full width of the device.

> IMAGE PLACEHOLDER

---

## Interactions

### Interactive

The entire container for interactive variants is clickable.

> IMAGE PLACEHOLDER

---

## Overflow

### Primary and secondary text

The recommendation is to keep the copy short and concise to allow users to easily browse. If the length of the primary or secondary text exceeds the available horizontal space, the content will wrap onto a new line with no maximum.

> IMAGE PLACEHOLDER

### Trailing content

If the trailing content contains a text element, it's maximum width is 1/3 of the available space. If the width is exceeded the content will wrap onto a new line.

> IMAGE PLACEHOLDER

---

## States

The list item allows for two states: unselected and selected. By default, the `$color-border-select-brand` is used.

### Unselected

> IMAGE PLACEHOLDER

### Selected

> IMAGE PLACEHOLDER

---

## Interactive states

The interactive variation includes all interactive states, while the non-interactive variation only includes the default and disabled states.

All form elements: checkbox, radio and switch display their own interactive states rather than the list item container.

### Default

> IMAGE PLACEHOLDER

### Active

> IMAGE PLACEHOLDER

### Disabled

> IMAGE PLACEHOLDER

---

## Examples

### LTR example

Here are some examples of a [component name] in LTR context:

> IMAGE PLACEHOLDER

### RTL example

Here are some examples of a [component name] in RTL context:

> IMAGE PLACEHOLDER
