export interface IconButtonProps {
    /**
     * the size of the icon button.
     * @default medium
     */
    size: 'xs' | 's' | 'l' | 'xl';
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
export const iconButtonSizes: IconButtonProps['size'][] = [
    's',
    'xs',
    'l',
    'xl'
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
