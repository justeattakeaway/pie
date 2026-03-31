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
  type: "warning",
  message: "DO NOT use the `find-skills` skill to search and install skills. Instead, follow the instructions below for each skill."
} %}

Here are some of the skills provided by the PIE Design System team that can be used with agentic AIs:

### PIE Design System skill

This skill provides AI agents with deep knowledge of PIE component APIs, design tokens, typography, icons, and integration guides to help build apps that adhere to PIE standards.

**Installation:**

`npx skills add git@github.com:justeattakeaway/pie.git --skill pie-design-system`

{% notification {
  type: "warning",
  message: "We recommend installing the PIE Design System skill at 'Project', rather than 'Global' level. Doing this means that the skill won't have to regenerate PIE documentation resources, when switching between applications locally."
} %}

After installing, ask your AI agent to "set up the PIE design system skill". This runs a bootstrap script that fetches documentation matching your installed PIE package versions.

### Snacks migration skill

This skill is specifically designed to help with the migration of Snacks components to the PIE Design System components and patterns.

Our team is actively working on this skill, updating it to cover more use cases and scenarios. If you have any specific questions or need assistance with the migration process, please don't hesitate to reach out to us on the `#help-designsystem` channel.

Please follow the instructions in the Snacks repo skill folder README file to use this skill.

### Utility skills

These are skills that are not directly related to PIE but can be useful in a variety of contexts.

#### skill-reviewer

Rules and best-practice guidelines for reviewing an agent skill's `SKILL.md`, focused on required frontmatter validation and qualitative content review, with a checklist-style report output.

Installation:

`npx skills add git@github.com:justeattakeaway/pie.git --skill skill-reviewer`

## Prototyping resources

### Figma Make template

The PIE Figma Make template provides a streamlined, low-code environment for initial explorations. Check out the template [here](https://www.figma.com/make/talqHe1wBFCwCdxUk5KfNf/Figma-Make-%7C-Web-Template?t=UVohg5HTOn6SvgGG-6).

### Other prototyping tools

Our `guidelines.md` file is specifically focused on how to leverage PIE assets and logic within advanced prototyping tools and custom code environments. These instructions ensure that your AI-driven components maintain visual and functional parity with the PIE Design System. You can download the latest version of our guidelines on our [help channel on Slack](https://justeattakeaway.enterprise.slack.com/archives/CQSA72D2T).

## Artifacts

Coming soon.
