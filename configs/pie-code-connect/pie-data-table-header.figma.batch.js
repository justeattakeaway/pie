const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const heading = getInstanceProp('getString', '[𝐓] Title');
const hasSubHeading = getInstanceProp('getBoolean', 'Secondary text');
const subHeading = hasSubHeading ? getInstanceProp('getString', '[𝐓] Secondary text') : undefined;
const variant = getInstanceProp('getEnum', 'Subtle', {
    True: 'subtle',
    False: 'strong',
});

const props = [
    renderProp('heading', heading, ''),
    renderProp('subHeading', subHeading),
    renderProp('variant', variant, 'subtle'),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
