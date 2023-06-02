/**
 * Icon Button style variants
 */
export const ICON_BUTTON_VARIANT = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    OUTLINE: 'outline',
    GHOST: 'ghost',
    GHOST_TERTIARY: 'ghost-tertiary',
} as const;

export type IconButtonVariant = typeof ICON_BUTTON_VARIANT [keyof typeof ICON_BUTTON_VARIANT ];
