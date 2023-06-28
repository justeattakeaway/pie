export const sizes = ['xsmall', 'small', 'medium', 'large'] as const;
export const variants = ['primary', 'secondary', 'outline', 'ghost', 'ghost-tertiary'] as const;

export interface IconButtonProps {
    size: typeof sizes[number];
    variant: typeof variants[number];
    disabled?: boolean;
}
