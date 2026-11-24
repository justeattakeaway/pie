const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const totalPages = parseInt(getInstanceProp('getString', '[𝐓] Last page'), 10) || 10;

// Figma only offers First/Middle/Last, so Middle is mapped to a representative page in the range.
const currentPage = getInstanceProp('getEnum', 'Selection', {
    First: 1,
    Middle: Math.ceil(totalPages / 2),
    Last: totalPages,
}) || 1;

// `disabled` is not mapped because the Figma component set has no Disabled property.
const props = [
    renderProp('currentPage', currentPage, 1),
    renderProp('totalPages', totalPages, 1),
].filter(Boolean).join('\n    ');

// Define template
const template = figma.code`<${selectedComponentName}
    ${props}>
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
