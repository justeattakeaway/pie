const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const findMonorepoRoot = require('../utils/find-monorepo-root');

const configPath = path.join(__dirname, 'lint-banned-patterns.config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const repoRoot = findMonorepoRoot(__dirname);

let hasMatches = false;

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

walkDir(repoRoot);

if (hasMatches) {
    process.exit(1);
}
