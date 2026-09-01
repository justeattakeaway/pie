// Figma Code Connect template for pie-<%= fileName %>.
//
// This is a starting scaffold. Update the prop mappings below to match the
// component's Figma properties, then register it in `components.figma.batch.json`.
// See the pie-code-connect README for full guidance.

const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map Figma properties to component props. These are examples - replace them
// with the actual properties exposed by the pie-<%= fileName %> Figma component.
const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
}) || 'medium';
const isDisabled = getInstanceProp('getBoolean', 'Disabled');

// `renderProp` returns an empty string when a value matches its default, so falsy
// entries are filtered out to keep blank lines out of the generated snippet. The
// join indent matches the four-space offset of `${props}` in the template below.
const props = [
    renderProp('size', size, 'medium'),
    renderProp('disabled', isDisabled, false),
].filter(Boolean).join('\n    ');

// Define template
const template = figma.code`<${selectedComponentName}
    ${props}>
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
