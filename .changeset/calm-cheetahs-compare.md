---
"@justeattakeaway/pie-checkbox-group": patch
"@justeattakeaway/pie-lottie-player": patch
"@justeattakeaway/pie-notification": patch
"@justeattakeaway/pie-icon-button": patch
"@justeattakeaway/pie-form-label": patch
"@justeattakeaway/pie-checkbox": patch
"@justeattakeaway/pie-spinner": patch
"@justeattakeaway/pie-switch": patch
"@justeattakeaway/pie-modal": patch
"@justeattakeaway/pie-toast": patch
"@justeattakeaway/pie-card": patch
"@justeattakeaway/pie-chip": patch
"@justeattakeaway/pie-link": patch
---

[Changed] - Update prop definitions to align with conventions
- Use component props interface for all prop type definitions (e.g., `CardProps['href']` instead of just `string`).
  - Don't use `?` when declaring props, this comes from the interface anyway.
- If the prop has a default value, use that from `defaultProps`, and let TS infer the type.
- Make sure all uses of `@property()` have a `type`.
- `@state` properties should be private and prefixed with an underscore.
- Use `!` when a `@query` property is guaranteed to exist, reducing the complexity of the code.
