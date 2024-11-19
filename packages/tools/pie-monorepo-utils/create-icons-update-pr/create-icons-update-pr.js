/* eslint-disable camelcase */
const fs = require('fs');

function readFileAsText (filePath) {
    const fileExists = fs.existsSync(filePath);
    if (!fileExists) return null;

    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    return fileContent;
}

function readChangesetFile (filePath) {
    const fileContent = readFileAsText(filePath);

    const sections = fileContent.split('---')
        .map((section) => section.trim())
        .filter(Boolean);

    if (sections.length < 2) {
        throw new Error('The changeset file content looks incorrect. Ensure there are two `---` sections.');
    }

    return sections[1];
}

function getPrBody (changes) {
    return `## Changes

This PR updates icons.

${changes}

## Reviewer checklists (complete before approving)
### Reviewer 1 -
- [ ] I have reviewed the \`PIE Docs\` PR preview
- [ ] If there are visual test updates, I have reviewed them

### Reviewer 2 -
- [ ] I have reviewed the \`PIE Docs\` PR preview
- [ ] If there are visual test updates, I have reviewed them`;
}

/**
 * Check if issues file exists, read from it and format the text
 * @param {string} filePath issues json file path
 * @returns A string containing the issues already formatted as MD
 */
function readIconsIssues (filePath) {
    const fileContent = readFileAsText(filePath);
    if (!fileContent) return null;

    const jsonData = JSON.parse(fileContent);

    return `## 🚧🚧🚧 The following issues were found while updating the icons: 🚧🚧🚧

${jsonData.map((item) => `- ${item}`).join('\n')}`;
}

module.exports = async ({ github, branchName, changesetFilePath }) => {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

    // Check if it is a branch for updating icons
    if (!branchName.startsWith('dsw-000-update-icons-')) return;

    // Create a PR with the changeset file content
    const changesetStr = readChangesetFile(changesetFilePath);
    const body = getPrBody(changesetStr);
    const prPayload = {
        owner,
        repo,
        base: 'main',
        head: branchName,
        title: 'feat(pie-icons): DSW-000 Update icons from pie-iconography',
        body,
        draft: false,
    };
    const response = await github.rest.pulls.create(prPayload);
    const { data: { html_url, number } } = response;
    console.info(`✅ The PR with icon updates was created here 👉 ${html_url}`);

    // If there are issues, add a comment to the PR
    const iconsIssues = readIconsIssues('packages/tools/pie-icons/.issues/issues.json');
    if (!iconsIssues) return;

    await github.rest.issues.createComment({
        owner,
        repo,
        issue_number: number,
        body: iconsIssues,
    });
};
