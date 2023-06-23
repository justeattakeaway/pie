export const sizes = ['xsmall', 'small-expressive', 'small-productive', 'medium', 'large'] as const;
export const types = ['submit', 'button', 'reset', 'menu'] as const;
export const variants = ['primary', 'secondary', 'outline', 'ghost'] as const;

export interface ButtonProps {
    size: typeof sizes[number];
    type: typeof types[number];
    variant: typeof variants[number];
    disabled: boolean;
    isFullWidth: boolean;
}
