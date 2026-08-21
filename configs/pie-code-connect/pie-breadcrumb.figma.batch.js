const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact, isCompact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;
const selectedItemName = process.env.FRAMEWORK === 'react' ? 'PieBreadcrumbItem' : 'pie-breadcrumb-item';

const variant = getInstanceProp('getBoolean', 'Scrim') ? 'scrim' : 'default';

let template;

if (isCompact) {
    const destinationLabel = getInstanceProp('getString', '[𝐓] Destination page');

    const props = [
        renderProp('isCompact', true, false),
        renderProp('variant', variant, 'default'),
    ].filter(Boolean).join('\n    ');

    template = figma.code`<${selectedComponentName}
    ${props}>
    <${selectedItemName} href="/page-url">${destinationLabel}</${selectedItemName}>
</${selectedComponentName}>`;
} else {
    const label1 = getInstanceProp('getString', '[𝐓] Breadcrumb 1');
    const label2 = getInstanceProp('getString', '[𝐓] Breadcrumb 2');
    const label3 = getInstanceProp('getBoolean', 'Breadcrumb 3') ? getInstanceProp('getString', '[𝐓] Breadcrumb 3') : null;
    const label4 = getInstanceProp('getBoolean', 'Breadcrumb 4') ? getInstanceProp('getString', '[𝐓] Breadcrumb 4') : null;

    const hasCurrentPage = getInstanceProp('getBoolean', 'Current page');
    const currentPageLabel = hasCurrentPage ? getInstanceProp('getString', '[𝐓] Current page') : null;
    const hideCurrentPage = !hasCurrentPage;

    const props = [
        renderProp('variant', variant, 'default'),
        renderProp('hideCurrentPage', hideCurrentPage, false),
    ].filter(Boolean).join('\n    ');

    const items = [
        `<${selectedItemName} href="/page-1">${label1}</${selectedItemName}>`,
        `<${selectedItemName} href="/page-2">${label2}</${selectedItemName}>`,
        label3 ? `<${selectedItemName} href="/page-3">${label3}</${selectedItemName}>` : '',
        label4 ? `<${selectedItemName} href="/page-4">${label4}</${selectedItemName}>` : '',
        hasCurrentPage ? `<${selectedItemName}>${currentPageLabel}</${selectedItemName}>` : '',
    ].filter(Boolean).join('\n    ');

    template = figma.code`<${selectedComponentName}
    ${props}>
    ${items}
</${selectedComponentName}>`;
}

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
