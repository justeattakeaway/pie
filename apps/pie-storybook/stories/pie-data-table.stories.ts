import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-data-table';
import '@justeattakeaway/pie-data-table/dist/pie-data-table-header';
import '@justeattakeaway/pie-button';
import type {
    DataTableProps,
    Column,
    DataTableAdditionalRow,
} from '@justeattakeaway/pie-data-table';

import { createStory } from '../utilities';

type DataTableStoryMeta = Meta<DataTableProps>;

const headerSlot = html`
    <pie-data-table-header
        slot="table-header"
        title="Data Table Title"
        subtitle="Optional subtitle text"
    >
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
    </pie-data-table-header>
`;

const headerStrongSlot = html`
    <pie-data-table-header
        slot="table-header"
        title="Data Table Title"
        subtitle="Optional subtitle text"
        variant="strong"
    >
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
        <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
    </pie-data-table-header>
`;

const sampleData = [
    {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        department: 'Engineering',
    },
    {
        name: 'Jose Smith',
        age: 28,
        email: 'jane.smith@example.com',
        department: 'Design',
    },
    {
        name: 'Bob Johnson',
        age: 35,
        email: 'bob.johnson@example.com',
        department: 'Product',
    },
    {
        name: 'Alice Brown',
        age: 32,
        email: 'alice.brown@example.com',
        department: 'Marketing',
    },
    {
        name: 'Charlie Wilson',
        age: 29,
        email: 'charlie.wilson@example.com',
        department: 'Engineering',
    },
    {
        name: 'Diana Martinez',
        age: 31,
        email: 'diana.martinez@example.com',
        department: 'Marketing',
    },
    {
        name: 'Ethan Davis',
        age: 26,
        email: 'ethan.davis@example.com',
        department: 'Design',
    },
    {
        name: 'Fiona Chen',
        age: 34,
        email: 'fiona.chen@example.com',
        department: 'Product',
    },
    {
        name: 'Gabriel Rodriguez',
        age: 33,
        email: 'gabriel.rodriguez@example.com',
        department: 'Engineering',
    },
    {
        name: 'Hannah Thompson',
        age: 27,
        email: 'hannah.thompson@example.com',
        department: 'HR',
    },
    {
        name: 'Ian Foster',
        age: 38,
        email: 'ian.foster@example.com',
        department: 'Finance',
    },
    {
        name: 'Julia Anderson',
        age: 25,
        email: 'julia.anderson@example.com',
        department: 'Marketing',
    },
    {
        name: 'Kevin Park',
        age: 36,
        email: 'kevin.park@example.com',
        department: 'Engineering',
    },
    {
        name: 'Laura Singh',
        age: 30,
        email: 'laura.singh@example.com',
        department: 'Design',
    },
    {
        name: 'Michael Turner',
        age: 42,
        email: 'michael.turner@example.com',
        department: 'Operations',
    },
];

const sampleColumns: Column[] = [
    {
        id: 'name',
        heading: 'Name',
        accessor: 'name',
    },
    {
        id: 'age',
        heading:  'Age',
        accessor: 'age',
    },
    {
        id: 'email',
        heading: 'Email',
        accessor: 'email',
    },
    {
        id: 'department',
        heading:  'Department',
        textAlign: 'right',
        accessor: 'department',
    },
];

const productsColumns: Column[] = [
    {
        id: 'customer',
        heading: 'Customer',
        accessor: 'customer',
        textAlign: 'left',
    },
    {
        id: 'company',
        heading: 'Company',
        accessor: 'company',
        textAlign: 'left',
    },
    {
        id: 'product',
        heading: 'Product',
        accessor: 'product',
        textAlign: 'left',
    },
    {
        id: 'material',
        heading: 'Material',
        accessor: 'material',
        textAlign: 'center',
    },
    {
        id: 'amount',
        heading: 'Amount',
        accessor: 'amount',
        textAlign: 'right',
    },
];

const sampleDataProducts = [
    {
        customer: 'Raymond Lebsack',
        company: 'Boyer - Renner',
        product: 'Gorgeous Soft Car',
        material: 'Rubber',
        amount: 702.00,
    },
    {
        customer: 'Aurelia Predovic',
        company: 'Tremblay, Fisher and Osinski',
        product: 'Small Plastic Table',
        material: 'Granite',
        amount: 219.00,
    },
    {
        customer: 'Nathanial Wiegand',
        company: 'Satterfield, Ferry and Rice',
        product: 'Practical Frozen Sausages',
        material: 'Rubber',
        amount: 22.00,
    },
];

const totalAmount = sampleDataProducts.reduce((total, item) => total + (typeof item.amount === 'number' ? item.amount : 0), 0);
const fivePercentTaxRate = 1.05;

const additionalRows: DataTableAdditionalRow[] = [
    {
        cells: [
            { content: 'Taxes', textAlign: 'right', colSpan: 4 },
            { content: '5%', textAlign: 'right' },
        ],
    },
    {
        cells: [
            { content: 'Total', textAlign: 'right', colSpan: 4 },
            { content: (totalAmount * fivePercentTaxRate).toFixed(2), textAlign: 'right' },
        ],
    },
];

const defaultArgs: DataTableProps = {
    columns: [],
    data: [],
};

const dataTableStoryMeta: DataTableStoryMeta = {
    title: 'Components/Data Table',
    component: 'pie-data-table',
    argTypes: {
        columns: {
            description: 'Array of column definitions',
            control: 'object',
        },
        data: {
            description: 'Array of data objects to display',
            control: 'object',
        },
        additionalRows: {
            description: 'Arbitrary array of additional rows to display at the bottom of the table',
            control: 'object',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/branch/ya9T2UcTNrlSjhHDME7L02/%E2%9C%A8--Core--Web-Components--PIE-3-?node-id=26064-73296',
        },
    },
};

export default dataTableStoryMeta;

const Template = ({
    columns, data, additionalRows,
}: DataTableProps) => html`
    <pie-data-table
        .columns="${columns}"
        .data="${data}"
        .additionalRows="${additionalRows}"
        data-test-id="pie-data-table"
    ></pie-data-table>
`;

const TemplateWithHeader = ({
    columns, data,
}: DataTableProps) => html`
    <pie-data-table
        .columns="${columns}"
        .data="${data}"
        data-test-id="pie-data-table"
    >
        ${headerSlot}
    </pie-data-table>
`;

const TemplateWithStrongHeader = ({
    columns, data,
}: DataTableProps) => html`
    <pie-data-table
        .columns="${columns}"
        .data="${data}"
        data-test-id="pie-data-table"
    >
        ${headerStrongSlot}
    </pie-data-table>
`;

export const NoHeader = createStory<DataTableProps>(Template, {
    columns: sampleColumns,
    data: sampleData,
})();

export const WithHeader = createStory<DataTableProps>(TemplateWithHeader, {
    columns: sampleColumns,
    data: sampleData,
})();

export const WithStrongHeader = createStory<DataTableProps>(TemplateWithStrongHeader, {
    columns: sampleColumns,
    data: sampleData,
})();

export const EmptyTable = createStory<DataTableProps>(Template, {
    columns: sampleColumns,
    data: [],
})();

export const WithExtraRows = createStory<DataTableProps>(Template, {
    columns: productsColumns,
    data: sampleDataProducts,
    additionalRows,
})();

export const EmptyData = createStory<DataTableProps>(Template, defaultArgs)();
