/* eslint-disable camelcase */

/**
 * Creates a comment for a snapshot release
 * @param {Object} context - The context object
 * @param {Array<string>} newTags - The new tags
 * @returns {string} The comment body
 */
const createSnapshotComment = (context, newTags) => {
    const multiple = newTags.length > 1;

    let body = `@${context.actor} Your snapshot${multiple ? 's have' : ' has'} been published to npm!\n\nTest the snapshot${multiple ? 's' : ''} by updating your \`package.json\` with the newly-published version${multiple ? 's' : ''}:\n`;

    if (multiple) {
        body += `> [!NOTE]\n> If you have more than one of these packages installed, we suggest using the new snapshots for all of them to help avoid version conflicts.\n\n${newTags.map((tag) => `\`\`\`sh\nyarn up ${tag} --mode=update-lockfile\n\`\`\``).join('\n')}\nThen finally:\n\`\`\`sh\nyarn install\n\`\`\``;
    } else {
        body += `\`\`\`sh\nyarn up ${newTags[0]}\n\`\`\``;
    }

    return body;
};

/**
 * Handles an error by creating a comment on the issue
 * @param {Object} github - The GitHub client
 * @param {Object} context - The context object from actions/github-script
 * @param {string} message - The error message to be displayed in the comment
 * @param {Error} error - The error object
 */
const handleError = async (github, context, message, error) => {
    console.error(`${message}:`, error);
    await github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: `${message}:\n\`\`\`\n${error.message || error}\n\`\`\``,
    });
};

/**
 * Publishes a changeset snapshot for affected packages
 * @param {Object} execa - The execa instance
 * @returns {Array<string>} The tags of the newly published snapshots
 */
const publishSnapshot = async (execa) => {
    await execa.command('yarn changeset:snapshot', { stdio: 'inherit' });

    const releaseProcess = execa.command('yarn changeset:publish --no-git-tags --snapshot --tag snapshot-release');
    releaseProcess.stdout.pipe(process.stdout);

    const { stdout } = await releaseProcess;

    const newTags = Array
        .from(stdout.matchAll(/New tag:\s+([^\s\n]+)/g))
        .map(([, tag]) => tag)
        .filter((tag) => !/pie-(monorepo|docs|storybook)|@justeattakeaway\/pie-docs/.test(tag));

    return newTags;
};

module.exports = {
    createSnapshotComment,
    handleError,
    publishSnapshot,
};
