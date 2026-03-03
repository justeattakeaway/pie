import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const placements = ['top', 'bottom', 'left', 'right'] as const;

export interface PopoverProps {
    /**
     * When true, the popover is visible. Consumer-controlled.
     */
    isOpen?: boolean;

    /**
     * The preferred placement of the popover relative to the trigger element.
     * The popover will flip to the opposite side if there is insufficient viewport space.
     */
    placement?: typeof placements[number];

    /**
     * A CSS selector string used to locate the trigger element in the document.
     * Used for positioning the popover and returning focus to the trigger on close.
     * e.g. '#my-filter-button'
     */
    triggerSelector?: string;
}

export type DefaultProps = ComponentDefaultProps<PopoverProps, keyof Omit<PopoverProps, 'triggerSelector'>>;

export const defaultProps: DefaultProps = {
    isOpen: false,
    placement: 'bottom',
};

