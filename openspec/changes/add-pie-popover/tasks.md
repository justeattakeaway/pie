## 1. Package Scaffolding

- [x] 1.1 Create `packages/components/pie-popover/` by using the component generator found at `packages/tools/generator-pie-component` - follow the instructions in that packages readme to generate it (one of the main commands to run is `npx yo @justeattakeaway/pie-component`).

## 2. Props and Types (`src/defs.ts`)

- [ ] 2.1 Define `placements` const array: `['top', 'bottom', 'left', 'right']`
- [ ] 2.2 Define `PopoverProps` interface with `isOpen?: boolean`, `placement?: typeof placements[number]`, `triggerSelector?: string`
- [ ] 2.3 Define `defaultProps` with `isOpen: false`, `placement: 'bottom'`
- [ ] 2.4 Export all types and consts from `defs.ts`

## 3. Component Implementation (`src/index.ts`)

- [ ] 3.1 Scaffold the Lit `PiePopover` class extending `PieElement`, decorated with `@safeCustomElement('pie-popover')`
- [ ] 3.2 Declare `@property` decorators for `isOpen`, `placement`, and `triggerSelector` with correct types
- [ ] 3.3 Implement `_getTriggerElement()` helper: `document.querySelector(this.triggerSelector)` with dev-mode warning if selector resolves to null or is not set
- [ ] 3.4 Implement `_computePosition()`: use `getBoundingClientRect()` on trigger, calculate `top`/`left` coords for each placement with 8px gap, set via `this.style.setProperty()`
- [ ] 3.5 Implement viewport overflow detection in `_computePosition()`: check if popover would clip against `window.innerWidth`/`innerHeight`, flip to opposite side if needed, prefer side with more space if both clip
- [ ] 3.6 Implement RTL awareness in `_computePosition()`: read `document.dir` or host `dir` attribute, flip `left` ↔ `right` placements when direction is `rtl`
- [ ] 3.7 Implement `_focusFirstFocusable()`: query slotted nodes via `this.shadowRoot.querySelector('slot').assignedElements({flatten: true})`, find first element matching the focusable selector, call `.focus()`
- [ ] 3.8 Implement `_returnFocus()`: `(document.querySelector(this.triggerSelector) as HTMLElement)?.focus()` — mirroring `pie-modal` pattern
- [ ] 3.9 Implement `_addListeners()`: passive `scroll` listener on `window` calling `_computePosition()`, `ResizeObserver` on trigger element calling `_computePosition()`
- [ ] 3.10 Implement `_removeListeners()`: remove `scroll` listener and disconnect `ResizeObserver`
- [ ] 3.11 Implement singleton enforcement: module-level `WeakRef` tracking the currently open instance; on open, deref and call internal close on previous instance and dispatch `pie-popover-close` event; update ref to current instance
- [ ] 3.12 Implement `updated(changedProperties)` lifecycle: when `isOpen` changes to `true` → `_computePosition()`, `_focusFirstFocusable()`, `_addListeners()`; when `isOpen` changes to `false` → `_returnFocus()`, `_removeListeners()`
- [ ] 3.13 Implement `render()`: return an `html` template with a single `<div class="c-popover"><slot></slot></div>`
- [ ] 3.14 Ensure `disconnectedCallback()` calls `_removeListeners()` to prevent memory leaks

## 4. Styles (`src/popover.scss`)

- [ ] 4.1 Set `:host` styles: `position: fixed`, `top: var(--popover-top)`, `left: var(--popover-left)`, `display: none`, `z-index` using appropriate design token or fallback value
- [ ] 4.2 Set `:host([isopen])` or apply `display: block` via JS class toggle when `isOpen` is true
- [ ] 4.3 Style `.c-popover`: `background` using `--dt-color-container-default`, `border-radius` using `--dt-radius-rounded-b`, `box-shadow` using `--dt-elevation-below-20`, `padding: var(--dt-spacing-b)` (8px), `min-width: 160px`
- [ ] 4.4 Verify styles match PIE token naming conventions used in other components

## 5. React Wrapper (`src/defs-react.ts` and `src/react.ts`)

- [ ] 5.1 Create `src/defs-react.ts` re-exporting `PopoverProps` with any React-specific type adjustments
- [ ] 5.2 Create `src/react.ts` using the standard PIE React wrapper pattern (matching `pie-button/src/react.ts`)

## 6. Tests

- [ ] 6.1 Write unit tests for `_computePosition()` covering all four placements and the 8px gap calculation
- [ ] 6.2 Write unit tests for viewport overflow flip logic (bottom→top, top→bottom, left→right, right→left)
- [ ] 6.3 Write unit tests for RTL placement flip (`left`↔`right` when `document.dir === 'rtl'`)
- [ ] 6.4 Write unit tests for singleton enforcement (opening second popover closes first and dispatches `pie-popover-close`)
- [ ] 6.5 Write unit tests for `_focusFirstFocusable()` — with and without focusable slotted content
- [ ] 6.6 Write unit tests for `_returnFocus()` — with valid and invalid/missing `triggerSelector`
- [ ] 6.7 Write unit tests for scroll/resize listener add/remove lifecycle
- [ ] 6.8 Write integration/browser tests covering LTR and RTL example scenarios from the spec

## 7. Documentation

- [ ] 7.1 Write `README.md` documenting props (`isOpen`, `placement`, `triggerSelector`), slots, events (`pie-popover-close`), usage example, and consumer responsibilities (trigger toggle, dismiss logic, unique selector)
- [ ] 7.2 Add JSDoc comments to all public props in `defs.ts` and public methods in `index.ts`
- [ ] 7.3 Document the `position: fixed` + transformed ancestor limitation in README
