/* eslint-disable camelcase */

const CHECK_NAME = 'check-all-jobs';
const DEPENDABOT_LOGIN = 'dependabot[bot]';

/**
 * Determines whether a PR's CI has passed, based solely on the `check-all-jobs`
 * job. Percy is a separate manual visual gate and is intentionally not
 * considered here — the digest message is itself the prompt to do that review.
 *
 * @param {Array<{ name: string, status: string, conclusion: string, started_at: string }>} checkRuns
 * @returns {boolean}
 */
function isCiGreen (checkRuns) {
    const runs = checkRuns
        .filter((run) => run.name === CHECK_NAME)
        .sort((a, b) => new Date(b.started_at) - new Date(a.started_at));
    const latest = runs[0];
    return Boolean(latest && latest.status === 'completed' && latest.conclusion === 'success');
}

/**
 * Builds the Slack payload listing the ready-for-review PRs as a single message.
 *
 * @param {Array<{ html_url: string, title: string }>} readyPrs
 * @returns {object}
 */
function buildPayload (readyPrs) {
    const count = readyPrs.length;
    const lines = readyPrs.map((pr) => `• <${pr.html_url}|${pr.title}>`).join('\n');

    return {
        blocks: [
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: `:dependabot: *${count} Dependabot PR${count === 1 ? '' : 's'} ready for review in the PIE Monorepo* (CI green):`,
                },
            },
            { type: 'section', text: { type: 'mrkdwn', text: lines } },
        ],
        unfurl_links: false,
        unfurl_media: false,
    };
}

/**
 * Collects the open Dependabot PRs whose CI has passed and returns a single
 * grouped Slack payload, or `null` when there is nothing to report.
 *
 * @param {{ github: object, context: object }} args
 * @returns {Promise<object | null>}
 */
module.exports = async ({ github, context }) => {
    const { owner, repo } = context.repo;

    const openPrs = await github.paginate(github.rest.pulls.list, {
        owner, repo, state: 'open', per_page: 100,
    });
    const dependabotPrs = openPrs.filter((pr) => pr.user.login === DEPENDABOT_LOGIN);

    const inspected = await Promise.all(dependabotPrs.map(async (pr) => {
        const { data } = await github.rest.checks.listForRef({
            owner, repo, ref: pr.head.sha, per_page: 100,
        });
        return isCiGreen(data.check_runs) ? pr : null;
    }));

    const ready = inspected.filter(Boolean);

    if (ready.length === 0) {
        console.info('No CI-green Dependabot PRs to report.');
        return null;
    }

    return buildPayload(ready);
};

module.exports.isCiGreen = isCiGreen;
module.exports.buildPayload = buildPayload;
