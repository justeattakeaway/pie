import {
    describe, it, expect, vi, beforeEach,
} from 'vitest';
import readmeStructure from '../../dangerjs-checks/readme-structure.js';

const validReadme = [
    'https://img.shields.io/npm/v/@justeattakeaway/pie-button',
    '## Table of Contents',
    '## Documentation',
    '### Properties',
    '### Slots',
    '### Events',
    '### CSS Variables',
    '## Usage Examples',
    '## Questions and Support',
    '## Contributing',
].join('\n');

function makeDanger ({ created = [], modified = [], diffs = {} }) {
    return {
        git: {
            // eslint-disable-next-line camelcase
            created_files: created,
            // eslint-disable-next-line camelcase
            modified_files: modified,
            diffForFile: vi.fn((path) => Promise.resolve({ after: diffs[path] ?? '' })),
        },
    };
}

describe('readme-structure check', () => {
    let fail;

    beforeEach(() => {
        fail = vi.fn();
    });

    it('ignores non-component files', async () => {
        const danger = makeDanger({ created: ['src/foo.js'] });
        await readmeStructure({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(danger.git.diffForFile).not.toHaveBeenCalled();
    });

    it('excludes pie-webc README', async () => {
        const danger = makeDanger({ created: ['packages/components/pie-webc/README.md'] });
        await readmeStructure({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(danger.git.diffForFile).not.toHaveBeenCalled();
    });

    it('excludes pie-webc-core README', async () => {
        const danger = makeDanger({ created: ['packages/components/pie-webc-core/README.md'] });
        await readmeStructure({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(danger.git.diffForFile).not.toHaveBeenCalled();
    });

    it('passes on a complete README', async () => {
        const path = 'packages/components/pie-button/README.md';
        const danger = makeDanger({
            created: [path],
            diffs: { [path]: validReadme },
        });
        await readmeStructure({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).not.toHaveBeenCalled();
    });

    it('reports each missing section', async () => {
        const path = 'packages/components/pie-button/README.md';
        const danger = makeDanger({
            modified: [path],
            diffs: { [path]: '# README with nothing' },
        });
        await readmeStructure({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).toHaveBeenCalledOnce();
        const [[msg]] = fail.mock.calls;
        expect(msg).toContain('Missing npm badge');
        expect(msg).toContain('## Table of Contents');
        expect(msg).toContain('## Documentation');
        expect(msg).toContain('### Properties');
        expect(msg).toContain('### Slots');
        expect(msg).toContain('### Events');
        expect(msg).toContain('### CSS Variables');
        expect(msg).toContain('## Usage Examples');
        expect(msg).toContain('## Questions and Support');
        expect(msg).toContain('## Contributing');
    });
});
