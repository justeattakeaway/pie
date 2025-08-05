#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const chalk = require('chalk');
const { validateBranchName } = require('./git-hooks-utils.js');

/**
 * This script is ran by the "post-checkout" git hook and checks if the current branch name has a valid format
 */
function checkBranchName () {
    try {
        // This argument might be empty during a interactive rebase
        if (!process.argv[2]) process.exit(0);

        const branchName = process.argv[2].trim();
        const isValid = validateBranchName(branchName);

        if (!isValid) {
            const errorMessage = `
${chalk.yellow('The branch name')} ${chalk.bold.red(`"${branchName}"`)} ${chalk.yellow('does not conform to the repository branch naming conventions.')}

${chalk.cyan('Valid branch name formats:')}
${chalk.green('•')} Jira ticket ID format: ${chalk.cyan('"DSW-123-feature-description"')}
${chalk.green('•')} Special branches: ${chalk.cyan('"beta-*" or "feature-*"')}
${chalk.green('•')} Ticket IDs cannot be all zeros (e.g., ${chalk.red('DSW-000')} is not allowed)`;
            throw new Error(errorMessage);
        }
    } catch (error) {
        console.error(chalk.red('🚫 Invalid Branch Name 🚫'));
        console.error(error.message);
        process.exit(1);
    }
}

checkBranchName();
