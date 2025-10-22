import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['neutral-alternative', 'neutral', 'outline', 'ghost', 'information', 'success', 'error', 'brand-02', 'brand-03', 'brand-04', 'brand-05', 'brand-06'] as const;
export const sizes = ['small', 'large'] as const;
export const iconPlacements = ['leading', 'trailing'] as const;

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
     * For an interactive tag, this applies the disabled attribute to the button and styles it appropriately.
     * For a non-interactive tag, this only applies the disabled styling.
     */
    disabled?: boolean;

    /**
     * What size the tag should be.
     */
    size?: typeof sizes[number];

    /**
     * The placement of the icon slot such as leading (default) or trailing.
     */
    iconPlacement?: typeof iconPlacements[number];
}

export type DefaultProps = ComponentDefaultProps<TagProps>;

export const defaultProps: DefaultProps = {
    variant: 'neutral',
    isStrong: false,
    disabled: false,
    size: 'large',
    iconPlacement: 'leading',
};
