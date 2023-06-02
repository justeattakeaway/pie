/**
 * Button size variants
 */
export const BUTTON_SIZE = {
    XSMALL: 'xsmall',
    SMALL_EXPRESSIVE: 'small-expressive',
    SMALL_PRODUCTIVE: 'small-productive',
    MEDIUM: 'medium',
    LARGE: 'large',
} as const;

export type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];

/**
 * Button style variants
 */
export const BUTTON_TYPE = {
    SUBMIT: 'submit',
    BUTTON: 'button',
    RESET: 'reset',
    MENU: 'menu',
} as const;

export type ButtonType = typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE];

/**
 * Button style variants
 */
export const BUTTON_VARIANT = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    OUTLINE: 'outline',
    GHOST: 'ghost',
} as const;

export type ButtonVariant = typeof BUTTON_VARIANT[keyof typeof BUTTON_VARIANT];
