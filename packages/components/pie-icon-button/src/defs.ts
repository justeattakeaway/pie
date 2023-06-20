export interface IconButtonProps {
    variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'ghost-tertiary';
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
