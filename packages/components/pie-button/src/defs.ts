export const sizes = ['xsmall', 'small-productive', 'small-expressive', 'medium', 'large'] as const;
export const types = ['submit', 'button', 'reset', 'menu'] as const;
export const variants = ['primary', 'secondary', 'outline', 'ghost', 'inverse', 'ghost-inverse'] as const;

export interface ButtonProps {
    /**
     * (Optional) What size the button should be.
     * @default "medium"
     */
    size: typeof sizes[number];
    /**
     * (Optional) What type attribute should be applied to the button. For example submit, button or menu.
     * @default "submit"
     */
    type: typeof types[number];
    /**
     * (Optional) What style variant the button should be such as primary, outline or ghost.
     * @default "primary"
     */
    variant: typeof variants[number];
    /**
     * (Optional) When true, the button element is disabled.
     * @default false
     */
    disabled: boolean;
    /**
     * (Optional) When true, the button element will occupy the full width of its container.
     * @default false
     */
    isFullWidth: boolean;
}
