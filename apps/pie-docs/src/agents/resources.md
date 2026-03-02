---
eleventyNavigation:
    key: Agentic AI Resources
    parent: Agents
    order: 1
title: Agentic AI Resources
description: This page provides different resources for working with agentic AIs.
---
## Skills

Skills can be used to extend the functionality of an AI agent and allow it to perform different tasks, with special knowledge of a specific domain.

Feel free to contact us on the `#help-designsystem` channel in you have any questions about how to use these skills or if you want to request a new skill to be added to the list.

{% notification {
  type: "information",
  message: "DO NOT use the `find-skills` skill to search and install skills. Instead, follow the instructions below for each skill."
} %}

Here are some of the skills provided by the PIE Design System team that can be used with agentic AIs:

### Snacks migration skills

These are skills that are specifically designed to help with the migration of Snacks components to the PIE Design System components and patterns:

- `snacks-flex-migration-assistant`
- `snacks-util-migration-assistant`

Use the interactive CLI to choose and install these skills:

`npx skills add git@github.com:Web/snacks-design-system.git`

### Utility skills

These are skills that are not directly related to PIE but can be useful in a variety of contexts.

#### skill-reviewer

Rules and best-practice guidelines for reviewing an agent skill's SKILL.md, focused on required frontmatter validation and qualitative content review, with a checklist-style report output.

Instalation:

`npx skills add git@github.com:justeattakeaway/pie.git --skill skill-reviewer`

## Artifacts

Coming soon.
