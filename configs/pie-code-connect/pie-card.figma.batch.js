const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
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
const cardSlot = figma.selectedInstance.getSlot('Card content');
const cardSlotContent = cardSlot.connectedInstances.map((action) => action.executeTemplate().example);

// Define template
const template = figma.html`
<${selectedComponentName}
    ${renderProp('variant', variant, 'default')}
    ${renderProp('disabled', isDisabled, false)}
>
    ${cardSlotContent.flat()}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: 'pie-button',
};
