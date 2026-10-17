import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/pagination';
import { type PaginationProps } from '@justeattakeaway/pie-webc/components/pagination';

import { createStory } from '../../utilities';

type PaginationStoryMeta = Meta<PaginationProps>;

const defaultArgs: PaginationProps = {};

const paginationStoryMeta: PaginationStoryMeta = {
    title: 'Pagination',
    component: 'pie-pagination',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default paginationStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: PaginationProps) => html`
    <pie-pagination></pie-pagination>
`;

export const Default = createStory<PaginationProps>(Template, defaultArgs)();
