const figma = require('figma');
const renderProp = require('./utils/render-prop.js');
const createGetInstanceProp = require('./utils/get-instance-prop.js');

const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact, isPhoto } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const initials = !isPhoto && getInstanceProp('getString', '[𝐓] Initials').split('').join(' ');

const props = [
    isPhoto
        ? renderProp('src', 'the-avatar-image-url.jpg')
        : renderProp('label', initials),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
