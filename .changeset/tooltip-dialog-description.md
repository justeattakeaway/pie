---
"@justeattakeaway/pie-tooltip": minor
"@justeattakeaway/pie-storybook": patch
---

[Added] - New `focusPanel()` method for dialog mode, which moves focus to the panel's content so screen readers announce the content followed by the dialog's name and role. VoiceOver does not announce a dialog's `aria-describedby` when focus enters the dialog (WebKit bug 282773), so the WAI-ARIA APG recommends making a static element at the start of the dialog's content focusable and focusing that on open instead of the first control. The content is `tabindex="-1"` in dialog mode, never reached by Tab, and the panel's own controls stay next in the tab sequence. The method waits for the panel's opening update to commit, then retries the focus move across animation frames until it lands — Safari can silently drop the call on a panel whose reveal is still settling — and resolves to `true` once focus is in place, or `false` if the panel is closed or in tooltip mode. No waiting is needed on the consumer's side: call it straight after setting `isOpen`.

[Changed] - In dialog mode the panel is now described by its `content` slot via `aria-describedby`, so all of the panel's content is announced to screen readers when the dialog opens rather than just its accessible name.

[Fixed] - Each tooltip now generates unique heading and content ids per instance. HTML requires an id to be unique within a tree and WAI-ARIA treats a duplicate as an author error where the user agent uses the first matching element, so the panel's `aria-labelledby` and `aria-describedby` no longer rely on that fallback when several tooltips are on one page.

[Removed] - The `pie-tooltip-body` `data-test-id` from the body wrapper around the heading and content. The wrapper itself stays, but its test id was referenced by nothing in the component's own test suite; the `pie-tooltip-content` test id covers the panel's text and is the focus target in dialog mode.

[Fixed] - The onboarding tour story now opens and focuses the next step before closing the previous one, so focus never lands in a panel that is already `aria-hidden`. Previously the screen reader dropped focus mid-transition and announced later steps as a bare dialog with no description.
