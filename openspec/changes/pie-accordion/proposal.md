## Why

The PIE design system is missing an accordion component. Consumers currently have to build their own collapsible panels, leading to inconsistent implementations across products. This change introduces `pie-accordion` as a first-class PIE web component aligned with the v0.2.0 Figma design spec.

## What Changes

- Introduces the `pie-accordion` web component (`@justeattakeaway/pie-accordion`)
- Provides a controlled, accessible accordion item with a clickable trigger and collapsible content panel
- Consumers stack multiple `<pie-accordion>` instances to form a group; no parent container component is required
- Uses `pie-divider` internally for the bottom separator

## Capabilities

### New Capabilities

- `accordion-trigger`: The clickable heading bar — contains heading text, optional leading icon, optional secondary label, and a chevron indicator. Controlled by `isOpen`, `headingLabel`, `headingLevel`, `secondaryLabel`, `iconSize`, `size`, `isEmphasisReduced`. Emits `pie-accordion-toggle` on click.
- `accordion-panel`: The collapsible content region — shown/hidden via the `hidden` attribute based on `isOpen`. Accepts arbitrary slotted content.
- `accordion-divider`: Optional bottom divider rendered via `pie-divider`, controlled by `isDividerEnabled` (default `true`).

### Modified Capabilities

## Impact

- New package: `packages/components/pie-accordion`
- New dependency on `@justeattakeaway/pie-divider`
- New dependency on `@justeattakeaway/pie-icons-webc` (chevron icon)
- Re-exported from `@justeattakeaway/pie-webc` umbrella package
- No breaking changes to existing components
