const TICKET_PATTERNS = {
    // Case insensitive branch name pattern: supports multiple ticket formats like dsw-123, abc-789
    BRANCH: /(^[a-z]{2,4}-(\d{1,7}))-\w.*/i,
    // Case insensitive commit message pattern: type(scope): TICKET-123 title (supports multiple ticket formats)
    COMMIT: /^(\w+)\((\w.*)\): ([A-Z]{2,4}-(?!0+)\d{1,7}) (\w.*)$/i,
    // PR title pattern: type(scope): TICKET-123 title (supports multiple ticket formats)
    PR_TITLE: /^(\w+)\((\w.*)\): ([A-Z]{2,4}-(?!0+)\d{1,7}) (\w.*)$|^Version Packages.*/,
};

/**
 * Tries to extract a Jira ticket id from a branch name string
 * @param {string} branchName The branch name
 * @returns Null or a string with the ticket id in upper case
 */
function getTicketIdFromBranchName (branchName) {
    if (!branchName) throw new Error('A valid branch name wasn\'t provided');
    const match = TICKET_PATTERNS.BRANCH.exec(branchName);

    if (!match) return null;

    const [, ticketId, ticketNumber] = match;

    // Exclude ticket numbers that are all zeros
    if (/^0+$/.test(ticketNumber)) return null;

    return ticketId.toUpperCase();
}

/**
 * Checks if the current branch name is valid by checking the existence of a Jira ticket id
 * @param {string} branchName The branch name
 * @returns A boolean value that represents if the branch name is valid or not
 */
function validateBranchName (branchName) {
    if (branchName.startsWith('beta-') || branchName.startsWith('feature-')) return true;
    return !!getTicketIdFromBranchName(branchName);
}

/**
 * Validates a PR title format and ticket number
 * @param {string} prTitle The PR title to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validatePrTitle (prTitle) {
    if (!prTitle) return false;
    return TICKET_PATTERNS.PR_TITLE.test(prTitle);
}

module.exports = {
    getTicketIdFromBranchName,
    validateBranchName,
    validatePrTitle,
    TICKET_PATTERNS,
};
