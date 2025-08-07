import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const dataTableHeaderEmphasis = ['subtle', 'strong'];

export interface DataTableHeaderProps {
  /**
   * Title text for the data table header
   */
  title: string;
  /**
   * Subtitle text for the data table header
   */
  subtitle?: string;
  /**
   * Emphasis level for the header
   */
  emphasis?: typeof dataTableHeaderEmphasis[number];
}

export const defaultProps: ComponentDefaultProps<DataTableHeaderProps, keyof Omit<DataTableHeaderProps, 'title' | 'subtitle'>> = {
    emphasis: 'subtle',
};
