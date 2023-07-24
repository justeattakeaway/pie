#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { getTicketIdFromBranchName, verifyCommitMessage } = require('./git-hooks-utils.js');

/**
 * This script is ran by the "commit-msg" git hook and verifies if the commit message contains the expected Jira ticket id
 */
function checkTicketId () {
    try {
        // This argument might be empty during a interactive rebase
        if (!process.argv[3]) process.exit(0);

        const fileName = process.argv[2].trim();
        const branchName = process.argv[3].trim();

        // Check if the branch name has a Jira ticket
        const ticketId = getTicketIdFromBranchName(branchName);

        if (!ticketId) {
            const errorMessage = 'A proper Jira ticket id couldn\'t be inferred from the branch name.';
            throw new Error(errorMessage);
        }

        // Check if commit message has the expected Jira ticket id inferred from the branch name
        const originalCommitMessage = fs.readFileSync(fileName, 'utf-8');
        const expectedCommitMessage = verifyCommitMessage(originalCommitMessage, ticketId);

        if (expectedCommitMessage !== originalCommitMessage) {
            // Update commit message
            fs.writeFileSync(fileName, expectedCommitMessage, 'utf-8');
        }
    } catch (error) {
        console.error('checkTicketId() failed:');
        console.error(error.message);
        process.exit(1);
    }
}

checkTicketId();
