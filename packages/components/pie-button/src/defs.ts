export interface ButtonProps {
    size: 'xsmall' | 'small-expressive' | 'small-productive' | 'medium' | 'large';
    type: 'submit' | 'button' | 'reset' | 'menu';
    variant: 'primary' | 'secondary' | 'outline' | 'ghost';
}

/**
 * Button size variants
 */
export const buttonSizes: ButtonProps['size'][] = [
    'xsmall',
    'small-expressive',
    'small-productive',
    'medium',
    'large'
];

/**
 * Button style variants
 */
export const buttonVariants: ButtonProps['variant'][] = [
    'primary',
    'secondary',
    'outline',
    'ghost',
];

/**
 * Button type variants
 */
export const buttonTypes: ButtonProps['type'][] = [
    'submit',
    'button',
    'reset',
    'menu',
];
