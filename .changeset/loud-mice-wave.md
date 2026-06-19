---
"@justeattakeaway/pie-assistive-text": major
---

[Changed] - (BREAKING CHANGE) `pie-assistive-text` now uses a `message` prop for content instead of default slot text. Consumers relying on the component directly must replace the default slotted content with the `message` prop.

Before:

```html
<pie-assistive-text variant="error">This field is required.</pie-assistive-text>
```

After:

```html
<pie-assistive-text variant="error" message="This field is required."></pie-assistive-text>
```
