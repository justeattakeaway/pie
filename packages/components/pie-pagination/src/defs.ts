import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

/**
 * The event name dispatched when the user interacts with a pagination control.
 * The component is fully controlled: it never changes `currentPage` itself, it
 * only tells the consumer which page the user wants to navigate to.
 * @constant
 */
export const ON_PAGE_CHANGE_EVENT = 'pie-pagination-page-change';

/**
 * The event name dispatched when the user clicks the "previous" control.
 * @constant
 */
export const ON_PREV_EVENT = 'pie-pagination-prev';

/**
 * The event name dispatched when the user clicks the "next" control.
 * @constant
 */
export const ON_NEXT_EVENT = 'pie-pagination-next';

type AriaProps = {
    label?: string;
};

export interface PaginationProps {
    /**
     * The ARIA attributes for the pagination landmark. Offers a `label` used for
     * the `aria-label` of the wrapping `<nav>` element.
     */
    aria?: AriaProps;

    /**
     * The currently active page (1-based). This component is fully controlled, so
     * it never updates this value itself; the consumer is responsible for updating
     * it in response to the `pie-pagination-page-change` event.
     * @default 1
     */
    currentPage?: number;

    /**
     * The total number of pages to render.
     * @default 1
     */
    totalPages?: number;

    /**
     * When true, all pagination controls are disabled.
     * @default false
     */
    disabled?: boolean;
}

export type DefaultProps = ComponentDefaultProps<PaginationProps, 'currentPage' | 'totalPages' | 'disabled'>;

export const defaultProps: DefaultProps = {
    currentPage: 1,
    totalPages: 1,
    disabled: false,
};
