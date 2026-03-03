## Context

The PIE design system is a monorepo of Lit-based web components published under `@justeattakeaway/pie-*`. Components are written in TypeScript, styled with SCSS using PIE design tokens, and follow established patterns (`defs.ts` for props, `index.ts` for the Lit element, SCSS for styles).

There is currently no popover component. The codebase includes `pie-modal` as the closest reference for overlay/focus-management patterns, and `pie-tooltip` does not yet exist either. The system must support iOS Safari 15+, which rules out the native Popover API (`popover` attribute / `showPopover()` — baseline 2024) and CSS Anchor Positioning.

## Goals / Non-Goals

**Goals:**
- Deliver a `pie-popover` web component consistent with existing PIE component architecture
- Support consumer-controlled visibility via an `isOpen` boolean prop
- Position the popover relative to a trigger element using native JS APIs only (`getBoundingClientRect`, `position: fixed`)
- Detect viewport overflow and flip placement automatically
- Move focus into the popover (first focusable element) on open; return it to the trigger on close
- Support `top`, `bottom`, `left`, `right` placements with RTL awareness
- Enforce singleton behaviour (only one popover open at a time)

**Non-Goals:**
- Built-in close button (consumer responsibility)
- Animation / transitions (deferred to a future iteration)
- Sub-pixel or scroll-container-aware positioning (fixed positioning covers the primary use case)
- Nested or stacked popovers

## Decisions

### 1. `position: fixed` on the host element
**Decision:** Apply `position: fixed` to `:host` and set `top`/`left` via CSS custom properties computed in JS.

**Rationale:** `getBoundingClientRect()` returns viewport-relative coordinates, which map directly to `fixed` positioning without needing to account for scroll offsets. This is simpler and more reliable than `position: absolute` (which requires knowing the offset parent) across iOS Safari 15+.

**Alternative considered:** `position: absolute` relative to a full-screen overlay backdrop — rejected because it adds unnecessary DOM complexity and z-index management.

### 2. Trigger association via `triggerSelector` string prop
**Decision:** Consumers pass a CSS selector string (e.g. `'#filter-btn'`) that the component uses to `document.querySelector()` the trigger for both positioning and focus return.

**Rationale:** Matches the established pattern in `pie-modal` (`returnFocusAfterCloseSelector`). Avoids requiring consumers to pass Element references (which are harder to bind declaratively in templates), and keeps the component's public API serialisable.

**Alternative considered:** A named `trigger` slot — rejected because the PDF spec treats the trigger as an external element and it would force a structural change on consumers.

### 3. Consumer-controlled visibility (`isOpen` prop)
**Decision:** The component is fully controlled — it does not toggle its own state. `isOpen: true` → show and position; `isOpen: false` → hide and return focus.

**Rationale:** Consistent with `pie-modal`'s approach. Keeps the component predictable and framework-agnostic (works equally with React, Vue, vanilla JS, and server-rendered HTML).

### 4. Singleton enforcement via module-level registry
**Decision:** A module-level `WeakRef` tracks the currently open popover instance. When a new instance opens, it checks the registry and calls `_close()` on the previous instance (setting its `isOpen` to `false` and dispatching a `pie-popover-close` event).

**Rationale:** The native Popover API would handle this for free, but since we cannot use it, a lightweight module-level reference achieves the same result without a global event bus.

**Alternative considered:** A custom `pie-popover-open` event broadcast on `document` — rejected as more complex and harder to unit test.

### 5. Placement flip logic
**Decision:** After computing the preferred placement coordinates, check if the popover would overflow the viewport using `window.innerWidth` / `window.innerHeight`. If it would clip, flip to the opposite side (`top` ↔ `bottom`, `left` ↔ `right`). If both sides clip, prefer the side with more space.

**Rationale:** Matches the behaviour described in the PDF spec ("may open from a different position to avoid cropping, bleeding off the page or covering important information").

### 6. Focus management
**Decision:** On open, query the default slot's assigned nodes for the first focusable element using the selector `a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`. If found, call `.focus()`. On close, call `document.querySelector(triggerSelector)?.focus()`.

**Rationale:** Mirrors `pie-modal`'s `_returnFocus()` pattern. Using the slot's assigned nodes (rather than `shadowRoot.querySelector`) correctly traverses slotted light DOM.

## Risks / Trade-offs

- **`position: fixed` and transformed ancestors** → If a parent element has a CSS `transform`, `filter`, or `will-change: transform` applied, `position: fixed` behaves like `position: absolute` relative to that ancestor. Mitigation: document this limitation clearly; it affects all fixed-position overlays equally.
- **`triggerSelector` uniqueness** → If the selector matches multiple elements, `document.querySelector` picks the first in DOM order, which may not be the intended trigger. Mitigation: document that consumers should use unique selectors (IDs preferred); log a warning in development.
- **Singleton WeakRef GC** → If the previous popover instance is garbage-collected before the new one opens, the WeakRef deref returns `undefined` — this is safe (no-op). No risk.
- **Scroll / resize recompute cost** → Passive scroll listeners and `ResizeObserver` callbacks recompute position on every event. Mitigation: guard with `isOpen` check; only active when popover is visible.
