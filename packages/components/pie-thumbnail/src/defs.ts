import type { ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = [
    'default', 'outline',
] as const;

export const backgroundColors = [
    'default', 'subtle', 'strong', 'dark', 'inverse', 'inverse-alternative'
]as const;

type PlaceholderProps = {
    src?: string;
    alt?: string;
}

export interface ThumbnailProps {
    variant?: typeof variants[number];
    src?: string;
    alt?: string;
    disabled?: boolean;
    hasPadding?: boolean;
    backgroundColor?: typeof backgroundColors[number];
    placeholder?: PlaceholderProps;
}

export type DefaultProps = ComponentDefaultProps<ThumbnailProps, 'variant' | 'src' | 'alt' | 'disabled' | 'hasPadding' | 'backgroundColor' | 'placeholder'>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    src: '',
    alt: '',
    disabled: false,
    hasPadding: false,
    backgroundColor: 'default',
    placeholder: {
        src: '',
        alt: '',
    },
};
