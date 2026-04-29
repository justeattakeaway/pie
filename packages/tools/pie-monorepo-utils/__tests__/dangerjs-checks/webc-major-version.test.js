import {
    describe, it, expect, vi, beforeEach,
} from 'vitest';

import { execSync } from 'child_process';
import webcMajorVersion from '../../dangerjs-checks/webc-major-version.js';

const { mockExecSync } = vi.hoisted(() => ({ mockExecSync: vi.fn() }));
vi.mock('child_process', () => ({
    default: { execSync: mockExecSync },
    execSync: mockExecSync,
}));

describe('webc-major-version check', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('skips automation PRs', async () => {
        const fail = vi.fn();
        await webcMajorVersion({
            danger: {},
            fail,
            pr: {},
            flags: { isAutomationPR: true, isDependabotPR: false },
        });
        expect(fail).not.toHaveBeenCalled();
        expect(execSync).not.toHaveBeenCalled();
    });

    it('passes when execSync succeeds', async () => {
        execSync.mockReturnValue(Buffer.from(''));
        const fail = vi.fn();
        await webcMajorVersion({
            danger: {},
            fail,
            pr: {},
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(execSync).toHaveBeenCalledWith('npx detect-webc-major-version', { stdio: 'pipe' });
        expect(fail).not.toHaveBeenCalled();
    });

    it('fails with stderr when execSync throws', async () => {
        const err = new Error('boom');
        err.stderr = Buffer.from('major version bump missing');
        execSync.mockImplementation(() => { throw err; });
        const fail = vi.fn();
        await webcMajorVersion({
            danger: {},
            fail,
            pr: {},
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).toHaveBeenCalledOnce();
        expect(fail.mock.calls[0][0]).toContain('major version bump missing');
    });

    it('fails with empty string when thrown error has no stderr', async () => {
        execSync.mockImplementation(() => { throw new Error('boom'); });
        const fail = vi.fn();
        await webcMajorVersion({
            danger: {},
            fail,
            pr: {},
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).toHaveBeenCalledWith('');
    });
});
