import type { ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = [
    'default', 'outline',
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
    disabled?: boolean;
    hasPadding?: boolean;
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
