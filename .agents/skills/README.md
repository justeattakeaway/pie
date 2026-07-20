# PIE Agent Skills

Skills extend AI agents with domain knowledge specific to this repo. They are installed per-project using the `npx skills` CLI.

## Available skills

### pie-design-system

Usage guidelines for the PIE design system. Use when building or modifying any user-facing web UI that references `@justeattakeaway/pie-*` packages, or when the UI should follow JET/PIE design standards.

```
npx skills add git@github.com:justeattakeaway/pie.git --skill pie-design-system
```

> Install at **project** level rather than global. The skill fetches documentation matched to your locally installed PIE package versions, so a global install would need to regenerate resources whenever you switch projects.

After installing, ask your agent to "set up the PIE design system skill" to run the bootstrap step.

---

### pie-docs-authoring

Authoring conventions for the PIE docs site (`apps/pie-docs`). Use when creating or editing pages, navigation, tabbed content, index pages, drafts, frontmatter, shortcodes, or checking tone and link quality.

```
npx skills add git@github.com:justeattakeaway/pie.git --skill pie-docs-authoring
```

---

### skill-reviewer

Reviews a `SKILL.md` file against required frontmatter rules and best-practice guidelines. Outputs a checklist-style report suitable for a PR comment.

```
npx skills add git@github.com:justeattakeaway/pie.git --skill skill-reviewer
```

---

### aperture-props

Verifies a newly added or changed PIE component prop in Aperture. After `/test-aperture` has run on the PIE PR, it pulls the matching Aperture branch, temporarily adds prop examples across all 4 framework apps (Nuxt, Next.js v14, Next.js v15, Vanilla), starts the dev servers, prompts visual verification, then reverts the scratch edits on confirmation. Nothing is committed.

```
npx skills add git@github.com:justeattakeaway/pie.git --skill aperture-props
```
