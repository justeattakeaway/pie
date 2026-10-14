---
"@justeattakeaway/pie-webc-core": patch
---

[Added] - TypeScript declarations (`dist/index.d.ts`) are now built and published with the package, so TypeScript consumers get first-class types via the new `types` entry point

[Fixed] - A `typesVersions` mapping now resolves the `@justeattakeaway/pie-webc-core/src/internals/PieElement` type import used by published components' declaration files (via the new `dist/internals.d.ts`), fixing unresolvable module errors for TypeScript consumers
