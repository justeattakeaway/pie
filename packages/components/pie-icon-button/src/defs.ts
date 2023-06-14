export interface IconButtonProps {
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
 * Icon Button style variants
 */
export const iconButtonVariants: IconButtonProps['variant'][] = [
    'primary',
    'secondary',
    'outline',
    'ghost',
    'ghost-tertiary',
];
