## Context

`pie-notification` currently renders action buttons via `leadingAction` and `supportingAction` props (type `ActionProps`). These props support text, size, aria-label, and link attributes but not icons, loading states, or other `pie-button` features. The `renderActionButton` method creates `pie-button` elements internally with fixed variants (`primary`/`ghost`).

## Goals / Non-Goals

**Goals:**
- Provide optional named slots for full `pie-button` customisation
- Maintain 100% backward compatibility with the prop-based API
- Only accept `pie-button` elements in the slots (hide anything else via CSS)
- Warn developers in dev mode when invalid elements are slotted

**Non-Goals:**
- Changing the prop-based API or its behaviour
- Supporting arbitrary elements in the action slots (only `pie-button`)
- Adding new props to `ActionProps`

## Decisions

### 1. Slot names: `leadingAction` and `supportingAction`

Use `leadingAction` and `supportingAction` to match the existing prop names. This keeps the mental model consistent — consumers already understand "leading" and "supporting" from the props.

Alternative: `leading-action` / `trailing-action` (kebab-case). Rejected because Lit slot names don't need to follow HTML attribute conventions, and matching prop names reduces confusion.

### 2. Slot precedence over props

When a slot has content, it takes precedence and the prop-based button is not rendered. Detection via `slotchange` event listener that sets a boolean reactive property (e.g. `_hasSlottedLeadingAction`). The render method checks this flag first.

Alternative: Always render both and hide one via CSS. Rejected because it would leave duplicate buttons in the DOM/accessibility tree.

### 3. CSS-only filtering of non-pie-button elements

```css
::slotted(:not(pie-button)) { display: none; }
```

This is lightweight, doesn't require JS validation per element, and provides instant visual feedback. Combined with a dev-mode console warning for discoverability.

### 4. Console warning for invalid slotted elements

Use the `slotchange` event listener. When slotted nodes are detected that aren't `pie-button`, emit `console.warn`. No environment gating needed — warn in all environments so consumers always get feedback about incorrect usage.

### 5. Footer rendering logic update

Current logic: `${leadingAction?.text ? this.renderFooter() : nothing}`

New logic: render footer if `leadingAction?.text` OR `_hasSlottedLeadingAction` OR `_hasSlottedSupportingAction`. This ensures the footer appears when slots are used even without props.

## Risks / Trade-offs

- [Consumers slot non-pie-button elements] → Mitigated by CSS hiding + dev warning. Clear documentation.
- [Slot detection timing] → `slotchange` fires after first render; initial render may flash. Mitigated because `slotchange` fires synchronously during connectedCallback for declarative slots in shadow DOM.
- [Stacked actions with slotted buttons] → The `isFullWidth` attribute won't be automatically applied to slotted buttons. Document that consumers must manage their own button width when using slots with `hasStackedActions`. Alternatively, apply styles via `::slotted(pie-button) { width: 100% }` conditionally.
