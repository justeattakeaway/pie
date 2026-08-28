---
eleventyNavigation:
    key: Web
    parent: 'Data Table'
    order: 2
shouldShowContents: true
---

## Overview

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "To organise and display data.",
            "Use when your user must navigate to a specific piece of data to complete a task."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/anatomy.svg",
    alt: "An annotated diagram of a data table with numbered callouts identifying the header, title, secondary text, bulk action bar, selected rows, action, column headers, checkbox, column header cell, sort indicator, row, row cell, footer, result display, and pagination.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Header (Optional):** Section that contains the title and secondary text.",
        "**Title:** Gives the users an overview of the content.",
        "**Secondary text (Optional):** Provides additional detail if required.",
        "**Bulk action bar (Optional):** Allows users to take action against table rows once at least one has been selected.",
        "**Selected rows:** Displays the number of rows the user has selected.",
        "**Action:** A single, or collection of Buttons that allow the user to take action against table rows.",
        "**Column headers:** Gives users an overview of the column's data along with sort options.",
        "**Checkbox:** Allows the user to select / deselect all rows.",
        "**Column header cell:** Identifies the category of content within the column below.",
        "**Sort indicator:** Allows the user to sort the column via both ascending and descending.",
        "**Row:** Horizontal group of values, containing values for multiple fields defined by columns.",
        "**Row cell:** Contains information relating to both its row and column headings it sits under.",
        "**Footer (Optional):** Section that contains the result display and pagination.",
        "**Result display (Optional):** Indicates the number of results, and how many the user is currently viewing.",
        "**Pagination:** Allows the user to navigate data across pages when the quantity is too large to be shown at once."
    ]
} %}

---

## Variants

### Default

Base style with only the header, rows and footer available.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/variants-default.svg",
    alt: "A data table in the default variant showing a header, rows of data, and a footer with pagination.",
    width: "200"
} %}

### With selection

Includes checkboxes in the first column, enabling users to select one or more rows.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/variants-with-selection.svg",
    alt: "A data table with a checkbox in the first column of each row, allowing users to select individual rows.",
    width: "200"
} %}

### With bulk action

Enables the user to select one or more rows and apply an action (the key is that the actions can be taken in bulk if needed), through the row level checkboxes in the first column.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/variants-with-bulk-action.svg",
    alt: "A data table with row checkboxes and a bulk action toolbar displayed above the table, showing actions that apply to selected rows.",
    width: "200"
} %}

---

## Modifiers

### Column header

The column header by default uses `$container-default`. An option for a strong header is available using `$support-brand-02`. The strong header is used where a page requires visual interest. Only one column header type can be used per page.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/modifiers-column-header-1.svg",
    alt: "A data table column header using the default background colour.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/modifiers-column-header-2.svg",
    alt: "A data table column header using the strong brand background colour.",
    width: "200"
} %}

---

## Content

**Title and Secondary text**

- The table's title should make it clear to the user what the table's content is and what purpose it serves.
- The secondary text can be added under the title to provide more information about the data.

**Column headers**

- Column titles should stick to one or two words that describe the data in that column.
- Column titles should use sentence-case capitalisation.
- If the last column of the table contains actions, the column header will be empty.

**Cells**

- If any cell is missing content, a `-` is used as a placeholder so there are no empty cells.

### Cell types

#### Default

Standard cell type for displaying data.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/content-default.svg",
    alt: "A data table row displaying standard text-only cells.",
    width: "200"
} %}

#### With checkbox

Only available within the first column of the table to allow users to select one or more rows. When used, the first column header also has to include a Checkbox for the 'select all' functionality.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/content-with-checkbox.svg",
    alt: "A data table row with a checkbox in the first cell for row selection.",
    width: "200"
} %}

#### Link

Link that allows the user to navigate to a different page within the application or an entirely different site. It can also be used to display phone numbers or email addresses.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/content-link.svg",
    alt: "A data table row with a cell containing a link.",
    width: "200"
} %}

#### Tag

Use when displaying values within a category; such as a status.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/content-tag.svg",
    alt: "A data table row with a cell containing a status tag.",
    width: "200"
} %}

#### With icon

Helps reinforce the data point with an icon that directly relates to the data point.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/content-icon.svg",
    alt: "A data table row with a cell containing an icon alongside text.",
    width: "200"
} %}

#### Button

Available to use within all Data Table variants, but only to be used within the most far right columns of the Data Table to allow the user to take action against a single row. A row level action would be used over the action being located in the bulk action toolbar because the action can only be taken one row at a time, and cannot be actioned in bulk.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/content-button.svg",
    alt: "A data table row with a button in the rightmost cell for a row-level action.",
    width: "200"
} %}

#### Icon button

Available to use within all Data Table variants, but only to be used within the most far right columns of the Data Table to allow the user to take action against a single row. A row level action would be used over the action being located in the bulk action toolbar because the action can only be taken one row at a time, and cannot be actioned in bulk.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/content-icon-button.svg",
    alt: "A data table row with an icon button in the rightmost cell for a row-level action.",
    width: "200"
} %}

#### Switch

Available to use within all Data Table variants, but only to be used within the most far right columns of the Data Table to allow the user to take action against a single row. A row level action would be used over the action being located in the bulk action toolbar because the action can only be taken one row at a time, and cannot be actioned in bulk.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/content-switch.svg",
    alt: "A data table row with a toggle switch in the rightmost cell for a row-level action.",
    width: "200"
} %}

---

## Overrides

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/overrides.svg",
    alt: "A data table showing cells with overridden tag, icon button, and button variants.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Tag:** The Tag's variants can be overridden.",
        "**Icon button:** The Icon button's variants can be overridden.",
        "**Button:** The Button's variants can be overridden."
    ]
} %}

---

## Behaviours

### Hover

The hover state on a row helps the user visually scan the columns of data in a row even if the row is not interactive.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/behaviour-hover.svg",
    alt: "A data table with one row highlighted to show its hover state.",
    width: "200"
} %}

---

## Pagination

The Pagination component is always placed at the bottom of the data table and indicates the current page, offers previous/next navigation controls, and can optionally display the row quantity. Use Pagination when the table's data exceeds 10 rows per page.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/behaviour-pagination-1.svg",
    alt: "A data table footer showing pagination controls on the first page.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/behaviour-pagination-2.svg",
    alt: "A data table footer showing pagination controls on a subsequent page.",
    width: "200"
} %}

---

## Sort

Columns can be sorted in ascending or descending order. Sorting controls are located within the right side of the column header cell, and are represented by a sort icon which appears while hovering over the column header. A column header has three states: unsorted (Sort), ascending (SortAscending) or descending (SortDescending). The icon indicates the current sorting state and is only visible when sorting for a column has been activated. Only the column being sorted should display an icon, and only one column can be sorted at a time.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/behaviour-sort-1.svg",
    alt: "A data table column header in its unsorted state with no sort icon visible.",
    caption: "Example of sorting controls in the unsorted state.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/behaviour-sort-2.svg",
    alt: "A data table column header in its ascending sort state with an upward sort icon.",
    caption: "Example of sorting controls in the descending order.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/behaviour-sort-3.svg",
    alt: "A data table column header in its descending sort state with a downward sort icon.",
    caption: "Example of sorting controls in the ascending order state.",
    width: "200"
} %}

---

## Select all

The Checkbox contained within the column header allows users to select all rows (across all pages), as well as deselect any rows that have been selected.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/behaviour-select-all-1.svg",
    alt: "A data table with the select all checkbox in the column header unchecked.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/behaviour-select-all-2.svg",
    alt: "A data table with the select all checkbox in the column header checked, selecting all rows.",
    width: "200"
} %}

---

## Bulk action toolbar

Bulk actions are functions that may be performed on one or more rows within a Data Table. The bulk action toolbar should only include actions that can be performed in bulk. The bulk action bar is always visible so users know they can perform certain actions when selecting one or more rows. Actions are disabled by default until the user selects at least one row. Once that happens, actions in the bulk action bar should change their state to active.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/behaviour-bulk-action-1.svg",
    alt: "A data table with the bulk action toolbar visible and actions in a disabled state before any rows are selected.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/behaviour-bulk-action-2.svg",
    alt: "A data table with one row selected and the bulk action toolbar showing active actions.",
    width: "200"
} %}

---

## Overflow

Where Tooltips are required for text overflows, the tooltip — where possible — should display underneath the cell to avoid the Tooltip sitting above the bulk action toolbar.

### Column header

In edge cases where a column title is too long, wrap the text to two lines and then truncate the rest of the text. The full text should be shown in a tooltip on hover of the individual cell.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/overflow-column-header.svg",
    alt: "A data table column header with truncated text due to overflow.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/overflow-column-header-tooltip.svg",
    alt: "A data table column header with truncated text and a tooltip showing the full text on hover.",
    width: "200"
} %}

### Cells

In cases where a string within a cell type is too long, the height of the entire row increases; wrap the text to two lines and then truncate the rest of the text. The full text should be shown in a tooltip on hover of the individual cell.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/overflow-cells.svg",
    alt: "A data table row with a cell containing truncated text due to overflow.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/overflow-cells-with-tooltip.svg",
    alt: "A data table row with a cell showing truncated text and a tooltip revealing the full content on hover.",
    width: "200"
} %}

### Data Table

If the amount of content exceeds the horizontal constraints of the Data Table, a gradient indicator is used to inform the user that more content can be accessed via horizontal scrolling. A scrollbar also appears on hover to further reiterate.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/overflow-data-table.svg",
    alt: "A data table with content exceeding its horizontal bounds, showing a gradient overflow indicator.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/overflow-data-table-with-scroll.svg",
    alt: "A data table with horizontal overflow and a scrollbar visible on hover.",
    width: "200"
} %}

---

## Interactions

A Data Table's Checkbox or sort is selected by clicking within the specified touch target area for that element.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/interactions-example-1.svg",
    alt: "A data table row showing the touch target areas for a checkbox and a sort indicator within a column header.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/interactions-example-2.svg",
    alt: "A data table showing touch target areas across a column header row and a data row, with multiple columns and a pagination area highlighted.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "Interaction area in a cell with checkbox.",
        "Interaction area in a cell with sorting behaviour at the end of a row.",
        "Interaction area in a cell in the middle of a row."
    ]
} %}

---

## Narrow

At Narrow the table reduces in width and it is likely that the Data Table's horizontal overflow will be activated. The scrollbar should always be visible. Depending on the quantity of actions within the bulk action toolbar and how long the labels are, actions can be stacked underneath and include a horizontal overflow if needed. The Pagination within the Data Table footer is reduced to only display the Icon Button controls.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/narrow-example-1.svg",
    alt: "A data table displayed at a narrow (mobile) viewport, showing a reduced-width layout with a title header, rows of data, and horizontal overflow activated.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/narrow-example-2.svg",
    alt: "A data table at a narrow viewport showing the bulk action toolbar with stacked actions due to limited horizontal space.",
    width: "200"
} %}

---

## Examples

### Default

Standard 'read-only' Data Table displaying a mixture of cell types and pagination.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/examples-default.svg",
    alt: "A read-only data table displaying a mixture of cell types and a pagination footer.",
    width: "200"
} %}

### With selection

The action is positioned outside of the Data Table because the user's selections need to be submitted.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/examples-with-selection.svg",
    alt: "A data table with row checkboxes selected and an action button positioned outside the table for submitting the user's selections.",
    width: "200"
} %}

### Button

The action is positioned within each row because the action can only be taken one row at a time and cannot be actioned in bulk.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/examples-button.svg",
    alt: "A data table with a button in the rightmost cell of each row for row-level actions.",
    width: "200"
} %}

### Bulk action with toolbar

The action is positioned within the toolbar because the action can be taken in bulk if required, allowing the user to take action against one or more row items at once.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/examples-bulk-action.svg",
    alt: "A data table with row checkboxes and a bulk action toolbar, allowing the user to apply actions to one or more selected rows at once.",
    width: "200"
} %}

### RTL Examples

Here are some examples of Data Table in RTL context.

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/example-rtl-1.svg",
    alt: "A data table displayed in a right-to-left layout context.",
    width: "200"
} %}

{% contentPageImage {
    src: "../../../assets/img/components/data-table/web/example-rtl-2.svg",
    alt: "A data table with bulk action toolbar displayed in a right-to-left layout context.",
    width: "200"
} %}
