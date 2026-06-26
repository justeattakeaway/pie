## ADDED Requirements

### Requirement: Divider is rendered by default
When `isDividerEnabled` is `true` (the default), the component SHALL render a `<pie-divider>` element after the panel in its shadow DOM.

#### Scenario: Divider present by default
- **WHEN** `isDividerEnabled` is not set (default)
- **THEN** a `<pie-divider>` is rendered at the bottom of the component

#### Scenario: Divider present when explicitly enabled
- **WHEN** `isDividerEnabled` is `true`
- **THEN** a `<pie-divider>` is rendered at the bottom of the component

---

### Requirement: Divider can be disabled
When `isDividerEnabled` is `false`, the component SHALL NOT render a `<pie-divider>` element.

#### Scenario: Divider absent when disabled
- **WHEN** `isDividerEnabled` is `false`
- **THEN** no `<pie-divider>` element is rendered

---

### Requirement: Divider visibility is independent of open/closed state
The divider SHALL be rendered (or not) based solely on `isDividerEnabled`, regardless of whether the accordion is expanded or collapsed.

#### Scenario: Divider visible when collapsed
- **WHEN** `isDividerEnabled` is `true` and `isOpen` is `false`
- **THEN** the divider is rendered

#### Scenario: Divider visible when expanded
- **WHEN** `isDividerEnabled` is `true` and `isOpen` is `true`
- **THEN** the divider is still rendered
