import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';
import { type RegularIconSize } from '@justeattakeaway/pie-icons-configs';

export const variants = [
    'neutral',
    'neutral-alternative',
    'brand-01',
    'brand-02',
    'brand-03',
    'brand-04',
    'brand-05',
    'brand-06',
    'brand-08',
    'error',
    'warning',
    'success',
    'information',
] as const;

export const shapes = ['circle', 'square'] as const;
export const sizes = ['small', 'medium', 'large', 'xlarge'] as const;
export const emphases = ['strong', 'subtle'] as const;

export interface IconSizeConfig {
    iconSize: RegularIconSize;
    containerPx: number;
    iconPx: number;
}

// Spec: circle small=24px/16px icon, medium=32px/20px, large=40px/24px, xlarge=56px/32px
// Spec: square small=24px/20px icon, medium=32px/24px, large=40px/28px, xlarge=56px/36px
// 36px is not a standard RegularIconSize — `xl` (32px) is used as the size prop and
// --icon-size-override: 36px is applied via inline style to hit the exact spec value.
export const sizeShapeIconMap: Record<typeof shapes[number], Record<typeof sizes[number], IconSizeConfig>> = {
    circle: {
        small: { iconSize: 'xs', containerPx: 24, iconPx: 16 },
        medium: { iconSize: 's', containerPx: 32, iconPx: 20 },
        large: { iconSize: 'm', containerPx: 40, iconPx: 24 },
        xlarge: { iconSize: 'xl', containerPx: 56, iconPx: 32 },
    },
    square: {
        small: { iconSize: 's', containerPx: 24, iconPx: 20 },
        medium: { iconSize: 'm', containerPx: 32, iconPx: 24 },
        large: { iconSize: 'l', containerPx: 40, iconPx: 28 },
        xlarge: { iconSize: 'xl', containerPx: 56, iconPx: 36 },
    },
};

export interface IconWithBackgroundProps {
    iconName: string;
    variant?: typeof variants[number];
    shape?: typeof shapes[number];
    size?: typeof sizes[number];
    emphasis?: typeof emphases[number];
    isDisabled?: boolean;
}

export type DefaultProps = ComponentDefaultProps<IconWithBackgroundProps>;

export const defaultProps: DefaultProps = {
    iconName: '',
    variant: 'neutral',
    shape: 'circle',
    size: 'medium',
    emphasis: 'strong',
    isDisabled: false,
};
