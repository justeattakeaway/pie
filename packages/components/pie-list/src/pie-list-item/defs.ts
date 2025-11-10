import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export interface ListItemProps {
    /**
     * Primary text content of the list item
     */
    primaryText?: string;

    /**
     * Whether the item is selected
     */
    isSelected?: boolean;

    /**
     * Whether the item is disabled
     */
    disabled?: boolean;
}

export type DefaultProps = ComponentDefaultProps<ListItemProps, 'primaryText' | 'isSelected' | 'disabled'>;

export const defaultProps: DefaultProps = {
    primaryText: '',
    isSelected: false,
    disabled: false,
};
