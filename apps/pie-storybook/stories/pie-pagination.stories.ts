import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/pagination';
import {
    type PaginationProps,
    type PiePagination,
    defaultProps,
} from '@justeattakeaway/pie-webc/components/pagination';

import { createStory, type TemplateFunction } from '../utilities';

type PaginationStoryMeta = Meta<PaginationProps>;

const defaultArgs: PaginationProps = { ...defaultProps, totalPages: 10 };

const paginationStoryMeta: PaginationStoryMeta = {
    title: 'Components/Pagination',
    component: 'pie-pagination',
    argTypes: {
        currentPage: {
            description: 'The currently active page (1-based). This component is controlled, so it never updates this value itself.',
            control: 'number',
            defaultValue: {
                summary: defaultProps.currentPage,
            },
        },
        totalPages: {
            description: 'The total number of pages to render.',
            control: 'number',
            defaultValue: {
                summary: defaultProps.totalPages,
            },
        },
        disabled: {
            description: 'When true, all pagination controls are disabled.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
            },
        },
        aria: {
            description: 'The ARIA attributes for the pagination landmark. Offers a `label` used for the `aria-label` of the wrapping `<nav>` element.',
            control: 'object',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/a7sChPmzJ0SgDwjlMCuJlo/DSW-4237-Pagination?node-id=1607-133900&m=dev',
        },
    },
};

export default paginationStoryMeta;

const pageChangeAction = action('pie-pagination-page-change');
const prevAction = action('pie-pagination-prev');
const nextAction = action('pie-pagination-next');

const handlePageEvent = (logAction: (detail: unknown) => void) => (event: CustomEvent<{ currentPage: number }>) => {
    const pagination = event.target as PiePagination;
    pagination.currentPage = event.detail.currentPage;
    logAction(event.detail);
};

const handlePageChange = handlePageEvent(pageChangeAction);
const handlePrev = handlePageEvent(prevAction);
const handleNext = handlePageEvent(nextAction);

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
        .aria="${aria}"
        @pie-pagination-page-change="${handlePageChange}"
        @pie-pagination-prev="${handlePrev}"
        @pie-pagination-next="${handleNext}">
    </pie-pagination>
`;

const createPaginationStory = createStory<PaginationProps>(Template, defaultArgs);

export const Default = createPaginationStory();

export const LargePageRange = createPaginationStory({
    currentPage: 25,
    totalPages: 50,
});
