const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const createGetInstanceTemplate = require('./utils/get-instance-template.js');
const renderProp = require('./utils/render-prop.js');
const getIconSnippet = require('./utils/get-icon-snippet.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const getInstanceTemplate = createGetInstanceTemplate(figma);
const { componentName, componentNameReact } = figma.batch;
const isReact = process.env.FRAMEWORK === 'react';
const selectedComponentName = isReact ? componentNameReact : componentName;

// Map figma props
const state = getInstanceProp('getPropertyValue', 'State');
const isDisabled = state === 'Disabled';
const isError = state === 'Error';

const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
});

const assistiveText = getInstanceProp(['Assistive text'], 'getString', '[𝐓] Assistive text') || '';
const status = isError ? 'error' : 'default';

const hasLeadingIcon = getInstanceProp('getBoolean', 'Leading icon');
const leadingIconInstance = hasLeadingIcon && getInstanceProp('getInstanceSwap', 'Replace leading icon');
const leadingIconSnippet = hasLeadingIcon && getIconSnippet(leadingIconInstance, 'leadingIcon');

const formLabelSnippet = getInstanceTemplate(['Form label']);

const props = [
    renderProp('size', size, 'medium'),
    renderProp('status', status, 'default'),
    renderProp('assistiveText', assistiveText, ''),
    renderProp('disabled', isDisabled, false),
].filter(Boolean).join('\n    ');

const template = figma.code`${formLabelSnippet || ''}
<${selectedComponentName}${formLabelSnippet ? ' id="the-input-id" aria-labelledby="the-label-id"' : ''}
    ${props}>
    ${leadingIconSnippet || ''}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
