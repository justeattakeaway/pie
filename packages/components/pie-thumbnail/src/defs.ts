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
    /**
     * What style variant the thumbnail should be such as default or outline.
     */
    variant?: typeof variants[number];
    /**
     * What size the thumbnail should be.
     */
    size?: typeof sizes[number];
    /**
     * The src attribute for the underlying image tag.
     */
    src?: string;
    /**
     * The alt attribute for the underlying image tag.
     */
    alt?: string;
    /**
     * When true, the disabled styles are applied.
     */
    disabled?: boolean;
    /**
     * When true, an extra spacing around the thumbnail container is applied.
     */
    hasPadding?: boolean;
    /**
     * What background color the thumbnail should be.
     */
    backgroundColor?: typeof backgroundColors[number];
    /**
     * What placeholder should be used when the image fails to load.
     */
    placeholder?: PlaceholderProps;
}

export type DefaultProps = ComponentDefaultProps<ThumbnailProps>;

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
