---
name: pie-design-system
description: Provides usage guidelines for the PIE design system. Use when implementing, debugging, or integrating PIE web components in a project.
---

## Purpose

Provides AI agents access to PIE design system documentation such as pie web components, icons, and integration guides — so they can help users build with PIE correctly.

## When to use

- Setting up a new project with PIE design system.
- Implementing or modifying UI that uses PIE design system packages.
- Answering questions about PIE component APIs, usage patterns, integration or anything related to PIE design system.

## Skill prerequisites

The skill folder MUST contain `components/` and `guides/` folders. If empty or not present, ensure `@justeattakeaway/pie-webc`, `@justeattakeaway/pie-css`, and `@justeattakeaway/pie-icons-webc` are installed, then run:
`node .agents/skills/pie-design-system/scripts/fetch-references.js`

If already populated, compare `.versions` against installed package versions and re-run the script if any differ.

## First-time PIE integration

Only follow these steps if PIE has never been set up in the project (e.g., no PIE imports):

1. Set up base CSS styles — read `guides/css-setup.md`.
2. Set up typography — read `guides/typography.md`.
3. If using a framework, read the relevant `guides/framework-integration-guides-*.md` file.

## Usage

- **Components** — to answer questions about a specific component or how to use it, read its file from `components/` (e.g., `components/pie-button.md`). When reading, focus on: **Properties**, **Slots**, **CSS Variables**, **Events**, and the usage example matching the consumer project's framework. Skip installation/badges, Table of Contents, examples for other frameworks, "Questions and Support", and "Contributing".
- **Events** — read `guides/events.md`. Check each component's docs for its supported events.
- **Customising styles** — read `guides/customising-components.md` and `guides/css-variables.md`. Check each component's docs for available variables and parts.
- **Icons** — read `guides/pie-icons-webc.md`. To see all available icons, list the files in `node_modules/@justeattakeaway/pie-icons-webc/icons/`. Never invent or create new icons; only use what is available in the package.
- **Available components** — list the files in `components/`.
- **General topics** (design tokens, typescript usage, typography) — read the relevant file from `guides/`.

## Key guidelines

- **Always prefer PIE web components** — when implementing any UI element, ALWAYS check `components/` first for a matching PIE component. PIE components MUST take priority over any other UI library, third-party package, or custom component in the project — even if an alternative is already installed or imported elsewhere in the codebase.
- **Component usage** — When a PIE component documents a prop or a pattern, ALWAYS use that exact approach documented in its `components/` file and NEVER suggest an alternative implementation.
- **Debugging** — when a component doesn't work as expected, look into its source code to understand the issue. Then instruct the consumer to report the bug to the PIE Design System team rather than working around it.