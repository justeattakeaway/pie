import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const dataTableCellTextAlign = ['left', 'right', 'center'] as const;

export interface DataTableCellProps {
  /**
   * Text alignment for the cell content
   */
  textAlign?: typeof dataTableCellTextAlign[number];
  /**
   * Whether the cell is hidden
   */
  isHidden?: boolean;
}

export const defaultProps: ComponentDefaultProps<DataTableCellProps, 'textAlign' | 'isHidden'> = {
    textAlign: 'left',
    isHidden: false,
};
