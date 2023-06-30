export const sizes = ['xs', 's', 'm', 'l'] as const;
export const variants = ['primary', 'secondary', 'outline', 'ghost', 'ghost-tertiary'] as const;

export interface IconButtonProps {
    /**
     * (Optional) What size the button should be.
     * @default "medium"
     */
    size: typeof sizes[number];
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
}
