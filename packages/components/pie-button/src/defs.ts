/**
 * Button size variants
 */
export const BUTTON_SIZE = ['xsmall', 'small-expressive', 'small-productive', 'medium', 'large'] as const;
export type ButtonSize = typeof BUTTON_SIZE[number];

/**
 * Button style variants
 */
export const BUTTON_TYPE = ['submit', 'button', 'reset', 'menu'] as const;
export type ButtonType = typeof BUTTON_TYPE[number];

/**
 * Button style variants
 */
export const BUTTON_VARIANT = ['primary', 'secondary', 'outline', 'ghost'] as const;
export type ButtonVariant = typeof BUTTON_VARIANT[number];

