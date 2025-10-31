import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const dataTableHeaderVariant = ['subtle', 'strong'];

export interface DataTableHeaderProps {
  /**
   * Heading text for the data table header
   */
  heading: string;
  /**
   * Sub heading text for the data table header
   */
  subHeading?: string;
  /**
   * Emphasis level for the header
   */
  variant?: typeof dataTableHeaderVariant[number];
}

export const defaultProps: ComponentDefaultProps<DataTableHeaderProps, keyof Omit<DataTableHeaderProps, 'heading' | 'subHeading'>> = {
    variant: 'subtle',
};
