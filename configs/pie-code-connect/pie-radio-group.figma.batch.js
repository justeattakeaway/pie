const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');
const createGetInstanceTemplate = require('./utils/get-instance-template.js');

const getInstanceProp = createGetInstanceProp(figma);
const getInstanceTemplate = createGetInstanceTemplate(figma);

const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const isInline = getInstanceProp('getPropertyValue', 'Orientation') === 'Horizontal';
const isDisabled = getInstanceProp('getPropertyValue', 'State') === 'Disabled';

const status = getInstanceProp('getEnum', 'Error', {
    True: 'error',
    False: 'default',
});

const assistiveText = status === 'error' ? 'Assistive text' : '';

const props = [
    renderProp('isInline', isInline, false),
    renderProp('disabled', isDisabled, false),
    renderProp('status', status, 'default'),
    renderProp('assistiveText', assistiveText, ''),
].filter(Boolean).join('\n    ');

const children = [
    getInstanceTemplate(['Radio 1']),
    getInstanceTemplate(['Radio 2']),
    getInstanceTemplate(['Radio 3']),
    getInstanceTemplate(['Radio 4']),
    getInstanceTemplate(['Radio 5']),
];

const template = figma.code`<${selectedComponentName}
    ${props}>
    ${children}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [
        getImportStatement(componentName, componentNameReact),
    ],
    id: componentName,
};
