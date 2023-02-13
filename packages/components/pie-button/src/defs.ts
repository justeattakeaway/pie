/**
 * Button style variants
 */
export enum BUTTON_VARIANT {
    /**
     * Primary button.
     */
    PRIMARY = 'primary',

    /**
     * Secondary button.
     */
    SECONDARY = 'secondary',

    /**
     * Outline button.
     */
    OUTLINE = 'outline',

    /**
     * Ghost button.
     */
    GHOST = 'ghost'
}

/**
 * Button style variants
 */
export enum BUTTON_TYPE {
    /**
     * Submit button.
     */
    SUBMIT = 'submit',

    /**
     * Standard button.
     */
    BUTTON = 'button',

    /**
     * Reset button.
     */
    RESET = 'reset',

    /**
     * Menu button.
     */
    MENU = 'menu'
}

export const VALID_BUTTON_TYPES = Object.values(BUTTON_TYPE);
export const VALID_BUTTON_VARIANTS = Object.values(BUTTON_VARIANT);
