import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-data-table';
import { type DataTableProps } from '@justeattakeaway/pie-data-table';

import { createStory } from '../../utilities';

type DataTableStoryMeta = Meta<DataTableProps>;

const defaultArgs: DataTableProps = {};

const dataTableStoryMeta: DataTableStoryMeta = {
    title: 'Data Table',
    component: 'pie-data-table',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default dataTableStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: DataTableProps) => html`
    <pie-data-table></pie-data-table>
`;

export const Default = createStory<DataTableProps>(Template, defaultArgs)();
