import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const dataTableHeadCellTextAlign = ['left', 'right', 'center'] as const;

export interface DataTableHeadCellProps {
  /**
   * Text alignment for the cell content
   */
  textAlign?: typeof dataTableHeadCellTextAlign[number];
  /**
   * Whether the cell is hidden
   */
  isHidden?: boolean;
}

export const defaultProps: ComponentDefaultProps<DataTableHeadCellProps, 'textAlign' | 'isHidden'> = {
    textAlign: 'left',
    isHidden: false,
};
