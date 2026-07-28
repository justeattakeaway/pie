import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const shapes = ['circle', 'square'] as const;

export interface IconWithBackgroundProps {
    /**
     * The shape of the background surrounding the icon.
     */
    shape?: typeof shapes[number];
}

export type DefaultProps = ComponentDefaultProps<IconWithBackgroundProps>;

export const defaultProps: DefaultProps = {
    shape: 'circle',
};
