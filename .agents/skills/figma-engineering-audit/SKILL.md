---
name: figma-engineering-audit
description: Performs an engineering audit of a component design in Figma using the Figma MCP tools, then produces a JET-branded PDF report (via the jet-report skill). Use when the user shares a Figma link (or file key / node ID) and asks for an engineering review, audit, or assessment of a component design — for example 'audit this Figma component', 'engineering review of this design', 'is this design ready to build', 'review this component before implementation'. Covers interactivity and behaviour, accessibility, SSR compatibility, performance, ambiguity, edge cases, structure, prop surface, tokens and implementability findings.
---

# Figma Engineering Audit

Audit a component design in Figma from an engineering perspective and deliver the findings as a JET-branded PDF report.

## When to use

Trigger this skill when the user provides a Figma link and wants an engineering-angle review of a component design — feasibility, readiness for build, consistency with the design system, or implementation risk. Do not use it for implementing the design (that is `figma-design-to-code`).

## Workflow

### Step 1: Parse the Figma URL

Extract the `fileKey` and `nodeId` from the link. If the user supplied a bare file key or node ID instead, use it directly.

| URL form | Extraction |
|---|---|
| `figma.com/design/<fileKey>/<file-name>?node-id=1234-5678` | `fileKey` from the path; `nodeId` is `1234:5678` (URL hyphen becomes colon) |
| `figma.com/design/<fileKey>/<file-name>` | `fileKey` only; audit the file root or ask which component |
| `figma.com/file/<fileKey>/...` (legacy) | same as above |

If no `nodeId` is given and the file root is not the component, ask the user which component to audit rather than guessing.

### Step 2: Fetch the design data

This skill depends on the Figma MCP tools (`figma_get_figma_data`, `figma_download_figma_images`). If they are not available in the session, stop and tell the user to connect the Figma MCP server — do not audit from the URL or screenshot alone, as that produces invented findings.

Call the `figma_get_figma_data` MCP tool with the `fileKey` and `nodeId`. Only pass `depth` if the first response is too large to reason about; otherwise take the full node tree. For component sets, correlate the top-level component with its variants — a variant-level view is required for the prop-surface audit.

If a response is flagged as sparse, fetch the flagged child nodes in one parallel batch of `figma_get_figma_data` calls.

### Step 3: Collect visual evidence

Call `figma_download_figma_images` to download a PNG of the component (and of each significant variant). Save these to `reports/figma-assets/` so they can be embedded in the PDF. Keep the downloaded file paths for the report step.

### Step 4: Audit the design

Assess every area below. For each area, record findings with:

- `severity`: `high` (blocks implementation or breaks correctness/accessibility), `medium` (rework or inconsistency likely), `low` (polish or preference)
- `area`: one of the ten below
- `evidence`: the Figma node ID and, where useful, a downloaded image
- `recommendation`: the concrete change for the designer to make, in plain design language (see Report writing style in Step 5)

The first four areas are where designs most often fall short of engineering needs — give them the most attention. "Not specified in the design" is a finding in itself, not a pass: if the design does not answer a question the implementation must ask, the audit says so.

Ambiguity and clarity and Edge cases and boundaries are cross-cutting lenses — apply them while auditing every other area. Distinguish the three so findings do not collide: an absent specification under normal conditions is reported in the relevant area (Interactivity, Accessibility, …); a specification that is present but unclear, contradictory or open to multiple defensible interpretations is reported under Ambiguity and clarity; a question the design cannot answer under extreme content, sizing or state is reported under Edge cases and boundaries.

#### Interactivity and behaviour

- Is interactivity specified or merely implied? What happens on click, hover, press, long-press — and is that stated anywhere in the design? For an interactive component, an absent interaction spec is a high-severity finding.
- Keyboard behaviour: tab order, enter/space activation, escape behaviour for dismissible content, focus trap and release for overlays.
- Focus management: where focus moves on open/close or transition, whether focus is always visible, whether it can be lost.
- State behaviour: is a disabled component still focusable? What triggers transitions between loading, error and empty states?
- Async behaviour: optimistic updates vs waiting states, and protection against double-submit.

#### Accessibility

- Do text and background combinations meet WCAG contrast (4.5:1 body text, 3:1 large text and UI boundaries)?
- Are interactive targets at least 44×44 px with visible focus states designed?
- Is any meaning conveyed by colour alone? If so, flag it.
- Are dynamic updates (toasts, counters, validation feedback) designed with screen reader announcements in mind — a live region or equivalent?
- Do animated designs offer a reduced-motion alternative?
- For input-like components: are labels, hint text and error messages positioned to map onto label and described-by associations in code?
- Is content order meaningful when navigated linearly?

#### SSR compatibility

PIE components ship into Nuxt and Next.js apps, so designs must survive server rendering before hydration. Check the design decisions that make that hard:

- Pre-hydration state: is there a designed state for what renders before JavaScript loads? A design that shows nothing until hydration, for anything above the fold, is a high-severity finding.
- Client-only content: content that depends on user data, geolocation, dates or A/B tests — is a server-renderable default or skeleton designed, or does the page flash empty?
- Viewport-dependent variants: if the design differs by viewport, is there a server-renderable default, or does it rely on client-side detection with none?
- Hydration mismatch risk: anything whose rendered output would differ between server and client (time-sensitive text, randomised content, truncation decided client-side).
- Layout shift: are dimensions reserved for late-loading fonts, images and icons so content does not jump on load?

#### Performance

Rare, but real. Flag these only where the design hints at them — do not force findings onto every audit.

- Asset weight: oversized raster images where SVG would do, unoptimised images, Lottie or video, oversized blurs and shadows.
- Deeply nested instances and redrawn-copy sprawl, which bloat the coded DOM.
- Designs implying heavy runtime work: complex sticky or scroll-driven behaviour, very large lists with no pagination or virtualisation note.

#### Ambiguity and clarity

A cross-cutting lens: could two engineers read this design and build different things? Flag anything an implementer would have to guess, clarify or reverse-engineer. Scope these checks to the Figma file itself.

- Contradictions: values or behaviour that disagree between variants, between light and dark sections, or between in-file annotations (changelog, spec or structure notes) and the component they describe.
- Magic numbers: values with no visible rationale and no token mapping (arbitrary heights, paddings or radii). An engineer cannot tell whether they are tokens, derived values or arbitrary choices.
- Same concept, different values: elements playing the same role styled or sized differently across variants (inconsistent radii, paddings or nested component generations), which force the implementer to pick one.
- Undocumented intent: elements whose purpose is not discoverable from the design (spacers with no explanation, states with no trigger). Phrase the unknown as a question for the designer (see Report writing style in Step 5) — never guess an interpretation.
- Misleading names and markers: names or grouping that contradict the content's status (for example a deprecated marker on live masters, or variant names that do not match consumer-facing concepts).
- Unresolvable references: annotations linking to resources an implementer cannot open or that have moved.
- Open interpretations: specs permitting more than one defensible implementation where the choice materially affects behaviour (trigger thresholds, dismissibility rules, boundary conditions).
- Implicit platform knowledge: behaviour carried only by designer convention (safe-area insets, platform gestures) that different engineers will implement differently.

Severity: high when the ambiguity risks building the wrong thing (a contradiction between authoritative in-file sources, or materially different defensible implementations); medium when it forces guesswork likely to cause rework; low for naming and hygiene confusion. Where an ambiguity resolves to unspecified interaction or accessibility behaviour, cross-reference it to those areas so it feeds the verdict rule.

#### Edge cases and boundaries

A cross-cutting stress lens: what happens when content, sizing or state is at its extremes? Every question the design cannot answer is a finding — probe for each of these rather than assuming a default.

- Text extremes: long titles, labels and CTAs (truncation, wrapping, minimum/maximum lines, ellipsis behaviour), very short strings, and multi-line text inside fixed-height rows.
- Empty and zero states: empty content slot, zero items, missing images or icons.
- Content extremes: very long lists (scroll, pagination or virtualisation), and content that grows or shrinks after render.
- Sizing boundaries: smallest and largest supported viewports, minimum/maximum component height, content shorter than the container, and content taller than any cap — does it scroll or overflow? Fixed-height areas holding variable content (for example a fixed image area with wide images).
- Threshold boundaries: the exact boundary of any threshold (a scrolled-state trigger at the threshold, a height cap on short viewports).
- State-boundary interactions: opening while another overlay is open, rapid open/close, and open → scroll → close sequences.
- Localisation: longer strings in other locales, RTL mirroring, and date or number formats.

Severity: high where the edge case is common or breaks layout or correctness (an unhandled overflow that breaks the layout); medium where it forces guesswork likely to cause rework; low where the case is rare.

#### Structure and reuse

- Is the design built as a component with variants, or one-off layers? One-off layers cannot express a real component API.
- Are nested elements instances of existing components (including PIE components such as icons and buttons) or redrawn copies? Redrawn copies drift.
- Is auto-layout used correctly (sizing, padding, gaps) so the layout survives real content?

#### Prop surface

- Do the Figma variant properties map to the API a coded component would need (variants → props, booleans → show/hide, text → slots or props)?
- Are there missing but implementable states — hover, focus-visible, active, disabled, loading, error?
- Edge-case and stress variants (long text, empty, overflow, RTL) are interrogated under Edge cases and boundaries below — do not duplicate them here.

#### Tokens

- Are colours, spacing, radii and type styles applied via Figma variables/styles, or hardcoded values? Hardcoded hex and px values break theming.
- For every token or variable the design references, verify the name exists in `packages/tools/pie-design-tokens/metadata/tokensMetadata.json`. Invented token names cause silent failures in code.

#### Implementability

- Does the layout behaviour map to achievable CSS (responsive constraints, min/max widths, text truncation)?
- Are sizing modes correct: hug for intrinsic content, fill for responsive, fixed only where justified?
- Is anything in the design only achievable with fixed positioning or brittle hacks? Flag it explicitly.

### Step 5: Generate the PDF report

The deliverable is a **JET-branded PDF** — there is no markdown report. **Load the `jet-report` skill before writing any PDF code**; if it is not available in the session, stop and tell the user to install it rather than writing bespoke, unbranded PDF code. Follow the jet-report conventions: A4 portrait `ReportPDF`, Inter fonts, JET Orange cover and closing bookends, warm Mozzarella content pages, no logo, and the 5-30-300 structure.

Per the jet-report "Script & PDF Reuse" workflow, first check `reports/` for an existing `figma_engineering_audit.py` and adapt it if present; otherwise create it. Save the reusable generation script to `reports/figma_engineering_audit.py` and write the PDF to `reports/figma_engineering_audit_<YYYY-MM-DD>.pdf`, printing the absolute path.

**Page budget.** The report targets **around 5 pages** (hard cap 6), laid out as:

1. **Cover page** (`COVER_PAGE`, JET Orange bookend) — component name, file, version, audit date, and the readiness verdict plus severity counts as hero stats
2. **Executive summary + coverage + recommendations** — key takeaway, a short summary, the compact coverage table, then the compact numbered recommendations
3. **Findings table** (`DATA_TABLE`) — every finding, one line each, sorted high → medium → low, with ID, severity, finding, area and node ID
4. **High-severity detail + questions** — detail sections for **high-severity findings only** (1–2 sentence description + recommendation), at most **two small evidence images** (high findings, side by side), then the "Questions for the designer" block
5. **Closing page** (`CLOSING_PAGE`, JET Orange bookend)

Hold the budget: medium and low findings appear in the table only — no per-finding detail sections. Descriptions are 1–2 sentences, high findings only. Share pages where content fits; if the high findings still overflow, compress descriptions further — never exceed 6 pages.

**Report writing style.** Apply to every summary, finding, question and recommendation:

- **Direct and succinct.** State the fact, the evidence (node ID) and the action. No preamble, hedging or filler.
- **No speculation or assumptions.** Every statement must be verifiable from the Figma data, the file's own annotations, or a cited source (for example pie.design). Never guess an interpretation.
- **Unknowns become questions.** Where the design does not answer something the implementation needs, raise it as a question for the designer in the "Questions for the designer" block, tagged with its finding ID (for example: "Q (L1): Is the 16px spacer in the empty footer a safe-area inset or just spacing?"). Because medium and low findings are table-only, the consolidated block — not an inline note — is where their questions live.
- **Recommendations are written for designers.** Describe what to change, draw or annotate in Figma — states, variants, layers, colours — in plain language. Do not use engineering jargon in recommendations (ARIA roles, focus traps, hydration, WCAG clause numbers, prop names). Where the underlying need is technical, describe the user-facing behaviour instead ("show what happens when the user presses Escape") and leave the implementation to engineering. Findings may name a standard briefly; recommendations stay clean.

Evidence images downloaded in Step 3 are embedded in the PDF (at most two, high-severity findings only); skip any that cannot be read and warn on stdout. The PNGs in `reports/figma-assets/` remain the full evidence record.

## Pre-flight checklist

Before presenting the report, every item must pass:

1. **Every finding cites a node ID.** A finding without a node ID cannot be verified or acted on.
2. **Token names verified.** Any token name mentioned in the report appears in `packages/tools/pie-design-tokens/metadata/tokensMetadata.json`.
3. **All ten audit areas covered** — Interactivity and behaviour, Accessibility, SSR compatibility, Performance, Ambiguity and clarity, Edge cases and boundaries, Structure and reuse, Prop surface, Tokens, Implementability — each with an explicit pass or at least one finding. Do not silently skip an area.
4. **Evidence images** — all downloaded to `reports/figma-assets/`; at most two small ones embedded in the PDF, high-severity findings only.
5. **Report delivered** — the PDF written to `reports/figma_engineering_audit_<date>.pdf` with the absolute path reported to the user.
6. **Interactive components got the engineering lens** — keyboard, focus and state behaviour were checked even where the design says nothing about them, and unspecified behaviour is reported as a finding rather than assumed.
7. **Dynamic components got the SSR lens** — pre-hydration and client-only-content states were checked for anything above the fold or dependent on data the server cannot know.
8. **Ambiguity lens applied** — for each audited area the auditor asked "could two engineers build different things from this?", and in-file annotation text was cross-checked against the component for contradictions.
9. **Edge cases interrogated** — the auditor stressed the design with extreme content, sizing and state boundaries, and recorded every question the design could not answer.
10. **Page budget respected** — the PDF is around 5 pages (6 maximum), with medium and low findings appearing in the table only.
11. **Writing style applied** — findings are succinct, contain no speculation, unknowns are raised as questions for the designer, and every recommendation is written in plain design language.
