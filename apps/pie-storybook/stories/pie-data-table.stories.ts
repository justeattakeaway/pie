import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-data-table';
import { type DataTableProps } from '@justeattakeaway/pie-data-table';

import { createStory } from '../utilities';

type DataTableStoryMeta = Meta<DataTableProps>;

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

const sampleColumns = [
    { id: 'name', heading: 'Name', accessor: 'name' },
    { id: 'age', heading: 'Age', accessor: 'age' },
    { id: 'email', heading: 'Email', accessor: 'email' },
    { id: 'department', heading: 'Department', accessor: 'department' },
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
    columns, data, hasBorder, isStriped,
}: DataTableProps) => html`
    <pie-data-table
        .columns="${columns}"
        .data="${data}"
        ?hasBorder="${hasBorder}"
        ?isStriped="${isStriped}"
        data-test-id="pie-data-table"
    ></pie-data-table>
`;

export const Default = createStory<DataTableProps>(Template, defaultArgs)();

export const WithData = createStory<DataTableProps>(Template, {
    columns: sampleColumns,
    data: sampleData,
})();

export const EmptyTable = createStory<DataTableProps>(Template, {
    columns: sampleColumns,
    data: [],
})();
