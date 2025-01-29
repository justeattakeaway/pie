import type { ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = [
    'default', 'outline',
] as const;

export const sizes = [
    24, 32, 40, 48, 56, 64, 72, 80, 88
] as const;

export const backgroundColors = [
    'default', 'subtle', 'strong', 'dark', 'inverse', 'inverse-alternative'
] as const;

export const backgroundColorClassNames: Record<typeof backgroundColors[number], string> = {
    default: 'c-thumbnail--backgroundDefault',
    subtle: 'c-thumbnail--backgroundSubtle',
    strong: 'c-thumbnail--backgroundStrong',
    dark: 'c-thumbnail--backgroundDark',
    inverse: 'c-thumbnail--backgroundInverse',
    'inverse-alternative': 'c-thumbnail--backgroundInverseAlternative',
};

type PlaceholderProps = {
    src?: string;
    alt?: string;
}

export interface ThumbnailProps {
    variant?: typeof variants[number];
    size?: typeof sizes[number];
    src?: string;
    alt?: string;
    disabled?: boolean;
    hasPadding?: boolean;
    backgroundColor?: typeof backgroundColors[number];
    placeholder?: PlaceholderProps;
}

export type DefaultProps = ComponentDefaultProps<ThumbnailProps, 'variant' | 'src' | 'alt' | 'disabled' | 'hasPadding' | 'backgroundColor' | 'placeholder' | 'size'>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    size: 48,
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
