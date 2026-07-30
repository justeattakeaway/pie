const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const isReact = process.env.FRAMEWORK === 'react';

const iconPrefix = isReact ? 'Icon' : 'icon-';
const isFilled = getInstanceProp('getEnum', 'Fill', { True: true, False: false });
const isLarge = getInstanceProp('getEnum', 'Size', { Large: true, Small: false });

function getFillSuffix (isReact) {
    if (isFilled) {
        return isReact ? 'Filled' : '-filled';
    }
    return '';
}

function getSizeSuffix (isReact) {
    if (isLarge) {
        return isReact ? 'Large' : '-large';
    }
    return '';
}

function getComponentName (isReact) {
    return `${isReact ? componentNameReact : componentName}${getFillSuffix(isReact)}${getSizeSuffix(isReact)}`;
}

const importStatement = isReact
    ? `import { ${getComponentName(isReact)} } from "@justeattakeaway/pie-icons-webc/dist/react/${getComponentName(isReact)}.js"`
    : `import '@justeattakeaway/pie-icons-webc/dist/${getComponentName(true)}.js'`;

export default {
    example: figma.code`<${iconPrefix}${getComponentName(isReact)}></${iconPrefix}${getComponentName(isReact)}>`,
    imports: [importStatement],
    id: figma.batch.id,
};
