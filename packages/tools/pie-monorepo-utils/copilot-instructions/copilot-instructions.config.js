/**
 * Configures which GitHub Copilot path-specific instructions files are generated
 * from canonical docs. Add an entry here to generate instructions for another
 * part of the codebase.
 *
 * Each entry:
 *   source  - repo-relative path to the canonical markdown doc
 *   heading - heading whose section is extracted (omit to use the whole file)
 *   output  - repo-relative path to the generated *.instructions.md file
 *   applyTo - glob the instructions apply to (Copilot frontmatter)
 *   title   - H1 for the generated file
 *   intro   - one-line lead under the title
 */
module.exports = [
    {
        source: 'apps/pie-docs/AUTHORING_GUIDE.md',
        heading: '## Conventions and quality rules',
        output: '.github/instructions/pie-docs-authoring.instructions.md',
        applyTo: 'apps/pie-docs/**',
        title: 'PIE docs authoring review',
        intro: 'When reviewing changes under `apps/pie-docs/`, apply the conventions below and flag any violation.',
    },
];
