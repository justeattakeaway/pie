const { execSync } = require('child_process');

/**
 * Check if a file was added but not committed yet
 * @param {string} relativeFilePath - The relative path to the file from the repo root
 * @returns {boolean} True if the file is new (not in HEAD), false otherwise
 */
function isFileNew (relativeFilePath) {
    try {
        // File exists in HEAD
        execSync(`git cat-file -e HEAD:"${relativeFilePath}"`, { stdio: 'ignore' });
        return false;
    } catch {
        return true;
    }
}

/**
 * Get file content from a ref
 * @param {string} relativeFilePath - The relative path to the file from the repo root
 * @param {string} ref - SHA ref to check the file content from, give preference to this option when running on CI
 * @param {string} branch - Alternatively, the branch name to check the file content from, give preference to this option when running on local environment
 * @returns
 */
function getFileStateFromRef (relativeFilePath, ref, branch = 'main') {
    try {
        // If the base sha wasn't provided, try to guess with merge-base
        const sha = ref || execSync(`git merge-base HEAD ${branch}`, { encoding: 'utf8' }).trim();
        return execSync(`git show ${sha}:"${relativeFilePath}"`, { encoding: 'utf8', stdio: 'pipe' });
    } catch {
        // If the file was added in this branch, this might fail, return empty string
        return '';
    }
}

/**
 * Determines the default branch name in a Git repository by checking if 'main'
 * exists, otherwise defaults to 'master'.
 */
function getDefaultBranchName () {
    try {
        execSync('git show-ref --verify --quiet refs/heads/main', { stdio: 'ignore' });
        return 'main';
    } catch {
        return 'master';
    }
}

module.exports = {
    isFileNew,
    getFileStateFromRef,
    getDefaultBranchName,
};
