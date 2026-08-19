const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const createGetSlotContent = require('./utils/get-slot-content.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const getSlotContent = createGetSlotContent(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const state = getInstanceProp('getPropertyValue', 'State');
const isDisabled = state === 'Disabled';
const variant = getInstanceProp('getEnum', 'Variant', {
    Default: 'default',
    Outline: 'outline',
    'Default Outline': 'outline',
    Inverse: 'inverse',
    'Inverse Outline': 'outline-inverse',
});

// Map slot content
const slotContent = getSlotContent('Card content');

const props = [
    renderProp('variant', variant, 'default'),
    renderProp('disabled', isDisabled, false),
].filter(Boolean).join('\n    ');

// Define template
const template = figma.code`<${selectedComponentName}
    ${props}>
    ${slotContent.flat()}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
