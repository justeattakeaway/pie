import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'] as const;
export const variants = ['brand', 'secondary', 'secondary-dark', 'inverse', 'inverse-light'] as const;

type AriaProps = {
    label?: string;
};

export interface SpinnerProps {
    /**
     * The ARIA labels used for the spinner component.
     */
    aria?: AriaProps;
    /**
     * What size the spinner should be.
     */
    size?: typeof sizes[number];
    /**
     * What style variant the spinner should be such as brand, secondary or inverse.
     */
    variant?: typeof variants[number];
}

export type DefaultProps = ComponentDefaultProps<SpinnerProps, keyof Omit<SpinnerProps, 'aria'>>;

export const defaultProps: DefaultProps = {
    size: 'medium',
    variant: 'brand',
};
