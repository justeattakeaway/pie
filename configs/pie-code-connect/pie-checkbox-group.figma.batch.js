const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;
const selectedChildName = process.env.FRAMEWORK === 'react' ? 'PieCheckbox' : 'pie-checkbox';
const selectedLabelName = process.env.FRAMEWORK === 'react' ? 'PieFormLabel' : 'pie-form-label';

const isInline = getInstanceProp('getPropertyValue', 'Orientation') === 'Horizontal';
const isDisabled = getInstanceProp('getPropertyValue', 'State') === 'Disabled';

const status = getInstanceProp('getEnum', 'Error', {
    True: 'error',
    False: 'default',
});

const assistiveText = getInstanceProp(['Assistive text'], 'getPropertyValue', '[𝐓] Assistive text') || '';

const hasCheckbox3 = getInstanceProp('getBoolean', 'Checkbox 3');
const hasCheckbox4 = getInstanceProp('getBoolean', 'Checkbox 4');
const hasCheckbox5 = getInstanceProp('getBoolean', 'Checkbox 5');

const hasFormLabel = getInstanceProp('getBoolean', 'Form label');
const formLabelSnippet = `<${selectedLabelName} slot="label" optional="Optional">Label</${selectedLabelName}>`;

const props = [
    renderProp('isInline', isInline, false),
    renderProp('disabled', isDisabled, false),
    renderProp('status', status, 'default'),
    renderProp('assistiveText', assistiveText, ''),
].filter(Boolean).join('\n    ');

const children = [
    hasFormLabel ? formLabelSnippet : '',
    `<${selectedChildName} name="checkbox-1">Label 1</${selectedChildName}>`,
    `<${selectedChildName} name="checkbox-2">Label 2</${selectedChildName}>`,
    hasCheckbox3 ? `<${selectedChildName} name="checkbox-3">Label 3</${selectedChildName}>` : '',
    hasCheckbox4 ? `<${selectedChildName} name="checkbox-4">Label 4</${selectedChildName}>` : '',
    hasCheckbox5 ? `<${selectedChildName} name="checkbox-5">Label 5</${selectedChildName}>` : '',
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
    ${children}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [
        getImportStatement(componentName, componentNameReact),
        getImportStatement('pie-checkbox', 'PieCheckbox'),
    ],
    id: 'pie-checkbox-group',
};
