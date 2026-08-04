const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const toPascalCase = require('./utils/to-pascal-case.js');
const getIconImportStatement = require('./utils/get-icon-import-statement.js');
const iconFiles = require('./temp/file-names-flag-icons.js');

const getInstanceProp = createGetInstanceProp(figma);
const isReact = process.env.FRAMEWORK === 'react';

function getFlagComponentName (componentBaseName, isReact) {
    const regexNonAlphaNumeric = /[^a-zA-Z0-9]/g;
    const country = getInstanceProp('getPropertyValue', 'Countries');
    const normalizedCountry = country.replace(regexNonAlphaNumeric, '').toLowerCase();

    const matchedFileName = iconFiles.find((fileName) => fileName.replace(regexNonAlphaNumeric, '').toLowerCase() === normalizedCountry);

    if (!matchedFileName) return 'icon-not-found';

    if (isReact) {
        return toPascalCase(`${componentBaseName}-${matchedFileName}`);
    }

    return `${componentBaseName}-${matchedFileName}`;
}

function getComponentName (isReact) {
    return getFlagComponentName('icon-flag', isReact);
}

const importStatement = getIconImportStatement(getComponentName(true), isReact);

export default {
    example: figma.code`<${getComponentName(isReact)}></${getComponentName(isReact)}>`,
    imports: [importStatement],
    id: figma.batch.id,
};
