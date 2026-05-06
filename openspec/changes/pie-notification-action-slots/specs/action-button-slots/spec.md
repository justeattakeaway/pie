## ADDED Requirements

### Requirement: Leading action slot
The component SHALL provide an optional named slot `leadingAction` that accepts a `pie-button` element to replace the prop-based leading action button.

#### Scenario: Slot populated with pie-button
- **WHEN** a `pie-button` element is slotted into `leadingAction`
- **THEN** the slotted button is rendered in the leading action position AND the prop-based leading action button is NOT rendered

#### Scenario: Slot empty with prop provided
- **WHEN** the `leadingAction` slot is empty AND the `leadingAction` prop is set
- **THEN** the prop-based leading action button renders as before

#### Scenario: Neither slot nor prop provided
- **WHEN** neither the `leadingAction` slot nor the `leadingAction` prop is provided
- **THEN** no leading action button is rendered

### Requirement: Supporting action slot
The component SHALL provide an optional named slot `supportingAction` that accepts a `pie-button` element to replace the prop-based supporting action button.

#### Scenario: Slot populated with pie-button
- **WHEN** a `pie-button` element is slotted into `supportingAction`
- **THEN** the slotted button is rendered in the supporting action position AND the prop-based supporting action button is NOT rendered

#### Scenario: Slot empty with prop provided
- **WHEN** the `supportingAction` slot is empty AND the `supportingAction` prop is set
- **THEN** the prop-based supporting action button renders as before

### Requirement: Only pie-button elements accepted
The component SHALL only visually display `pie-button` elements within the action slots. Any other slotted elements SHALL be hidden.

#### Scenario: Non-pie-button element slotted
- **WHEN** an element that is not `pie-button` is slotted into `leadingAction` or `supportingAction`
- **THEN** that element is hidden via CSS (`display: none`)

#### Scenario: Dev-mode warning for invalid elements
- **WHEN** a non-`pie-button` element is slotted into an action slot AND the app is running in development mode
- **THEN** a console warning is emitted indicating only `pie-button` elements are supported

### Requirement: Footer visibility with slots
The component SHALL render the footer when action slots are populated, even if no action props are provided.

#### Scenario: Only slot provided, no props
- **WHEN** a `pie-button` is slotted into `leadingAction` AND no `leadingAction` prop is set
- **THEN** the notification footer is rendered containing the slotted button

### Requirement: Backward compatibility
The existing prop-based API SHALL remain fully functional and unchanged.

#### Scenario: Prop-only usage unchanged
- **WHEN** a consumer uses only `leadingAction` and `supportingAction` props without any slotted content
- **THEN** the component behaves identically to before this change
