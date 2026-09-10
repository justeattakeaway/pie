const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const checked = getInstanceProp('getBoolean', 'Selected');
const disabled = getInstanceProp('getPropertyValue', 'State') === 'Disabled';

const hasLeadingLabel = getInstanceProp('getBoolean', 'Leading label');
const hasTrailingLabel = getInstanceProp('getBoolean', 'Trailing label');
const labelPlacement = hasTrailingLabel ? 'trailing' : 'leading';
const label = hasLeadingLabel || hasTrailingLabel ? getInstanceProp('getString', '[𝐓] Label') : '';

const props = [
    renderProp('checked', checked, false),
    renderProp('disabled', disabled, false),
    renderProp('label', label, ''),
    renderProp('labelPlacement', labelPlacement, 'leading'),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
