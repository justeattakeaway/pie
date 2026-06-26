## 1. Props and Types

- [x] 1.1 Define `AccordionProps` interface in `defs.ts` with all props: `isOpen`, `headingLabel`, `headingLevel`, `secondaryLabel`, `iconSize` (TODO placeholder), `size`, `isEmphasisReduced`, `isDividerEnabled`
- [x] 1.2 Define prop default values and valid string union types (`headingLevel`, `size`, `iconSize`)
- [x] 1.3 Add `AccordionToggleDetail` type for the `pie-accordion-toggle` event detail (`{ isOpen: boolean }`)
- [x] 1.4 Export all types from `defs.ts`

## 2. Dependencies

- [x] 2.1 Add `@justeattakeaway/pie-divider` as a dependency in `package.json`
- [x] 2.2 Add `@justeattakeaway/pie-icons-webc` as a dependency in `package.json`
- [x] 2.3 Import `PieDivider` and register it in `index.ts`
- [x] 2.4 Import `IconChevronUp` from `@justeattakeaway/pie-icons-webc` in `index.ts`

## 3. Component Class

- [x] 3.1 Declare all props as `@property` decorated class members in `PieAccordion`
- [x] 3.2 Declare IDs for heading, button, and panel elements
- [x] 3.3 Implement `_handleTriggerClick` method that dispatches `pie-accordion-toggle` via `dispatchCustomEvent` with `{ isOpen: this.isOpen }`

## 4. Render / Markup

- [x] 4.1 Implement the heading wrapper using `staticHtml` + `unsafeStatic` from `lit/static-html.js` to render the dynamic `headingLevel` element with correct `id`
- [x] 4.2 Render the trigger `<button>` inside the heading with `aria-expanded`, `aria-controls`, and `id` attributes
- [x] 4.3 Render the `<slot name="icon">` inside the button with `part="icon"`
- [x] 4.4 Render `headingLabel` text node inside the button
- [x] 4.5 Conditionally render `secondaryLabel` text below heading text when set
- [x] 4.6 Render `<pie-icon-chevron-up>` with `aria-hidden="true"` at the trailing edge of the button
- [x] 4.7 Render the panel `<div>` with `role="region"`, `aria-labelledby` (button ID), `part="panel"`, and the default `<slot>`
- [x] 4.8 Apply/remove the `hidden` attribute on the panel based on `isOpen`
- [x] 4.9 Conditionally render `<pie-divider>` after the panel when `isDividerEnabled` is `true`

## 5. Styling

- [x] 5.1 Set up container query on the host element in `accordion.scss` for responsive `auto` mode
- [x] 5.2 Implement wide layout styles (default above breakpoint)
- [x] 5.3 Implement narrow layout styles (below breakpoint, or forced via `size="narrow"`)
- [x] 5.4 Add `[size="narrow"]` and `[size="wide"]` host attribute selectors to override container query
- [x] 5.5 Style the trigger button: full-width, flex layout, cursor pointer, background transparent, no default border
- [x] 5.6 Apply heading typography tokens: `--dt-font-heading-s-size--narrow` and `--dt-font-heading-s-line-height--narrow` by default; override with `--dt-font-heading-s-size--wide` and `--dt-font-heading-s-line-height--wide` inside `@media (min-width: $breakpoint-wide)`
- [x] 5.7 Apply reduced typography tokens when `isEmphasisReduced` is `true` (host `[isemphasisreduced]` selector)
- [x] 5.8 Apply secondary label typography tokens (Body Large/Large, 16px, Regular)
- [x] 5.9 Apply chevron rotation: `transform: rotate(180deg)` when `isOpen` is `false`
- [x] 5.10 Implement Default, Hover, Active, and Focus interactive states on the button
- [x] 5.11 Suppress hover styles on touch devices using `@media (hover: none)`
- [x] 5.12 Implement RTL layout: swap icon and chevron using logical CSS properties and `:host-context([dir="rtl"])` or `RtlMixin`-driven class

## 6. Accessibility

- [x] 6.1 Verify that `aria-expanded` toggles correctly with `isOpen` via browser test
- [x] 6.2 Verify that `aria-controls` on the button matches `id` on the panel
- [x] 6.3 Verify the panel has `role="region"` and correct `aria-labelledby`
- [x] 6.4 Verify keyboard: Space and Enter dispatch `pie-accordion-toggle`; Tab moves focus without toggling
- [x] 6.5 Run axe-core accessibility test via the existing accessibility test setup

## 7. Storybook Stories

- [x] 7.1 Create a default story with `headingLabel`, default props, and a paragraph of slotted content
- [x] 7.2 Add stories for `isOpen: true` (expanded) and `isOpen: false` (collapsed)
- [x] 7.3 Add a story for `isEmphasisReduced`
- [x] 7.4 Add a story for `size="narrow"` and `size="wide"`
- [x] 7.5 Add a story with icon slot populated
- [x] 7.6 Add a story with `secondaryLabel`
- [x] 7.7 Add a story with `isDividerEnabled: false`
- [x] 7.8 Add a stacked example (3–4 accordions) showing typical real-world usage
- [x] 7.9 Add an RTL story

## 8. Browser Tests

- [ ] 8.1 Run `test:browsers-setup` for `pie-accordion` before writing tests
- [ ] 8.2 Test: trigger click dispatches `pie-accordion-toggle` with correct `isOpen` detail
- [ ] 8.3 Test: panel visibility toggles with `isOpen` prop
- [ ] 8.4 Test: `aria-expanded` reflects `isOpen`
- [ ] 8.5 Test: Space/Enter key dispatches `pie-accordion-toggle`; Tab does not
- [ ] 8.6 Test: `headingLevel` renders the correct heading element
- [ ] 8.7 Test: `secondaryLabel` renders/hides correctly
- [ ] 8.8 Test: `isDividerEnabled` shows/hides `pie-divider`
- [ ] 8.9 Test: `isEmphasisReduced` applies the correct CSS class/attribute
- [ ] 8.10 Test: RTL — icon and chevron positions are mirrored

## 9. README and Changeset

- [ ] 9.1 Update `README.md` with all required sections: npm badge, Table of Contents, Documentation (Properties, Slots, Events, CSS Variables), Usage Examples, Questions and Support, Contributing
- [ ] 9.2 Run `yarn changeset` and write entry: `[Added] - New pie-accordion component`
- [ ] 9.3 Add `package.json` `pieMetadata` entry
