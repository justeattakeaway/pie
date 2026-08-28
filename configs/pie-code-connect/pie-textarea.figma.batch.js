const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const createGetInstanceTemplate = require('./utils/get-instance-template.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const getInstanceTemplate = createGetInstanceTemplate(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const state = getInstanceProp('getPropertyValue', 'State');
const isDisabled = state === 'Disabled';
const isReadonly = state === 'Read-Only';
const contentType = getInstanceProp('getString', 'Content');
const value = contentType === 'With value' ? getInstanceProp('getString', '[𝐓] String') : '';
const placeholder = contentType === 'Placeholder' ? getInstanceProp('getString', '[𝐓] Placeholder') : '';
const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
});
const resize = getInstanceProp('getEnum', 'Resize', {
    Auto: 'auto',
    Manual: 'manual',
});
const hasAssistiveText = getInstanceProp('getBoolean', 'Assistive text');
const assistiveText = (hasAssistiveText && getInstanceProp(['Assistive text'], 'getString', '[𝐓] Assistive text')) || '';
const status = hasAssistiveText ? getInstanceProp(['Assistive text'], 'getEnum', 'Validation', {
    Success: 'success',
    Error: 'error',
    None: 'default',
}) : 'default';

const formLabelSnippet = getInstanceTemplate(['Form label']);

const props = [
    renderProp('size', size, 'medium'),
    renderProp('resize', resize, 'auto'),
    renderProp('placeholder', placeholder, ''),
    renderProp('value', value, ''),
    renderProp('status', status, 'default'),
    renderProp('assistiveText', assistiveText, ''),
    renderProp('disabled', isDisabled, false),
    renderProp('readonly', isReadonly, false),
].filter(Boolean).join('\n    ');

// Define template
const template = figma.code`${formLabelSnippet || ''}
<${selectedComponentName}
    ${formLabelSnippet ? 'id="the-textarea-id" aria-labelledby="the-label-id"' : ''}
    ${props}>
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
