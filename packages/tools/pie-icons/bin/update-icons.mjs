/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import path from 'path';
import { execSync } from 'child_process';
import {
    emptyDirSync, removeSync, readJSONSync, writeJsonSync,
} from 'fs-extra/esm';
import slugify from 'slugify';

import { getConfig } from './config.mjs';
import { syncIcons } from './sync-icons.mjs';
import { verifyIcons } from './verify-icons.mjs';
import { createIconsChangeset, createPieDocsChangeset } from './create-changeset.mjs';
import { findMonorepoRoot } from './helpers.mjs';

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

function kebabToTitle (string) {
    return string
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}

// Infers both `categoryDisplayName` and `categoryName` from the icon original file path
function getCategories (filesPaths) {
    return filesPaths.map((item) => {
        const { srcFilePath, destFilePath } = item;

        const folderMappingItem = config.folderMapping.find(({ from }) => srcFilePath.includes(from));
        let category = folderMappingItem && folderMappingItem.category;

        // Refine "All" category cases
        // The directory name after /All determines the category
        // E.g.: /All/Functionality/edit-large.svg
        if (category === 'All') {
            // get the parent directory name
            category = path.parse(srcFilePath).dir.split(path.sep).pop();

            // We need some more refinement as some categories don't map 1:1
            if (Object.keys(config.categoryNamesMap).includes(category)) {
                category = config.categoryNamesMap[category];
            }
        }

        const fileName = path.parse(destFilePath).name;
        const categoryDisplayName = category;
        const categoryName = slugify(category.replace(/ \(.*\)/, ''), { lower: true });
        const iconName = fileName;
        const iconDisplayName = kebabToTitle(fileName);

        return {
            ...item,
            iconDisplayName,
            iconName,
            categoryDisplayName,
            categoryName,
        };
    });
}

function updateIconData (iconsDataFilePath, addedFiles, allFilesPathsAndCategories) {
    const iconsData = readJSONSync(iconsDataFilePath);

    const sortFn = (a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (b.name > a.name) {
            return 1;
        }

        return 0;
    };

    addedFiles.forEach((_iconName) => {
        // bypass adding large icons
        if (_iconName.includes('-large')) return;

        // get icon data
        const {
            categoryName, categoryDisplayName, iconName, iconDisplayName,
        } = allFilesPathsAndCategories.find(({ destFilePath }) => destFilePath.includes(`/${_iconName}.`));

        const category = iconsData.categories.find(({ name }) => name === categoryName);

        // handle edge cases where the `oneSize` prop is needed
        const isOneSized = config.singleSizeCategories.includes(categoryName);

        const newIcon = {
            name: iconName,
            displayName: iconDisplayName,
            ...(isOneSized ? { oneSize: true } : {}),
        };

        if (!category) {
            // create the new category + icon
            const newCategory = {
                name: categoryName,
                displayName: categoryDisplayName,
                icons: [newIcon],
            };
            iconsData.categories.push(newCategory);

            // sort categories
            iconsData.categories.sort(sortFn);
        } else {
            category.icons.push(newIcon);

            // sort icons
            category.icons.sort(sortFn);
        }
    });

    writeJsonSync(iconsDataFilePath, iconsData, { spaces: 4 });
}

/**
 * Script for synchronizing icons from pie-iconography.
 * As long as there are icon files differences between this repo and pie-iconography, it will:
 * - pull the new and modified icons
 * - create and push a new dedicated branch
 * - create a changeset file
 * - validate the files and create a JSON file describing potential issues
 * - set environment variables so the GitHub workflow can resume its job based on what this script yields
 */
async function updateIcons () {
    const pieDocsTestsPath = '../../../apps/pie-docs/src/__tests__';

    // empty ".issues" folder to avoid leftovers from the previous run
    emptyDirSync(path.join(process.cwd(), '/.issues'));

    // fetch icons from "pie-iconongraphy" and copy them to "src/assets"
    const tempFolderPath = path.join(process.cwd(), '/.tmp-pie-iconography-copy');
    const allFilesPaths = syncIcons(tempFolderPath);
    // infer the icon category by the file parent folders
    const allFilesPathsAndCategories = getCategories(allFilesPaths);

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

        // add new icons to iconData.json file
        const changedFilesGroups = getChangedFilesGroups();
        console.info('updating iconData.json file');
        const iconsDataFilePath = path.join(findMonorepoRoot(), 'packages/tools/pie-icons/src/iconData.json');
        updateIconData(iconsDataFilePath, changedFilesGroups.added, allFilesPathsAndCategories);

        console.info('updating pie-docs snapshots');
        execSync('cd ../../../ && yarn test --filter=@justeattakeaway/pie-docs -- -u');

        console.info('creating changesets');
        const pieDocsChangesetFilePath = await createPieDocsChangeset(pieDocsTestsPath);
        const changesetFilePath = await createIconsChangeset(changedFilesGroups);

        // check if is running on GHA and setup the git user
        if (process.env.GITHUB_ACTIONS) {
            // configure git and push
            execSync('git config --global user.name "pie-design-system-bot"');
            execSync('git config --global user.email "username@users.noreply.github.com"');
        }

        const gitUpdatedPaths = [changesetFilePath, iconsDataFilePath, pieDocsTestsPath, pieDocsChangesetFilePath]
            .filter(Boolean).join(' ');

        // commit changes
        execSync(`git add ${gitUpdatedPaths} && git commit --no-verify -m "feat(pie-icons): DSW-000 update icons"`);

        // push if is running on GHA
        if (process.env.GITHUB_ACTIONS) {
            execSync(`git push --set-upstream origin ${branchName} --no-verify`);
            execSync(`echo "BRANCH_NAME=${branchName}" >> $GITHUB_ENV`);
            execSync(`echo "CHANGESET_FILE_PATH=${changesetFilePath}" >> $GITHUB_ENV`);
        }
    }

    // clean-up
    console.info('clean-up temporary folder');
    removeSync(tempFolderPath);
}

updateIcons();
