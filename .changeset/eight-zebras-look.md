---
"@justeattakeaway/pie-checkbox": minor
"pie-storybook": patch
---

[Added] - `defaultChecked` property.
[Changed] - Clarified usage of `checked` property. This was being used for both the initial and current states.
[Added] - Form reset behaviour. If the checkbox is associated with a form and the form is reset, `checked` is updated to match the value of `defaultChecked`.
