const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const variant = getInstanceProp('getEnum', 'Validation', {
    None: 'default',
    Error: 'error',
    Success: 'success',
});

const message = getInstanceProp('getString', '[𝐓] Assistive text');

const props = [
    renderProp('variant', variant, 'default'),
    renderProp('message', message, ''),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
