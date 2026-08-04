const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const iconFiles = require('./temp/file-names-payment-icons.js');

const getInstanceProp = createGetInstanceProp(figma);
const isReact = process.env.FRAMEWORK === 'react';

function getPaymentComponentName (componentBaseName, isReact) {
    const regexNonAlphaNumeric = /[^a-zA-Z0-9]/g;
    const paymentMethodName = getInstanceProp('getPropertyValue', 'Method');
    let normalizedMethod = paymentMethodName.replace(regexNonAlphaNumeric, '').toLowerCase();

    // Cater for exceptions as "ABN Amro" -> "abn"
    if (figma.batch.exceptionsMap) {
        if (Object.keys(figma.batch.exceptionsMap).includes(paymentMethodName)) {
            normalizedMethod = figma.batch.exceptionsMap[paymentMethodName].replace(regexNonAlphaNumeric, '').toLowerCase();
        }
    }

    const matchedFileName = iconFiles.find((fileName) => fileName.replace(regexNonAlphaNumeric, '').toLowerCase() === normalizedMethod);

    if (!matchedFileName) return 'icon-not-found';

    if (isReact) {
        return `${componentBaseName}-${matchedFileName}`.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('');
    }

    return `${componentBaseName}-${matchedFileName}`;
}

function getComponentName (isReact) {
    return getPaymentComponentName('icon-payment', isReact);
}

const importStatement = isReact
    ? `import { ${getComponentName(true)} } from "@justeattakeaway/pie-icons-webc/dist/react/${getComponentName(true)}.js"`
    : `import "@justeattakeaway/pie-icons-webc/dist/${getComponentName(true)}.js"`;

export default {
    example: figma.code`<${getComponentName(isReact)}></${getComponentName(isReact)}>`,
    imports: [importStatement],
    id: figma.batch.id,
};
