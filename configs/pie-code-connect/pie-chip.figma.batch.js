const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getIconSnippet = require('./utils/get-icon-snippet.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact, type: chipType } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const state = getInstanceProp('getPropertyValue', 'State');
const isDisabled = state === 'Disabled';
const isLoading = state === 'Loading';
const isSelected = getInstanceProp('getBoolean', 'Selected');

const variant = getInstanceProp('getEnum', 'Variant', {
    'N/A': 'default',
    Default: 'default',
    Outline: 'outline',
    Ghost: 'ghost',
    Translucent: 'translucent',
});

const label = getInstanceProp('getString', '[𝐓] Label');

const hasLeadingIcon = getInstanceProp('getBoolean', 'Leading icon');
const iconInstance = hasLeadingIcon && getInstanceProp('getInstanceSwap', 'Replace leading icon');
const iconSnippet = hasLeadingIcon && getIconSnippet(iconInstance, 'icon');

// Selection chip maps to type="checkbox"; action chip uses the default "button"
const isCheckbox = chipType === 'selection';
const type = isCheckbox ? 'checkbox' : 'button';
// Only "selection" chips always support dismissal, also only when isSelected is true
const isDismissible = isSelected && chipType === 'selection' && getInstanceProp('getBoolean', 'Removable');

const props = [
    renderProp('variant', variant, 'default'),
    renderProp('type', type, 'button'),
    renderProp('disabled', isDisabled, false),
    renderProp('isSelected', isSelected, false),
    renderProp('isLoading', isLoading, false),
    renderProp('isDismissible', isDismissible, false),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
    ${iconSnippet || ''}
    ${label}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
