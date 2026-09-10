const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const variant = getInstanceProp('getEnum', 'Type', {
    Neutral: 'neutral',
    Info: 'info',
    Warning: 'warning',
    Success: 'success',
    Error: 'error',
}) || 'neutral';

const message = getInstanceProp('getString', '[𝐓] Message') || '';
const isStrong = getInstanceProp('getBoolean', 'Strong');
const isDismissible = getInstanceProp('getBoolean', 'Close');
const isMultiline = getInstanceProp('getBoolean', 'Multi-line');

const hasAction = getInstanceProp('getBoolean', 'Button');
const leadingActionText = hasAction && getInstanceProp(['Button'], 'getString', '[𝐓] Label');

const props = [
    renderProp('variant', variant, 'neutral'),
    renderProp('message', message, ''),
    renderProp('isStrong', isStrong, false),
    renderProp('isDismissible', isDismissible, false),
    renderProp('isMultiline', isMultiline, false),
    hasAction ? renderProp('leadingAction', { text: leadingActionText }) : '',
    'isOpen',
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
