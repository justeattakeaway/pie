---
'@justeattakeaway/pie-webc-testing': minor
---

[Added] - `BasePage.open` now settles the page before returning, so tests no longer need their own fixed waits. It waits for every PIE component on the page to be upgraded (failing with the names of any that were not), for every Lit element's render cycle to complete, and for every image and web font to load, then collapses all CSS animations and transitions.

[Added] - `settlePage` and `freezeAnimations`, exported from `src/helpers/page-object/settle.ts`, plus a `BasePage.freezeAnimations` method for re-settling motion after an interaction that renders new components. The freeze is injected into every shadow root, which neither Playwright's `reducedMotion` option nor Percy reaches, so animated components such as `pie-spinner` are captured at a fixed frame rather than an arbitrary one.
