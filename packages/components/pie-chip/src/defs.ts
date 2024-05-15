import { type ComponentDefaultPropsGeneric } from '@justeattakeaway/pie-webc-core';

export const variants = ['default', 'outline', 'ghost'] as const;

export type AriaProps = {
    close?: string;
    label?: string;
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
}

/**
 * Event name for when the chip is closed.
 *
 * @constant
 */

export const ON_CHIP_CLOSE_EVENT = 'pie-chip-close';

export type DefaultProps = ComponentDefaultPropsGeneric<ChipProps, 'variant' | 'disabled' | 'isSelected' | 'isLoading' | 'isDismissible'>;

export const defaultProps: Readonly<DefaultProps> = {
    variant: 'default',
    disabled: false,
    isSelected: false,
    isLoading: false,
    isDismissible: false,
};
