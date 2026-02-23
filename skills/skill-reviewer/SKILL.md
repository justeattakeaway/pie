---
name: skill-reviewer
description: Rules and best-practice guidelines for reviewing a PIE agent skill's SKILL.md, focused on required frontmatter validation and qualitative content review, with a checklist-style report output. Use it when asked to review a SKILL.md file.
---

## Purpose
Use this skill to review a target skill's `SKILL.md` in the PIE repository. It performs **hard validation** of required frontmatter rules and a **best-practice review** of the SKILL content. It outputs a **checklist-style report** suitable for pasting into a PR comment.

## When to use
- You're creating or modifying a skill and want a consistent quality review.
- You want to validate naming/description conventions and catch issues early.

## How to invoke (manual)
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
- Do **not** create or modify files unless the user explicitly asks.
- Only **high-severity** items may be marked `fail`. All other issues should be `can improve`.

## Review procedure

### 1 - Locate and load the target
1. Confirm `targetSkillMdPath` points to a file named exactly `SKILL.md`.
2. Read the file content.

If the input is invalid, produce a report with a **single high-severity `fail`** explaining what was wrong and how to fix the invocation.

### 2 - Parse frontmatter
A valid skill must start with YAML frontmatter delimited by `---` at the top of the file.

- Extract the frontmatter block (from first line `---` to the next line `---`).
- Parse it as YAML.

Frontmatter requirements (high severity):
- Required fields:
  - `name`
  - `description`
- Both fields must be scalar strings.

If frontmatter is missing or YAML parsing fails, mark the frontmatter item as `fail (high)` and skip the remaining hard checks (you can still provide best-practice `can improve` notes if helpful).

### 3 - Hard validations (high severity)
These are the only checks that should lead to `fail`.

#### 3.1 - `name` rules
Validate `name` from frontmatter:
- **Matches parent directory name**:
  - Parent directory is the folder containing `SKILL.md`.
  - Example: `skills/foo/SKILL.md` → parent directory is `foo`.
  - Rule: `frontmatter.name === parentDirectoryName`.
- **Unique in repository**:
  - Search all `**/SKILL.md` files in this repository for frontmatter `name` values.
  - Exclude the target file itself from the duplicate set.
  - Rule: the same `name` must not appear in more than one SKILL.
  - If duplicates exist, list the conflicting file paths.
- **Max length**: 64 characters.
- **Allowed characters**: only lowercase letters, numbers, and hyphens.
  - Regex: `^[a-z0-9-]+$`
- **Must not contain XML tags**:
  - Fail if it includes `<` or `>` or matches a tag-like pattern such as `<tag>`.
- **Must not contain reserved words**: `anthropic`, `claude` (case-insensitive substring match).

#### 3.2 - `description` rules
Validate `description` from frontmatter:
- After trimming whitespace it must be non-empty
- Max length: 1024 characters.
- Must not contain XML tags:
  - Fail if it includes `<` or `>` or matches a tag-like pattern such as `<tag>`.

### 4 - Best-practice review (medium/low severity)
These checks should be `pass` or `can improve` only.

#### 4.1 - Core quality
- Description is specific and includes key domain terms.
- Description states both what the skill does and when to use it.
- SKILL body uses progressive disclosure for complex topics.
- Markdown heading hierarchy is logical (no big jumps like `#` → `####`; headings are ordered and consistent).
- Terminology is consistent throughout (same term used for same concept).
- Workflows (if present) have clear, ordered steps.
- Examples (if present) are concrete (realistic inputs/outputs) rather than purely abstract.

#### 4.2 - Size and structure
- SKILL.md body is under 400 lines (encourage keeping SKILL succinct).
- Long explanations, extensive examples, or deep reference material are moved into dedicated supporting files (and SKILL.md links to them briefly).
- File references are one level deep where practical (e.g. `scripts/foo.sh` is ok; avoid deep chains like `scripts/tools/foo.sh` unless justified).

#### 4.3 - Code and scripts guidance
- Prefer scripts stored as separate files (e.g., `scripts/`) rather than embedded in SKILL.md.
- No unexplained "magic constants" in instructions or code snippets; values are named or justified.
- Error handling guidance is present where the skill involves operations that can fail.
- Any required packages/tools are listed and there is a quick verification step.
- No Windows-style paths (e.g., `C:\foo`, backslashes) in examples/instructions.
- Validation/verification steps exist for critical operations.

#### 4.4 - What not to include (low severity)
A skill should only contain essential files that directly support its functionality. Encourage avoiding extraneous docs like: `README.md`, `INSTALLATION_GUIDE.md`, `QUICK_REFERENCE.md`, `CHANGELOG.md`.

## Report format (copy/paste friendly)

Produce the report in this exact general structure:

### Skill review: <targetSkillMdPath>

#### Summary
- Result: <PASS | NEEDS_CHANGES>
- Fail (high): <count>
- Can improve: <count>

#### Checklist
- [<pass|can improve|fail>] (<high|medium|low>) <check title>
  - Evidence: <short, specific observation>
  - Suggestion: <only for can improve / fail>

When citing evidence, prefer short excerpts (one line) and/or precise file paths; avoid dumping large chunks of the SKILL content.

### Notes (optional)
- List optional follow-ups or questions for the author.

### Scoring guidance
- If any **high severity** item is `fail`, the overall Result must be `NEEDS_CHANGES`.
- Otherwise the overall Result should be `PASS`.

# Checklist items to emit
Emit at least the following items (you may add more best-practice items, but do not add new high-severity rules beyond the hard validations listed below):

## Hard validations (high)
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

## Best practices (low/medium - never fail)
- SKILL body is under 400 lines. (low)
- Examples, if present, are concrete. (low)
- Workflows, if present, have ordered steps. (low)
- File references are one level deep where practical. (low)
- Description explains what + when to use. (medium)
- Description is specific and includes key terms. (medium)
- Heading hierarchy is logical. (medium)
- Additional details live in supporting files. (medium)
- Prefer separate scripts over embedded long code blocks. (medium)
- Validation/verification steps exist for critical operations. (medium)
- Avoid extraneous docs (README/INSTALLATION_GUIDE/etc). (medium)
- No Windows-style paths in examples. (medium)
