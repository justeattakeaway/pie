import {
    describe, it, expect, vi, beforeEach,
} from 'vitest';
import changesetFormat from '../../dangerjs-checks/changeset-format.js';

function makeDanger({ createdFiles = [], diffs = {} } = {}) {
    return {
        git: {
            created_files: createdFiles,
            diffForFile: vi.fn((path) => Promise.resolve({ diff: diffs[path] ?? '' })),
        },
    };
}

describe('changeset-format check', () => {
    let fail;

    beforeEach(() => {
        fail = vi.fn();
    });

    it('ignores non-changeset files', async () => {
        const danger = makeDanger({ createdFiles: ['src/foo.js'] });
        await changesetFormat({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: true, isDependabotPR: true },
        });
        expect(danger.git.diffForFile).not.toHaveBeenCalled();
        expect(fail).not.toHaveBeenCalled();
    });

    it('ignores .changeset/pre.json', async () => {
        const danger = makeDanger({ createdFiles: ['.changeset/pre.json'] });
        await changesetFormat({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: true, isDependabotPR: true },
        });
        expect(danger.git.diffForFile).not.toHaveBeenCalled();
    });

    it('only validates for dependabot PRs', async () => {
        const danger = makeDanger({
            createdFiles: ['.changeset/abc.md'],
            diffs: { '.changeset/abc.md': '+ no categories here' },
        });
        await changesetFormat({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).not.toHaveBeenCalled();
    });

    it('fails when dependabot changeset has no category', async () => {
        const danger = makeDanger({
            createdFiles: ['.changeset/abc.md'],
            diffs: { '.changeset/abc.md': '+ Some line with no brackets' },
        });
        await changesetFormat({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: true, isDependabotPR: true },
        });
        expect(fail).toHaveBeenCalledOnce();
        expect(fail.mock.calls[0][0]).toContain("doesn't include a category");
    });

    it('fails when dependabot changeset category is invalid', async () => {
        const danger = makeDanger({
            createdFiles: ['.changeset/abc.md'],
            diffs: { '.changeset/abc.md': '+ [Unknown] - Bumped thing' },
        });
        await changesetFormat({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: true, isDependabotPR: true },
        });
        expect(fail).toHaveBeenCalled();
        expect(fail.mock.calls[0][0]).toContain('invalid category');
    });

    it('passes for well-formed dependabot changeset', async () => {
        const danger = makeDanger({
            createdFiles: ['.changeset/abc.md'],
            diffs: { '.changeset/abc.md': '+ [Changed] - Bumped dep to 1.2.3' },
        });
        await changesetFormat({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: true, isDependabotPR: true },
        });
        expect(fail).not.toHaveBeenCalled();
    });

    it('fails on malformed `[Category] - description` line', async () => {
        const danger = makeDanger({
            createdFiles: ['.changeset/abc.md'],
            diffs: { '.changeset/abc.md': '+ [Changed]no dash no space' },
        });
        await changesetFormat({
            danger,
            fail,
            pr: {},
            flags: { isAutomationPR: true, isDependabotPR: true },
        });
        expect(fail).toHaveBeenCalled();
        expect(fail.mock.calls[0][0]).toContain('should be in the format');
    });
});
