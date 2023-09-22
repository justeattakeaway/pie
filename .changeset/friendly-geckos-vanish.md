---
"@justeattakeaway/pie-webc-core": minor
---

[Changed] - Rewrite RTL mixin to remove the dir property. The LitElement base class is a subclass of HTMLElement, so a Lit component inherits all of the standard HTMLElement properties and methods. This means that the dir property is already available on the component and we don't need to add it again. [Reference](https://lit.dev/docs/components/defining/#a-lit-component-is-an-html-element). During SSR, if no dir is provided, it will be inferred from the document.documentElement once it's instantiated on the client.
