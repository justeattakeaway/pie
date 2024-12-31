import type { ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = [
    'default', 'outline',
] as const;

export type Variant = typeof variants[number];

export interface ThumbnailProps {
    variant?: Variant;
    src?: string;
    alt?: string;
    disabled?: boolean;
}

export type DefaultProps = ComponentDefaultProps<ThumbnailProps, 'variant' | 'src' | 'alt' | 'disabled'>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    src: './assets/placeholder.png',
    alt: 'placeholder',
    disabled: false,
};
