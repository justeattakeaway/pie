---
"@justeattakeaway/pie-list": minor
---

[Changed] - `pie-list-item` now declares how a row behaves through a single `interactionType` prop (`none` | `radio` | `checkbox` | `switch` | `link` | `button`, default `none`), which drives the row's role, accessible naming, click forwarding and interactive states. This replaces the `selectionType` prop.
[Added] - `interactionType="link"` turns the whole row into a single navigation link: slot an empty `<a slot="link" href="...">` and it is stretched over the entire row and named from the item's text (`primaryText` as the accessible name, `secondaryText`/`metaText` as the description).
[Added] - `interactionType="button"` turns the whole row into a single button for an in-page action. The item renders an invisible, row-sized native `<button type="button">` for you (no slotting), named from its text and keeping the PIE focus ring. Activation is native (pointer, Enter and Space fire a bubbling `click`) - listen for `click` on the `pie-list-item`. It is an action trigger only, not a form control.
