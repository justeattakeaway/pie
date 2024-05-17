import { type ComponentDefaultPropsGeneric } from '@justeattakeaway/pie-webc-core';

export const variants = ['default', 'inverse'] as const;
export const orientations = ['horizontal', 'vertical'] as const;

export interface DividerProps {
   /**
     * What style variant the divider should be such as default or vertical.
     */
   variant?: typeof variants[number];
    /**
     * What orientation the divider should be such as horizontal or inverse.
     */
   orientation?: typeof orientations[number];
}

export type DefaultProps = ComponentDefaultPropsGeneric<DividerProps, 'variant' | 'orientation'>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    orientation: 'horizontal',
};
