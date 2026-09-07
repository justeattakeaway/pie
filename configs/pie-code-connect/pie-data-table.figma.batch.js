const figma = require('figma');
const getImportStatement = require('./utils/get-import-statement.js');
const renderProp = require('./utils/render-prop.js');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const getInstanceCode = require('./utils/get-instance-code.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const isReact = process.env.FRAMEWORK === 'react';

const selectedComponentName = isReact ? componentNameReact : componentName;

const cellInstanceName = 'Row Cell';
const headerCellInstanceName = 'Column Header Cell';
const headerRowCellsPath = JSON.stringify(['Cells', 'Cells', 'Column Header']);
const actionButtonsPath = JSON.stringify(['Bulk-action bar', 'Buttons']);

// Header section
const _headerComponentName = 'pie-data-table-header';
const _headerComponentNameReact = 'PieDataTableHeader';

// Determine header props
const headerComponentName = isReact ? _headerComponentNameReact : _headerComponentName;
const heading = getInstanceProp(['Header'], 'getString', '[𝐓] Title');
const hasSubheading = getInstanceProp(['Header'], 'getBoolean', 'Secondary text');
const subHeading = hasSubheading ? getInstanceProp(['Header'], 'getString', '[𝐓] Secondary text') : undefined;
const headingVariant = getInstanceProp(['Header'], 'getBoolean', 'Subtle') ? 'subtle' : 'strong';
const headerProps = [
    renderProp('heading', heading),
    renderProp('subHeading', subHeading),
    renderProp('variant', headingVariant, 'subtle'),
].filter(Boolean).join(' ');

// Get header action buttons
const actionButtons = figma.selectedInstance.findInstance('Bulk-action bar');

const actionButtonsCode = actionButtons?.children
    .filter((child) => child.path && JSON.stringify(child.path) === actionButtonsPath)
    .map((child) => getInstanceCode(child, 'action-button'))
    .filter(Boolean);

// Pre-render header markup
const header = figma.code`<${headerComponentName} slot="table-header" ${headerProps}>${actionButtonsCode}</${headerComponentName}>`;

// Determine columns content
const columns = figma.selectedInstance
    .findLayers((instance) => {
        const nameMatches = instance.name && instance.name === headerCellInstanceName;
        const pathMatches = instance.path && JSON.stringify(instance.path) === headerRowCellsPath;
        return nameMatches && pathMatches;
    })
    .map((instance) => {
        const text = instance.getString('[𝐓] String').trim();
        const id = text.toLowerCase().replaceAll(' ', '-');

        return { id, name: text, accessor: id };
    });

const columnAccessors = columns.map(({ accessor }) => accessor); // Accessors determine the key for each cell
const columnCount = columnAccessors.length;

// Determine regular row cells content
const cells = figma.selectedInstance
    .findLayers((instance) => instance.name && instance.name === cellInstanceName)
    .map((instance) => instance.getString('[𝐓] String').trim());

// Break unidimensional array into lines and columns
// where each row is an object and each column value
// is set to the key of the column header accessor
const data = columnCount > 0 ? cells.reduce((acc, current, i) => {
    const line = Math.ceil((i + 1) / columnCount) - 1;
    const column = i % columnCount;

    if (!acc[line]) acc[line] = {};

    const columnAccessor = columnAccessors[column];
    acc[line][columnAccessor] = current;

    return acc;
}, []) : [];

const props = [
    renderProp('columns', columns),
    renderProp('data', data)
].filter(Boolean).join(' ');

const template = figma.code`<${selectedComponentName} ${props}>
    ${header}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [
        getImportStatement(componentName, componentNameReact),
        getImportStatement(_headerComponentName, _headerComponentNameReact),
    ],
    id: componentName,
};
