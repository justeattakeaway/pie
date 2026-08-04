const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const toPascalCase = require('./utils/to-pascal-case.js');
const getIconImportStatement = require('./utils/get-icon-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { baseName } = figma.batch;
const isReact = process.env.FRAMEWORK === 'react';

function getComponentName (isReact) {
    const fillSuffix = getInstanceProp('getEnum', 'Fill', { True: true, False: false }) ? '-filled' : '';
    const sizeSuffix = getInstanceProp('getEnum', 'Size', { Large: true, Small: false }) ? '-large' : '';
    const name = `${baseName}${fillSuffix}${sizeSuffix}`;

    if (isReact) {
        return toPascalCase(name);
    }

    return name;
}

const importStatement = getIconImportStatement(getComponentName(true), isReact);

export default {
    example: figma.code`<${getComponentName(isReact)}></${getComponentName(isReact)}>`,
    imports: [importStatement],
    id: figma.batch.id,
};
