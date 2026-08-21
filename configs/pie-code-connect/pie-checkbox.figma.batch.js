const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const selection = getInstanceProp('getPropertyValue', 'Selection');
const checked = selection === 'Selected';
const indeterminate = selection === 'Partial';
const disabled = getInstanceProp('getPropertyValue', 'State') === 'Disabled';
const status = getInstanceProp('getEnum', 'Error', {
    True: 'error',
    False: 'default',
});
const labelPosition = getInstanceProp('getBoolean', 'Leading label') ? 'leading' : 'trailing';
const label = getInstanceProp('getString', '[𝐓] Label');
const assistiveText = getInstanceProp(['Assistive text'], 'getPropertyValue', '[𝐓] Assistive text') || '';

const props = [
    renderProp('checked', checked, false),
    renderProp('indeterminate', indeterminate, false),
    renderProp('disabled', disabled, false),
    renderProp('status', status, 'default'),
    renderProp('labelPosition', labelPosition, 'trailing'),
    renderProp('assistiveText', assistiveText, ''),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
    ${label}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
