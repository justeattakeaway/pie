## Why

The PIE design system currently has no popover component, leaving consuming teams to build their own anchored overlay solutions. A first-party `pie-popover` establishes a consistent, accessible, and on-brand pattern for supplementary information and interactive content displayed in context — without navigating away from the current page.

## What Changes

- Introduce a new `pie-popover` web component package at `packages/components/pie-popover/`
- Component renders an anchored container with a single open default slot (consumers own all content)
- Visibility is consumer-controlled via an `isOpen` boolean prop
- Positioning is computed in JavaScript using `getBoundingClientRect()` and applied as `position: fixed` CSS on the host element, with automatic edge-detection and flip logic
- Trigger association is via a `triggerSelector` CSS string prop, which also drives focus-return on close
- Focus is moved to the first focusable slotted element on open; returned to the trigger on close
- Supports `placement` prop: `inline-start | inline-end | block-start | block-end` (default: `block-end`), with RTL awareness
- Only one popover is visible at a time — opening a new one dismisses the previous
- No external dependencies; no native Popover API (supports iOS Safari 15+)

## Capabilities

### New Capabilities

- `pie-popover`: A Lit web component providing an anchored, consumer-controlled overlay container with slot-based content, smart viewport-aware positioning, and accessible focus management

### Modified Capabilities

_(none)_

## Impact

- New package: `@justeattakeaway/pie-popover`
- New files under `packages/components/pie-popover/`
- No changes to existing components or shared packages
- Consumers must: provide a trigger element with a unique selector, manage the `isOpen` toggle, and handle any dismiss logic (e.g. close button) inside the slot
