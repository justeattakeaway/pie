/**
 * Icon Button style variants
 */
export const ICON_BUTTON_VARIANT = ['primary', 'secondary', 'outline', 'ghost'] as const;
export type IconButtonVariant = typeof ICON_BUTTON_VARIANT[number];
