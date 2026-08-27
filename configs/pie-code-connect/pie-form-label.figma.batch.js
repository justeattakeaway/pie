const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const isOptional = getInstanceProp('getBoolean', 'Optional');
const hasCharacterCount = getInstanceProp('getBoolean', 'Character count');
const textInputLabel = getInstanceProp(['Form label / Leading content / Label'], 'getString', '[𝐓] Label');
const selectLabel = getInstanceProp('getString', '[𝐓] Label');
const textAreaLabel = getInstanceProp('getString', '[𝐓] Label');
const label = textInputLabel || selectLabel || textAreaLabel || 'Label';
const multilineLabel = getInstanceProp(['Label group', 'Label + icon', 'Form label / Multiline label'], 'getString', '[𝐓] Multiline label') || '';

const trailing = hasCharacterCount
    ? getInstanceProp(['Form label / Trailing content / Character count'], 'getString', '[𝐓] Character count')
    : '';

const props = [
    isOptional && renderProp('optional', 'Optional'),
    trailing && renderProp('trailing', trailing),
].filter(Boolean).join('\n    ');

// Define template
const template = figma.code`<${selectedComponentName} id="the-label-id" for="the-input-id" ${props}>${label}${multilineLabel}</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: 'pie-form-label',
};
