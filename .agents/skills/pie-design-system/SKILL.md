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

## Prerequisites

The consumer project MUST have `@justeattakeaway/pie-webc` installed as a dependency.

## Quick Start

If `@justeattakeaway/pie-webc` is not installed:

1. Read `guides/getting-started.md` and install the core PIE packages using the consumer project's dependency manager.
2. Set up base CSS styles — read `guides/css-setup.md`.
3. Set up typography — read `guides/typography.md`.
4. If using a framework, read the relevant `guides/framework-integration-guides-*.md` file.

## Setup

1. Run the fetch script to populate `components/` and `guides/`:

    ```bash
    node .agents/skills/pie-design-system/scripts/fetch-references.js
    ```

2. Before using the skill, check `.agents/skills/pie-design-system/.versions` matches the installed package versions. If any differ, re-run the fetch script.

## Usage

- For setup and integration questions, follow the **Quick Start** section above.
- To answer questions about a specific component or how to use it, read its file from `components/` (e.g., `components/pie-button.md`).
- For events and how PIE components handle them, read `guides/events.md`. Check each component's docs for its supported events.
- For customising component styles, read `guides/customising-components.md` and `guides/css-variables.md`. Check each component's docs for available variables and parts.
- For icons, read `guides/pie-icons-webc.md`. To see all available icons, list the files in `node_modules/@justeattakeaway/pie-icons-webc/icons/`. Never invent or create new icons; only use what is available in the package.
- To list all available components, list the files in `components/`.
- For general topics (design tokens, typescript usage or typography), read the relevant file from `guides/`.

## Key guidelines

- **Always prefer PIE web components** — if what you need is available in PIE, use it. Do not recreate or substitute with custom implementations to maintain Just Eat Takeaway.com UI consistency.
- **Component usage** — When a PIE component documents a prop or a pattern, ALWAYS use that exact approach documented in its `components/` file and NEVER suggest an alternative implementation.
- **Debugging** — when a component doesn't work as expected, look into its source code to understand the issue. Then instruct the consumer to report the bug to the PIE Design System team rather than working around it.