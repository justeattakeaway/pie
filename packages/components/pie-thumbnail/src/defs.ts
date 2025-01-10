import type { ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = [
    'default', 'outline',
] as const;

export interface ThumbnailProps {
    variant?: typeof variants[number];
    src?: string;
    alt?: string;
}

export type DefaultProps = ComponentDefaultProps<ThumbnailProps, 'variant' | 'src' | 'alt'>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    src: '',
    alt: '',
};
