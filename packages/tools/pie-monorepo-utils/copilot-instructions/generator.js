/**
 * Generates GitHub Copilot path-specific instructions files from canonical
 * markdown docs, so the instructions never drift from the source.
 *
 * GitHub Copilot code review cannot follow links or import files, so the rules
 * it enforces must be inlined in its own `*.instructions.md` file. Rather than
 * maintain those copies by hand, this generator extracts them from the docs
 * that are already the source of truth.
 *
 * Adding instructions for a new part of the codebase is a single config entry
 * in `copilot-instructions.config.js` - no new script required.
 */
const findMonorepoRoot = require('../utils/find-monorepo-root');

class CopilotInstructionsGenerator {
    constructor ({ fs, path, console }) {
        this.fs = fs;
        this.path = path;
        this.console = console;
    }

    // Extracts a single section from a markdown document, identified by its heading.
    // Returns everything from the heading down to the next heading of the same or
    // shallower level (or the end of the document). With no heading, returns the
    // whole document.
    extractSection (markdown, heading) {
        if (!heading) {
            return markdown.trim();
        }

        const lines = markdown.split('\n');
        const startIdx = lines.findIndex((line) => line.trim() === heading.trim());

        if (startIdx === -1) {
            throw new Error(`Could not find heading "${heading}" in the source document.`);
        }

        const headingLevel = (heading.match(/^#+/) || [''])[0].length;
        let endIdx = lines.length;

        for (let i = startIdx + 1; i < lines.length; i++) {
            const match = lines[i].match(/^(#{1,6})\s/);
            if (match && match[1].length <= headingLevel) {
                endIdx = i;
                break;
            }
        }

        return lines.slice(startIdx, endIdx).join('\n').trim();
    }

    buildFile (target, section) {
        const sourceNote = target.heading
            ? `${target.source} ("${target.heading.replace(/^#+\s*/, '')}")`
            : target.source;

        return `---
applyTo: "${target.applyTo}"
---

<!-- GENERATED FILE - DO NOT EDIT.
     Source of truth: ${sourceNote}.
     Regenerate with: yarn generate:copilot-instructions -->

# ${target.title}

${target.intro}

${section}
`;
    }

    render (target, root) {
        const sourcePath = this.path.resolve(root, target.source);
        const markdown = this.fs.readFileSync(sourcePath, 'utf8');
        const section = this.extractSection(markdown, target.heading);
        return this.buildFile(target, section);
    }

    generate (targets, root = findMonorepoRoot()) {
        targets.forEach((target) => {
            const content = this.render(target, root);

            const outputPath = this.path.resolve(root, target.output);
            this.fs.mkdirSync(this.path.dirname(outputPath), { recursive: true });
            this.fs.writeFileSync(outputPath, content);

            this.console.info(`Wrote ${target.output}`);
        });
    }
}

module.exports = CopilotInstructionsGenerator;
