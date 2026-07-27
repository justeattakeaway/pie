const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');
const trimEmptyLines = require('./utils/trim-empty-lines.js');

const componentNameHtml = figma.batch.id;
const componentNameReact = figma.batch.name;
const componentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentNameHtml;
const getInstanceProp = createGetInstanceProp(figma);

// Map figma props
const hasSlot = getInstanceProp('getBoolean', 'Slot');
const state = getInstanceProp('getPropertyValue', 'State');
const isDisabled = state === 'Disabled';
const variant = getInstanceProp('getEnum', 'Variant', {
    Default: 'default',
    Outline: 'outline',
    'Default Outline': 'outline',
    Inverse: 'inverse',
    'Inverse Outline': 'outline-inverse',
});

// Define template
const template = `<${componentName}
    ${renderProp('variant', variant, 'default')}
    ${renderProp('disabled', isDisabled, false)}
>
    ${hasSlot ? 'Slot content' : ''}
</${componentName}>`;

export default {
    example: figma.code`${trimEmptyLines(template)}`,
    imports: [getImportStatement(componentNameHtml, componentNameReact)],
    id: componentNameHtml,
};
