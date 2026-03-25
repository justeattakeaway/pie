# PIE CSS Button Component Styles

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css) | [NPM Package](https://www.npmjs.com/package/@justeattakeaway/pie-css)

Style static HTML elements (such as `<div>`s) with PIE button design system styling. This is intended for non-interactive elements that need to visually resemble a button.

> **Important:** This is an extremely niche use case. Almost all consumers should use the [`pie-button`](https://webc.pie.design/?path=/docs/components-button--docs) web component instead, which provides full interactivity, keyboard navigation, form integration and accessibility out of the box. These CSS-only styles exist solely for rare situations where a **static, non-interactive element** needs to _look_ like a button — for example, a `<div>` inside a clickable card or banner where the parent element handles the interaction. If you are unsure whether you need this, please reach out to the Design System team via **#help-designsystem**.

## Table of Contents

- [When to Use This (and When Not To)](#when-to-use-this-and-when-not-to)
- [Installation](#installation)
- [Importing](#importing)
- [Basic Usage](#basic-usage)
- [Available Classes](#available-classes)
- [Sizes](#sizes)
- [Variants](#variants)
- [Modifiers](#modifiers)
- [Icons](#icons)
- [Accessibility](#accessibility)

## When to Use This (and When Not To)

**Do NOT use these CSS classes if:**
- You need a clickable button — use `pie-button`
- You need a link styled as a button — use `pie-button` with the `tag="a"` prop
- You need form submission — use `pie-button` with `type="submit"`
- You are building any interactive control

**Use these CSS classes only if:**
- You need a static, non-interactive element (like a `<div>`) to visually match a PIE button
- The element sits inside a parent that already handles the interaction (e.g. an `<a>` tag wrapping a banner ad)
- You have confirmed with the Design System team that this is the correct approach for your use case

## Installation

The button component styles are included as part of the `@justeattakeaway/pie-css` package:

```bash
# Using Yarn
yarn add @justeattakeaway/pie-css

# Using NPM
npm install @justeattakeaway/pie-css
```

## Importing

### CSS Import (JavaScript/Framework)

Import the pre-compiled CSS file in your JavaScript/TypeScript application:

```javascript
import '@justeattakeaway/pie-css/dist/components/button.css';
```

**React Example:**

```jsx
import '@justeattakeaway/pie-css/dist/components/button.css';

function MyCard() {
  return (
    <div className="c-button c-button--primary c-button--medium">
      Click me
    </div>
  );
}
```

**Vue Example:**

```html
<script setup>
import '@justeattakeaway/pie-css/dist/components/button.css';
</script>

<template>
  <div class="c-button c-button--primary c-button--medium">
    Click me
  </div>
</template>
```

## Basic Usage

Apply the `c-button` class along with variant and size modifiers to a static element.

```html
<!-- Primary button, medium size -->
<div class="c-button c-button--primary c-button--medium">
  Button label
</div>

<!-- Secondary button, small productive size -->
<div class="c-button c-button--secondary c-button--small-productive">
  Button label
</div>

<!-- Disabled state -->
<div class="c-button c-button--primary c-button--medium c-button--disabled">
  Disabled
</div>

<!-- Full width -->
<div class="c-button c-button--primary c-button--medium c-button--fullWidth">
  Full width
</div>
```

## Available Classes

### Base

| Class | Description |
|-------|-------------|
| `.c-button` | Base button layout, typography and custom properties. |

### Variants

| Class | Description |
|-------|-------------|
| `.c-button--primary` | Primary brand colour background |
| `.c-button--primary-alternative` | Primary alternative colour background |
| `.c-button--primary-alternative-dark` | Primary alternative dark colour background |
| `.c-button--secondary` | Secondary colour background |
| `.c-button--outline` | Transparent background with border |
| `.c-button--ghost` | Transparent background, no border |
| `.c-button--ghost-dark` | Transparent background, dark text |
| `.c-button--inverse` | Inverse colour background |
| `.c-button--ghost-inverse` | Transparent background, light text |
| `.c-button--outline-inverse` | Transparent background with border, light text |
| `.c-button--ghost-inverse-light` | Transparent background, light solid text |
| `.c-button--destructive` | Error/destructive colour background |
| `.c-button--destructive-ghost` | Transparent background, error text |

### Sizes

| Class | Description |
|-------|-------------|
| `.c-button--xsmall` | Extra small button |
| `.c-button--small-productive` | Small productive button |
| `.c-button--small-expressive` | Small expressive button |
| `.c-button--medium` | Medium button |
| `.c-button--large` | Large button |

### Modifiers

| Class | Description |
|-------|-------------|
| `.c-button--disabled` | Disabled appearance (cursor: not-allowed, pointer-events: none) |
| `.c-button--fullWidth` | Makes the button span 100% of its container |
| `.c-button--truncate` | Truncates the label with an ellipsis when text overflows the button's width |
| `.c-button--responsive` | Enables responsive size bumping at wider viewports |
| `.c-button--expressive` | Used with `--responsive` to prefer expressive sizing at wider viewports |

## Sizes

Each size sets the font size, line height, padding and icon size for the button.

| Size | Font | Icon Size | Responsive Bump |
|------|------|-----------|-----------------|
| `xsmall` | Interactive XS | 16px | small-productive (or small-expressive with `--expressive`) |
| `small-productive` | Interactive S | 20px | medium |
| `small-expressive` | Interactive L | 20px | medium |
| `medium` | Interactive L | 24px | large |
| `large` | Interactive L | 24px | No change |

### Responsive Behaviour

Add `.c-button--responsive` to enable automatic size bumping at viewports wider than 768px. By default the xsmall size bumps to small-productive; add `.c-button--expressive` to bump to small-expressive instead.

```html
<!-- Responsive: xsmall → small-productive at wide viewports -->
<div class="c-button c-button--primary c-button--xsmall c-button--responsive">
  Responsive
</div>

<!-- Responsive + Expressive: xsmall → small-expressive at wide viewports -->
<div class="c-button c-button--primary c-button--xsmall c-button--responsive c-button--expressive">
  Expressive
</div>
```

## Variants

All 13 variants are supported. Each sets the background colour, text colour and interactive hover/active states.

The `primary` variant includes special handling for `xsmall` and `small-productive` sizes, which use different colour tokens to ensure text remains accessible at smaller sizes.

Outline variants (`outline`, `outline-inverse`) include a 1px border and automatically offset vertical padding by 1px to maintain consistent overall height.

## Modifiers

### Disabled

The disabled modifier uses class-based selectors (`.c-button--disabled`) rather than the `:disabled` pseudo-class, because these CSS classes target non-interactive elements where `:disabled` is not applicable.

```html
<div class="c-button c-button--primary c-button--medium c-button--disabled">
  Disabled
</div>
```

### Full Width

```html
<div class="c-button c-button--primary c-button--medium c-button--fullWidth">
  Full Width Button
</div>
```

### Truncate

Add `.c-button--truncate` to truncate the button label with an ellipsis when text overflows the button's width. When using this modifier, the label **must** be wrapped in a `<span>` element — `text-overflow: ellipsis` does not work directly on flex containers, so the inner `<span>` is required. The button's width must also be constrained externally (e.g. via `c-button--fullWidth` inside a sized container, or a `max-width` on a parent element). Buttons are `inline-flex` by default and will grow to fit their content, so truncation only takes effect when something limits the button's width.

```html
<!-- Constrain the parent to force truncation -->
<div style="max-width: 200px;">
  <div class="c-button c-button--primary c-button--medium c-button--fullWidth c-button--truncate">
    <span>This label is too long and will be truncated with an ellipsis</span>
  </div>
</div>
```

## Icons

Icon sizing within CSS-only buttons is built exclusively for [`@justeattakeaway/pie-icons-webc`](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc). Other icon libraries, inline SVGs, or custom icon elements are **not supported** and may not size or align correctly. We will not be adding support for other icon solutions.

A button can contain only one icon, either **leading** (before the label) or **trailing** (after the label). The icon size is determined automatically by the button size class.

### Leading icon

Place the icon element **before** the label text:

```html
<div class="c-button c-button--primary c-button--medium">
  <icon-plus-circle></icon-plus-circle>
  Add item
</div>
```

### Trailing icon

Place the icon element **after** the label text:

```html
<div class="c-button c-button--primary c-button--medium">
  Next
  <icon-plus-circle></icon-plus-circle>
</div>
```

## Accessibility

These CSS classes are intended for **non-interactive, visual-only** elements. They do not add any interactive behaviour such as keyboard handling, ARIA roles, or focus management.

If you need an interactive button, **do not use these classes** — use the [`pie-button`](https://webc.pie.design/?path=/docs/components-button--docs) web component instead, which provides full keyboard navigation, ARIA attributes and screen reader support out of the box.

If you are unsure whether you need CSS-only button styles or the `pie-button` web component, reach out to the Design System team via **#help-designsystem**.
