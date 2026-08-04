const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');

const getInstanceProp = createGetInstanceProp(figma);
const { baseName } = figma.batch;
const isReact = process.env.FRAMEWORK === 'react';

function getComponentName (isReact) {
    const fillSuffix = getInstanceProp('getEnum', 'Fill', { True: true, False: false }) ? '-filled' : '';
    const sizeSuffix = getInstanceProp('getEnum', 'Size', { Large: true, Small: false }) ? '-large' : '';
    const name = `${baseName}${fillSuffix}${sizeSuffix}`;

    if (isReact) {
        return name.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('');
    }

    return name;
}

const importStatement = isReact
    ? `import { ${getComponentName(true)} } from "@justeattakeaway/pie-icons-webc/dist/react/${getComponentName(true)}.js"`
    : `import "@justeattakeaway/pie-icons-webc/dist/${getComponentName(true)}.js"`;

export default {
    example: figma.code`<${getComponentName(isReact)}></${getComponentName(isReact)}>`,
    imports: [importStatement],
    id: figma.batch.id,
};
