---
"@justeattakeaway/pie-dropdown": patch
"@justeattakeaway/pie-storybook": patch
---

[Fixed] - The clear button is now fully disabled when a disabled dropdown has a selection: no hover or pointer affordance, and the disabled content colour. The multi-select count chip is now disabled too, so a disabled field's selections can no longer be cleared via its close button.
[Changed] - All `pie-dropdown` props are now exposed as controls in the public Storybook stories (including `options`, `aria` and the copy props), and a temporary Design Review story folder has been added presenting the four dropdown variants with icons and secondary option text for design review.
