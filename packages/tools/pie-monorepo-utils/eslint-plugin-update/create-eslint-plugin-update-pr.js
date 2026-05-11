/* eslint-disable camelcase */
const { BRANCH_PREFIX, formatPrBody } = require('./shared');

module.exports = async ({ github, branchName, changesSummary }) => {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

    if (!branchName.startsWith(BRANCH_PREFIX)) return null;

    // List open PRs to find stale ones
    const { data: openPRs } = await github.rest.pulls.list({
        owner,
        repo,
        state: 'open',
    });
    const stalePRs = openPRs.filter((pr) => pr.head.ref.startsWith(BRANCH_PREFIX));

    // Create new PR
    const diff = JSON.parse(changesSummary);
    const body = formatPrBody(diff);
    const { data: { html_url } } = await github.rest.pulls.create({
        owner,
        repo,
        base: 'main',
        head: branchName,
        title: 'feat(eslint-plugin-snacks-pie-migration): Update eslint rules for PIE migration',
        body,
        draft: false,
    });

    console.info(`✅ PR created: ${html_url}`);

    // Remove stale PRs
    await Promise.all(stalePRs.map(async (pr) => {
        console.info(`Closing stale PR #${pr.number}: ${pr.title}`);
        await github.rest.pulls.update({
            owner,
            repo,
            pull_number: pr.number,
            state: 'closed',
        });
        await github.rest.git.deleteRef({
            owner,
            repo,
            ref: `heads/${pr.head.ref}`,
        });
        console.info(`Deleted branch: ${pr.head.ref}`);
    }));

    return html_url;
};
