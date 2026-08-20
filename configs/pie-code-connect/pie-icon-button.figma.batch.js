const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const state = getInstanceProp('getPropertyValue', 'State');

const variant = getInstanceProp('getEnum', 'Variant', {
    Primary: 'primary',
    'Primary - alternative': 'primary-alternative',
    Secondary: 'secondary',
    Outline: 'outline',
    Translucent: 'translucent',
    Ghost: 'ghost',
    'Ghost secondary': 'ghost-secondary',
    'Ghost secondary dark': 'ghost-secondary-dark',
    Inverse: 'inverse',
    'Inverse outline': 'inverse-outline',
    'Inverse ghost': 'ghost-inverse',
    'Inverse ghost light': 'ghost-inverse-light',
});

const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
    XSmall: 'xsmall',
});

const isDisabled = state === 'Disabled';
const isLoading = state === 'Loading';

const iconInstance = getInstanceProp('getInstanceSwap', 'Replace icon');
const iconSnippet = iconInstance?.executeTemplate().example;

const props = [
    renderProp('variant', variant, 'primary'),
    renderProp('size', size, 'medium'),
    renderProp('disabled', isDisabled, false),
    renderProp('isLoading', isLoading, false),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
    ${iconSnippet}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: 'pie-icon-button',
};
