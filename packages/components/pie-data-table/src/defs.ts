import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export interface Column {
  /**
   * Unique identifier for the column
   * */
  id: string;
  /**
   * Optional property to specify the display name for the column heading
   * */
  heading: string;
  /**
   * Optional property to specify the text alignment of the column
   * */
  textAlign?: 'left' | 'right' | 'center';

  /**
   * Optional property to specify the width of the column
   * */
  width?: string;
  /**
   * Optional property to specify the key in the data object to display in this column
   * */
  accessor?: string;
}

export interface DataTableProps {
  /**
   * Array of column definitions
   */
  columns: Column[];

  /**
   * Array of data objects to display
   */
  data: Record<string, unknown>[];
}

export const defaultProps: ComponentDefaultProps<DataTableProps, keyof Omit<DataTableProps, 'columns' | 'data'>> = {
    hasBorder: true,
    isStriped: false,
};
