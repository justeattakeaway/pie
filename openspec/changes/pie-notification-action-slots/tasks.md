## 1. Core Implementation

- [x] 1.1 Add `_hasSlottedLeadingAction` and `_hasSlottedSupportingAction` reactive state properties to the component class
- [x] 1.2 Add `leadingAction` and `supportingAction` named slots to the footer template with `@slotchange` handlers
- [x] 1.3 Implement slotchange handler that detects slotted content and updates state properties
- [x] 1.4 Update footer render logic to show footer when slots are populated (even without props)
- [x] 1.5 Update `renderActionButton` calls to skip prop-based rendering when corresponding slot is populated
- [x] 1.6 Add console warning when non-pie-button elements are slotted

## 2. Styling

- [x] 2.1 Add `::slotted(:not(pie-button)) { display: none; }` rule to hide invalid slotted elements
- [x] 2.2 Add `::slotted(pie-button)` styles to ensure slotted buttons match layout expectations (gap, width in stacked mode)

## 3. Types and Definitions

- [x] 3.1 Update `defs.ts` to document the new slots (JSDoc / CEM metadata if applicable)

## 4. Testing

- [x] 4.1 Add browser tests: slot populated with pie-button renders correctly and hides prop-based button
- [x] 4.2 Add browser tests: slot empty falls back to prop-based rendering
- [x] 4.3 Add browser tests: non-pie-button elements are hidden
- [x] 4.4 Add browser tests: footer renders when only slot is provided (no props)
- [x] 4.5 Add visual regression tests for slot-based action buttons (with icons, loading, disabled)

## 5. Storybook

- [x] 5.1 Add stories demonstrating slot-based leading action (with icon, loading state)
- [x] 5.2 Add stories demonstrating slot-based supporting action (disabled state)
- [x] 5.3 Add story showing both slots populated simultaneously

## 6. Documentation

- [x] 6.1 Update component README with slot usage examples
- [x] 6.2 Add "Slots vs Props" guidance section to README
- [x] 6.3 Create changeset (minor, `[Added]`)
