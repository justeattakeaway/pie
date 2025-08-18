const { execSync } = require('child_process');
const path = require('path');
const chalk = require('chalk');

function getChangesetFilesInCurrentBranch (monorepoRoot) {
    const changesetFilePaths = new Set();
    /*
  Tracked files in the current branch:
    git diff --name-only origin/main...HEAD -- .changeset/*.md
    This command lists all files in the .changeset directory that are in the current branch but not in main.
      diff: Show changes between commits, commit and working tree, etc
      --name-only: Show only the name of each changed file
      origin/main...HEAD: The range of commits to compare
      -- .changeset/*.md: Only include .md files in the .changeset directory
  */
    try {
        const trackedChangesetFiles = execSync(
            'git diff --name-only origin/main...HEAD -- .changeset/*.md',
            { encoding: 'utf-8', cwd: monorepoRoot },
        );
        trackedChangesetFiles.split('\n').filter(Boolean).forEach((filePath) => changesetFilePaths.add(path.join(monorepoRoot, filePath)));
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(chalk.red('Could not list tracked changeset files in current branch:', err.message));
        process.exit(1);
    }
    /*
  Untracked changeset files:
    git ls-files --others --exclude-standard .changeset/*.md
    This command lists all files in the .changeset directory that are not tracked by Git.
      --others: Include untracked files
      --exclude-standard: Exclude standard Git ignore patterns
      .changeset/*.md: Only include .md files in the .changeset directory
  */
    try {
        const untrackedChangesetFiles = execSync(
            'git ls-files --others --exclude-standard .changeset/*.md',
            { encoding: 'utf-8', cwd: monorepoRoot },
        );
        untrackedChangesetFiles.split('\n').filter(Boolean).forEach((filePath) => changesetFilePaths.add(path.join(monorepoRoot, filePath)));
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(chalk.red('Could not list untracked changeset files:', err.message));
        process.exit(1);
    }
    return Array.from(changesetFilePaths);
}

module.exports = getChangesetFilesInCurrentBranch;
