import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['default', 'compact'] as const;
export const listTypes = ['unordered', 'ordered'] as const;

export type ListVariant = typeof variants[number];
export type ListType = typeof listTypes[number];

export interface ListProps {
    /**
     * Specifies the list variant
     */
    variant?: ListVariant;

    /**
     * Whether to show dividers between list items
     */
    hasDividers?: boolean;

    /**
     * Specifies whether the list should render as an ordered (`ol`) or unordered (`ul`) list
     */
    listType?: ListType;
}

export type DefaultProps = ComponentDefaultProps<ListProps, 'variant' | 'hasDividers' | 'listType'>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    hasDividers: false,
    listType: 'unordered',
};
