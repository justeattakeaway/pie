const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const isOptional = getInstanceProp('getBoolean', 'Optional');
const hasCharacterCount = getInstanceProp('getBoolean', 'Character count') || getInstanceProp('getBoolean', 'Character Count');
const textInputLabel = getInstanceProp(['Form label / Leading content / Label'], 'getString', '[𝐓] Label');
const selectLabel = getInstanceProp('getString', '[𝐓] Label');
const textAreaLabel = getInstanceProp('getString', '[𝐓] Label');
const label = textInputLabel || selectLabel || textAreaLabel || 'Label';
const multilineLabel = getInstanceProp('getString', '[𝐓] Multiline label') || '';
const trailing = hasCharacterCount ? 'X/XX' : '';

const props = [
    isOptional && renderProp('optional', 'Optional'),
    renderProp('trailing', trailing, ''),
].filter(Boolean).join('\n    ');

// Define template
const template = figma.code`<${selectedComponentName} id="the-label-id" for="the-input-id" ${props}>${label}${multilineLabel ? ` ${multilineLabel}` : ''}</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
