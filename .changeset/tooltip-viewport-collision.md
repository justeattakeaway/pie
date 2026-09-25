---
"@justeattakeaway/pie-tooltip": minor
"@justeattakeaway/pie-storybook": patch
---

[Added] - Viewport collision detection for `pie-tooltip`. The panel now repositions itself — flipping to the opposite side and/or shifting its alignment — when its preferred `position` would collide with the viewport or a clipping scroll container. This behaviour is always on and cannot be disabled.
