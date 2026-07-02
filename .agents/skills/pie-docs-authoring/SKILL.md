---
name: pie-docs-authoring
description: Use when creating or editing content on the PIE docs site (apps/pie-docs), including pages, navigation sections, tabbed pages (components, patterns, foundations), index pages and drafts; eleventyNavigation frontmatter, .json page data, or shortcodes (contentPageImage, usage, resourceTable, card, link, list, notification, youtubeVideo, indexPageDisplay); or pie-docs tone, voice, accessibility and link quality.
---

# Authoring PIE docs

The single source of truth for all pie-docs authoring conventions is **`apps/pie-docs/AUTHORING_GUIDE.md`**. Read it before writing or reviewing any content. Do not duplicate or paraphrase its rules here. Follow the guide directly so guidance never drifts. The same file backs the GitHub Copilot review instructions.

## Workflow

1. **Read `apps/pie-docs/AUTHORING_GUIDE.md`** in full. It is the authority on every rule below.
2. **Identify the task** and jump to the matching section of the guide:

   | Task | Guide section |
   |---|---|
   | Add a top-level nav section | Creating a new navigation section |
   | Add a component, pattern or foundation page | Creating tabbed pages |
   | Add landing content to a nav item | Adding index pages |
   | Mark a page or section not ready for production | Drafts |
   | Any wording, frontmatter, shortcode or link question | Conventions and quality rules |

3. **Author or edit** the content following the guide's examples and rules exactly.
4. **Work through "Before you publish"** below before presenting the work.

## Before you publish

The guide's "Conventions and quality rules" section **is** the checklist. Verify the
content against it directly. Don't rely on this skill to restate the rules.

Two things the guide can't do for you, so do them yourself.

**1. Actively check the rules that fail _silently_.** These produce no build error, so
reading the rule is not enough. You have to confirm each one:

- Nav `parent` / `key` and `.json` `navKey` actually match (guide, "Frontmatter correctness").
- `ogImage`, image `src`, and index card files actually exist on disk (guide, "Asset references").
- `indexPageDisplay` `itemKey` matches the section key exactly (guide, "Shortcode usage").

**2. Build it and inspect the output.** Run the production build with the Turborepo
commands in `AGENTS.md`, and don't `cd` into the app. The build catches the _loud_ failures,
such as a missing icon that throws or bad frontmatter. The generated HTML in
`apps/pie-docs/dist/` confirms the silent ones didn't bite, with no dev server or browser
needed:

    yarn build --filter=@justeattakeaway/pie-docs   # must finish with no errors

Then in `apps/pie-docs/dist/`:

- The new page rendered, and was not dropped as a draft: its `index.html` exists at the
  expected path, for example `dist/example/introduction/index.html`.
- It joined the nav, so `parent` / `key` matched: the new entry appears in the nav markup of
  the built pages. A silent mismatch leaves it absent.

**3. If you added or removed a page, regenerate the route snapshot.** A stale
`expected-routes.snapshot.json` fails the navigation tests:

    yarn test:generate-routes --filter=@justeattakeaway/pie-docs

## Notes

- All paths above are relative to the repo root.
- If anything in this skill conflicts with the guide, the guide wins. Update the skill to match.
