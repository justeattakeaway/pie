## Why

Consumers need more granular control over notification action buttons — specifically the ability to add leading/trailing icons, loading states, or dynamic disabled states. The current prop-based API only supports simple text labels for actions. Adding optional named slots allows advanced use-cases without breaking the existing API.

## What Changes

- Add optional `leadingAction` and `trailingAction` named slots to `pie-notification`
- When a slot is populated, it takes precedence over the corresponding prop-based button
- Non-`pie-button` elements slotted into these slots are hidden via CSS (`::slotted`)
- A dev-mode console warning is emitted when invalid elements are slotted
- New Storybook stories demonstrating slot-based action buttons
- Visual regression tests extended to cover slot-based variants
- README updated with slot usage examples and "Slots vs Props" guidance

## Capabilities

### New Capabilities

- `action-button-slots`: Optional named slots (`leadingAction`, `trailingAction`) that accept `pie-button` elements, providing full control over action button configuration while maintaining backward compatibility with the prop-based API.

### Modified Capabilities

## Impact

- `packages/components/pie-notification` — template, styles, types, tests, docs
- Consumers using the prop-based API are unaffected (non-breaking, additive change)
- PIE Aperture notification demos need updating with slot examples
