/**
 * Tries to extract a Jira ticket id from a branch name string
 * @param {string} branchName The branch name
 * @returns Null or a string with the ticket id in upper case
 */
function getTicketIdFromBranchName (branchName) {
    if (!branchName) throw new Error('A valid branch name wasn\'t provided');
    const regexJiraTicket = /(^\w+?-\d+?)-\w.*/;

    const match = regexJiraTicket.exec(branchName);

    if (!match) return null;

    const [, ticketId] = match;

    return ticketId.toUpperCase();
}

/**
 * Checks if the current branch name is valid by checking the existence of a Jira ticket id
 * @param {string} branchName The branch name
 * @returns A boolean value that represents if the branch name is valid or not
 */
function validateBranchName (branchName) {
    return !!getTicketIdFromBranchName(branchName);
}

/**
 * Verifies if the commit message contains the provided ticket id. If not, replaces the current ticket id with the provided one
 * @param {string} commitMessage The commit message
 * @param {string} ticketId The ticket id
 * @returns A commit message
 */
function verifyCommitMessage (commitMessage, ticketId) {
    if (!commitMessage) throw new Error('The commitMessage wasn\'t provided');
    if (!ticketId) throw new Error('The ticketId wasn\'t provided');

    // Process commit message and check if it already has a ticket id
    const match = commitMessage.match(/^(\w*)\((\w.*)\): (\w+?-\d{1,7}) (\w.*)/);

    // If the commit message doesn't have a ticket id, extract the existing message parts and add the ticket id
    if (!match) {
        const commitMessageParts = commitMessage.match(/^(\w*)\((\w.*)\): (\w.*)/);

        if (!commitMessageParts) throw new Error('The commitMessage doesn\'t have the expected format. Example: type(scope): DSW-123 title');

        const [, commitType, commitScope, commitSubject] = commitMessageParts;

        return `${commitType}(${commitScope}): ${ticketId.trim()} ${commitSubject}`.trim();
    }

    const [, , commitMessageTicketId] = match;

    if (commitMessageTicketId !== ticketId) {
        return commitMessage.replace(commitMessageTicketId, ticketId);
    }

    return commitMessage;
}

module.exports = {
    getTicketIdFromBranchName,
    validateBranchName,
    verifyCommitMessage,
};
