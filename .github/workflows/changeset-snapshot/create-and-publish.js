module.exports = async ({ github, context }, execa) => {
    await execa.command('yarn changeset:version --snapshot snapshot-release', { stdio: 'inherit' });

    const releaseProcess = execa.command('yarn changeset:publish --no-git-tags --snapshot --tag snapshot-release');
    releaseProcess.stdout.pipe(process.stdout);

    const { stdout } = await releaseProcess;

    const newTags = Array
        .from(stdout.matchAll(/New tag:\s+([^\s\n]+)/g))
        .map(([_, tag]) => tag)
        .filter((tag) => !/^wc-.+$|pie-(monorepo|docs|storybook)/.test(tag));

    let body;

    if (newTags.length > 0) {
        const multiple = newTags.length > 1;

        body = `@${context.actor} Your snapshot${multiple ? 's have' : ' has'} been published to npm!

    Test the snapshot${multiple ? 's' : ''} by updating your \`package.json\` with the newly-published version${multiple ? 's' : ''}:
    ${newTags.map(tag => `- \`${tag}\``).join('\n')}`;

        if (multiple) {
            body += `
    > [!NOTE]
    > If you have more than one of these packages installed, we suggest using the new snapshots for all of them to help avoid version conflicts.

    The following command will update any of the packages that you have installed (ignoring any that you don't):

    \`\`\`sh
    ${newTags.map(tag => `yarn up ${tag} --mode=update-lockfile`).join(' & ')} & yarn install
    \`\`\``;
        } else {
            body += `
    \`\`\`sh
    yarn up ${newTags[0]}
    \`\`\``;
        }
    } else {
        body = `No changed packages found! Please make sure you have added a changeset entry for the packages you would like to snapshot.`;
    }

    await github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body,
    });
};
