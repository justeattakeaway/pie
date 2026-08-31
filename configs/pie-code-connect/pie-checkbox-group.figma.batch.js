const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');
const createGetInstanceTemplate = require('./utils/get-instance-template.js');

const getInstanceProp = createGetInstanceProp(figma);
const getInstanceTemplate = createGetInstanceTemplate(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;
const selectedLabelName = process.env.FRAMEWORK === 'react' ? 'PieFormLabel' : 'pie-form-label';

const isInline = getInstanceProp('getPropertyValue', 'Orientation') === 'Horizontal';
const isDisabled = getInstanceProp('getPropertyValue', 'State') === 'Disabled';

const status = getInstanceProp('getEnum', 'Error', {
    True: 'error',
    False: 'default',
});

const assistiveText = getInstanceProp(['Assistive text'], 'getPropertyValue', '[𝐓] Assistive text') || '';

const hasFormLabel = getInstanceProp('getBoolean', 'Form label');
const formLabelSnippet = `<${selectedLabelName} slot="label" optional="Optional">Label</${selectedLabelName}>`;

const checkboxes = [
    getInstanceTemplate(['Checkbox 1']),
    getInstanceTemplate(['Checkbox 2']),
    getInstanceTemplate(['Checkbox 3']),
    getInstanceTemplate(['Checkbox 4']),
    getInstanceTemplate(['Checkbox 5']),
];

const props = [
    renderProp('isInline', isInline, false),
    renderProp('disabled', isDisabled, false),
    renderProp('status', status, 'default'),
    renderProp('assistiveText', assistiveText, ''),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
    ${hasFormLabel ? formLabelSnippet : ''}
    ${checkboxes}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [
        getImportStatement(componentName, componentNameReact),
        getImportStatement('pie-form-label', 'PieFormLabel'),
    ],
    id: componentName,
};
