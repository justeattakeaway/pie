#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const findMonorepoRoot = require('../utils/find-monorepo-root');

const configPath = path.join(__dirname, 'lint-banned-patterns.config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const repoRoot = findMonorepoRoot(__dirname);

let hasMatches = false;

/**
 * Determines whether a given file path should be ignored based on the configuration file.
 */
function shouldExcludePath (filePath) {
    const relative = path.relative(repoRoot, filePath);
    return config.excludePaths.some((fragment) => relative.split(path.sep).includes(fragment) || relative.startsWith(fragment));
}

function walkDir (dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    entries.forEach((entry) => {
        const fullPath = path.join(dir, entry.name);
        if (shouldExcludePath(fullPath)) return;

        if (entry.isDirectory()) {
            walkDir(fullPath);
        } else if (entry.isFile()) {
            checkFile(fullPath);
        }
    });
}

/**
 * Checks for specific patterns in its content, and logs any matches along with their line numbers and messages.
 */
function checkFile (filePath) {
    const ext = path.extname(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    config.patterns.forEach((patternConfig) => {
        if (patternConfig.excludeExtensions && patternConfig.excludeExtensions.includes(ext)) return;

        lines.forEach((line, index) => {
            if (line.includes(patternConfig.pattern)) {
                const relative = path.relative(repoRoot, filePath);
                console.error(chalk.gray(`${relative}:${index + 1}`));
                console.error(chalk.green(`${line.trim()}`));
                console.error(chalk.red(`→ ${patternConfig.message}\n`));
                hasMatches = true;
            }
        });
    });
}

/**
 * Lints the monorepo for banned patterns based on the configuration file.
 * Recursively walks through the directory structure, checks each file for
 * specific patterns, and logs any matches along with their line numbers and messages.
 * Exits with a status code of 1 if any matches are found.
 */
function lintBannedPatterns () {
    walkDir(repoRoot);

    if (hasMatches) {
        process.exit(1);
    }
}

lintBannedPatterns();
