const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const variant = getInstanceProp('getBoolean', 'Outline') ? 'outline' : 'default';
const disabled = getInstanceProp('getBoolean', 'Disabled');
const hasPadding = getInstanceProp('getBoolean', 'Padding');

const props = [
    renderProp('variant', variant, 'default'),
    renderProp('disabled', disabled, false),
    renderProp('hasPadding', hasPadding, false),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName} src="the-thumbnail-image-url.jpg"
    ${props}>
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
