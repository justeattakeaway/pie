import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['default', 'outline', 'ghost', 'translucent'] as const;
export const types = ['button', 'checkbox'] as const;

type AriaProps = {
    close?: string;
    label?: string;
    haspopup?: 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | 'true' | 'false';
    expanded?: boolean;
};

export interface ChipProps {
    /**
     * The ARIA labels used for various parts of the chip.
     */
    aria?: AriaProps;
    /**
     * What style variant the chip should be such as default, outline or ghost.
     */
    variant?: typeof variants[number];
    /**
     * When true, the chip element is disabled.
     */
    disabled?: boolean;
    /**
     * When true, the chip element will apply the selected styles.
     */
    isSelected?: boolean;
    /**
     * When true, displays a loading indicator inside the chip.
     */
    isLoading?: boolean;
    /**
     * When true, displays a close icon to dismiss the chip component.
     * Can be only used if `isSelected` is set to true
     */
    isDismissible?: boolean;

    /**
     * Sets the functional type of the chip. Can be `button` or `checkbox`. Defaults to `button`.
     */
    type?: typeof types[number];
}

export type DefaultProps = ComponentDefaultProps<ChipProps, keyof Omit<ChipProps, 'aria'>>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    disabled: false,
    isSelected: false,
    isLoading: false,
    isDismissible: false,
    type: 'button',
};
