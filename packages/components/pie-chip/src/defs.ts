export const variants = ['default', 'outline', 'ghost'] as const;

export interface ChipProps {
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
