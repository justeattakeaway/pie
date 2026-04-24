import {
    describe, it, expect, vi, beforeEach,
} from 'vitest';

vi.mock('../../git-hooks/git-hooks-utils.js', () => ({
    validatePrTitle: vi.fn(),
}));

import { validatePrTitle } from '../../git-hooks/git-hooks-utils.js';
import prTitle from '../../dangerjs-checks/pr-title.js';

describe('pr-title check', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('skips automation PRs', async () => {
        const fail = vi.fn();
        await prTitle({
            danger: {},
            fail,
            pr: { title: 'anything' },
            flags: { isAutomationPR: true, isDependabotPR: false },
        });
        expect(fail).not.toHaveBeenCalled();
        expect(validatePrTitle).not.toHaveBeenCalled();
    });

    it('passes on valid title', async () => {
        validatePrTitle.mockReturnValue(true);
        const fail = vi.fn();
        await prTitle({
            danger: {},
            fail,
            pr: { title: 'feat(pie-button): DSW-1234 add thing' },
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).not.toHaveBeenCalled();
    });

    it('fails on invalid title', async () => {
        validatePrTitle.mockReturnValue(false);
        const fail = vi.fn();
        await prTitle({
            danger: {},
            fail,
            pr: { title: 'bad title' },
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).toHaveBeenCalledOnce();
        expect(fail.mock.calls[0][0]).toContain('PR Title Validation Failed');
        expect(fail.mock.calls[0][0]).toContain('bad title');
    });
});
