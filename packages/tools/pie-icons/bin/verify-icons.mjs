/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import fs from 'fs';
import path from 'path';
import isSvg from 'is-svg';
import { ensureDirSync, readJSONSync, writeJsonSync } from 'fs-extra/esm';

import { getIconCategory, findMonorepoRoot } from './helpers.mjs';

/**
 * Checks if the files do already exist in pie-docs iconData.json
 * @param {Array} files Array of file paths
 * @returns Array with messages describing the issues
 */
function validateFileIsInIconsData (files) {
    const iconsData = readJSONSync(path.join(findMonorepoRoot(), 'apps/pie-docs/src/iconData.json'));

    const issues = files
        .map((filePath) => {
            const { name } = path.parse(filePath);

            // Perform file name validation
            const category = getIconCategory(iconsData, name);

            return !category ? `The file "${name}" is new as it cannot be found on "pie-docs/src/iconData.json", it might be worth updating the JSON file otherwise pie-docs will not render the new icon.` : null;
        })
        .filter(Boolean);

    return issues;
}

/**
 * Checks the content of SVG files for invalid tags such as
 * "<defs>" or "<clipPath>" and throws an error if any are found
 * @param {Array} files Array of file paths
 * @returns Array with messages describing the issues
 */
function validateFilesContent (files) {
    // Only regular icons, not logos, payment or social needs checking
    const onlyFilesInAssets = (filePath) => {
        // Gets the name of the directory that contains the file (not the whole path)
        const [directParentDirname] = path.parse(filePath).dir.split('/').slice(-1);

        return directParentDirname === 'assets';
    };

    const onlyFilesWithUnwantedTags = (filePath) => {
        // Perform file content validation
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
        const matches = fileContent.match(/<defs|<clipPath/gm);

        return !!matches;
    };

    const issues = files
        .filter(onlyFilesInAssets)
        .filter(onlyFilesWithUnwantedTags)
        .map((filePath) => {
            const { base } = path.parse(filePath);
            return `The file "${base}" contains invalid svg tags such as "<defs>" or "<clipPath>"`;
        });

    return issues;
}

/**
 * Validate if the files are SVGs
 * @param {Array} files Array of file paths
 * @returns Array with messages describing the issues
 */
function validateSVGs (files) {
    const issues = files
        .filter((filePath) => {
            const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
            return !isSvg(fileContent);
        })
        .map((filePath) => {
            const { base } = path.parse(filePath);
            return `The file "${base}" doesn't look like to be a valid SVG file"`;
        });

    return issues;
}

/**
 * Validate the file names
 * @param {Array} files Array of file paths
 * @returns Array with messages describing the issues
 */
function validateFileNames (files) {
    const issues = files
        .map((filePath) => {
            const { base } = path.parse(filePath);

            // Ensure file name doesnt start with a number
            const startsWithNumber = base.match(/^[0-9]/gm);

            return startsWithNumber ? `The file "${base}" starts with a number and it's encouraged to avoid such pattern` : null;
        })
        .filter(Boolean);

    return issues;
}

function storeIssues (issues, issuesFolderPath) {
    if (issues.length === 0) return null;

    // Create directory for issues if it doesn't exist
    ensureDirSync(issuesFolderPath);

    // Write issues file
    const filePath = path.join(issuesFolderPath, 'issues.json');
    writeJsonSync(filePath, issues, { spaces: 2 });

    return filePath;
}

function checkFilesIssues (files) {
    const issues = [
        ...validateFileIsInIconsData(files),
        ...validateFileNames(files),
        ...validateSVGs(files),
        ...validateFilesContent(files),
    ];

    return issues;
}

/**
 * Verify new icon files consistency
 * @param {Array} changedFilesPaths Array of icon file paths
 * @param {string} issuesFolderPath Where to store the file listing the found issues
 * @returns The path to the file listing the found issues
 */
export function verifyIcons (changedFilesPaths, issuesFolderPath) {
    // Check and store issues for the GitHub workflow
    const issues = checkFilesIssues(changedFilesPaths);
    return storeIssues(issues, issuesFolderPath);
}
