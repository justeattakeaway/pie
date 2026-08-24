const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const isChecked = getInstanceProp('getEnum', 'Selected', {
    True: true,
    False: false,
});
const state = getInstanceProp('getPropertyValue', 'State');
const label = getInstanceProp('getString', '[𝐓] Label');

const isDisabled = state === 'Disabled';
const isError = state === 'Error';
const status = isError ? 'error' : 'default';

const props = [
    renderProp('value', label, ''),
    renderProp('checked', isChecked, false),
    renderProp('status', status, 'default'),
    renderProp('disabled', isDisabled, false),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
    ${label}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: 'pie-radio',
};
