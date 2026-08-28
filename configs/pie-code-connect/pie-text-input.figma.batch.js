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

const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
});

const contentType = getInstanceProp('getString', 'Content');
const value = contentType === 'Filled' ? getInstanceProp('getString', '[𝐓] String') : '';
const placeholder = contentType === 'Placeholder' ? getInstanceProp('getString', '[𝐓] Placeholder') : '';
const assistiveText = getInstanceProp(['Assistive text'], 'getString', '[𝐓] Assistive text') || '';
const status = getInstanceProp(['Assistive text'], 'getEnum', 'Validation', {
    Success: 'success',
    Error: 'error',
    Default: 'default',
}) || 'default';

const isDisabled = state === 'Disabled';
const isReadonly = state === 'Read only';

const formLabelSnippet = getInstanceTemplate(['Form label']);

// Get leading and trailing content code snippets

const hasLeadingContent = getInstanceProp('getBoolean', 'Leading content');
const leadingContentType = hasLeadingContent && getInstanceProp(['Leading content'], 'getString', 'Type');
let leadingContentSnippet = '';
if (leadingContentType === 'Icon') {
    const leadingIconInstance = getInstanceProp(['Leading content'], 'getInstanceSwap', 'Icon');
    // replace text to have the slot assigned
    leadingContentSnippet = getIconSnippet(leadingIconInstance, (code) => code.replace('></', ' slot="leadingIcon"></'));
} else if (leadingContentType === 'Alphanumeric') {
    leadingContentSnippet = '<span slot="leadingText">#</span>';
}

const hasTrailingContent = getInstanceProp('getBoolean', 'Trailing content');
const trailingContentType = hasTrailingContent && getInstanceProp(['Trailing content'], 'getString', 'Type');
let trailingContentSnippet = '';
if (trailingContentType === 'Icon') {
    const trailingIconInstance = getInstanceProp(['Trailing content'], 'getInstanceSwap', 'Icon');
    // replace text to have the slot assigned
    trailingContentSnippet = getIconSnippet(trailingIconInstance, (code) => code.replace('></', ' slot="trailingIcon"></'));
} else if (trailingContentType === 'Alphanumeric') {
    trailingContentSnippet = '<span slot="trailingText">#</span>';
} else if (trailingContentType === 'Payment method') {
    trailingContentSnippet = '<svg-asset-for-the-payment-method slot="trailingIcon"></svg-asset-for-the-payment-method>';
}

const props = [
    renderProp('size', size, 'medium'),
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
    ${formLabelSnippet ? 'id="the-input-id" aria-labelledby="the-label-id"' : ''}
    ${props}>
    ${leadingContentSnippet}
    ${trailingContentSnippet}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
