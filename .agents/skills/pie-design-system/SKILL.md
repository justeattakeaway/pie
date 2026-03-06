---
name: pie-design-system
description: Provides usage guidelines for the PIE design system. Use when implementing, debugging, or integrating PIE web components in a project.
---

## Purpose

Provides AI agents access to PIE design system documentation such as web components, design tokens, icons, and integration guides — so they can help users build with PIE correctly.

## When to use

- Setting up a new project with PIE design system.
- Implementing or modifying UI that uses PIE design system packages.
- Answering questions about PIE component APIs, usage patterns, integration or anything related to PIE design system.

## Prerequisites

The consumer project MUST have `@justeattakeaway/pie-webc` installed as a dependency.

## Quick Start (ONLY if prerequisites are not met)

If `@justeattakeaway/pie-webc` is not installed, read `guides/quick-start.md` and follow the steps.

## Setup

1. Run the fetch script to populate `references/` with docs from installed PIE packages:

    ```bash
    node .agents/skills/pie-design-system/scripts/fetch-references.js
    ```

2. Verify the docs were fetched:

    ```bash
    ls .agents/skills/pie-design-system/references/
    ```

    You should see files like `pie-button.md`, `pie-modal.md`, `pie-css.md`, `pie-icons-webc.md`, and a `.versions` file.

    Note: The `references/` folder is created by the script and won't exist until setup is run.

## Version check

Before using the docs, verify they match the installed `@justeattakeaway/pie-webc` version:

1. Read `references/.versions` — this is a JSON file containing the versions of `pie-webc`, `pie-css`, and `pie-icons-webc` the docs were fetched from.
2. Compare them to the installed versions in `node_modules/@justeattakeaway/<package>/package.json`.
3. If any differ, re-run the fetch script to update the docs.

## Usage

- For setup and integration questions, read the relevant file from `guides/` (e.g., `guides/quick-start.md`, `guides/nextjs.md`, `guides/nuxt.md`).
- To answer questions about a specific component or how to use it, read its file from `references/` (e.g., `references/pie-button.md`).
- To list all available components, list the files in `references/`.

### Examples

- "How do I set up PIE?" → Read `guides/quick-start.md`.
- "How do I use the PIE button?" → Read `references/pie-button.md`.
- "What props does pie-modal accept?" → Read `references/pie-modal.md`.
- "What components are available?" → List files in `references/`.

## Key guidelines

- **Always prefer PIE components** — if what you need is available in PIE, use it. Do not recreate or substitute with custom implementations to maintain Just Eat Takeaway.com UI consistency.
- **Component usage** — When a PIE component documents a prop or a pattern, ALWAYS use that exact approach documented in its `references/` file and NEVER suggest an alternative implementation.
- **Events** — PIE components emit custom events named `pie-<component>-<event>` (e.g. `pie-modal-leading-action-click`). Some components also emit native events like `input` or `change`. Check the component's docs for its supported events. In React, use the `/react/` entry point and pass callbacks as props (e.g. `onPieModalLeadingActionClick`).
- **Customising components** — to override a component's styles, use the CSS custom properties (variables) or CSS `::part()` selectors exposed by the component. Check the component's docs for available variables and parts.
- **Debugging** — when a component doesn't work as expected, look into its source code to understand the issue. Then instruct the consumer to report the bug to the PIE Design System team rather than working around it.
- **Icons** — always consult `@justeattakeaway/pie-icons-webc` for the list of available icons. To see all available icons, list the files in `node_modules/@justeattakeaway/pie-icons-webc/icons/`. Never invent or create new icons; only use what is available in the package.