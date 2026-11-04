---
'@justeattakeaway/pie-dropdown': patch
---

[Fixed] - The popover is now positioned with CSS (`position: absolute`, hanging directly below the field) instead of viewport-fixed coordinates computed in JavaScript. This fixes the popover rendering over or above the field in static DOM replays (visual regression tests), and mispositioning inside ancestors with a transform — e.g. an open `pie-modal`. Trade-off: the popover is clipped by a scrollable or `overflow: hidden` ancestor, so consumers should give the field enough room below it inside such containers.
