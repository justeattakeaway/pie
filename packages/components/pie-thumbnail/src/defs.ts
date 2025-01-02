import type { ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = [
    'default', 'outline',
] as const;
export const sizes = [
    'xsmall', 'small', 'medium',
] as const;

export type Variant = typeof variants[number];
export type Size = typeof sizes[number];

export interface ThumbnailProps {
    variant?: Variant;
    size?: Size;
    src?: string;
    alt?: string;
    disabled?: boolean;
    hasPadding?: boolean;
}

export type DefaultProps = ComponentDefaultProps<ThumbnailProps, 'variant' | 'size' | 'src' | 'alt' | 'disabled' | 'hasPadding'>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    size: 'small',
    src: './assets/placeholder.png',
    alt: 'placeholder',
    disabled: false,
    hasPadding: false,
};
