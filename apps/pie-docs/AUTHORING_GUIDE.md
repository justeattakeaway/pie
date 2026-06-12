# Authoring guide

This guide covers how to create and structure pages on the PIE (Principles for Interfaces and Experiences) docs site, along with the conventions and quality rules all contributors should follow. It is the single source of truth for both the pie-docs-authoring skill and the Copilot review instructions.

## Contents

- [Creating a new navigation section](#creating-a-new-navigation-section)
- [Creating tabbed pages](#creating-tabbed-pages)
- [Adding index pages](#adding-index-pages)
- [Drafts](#drafts)
- [Conventions and quality rules](#conventions-and-quality-rules)

---

## Creating a new navigation section

The example below uses a placeholder section called `Example`. Replace it with your real section name, and make sure that name is not already used as a navigation `key` anywhere else (keys must be unique, or `parent` lookups resolve to the wrong page).

1. **Create a folder** with the name of the section. For example: `/src/example/`.

2. **Create a root markdown file** inside the folder with the same name. For example: `/src/example/example.md`. This stores the metadata Eleventy Navigation uses to add the section to the nav.

```yaml
---
eleventyNavigation:
    key: Example
    title: Example
    parent: Docs
    order: 5
title: Example
---
```

3. **Create a JSON file** with the same name to hold shared page data, such as the Open Graph image and title prefix.

```json
{
  "ogImage": "landing_example.png",
  "metaTitlePrefix": "Example — "
}
```

4. **Add a page to the section** by creating a markdown file. For example: `/src/example/introduction.md`.

```yaml
---
eleventyNavigation:
    key: Introduction
    parent: Example
    order: 1
title: Introduction
description: A short summary of what this page covers, used for search results and social cards.
---

## Overview

Content goes here.
```

5. **Add a navigation icon** in `src/_includes/nav.njk`:

```njk
{% set navigationIcons = {
    Accessibility: 'user-highlight',
    'All about PIE': 'pie',
    designers: 'bulb-lightning',
    Foundations: 'foundations',
    Components: 'components',
    Support: 'help-circle',
    engineers: 'engineers',
    Patterns: 'layers',
    Agents: 'robot',
    Example: 'star'
} %}
```

The icon name must match a real icon in `@justeattakeaway/pie-icons`. `pieIconsSvg` throws `Could not find icon of name: <name>` for an unknown icon, and because the nav renders on every page, a wrong name fails the whole build. Confirm the icon exists before using it.

---

## Creating tabbed pages

Use tabbed pages when a topic needs separate sections for overview, design guidance, and code, for example a component or pattern.

The example below uses a placeholder topic called `Example topic` inside the `Foundations` section. Replace it with your real topic name, and make sure that name is not already used as a navigation `key` anywhere else.

1. **Create a folder** inside the relevant section. For example: `/src/foundations/example-topic/`.

2. **Create a root markdown file** with the same name. This holds the navigation metadata but does not render its own page.

```yaml
---
eleventyNavigation:
    key: Example topic
    parent: Foundations
    url: /foundations/example-topic/
    order: 5
permalink: false
---
```

3. **Create a JSON file** with the same name. The `navKey` groups the tab pages together on a single page.

```json
{
  "title": "Example topic",
  "navKey": "Example topic",
  "description": "A short summary of what this topic covers."
}
```

Pages that share the same `navKey` are grouped together as tabs.

4. **Create the default tab page**. This is typically `overview.md`. Give it a `permalink` so it becomes the landing URL for the tabbed page.

```yaml
---
eleventyNavigation:
    key: Overview
    parent: Example topic
    order: 1
permalink: foundations/example-topic/
---

## Overview

Content goes here.
```

5. **Create additional tabs** as separate markdown files. Omit `permalink` to use the path Eleventy generates automatically, for example `/foundations/example-topic/guidance/`.

```yaml
---
eleventyNavigation:
    key: Guidance
    parent: Example topic
    order: 2
---

## Guidance

Content goes here.
```

---

## Adding index pages

An index page adds landing content to one of the main navigation items such as Foundations or Components. Without one, clicking a nav item navigates to the first child page instead.

To enable an index page, add `hasIndexPage: true` to the section's root markdown file:

```yaml
---
eleventyNavigation:
    key: Foundations
    parent: Docs
    order: 2
    hasIndexPage: true
---
```

### Rendering the index page cards

Use the `indexPageDisplay` shortcode to automatically render a card for each child navigation item:

```njk
{% indexPageDisplay {
    collection: collections.all,
    itemKey: "Foundations",
    excludedElements: ['Token categories']
} %}
```

- `collection`: pass `collections.all`, the Eleventy object used by the navigation plugin
- `itemKey`: the section name to render cards for
- `excludedElements`: items to hide from the index

Add index card images to `assets/img/index/<section-name>/`. A mobile variant is picked up automatically when available. See the JSDoc in the `indexPageDisplay` shortcode for image naming conventions.

---

## Drafts

Mark a page as a draft when it is not ready for production. Drafts build in development mode but are excluded from production builds.

Add `draft: true` to the page frontmatter:

```yaml
---
title: Haptic feedback
description: How PIE uses haptic feedback on mobile.
draft: true
---
```

To put an entire section in draft mode, add a JSON file to the section folder:

```json
{
  "draft": true
}
```

This applies `draft: true` to every page in the section.

---

## Conventions and quality rules

Follow these rules when authoring or reviewing any pie-docs content.

### Frontmatter correctness

- `eleventyNavigation.parent` must match the parent page's `key` exactly. Case and spacing matter, because mismatches silently break navigation with no error.
- `permalink` should only be set on the default tab page of a tabbed group (typically `overview.md`). Setting it on other tabs causes routing conflicts.
- `navKey` in `.json` files must match the `eleventyNavigation.key` of the parent page exactly. This is required for tab grouping to work.
- `permalink` values have no leading slash, for example `foundations/elevation/` not `/foundations/elevation/`.
- `order` values should make sense relative to sibling pages in the same section.

### Asset references

- Image `src` paths in `contentPageImage` and `card` shortcodes must resolve to real files under `assets/img/`.
- New navigation sections require an `ogImage` value pointing to a file that exists in `assets/img/social/`. It is easy to add the frontmatter and forget the actual image file.
- Index page card images must exist under `assets/img/index/<section-name>/`.

### Shortcode usage

Use the built-in shortcodes rather than raw HTML so pages stay consistent. Common ones and their rules:

- `contentPageImage` requires an `alt` attribute on every call. Eleventy will not error if it is missing, but content without alt text fails accessibility.
- `usage` (the Do and Don't shortcode) requires `do` and `dont`, each with a `type` and `items`. When `type` is `image`, every item needs an `alt` value.
- `resourceTable` requires a `componentName` attribute.
- `card` linking to an external URL must include `shouldOpenInNewTab: true`.
- `link` requires both a `link` URL and an `ariaLabel` for every entry. It throws if the URL is not a valid http or https string.
- `list` requires a `type` and `items`. When `type` is `icon`, an `iconName` is also required. It throws on an unrecognised type.
- `notification` requires a `type` (information, error, warning, or positive) and a `message`.
- `youtubeVideo` requires a `videoId`. It throws if the id is missing.
- `indexPageDisplay` requires an `itemKey` that matches the section's `key` exactly, including casing and spaces. Any `key` listed in `excludedElements` must match exactly too. Mismatches silently render the wrong cards or none.

### Content completeness

- New component pages must follow the full tab structure (Overview, Web, Code). Partial pages must have `draft: true`.
- New top-level navigation sections must have a corresponding icon entry in `src/_includes/nav.njk`.
- A page or section with `hasIndexPage: true` must have index content. Enabling it without content makes the page 404.

### Route snapshot

- Adding or removing a page changes the site's routes, so `test/snapshots/expected-routes.snapshot.json` must be updated in the same change. Regenerate it with `yarn test:generate-routes --filter=@justeattakeaway/pie-docs`. A stale snapshot fails the navigation unit, system, and visual tests.

### Draft discipline

- Remove `draft: true` before a page is published to production, both from page frontmatter and from any section-level `.json` file that sets it for the whole folder.

### Link quality

- Links to other pages on the docs site must use relative paths, not full URLs. For example, use `/components/notification/web/#full-width` not `https://pie.design/components/notification/web/#full-width`.
- Do not include Slack channel links in content. Reference the channel name instead.
- Do not link to any JET (Just Eat Takeaway) intranet or internal-only URL.
- When linking to an asset in Google Drive, check its sharing settings first and set the visibility appropriately before adding the link.
- Do not link to Storybook paths that may have changed or been removed.

### Tone and voice

Always:
- Use plain English.
- Use UK English (colour not color, organise not organize).
- Use sentence case for headings, so only the first word and proper nouns are capitalised.
- Keep paragraphs short.
- Use lists where they make content easier to scan.
- Explain acronyms on first use, for example "Hypertext Markup Language (HTML)".
- Use hyphens only to join compound words, such as "full-width" or "left-aligned".

Never:
- Write dense, multi-sentence paragraphs.
- Use academic or formal phrasing.
- Leave acronyms or jargon unexplained.
- Use em dashes. Use a comma, full stop, or rephrase instead.
- Use a spaced hyphen ( - ) or en dash (–) as a substitute for an em dash. Rephrase the sentence instead.
- Use ampersands (&) unless they are part of a proper name.
