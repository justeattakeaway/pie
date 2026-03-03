## ADDED Requirements

### Requirement: Component renders an anchored overlay container
The `pie-popover` component SHALL render a styled container element positioned relative to an associated trigger element in the document. The container SHALL include a single default slot for consumer-provided content.

#### Scenario: Popover renders with default slot
- **WHEN** a consumer adds `<pie-popover>` to the DOM with child content
- **THEN** the child content is rendered inside the popover container via the default slot

#### Scenario: Popover is hidden by default
- **WHEN** `isOpen` is not set or is `false`
- **THEN** the popover container is not visible to the user

---

### Requirement: Visibility is controlled by the `isOpen` prop
The component SHALL show the popover container when `isOpen` is `true` and hide it when `isOpen` is `false`. The component SHALL NOT manage its own open/close state internally.

#### Scenario: Popover becomes visible when isOpen is set to true
- **WHEN** the `isOpen` property is set to `true`
- **THEN** the popover container becomes visible

#### Scenario: Popover becomes hidden when isOpen is set to false
- **WHEN** the `isOpen` property changes from `true` to `false`
- **THEN** the popover container is hidden

---

### Requirement: Popover is positioned relative to a trigger element
The component SHALL use the `triggerSelector` prop to locate the trigger element in the document via `document.querySelector()`. It SHALL compute the popover position using `getBoundingClientRect()` on the trigger and apply it as `position: fixed` coordinates on the host element.

#### Scenario: Popover positions below the trigger by default
- **WHEN** `isOpen` is `true`, `triggerSelector` resolves to a trigger element, and `placement` is `'bottom'` (or not set)
- **THEN** the popover is positioned below the trigger with an 8px gap

#### Scenario: Popover positions above the trigger when placement is top
- **WHEN** `isOpen` is `true` and `placement` is `'top'`
- **THEN** the popover is positioned above the trigger with an 8px gap

#### Scenario: Popover positions to the right of the trigger
- **WHEN** `isOpen` is `true` and `placement` is `'right'`
- **THEN** the popover is positioned to the right of the trigger with an 8px gap

#### Scenario: Popover positions to the left of the trigger
- **WHEN** `isOpen` is `true` and `placement` is `'left'`
- **THEN** the popover is positioned to the left of the trigger with an 8px gap

#### Scenario: No triggerSelector provided
- **WHEN** `isOpen` is `true` and `triggerSelector` is not set
- **THEN** the popover is still shown but no positioning is applied and a warning is logged in development

---

### Requirement: Popover has a minimum width and padding
The popover container SHALL have a minimum width of 160px. The container SHALL apply 8px of padding around the slotted content on all sides.

#### Scenario: Short content does not collapse the popover width
- **WHEN** the slotted content is narrower than 160px
- **THEN** the popover container renders at a minimum width of 160px

#### Scenario: Content wider than 160px expands the container
- **WHEN** the slotted content is wider than 160px
- **THEN** the popover container expands to accommodate the content width

---

### Requirement: Popover flips placement when it would overflow the viewport
The component SHALL check whether the popover in its preferred placement would overflow the visible viewport. If it would, the component SHALL flip to the opposite placement (`top` ↔ `bottom`, `left` ↔ `right`). If both sides clip, the component SHALL use the side with more available space.

#### Scenario: Popover near bottom edge flips to top
- **WHEN** `placement` is `'bottom'` and there is insufficient space below the trigger to display the popover within the viewport
- **THEN** the popover is positioned above the trigger instead

#### Scenario: Popover near top edge flips to bottom
- **WHEN** `placement` is `'top'` and there is insufficient space above the trigger
- **THEN** the popover is positioned below the trigger instead

---

### Requirement: Only one popover is visible at a time
The component SHALL ensure that opening a new popover instance dismisses any previously open `pie-popover` instance. The dismissed instance SHALL have its `isOpen` property set to `false` and SHALL dispatch a `pie-popover-close` event.

#### Scenario: Opening a second popover closes the first
- **WHEN** one `pie-popover` is open and another `pie-popover` has its `isOpen` set to `true`
- **THEN** the first popover is hidden and dispatches a `pie-popover-close` event

---

### Requirement: Popover repositions on scroll and resize
While the popover is open, the component SHALL recompute and update its position whenever the window is scrolled or the trigger element is resized, to keep the popover anchored to its trigger.

#### Scenario: Position updates on window scroll
- **WHEN** the popover is open and the user scrolls the page
- **THEN** the popover position is recomputed and updated

#### Scenario: Position updates on trigger resize
- **WHEN** the popover is open and the trigger element changes size
- **THEN** the popover position is recomputed and updated

#### Scenario: Listeners are removed when popover closes
- **WHEN** `isOpen` changes to `false`
- **THEN** the scroll and resize listeners are removed

---

### Requirement: Focus moves to the first focusable element on open
When the popover opens, the component SHALL query the slotted content for the first focusable element. If one is found, the component SHALL call `.focus()` on it. If no focusable element is present, focus SHALL remain on the trigger.

#### Scenario: Focus moves into popover with focusable content
- **WHEN** `isOpen` becomes `true` and the slot contains a focusable element (e.g. a button or input)
- **THEN** focus is moved to the first focusable slotted element

#### Scenario: Focus stays on trigger when popover has no focusable content
- **WHEN** `isOpen` becomes `true` and the slot contains no focusable elements
- **THEN** focus remains on the trigger element

---

### Requirement: Focus returns to the trigger element on close
When the popover closes, the component SHALL return focus to the element matched by `triggerSelector` using `document.querySelector(triggerSelector)?.focus()`.

#### Scenario: Focus returns to trigger on close
- **WHEN** `isOpen` changes from `true` to `false` and `triggerSelector` resolves to a focusable element
- **THEN** focus is moved to the trigger element

#### Scenario: No error when triggerSelector does not resolve
- **WHEN** `isOpen` changes to `false` and `triggerSelector` does not match any element
- **THEN** no error is thrown and focus is not moved

---

### Requirement: Popover supports RTL layouts
When `placement` is `'left'` or `'right'`, the component SHALL read the document or host `dir` attribute. If the direction is `'rtl'`, the component SHALL flip `'left'` ↔ `'right'` placements before computing position.

#### Scenario: Left placement flips to right in RTL
- **WHEN** `placement` is `'left'` and `document.dir` is `'rtl'`
- **THEN** the popover is positioned to the right of the trigger

#### Scenario: Right placement flips to left in RTL
- **WHEN** `placement` is `'right'` and `document.dir` is `'rtl'`
- **THEN** the popover is positioned to the left of the trigger

---

### Requirement: Popover accepts valid placement values
The `placement` prop SHALL accept only `'top'`, `'bottom'`, `'left'`, or `'right'`. The default SHALL be `'bottom'`. Invalid values SHALL log a warning and fall back to the default.

#### Scenario: Default placement is bottom
- **WHEN** `placement` is not set
- **THEN** the popover opens below the trigger

#### Scenario: Invalid placement falls back to default
- **WHEN** an invalid `placement` value is provided
- **THEN** the popover uses `'bottom'` placement and a warning is logged
