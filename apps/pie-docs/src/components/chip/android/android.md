---
eleventyNavigation:
    key: Android
    parent: Chip
    order: 3
draft: true
---

## Dos and Don'ts

**Do:** Chips should appear dynamically as a group of multiple interactive elements.

**Don't:** Don't use when an interaction is not required, use a tag if needed.

---

## Anatomy

![Image placeholder]

1. **Leading icon** *(optional)*: Visually supports the label.
2. **String:** Text label informing the user of the option/selection.
3. **Close** *(optional)*: Allows the Chip to be dismissible, but the application should provide a way for them to easily add it back.
4. **Tick icon** *(optional)*: A tick icon indicates the chip is selected.
5. **Trailing action** *(optional)*: A trailing icon indicates further interactions.

---

## Types of chip

### Selection

Selection chips represent choices or inputs made by the user. They can be used for single or multiple selection among predefined options, or to display context-based suggestions and recommendations.

![Image placeholder]

### Filter

Filter chips allow users to refine or narrow down content. They are commonly used on search or results pages and can also open additional controls or menus for more advanced filtering.

![Image placeholder]

### Action

Action chips behave as interactive elements that trigger navigation or perform an action. They can act as buttons leading to another page or view.

**Do:** Present action chips in a group that offer relevant contextual options.

**Don't:** Don't use chips for CTAs, use buttons instead. Don't use only one single chip.

![Image placeholder]

---

## Variants

### Default

![Image placeholder]

### Outline

![Image placeholder]

### Translucent

![Image placeholder]

### Ghost

![Image placeholder]

---

## Modifiers

### Icon

#### Leading icon

Leading icon provides context and visually supports the label. It is available for all variants.

![Image placeholder]

#### Trailing icon

A trailing icon can be applied to indicate further interaction, such as opening up a popover or bottom sheet. Only available in Filter chip.

![Image placeholder]

#### Tick icon

Tick icon can be added for clarity and decision support when using chips to filter or multi-select to the selected state. Only available in selected Selection and Filter chips.

![Image placeholder]

#### Close icon

Close icon can be added to the selected state to allow users to remove the selection. Clicking a chip with a close icon will dismiss the chip. Only available in selected Selection chip.

![Image placeholder]

### Size

Chips have a minimum width of 48px.

![Image placeholder]

---

## Content

### Label

- Keep the strings short so they are easy to read and scan.
- Use sentence case.

### Overrides

#### Icon

![Image placeholder]

> **Trailing icon:** In Filter chips, the trailing icon can only be replaced with icons from the Chevron section.

#### Alignment

![Image placeholder]

> **Overall content:** By default, the chip container is set to Hug the content. If a chip needs to fit within a specific layout or grid, the overall content can be aligned to either centre or left.

> **Trailing content:** When a chip has a trailing icon, content can be set to Fill to expand and match the container width, allowing the trailing icon to align with the right edge.

---

## Overflow

### Layout

If there is a Chip grouping, by default they are laid out horizontally and stack if required. A spacing of 8px is used horizontally, and 12px for vertical stacking.

![Image placeholder]

### Expand

On narrow screen sizes, the option to use an Icon Button, the 'Chip overflow', to open all chip options within a Bottom Sheet is available if there are a large quantity of chips.

The Chip overflow is always pinned to the right of the screen while horizontal scrolling is enabled. The container background has a gradient and this component sits on top of the row of chips.

*Horizontal scrolling is enabled and Chip overflow button sits on top of row with chips*

![Image placeholder]

*After tapping on the Chip overflow button, a bottom sheet is opened*

![Image placeholder]

---

## States

The chip has two states:

### Unselected

![Image placeholder]

### Selected

![Image placeholder]

---

## Interactive states

Outlines the atomic level interactive elements for the component.

### Active

![Image placeholder]

### Default

![Image placeholder]

### Disabled

![Image placeholder]

### Loading

![Image placeholder]

---

## Examples

### LTR examples

Here are some examples of Chips in left-to-right context:

![Image placeholder]

### RTL examples

Here are some examples of Chips in right-to-left context:

![Image placeholder]
