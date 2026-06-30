import {
    describe, it, expect, vi, beforeEach, afterEach,
} from 'vitest';
import fs from 'fs';
import path from 'path';
import os from 'os';

import copilotInstructionsDrift from '../../dangerjs-checks/copilot-instructions-drift.js';
import CopilotInstructionsGenerator from '../../copilot-instructions/generator.js';
import targets from '../../copilot-instructions/copilot-instructions.config.js';
import findMonorepoRoot from '../../utils/find-monorepo-root.js';

vi.mock('../../utils/find-monorepo-root.js', () => ({ default: vi.fn() }));

const guide = [
    '# Authoring guide',
    '',
    '## Conventions and quality rules',
    '',
    'Follow these rules.',
    '',
].join('\n');

let root;

function makeDanger ({ createdFiles = [], modifiedFiles = [] } = {}) {
    return {
        git: {
            // eslint-disable-next-line camelcase
            created_files: createdFiles,
            // eslint-disable-next-line camelcase
            modified_files: modifiedFiles,
        },
    };
}

// Writes the stand-in guide at each configured source path inside the temp root.
function seedSources () {
    targets.forEach((target) => {
        const sourcePath = path.join(root, target.source);
        fs.mkdirSync(path.dirname(sourcePath), { recursive: true });
        fs.writeFileSync(sourcePath, guide);
    });
}

function generateOutputs () {
    new CopilotInstructionsGenerator({ fs, path, console }).generate(targets, root);
}

describe('copilot-instructions-drift check', () => {
    let fail;

    beforeEach(() => {
        fail = vi.fn();
        root = fs.mkdtempSync(path.join(os.tmpdir(), 'copilot-drift-test-'));
        findMonorepoRoot.mockReturnValue(root);
    });

    afterEach(() => {
        fs.rmSync(root, { recursive: true, force: true });
        vi.clearAllMocks();
    });

    it('skips automation PRs', async () => {
        await copilotInstructionsDrift({
            danger: makeDanger({ modifiedFiles: targets.map((t) => t.source) }),
            fail,
            flags: { isAutomationPR: true },
        });
        expect(fail).not.toHaveBeenCalled();
    });

    it('does nothing when no relevant files changed', async () => {
        await copilotInstructionsDrift({
            danger: makeDanger({ modifiedFiles: ['src/unrelated.js'] }),
            fail,
            flags: {},
        });
        expect(fail).not.toHaveBeenCalled();
    });

    it('passes when the generated file is up to date', async () => {
        seedSources();
        generateOutputs();

        await copilotInstructionsDrift({
            danger: makeDanger({ modifiedFiles: targets.map((t) => t.source) }),
            fail,
            flags: {},
        });

        expect(fail).not.toHaveBeenCalled();
    });

    it('fails when the source changed but the generated file is stale', async () => {
        seedSources();
        // Write a stale output instead of the freshly generated one.
        targets.forEach((target) => {
            const outputPath = path.join(root, target.output);
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
            fs.writeFileSync(outputPath, 'stale content');
        });

        await copilotInstructionsDrift({
            danger: makeDanger({ modifiedFiles: targets.map((t) => t.source) }),
            fail,
            flags: {},
        });

        expect(fail).toHaveBeenCalledOnce();
        expect(fail.mock.calls[0][0]).toContain('out of date');
        expect(fail.mock.calls[0][0]).toContain('yarn generate:copilot-instructions');
    });
});
