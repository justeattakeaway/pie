import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/pagination';
import {
    type PaginationProps, defaultProps,
} from '@justeattakeaway/pie-webc/components/pagination';

import { createStory, type TemplateFunction } from '../../utilities';

type PaginationStoryMeta = Meta<PaginationProps>;

const defaultArgs: PaginationProps = { ...defaultProps, totalPages: 10 };

const paginationStoryMeta: PaginationStoryMeta = {
    title: 'Pagination',
    component: 'pie-pagination',
    argTypes: {
        currentPage: {
            description: 'The currently active page (1-based).',
            control: 'number',
        },
        totalPages: {
            description: 'The total number of pages to render.',
            control: 'number',
        },
        disabled: {
            description: 'When true, all pagination controls are disabled.',
            control: 'boolean',
        },
        aria: {
            description: 'The ARIA attributes for the pagination landmark.',
            control: 'object',
        },
    },
    args: defaultArgs,
};

export default paginationStoryMeta;

const Template: TemplateFunction<PaginationProps> = ({
    currentPage,
    totalPages,
    disabled,
    aria,
}) => html`
    <pie-pagination
        currentPage="${ifDefined(currentPage)}"
        totalPages="${ifDefined(totalPages)}"
        ?disabled="${disabled}"
        .aria="${aria}">
    </pie-pagination>
`;

const createPaginationStory = createStory<PaginationProps>(Template, defaultArgs);

export const Default = createPaginationStory();
