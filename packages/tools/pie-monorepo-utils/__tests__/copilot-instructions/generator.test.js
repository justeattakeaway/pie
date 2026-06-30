import {
    describe, it, expect, afterEach,
} from 'vitest';
import fs from 'fs';
import path from 'path';
import os from 'os';

import CopilotInstructionsGenerator from '../../copilot-instructions/generator';

const guideMarkdown = [
    '# Authoring guide',
    '',
    '## Creating pages',
    '',
    'How to create a page.',
    '',
    '## Conventions and quality rules',
    '',
    'Follow these rules.',
    '',
    '### Frontmatter',
    '',
    '- A rule about frontmatter.',
    '',
    '## Appendix',
    '',
    'Not part of the rules.',
    '',
].join('\n');

function makeGenerator () {
    return new CopilotInstructionsGenerator({ fs, path, console });
}

const tempDirs = [];

function createTempRoot () {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'copilot-instructions-test-'));
    tempDirs.push(root);
    return root;
}

afterEach(() => {
    while (tempDirs.length) {
        fs.rmSync(tempDirs.pop(), { recursive: true, force: true });
    }
});

describe('extractSection', () => {
    it('extracts a heading section up to the next same-level heading', () => {
        const section = makeGenerator().extractSection(guideMarkdown, '## Conventions and quality rules');

        expect(section).toContain('## Conventions and quality rules');
        expect(section).toContain('### Frontmatter');
        expect(section).toContain('- A rule about frontmatter.');
        // Stops before the next h2 and excludes earlier sections.
        expect(section).not.toContain('## Appendix');
        expect(section).not.toContain('How to create a page.');
    });

    it('returns the whole document when no heading is given', () => {
        const section = makeGenerator().extractSection(guideMarkdown, undefined);
        expect(section).toBe(guideMarkdown.trim());
    });

    it('throws when the heading is missing', () => {
        expect(() => makeGenerator().extractSection(guideMarkdown, '## Nope'))
            .toThrow(/Could not find heading/);
    });
});

describe('buildFile', () => {
    it('wraps the section with applyTo frontmatter and a do-not-edit notice', () => {
        const target = {
            source: 'apps/pie-docs/AUTHORING_GUIDE.md',
            heading: '## Conventions and quality rules',
            applyTo: 'apps/pie-docs/**',
            title: 'PIE docs authoring review',
            intro: 'Apply the conventions below.',
        };

        const file = makeGenerator().buildFile(target, '## Conventions and quality rules\n\nFollow these rules.');

        expect(file).toMatch(/^---\napplyTo: "apps\/pie-docs\/\*\*"\n---/);
        expect(file).toContain('GENERATED FILE - DO NOT EDIT');
        expect(file).toContain('# PIE docs authoring review');
        expect(file).toContain('Apply the conventions below.');
        expect(file).toContain('Follow these rules.');
    });
});

describe('generate', () => {
    it('writes a generated instructions file for each target', () => {
        const root = createTempRoot();
        fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
        fs.writeFileSync(path.join(root, 'docs', 'guide.md'), guideMarkdown);

        const targets = [{
            source: 'docs/guide.md',
            heading: '## Conventions and quality rules',
            output: '.github/instructions/test.instructions.md',
            applyTo: 'docs/**',
            title: 'Test review',
            intro: 'Apply the conventions below.',
        }];

        makeGenerator().generate(targets, root);

        const written = fs.readFileSync(path.join(root, '.github/instructions/test.instructions.md'), 'utf8');
        expect(written).toContain('applyTo: "docs/**"');
        expect(written).toContain('# Test review');
        expect(written).toContain('- A rule about frontmatter.');
        expect(written).not.toContain('## Appendix');
    });
});
