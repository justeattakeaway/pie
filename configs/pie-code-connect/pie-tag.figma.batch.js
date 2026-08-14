const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getIconSnippet = require('./utils/get-icon-snippet.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact, isIconOnly } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const state = getInstanceProp('getPropertyValue', 'State');
const isDimmed = state === 'Disabled';

const isStrong = getInstanceProp('getPropertyValue', 'Strong') === 'True';
const hasLeadingIcon = getInstanceProp('getBoolean', 'Leading icon');

const label = getInstanceProp('getString', '[𝐓] Label');

const variant = getInstanceProp('getEnum', 'Type', {
    Neutral: 'neutral',
    'Neutral - alternative': 'neutral-alternative',
    Ghost: 'ghost',
    Outline: 'outline',
    Translucent: 'translucent',
    Information: 'information',
    Success: 'success',
    Error: 'error',
    Warning: 'warning',
    '02 Orange subtle': 'brand-02',
    '03 Cupcake': 'brand-03',
    '04 Berry': 'brand-04',
    '05 Turmeric': 'brand-05',
    '06 Aubergine': 'brand-06',
    '08 Latte': 'brand-08',
});

const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Small: 'small',
});

// Get icon instance and add the slot prop to the snippet
const hasIcon = isIconOnly || hasLeadingIcon;
const iconInstance = hasIcon && getInstanceProp('getInstanceSwap', 'Icon');
const iconSnippet = hasIcon && getIconSnippet(iconInstance, (code) => code.replace('></', ' slot="icon"></'));

const props = [
    renderProp('variant', variant, 'neutral'),
    renderProp('isStrong', isStrong, false),
    renderProp('isDimmed', isDimmed, false),
    !isIconOnly ? renderProp('size', size, 'large') : false,
    !isIconOnly ? renderProp('hasLeadingIcon', hasLeadingIcon, false) : false,
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
    ${iconSnippet || ''}
    ${!isIconOnly ? label : ''}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: 'pie-tag',
};
