/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { execSync } from 'child_process';
import { readJSONSync } from 'fs-extra/esm';
import path from 'path';
import writeChangeset from '@changesets/write';
import { getIconCategory, findMonorepoRoot } from './helpers.mjs';
import { getConfig } from './config.mjs';

const config = getConfig();

/**
 * Returns an object grouping the icon file names by their category
 * @param {*} fileNamesArr Array of modified file names
 * @returns Object with groups of categories and files
 */
function groupIconsByCategories (fileNamesArr) {
    const iconsData = readJSONSync(path.join(findMonorepoRoot(), 'packages/tools/pie-icons/src/iconData.json'));
    const categoriesAndIcons = {};

    fileNamesArr.forEach((fileName) => {
        const category = getIconCategory(iconsData, fileName.replace('-large', ''));

        if (!category) {
            // TODO: Updating iconData.json should be done in a follow-up ticket
            if (!categoriesAndIcons.NEW) categoriesAndIcons.NEW = [];
            categoriesAndIcons.NEW.push(fileName);
        } else if (!categoriesAndIcons[category]) {
            categoriesAndIcons[category] = [fileName];
        } else {
            categoriesAndIcons[category].push(fileName);
        }
    });

    return categoriesAndIcons;
}

/**
 * Renders the changelog text, grouping by modification type and icon category name
 * @param {*} groupedChanges Object with changed files grouped by their modification type
 * @returns string Changelog text
 */
function renderChangelogText (groupedChanges) {
    const changelogLines = [];

    Object.keys(groupedChanges)
        .sort()
        .forEach((changeType) => {
            const changeTypeTitleCase = changeType.charAt(0).toUpperCase() + changeType.substring(1).toLowerCase();
            changelogLines.push('');
            changelogLines.push(`[${changeTypeTitleCase}] - Icons`);

            const fileNames = groupedChanges[changeType];
            const categoriesAndIcons = groupIconsByCategories(fileNames);

            Object.keys(categoriesAndIcons)
                .sort()
                .forEach((keyCategory) => {
                    changelogLines.push('');
                    changelogLines.push(`## ${keyCategory}`);

                    categoriesAndIcons[keyCategory]
                        .forEach((iconName) => changelogLines.push(`- ${iconName}`));
                });
        });

    return changelogLines.join('\n').trim();
}

/**
 * Generates a changeset file with specified changelog text
 * @param changelogText Summary of the changes
 * @param versionBumpType Version bump type: "major", "minor", or "patch"
 * @param packagesArr Array containing the names of packages for which the release information needs to be generated
 * @param changesetPath Path where the changeset file will be created
 * @returns The path to the changeset file that was created
 */
async function createChangeSetFile (changelogText, versionBumpType, packagesArr, changesetPath) {
    const changeset = {
        summary: changelogText,
        releases: packagesArr.map((packageName) => ({
            name: packageName, type: versionBumpType,
        })),
    };

    const changesetFileName = await writeChangeset(changeset, changesetPath);

    return path.join(changesetPath, '.changeset', `${changesetFileName}.md`);
}

/**
 * Creates a changeset file based on the list files and the type of modifications
 * @param {Object} - changedFilesGroups
 * @returns File path for the generated changeset file
 */
export async function createIconsChangeset (changedFilesGroups) {
    // define modification type
    const hasRenamedOrMovedFiles = changedFilesGroups.renamed || changedFilesGroups.removed;
    const versionBumpType = hasRenamedOrMovedFiles ? 'major' : 'minor';

    // render text
    const changelogText = renderChangelogText(changedFilesGroups);

    // write changeset file
    const { packages } = config;
    const monorepoRootPath = findMonorepoRoot();

    const changesetFilePath = await createChangeSetFile(changelogText, versionBumpType, packages, monorepoRootPath);
    return changesetFilePath;
}

/**
 * Creates a changeset file for pie-docs snapshot tests
 * @param {String} - pieDocsPath
 * @returns File path for the generated changeset file
 */
export async function createPieDocsChangeset (pieDocsPath) {
    const changes = execSync(`git status --short ${pieDocsPath}`).toString().trim();

    if (!changes) return null;

    const changelogText = '[Changed] - updated snapshots after icons update';
    const versionBumpType = 'patch';
    const packages = ['@justeattakeaway/pie-docs'];
    const monorepoRootPath = findMonorepoRoot();

    return createChangeSetFile(changelogText, versionBumpType, packages, monorepoRootPath);
}
