# @justeattakeaway/pie-tooltip

## 0.5.0

### Minor Changes

- [Added] - New `focusPanel()` method for dialog mode, which moves focus to the panel's content so screen readers announce the content, followed by the dialog's name and role, once each, on every screen reader. The content is `tabindex="-1"` in dialog mode, never reached by Tab, and the panel's own controls stay next in the tab sequence. The method waits for the panel's opening update to commit, then retries the focus move until it lands, and resolves to `true` once focus is in place, or `false` if the panel is closed or in tooltip mode. No waiting is needed on the consumer's side: call it straight after setting `isOpen`. ([#3225](https://github.com/justeattakeaway/pie/pull/3225)) by [@jamieomaguire](https://github.com/jamieomaguire)

  [Changed] - In dialog mode the panel no longer carries `aria-describedby`. With `focusPanel()` moving focus to the content, the content is announced as the focused element, so a description would either do nothing, as VoiceOver does not announce a dialog's description when focus enters it ([WebKit bug 282773](https://bugs.webkit.org/show_bug.cgi?id=282773)), or say the content a second time, as NVDA and JAWS announce the description in addition to the focused content.

  [Fixed] - Each tooltip now generates a unique heading id per instance. HTML requires an id to be unique within a tree and WAI-ARIA treats a duplicate as an author error where the user agent uses the first matching element, so the panel's `aria-labelledby` no longer relies on that fallback when several tooltips are on one page.

  [Removed] - The `pie-tooltip-body` `data-test-id` from the body wrapper around the heading and content. The wrapper itself stays, but its test id was referenced by nothing in the component's own test suite; the `pie-tooltip-content` test id covers the panel's text and is the focus target in dialog mode.

  [Fixed] - Escape now dismisses the panel even when no `triggers` are configured. Previously Escape was only watched while at least one trigger was set, so a panel driven without `triggers`, such as an onboarding tour step, needed its own key handling.

  [Fixed] - The onboarding tour story now opens and focuses the next step before closing the previous one, so focus never lands in a panel that is already `aria-hidden`. Previously the screen reader dropped focus mid-transition and announced later steps as a bare dialog with no description.

- [Changed] - A dismissible panel now presents as a non-modal dialog, not a tooltip. A close button invites the user inside the panel, and content a user enters is announced through focus, and a `role="tooltip"` panel must not contain focusable elements. Dismissible panels therefore need `heading` or `aria.label` for their accessible name, and the trigger should set `haspopup="dialog"` and track `expanded`. Tooltip mode is now strictly for hover- and focus-followed, non-dismissible panels. ([#3225](https://github.com/justeattakeaway/pie/pull/3225)) by [@jamieomaguire](https://github.com/jamieomaguire)

  [Fixed] - The panel's action-row layout class is now applied only when the `action` slot has content, rather than whenever the panel presents as a dialog. Dismissible panels without an action button no longer reserve the action row's height.

  [Changed] - The tooltip-mode trigger guidance now recommends giving the `pie-tooltip` element itself an `id` and pointing a plain HTML trigger's `aria-describedby` at it, rather than adding an `id` to the element in the `content` slot. A PIE component trigger still cannot carry an IDREF across its shadow boundary, so it passes the panel's text through the new `aria.description` property instead of `aria.label`.

  [Added] - New "Screen readers" stories under Components/Tooltip showing every trigger wiring, tooltip and dialog mode, with and without headings, close buttons, and a system-opened dialog with actions, as live, runnable examples alongside the README guidance.

### Patch Changes

- Updated dependencies [[`bd3669f`](https://github.com/justeattakeaway/pie/commit/bd3669f25cc69120c1430cfc6ae48638a2512bb2)]:
  - @justeattakeaway/pie-icon-button@2.8.0

## 0.4.0

### Minor Changes

- [Added] - Viewport collision detection for `pie-tooltip`. The panel now repositions itself — flipping to the opposite side and/or shifting its alignment — when its preferred `position` would collide with the viewport or a clipping scroll container. This behaviour is always on and cannot be disabled. ([#3211](https://github.com/justeattakeaway/pie/pull/3211)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.3.0

### Minor Changes

- [Added] - New 'triggers' prop to drive interactions that can trigger the tooltip opening ([#3194](https://github.com/justeattakeaway/pie/pull/3194)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-icon-button@2.7.35
  - @justeattakeaway/pie-webc-core@22.0.0
  - @justeattakeaway/pie-icons-webc@1.29.4

## 0.2.0

### Minor Changes

- [Added] - A controlled tooltip panel. `trigger` anchors the panel to an element elsewhere in the DOM by `id`, `position` places it on any of twelve sides and alignments, and `size` gives it a fixed 280px, its content's width, or the width of the trigger's parent. `variant` (`default` dark, `inverse` light), `type`, `heading`, `headingLevel`, `isDismissible` and the `content` and `action` slots cover presentation, with `--tooltip-offset` and `--tooltip-width` as CSS escape hatches. The panel re-measures its trigger while open, so it stays anchored through scrolling and resizing. Filling the `action` slot switches the panel from `role="tooltip"` to a named non-modal `role="dialog"`. The consumer owns `isOpen`: the component never writes to it, and emits `pie-tooltip-close` instead. ([#3171](https://github.com/justeattakeaway/pie/pull/3171)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.1.1

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@21.0.0

## 0.1.0

### Minor Changes

- [Added] - Initial empty component scaffolding ([#3168](https://github.com/justeattakeaway/pie/pull/3168)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@20.0.0
