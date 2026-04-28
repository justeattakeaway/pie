import {
    describe, it, expect, vi, beforeEach,
} from 'vitest';
import prCheckboxes from '../../dangerjs-checks/pr-checkboxes.js';

describe('pr-checkboxes check', () => {
    let fail;

    beforeEach(() => {
        fail = vi.fn();
    });

    it('skips dependabot PRs', async () => {
        await prCheckboxes({
            danger: {},
            fail,
            pr: { body: '## Something\n- [ ] unchecked' },
            flags: { isAutomationPR: false, isDependabotPR: true },
        });
        expect(fail).not.toHaveBeenCalled();
    });

    it('passes with no unchecked boxes', async () => {
        await prCheckboxes({
            danger: {},
            fail,
            pr: { body: '## Checklist\n- [x] done' },
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).not.toHaveBeenCalled();
    });

    it('allows unchecked inside Not-applicable section', async () => {
        const body = '## Checklist\n- [x] done\n## Not-applicable Checklist items\n- [ ] skip me';
        await prCheckboxes({
            danger: {},
            fail,
            pr: { body },
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).not.toHaveBeenCalled();
    });

    it('fails on unchecked outside Not-applicable section', async () => {
        const body = '## Checklist\n- [ ] missing\n## Not-applicable Checklist items\n- [x] ok';
        await prCheckboxes({
            danger: {},
            fail,
            pr: { body },
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).toHaveBeenCalled();
        expect(fail.mock.calls[0][0]).toContain('unchecked checklist items outside');
    });

    it('fails on unchecked in Reviewer 1 section', async () => {
        const body = '## Checklist\n- [x] done\n### Reviewer 1\n- [ ] review\n### Reviewer 2\n- [x] review';
        await prCheckboxes({
            danger: {},
            fail,
            pr: { body },
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).toHaveBeenCalled();
        expect(fail.mock.calls.some((c) => c[0].includes('Reviewer 1'))).toBe(true);
    });

    it('fails on unchecked in Reviewer 2 section', async () => {
        const body = '## Checklist\n- [x] done\n### Reviewer 1\n- [x] ok\n### Reviewer 2\n- [ ] review';
        await prCheckboxes({
            danger: {},
            fail,
            pr: { body },
            flags: { isAutomationPR: false, isDependabotPR: false },
        });
        expect(fail).toHaveBeenCalled();
        expect(fail.mock.calls.some((c) => c[0].includes('Reviewer 2'))).toBe(true);
    });
});
