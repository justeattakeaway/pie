import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const shapes = ['circle', 'square'] as const;

export const sizes = ['small', 'medium', 'large', 'xlarge'] as const;

export const variants = [
    'neutral',
    'neutral-alternative',
    'information',
    'success',
    'error',
    'warning',
    'brand-02',
    'brand-03',
    'brand-04',
    'brand-05',
    'brand-06',
    'brand-08',
] as const;

export interface IconWithBackgroundProps {
    /**
     * The shape of the background surrounding the icon.
     */
    shape?: typeof shapes[number];
    /**
     * The size of the component, sizing both the background container and the slotted icon.
     */
    size?: typeof sizes[number];
    /**
     * The background colour variant of the component.
     */
    variant?: typeof variants[number];
    /**
     * When true, applies a stronger colour emphasis. Has no effect on the `neutral-alternative` variant.
     */
    isStrong?: boolean;

    /**
     * When true, applies a dimmed styling to the component.
     */
    isDimmed?: boolean;
}

export type DefaultProps = ComponentDefaultProps<IconWithBackgroundProps>;

export const defaultProps: DefaultProps = {
    shape: 'circle',
    size: 'medium',
    variant: 'neutral',
    isStrong: false,
    isDimmed: false,
};
