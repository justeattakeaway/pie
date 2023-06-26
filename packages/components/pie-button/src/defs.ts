export interface ButtonProps {
    /**
     * the size of the button.
     * @default medium
     */
    size: 'xsmall' | 'small-expressive' | 'small-productive' | 'medium' | 'large';
    /**
     * The html button type to use.
     * @default submit
     */
    type: 'submit' | 'button' | 'reset' | 'menu';
    /**
     * the variant of the button.
     * @default primary
     */
    variant: 'primary' | 'secondary' | 'outline' | 'ghost';
    /**
     * If `true`, the button will be disabled.
     * @default false
     */
    disabled: boolean;
    /**
     * If `true`, the button will span the full width.
     * @default false
     */
    isFullWidth: boolean;
}

/**
 * Button size variants
 */
export const buttonSizes: Array<ButtonProps['size']> = [
    'xsmall',
    'small-expressive',
    'small-productive',
    'medium',
    'large'
];

/**
 * Button style variants
 */
export const buttonVariants: Array<ButtonProps['variant']> = [
    'primary',
    'secondary',
    'outline',
    'ghost',
];

/**
 * Button type variants
 */
export const buttonTypes: Array<ButtonProps['type']> = [
    'submit',
    'button',
    'reset',
    'menu',
];
