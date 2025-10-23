import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = [
    'neutral',
    'neutral-alternative',
    'ghost',
    'outline',
    'translucent',
    'information',
    'success',
    'error',
    'warning',
    'brand-02',
    'brand-03',
    'brand-04',
    'brand-05',
    'brand-06',
    'brand-08'
] as const;
export const sizes = ['small', 'large'] as const;

export interface TagProps {
    /**
     * What style variant the tag should be such as neutral/ghost etc.
     */
    variant?: typeof variants[number];

    /**
     * When true, the "information", "success", "error", "brand-05", and "neutral" variants change their styles and become bolder
     */
    isStrong?: boolean;

    /**
     * When true, applies a dimmed styling to the tag.
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
