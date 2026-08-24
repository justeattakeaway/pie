const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const hasPrimaryActionsOnly = getInstanceProp('getBoolean', 'Legal Compliance');

const props = [
    renderProp('hasPrimaryActionsOnly', hasPrimaryActionsOnly, false),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName} ${props}>
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: 'pie-cookie-banner',
};
