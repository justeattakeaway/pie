/**
 * Icon Button style variants
 */
// export enum ICON_BUTTON_VARIANT {
//     PRIMARY = 'primary',
//     SECONDARY = 'secondary',
//     OUTLINE = 'outline',
//     GHOST = 'ghost',
//     GHOST_TERTIARY = 'ghost-tertiary',
// }

export const ICON_BUTTON_VARIANT = ['primary', 'secondary', 'outline', 'ghost'] as const;
export type IconButtonVariant = typeof ICON_BUTTON_VARIANT[number];
