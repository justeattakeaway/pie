import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const shapes = ['circle', 'square'] as const;

export const sizes = ['small', 'medium', 'large', 'xlarge'] as const;

export interface IconWithBackgroundProps {
    /**
     * The shape of the background surrounding the icon.
     */
    shape?: typeof shapes[number];
    /**
     * The size of the component, sizing both the background container and the slotted icon.
     */
    size?: typeof sizes[number];
}

export type DefaultProps = ComponentDefaultProps<IconWithBackgroundProps>;

export const defaultProps: DefaultProps = {
    shape: 'circle',
    size: 'medium',
};
