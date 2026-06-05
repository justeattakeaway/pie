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
    await execa.execaCommand('yarn changeset:snapshot', { stdio: 'inherit' });

    const releaseProcess = execa.execaCommand('yarn changeset:publish --no-git-tag --tag snapshot-release');
    releaseProcess.stdout.pipe(process.stdout);

    const { stdout } = await releaseProcess;

    // We run `changeset publish` with `--no-git-tag`, so the public packages it
    // publishes to npm do NOT emit "New tag:" lines (those are only printed when
    // git tags are created). We therefore detect published packages from their
    // `name@version` identifiers, which appear in changeset's publish output
    // regardless of whether git tags were created. Identifiers are de-duplicated
    // because private packages can be listed more than once.
    const newTags = [...new Set(Array
            .from(stdout.matchAll(/@justeattakeaway\/[\w-]+@\d+\.\d+\.\d+-snapshot-release-\d+/g))
            .map(([tag]) => tag))].filter((tag) => !/pie-(monorepo|docs|storybook)/.test(tag));

    return newTags;
};

module.exports = {
    createSnapshotComment,
    handleError,
    publishSnapshot,
};
