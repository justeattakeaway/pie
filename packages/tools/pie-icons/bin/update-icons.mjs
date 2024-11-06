/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import path from 'path';
import { execSync } from 'child_process';
import { emptyDirSync, removeSync } from 'fs-extra/esm';

import { getConfig } from './config.mjs';
import { syncIcons } from './sync-icons.mjs';
import { verifyIcons } from './verify-icons.mjs';
import { createChangeset } from './create-changeset.mjs';

const config = getConfig();

function getChangedFilePaths (startingPath, cwd) {
    const changesStr = execSync(`git status --short ${startingPath}`).toString().trim();
    if (changesStr === '') return [];

    return changesStr.split('\n').map((line) => path.join(cwd, line.substring(3).trim()));
}

/**
 * Returns an object with changed files grouped by their modification type
 * (added, modified, renamed or removed)
 */
function getChangedFilesGroups () {
    const changeTypeMap = {
        A: 'added',
        M: 'updated',
        R: 'renamed',
        D: 'removed',
    };
    const assetsPath = path.join(process.cwd(), '/src/assets');
    const changes = execSync(`git status --short ${assetsPath}`).toString().trim();
    if (changes === '') return {};

    const groupedChanges = changes.split('\n')
        .reduce((acc, line) => {
            // Group changes by modification type
            const gitModificationType = line.substring(0, 3).trim();
            const modificationType = changeTypeMap[gitModificationType];
            const filePath = line.substring(3).trim();
            const { name } = path.parse(filePath);

            if (!modificationType) return acc; // Just in case it's empty

            if (acc[modificationType]) {
                acc[modificationType].push(name);
            } else {
                acc[modificationType] = [name];
            }

            return acc;
        }, {});

    return groupedChanges;
}

/**
 * Script for synchronizing icons from pie-iconography.
 * It also validates the file names and content and generates a changeset file.
 * Potential icon files issues are stored in the .issues folder.
 */
async function updateIcons () {
    // empty ".issues" folder to avoid leftovers from the previous run
    emptyDirSync(path.join(process.cwd(), '/.issues'));

    // fetch icons from "pie-iconongraphy" and copy them to "src/assets"
    const tempFolderPath = path.join(process.cwd(), '/.tmp-pie-iconography-copy');
    const allFilesPaths = syncIcons(tempFolderPath);

    // git add them so it makes easier to track what changed with "git status --short"
    console.info('git add files');
    execSync(`git add ${allFilesPaths.map(({ destFilePath }) => destFilePath).join(' ')}`);

    // get list of new or modified files
    const modifiedFilesPaths = getChangedFilePaths(config.assetsPath, process.cwd());

    if (modifiedFilesPaths.length) {
        // verify files for issues
        console.info('verifying files');
        const issuesFilePath = verifyIcons(modifiedFilesPaths, path.join(process.cwd(), '.issues'));
        if (issuesFilePath) console.info(`🚨🚨🚨 Issues were stored at "${issuesFilePath}"`);

        // create and checkout branch
        const branchName = `dsw-000-update-icons-${Math.floor(Date.now() / 1000)}`;
        execSync(`git checkout -b ${branchName}`);

        // create changeset file
        console.info('create icons changeset');
        const changedFilesGroups = getChangedFilesGroups();
        const changesetFilePath = await createChangeset(changedFilesGroups);

        // check if is running on GHA and setup the git user
        if (process.env.GITHUB_ACTIONS) {
            // configure git and push
            execSync('git config --global user.name "Continuous Integration"');
            execSync('git config --global user.email "username@users.noreply.github.com"');
        }

        // commit icons and changeset file
        execSync(`git add ${changesetFilePath} && git commit -m "feat(pie-icons): DSW-000 update icons"`);

        // push if is running on GHA
        if (process.env.GITHUB_ACTIONS) {
            execSync(`git push --set-upstream origin ${branchName}`);
            execSync(`echo "BRANCH_NAME=${branchName}" >> $GITHUB_ENV`);
            execSync(`echo "CHANGESET_FILE_PATH=${changesetFilePath}" >> $GITHUB_ENV`);
        }
    }

    // clean-up
    console.info('clean-up temporary folder');
    removeSync(tempFolderPath);
}

updateIcons();
