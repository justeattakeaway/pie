# DSW-4314: findings for the design system team

**Date:** 2026-09-14
**Context:** a review of the `pie-design-system` agent skill surfaced a number of issues in PIE itself
rather than in the skill. Those are collected here for the team to decide on. The skill fixes from the
same review are in `.agents/skills/pie-design-system/`; nothing in this document was changed by them.

Everything below was verified against the codebase or in a browser. Nothing is inferred. The full
review record, including method and evidence, is held against DSW-4314.

---

## P1: `pie-text-input`'s documented labelling produces no accessible name

**Status: confirmed defect, `pie-text-input` is beta, consumer impact today.**

Verified in Chrome on `webc.pie.design` by reading the accessibility tree, not inferred from source.

Both patterns the README documents fail:

| Case | Source | Result |
|---|---|---|
| `aria-labelledby` on host plus `pie-form-label` | README line 203 | inner textbox has no accessible name |
| `aria-label` on host | README line 209 | inner textbox has no accessible name |
| The `Labelled` Storybook story | `pie-text-input.stories.ts:306` | inner textbox has no accessible name |

What the accessibility tree shows after injecting the documented markup:

```
generic "First name:"      <- the <pie-text-input> host carries the name
  textbox                  <- the inner <input>, no name
```

Three things make this a real defect rather than a cosmetic one:

1. `src/index.ts` lines 233 to 235 forward only `aria-describedby`, `aria-invalid` and
   `aria-errormessage` to the inner `<input>`. No name is forwarded.
2. `delegatesFocus` is `true`, so focus lands on the inner `<input>`. The name sits on an ancestor
   whose computed role is `generic`.
3. The component does not consume `aria-context`, and PIE's own `aria-context.ts` states that
   `aria-labelledby` IDREFs "cannot reach" across the shadow boundary.

`pie-textarea` works, because it forwards `aria.label` inward to its inner `<textarea>`. Sibling form
controls, opposite outcomes.

**Why it survived:** no test in `packages/components/pie-text-input/test/` asserts an accessible name.
The a11y spec is 620 bytes.

**Suggested action.** Fix in the component, not the docs: forward the name inward as `pie-textarea`
does, or consume `aria-context` as `pie-checkbox` and `pie-radio` do. The README then becomes correct
as written. Add a browser test asserting the inner input's accessible name so it cannot regress.

**Blocks something else.** Four of the five form controls have no labelling section at all
(`pie-select`, `pie-textarea`, `pie-checkbox`, `pie-radio`). The obvious fix is to copy
`pie-text-input`'s section into them. That should wait, or it propagates a broken pattern into four
more READMEs with added authority.

---

## P1: `pie-icon-button` documents no accessible name and every example omits one

**Status: `pie-icon-button` is stable. Verified against current `main`.**

- Both usage examples produce a nameless icon button:

  ```jsx
  <PieIconButton onClick={handleClick}>
    <IconClose></IconClose>
  </PieIconButton>
  ```

  and the HTML equivalent at README line 67.
- The README contains **zero** occurrences of "accessible name", "must provide", "required label" or
  "aria-label". Grepped.
- The `aria` prop's documented default is `undefined`, and nothing states a label is needed.

A nameless icon button is the most common accessibility defect for this control. A developer copying
the documented example ships one. Confirmed in the browser that the PIE close icon renders with
`role="presentation" focusable="false"`, so the icon contributes nothing and `aria.label` is the only
thing that can provide a name.

**Suggested action.** Add `aria={{ label: '...' }}` to both examples and one sentence stating a label
is required when there is no visible text. Cheapest high-value change in this document.

---

## P2: `pie-form-label` is alpha but prescribed by two stable components

**Verified statuses from each package's `pieMetadata.componentStatus`.**

| Component | Status | Prescribes `pie-form-label` |
|---|---|---|
| `pie-radio-group` | **stable** | yes, slot table says "Please use `pie-form-label`" |
| `pie-checkbox-group` | **stable** | yes, in both primary usage examples |
| `pie-text-input` | beta | yes, "Please use the form label component" |
| `pie-form-label` | **alpha** | (the prescribed component) |

Package level is clean: no beta or stable component declares a runtime dependency on an alpha
component. The coupling is entirely in documentation.

Labelling is accessibility-critical, not cosmetic. A consumer following stable `pie-radio-group`
documentation is instructed to adopt an alpha component whose own status says "preliminary usage;
expect changes".

`pie-list` has the same shape at lower severity: prescribed by stable `pie-checkbox-group` and
`pie-radio-group`, but only as an optional alternative layout rather than the default.

**Suggested action.** Either promote `pie-form-label` alongside the components that require it, or
change the labelling guidance so it does not depend on an alpha component.

**Suggested process change.** On promotion, check that every component the docs prescribe is at the
same status or higher. This is mechanical: `pieMetadata.componentStatus` is already machine-readable in
every component `package.json` and already aggregated by
`packages/tools/pie-monorepo-utils/component-statuses/componentStatusGenerator.js`. It could be a CI
step.

---

## P2: three different accessible-name mechanisms, with no stated direction

| Mechanism | Used by |
|---|---|
| Native ARIA attribute on the host | documented for `pie-text-input`; `pie-select` documents nothing |
| `aria` object prop forwarded inward | `pie-textarea` and 12 others |
| `aria-context` provider and consumer | `pie-checkbox`, `pie-radio`, `pie-switch`, `pie-list-item` |

Thirteen components declare an `aria` object prop, verified by grepping `*/src/defs.ts`:
`pie-breadcrumb`, `pie-button`, `pie-card`, `pie-chip`, `pie-icon-button`, `pie-link`, `pie-modal`,
`pie-notification`, `pie-spinner`, `pie-switch`, `pie-textarea`, `pie-toast`, `pie-tooltip`.
`pie-text-input`, `pie-select`, `pie-checkbox` and `pie-radio` do not.

The split runs through sibling components, so labelling a textarea differs from labelling a text input
for no reason a consumer can see.

**It also fails silently.** On a component with an `aria` prop, a native attribute on the host is
discarded. `pie-icon-button/src/index.ts` lines 80 to 83 read the object and write the attributes onto
the inner `<button>`; nothing reads `aria-label` from the host. So
`<pie-icon-button aria-label="Close">` yields an unlabelled button with no error, no warning and no
visual difference. The correct form is `aria={{ label: 'Close' }}`.

The shapes are also inconsistent between components:

| Component | Accessible-name prop |
|---|---|
| `pie-icon-button` | `aria.label` |
| `pie-notification` | `aria.close` for the dismiss control; `aria.label` means something different |
| `pie-notification` action buttons | a flat `ariaLabel` string, not nested under `aria` |

**Question for the team.** Is the `aria` object prop the intended direction, or is `aria-context` the
successor? Nothing in the codebase states a preference. The answer determines what the docs should say
and which components should converge on what.

---

## P3: `element-internals-polyfill` covers 3 of 9 form-associated components

**Verified by grepping `src/` of every component using `FormControlMixin`.**

| Has polyfill | Does not |
|---|---|
| `pie-button`, `pie-switch`, `pie-text-input` | `pie-checkbox`, `pie-checkbox-group`, `pie-radio`, `pie-radio-group`, `pie-select`, `pie-textarea` |

The six without it do not receive it transitively. So a page using only `pie-checkbox`, with no button,
switch or text input anywhere, runs without the polyfill.

**This is probably moot, and if so the fix points the opposite way to the obvious one.**
`browserslist-config-pie` targets `last 4 Safari major versions` and `last 4 iOS major versions`.
Form-associated custom elements shipped in Safari 16.4 in early 2023, so every browser in the current
support matrix should have `ElementInternals` natively.

**Suggested action.** Confirm the version floor. If it holds, remove the polyfill from the three
components carrying it rather than adding it to the other six. Either way the present state is the one
nobody would choose deliberately: three components shipping a polyfill the other six do not, with no
shared mechanism. If it is still needed it belongs in `FormControlMixin` so all nine inherit it.

---

## P3: documentation fixes, mostly one-liners

| Issue | Location | Detail |
|---|---|---|
| `nuxt-3` guide opens with the wrong framework | `packages/components/pie-webc/docs/framework-integration-guides/nuxt-3.md:16` | "install some **React and Next.js** specific dependencies", immediately before telling you to install `nuxt-ssr-lit`. Copy-paste from the Next guide. Present only in the shipped package doc, not the pie-docs copy, so it is consumer-facing. |
| `haspopup` type is wrong | `pie-icon-button/README.md:36` | Documents `{ haspopup?: string }`. `src/defs.ts:13` declares `boolean \| 'menu' \| 'listbox' \| 'tree' \| 'grid' \| 'dialog'`. Hides that `boolean` is valid, implies any string is. `haspopup: 'dropdown'` passes a doc-based reading, is invalid ARIA, silently ignored. |
| `heading` versus `title` conflict | `pie-notification/README.md` | Properties table lists `heading`; every usage example passes `title`. One is stale. Agents reading the doc cannot tell which. |
| React event prop names are undocumented | `pie-webc/docs/events.md` | The docs name the event (`pie-notification-close`) but nothing states the React prop is `onPieNotificationClose`. Unguessable from the docs. Three separate agents had to infer it, two by reading consumer application code. |
| No native event typing for React | `pie-webc/docs/events.md` | Covers PIE custom events and native events separately but gives no typing guidance for native events on wrapped components, which is why `pie-text-input`'s own React example falls back to `onInput={handler as any}`. |
| Stray backtick | `pie-icon-button/README.md:1` | First line is `` `# @justeattakeaway/pie-icon-button ``. Present in the published package. |
| Trailing space in a default arg | `apps/pie-storybook/stories/pie-icon-button.stories.ts:15` | `aria: { label: 'Test Label ' }`. |
| `pie-select` has no `required` prop | `pie-select/src/defs.ts` | The only "required" reference is `name` being required for form participation. `pie-text-input` by contrast exposes `required`, `minlength`, `maxlength`, `pattern`, `min`, `max` and a `validity` getter. Worth confirming the asymmetry is intended, since required-field validation must otherwise be hand-rolled. |
| `href`, `target`, `rel` documented against the wrong `tag` | `pie-card/README.md:37-39` | Each says it applies "when `tag` is set to `"button"`". `src/index.ts` only renders `href` in `renderAnchor` (line 84), which runs when `tag === 'a'` (line 203). The README's own examples use `tag="a"`, so the table contradicts them. Four of four test agents that used `pie-card` as a link noticed it. |
| `pie-icons-webc` ships no `docs/` | `pie-icons-webc/package.json` | Declares `files: ["dist"]`, unlike `pie-webc` and `pie-css` which both ship their docs. Nothing is broken, but it is the odd one out, and shipping a docs directory would make the icon set self-describing rather than requiring a listing of 1,245 modules. |

### `component-versions.md` does not distinguish a warning from a hard failure

`packages/components/pie-webc/docs/component-versions.md` says importing the same component twice "may
see a warning in development mode", and does not say what an uncaught `DOMException` from
`customElements.define` means, which is the symptom consumers actually report.

**Verified** against `pie-webc-core/src/decorators/safe-custom-element.ts`:

| Situation | Actual behaviour |
|---|---|
| Two copies, different versions | `console.warn` naming the registered version, no throw |
| Two copies, same version | swallowed silently, no warning at all |
| Uncaught `DOMException` from `define` | the throwing copy is not going through `safeCustomElement` |

`safeCustomElement` try/catches the `define` call and warns only when
`currentElementVersion !== registeredVersion`, so identical duplicates are invisible. An uncaught
`DOMException` therefore means the offending copy predates the decorator or calls
`customElements.define` directly, which usefully identifies which of the two copies is the rogue one.

The guide also does not list the umbrella-versus-individual-package conflict as a concrete trigger, and
gives no remediation steps at all.

**Suggested action.** Document the three cases above. The file is consumer-facing, so this wants a
changeset. The silent same-version case may deserve a warning of its own, since a duplicate with
matching versions is currently undetectable from the console.

---

## Summary of suggested actions

| Priority | Action | Effort |
|---|---|---|
| P1 | Fix `pie-text-input` to forward an accessible name inward, plus a browser test | small component change |
| P1 | Add `aria.label` to `pie-icon-button`'s two examples and state it is required | one-line doc fix |
| P2 | Decide `pie-form-label`'s promotion, or change the labelling guidance | decision, then small |
| P2 | Decide the direction for accessible names: `aria` prop or `aria-context` | decision |
| P2 | Add a CI check that a component's docs do not prescribe a lower-status component | small, data already exists |
| P3 | Confirm the Safari floor, then most likely remove the polyfill from three components | small |
| P3 | The documentation table above | mostly one-liners |
| P3 | Document the three duplicate-registration cases in `component-versions.md` | small, needs a changeset |
| P3 | Hold off copying `pie-text-input`'s labelling section into the other four form controls until P1 lands | none, just sequencing |
