/**
 * Open GitHub PR for a new release
 */
import { execSync } from 'child_process';
import open from 'open';

function getRepoBaseUrl () {
    const remoteUrl = execSync('git config --get remote.origin.url').toString().trim();

    return remoteUrl
    .replace(':', '/')
    .replace('git@', 'https://')
    .replace('.git', '')
    .trim();
}

export function openPr (branchName, title, body) {
    const repoBaseUrl = getRepoBaseUrl();
    const url = `${repoBaseUrl}/compare/main...${branchName}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    open(url);
}
