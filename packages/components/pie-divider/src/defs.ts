import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['default', 'inverse'] as const;
export const orientations = ['horizontal', 'vertical'] as const;

export interface DividerProps {
   /**
     * What style variant the divider should be such as default or inverse.
     */
   variant?: typeof variants[number];
    /**
     * What orientation the divider should be such as horizontal or vertical.
     */
   orientation?: typeof orientations[number];
    /**
     * The label text for the divider.
     */
    label?: string;
}

export type DefaultProps = ComponentDefaultProps<DividerProps>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    orientation: 'horizontal',
    label: '',
};
