const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact, iconType } = figma.batch;
const isReact = process.env.FRAMEWORK === 'react';

const isFilled = getInstanceProp('getEnum', 'Fill', { True: true, False: false });
const isLarge = getInstanceProp('getEnum', 'Size', { Large: true, Small: false });

function getFillSuffix (isReact) {
    if (isFilled) return isReact ? 'Filled' : '-filled';
    return '';
}

function getSizeSuffix (isReact) {
    if (isLarge) return isReact ? 'Large' : '-large';
    return '';
}

function getSocialIconComponentName (componentBaseName, isReact) {
    const isStatic = getInstanceProp('getBoolean', 'Colour');

    if (isStatic) {
        const staticSuffix = isReact ? 'Static' : '-static';
        return `${componentBaseName}${staticSuffix}${getSizeSuffix(isReact)}`;
    }

    const circleSuffix = isReact ? 'Circle' : '-circle';

    return `${componentBaseName}${circleSuffix}${getFillSuffix(isReact)}${getSizeSuffix(isReact)}`;
}

function getFlagComponentName (componentBaseName, isReact) {
    const country = getInstanceProp('getPropertyValue', 'Countries');
    const regexNonAlphaNumeric = /[^a-zA-Z0-9]/g;

    const flagName = isReact ? country.replace(regexNonAlphaNumeric, '') : `-${country.replace(regexNonAlphaNumeric, '-').toLowerCase()}`;

    return `${componentBaseName}${flagName}`;
}

function getPaymentComponentName (componentBaseName, isReact) {

}

// https://www.figma.com/design/k7gPJ4MZRUj4nlZK2hL0Op/-Core--Icons--PIE-3-?node-id=10207-11597&m=dev

function getComponentName (isReact) {
    const componentBaseName = isReact ? componentNameReact : componentName;

    if (iconType === 'social') return getSocialIconComponentName(componentBaseName, isReact);
    if (iconType === 'flag') return getFlagComponentName(componentBaseName, isReact);
    if (iconType === 'payment') return getPaymentComponentName(componentBaseName, isReact);

    // Regular icons
    return `${componentBaseName}${getFillSuffix(isReact)}${getSizeSuffix(isReact)}`;
}

const importStatement = isReact
    ? `import { ${getComponentName(true)} } from "@justeattakeaway/pie-icons-webc/dist/react/${getComponentName(true)}.js"`
    : `import "@justeattakeaway/pie-icons-webc/dist/${getComponentName(true)}.js"`;

export default {
    example: figma.code`<${getComponentName(isReact)}></${getComponentName(isReact)}>`,
    imports: [importStatement],
    id: figma.batch.id,
};
