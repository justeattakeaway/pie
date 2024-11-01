const fs = require('fs');
const path = require('path');

module.exports = async ({ github, context }) => {
    const watermark = '<!-- COMPONENT_SIZE_REPORT -->';
    const { owner, repo } = context.repo;
    const issueNumber = context.payload.pull_request.number;

    // Fetch existing comments and find the one with the watermark
    const { data: comments } = await github.rest.issues.listComments({
        owner,
        repo,
        issue_number: issueNumber,
    });

    const existingComment = comments.find(comment => comment.body.startsWith(watermark));

    if (existingComment) {
        console.log("Existing comment found, deleting.");
        await github.rest.issues.deleteComment({
            owner,
            repo,
            comment_id: existingComment.id,
        });
    } else {
        console.log("No existing comment to delete.");
    }
};
