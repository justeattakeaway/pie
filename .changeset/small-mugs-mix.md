---
"@justeattakeaway/pie-switch": minor
---

- [Removed] - (Breaking Change) `aria.describedby` support from pie-switch. It was misused as `aria-describedby` expects element IDs to reference existing descriptive elements, which isn’t feasible across Shadow DOM boundaries and being text conflicted with aria-label, internal labels, and external label handling.
- [Added] - Wrapped the checked value with the [lit live directive ](https://lit.dev/docs/api/directives/#live) to ensure the DOM and component state stay in sync.
- [Added] - Missing `defaultChecked` prop and form rest logic
- [Changed] - Refactored the toggle between leading and trailing labels to be handled via CSS.
- [Changed] - Updated the component to use a `<div>` as the parent wrapper when the label prop isn’t provided. This avoids nested `<label>` elements when consumers wrap the component with [an external label](https://webc.pie.design/?path=/docs/components-switch--overview#external-labels), which is an [invalid](https://forum.freecodecamp.org/t/nesting-label/462466) HTML pattern
