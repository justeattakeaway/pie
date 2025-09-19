import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['default', 'compact'] as const;

export interface ListProps {
    /**
     * Specifies the list variant
     */
    variant?: typeof variants[number];

    /**
     * Whether to show dividers between list items
     */
    hasDividers?: boolean;
}

export type DefaultProps = ComponentDefaultProps<ListProps, 'variant' | 'hasDividers'>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    hasDividers: false,
};
