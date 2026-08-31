const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const variant = getInstanceProp('getEnum', 'Type', {
    Default: 'default',
    Inverse: 'inverse',
});

const orientation = getInstanceProp('getEnum', 'Orientation', {
    Horizontal: 'horizontal',
    Vertical: 'vertical',
});

const label = getInstanceProp('getBoolean', 'Label') ? getInstanceProp('getString', '[𝐓] Label') : '';

const props = [
    renderProp('variant', variant, 'default'),
    renderProp('orientation', orientation, 'horizontal'),
    renderProp('label', label, ''),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
