const { execFileSync } = require('child_process');
const path = require('path');

function getRefIfExists (monorepoRoot, ref) {
    try {
        execFileSync('git', ['rev-parse', '--verify', '--quiet', ref], {
            encoding: 'utf-8',
            cwd: monorepoRoot,
        });

        return ref;
    } catch {
        return null;
    }
}

function getBaseRef (monorepoRoot) {
    let remoteHeadRef;

    try {
        remoteHeadRef = execFileSync('git', ['symbolic-ref', '--quiet', '--short', 'refs/remotes/origin/HEAD'], {
            encoding: 'utf-8',
            cwd: monorepoRoot,
        }).trim();
    } catch {
        remoteHeadRef = null;
    }

    const refCandidates = [
        remoteHeadRef,
        'origin/main',
        'origin/master',
        'main',
        'master',
    ].filter(Boolean);

    const matchedRef = refCandidates.find((ref) => getRefIfExists(monorepoRoot, ref));

    return matchedRef || null;
}

function getChangesetFilesInCurrentBranch (monorepoRoot) {
    const changesetFilePaths = new Set();
    const baseRef = getBaseRef(monorepoRoot);

    if (!baseRef) {
        throw new Error('Could not determine a base branch ref to diff against.');
    }

    /*
    Tracked files in the current branch:
    git diff --name-only <baseRef>...HEAD -- .changeset/*.md
        This command lists all files in the .changeset directory that are in the current branch but not in main.
            diff: Show changes between commits, commit and working tree, etc
            --name-only: Show only the name of each changed file
        <baseRef>...HEAD: The range of commits to compare
            -- .changeset/*.md: Only include .md files in the .changeset directory
    */
    try {
        const trackedChangesetFiles = execFileSync(
            'git',
            ['diff', '--name-only', `${baseRef}...HEAD`, '--', '.changeset/*.md'],
            { encoding: 'utf-8', cwd: monorepoRoot },
        );
        trackedChangesetFiles.split('\n').filter(Boolean).forEach((filePath) => changesetFilePaths.add(path.join(monorepoRoot, filePath)));
    } catch (err) {
        throw new Error(`Could not list tracked changeset files in current branch: ${err.message}`);
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
        const untrackedChangesetFiles = execFileSync(
            'git',
            ['ls-files', '--others', '--exclude-standard', '.changeset/*.md'],
            { encoding: 'utf-8', cwd: monorepoRoot },
        );
        untrackedChangesetFiles.split('\n').filter(Boolean).forEach((filePath) => changesetFilePaths.add(path.join(monorepoRoot, filePath)));
    } catch (err) {
        throw new Error(`Could not list untracked changeset files: ${err.message}`);
    }
    return Array.from(changesetFilePaths);
}

module.exports = getChangesetFilesInCurrentBranch;
