/* eslint-disable camelcase */
const { createSnapshotComment, handleError, publishSnapshot } = require('./utils');

module.exports = async ({ github, context }, execa) => {
    try {
        const newTags = await publishSnapshot(execa);

        const body = newTags.length > 0
            ? createSnapshotComment(context, newTags)
            : 'No changed packages found! Please make sure you have added a changeset entry for the packages you would like to snapshot.';

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
