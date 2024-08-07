import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['neutral-alternative', 'neutral', 'outline', 'ghost', 'blue', 'green', 'yellow', 'red', 'brand'] as const;
export const sizes = ['small', 'large'] as const;

export interface TagProps {
    /**
     * What style variant the tag should be such as neutral/ghost etc.
     */
    variant?: typeof variants[number];

    /**
     * When true, the 'green', "yellow", "red", "blue" and "neutral" variants change their styles and become bolder
     */
    isStrong?: boolean;

    /**
     * When `true`, lowers the tag opacity.
     */
    isDimmed?: boolean;

    /**
     * What size the tag should be.
     */
    size?: typeof sizes[number];
}

export type DefaultProps = ComponentDefaultProps<TagProps>;

export const defaultProps: DefaultProps = {
    variant: 'neutral',
    isStrong: false,
    isDimmed: false,
    size: 'large',
};
