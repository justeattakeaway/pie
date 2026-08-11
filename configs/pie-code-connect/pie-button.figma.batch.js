const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const instance = figma.selectedInstance;

const state = getInstanceProp('getPropertyValue', 'State');
const label = getInstanceProp('getString', '[𝐓] Label');
const hasLeadingIcon = getInstanceProp('getBoolean', 'Leading icon');
const hasTrailingIcon = getInstanceProp('getBoolean', 'Trailing icon');
const iconPlacement = hasTrailingIcon && !hasLeadingIcon ? 'trailing' : 'leading';

const variant = getInstanceProp('getEnum', 'Variant', {
    Primary: 'primary',
    'Primary - alternative': 'primary-alternative',
    'Primary - alternative dark': 'primary-alternative-dark',
    Secondary: 'secondary',
    Outline: 'outline',
    Ghost: 'ghost',
    'Ghost secondary': 'ghost',
    'Ghost dark': 'ghost-dark',
    Inverse: 'inverse',
    'Inverse outline': 'outline-inverse',
    'Inverse ghost': 'ghost-inverse',
    'Inverse ghost light': 'ghost-inverse-light',
    Destructive: 'destructive',
    'Destructive ghost': 'destructive-ghost',
});

const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    'Small - Expressive': 'small-expressive',
    'Small - Productive': 'small-productive',
    XSmall: 'xsmall',
});

const isDisabled = state === 'Disabled';
const isLoading = state === 'Loading';

// Get icon instance
const iconSwap = iconPlacement === 'trailing'
    ? instance.getInstanceSwap('Replace trailing icon')
    : instance.getInstanceSwap('Replace leading icon');
// Check if icon exists
const iconNode = iconSwap && iconSwap.type === 'INSTANCE' && iconSwap.hasCodeConnect() ? iconSwap : null;
const iconSnippet = iconNode ? iconNode.executeTemplate().example : '';
// Add slot prop to icon snippet
if (iconSnippet && iconSnippet[0] && iconSnippet[0].code) {
    iconSnippet[0].code = iconSnippet[0].code.replace('></', ' slot="icon"></');
}

// Define template
const template = figma.html`
<${selectedComponentName}
    ${renderProp('variant', variant, 'primary')}
    ${renderProp('size', size, 'medium')}
    ${renderProp('disabled', isDisabled, false)}
    ${renderProp('isLoading', isLoading, false)}
    ${renderProp('iconPlacement', iconPlacement, 'leading')}>
    ${iconSnippet}
    ${label}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: 'pie-button',
};
