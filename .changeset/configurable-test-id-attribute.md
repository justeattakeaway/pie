---
"@justeattakeaway/pie-webc-core": minor
---

[Added] `setPieTestIdAttribute` / `getPieTestIdAttribute` to globally configure the attribute name PIE components use for their internal test hooks (defaults to `data-test-id`). Lets consumers align PIE internals with their Playwright `testIdAttribute` so `getByTestId` works end-to-end.
