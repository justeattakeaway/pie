// Figma Code Connect template for pie-<%= fileName %>.
//
// This is a starting scaffold. Update the prop mappings below to match the
// component's Figma properties, then register it in `components.figma.batch.json`.
// See the pie-code-connect README for full guidance.

const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');
const trimEmptyLines = require('./utils/trim-empty-lines.js');

const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;
const getInstanceProp = createGetInstanceProp(figma);

// Map Figma properties to component props. These are examples - replace them
// with the actual properties exposed by the pie-<%= fileName %> Figma component.
const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
}) || 'medium';
const isDisabled = getInstanceProp('getBoolean', 'Disabled');

// Template rendering
const template = `<${selectedComponentName}
    ${renderProp('size', size, 'medium')}
    ${renderProp('disabled', isDisabled, false)}
></${selectedComponentName}>`;

export default {
    example: figma.code`${trimEmptyLines(template)}`,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
