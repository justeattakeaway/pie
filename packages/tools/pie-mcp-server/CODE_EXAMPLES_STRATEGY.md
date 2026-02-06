# Code Examples Strategy for PIE MCP Server

## Summary

This document explains how the PIE MCP Server provides accurate, production-ready code examples to AI assistants. Examples are extracted from two sources at build time: **Storybook stories** (via AST parsing) and **pie-aperture** (via GitHub fetching).

---

## Approach: Build-Time Extraction

The MCP server uses **build-time extraction** rather than runtime file reading or external API calls. All example data is pre-generated into `generated/pie-data.json` and loaded into memory when the server starts.

**Why build-time extraction?**
- Fast runtime performance (no I/O during queries)
- Examples are version-coupled to the library
- Reliable and deterministic
- Works in any execution environment (no file system or network access needed at runtime)

---

## Source 1: Storybook Stories (AST Parsing)

### Why Storybook Stories?

Storybook stories are the single source of truth for component usage because:

1. **Actively maintained** — updated by the team maintaining the components
2. **Battle-tested** — used in production documentation (webc.pie.design)
3. **Real-world usage** — show actual patterns, not theoretical examples
4. **Comprehensive** — cover basic usage, variants, and complex patterns
5. **Version-coupled** — stories change when APIs change

### Extraction Pipeline

```
┌─────────────────────────────────────────────────────┐
│  apps/pie-storybook/stories/pie-button.stories.ts   │
│                                                     │
│  TypeScript source with:                            │
│  - Lit html`` templates                             │
│  - Storybook createStory() exports                  │
│  - PIE component imports                            │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│  scripts/lib/storybook-parser.js                    │
│                                                     │
│  AST parsing via TypeScript Compiler API:           │
│  - ts.createSourceFile() (no compilation needed)    │
│  - Walk AST for template functions                  │
│  - Extract html`` tagged template literals          │
│  - Extract story variant exports                    │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│  scripts/lib/template-cleaner.js                    │
│                                                     │
│  Clean Lit-specific syntax:                         │
│  - Remove directives (ifDefined, nothing, etc.)     │
│  - Simplify bindings (.prop → prop)                 │
│  - Clean event handlers (@click → @click)           │
│  - Normalize whitespace                             │
│  - Fallback: extract main <pie-*> tag if too complex│
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│  generated/pie-data.json                            │
│                                                     │
│  Per-component examples object:                     │
│  { basic, variants, patterns, imports }             │
└─────────────────────────────────────────────────────┘
```

### What Gets Extracted

From a story file like `apps/pie-storybook/stories/pie-button.stories.ts`:

**Imports** — all `@justeattakeaway/pie-*` imports:
```typescript
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-icons-webc/dist/IconSearch.js';
```

**Basic template** — the main `Template` or `BaseStoryTemplate` function:
```html
<pie-button variant="primary">Click me</pie-button>
```

**Patterns** — named template functions showing complex use cases:
```json
{
  "name": "Form",
  "description": "Complete form integration example",
  "code": "<form><pie-button type=\"submit\">Submit</pie-button></form>"
}
```

**Variants** — exported story constants with prop overrides:
```json
[
  { "name": "Primary", "props": { "variant": "primary" } },
  { "name": "Loading", "props": { "isLoading": "true" } }
]
```

### Template Patterns Handled

The AST parser handles these template patterns:

| Pattern | Example |
|---------|---------|
| Arrow with direct return | `const Template = (props) => html\`...\`` |
| Arrow with destructuring | `const Template = ({ size }) => html\`...\`` |
| Arrow with block body | `const Template = (props) => { return html\`...\`; }` |
| Function declaration | `function Template(props) { return html\`...\`; }` |
| Type assertion | `(props) => html\`...\` as TemplateResult` |

### Lit Syntax Cleaning

| Lit Syntax | Cleaned To |
|-----------|------------|
| `${ifDefined(x)}` | `${x}` |
| `${nothing}` | _(removed)_ |
| `${x ? html\`...\` : nothing}` | inner html content |
| `?disabled="${x}"` | `disabled` |
| `.prop="${x}"` | `prop="${x}"` |
| `@click="${fn}"` | `@click="handleEvent"` |
| `${sanitizeAndRenderHTML(slot)}` | `<!-- slot content -->` |
| `${unsafeHTML(...)}` | `<!-- dynamic content -->` |
| `${repeat(...)}` | `<!-- repeated items -->` |
| `${classMap(...)}` | _(removed)_ |
| `${styleMap(...)}` | _(removed)_ |

### Complexity Fallback

If a template still has >5 interpolations or complex function calls after cleaning, the cleaner extracts just the main `<pie-*>` component tag (including its children) as a simpler fallback.

### Limits

To prevent data bloat:
- Variants: max 10 per component
- Patterns: max 5 per component

---

## Source 2: Pie-Aperture Framework Examples

### What is pie-aperture?

[pie-aperture](https://github.com/justeattakeaway/pie-aperture) is a repository containing real-world framework integrations of PIE components. It includes working applications in multiple frameworks, each deployed to live URLs.

### How Fetching Works

The `scripts/lib/aperture-fetcher.js` module fetches source code from GitHub at build time:

1. For each component, construct the expected file path per framework
2. Fetch from `raw.githubusercontent.com` with a 5-second timeout
3. Process results with `Promise.allSettled()` (batched in groups of 5)
4. Store code + URLs, or mark as `available: false` on 404/error

### Framework Paths

| Framework | Path Template | Live Demo |
|-----------|--------------|-----------|
| **Next.js 14** | `nextjs-app-v14/src/app/components/{name}/{name}.tsx` | `https://aperture-nextjs-v14.pie.design/components/{name}` |
| **Next.js 15** | `nextjs-app-v15/src/app/components/{name}/{name}.tsx` | `https://aperture-nextjs-v15.pie.design/components/{name}` |
| **Nuxt** | `nuxt-app/pages/components/{name}.vue` | `https://aperture-nuxt.pie.design/components/{name}` |
| **Vanilla** | `vanilla-app/components/{name}.html` | `https://aperture-vanilla.pie.design/components/{name}` |

### Data Structure

Each component gets a `frameworkExamples` object:

```json
{
  "repository": "https://github.com/justeattakeaway/pie-aperture",
  "nextjsV14": {
    "available": true,
    "code": "'use client';\nimport { PieButton } from ...",
    "sourceUrl": "https://github.com/justeattakeaway/pie-aperture/tree/main/nextjs-app-v14/src/app/components/button",
    "liveUrl": "https://aperture-nextjs-v14.pie.design/components/button"
  },
  "nuxt": {
    "available": true,
    "code": "<template>\n  <pie-button ...",
    "sourceUrl": "https://github.com/justeattakeaway/pie-aperture/blob/main/nuxt-app/pages/components/button.vue",
    "liveUrl": "https://aperture-nuxt.pie.design/components/button"
  }
}
```

### Error Handling

- **404 (component not in aperture):** `available: false`, `code: null`, URLs still included
- **Network timeout:** `available: false`, `code: null`, error message stored
- **Build failure prevention:** errors never fail the build, only mark frameworks as unavailable

### Offline Mode

Set `SKIP_APERTURE_FETCH=true` to skip all network requests:

```bash
SKIP_APERTURE_FETCH=true yarn generate:data
```

This produces valid data with all frameworks marked `available: false` and `code: null`, while retaining source/live URLs.

---

## How Examples Are Served

The `get_component_examples` tool in `src/index.ts` combines both sources into a single markdown response:

```markdown
# pie-button - Examples

## Imports
```ts
@justeattakeaway/pie-webc/components/button.js
```

## Basic Usage
```html
<pie-button variant="primary">Click me</pie-button>
```

## Variants
**Primary:** `variant="primary"`
**Loading:** `isLoading="true"`

## Patterns
### Form
Complete form integration example
```html
<form><pie-button type="submit">Submit</pie-button></form>
```

## Framework Examples
### Next.js v14
```tsx
'use client';
import { PieButton } from ...
```
- [Source](https://github.com/...)
- [Live demo](https://aperture-nextjs-v14.pie.design/...)

## Links
- [Storybook](https://webc.pie.design/?path=/story/components-button)
- [Documentation](https://pie.design/components/button/code/)
- [Framework examples repo](https://github.com/justeattakeaway/pie-aperture)
```

The `type` parameter allows filtering to just `basic`, `patterns`, or `variants`.

---

## Verification

To verify the examples pipeline works correctly:

```bash
# 1. Rebuild the server
cd packages/tools/pie-mcp-server
yarn build

# 2. Check the generated data
node -e "const d=require('./generated/pie-data.json'); console.log(Object.keys(d.components).length, 'components');"

# 3. Test with MCP Inspector
yarn dev

# 4. In the inspector, call get_component_examples:
#    { "component": "pie-button", "type": "all" }
#    Verify: basic template, variants, framework code blocks, source/live links

# 5. Test offline mode
SKIP_APERTURE_FETCH=true yarn generate:data
# Verify: completes without errors, framework examples show available: false
```
