export interface IconButtonProps {
    /**
     * the size of the icon button.
     * @default medium
     */
    size: 'xsmall' | 'small' | 'medium' | 'large';
    /**
     * the variant of the icon button.
     * @default primary
     */
    variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'ghost-tertiary';
    /**
     * If `true`, the icon button will be disabled.
     * @default false
     */
    disabled?: boolean;
}

/**
 * Icon Button size variants
 */
export const iconButtonSizes: Array<IconButtonProps['size']> = [
    'xsmall',
    'small',
    'medium',
    'large'
];

/**
 * Icon Button style variants
 */
export const iconButtonVariants: Array<IconButtonProps['variant']> = [
    'primary',
    'secondary',
    'outline',
    'ghost',
    'ghost-tertiary',
];
