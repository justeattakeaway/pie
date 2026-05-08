import type { DefineComponent } from "vue";
import type {
  PieDataTable,
  PieDataTableBody,
  PieDataTableHead,
  PieDataTableHeadCell,
  PieDataTableCell,
  PieDataTableContents,
  PieDataTableHeader,
  PieDataTableRow,
} from "./dist/index.js";

type PieDataTableProps = {
  /** Array of column definitions */
  columns?: PieDataTable["columns"];
  /** Array of data objects to display */
  data?: PieDataTable["data"];
  /** Arbitrary additional rows to display at the bottom of the table */
  additionalRows?: PieDataTable["additionalRows"];
};

type PieDataTableBodyProps = {};

type PieDataTableHeadProps = {};

type PieDataTableHeadCellProps = {
  /** Text alignment for the cell content */
  textAlign?: PieDataTableHeadCell["textAlign"];
  /** Whether the cell is hidden */
  isHidden?: PieDataTableHeadCell["isHidden"];
};

type PieDataTableCellProps = {
  /** Text alignment for the cell content */
  textAlign?: PieDataTableCell["textAlign"];
  /** Whether the cell is hidden */
  isHidden?: PieDataTableCell["isHidden"];
};

type PieDataTableContentsProps = {};

type PieDataTableHeaderProps = {
  /** heading text for the data table header */
  heading?: PieDataTableHeader["heading"];
  /** Sub heading text for the data table header */
  subHeading?: PieDataTableHeader["subHeading"];
  /** Emphasis level for the header */
  variant?: PieDataTableHeader["variant"];
};

type PieDataTableRowProps = {
  /** Whether the row is currently selected */
  isSelected?: PieDataTableRow["isSelected"];
  /** Whether the row is hidden */
  isHidden?: PieDataTableRow["isHidden"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - **table-header** - Slot for custom table header content
   * - _default_ - Default slot for when there is no data to display in the table
   */
  "pie-data-table": DefineComponent<PieDataTableProps>;

  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Default slot
   */
  "pie-data-table-body": DefineComponent<PieDataTableBodyProps>;

  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Default slot
   */
  "pie-data-table-head": DefineComponent<PieDataTableHeadProps>;

  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Default slot
   */
  "pie-data-table-head-cell": DefineComponent<PieDataTableHeadCellProps>;

  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Default slot
   */
  "pie-data-table-cell": DefineComponent<PieDataTableCellProps>;

  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Default slot
   */
  "pie-data-table-contents": DefineComponent<PieDataTableContentsProps>;

  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - **action-button** - Slot for action buttons in the header
   */
  "pie-data-table-header": DefineComponent<PieDataTableHeaderProps>;

  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Default slot
   */
  "pie-data-table-row": DefineComponent<PieDataTableRowProps>;
};

declare module "vue" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface GlobalComponents extends CustomElements {}
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements extends CustomElements {}
  }
}
