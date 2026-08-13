const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getIconSnippet = require('./utils/get-icon-snippet.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const isReact = process.env.FRAMEWORK === 'react';
const selectedComponentName = isReact ? componentNameReact : componentName;
const formLabelComponentNameWeb = 'pie-form-label';
const formLabelComponentNameReact = 'PieFormLabel';
const formLabelComponentName = isReact ? formLabelComponentNameReact : formLabelComponentNameWeb;

// Map figma props
const state = getInstanceProp('getPropertyValue', 'State');
const hasLeadingContent = getInstanceProp('getBoolean', 'Leading content');
const hasTrailingContent = getInstanceProp('getBoolean', 'Trailing content');

const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
});

const inputValue = getInstanceProp('getString', '[𝐓] String');
const placeholder = getInstanceProp('getString', '[𝐓] Placeholder');
const label = getInstanceProp(['Form label', 'Form label / Leading content / Label'], 'getString', '[𝐓] Label');
const assistiveText = getInstanceProp(['Assistive text'], 'getString', '[𝐓] Assistive text');
const status = getInstanceProp(['Assistive text'], 'getEnum', 'Validation', {
    Success: 'success',
    Error: 'error',
    Default: 'default',
});

const isDisabled = state === 'Disabled';
const isReadonly = state === 'Read only';

const formLabelSnippet = label ? `<${formLabelComponentName}>${label}</${formLabelComponentName}>` : '';

// Get leading icon instance from the nested 'Leading content' instance
const leadingIconInstance = hasLeadingContent && getInstanceProp(['Leading content'], 'getInstanceSwap', 'Icon');
const leadingIconSnippet = getIconSnippet(leadingIconInstance, (code) => code.replace('></', ' slot="leadingIcon"></'));
// const leadingContentString = hasLeadingContent && getInstanceProp(['Leading content'], 'getString', 'Leading text');

// Get trailing icon instance from the nested 'Trailing content' instance
const trailingIconInstance = hasTrailingContent && getInstanceProp(['Trailing content'], 'getInstanceSwap', 'Icon');
const trailingIconSnippet = getIconSnippet(trailingIconInstance, (code) => code.replace('></', ' slot="trailingIcon"></'));

const props = [
    renderProp('size', size, 'medium'),
    renderProp('placeholder', placeholder),
    renderProp('value', inputValue, ''),
    renderProp('status', status, 'default'),
    renderProp('assistiveText', assistiveText),
    renderProp('disabled', isDisabled, false),
    renderProp('readonly', isReadonly, false),
].filter(Boolean).join('\n    ');

// Define template
const template = figma.code`${formLabelSnippet}
<${selectedComponentName}
    ${props}>
    ${leadingIconSnippet}
    ${trailingIconSnippet}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [
        getImportStatement(componentName, componentNameReact),
        getImportStatement(formLabelComponentNameWeb, formLabelComponentNameReact),
    ],
    id: 'pie-text-input',
};
