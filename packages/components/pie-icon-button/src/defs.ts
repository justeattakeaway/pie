export const sizes = ['xsmall', 'small', 'medium', 'large'] as const;
export const variants = ['primary', 'secondary', 'outline', 'ghost',
    'ghost-secondary', 'inverse', 'ghost-inverse'] as const;

export interface IconButtonProps {
    /**
     * (Optional) What size the button should be.
     * @default "medium"
     */
    size?: typeof sizes[number];
    /**
     * (Optional) What style variant the button should be such as primary, outline or ghost.
     * @default "primary"
     */
    variant?: typeof variants[number];
    /**
     * (Optional) When true, the button element is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * (Optional) When true, a loading spinner is rendered.
     * @default false
     */
    isLoading?: boolean;
}
