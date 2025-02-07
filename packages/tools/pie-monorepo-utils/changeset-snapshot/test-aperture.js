/* eslint-disable camelcase */
const { createSnapshotComment, handleError, publishSnapshot } = require('./utils');

module.exports = async ({ github, context }, execa) => {
    try {
        const newTags = await publishSnapshot(execa);

        // Check for changed packages
        if (newTags.length === 0) {
            throw new Error('No changed packages found! Please make sure you have added a changeset entry for the packages you would like to snapshot.');
        }

        // Extract snapshot version and package names
        const [snapshotVersion] = newTags[0].match(/\d{14}$/);
        const packageNames = newTags.map((tag) => `@justeattakeaway/${tag.match(/pie-[\w-]+/)[0]}`);

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
            await handleError(github, context, 'Failed to dispatch workflow', error);
        }

        // Create a GitHub comment with the update instructions
        const body = createSnapshotComment(context, newTags);
        await github.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body,
        });
    } catch (error) {
        await handleError(github, context, 'An unexpected error occurred during the snapshot release process', error);
    }
};
