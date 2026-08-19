const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const toPascalCase = require('./utils/to-pascal-case.js');
const getIconImportStatement = require('./utils/get-icon-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { baseName } = figma.batch;
const isReact = process.env.FRAMEWORK === 'react';

function getComponentName (isReact) {
    const fillSuffix = getInstanceProp('getEnum', 'Fill', { True: '-filled', False: '' }) || '';
    const selectedSuffix = getInstanceProp('getEnum', 'Selected', { True: '-selected', False: '-unselected' }) || '';
    const sizeSuffix = getInstanceProp('getEnum', 'Size', { Large: '-large', Small: '' }) || '';

    let name = `${baseName}${sizeSuffix}`;
    if (fillSuffix) {
        // Standard pattern for all icons
        name = `${baseName}${fillSuffix}${sizeSuffix}`;
    } else if (selectedSuffix) {
        // Exception pattern for Control icons (checkbox and radio)
        name = `${baseName}${selectedSuffix}${sizeSuffix}`;
    }

    if (isReact) {
        return toPascalCase(name);
    }

    return name;
}

const importStatement = getIconImportStatement(getComponentName(true), isReact);

export default {
    example: figma.code`<${getComponentName(isReact)}></${getComponentName(isReact)}>`,
    imports: [importStatement],
    id: figma.batch.baseName,
};
