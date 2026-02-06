import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export interface DataTableRowProps extends Partial<HTMLTableRowElement> {
  /**
   * Whether the row is currently selected
   */
  isSelected?: boolean;
  /**
   * Whether the row is hidden
   */
  isHidden?: boolean;
}

export const defaultProps: ComponentDefaultProps<DataTableRowProps, 'isSelected' | 'isHidden'> = {
    isSelected: false,
    isHidden: false,
};
