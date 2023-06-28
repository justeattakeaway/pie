export const sizes = ['xsmall', 'small', 'medium', 'large'] as const;
export const variants = ['primary', 'secondary', 'outline', 'ghost', 'ghost-tertiary'] as const;

export interface IconButtonProps {
    /**
     * What size the button should be.
     * @default "medium"
     */
    size: typeof sizes[number];
    /**
     * What style variant the button should be such as primary, outline or ghost.
     * @default "primary"
     */
    variant: typeof variants[number];
    /**
     * When true, the button element is disabled.
     * @default false
     */
    disabled: boolean;
}
