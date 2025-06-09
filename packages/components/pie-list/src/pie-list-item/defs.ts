import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export interface ListItemProps {
    /**
     * Primary text content of the list item
     */
    primaryText?: string;

    /**
     * Whether the item is selected
     */
    selected?: boolean;

    /**
     * Whether the item is disabled
     */
    disabled?: boolean;
}

export type DefaultProps = ComponentDefaultProps<ListItemProps, 'primaryText' | 'selected' | 'disabled'>;

export const defaultProps: DefaultProps = {
    primaryText: '',
    selected: false,
    disabled: false,
};
