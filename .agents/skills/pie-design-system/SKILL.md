---
name: pie-design-system
description: Usage guidelines for the PIE design system by Just Eat Takeaway. Use when building, modifying, debugging any user-facing web UI, referencing @justeattakeaway/pie-* packages or when the user asks for a UI that should follow JET/PIE design standards.
---

## Bootstrap (IMPORTANT do this first, every time)

> **Paths note:** All paths in this skill are relative to this skill's own directory unless stated otherwise.
>
> **Guides note:** `guides/` holds whatever docs the consumer's installed package versions ship, so its contents vary between projects. Treat a listing of `guides/` as the list of what is actually available rather than assuming a guide named in this skill is present. Where one is missing, fall back to `tokens/tokensMetadata.json` and the component docs, and do not guess at utility class names.

1. Check whether `.versions` exists.
2. **If missing** → check the core packages are installed. If any are missing, stop and ask the user to install them rather than installing anything yourself. Then run `scripts/fetch-references.mjs` with the consumer project as the working directory, since it reads their installed packages.
3. **If present** → compare each entry in `.versions` against the installed version of that package, and re-run the script if any differ.

`.versions` keys are fully scoped package names, so read the scope from the key rather than assuming it:

```json
{
  "@justeattakeaway/pie-webc": "...",
  "@justeattakeaway/pie-css": "...",
  "@justeattakeaway/pie-icons-webc": "...",
  "@justeat/pie-design-tokens": "..."
}
```

Only the first three need installing directly; design tokens arrive as a dependency of `pie-css`.

The script writes into this skill's own directory, so a globally installed skill holds one shared set of references — a mismatch at step 3 means they belong to a different project.

## Answer the question

Use the table below to find the right section. Where the request spans multiple areas (e.g., "add a button with an icon"), read all relevant sections before responding.

| User wants… | Section |
|---|---|
| Set up PIE in a new project | First-time PIE integration |
| Review PIE usage | Review Project |
| Fonts, typography, type scale, font loading | Typography |
| Component API / props / slots / usage or Building UI | Looking up components |
| Whether a component exists, or is ready/safe to use | Component status |
| Framework setup, or which usage example to show (React, Next, Vue, Nuxt, none) | Framework and integration guides |
| Prop types, TypeScript imports | Framework and integration guides |
| Import or find an icon | Icons |
| Component events and interactions | Events |
| Design tokens (colours, spacing, etc.) | Design tokens |
| Apply spacing with utility classes | Spacing utilities |
| Hide/show elements, screen-reader-only text, CSS utility classes | Utility classes |
| Customise or override a component's look | Customising components |
| A component renders with the wrong/old styling, fails to upgrade, or the console reports a custom element already registered | Component registration and versions |
| Something broken or unexpected | Looking up components → pre-flight #6 |

After writing your response, run through the **pre-flight checklist** before presenting it to the user.

## First-time PIE integration

Only follow these steps if PIE has never been set up in the project (no existing `@justeattakeaway/pie-*` imports):

1. Read `guides/css-setup.md` and apply the base CSS setup.
2. Read `guides/typography.md` and wire up the type scale.
3. Read the integration guide for the project's framework — see **Framework and integration guides**.

## Review Project (for evaluate/review/audit requests)

If the user asks to review/evaluate/audit PIE usage, you **must** read and assess against every one of these sections: Typography, Looking up components, Component status, Component registration and versions, Events, Icons, Design tokens, Customising components.

Do not finalize the response until each one has an explicit pass/fail outcome.

## Typography

Read `guides/typography.md` and `guides/typography-utility-classes.md` for anything touching fonts, the type scale, font loading, or general UI baseline setup.

Always use the typography utility classes from `pie-css` rather than custom font styles or the font tokens directly — they apply PIE's type scale and its responsive adjustments consistently. Verify the guide's implementation is in place, including the `@font-face` declarations and the global CSS definitions.

## Looking up components

When the user asks about a specific component — say `pie-button` — read `components/pie-button.md` and focus on:

- **Properties** — the props the component accepts
- **Slots** — named and default slot content
- **Events** — emitted events and their payloads
- **Usage example** — pick the one matching the consumer project's framework, per **Framework and integration guides** below.
- **CSS Variables / CSS Parts** — available style overrides

Skip the npm badge, Table of Contents, installation section, irrelevant framework examples, and boilerplate ("Questions and Support", "Contributing").

To see what components PIE offers, read `components/component-metadata.json`. It lists every component with its status, and it is the only reliable source for whether a component exists. Do not infer availability from the presence or absence of a `components/<name>.md` file.

Entries are keyed by package name, and each one lists the custom elements that package registers. Some packages register more than one — `pie-list` registers both `pie-list` and `pie-list-item`. To look up a component element, find the entry whose `elements` array contains it.

This file covers components only. Icons live in a separate package and never appear here, so never conclude an `icon-*` element is unavailable from this file — use the **Icons** section instead. An empty `elements` array means the element names could not be determined, so check the component's doc rather than assuming the element is named after the package.

Two files in `guides/` look like component docs and are not: `components-BUTTON.md` and `components-RADIO.md` hold CSS-only styles that make a non-interactive element look like a button or radio. Use them only when that element must not be a control itself, for example inside a card whose parent link handles the click. For any button or radio the user operates, use `components/pie-button.md` or `components/pie-radio.md`.

## Framework and integration guides

Determine the consumer project's framework from their `package.json` dependencies, preferring the meta-framework over the framework it builds on: `next` over `react`, `nuxt` over `vue`. If none are present, treat it as no framework. Use this to pick both the integration guide and which usage example to show — show one framework's example, not several.

Then match it to a guide in `guides/`:

| Detected | Guide |
|---|---|
| `next` | `framework-integration-guides-nextjs-14.md` |
| `nuxt` | `framework-integration-guides-nuxt-3.md` |
| `react` | `framework-integration-guides-react-19.md` |
| `vue` | `framework-integration-guides-vue-3.md` |
| none | `framework-integration-guides-no-framework.md` |

**React wrappers take `className`, not `class`.** `@lit/react` treats `className` as a reserved property and coerces it to the element's `class` attribute, so it reaches the host correctly. Writing `class` in JSX is not the supported form.

The guides are pinned to specific major versions and the consumer may be on a different one. Where no guide matches their installed major version, use the nearest, check its guidance against the project's own config before relying on it, and **say so in your response** — name the guide you used and the version it covers.

For prop and event types, read `guides/typescript-usage.md`. It covers the type imports per framework, the `react` entry point, and where the `type` keyword is required.

## Component status

Before recommending any component, look up its `status` in `components/component-metadata.json`.

PIE supports exactly three statuses. Anything else is not a supported component.

| Status | PIE's definition | Required response |
|---|---|---|
| `stable` | Ready to be used. | Recommend normally. Do not mention status. |
| `beta` | Testing a new major change of a stable component. | Recommend normally. Do not mention status. |
| `alpha` | Preliminary usage; expect changes. | State that it is alpha and that its API may change, and tell the user to confirm with #help-designsystem before building on it. |

Treat all three of these as "not a supported PIE component": a component absent from `component-metadata.json`, an entry whose `status` is not one of the three above, and an entry with no readable doc in `components/`. In each case tell the user it is not available and point them to #help-designsystem on Slack for timelines or to discuss an alternative. Do not recommend it and do not guess at its API.

This applies to components only. Icons are a separate package and are never listed in `component-metadata.json` — see the **Icons** section for how to check those.

Some component docs tell you to use another component — a form control pointing at a separate label component, for example. Look up the status of every component you end up using, not just the one the user asked about. A stable component's docs can tell you to use an alpha one.

When the only PIE-supported way to build something is an `alpha` component, use it and caveat it. Do not hand-roll a custom alternative to avoid the alpha status — a custom version loses the accessibility, RTL and theming guarantees, which is a worse outcome than a documented API that may change.

## Component registration and versions

Read `guides/component-versions.md` when a component renders with unexpected or outdated styling, does not pick up an upgrade, or the console reports that a custom element name has already been registered. First registration wins, so one duplicate copy on the page puts every instance of that component on the wrong version. Then have the user check:

1. The `v` attribute on the rendered element in devtools, which reports the version actually in use and survives server-side rendering. Compare it against the version their project pins.
2. Their dependency tree for more than one copy, for example `npm ls @justeattakeaway/pie-webc` or `yarn why`. Mixing the `pie-webc` umbrella package with individual component packages, or a shared internal library pinning its own version, both produce duplicates. Micro-frontends are the most common cause, since each bundle can carry its own copy.

Do not suppress a registration error by wrapping the import in a `try`/`catch` or gating it behind `customElements.get(...)` — that leaves the page on whichever version won, which is the actual problem.

## Events

Read `guides/events.md` for PIE's event conventions, which are consistent across every component, then the component's own doc for its event list.

## Icons

Read `guides/pie-icons-webc.md` for icon props and usage patterns. To browse all available icons, list `node_modules/@justeattakeaway/pie-icons-webc/dist/`. Use `dist/`, not `icons/` — `icons/` only exists in a source checkout of the PIE monorepo and is absent from the published package, so it is not there for consumers.

Filenames are PascalCase and the custom element is the kebab-case form: `dist/IconClose.js` registers `<icon-close>`. The React wrapper for the same icon is `dist/react/IconClose.js`.

Only use icons that exist in the package — inventing icon names causes broken imports at runtime.

## Utility classes

**A utility class family exists in the installed `pie-css` only if its guide is present in `guides/`.** The guides ship alongside the classes they document, so a missing guide means the installed version does not have those classes. In that case apply the design token in CSS instead, and never emit a `u-*` or `is-*` class name you cannot verify against a present guide — an unknown class fails silently exactly as an unknown custom property does.

| Guide | Covers |
|---|---|
| `guides/utility-classes.md` | hiding/showing elements, screen-reader-only text, general display utilities (`is-hidden`, `is-visuallyHidden`) |
| `guides/spacing-utility-classes.md` | margins from the PIE spacing scale |
| `guides/rwd-utility-classes.md` | responsive show/hide utilities |
| `guides/typography-utility-classes.md` | the type scale (`u-font-*`) |

## Spacing utilities

Where `guides/spacing-utility-classes.md` is present, read it, and prefer its utility classes over a custom margin declaration only when:
- The user only wants to apply a PIE spacing token as a margin on an element and no other styling
- The margin should be fixed across all breakpoints

Classes follow the pattern `u-margin-{direction}--{scale}`, where directions use logical property names: `blockStart`, `blockEnd`, `inlineStart`, `inlineEnd`, `inline`, `block`.

Where that guide is absent, apply the spacing token directly instead, for example `margin-block-end: var(--dt-spacing-d)`.

## Design tokens

Design tokens are CSS custom properties following the pattern `var(--dt-<category>-<name>)`, for example `var(--dt-color-interactive-brand)`, `var(--dt-spacing-d)` or `var(--dt-radius-rounded-a)`. Two categories route elsewhere: for spacing as a margin see **Spacing utilities**, and for anything font-related use the typography utility classes rather than the font tokens, see **Typography**.

When the user asks about tokens:

1. Read `guides/design-tokens-cookbook.md` for usage patterns and best practices.
2. Look up available tokens in `tokens/tokensMetadata.json`. It is nested, not a flat map: top-level category (`color`, `spacing`, `radius`, `font`, `elevation`, `motion`, `blur`, `breakpoint`, `gradient`), then `global` or `alias`. Colour has an extra theme level under `alias` — `color.alias.default` and `color.alias.dark` — while every other category lists its tokens directly under `alias`. Keys are unprefixed and the CSS variable is `--dt-<category>-<key>`, so `color.alias.default.content-subdued` is `var(--dt-color-content-subdued)`, `spacing.alias.d` is `var(--dt-spacing-d)`, and `radius.alias.rounded-c` is `var(--dt-radius-rounded-c)`. Use `tokens/tokenCategories.json` to understand how categories are organised.
3. **Only use alias tokens, never global tokens.** Global tokens (e.g., `--dt-color-orange-30`) are raw values meant for internal token definitions — they aren't semantic and will break when themes change. Always recommend alias tokens (e.g., `--dt-color-interactive-brand`) which carry meaning and adapt across themes.
4. Only recommend token names that appear in the metadata. Inventing token names causes silent failures — CSS treats unknown custom properties as empty.

## Customising components

When a user wants to override or customise a component's appearance, follow this order:

1. **Check existing props first** — read the component's doc in `components/` and look for built-in variants, sizes, or visual props that already achieve what the user wants.
2. **Use CSS variables and parts** — if props don't cover it, check the component's own **CSS Variables** and **CSS Parts** sections in its doc. Then read `guides/customising-components.md` and `guides/css-variables.md` for general customisation patterns.
3. **Reach out to the team** — if neither props nor the supported CSS mechanisms solve the problem, advise the user to raise it in #help-designsystem on Slack. The team can confirm whether support is planned or green-light a custom override, which the consumer then owns across upgrades.

Until the team approves an override, restyle only through props, CSS variables and CSS parts. Styles reaching into a component's shadow DOM break on upgrades and bypass the design system's accessibility and theming guarantees.

## Pre-flight checklist

Before presenting code to the user, every item must pass:

1. **PIE component used?** — Always check `components/` first. PIE components ship with accessibility, RTL, and design tokens baked in — going custom loses all of that.

2. **API matches the docs?** — Every prop, slot, and event must exist in the component's doc. If it's undocumented, don't use it. If the API doesn't cover the use case, point the user to #help-designsystem on Slack.

3. **Status checked and caveated?** — Every component in the response, including ones prescribed by another component's doc, must have its `status` looked up in `components/component-metadata.json` and handled per the **Component status** table.

4. **Guide version mismatch disclosed?** — If you drew on a `guides/framework-integration-guides-*.md` that does not match the project's installed major version, the response must name that guide and the version it covers. If your response does not say it, add it before presenting.

5. **Tokens are real alias tokens?** — Every `--dt-*` variable must exist in `tokens/tokensMetadata.json` under `alias`, not `global`. Don't invent token names — CSS silently ignores them.

6. **No bug workarounds?** — If a component misbehaves, advise the user to report it rather than patching around it. Workarounds hide bugs from the team that can fix them for everyone.

7. **Typography guide applied when relevant?** — If the request touches fonts/typography or is a PIE audit, `guides/typography.md` must be read and checked.
