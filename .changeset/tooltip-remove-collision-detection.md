---
"@justeattakeaway/pie-tooltip": minor
"@justeattakeaway/pie-storybook": patch
---

[Changed] - Removed the viewport collision detection from `pie-tooltip`. The panel now always renders at the `position` given, without flipping side, shifting alignment or otherwise repositioning to avoid the viewport or a clipping scroll container.
