# @justeattakeaway/pie-list

## 1.1.0

### Minor Changes

- [Added] - New `pie-dropdown` component: a form-associated dropdown supporting single and multi selection, an optional search field, loading and no-results states, and full keyboard and screen reader support (single select uses a listbox with roving focus; multi select uses checkbox rows inside a checkbox group). The component is server-side rendering safe (declarative shadow root, deterministic internal ids) and works in controlled and uncontrolled modes: the `value` prop drives the component, and the `change` event (exposed as `onChange` in the generated React wrapper — read the value from `event.target.value`) flows changes back, including when the owning form is reset (custom behaviour, unlike native controls). ([#3292](https://github.com/justeattakeaway/pie/pull/3292)) by [@jamieomaguire](https://github.com/jamieomaguire)

  [Added] - The popover is positioned with CSS directly below the field and never flips above it; note it is clipped by a scrollable or `overflow: hidden` ancestor, so give the field room below it inside such containers. The listbox stays mounted (hidden while closed) after first open so re-opens do not re-insert it and interrupt screen reader announcements, and the focused option is visibly indicated with the PIE focus ring however the popover was opened.

  [Added] - Non-searchable fields open on click or keyboard focus (focus-open never moves focus — the arrow keys move focus into the option list, never `Tab`, so the field's other controls stay reachable); searchable fields open on the first keystroke, the arrow keys, a click or the chevron — not on focus, so the `aria-expanded` state change never interrupts the field's focus announcement. The chevron is the pointer way out in searchable variants; the caret always stays in the search field. The popover's scroll position resets on every open, so the list always starts at the top (a keyboard open still scrolls the selected option into view, matching a native `<select>`).

  [Added] - Search filters options whose primary or secondary text contains the typed text, case-insensitively; typing while focused on an option returns focus to the search field and filters. Options set while the popover is open — e.g. fetched asynchronously in response to `pie-dropdown-search` — are rendered immediately. Selecting from filtered results shows the selection in the field and clears the search, so the next open starts from the full list.

  [Added] - In multi-select variants with a selection, the count chip's close button is the first tab stop (the trigger is skipped while the chip is shown) and opens the popover on keyboard focus, so keyboard users can clear every selection and Tab straight to the options. The clear affordances (the chip's close button and the single-select clear button) append the field's accessible name to their own for screen reader context, e.g. "Clear all 2 selections, Meal", and are fully disabled when the field is disabled.

  [Added] - Each option accepts an `icon` — the tag name of a registered `pie-icons-webc` element, e.g. `'icon-food'` — which the dropdown renders as the option's leading icon in single-select rows and, while selected, in the field alongside the selection text (open or closed, searching or not; multi-select rows host checkboxes and show no option icons). The app imports the icons it uses (the dropdown renders the tag but never bundles icons); unset or invalid tag names render no icon. All copy is consumer-supplied — the component ships no hard-coded strings: `loadingText`, `noResultsText`, `optionsAvailableText`, `selectedCountText`, `noSelectionText` and the clear affordances' accessible names (`aria.clearSelection` / `aria.clearAllSelections`) render nothing when unset (the spinner still shows while loading, the count chip falls back to the bare count, and a missing required selection still blocks submission with an empty message). `{count}` placeholders are supported in `selectedCountText`, `optionsAvailableText` and `aria.clearAllSelections`, and `assistiveText` is announced as the field's accessible description.

  [Added] - `RovingTabindexController` exported from `pie-webc-core` for arrow-key, Home/End and type-ahead navigation across a group of items. An `isTabbable` option removes the group from the page tab sequence entirely, and an `isTypeaheadEnabled` option disables type-ahead, for combobox-style popovers where the field is the single tab stop and printable characters belong in the textbox.

  [Added] - New `option` interaction type on `pie-list-item`: the item becomes an `option` row with interactive states, for use inside listbox-style containers such as the dropdown popover; selection state and focus remain owned by the container.

  [Added] - `pie-dropdown` re-exported from the `pie-webc` umbrella package.

### Patch Changes

- Updated dependencies [[`7dff68c`](https://github.com/justeattakeaway/pie/commit/7dff68ca731b7ad07387aa2da23ac51a8d030fb7)]:
  - @justeattakeaway/pie-webc-core@22.1.0

## 1.0.0

### Major Changes

- [Changed] - Promoted pie-list component status from beta to stable ([#3321](https://github.com/justeattakeaway/pie/pull/3321)) by [@raoufswe](https://github.com/raoufswe)

## 0.9.0

### Minor Changes

- [Added] - `primary` and `secondary` named slots on `pie-list-item`, so the item's text can be provided as rich markup. ([#3300](https://github.com/justeattakeaway/pie/pull/3300)) by [@raoufswe](https://github.com/raoufswe)

## 0.8.2

### Patch Changes

- [Fixed] - Corrected the design documentation link in the README ([#3301](https://github.com/justeattakeaway/pie/pull/3301)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.8.1

### Patch Changes

- Updated dependencies [[`ed9fd36`](https://github.com/justeattakeaway/pie/commit/ed9fd3620fd4d43c672f8f8202bf3835683fb88e)]:
  - @justeattakeaway/pie-webc-core@22.0.1

## 0.8.0

### Minor Changes

- [Changed] - Bump from Alpha to Beta ([#3229](https://github.com/justeattakeaway/pie/pull/3229)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.7.5

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@22.0.0

## 0.7.4

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@21.0.0

## 0.7.3

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@20.0.0

## 0.7.2

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@19.0.0

## 0.7.1

### Patch Changes

- Updated dependencies [[`dbe46d3`](https://github.com/justeattakeaway/pie/commit/dbe46d396da315065477f4418cf07b9136c6b4d6)]:
  - @justeattakeaway/pie-webc-core@18.1.0

## 0.7.0

### Minor Changes

- [Changed] - Various design review tasks such as disabled style fixes and icon colours. A disabled `pie-list-item` no longer automatically dims slotted `pie-tag` elements; set `isDimmed` on the tag explicitly instead. ([#3115](https://github.com/justeattakeaway/pie/pull/3115)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Changed] - Compact list items align leading, trailing and meta content with the first line of the primary text, so it stays level with that line when the text wraps ([#3115](https://github.com/justeattakeaway/pie/pull/3115)) by [@jamieomaguire](https://github.com/jamieomaguire)

  [Changed] - Compact list items now respect the `--list-item-alignment` override, so `center` can be set on them as it can on any other item

- [Changed] - Disabled states documentation now appears in the table of contents and covers slotted `pie-thumbnail` alongside `pie-tag` ([#3115](https://github.com/justeattakeaway/pie/pull/3115)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.6.2

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@18.0.0

## 0.6.1

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@17.0.0

## 0.6.0

### Minor Changes

- [Added] - New hasDivider prop for optionally setting dividers on pie-list-item components. ([#3096](https://github.com/justeattakeaway/pie/pull/3096)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Removed] - In progress warning from list readme ([#3093](https://github.com/justeattakeaway/pie/pull/3093)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.5.0

### Minor Changes

- [Added] - `interactionType="button"` turns the whole row into a single button for an in-page action. The item renders an invisible, row-sized native `<button type="button">` for you (no slotting), named from its text and keeping the PIE focus ring. Activation is native (pointer, Enter and Space fire a bubbling `click`) - listen for `click` on the `pie-list-item`. It is an action trigger only, not a form control. ([#3079](https://github.com/justeattakeaway/pie/pull/3079)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`e9ef549`](https://github.com/justeattakeaway/pie/commit/e9ef54989cea1df4f77b9bb2923390318d00fa5e)]:
  - @justeattakeaway/pie-webc-core@16.1.1

## 0.4.0

### Minor Changes

- [Changed] - `pie-list-item` now declares how a row behaves through a single `interactionType` prop (`none` | `radio` | `checkbox` | `switch` | `link`, default `none`), which drives the row's role, accessible naming, click forwarding and interactive states. This replaces the `selectionType` prop. ([#3072](https://github.com/justeattakeaway/pie/pull/3072)) by [@jamieomaguire](https://github.com/jamieomaguire)

  [Added] - `interactionType="link"` turns the whole row into a single navigation link: slot an empty `<a slot="link" href="...">` and it is stretched over the entire row and named from the item's text (`primaryText` as the accessible name, `secondaryText`/`metaText` as the description).

## 0.3.0

### Minor Changes

- [Added] - `pie-list-item` supports `selectionType="checkbox"` for use inside a `pie-checkbox-group`: it names the slotted checkbox from its text (applied to the checkbox's internal input) and forwards row clicks to it. ([#3053](https://github.com/justeattakeaway/pie/pull/3053)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.2.0

### Minor Changes

- [Added] - `pie-list-item` can host an interactive control to make the whole row selectable, via a `selection-type` prop (`none` | `radio` | `checkbox` | `switch`, default `none`). With a selection type it takes a `presentation` role (for radio/checkbox), names the control from its `primaryText`, `secondaryText` and `metaText`, hides the duplicated visible text from assistive technology, and forwards row clicks to the control. A `disabled` prop applies the disabled row styling and stops row-click forwarding (set it alongside the control's own `disabled`); a disabling ancestor (a `pie-radio-group`) also cascades its disabled state to the rows. ([#3001](https://github.com/justeattakeaway/pie/pull/3001)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`d7e5d5d`](https://github.com/justeattakeaway/pie/commit/d7e5d5d211be24a29cff33b077509d5cf4b6289b), [`d7e5d5d`](https://github.com/justeattakeaway/pie/commit/d7e5d5d211be24a29cff33b077509d5cf4b6289b)]:
  - @justeattakeaway/pie-webc-core@16.1.0

## 0.1.1

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@16.0.0

## 0.1.0

### Minor Changes

- [Added] - Plain text list/list item component variation. ([#2989](https://github.com/justeattakeaway/pie/pull/2989)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.0.31

### Patch Changes

- Updated dependencies [[`1926dd6`](https://github.com/justeattakeaway/pie/commit/1926dd6a8e486dd8af9a532b8addb67a5c1cdc8b)]:
  - @justeattakeaway/pie-webc-core@15.1.0

## 0.0.30

### Patch Changes

- Updated dependencies [[`a320798`](https://github.com/justeattakeaway/pie/commit/a320798003252582e5c8360e8510a43cf74e3d36)]:
  - @justeattakeaway/pie-webc-core@15.0.1

## 0.0.29

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@15.0.0

## 0.0.28

### Patch Changes

- [Changed] - script invocation patterns, replacing npx with yarn ([#2891](https://github.com/justeattakeaway/pie/pull/2891)) by [@fernandofranca](https://github.com/fernandofranca)

- Updated dependencies [[`383b940`](https://github.com/justeattakeaway/pie/commit/383b9408d880e6fcd3576a80a9fd2c42cd75bb9d)]:
  - @justeattakeaway/pie-webc-core@14.0.2

## 0.0.27

### Patch Changes

- [Updated] - `@custom-elements-manifest/analyzer` to version that fixes issue with new version of TS - https://github.com/open-wc/custom-elements-manifest/blob/master/packages/analyzer/CHANGELOG.md#release-094 ([#2850](https://github.com/justeattakeaway/pie/pull/2850)) by [@siggerzz](https://github.com/siggerzz)

## 0.0.26

### Patch Changes

- [Updated] - custom-elements-manifest.config to use shared config from @justeattakeaway/pie-components-config ([#2826](https://github.com/justeattakeaway/pie/pull/2826)) by [@siggerzz](https://github.com/siggerzz)

## 0.0.25

### Patch Changes

- Updated dependencies [[`38e002f`](https://github.com/justeattakeaway/pie/commit/38e002fbf1be6f64c0937c93645adaf112bfeb77)]:
  - @justeattakeaway/pie-webc-core@14.0.1

## 0.0.24

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@14.0.0

## 0.0.23

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@13.0.0

## 0.0.22

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@12.0.0

## 0.0.21

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@11.0.2

## 0.0.20

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@11.0.1

## 0.0.19

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@11.0.0

## 0.0.18

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@10.0.0

## 0.0.17

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@9.0.0

## 0.0.16

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@8.0.1

## 0.0.15

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@8.0.0

## 0.0.14

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@7.0.0

## 0.0.13

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@6.0.2

## 0.0.12

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@6.0.1

## 0.0.11

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@6.0.0

## 0.0.10

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@5.0.0

## 0.0.9

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@4.0.0

## 0.0.8

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@3.0.2

## 0.0.7

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@3.0.1

## 0.0.6

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@3.0.0

## 0.0.5

### Patch Changes

- Updated dependencies [[`6d7157b`](https://github.com/justeattakeaway/pie/commit/6d7157b6a2fb54f8136427c76220e5beaeee8575), [`e68681a`](https://github.com/justeattakeaway/pie/commit/e68681ac1b3242e88240a65446164522d048c26e)]:
  - @justeattakeaway/pie-webc-core@2.0.0

## 0.0.4

### Patch Changes

- Updated dependencies [[`afd39cf`](https://github.com/justeattakeaway/pie/commit/afd39cfd880f10fad92c2e2d8023dace26110229), [`afd39cf`](https://github.com/justeattakeaway/pie/commit/afd39cfd880f10fad92c2e2d8023dace26110229)]:
  - @justeattakeaway/pie-webc-core@1.1.0

## 0.0.3

### Patch Changes

- [Fixed] display props for web components top level element ([#2403](https://github.com/justeattakeaway/pie/pull/2403)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.0.2

### Patch Changes

- Updated dependencies [[`8866307`](https://github.com/justeattakeaway/pie/commit/8866307deed67e698088e731bb87e5e6db45f0e3)]:
  - @justeattakeaway/pie-webc-core@1.0.0

## 0.0.1

### Patch Changes

- Updated dependencies [[`07b8fca`](https://github.com/justeattakeaway/pie/commit/07b8fca26662f794e8e5f6137b1ee7c7f755f6b0)]:
  - @justeattakeaway/pie-webc-core@0.26.0
