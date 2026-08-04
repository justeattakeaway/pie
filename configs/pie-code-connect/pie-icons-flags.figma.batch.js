const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
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
        return `${componentBaseName}-${matchedFileName}`.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('');
    }

    return `${componentBaseName}-${matchedFileName}`;
}

function getComponentName (isReact) {
    return getFlagComponentName('icon-flag', isReact);
}

const importStatement = isReact
    ? `import { ${getComponentName(true)} } from "@justeattakeaway/pie-icons-webc/dist/react/${getComponentName(true)}.js"`
    : `import "@justeattakeaway/pie-icons-webc/dist/${getComponentName(true)}.js"`;

export default {
    example: figma.code`<${getComponentName(isReact)}></${getComponentName(isReact)}>`,
    imports: [importStatement],
    id: figma.batch.id,
};
