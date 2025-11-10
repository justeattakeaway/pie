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
 * Get file content from a specific branch
 * @param {string} relativeFilePath - The relative path to the file from the repo root
 * @param {string} branch - The branch name to check the file content from
 * @returns
 */
function getFileStateFromBranch (relativeFilePath, branch = 'main') {
    try {
        // Get the merge base to find the actual parent branch
        const mergeBase = execSync(`git merge-base HEAD ${branch}`, { encoding: 'utf8' }).trim();
        return execSync(`git show ${mergeBase}:"${relativeFilePath}"`, { encoding: 'utf8', stdio: 'pipe' });
    } catch (error) {
        // If the file was added in this branch, this might fail, return empty string
        return '';
    }
}

module.exports = {
    isFileNew,
    getFileStateFromBranch,
};
