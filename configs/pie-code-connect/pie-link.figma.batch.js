const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');
const getIconSnippet = require('./utils/get-icon-snippet.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const variant = getInstanceProp('getEnum', 'Type', {
    Default: 'default',
    'High visibility': 'high-visibility',
    Inverse: 'inverse',
    'Inverse light': 'inverse-light',
});

const size = getInstanceProp('getEnum', 'Size', {
    XSmall: 'xsmall',
    Small: 'small',
    Medium: 'medium',
});

const underline = getInstanceProp('getEnum', 'Underline', {
    Default: 'default',
    Reversed: 'reversed',
});

const isBold = getInstanceProp('getBoolean', 'Bold');
const state = getInstanceProp('getPropertyValue', 'State');
const hasVisited = state === 'Visited';

let iconSnippet;
let iconPlacement;

const hasLeadingIcon = getInstanceProp('getBoolean', 'Leading icon');
const hasTrailingIcon = getInstanceProp('getBoolean', 'Trailing icon');
const hasIcon = hasLeadingIcon || hasTrailingIcon;

if (hasIcon) {
    iconPlacement = hasLeadingIcon ? 'leading' : 'trailing';
    const iconInstance = getInstanceProp('getInstanceSwap', hasLeadingIcon ? 'Replace leading icon' : 'Replace trailing icon');
    iconSnippet = getIconSnippet(iconInstance, (code) => code.replace('></', ' slot="icon"></'));
}

const label = getInstanceProp('getString', '[𝐓] Link');

const props = [
    renderProp('size', size, 'medium'),
    renderProp('variant', variant, 'default'),
    renderProp('underline', underline, 'default'),
    renderProp('isBold', isBold, false),
    renderProp('hasVisited', hasVisited, false),
    renderProp('iconPlacement', iconPlacement),
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
