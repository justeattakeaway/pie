/* eslint-disable camelcase */
const BRANCH_PREFIX = 'update-eslint-snacks-plugin-'; // TODO use reference to avoid hardcoding this in multiple places

function formatPrBody (diff) {
    const sections = [];

    if (diff.added.length > 0) {
        const items = diff.added
            .map(({ snacksComponent, piePackage, status }) => `- \`${snacksComponent}\` → \`${piePackage}\` (${status})`)
            .join('\n');
        sections.push(`## Added\n\n${items}`);
    }

    if (diff.removed.length > 0) {
        const items = diff.removed
            .map(({ snacksComponent, piePackage }) => `- \`${snacksComponent}\` (was \`${piePackage}\`)`)
            .join('\n');
        sections.push(`## Removed\n\n${items}`);
    }

    if (diff.statusChanged.length > 0) {
        const items = diff.statusChanged
            .map(({
                snacksComponent, piePackage, from, to,
            }) => `- \`${snacksComponent}\` → \`${piePackage}\`: ${from} → **${to}**`)
            .join('\n');
        sections.push(`## Status Changes\n\n${items}`);
    }

    if (diff.snacksChanged.length > 0) {
        const items = diff.snacksChanged
            .map(({
                snacksComponent, from, to, status,
            }) => `- \`${snacksComponent}\` (${status}): \`${from}\` → \`${to}\``)
            .join('\n');
        sections.push(`## Package Changes\n\n${items}`);
    }

    return sections.join('\n\n');
}

module.exports = async ({ github, branchName, changesSummary }) => {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

    if (!branchName.startsWith(BRANCH_PREFIX)) return null;

    const { data: openPRs } = await github.rest.pulls.list({
        owner,
        repo,
        state: 'open',
    });

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
    const stalePRs = openPRs.filter((pr) => pr.head.ref.startsWith(BRANCH_PREFIX));
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
