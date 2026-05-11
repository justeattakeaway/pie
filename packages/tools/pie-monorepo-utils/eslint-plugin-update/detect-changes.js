const path = require('path');
const fs = require('fs');
const { execFileSync, execSync } = require('child_process');

const { extractComponentData } = require('@justeattakeaway/eslint-plugin-snacks-pie-migration/extract-component-data');
const findMonorepoRoot = require('../utils/find-monorepo-root');

const ESLINT_PLUGIN_PACKAGE = '@justeattakeaway/eslint-plugin-snacks-pie-migration';
const BRANCH_PREFIX = 'update-eslint-snacks-plugin';

function diffComponentData (stored, current) {
    const diff = {
        added: [],
        removed: [],
        statusChanged: [],
        snacksChanged: [],
    };

    const allKeys = new Set([...Object.keys(stored), ...Object.keys(current)]);

    allKeys.forEach((key) => {
        const inStored = stored[key];
        const inCurrent = current[key];

        if (!inStored) {
            diff.added.push({ snacksComponent: key, ...inCurrent });
        } else if (!inCurrent) {
            diff.removed.push({ snacksComponent: key, ...inStored });
        } else if (inStored.status !== inCurrent.status) {
            diff.statusChanged.push({
                snacksComponent: key,
                piePackage: inCurrent.piePackage,
                from: inStored.status,
                to: inCurrent.status,
            });
        } else if (inStored.piePackage !== inCurrent.piePackage) {
            diff.snacksChanged.push({
                snacksComponent: key,
                from: inStored.piePackage,
                to: inCurrent.piePackage,
                status: inCurrent.status,
            });
        }
    });

    return diff;
}

function hasDiff (diff) {
    return diff.added.length > 0 ||
        diff.removed.length > 0 ||
        diff.statusChanged.length > 0 ||
        diff.snacksChanged.length > 0;
}

function appendToGithubOutput (key, value) {
    if (!process.env.GITHUB_OUTPUT) return;
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
}

function appendToGithubEnv (key, value) {
    if (!process.env.GITHUB_ENV) return;
    fs.appendFileSync(process.env.GITHUB_ENV, `${key}=${value}\n`);
}

function appendJsonToGithubEnv (key, value) {
    if (!process.env.GITHUB_ENV) return;
    fs.appendFileSync(process.env.GITHUB_ENV, `${key}<<EOF\n${JSON.stringify(value)}\nEOF\n`);
}

function configureGitUser () {
    if (!process.env.GITHUB_ENV) return;

    const gitUserName = process.env.GIT_USER_NAME || 'github-actions[bot]';
    const gitUserEmail = process.env.GIT_USER_EMAIL || '41898282+github-actions[bot]@users.noreply.github.com';
    execFileSync('git', ['config', '--global', 'user.name', gitUserName]);
    execFileSync('git', ['config', '--global', 'user.email', gitUserEmail]);
}

function detectChanges () {
    const monorepoRoot = findMonorepoRoot();
    const componentsPath = path.join(monorepoRoot, 'packages/components');
    const eslintPluginDir = path.join(monorepoRoot, 'packages/tools/eslint-plugin-snacks-pie-migration');
    const dataFilePath = path.join(eslintPluginDir, 'snacks-components-data.json');

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

    appendToGithubOutput('HAS_CHANGES', 'true');
    appendToGithubEnv('BRANCH_NAME', branchName);
    appendToGithubEnv('CHANGESET_FILE_PATH', changesetFilePath);
    appendJsonToGithubEnv('CHANGES_SUMMARY', diff);

    console.info(`✅ Branch created and pushed: ${branchName}`);
}

detectChanges();
