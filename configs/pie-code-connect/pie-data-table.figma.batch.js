const figma = require('figma');
const getImportStatement = require('./utils/get-import-statement.js');
const createGetInstanceTemplate = require('./utils/get-instance-template.js');

const getInstanceTemplate = createGetInstanceTemplate(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const framework = process.env.FRAMEWORK;

const exampleColumns = [
    { id: 'col1', heading: 'Name', accessor: 'name' },
    { id: 'col2', heading: 'Email', accessor: 'email' },
];

const exampleData = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
];

let columnsAttr,
    dataAttr;

if (framework === 'react') {
    columnsAttr = `columns={${JSON.stringify(exampleColumns)}}`;
    dataAttr = `data={${JSON.stringify(exampleData)}}`;
} else {
    columnsAttr = `columns='${JSON.stringify(exampleColumns)}'`;
    dataAttr = `data='${JSON.stringify(exampleData)}'`;
}

const header = [getInstanceTemplate(['Header'])];

const template = figma.code`<${selectedComponentName}
    ${columnsAttr}
    ${dataAttr}>
    ${header}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
