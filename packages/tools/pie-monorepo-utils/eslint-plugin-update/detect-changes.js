const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const { extractComponentData } = require('@justeattakeaway/eslint-plugin-snacks-pie-migration/extract-component-data');
const findMonorepoRoot = require('../utils/find-monorepo-root');
const { BRANCH_PREFIX, diffComponentData } = require('./shared');
const {
    appendToGithubOutput, appendToGithubEnv, appendJsonToGithubEnv, configureGitUser,
} = require('../utils/github-utils');

const ESLINT_PLUGIN_PACKAGE = '@justeattakeaway/eslint-plugin-snacks-pie-migration';

function hasDiff (diff) {
    return diff.added.length > 0 ||
        diff.removed.length > 0 ||
        diff.statusChanged.length > 0 ||
        diff.snacksChanged.length > 0;
}

/**
 * The function `detectChanges` automates the process of detecting changes in component data, creating
 * a new branch, updating data files, and pushing changes to a Git repository.
 * @returns either after skipping automation if no changes are detected in the components
 * `pieMetadata`, or after creating a new branch, updating data files, and pushing changes if
 * differences are detected.
 */
function detectChanges () {
    const monorepoRoot = findMonorepoRoot();
    const componentsPath = path.join(monorepoRoot, 'packages/components');
    const eslintPluginDir = path.join(monorepoRoot, 'packages/tools/eslint-plugin-snacks-pie-migration');
    const dataFilePath = path.join(eslintPluginDir, 'snacks-components-data.json');

    // Compare current component data with stored data to detect changes
    const currentData = extractComponentData(componentsPath);
    const storedData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    const diff = diffComponentData(storedData, currentData);
    if (!hasDiff(diff)) {
        console.info('No changes detected in component pieMetadata. Skipping automation.');
        appendToGithubOutput('HAS_CHANGES', 'false');
        return;
    }

    console.info('Changes detected:');
    console.info(JSON.stringify(diff, null, 2));

    // Create a new branch, update the data file, commit, and push changes
    const timestamp = Math.floor(Date.now() / 1000);
    const branchName = `${BRANCH_PREFIX}-${timestamp}`;
    const changesetFileName = `${BRANCH_PREFIX}-${timestamp}.md`;
    const changesetFilePath = path.join(monorepoRoot, '.changeset', changesetFileName);

    configureGitUser();

    execSync(`git checkout -b ${branchName}`);

    fs.writeFileSync(dataFilePath, `${JSON.stringify(currentData, null, 2)}\n`, 'utf8');

    const changesetContent = `---\n"${ESLINT_PLUGIN_PACKAGE}": minor\n---\n\nUpdate eslint rules for PIE migration\n`;
    fs.writeFileSync(changesetFilePath, changesetContent, 'utf8');

    execSync(`git add "${dataFilePath}" "${changesetFilePath}"`);
    execSync('git commit --no-verify -m "feat(eslint-plugin-snacks-pie-migration): Update eslint rules for PIE migration"');

    if (process.env.GITHUB_ACTIONS) {
        execSync(`git push --set-upstream origin ${branchName} --no-verify`);
    }

    // Set GitHub Action outputs and environment variables for downstream steps
    appendToGithubOutput('HAS_CHANGES', 'true');
    appendToGithubEnv('BRANCH_NAME', branchName);
    appendToGithubEnv('CHANGESET_FILE_PATH', changesetFilePath);
    appendJsonToGithubEnv('CHANGES_SUMMARY', diff);

    console.info(`✅ Branch created and pushed: ${branchName}`);
}

detectChanges();
