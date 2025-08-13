import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['global', 'contained'] as const;
export const orientations = ['horizontal', 'vertical'] as const;

export interface TabsProps {
  /**
   * Optional variant for styling the tabs component.
   * Default is 'global'.
   */
  variant?: typeof variants[number];
  /**
   * Optional property to set the orientation of the tabs.
   * Default is 'horizontal'.
   */
  orientation?: typeof orientations[number];
}

export type DefaultProps = ComponentDefaultProps<TabsProps>;

export const defaultProps: DefaultProps = {
    variant: 'global',
    orientation: 'horizontal',
};

