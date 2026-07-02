---
applyTo: "apps/pie-docs/**"
---

<!-- GENERATED FILE - DO NOT EDIT.
     Source of truth: apps/pie-docs/AUTHORING_GUIDE.md ("Conventions and quality rules").
     Regenerate with: yarn generate:copilot-instructions -->

# PIE docs authoring review

When reviewing changes under `apps/pie-docs/`, apply the conventions below and flag any violation.

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
- When linking to an asset in Google Drive or Figma, check its sharing settings first and set the visibility appropriately before adding the link.
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
