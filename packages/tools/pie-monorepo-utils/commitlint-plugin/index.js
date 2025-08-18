/**
 * Custom commitlint plugin for commit message validation
 * Provides better error messages for ticket validation
 */

const path = require('path');
const chalk = require('chalk');
const { TICKET_PATTERNS } = require('../git-hooks/git-hooks-utils.js');
const findMonorepoRoot = require('../utils/find-monorepo-root.js');

// eslint-disable-next-line import/no-dynamic-require
const czConfig = require(path.resolve(findMonorepoRoot(), '.cz-config.js'));

module.exports = {
    rules: {
        'match-pie-commit-pattern': (parsed, when = 'always') => {
            const { header } = parsed;

            const match = header.match(TICKET_PATTERNS.COMMIT);

            if (when === 'never') {
                return [match === null, 'Header should not match team pattern'];
            }

            if (match === null) {
                const validTypes = czConfig.types.map((t) => t.value).join(', ');

                return [
                    false,
                    `${chalk.red('❌ Invalid Commit Format\n\n') +
                    chalk.white('Expected: ') + chalk.cyan('type(scope): TICKET-123 title')}\n${
                    chalk.white('Got: ')}${chalk.yellow(`"${header}"`)}\n\n${
                    chalk.white('Example: ')}${chalk.cyan('feat(pie-button): DSW-456 add new variant')}\n${
                    chalk.white('Or: ')}${chalk.cyan('fix(pie-modal): ABC-789 resolve accessibility issue')}\n${
                    chalk.white('Or: ')}${chalk.cyan('docs(pie-storybook): JIRA-101 update component examples')}\n\n${
                    chalk.white('Valid types: ')}${chalk.green(validTypes)}\n${
                    chalk.white('Scope: ')}${chalk.green('use a valid package name (without @justeattakeaway/ prefix)')}\n${
                    chalk.white('Ticket: ')}${chalk.green('use any valid ticket format (e.g. DSW-*, ABC-*, JIRA-*, etc.)')}\n${
                    chalk.white('Note: ')}${chalk.red('Ticket IDs cannot be all zeros (e.g. DSW-000 is not allowed)')}\n\n${
                    chalk.blue('💡 Tip: Use ')}${chalk.cyan('yarn cz')}${chalk.blue(' to automatically generate a conforming commit message')}`
                ];
            }

            return [true];
        },
    },
};
