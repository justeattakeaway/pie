---
"@justeattakeaway/pie-list": minor
---

[Changed] - `pie-list-item` now declares how a row behaves through a single `interactionType` prop (`none` | `radio` | `checkbox` | `switch` | `link`, default `none`), which drives the row's role, accessible naming, click forwarding and interactive states. This replaces the `selectionType` prop.
[Added] - `interactionType="link"` turns the whole row into a single navigation link: slot an empty `<a slot="link" href="...">` and it is stretched over the entire row and named from the item's text (`primaryText` as the accessible name, `secondaryText`/`metaText` as the description).
