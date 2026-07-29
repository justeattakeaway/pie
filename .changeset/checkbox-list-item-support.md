---
"@justeattakeaway/pie-checkbox": minor
---

[Added] - `pie-checkbox` now forwards a click dispatched on its host to the internal input (so it can be toggled by a surrounding `pie-list-item` row), and, when used inside a `pie-list-item`, takes its accessible name and description from the item via context and applies them to its input. Its resting tick background is also transparent inside a list item, so the row's hover and active tints show through the box (matching the radio).
