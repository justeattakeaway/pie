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

export const aspectRatios = ['1by1', '4by3', '16by9'] as const;

const SIZE_INCREMENT_BY = 8;
const SIZE_MIN = 24;
const SIZE_MAX = 128;

export const sizes = Object.freeze(Array.from(
    { length: (SIZE_MAX - SIZE_MIN) / SIZE_INCREMENT_BY + 1 },
    (_, i) => SIZE_MIN + i * SIZE_INCREMENT_BY,
)) as readonly number[];

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
     * Specify the size as a number between 24 and 128 (inclusive) and a multiple of 8.
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
     * When true, extra spacing around the thumbnail container is applied.
     */
    hasPadding?: boolean;
    /**
     * What background color the thumbnail should be.
     */
    backgroundColor?: typeof backgroundColors[number];
    /**
     * When true, hides the component default placeholder on image load failure.
     */
    hideDefaultPlaceholder?: boolean;
    /**
     * Overrides the component default placeholder with a custom one on image load failure.
     */
    placeholder?: PlaceholderProps;
     /**
     * Sets the aspect-ratio of the thumbnail image.
     */
     aspectRatio?: typeof aspectRatios[number];
}

export type DefaultProps = ComponentDefaultProps<ThumbnailProps>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    size: 48,
    src: '',
    alt: '',
    disabled: false,
    hasPadding: false,
    hideDefaultPlaceholder: false,
    backgroundColor: 'default',
    aspectRatio: '1by1',
    placeholder: {
        src: '',
        alt: '',
    },
};
