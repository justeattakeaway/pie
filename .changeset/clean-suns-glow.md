---
"@justeattakeaway/pie-css": minor
---

[Changed] - decoupled paragraph spacing from `u-font-*` typography classes.

`margin-block-end` is no longer included in typography utility classes by default. Use `.u-typographySpacing` alongside a typography utility class on the same element to apply paragraph spacing where a `paragraph` token exists.

Before:

```html
<p class="u-font-body-l">Text with typography and paragraph spacing</p>
```

After:

```html
<p class="u-font-body-l u-typographySpacing">Text with typography and opt-in paragraph spacing</p>
```
