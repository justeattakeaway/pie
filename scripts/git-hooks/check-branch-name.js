/* eslint-disable @typescript-eslint/no-var-requires */
const { validateBranchName } = require('./git-hooks-utils.js');

/**
 * This script is ran by the "pre-commit" git hook and checks if the current branch name has a Jira ticket id
 */
function checkBranchName () {
    try {
        // This argument might be empty during a interactive rebase
        if (!process.argv[2]) process.exit(0);

        const branchName = process.argv[2].trim();
        const isValid = validateBranchName(branchName);

        if (!isValid) {
            const errorMessage = `
The branch name "${branchName}" is not valid.
It should either start with a Jira ticket id like "dsw-123-..." or "dsw-000-..." if it doesn't have a related ticket.
`;
            throw new Error(errorMessage);
        }
    } catch (error) {
        console.error('checkBranchName() failed:');
        console.error(error.message);
        process.exit(1);
    }
}

checkBranchName();
