---
name: skill-reviewer
description: Rules and best-practice guidelines for reviewing a PIE agent skill's SKILL.md, focused on required frontmatter validation and qualitative content review, with a checklist-style report output. Use it when asked to review a SKILL.md file.
---

## Purpose
Use this skill to review a target skill's `SKILL.md` in the PIE repository. It performs **hard validation** of required frontmatter rules and a **best-practices review** of the SKILL content. It outputs a **checklist-style report** suitable for pasting into a PR comment.

## When to use
- You're creating or modifying a skill and want a consistent quality review.
- You want to validate naming/description conventions and catch issues early.

## Example - How to invoke
Ask the agent to run this skill and provide the target path, for example:

- "Use `skill-reviewer` to review `skills/<skill-name>/SKILL.md`."
- "Review `skills/<skill-name>/SKILL.md` and display the checklist report."

## Inputs
- `targetSkillMdPath` (required): repository-relative path to the skill's `SKILL.md` (e.g., `skills/my-skill/SKILL.md`).

## Output
- A checklist-style report.
- Each checklist item has:
  - `status`: `pass` | `can improve` | `fail`
  - `severity`: `high` | `medium` | `low`
  - For any `can improve` or `fail`: a brief, actionable suggestion.

## Scope and constraints
- Only review `SKILL.md` files **within this PIE repository**.
- DO NOT create or modify files unless the user explicitly asks.

## Scoring guidance
- Only **high-severity** items may be marked `fail`. All other issues should be `can improve`.
- If any **high severity** item is `fail`, the overall result must be `NEEDS_CHANGES`.
- Otherwise the overall result should be `PASS`.

### Checklist items to output
Output only the checklist items that are not `pass` (i.e., `can improve` or `fail`), and include the evidence for each item.
Sort items by severity (high → medium → low) and then by type (`fail` before `can improve`).

For example:
- [fail] (high) Frontmatter is missing
  - Evidence: No YAML block at the top of the file.

- [can improve] (medium) Description explains what + when to use
  - Suggestion: Description should also explain when to use the skill, not just what it does.

#### Hard validations checklist (high severity)
- Frontmatter exists and parses as YAML.
- Frontmatter has `name` (string).
- Frontmatter has `description` (string).
- `name` matches parent directory name.
- `name` is unique in `**/SKILL.md`.
- `name` length ≤ 64.
- `name` matches `^[a-z0-9-]+$`.
- `name` contains no XML tags.
- `name` contains no reserved words (`anthropic`, `claude`).
- `description` is non-empty.
- `description` length ≤ 1024.
- `description` contains no XML tags.
- Referenced files (if any) exist and are within the repository, unless they reference node_modules.

#### Best practices checklist (low/medium severity - never fail)
- Description is under 400 lines. (low)
- Examples, if present, are concrete. (low)
- Workflows, if present, have ordered steps. (low)
- File references are one level deep where practical. (low)
- Description explains what + when to use. (medium)
- Description is specific and includes key terms. (medium)
- Heading hierarchy is logical. (medium)
- Description uses progressive disclosure for complex topics, and details live in supporting files. (medium)
- Prefer scripts stored as separate files (e.g., `scripts/`) rather than embedded long code blocks. (medium)
- Validation/verification steps exist for critical operations. (medium)
- Terminology is consistent throughout (same term used for same concept). (medium)
- Avoid extraneous docs (README/INSTALLATION_GUIDE/etc). (medium)
- No Windows-style paths in examples. (medium)
- No unexplained "magic constants" in instructions or code snippets; values are named or justified. (medium)
- Any required packages/tools are listed and there is a quick verification step. (medium)

## Report format (copy/paste friendly)
Produce the report in this exact general structure:

**Skill review**: <skill frontmatter field name>

**Summary**
- Result: <PASS | NEEDS_CHANGES>
- Fail (high): <count>
- Can improve: <count>

**Checklist**
- [<pass|can improve|fail>] (<high|medium|low>) <check title>
  - Evidence: <short, specific observation>
  - Suggestion: <only for can improve / fail>

When citing evidence, prefer short excerpts, avoid dumping large chunks of the SKILL content.
