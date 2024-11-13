import fs from 'fs';
import path from 'path';

/**
 * Get the string representing the icon category according with pie-docs/iconData.json
 * @param {Object} data Object parsed from iconData.json
 * @param {*} iconName The icon name we want the category for
 * @returns string Category of the icon
 */
export function getIconCategory (data, iconName) {
    let iconDisplayName = null;

    data.categories.forEach((category) => {
        category.icons.forEach((icon) => {
            if (icon.name === iconName) {
                iconDisplayName = category.displayName;
            }
        });
    });

    return iconDisplayName;
}

export function findMonorepoRoot (startPath = process.cwd(), expectedFile = 'yarn.lock') {
    let testedPath = startPath;
    let fileExists = false;

    do {
        fileExists = fs.existsSync(path.join(testedPath, expectedFile));
        if (!fileExists) testedPath = path.join(testedPath, '../');
    } while (fileExists === false);

    return testedPath;
}
