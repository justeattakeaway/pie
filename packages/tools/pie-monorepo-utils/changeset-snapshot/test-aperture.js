/* eslint-disable camelcase */
const { createSnapshotComment, handleError, publishSnapshot } = require('./utils');

module.exports = async ({ github, context }, execa) => {
    let newTags;

    try {
        newTags = await publishSnapshot(execa);

        if (newTags.length === 0) {
            throw new Error('No changed packages found! Please make sure you have added a changeset entry for the packages you would like to snapshot.');
        }
    } catch (error) {
        await handleError(github, context, 'An unexpected error occurred during the snapshot release process', error);
        throw error;
    }

    await github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: createSnapshotComment(context, newTags),
    });

    // Extract snapshot version and package names
    const [snapshotVersion] = newTags[0].match(/\d{14}$/);
    // Strip the version suffix rather than rebuilding the name, so the
    // package's own scope is preserved (e.g. @justeat/pie-design-tokens).
    const packageNames = newTags
        .map((tag) => tag.replace(/@\d+\.\d+\.\d+-snapshot-release-\d+$/, ''));

    try {
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
        await handleError(github, context, 'Failed to trigger PIE Aperture', error);
        throw error;
    }
};
