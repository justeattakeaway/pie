import type { ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = [
    'default', 'outline',
] as const;

export interface ThumbnailProps {
    variant?: typeof variants[number];
    src?: string;
    alt?: string;
    disabled?: boolean;
    hasPadding?: boolean;
    backgroundColor?: string;
}

export type DefaultProps = ComponentDefaultProps<ThumbnailProps, 'variant' | 'src' | 'alt' | 'disabled' | 'hasPadding' | 'backgroundColor'>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    src: '',
    alt: '',
    disabled: false,
    hasPadding: false,
    backgroundColor: 'var(--dt-color-container-default)',
};
