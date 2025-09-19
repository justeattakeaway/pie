import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

type TextAlign = 'left' | 'right' | 'center';

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
  textAlign?: TextAlign;

  /**
   * Optional property to specify the width of the column
   * */
  width?: string;
  /**
   * Optional property to specify the key in the data object to display in this column
   * */
  accessor?: string;
}

export type AdditionalCell = {
  content: string | number;
  textAlign?: TextAlign;
  colSpan?: number;
  hideCell?: boolean;
};

export type DataTableAdditionalRow = {
  cells: AdditionalCell[];
  hideRow?: boolean;
};

export interface DataTableProps {
  /**
   * Array of column definitions
   */
  columns: Column[];

  /**
   * Array of data objects to display
   */
  data: Record<string, unknown>[];

  /**
   * Arbitrary additional rows to display at the bottom of the table
   */
  additionalRows?: DataTableAdditionalRow[];
}

export const defaultProps: ComponentDefaultProps<DataTableProps, keyof Omit<DataTableProps, 'columns' | 'data' >> = {
    additionalRows: [],
};
