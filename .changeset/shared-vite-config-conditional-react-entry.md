---
"@justeattakeaway/pie-components-config": patch
---

[Changed] - The shared Vite config only includes the `react` lib entry when `src/react.ts` exists, so packages without a React wrapper (such as `pie-webc-core`) can reuse the shared config and its TypeScript declaration generation
