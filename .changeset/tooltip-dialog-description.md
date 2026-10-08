---
"@justeattakeaway/pie-tooltip": minor
"@justeattakeaway/pie-storybook": patch
---

[Added] - New `focusPanel()` method for dialog mode, which moves focus to the panel's content so screen readers announce the content, followed by the dialog's name and role — once each, on every screen reader. The content is `tabindex="-1"` in dialog mode, never reached by Tab, and the panel's own controls stay next in the tab sequence. The method waits for the panel's opening update to commit, then retries the focus move across animation frames until it lands — Safari can silently drop the call on a panel whose reveal is still settling — and resolves to `true` once focus is in place, or `false` if the panel is closed or in tooltip mode. No waiting is needed on the consumer's side: call it straight after setting `isOpen`.

[Changed] - In dialog mode the panel no longer carries `aria-describedby`. With `focusPanel()` moving focus to the content, the content is announced as the focused element, so a description would either do nothing — VoiceOver does not announce a dialog's description when focus enters it ([WebKit bug 282773](https://bugs.webkit.org/show_bug.cgi?id=282773)) — or say the content a second time, as NVDA and JAWS announce the description in addition to the focused content.

[Fixed] - Each tooltip now generates a unique heading id per instance. HTML requires an id to be unique within a tree and WAI-ARIA treats a duplicate as an author error where the user agent uses the first matching element, so the panel's `aria-labelledby` no longer relies on that fallback when several tooltips are on one page.

[Removed] - The `pie-tooltip-body` `data-test-id` from the body wrapper around the heading and content. The wrapper itself stays, but its test id was referenced by nothing in the component's own test suite; the `pie-tooltip-content` test id covers the panel's text and is the focus target in dialog mode.

[Fixed] - Escape now dismisses the panel even when no `triggers` are configured. Previously Escape was only watched while at least one trigger was set, so a panel driven without `triggers` — such as an onboarding tour step — needed its own key handling.

[Fixed] - The onboarding tour story now opens and focuses the next step before closing the previous one, so focus never lands in a panel that is already `aria-hidden`. Previously the screen reader dropped focus mid-transition and announced later steps as a bare dialog with no description.
