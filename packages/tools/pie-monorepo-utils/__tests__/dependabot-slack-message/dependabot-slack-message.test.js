/* eslint-disable camelcase */
import {
    describe, it, expect, vi,
} from 'vitest';
import dependabotSlackMessage from '../../dependabot-slack-message/dependabot-slack-message.js';

function makeContext () {
    return {
        repo: { owner: 'justeattakeaway', repo: 'pie' },
    };
}

function makePr ({
    number = 1,
    login = 'dependabot[bot]',
    sha = `sha-${number}`,
    title = `deps(npm): bump group ${number}`,
} = {}) {
    return {
        number,
        user: { login },
        head: { sha },
        html_url: `https://github.com/justeattakeaway/pie/pull/${number}`,
        title,
    };
}

function checkRun ({
    name = 'check-all-jobs',
    status = 'completed',
    conclusion = 'success',
    started_at = '2026-06-29T09:00:00Z',
} = {}) {
    return {
        name, status, conclusion, started_at,
    };
}

/**
 * @param {object} args
 * @param {Array} args.openPrs - PRs returned by `github.paginate(pulls.list)`
 * @param {Record<string, Array>} args.checkRunsByRef - check runs keyed by head sha
 */
function makeGithub ({ openPrs = [], checkRunsByRef = {} } = {}) {
    return {
        paginate: vi.fn().mockResolvedValue(openPrs),
        rest: {
            pulls: { list: vi.fn() },
            checks: {
                listForRef: vi.fn().mockImplementation(({ ref }) => Promise.resolve({
                    data: { check_runs: checkRunsByRef[ref] ?? [] },
                })),
            },
        },
    };
}

describe('dependabot-slack-message', () => {
    it('returns null when there are no Dependabot PRs', async () => {
        const github = makeGithub({
            openPrs: [makePr({ number: 1, login: 'a-human' })],
        });

        const result = await dependabotSlackMessage({ github, context: makeContext() });

        expect(result).toBeNull();
        // Human PRs should never have their checks inspected.
        expect(github.rest.checks.listForRef).not.toHaveBeenCalled();
    });

    it('returns null when a Dependabot PR has not passed check-all-jobs', async () => {
        const github = makeGithub({
            openPrs: [makePr({ number: 1, sha: 'sha-1' })],
            checkRunsByRef: { 'sha-1': [checkRun({ conclusion: 'failure' })] },
        });

        const result = await dependabotSlackMessage({ github, context: makeContext() });

        expect(result).toBeNull();
    });

    it('returns null when check-all-jobs has not run yet', async () => {
        const github = makeGithub({
            openPrs: [makePr({ number: 1, sha: 'sha-1' })],
            // Only Percy reported — the aggregator is absent.
            checkRunsByRef: { 'sha-1': [checkRun({ name: 'percy', status: 'in_progress', conclusion: null })] },
        });

        const result = await dependabotSlackMessage({ github, context: makeContext() });

        expect(result).toBeNull();
    });

    it('includes only the CI-green Dependabot PRs', async () => {
        const github = makeGithub({
            openPrs: [
                makePr({ number: 1, sha: 'green', title: 'deps(npm): bump babel' }),
                makePr({ number: 2, sha: 'red', title: 'deps(npm): bump storybook' }),
                makePr({ number: 3, login: 'a-human', sha: 'human' }),
            ],
            checkRunsByRef: {
                green: [checkRun()],
                red: [checkRun({ conclusion: 'failure' })],
            },
        });

        const result = await dependabotSlackMessage({ github, context: makeContext() });

        const text = JSON.stringify(result);
        expect(text).toContain('deps(npm): bump babel');
        expect(text).toContain('https://github.com/justeattakeaway/pie/pull/1');
        expect(text).not.toContain('deps(npm): bump storybook');
    });

    it('ignores a pending Percy check when check-all-jobs is green', async () => {
        const github = makeGithub({
            openPrs: [makePr({ number: 1, sha: 'sha-1' })],
            checkRunsByRef: {
                'sha-1': [
                    checkRun({ name: 'check-all-jobs', conclusion: 'success' }),
                    checkRun({ name: 'percy', status: 'in_progress', conclusion: null }),
                ],
            },
        });

        const result = await dependabotSlackMessage({ github, context: makeContext() });

        expect(result).not.toBeNull();
    });

    it('uses the most recent check-all-jobs run', async () => {
        const github = makeGithub({
            openPrs: [makePr({ number: 1, sha: 'sha-1' })],
            checkRunsByRef: {
                'sha-1': [
                    checkRun({ conclusion: 'success', started_at: '2026-06-29T09:00:00Z' }),
                    checkRun({ conclusion: 'failure', started_at: '2026-06-29T10:00:00Z' }),
                ],
            },
        });

        const result = await dependabotSlackMessage({ github, context: makeContext() });

        // The newer run failed, so the PR is not ready.
        expect(result).toBeNull();
    });

    it('builds a singular header for a single ready PR', async () => {
        const github = makeGithub({
            openPrs: [makePr({ number: 1, sha: 'sha-1' })],
            checkRunsByRef: { 'sha-1': [checkRun()] },
        });

        const result = await dependabotSlackMessage({ github, context: makeContext() });

        expect(result.blocks[0].text.text).toContain(':dependabot:');
        expect(result.blocks[0].text.text).toContain('1 Dependabot PR ready for review in the PIE Monorepo');
        expect(result.unfurl_links).toBe(false);
    });

    it('builds a plural header for multiple ready PRs', async () => {
        const github = makeGithub({
            openPrs: [
                makePr({ number: 1, sha: 'a' }),
                makePr({ number: 2, sha: 'b' }),
            ],
            checkRunsByRef: { a: [checkRun()], b: [checkRun()] },
        });

        const result = await dependabotSlackMessage({ github, context: makeContext() });

        expect(result.blocks[0].text.text).toContain('2 Dependabot PRs ready for review in the PIE Monorepo');
    });
});
