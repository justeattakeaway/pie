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

        body = `@${context.actor} Your snapshot${multiple ? 's have' : ' has'} been published to npm!\n\nTest the snapshot${multiple ? 's' : ''} by updating your \`package.json\` with the newly-published version${multiple ? 's' : ''}:\n`;

        if (multiple) {
            body += `> [!NOTE]\n> If you have more than one of these packages installed, we suggest using the new snapshots for all of them to help avoid version conflicts.\n\n${newTags.map(tag => `\`\`\`sh\nyarn up ${tag} --mode=update-lockfile\n\`\`\``).join('\n')}\nThen finally:\n\`\`\`sh\nyarn install\n\`\`\``;
        } else {
            body += `\`\`\`sh\nyarn up ${newTags[0]}\n\`\`\``;
        }

        // Dispatch event to PIE Aperture using node-fetch
        await github.rest.actions.createWorkflowDispatch({
            owner: 'justeattakeaway',
            repo: 'pie-aperture',
            event_type: 'pie-trigger',
            ref: 'main',
            inputs: {
              'pie-branch': '${{ github.ref_name }}',
              'snapshots': newTags
            }
          })

    } else {
        body = `No changed packages found! Please make sure you have added a changeset entry for the packages you would like to snapshot.`;
    }

    // Create a GitHub comment with the update instructions
    await github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body,
    });
};
