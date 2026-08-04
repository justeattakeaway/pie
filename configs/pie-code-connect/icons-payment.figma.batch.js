const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const toPascalCase = require('./utils/to-pascal-case.js');
const getIconImportStatement = require('./utils/get-icon-import-statement.js');
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
        return toPascalCase(`${componentBaseName}-${matchedFileName}`);
    }

    return `${componentBaseName}-${matchedFileName}`;
}

function getComponentName (isReact) {
    return getPaymentComponentName('icon-payment', isReact);
}

const importStatement = getIconImportStatement(getComponentName(true), isReact);

export default {
    example: figma.code`<${getComponentName(isReact)}></${getComponentName(isReact)}>`,
    imports: [importStatement],
    id: figma.batch.id,
};
