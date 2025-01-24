/* eslint-disable camelcase */
module.exports = async ({ github, context }, execa) => {
    // Helper function to handle errors and post GitHub comments
    const handleError = async (message, error) => {
        console.error(`${message}:`, error);
        await github.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: `${message}:\n\`\`\`\n${error.message || error}\n\`\`\``,
        });
    };

    try {
        await execa.command('yarn changeset:version --snapshot snapshot-release', { stdio: 'inherit' });

        const releaseProcess = execa.command('yarn changeset:publish --no-git-tags --snapshot --tag snapshot-release');
        releaseProcess.stdout.pipe(process.stdout);

        const { stdout } = await releaseProcess;

        const newTags = Array
            .from(stdout.matchAll(/New tag:\s+([^\s\n]+)/g))
            .map(([, tag]) => tag)
            .filter((tag) => !/^wc-.+$|pie-(monorepo|docs|storybook)/.test(tag));

        // Extract the snapshot version from one of the tags
        if (newTags.length === 0) {
            throw new Error('No changed packages found! Please make sure you have added a changeset entry for the packages you would like to snapshot.');
        }

        const [snapshotVersion] = newTags[0].match(/\d{14}$/);
        const packageNames = newTags.map((tag) => `@justeattakeaway/${tag.match(/pie-[\w-]+/)[0]}`);

        const multiple = newTags.length > 1;

        let body = `@${context.actor} Your snapshot${multiple ? 's have' : ' has'} been published to npm!\n\nTest the snapshot${multiple ? 's' : ''} by updating your \`package.json\` with the newly-published version${multiple ? 's' : ''}:\n`;

        if (multiple) {
            body += `> [!NOTE]\n> If you have more than one of these packages installed, we suggest using the new snapshots for all of them to help avoid version conflicts.\n\n${newTags.map((tag) => `\`\`\`sh\nyarn up ${tag} --mode=update-lockfile\n\`\`\``).join('\n')}\nThen finally:\n\`\`\`sh\nyarn install\n\`\`\``;
        } else {
            body += `\`\`\`sh\nyarn up ${newTags[0]}\n\`\`\``;
        }

        try {
            // Attempt to dispatch event to PIE Aperture
            await github.rest.repos.createDispatchEvent({
                owner: 'justeattakeaway',
                repo: 'pie-aperture',
                event_type: 'pie-trigger',
                client_payload: {
                    'pie-branch': process.env.PIE_BRANCH,
                    'pie-pr-number': process.env.PIE_PR_NUMBER,
                    'snapshot-version': snapshotVersion,
                    'snapshot-packages': packageNames.join(' '),
                },
            });
        } catch (error) {
            await handleError('Failed to dispatch workflow', error);
        }

        // Create a GitHub comment with the update instructions
        await github.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body,
        });
    } catch (error) {
        await handleError('An unexpected error occurred during the snapshot release process', error);
    }
};
