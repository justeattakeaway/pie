## Context

`pie-accordion` is a new PIE web component. The scaffold (`packages/components/pie-accordion`) already exists with an empty `PieAccordion` class, empty `AccordionProps`, and placeholder render. This design covers the architectural decisions needed to implement the full component from that scaffold.

Constraints:
- Must follow PIE conventions: `PieElement` base, `RtlMixin`, `@safeCustomElement`, `@property` decorators, SCSS tokens, `dispatchCustomEvent`
- Accessibility must conform to the WAI-ARIA Accordion pattern
- Visual spec: Figma v0.2.0 (node 4:21447 in the Core Web Components file)
- `iconSize` prop is pending design confirmation — treat as a placeholder in implementation; implement slot wrapper sizing once confirmed

## Goals / Non-Goals

**Goals:**
- Implement a single, self-contained accordion item component
- Controlled open/close state via `isOpen` prop
- Accessible trigger (button inside semantic heading) and panel (role=region)
- Responsive by default (`size="auto"`), overridable to `narrow` or `wide`
- RTL layout support
- Keyboard navigation per WAI-ARIA Accordion spec

**Non-Goals:**
- No accordion group/container component — consumers stack items
- No open/close animation (no spec yet; instant toggle only)
- No "only one open at a time" exclusivity logic — that is a consumer concern
- No `iconSize` implementation until design confirms the spec

## Decisions

### 1. Controlled `isOpen` with `pie-accordion-toggle` event

**Decision:** `isOpen` is a fully controlled prop. The component never mutates it internally. On trigger click, it dispatches `pie-accordion-toggle` with `{ isOpen: boolean }` detail (the current value, before the consumer updates it). The consumer is responsible for updating `isOpen`.

**Why:** Consistent with other PIE controlled components (`pie-modal`). Prevents dual-state bugs where internal and external state diverge. Makes the component fully predictable in framework integrations.

**Alternative considered:** Uncontrolled with optional `defaultOpen` — rejected because it complicates the API and testing surface.

### 2. `headingLevel` restricted to `h1`–`h6` (no div)

**Decision:** `headingLevel` accepts only `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'`, defaulting to `'h2'`. The semantic element provides `role="heading"` and `aria-level` implicitly — no extra ARIA attributes are needed.

**Why:** Allowing `div` would silently remove the heading landmark from the accessibility tree, breaking screen reader heading navigation. A semantic heading is always correct for an accordion trigger per the WAI-ARIA pattern.

### 3. `size` via CSS container queries (auto) + attribute override

**Decision:** By default (`size="auto"`), the component uses CSS container queries to switch between wide and narrow layouts. Setting `size="narrow"` or `size="wide"` applies a CSS class that forces the layout regardless of container size.

**Why:** Container queries are more composable than media queries for a design system component — they respond to the component's actual available space, not the viewport. Explicit override props give consumers escape hatches for non-responsive contexts (e.g., a narrow sidebar).

### 4. Panel hidden via `hidden` attribute

**Decision:** The panel `<div>` gets the `hidden` attribute when `isOpen` is false, and it is removed when `isOpen` is true.

**Why:** `hidden` removes the element from the accessibility tree, correctly preventing screen readers from discovering collapsed content. It also avoids `display:none` in inline styles, which would conflict with future animation support. CSS can override `hidden` via `display` when animation is added later (`[hidden] { display: block; visibility: hidden; }`).

**Alternative considered:** `aria-hidden="true"` + CSS `display:none` — rejected because `hidden` is simpler and semantically correct.

### 5. `pie-divider` as an internal dependency

**Decision:** When `isDividerEnabled` is true (default), the component renders `<pie-divider>` at the bottom of its shadow DOM. It imports the `PieDivider` custom element.

**Why:** Reusing `pie-divider` ensures visual consistency with other dividers in the system and picks up any future divider token updates automatically.

### 6. Chevron icon from `@justeattakeaway/pie-icons-webc`

**Decision:** Use the `IconChevronUp` icon from `@justeattakeaway/pie-icons-webc`. It is rotated 180° via CSS when collapsed (`transform: rotate(180deg)`), removing the need for two separate icon imports.

**Why:** Single import, CSS-only toggle — no JS needed to swap icons. The rotation is animatable if motion specs are added later.

### 7. Heading typography via `--dt-font-heading-s-*` tokens

**Decision:** Heading text uses the `--dt-font-heading-s-size` and `--dt-font-heading-s-line-height` design tokens, with responsive suffixes. The base (narrow) values (`--dt-font-heading-s-size--narrow`, `--dt-font-heading-s-line-height--narrow`) apply by default; wide values (`--dt-font-heading-s-size--wide`, `--dt-font-heading-s-line-height--wide`) are applied inside `@media (min-width: $breakpoint-wide)`. The `size="narrow"` and `size="wide"` overrides force the respective token set regardless of viewport.

**Why:** Using the PIE design tokens ensures the typography stays in sync with the token layer automatically. The `$breakpoint-wide` media query mirrors the same breakpoint used elsewhere in the system.

### 8. RTL layout

**Decision:** `RtlMixin` is already applied in the scaffold. In RTL mode, the icon slot and chevron swap sides via CSS logical properties (`margin-inline-start` / `margin-inline-end`) and the `dir` attribute selector.

## Risks / Trade-offs

- **`iconSize` is TBD** → Implement slot wrapper at a fixed 24×24px for now. The prop exists in `defs.ts` as a placeholder with a TODO comment. A follow-up task will size it correctly once design confirms.
- **Controlled-only pattern** → If a consumer forgets to listen to `pie-accordion-toggle` and update `isOpen`, the accordion appears broken (clicking does nothing). Document this prominently in README and Storybook.
- **`pie-divider` bundle cost** → Each accordion instance imports pie-divider. For pages with many accordions, this is a one-time custom element registration cost, not per-instance.

## Open Questions

- **`iconSize` values** — What are the exact pixel dimensions for `default` vs `large`? Blocked on design confirmation. Tracked as a TODO in `defs.ts`.
