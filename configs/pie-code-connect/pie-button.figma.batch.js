const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getIconSnippet = require('./utils/get-icon-snippet.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

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

// Get icon instance, and add the slot prop to the snippet
const iconInstance = getInstanceProp('getInstanceSwap', iconPlacement === 'trailing' ? 'Replace trailing icon' : 'Replace leading icon');
const iconSnippet = getIconSnippet(iconInstance, (code) => code.replace('></', ' slot="icon"></'));

const props = [
    renderProp('variant', variant, 'primary'),
    renderProp('size', size, 'medium'),
    renderProp('disabled', isDisabled, false),
    renderProp('isLoading', isLoading, false),
    renderProp('iconPlacement', iconPlacement, 'leading'),
].filter(Boolean).join('\n    ');

// Define template
const template = figma.code`<${selectedComponentName}
    ${props}>
    ${iconSnippet}
    ${label}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: 'pie-button',
};
