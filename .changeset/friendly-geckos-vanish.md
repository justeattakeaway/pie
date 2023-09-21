---
"@justeattakeaway/pie-webc-core": minor
---

[Changed] - default dir value in RTLMixin to `auto` on node environments (such as SSR) and infer from document root once rendered client-side - this prevents the mixin from breaking SSR in applications such as NextJS
