/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import path from 'path';
import { execSync } from 'child_process';
import { emptyDirSync, copySync } from 'fs-extra/esm';
import { globSync } from 'glob';

import { getConfig } from './config.mjs';

const config = getConfig();

function getIconFilesPaths (folderMapping, tempFolderPath, fileNameNormalizationFn) {
    const flattenArray = (acc, current) => {
        // Flatten arrays into single array
        acc = [...acc, ...current];
        return acc;
    };

    return folderMapping
        .map(({ from, to }) => {
            const fromPath = path.join(tempFolderPath, from);
            const toPath = to;

            // Gather src file paths
            return globSync(`${fromPath}/**/*.svg`)
                .map((srcFilePath) => {
                    const { base } = path.parse(srcFilePath);
                    const fileName = fileNameNormalizationFn(base);
                    const destFilePath = path.join(toPath, fileName);

                    return { srcFilePath, destFilePath };
                });
        })
        .reduce(flattenArray, []);
}

function normalizeFileName (fileName) {
    const normalizedFileName = fileName.trim()
        .toLowerCase()
        .replace(/&|_|—|–| /gm, '-');

    return normalizedFileName;
}

/**
 * Copy icon files from source to destination paths.
 * Files will be overwritten if they already exist on destination.
 */
function copyFiles (files) {
    const moveOptions = { overwrite: true };

    files.forEach(({ srcFilePath, destFilePath }) => copySync(srcFilePath, destFilePath, moveOptions));
}

/**
 * Pulls icons from pie-iconography
 * @param {string} tempFolderPath Path where pie-iconography will be temporarily cloned
 * @returns A list of modified or added files
 */
export function syncIcons (tempFolderPath) {
    console.info('starting icons sync');

    console.info('setup temporary folder');
    // Ensures that a directory exists and is empty to avoid potential leftovers
    emptyDirSync(tempFolderPath);

    console.info('clone pie-iconography repo');
    execSync(`git clone --depth=1 --branch=main https://github.com/justeattakeaway/pie-iconography.git ${tempFolderPath}`);

    console.info('sync icon assets');
    const filesArr = getIconFilesPaths(config.folderMapping, tempFolderPath, normalizeFileName);

    console.info('copy files to the corresponding folders');
    copyFiles(filesArr);

    return filesArr;
}
