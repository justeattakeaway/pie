## ADDED Requirements

### Requirement: Trigger renders a semantic heading wrapping a button
The accordion trigger SHALL render a semantic heading element (`h1`–`h6`, controlled by `headingLevel`, defaulting to `h2`) that wraps a `<button>`. The heading element provides the implicit `role="heading"` and `aria-level`. No explicit `role` or `aria-level` attributes are needed.

#### Scenario: Default heading tag
- **WHEN** `headingLevel` is not set
- **THEN** the trigger renders as `<h2><button>…</button></h2>`

#### Scenario: Custom heading tag
- **WHEN** `headingLevel="h3"` is set
- **THEN** the trigger renders as `<h3><button>…</button></h3>`

---

### Requirement: Button exposes correct ARIA attributes
The trigger button SHALL have `aria-expanded` reflecting `isOpen` and `aria-controls` pointing to the panel element's ID.

#### Scenario: Collapsed state
- **WHEN** `isOpen` is `false`
- **THEN** the button has `aria-expanded="false"`

#### Scenario: Expanded state
- **WHEN** `isOpen` is `true`
- **THEN** the button has `aria-expanded="true"`

#### Scenario: Panel linkage
- **WHEN** the component renders
- **THEN** the button's `aria-controls` value matches the panel element's `id`

---

### Requirement: Trigger emits pie-accordion-toggle on click
When the trigger button is clicked, the component SHALL dispatch a `pie-accordion-toggle` custom event via `dispatchCustomEvent`. The event detail SHALL include `{ isOpen: boolean }` reflecting the current value of `isOpen` at the time of the click (before the consumer updates it).

#### Scenario: Click when collapsed
- **WHEN** `isOpen` is `false` and the user clicks the trigger
- **THEN** `pie-accordion-toggle` is dispatched with `detail.isOpen === false`

#### Scenario: Click when expanded
- **WHEN** `isOpen` is `true` and the user clicks the trigger
- **THEN** `pie-accordion-toggle` is dispatched with `detail.isOpen === true`

---

### Requirement: Trigger emits pie-accordion-toggle on Space and Enter
The trigger button SHALL dispatch `pie-accordion-toggle` when the user presses Space or Enter while the button has keyboard focus. Tab and Shift+Tab SHALL move focus without toggling.

#### Scenario: Space key toggles
- **WHEN** the trigger button has focus and the user presses Space
- **THEN** `pie-accordion-toggle` is dispatched

#### Scenario: Enter key toggles
- **WHEN** the trigger button has focus and the user presses Enter
- **THEN** `pie-accordion-toggle` is dispatched

#### Scenario: Tab does not toggle
- **WHEN** the trigger button has focus and the user presses Tab
- **THEN** focus moves to the next focusable element and no `pie-accordion-toggle` event is dispatched

---

### Requirement: Trigger is controlled — component does not mutate isOpen
The component SHALL NOT update `isOpen` internally. The consumer is solely responsible for updating `isOpen` in response to `pie-accordion-toggle`.

#### Scenario: Click with no consumer listener
- **WHEN** the trigger is clicked and no listener updates `isOpen`
- **THEN** `isOpen` remains unchanged and the panel stays in its current state

---

### Requirement: Trigger displays headingLabel as accessible button text
The button SHALL display the value of `headingLabel` as its visible text content, which also serves as the accessible name.

#### Scenario: headingLabel is rendered
- **WHEN** `headingLabel="Delivery information"` is set
- **THEN** the button contains the text "Delivery information"

---

### Requirement: Trigger optionally displays secondaryLabel
When `secondaryLabel` is provided, the trigger SHALL display it as a secondary line of text below `headingLabel`. When not provided or empty, no secondary line is rendered.

#### Scenario: Secondary label present
- **WHEN** `secondaryLabel="Available in your area"` is set
- **THEN** the trigger displays "Available in your area" below the heading text

#### Scenario: Secondary label absent
- **WHEN** `secondaryLabel` is not set
- **THEN** no secondary text element is rendered in the trigger

---

### Requirement: Trigger accepts an optional leading icon via the icon slot
The trigger SHALL expose a named `icon` slot. When content is slotted into `icon`, it is rendered before the heading text. When the slot is empty, no icon space is reserved.

#### Scenario: Icon slot populated
- **WHEN** an element is placed in the `icon` slot
- **THEN** it appears at the leading edge of the trigger (before the heading text)

#### Scenario: Icon slot empty
- **WHEN** nothing is placed in the `icon` slot
- **THEN** no leading icon placeholder is rendered

---

### Requirement: Trigger displays a chevron indicating open/closed state
The trigger SHALL display a chevron icon (from `@justeattakeaway/pie-icons-webc`) at the trailing edge. The chevron SHALL point upward when `isOpen` is `true` and downward when `isOpen` is `false`. The chevron SHALL have `aria-hidden="true"`.

#### Scenario: Collapsed chevron direction
- **WHEN** `isOpen` is `false`
- **THEN** the chevron indicates a collapsed state (pointing down)

#### Scenario: Expanded chevron direction
- **WHEN** `isOpen` is `true`
- **THEN** the chevron indicates an expanded state (pointing up)

---

### Requirement: Trigger supports size variants
The trigger SHALL apply wide or narrow layout based on the `size` prop. When `size="auto"`, it responds to the container width via CSS container queries. When `size="wide"` or `size="narrow"`, the layout is forced regardless of container size.

#### Scenario: Auto responsive layout
- **WHEN** `size="auto"` (default)
- **THEN** the trigger applies wide layout above the breakpoint and narrow layout below

#### Scenario: Forced narrow
- **WHEN** `size="narrow"`
- **THEN** the trigger applies the narrow layout regardless of container width

#### Scenario: Forced wide
- **WHEN** `size="wide"`
- **THEN** the trigger applies the wide layout regardless of container width

---

### Requirement: Trigger supports isEmphasisReduced variant
When `isEmphasisReduced` is `true`, the trigger heading text SHALL use reduced-emphasis typography. When `false` (default), it uses the default prominent heading style.

#### Scenario: Default emphasis
- **WHEN** `isEmphasisReduced` is `false`
- **THEN** the heading text uses `--dt-font-heading-s-size--narrow` / `--dt-font-heading-s-line-height--narrow` on narrow screens and `--dt-font-heading-s-size--wide` / `--dt-font-heading-s-line-height--wide` on wide screens (above `$breakpoint-wide`)

#### Scenario: Reduced emphasis
- **WHEN** `isEmphasisReduced` is `true`
- **THEN** the heading text uses reduced-emphasis typography

---

### Requirement: Trigger supports interactive states
The trigger button SHALL support Default, Hover, Active, and Focus interactive states via CSS. Hover styles SHALL NOT apply on touch/mobile devices.

#### Scenario: Focus ring on keyboard navigation
- **WHEN** the trigger button receives focus via keyboard
- **THEN** a visible focus ring is displayed

#### Scenario: No hover on touch
- **WHEN** the device is a touch device
- **THEN** no hover styles are applied to the trigger

---

### Requirement: Trigger renders correctly in RTL
In a right-to-left context, the icon slot SHALL appear on the trailing (right) side and the chevron SHALL appear on the leading (left) side.

#### Scenario: RTL layout
- **WHEN** the component is rendered in an RTL context
- **THEN** icon and chevron positions are mirrored compared to LTR
