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
  /**
   * Content value to render in the cell
   */
  value?: unknown;
  /**
   * Number of columns the cell should span
   */
  colSpan?: number;
}

export const defaultProps: ComponentDefaultProps<DataTableCellProps, 'textAlign' | 'isHidden' | 'colSpan'> = {
    textAlign: 'left',
    isHidden: false,
    colSpan: 1,
};
