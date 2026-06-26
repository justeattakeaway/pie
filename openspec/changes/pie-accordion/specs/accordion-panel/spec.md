## ADDED Requirements

### Requirement: Panel is shown when isOpen is true and hidden when false
The panel element SHALL have the `hidden` attribute applied when `isOpen` is `false`, and the attribute SHALL be removed when `isOpen` is `true`. There is no open/close animation; the transition is instant.

#### Scenario: Panel hidden when collapsed
- **WHEN** `isOpen` is `false`
- **THEN** the panel element has the `hidden` attribute and is not visible

#### Scenario: Panel visible when expanded
- **WHEN** `isOpen` is `true`
- **THEN** the panel element does not have the `hidden` attribute and is visible

---

### Requirement: Panel has correct ARIA role and labelling
The panel element SHALL have `role="region"` and `aria-labelledby` pointing to the trigger button's ID, making it a labelled landmark region when expanded.

#### Scenario: Panel region role
- **WHEN** the component renders
- **THEN** the panel element has `role="region"`

#### Scenario: Panel labelled by trigger button
- **WHEN** the component renders
- **THEN** the panel's `aria-labelledby` matches the trigger button's `id`

---

### Requirement: Panel exposes its element via the panel CSS part
The panel element SHALL be exposed as a CSS shadow part named `panel`, allowing consumers to override padding or other styles.

#### Scenario: panel part is accessible
- **WHEN** a consumer targets `pie-accordion::part(panel)`
- **THEN** custom CSS is applied to the panel element

---

### Requirement: Panel accepts arbitrary slotted content
The panel's default slot SHALL accept any consumer-provided HTML content. The component SHALL NOT constrain or style the slotted content beyond the panel container.

#### Scenario: Slotted content renders inside panel
- **WHEN** content is placed inside `<pie-accordion>`
- **THEN** that content appears inside the panel element when the accordion is expanded
