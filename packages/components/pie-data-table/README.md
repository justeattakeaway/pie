# @justeattakeaway/pie-data-table

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-data-table) | [Design Documentation](https://pie.design/components/data-table) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-data-table)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-data-table">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-data-table.svg">
  </a>
</p>

`@justeattakeaway/pie-data-table` is a Web Component built using the Lit library. It offers a simple and accessible data table component for displaying structured tabular data in web applications.



## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Usage approaches](#usage-approaches)
  - [Components](#components)
  - [pie-data-table](#pie-data-table-1)
    - [Properties](#properties)
    - [Slots](#slots)
    - [CSS Variables](#css-variables)
    - [Events](#events)
  - [pie-data-table-header](#pie-data-table-header-1)
    - [Properties](#properties-1)
    - [Slots](#slots-1)
    - [CSS Variables](#css-variables-1)
  - [pie-data-table-row](#pie-data-table-row-1)
    - [Properties](#properties-2)
  - [pie-data-table-cell and pie-data-table-head-cell](#pie-data-table-cell-and-pie-data-table-head-cell)
    - [Properties](#properties-3)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Usage approaches

`pie-data-table` supports two rendering approaches:

- **Data-driven:** Pass `columns` and `data` props directly to `pie-data-table` and the component renders the table automatically. This is the simplest approach for straightforward tabular data.
- **Composable:** Use the individual sub-components to build the table structure yourself. Choose this approach when you need full control over cell content, for example, to render icons, badges, or interactive elements inside cells.

### Components

This package includes the following components:

- `pie-data-table` — the root table component
- `pie-data-table-header` — optional header above the table with heading, sub-heading, and action buttons
- `pie-data-table-contents` — wrapper for the underlying `<table>` element
- `pie-data-table-head` — wrapper for `<thead>`
- `pie-data-table-body` — wrapper for `<tbody>`
- `pie-data-table-row` — wrapper for `<tr>`
- `pie-data-table-head-cell` — wrapper for `<th>`
- `pie-data-table-cell` — wrapper for `<td>`

---

### Components Specification

### `pie-data-table`

The root component. When `columns` and `data` props are both provided, it automatically renders an HTML table. When either is absent, the default slot is rendered instead, allowing you to display an empty state or compose the table manually using the sub-components.

#### Properties

| Prop             | Options | Description                                                                                                                          | Default |
|------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------|---------|
| `columns`        | —       | Array of column definition objects. Each column must have an `id` and `heading`. Optional: `textAlign`, `width`, `accessor`. See [Column definition](#column-definition). | `[]`    |
| `data`           | —       | Array of data objects to display. Each object's keys are matched against the `accessor` property of each column definition.          | `[]`    |
| `additionalRows` | —       | Array of additional row objects to render inside a `<tfoot>`. Useful for summary or total rows. See [Additional rows](#additional-rows). | `[]`    |

##### Column definition

Each entry in the `columns` array is an object with the following shape:

| Key         | Type                              | Required | Description                                               |
|-------------|-----------------------------------|----------|-----------------------------------------------------------|
| `id`        | `string`                          | Yes      | Unique identifier for the column.                         |
| `heading`   | `string`                          | Yes      | Display text for the column heading.                      |
| `textAlign` | `'left'` \| `'right'` \| `'center'` | No    | Text alignment for the column header and body cells.      |
| `width`     | `string`                          | No       | Inline width applied to the `<th>` element (e.g. `'200px'`). |
| `accessor`  | `string`                          | No       | Key in each data row object whose value is rendered in this column. If omitted, the cell renders empty. |

##### Additional rows

Each entry in the `additionalRows` array has the following shape:

| Key       | Type      | Description                            |
|-----------|-----------|----------------------------------------|
| `cells`   | `AdditionalCell[]` | Array of cell objects for this row. |
| `hideRow` | `boolean` | When `true`, the row is hidden via CSS. |

Each `AdditionalCell` object:

| Key        | Type                              | Description                                               |
|------------|-----------------------------------|-----------------------------------------------------------|
| `content`  | `string` \| `number`             | The content to render in the cell.                        |
| `textAlign`| `'left'` \| `'right'` \| `'center'` | Text alignment for the cell.                          |
| `colSpan`  | `number`                          | Number of columns the cell should span. Defaults to `1`. |
| `hideCell` | `boolean`                         | When `true`, the cell is hidden via CSS.                  |

#### Slots

| Slot           | Description                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------|
| `table-header` | Slot for placing a `pie-data-table-header` or custom header content above the table.                                         |
| `default`      | Rendered when there is no data to display (i.e. `data` or `columns` is empty). Use this slot to display an empty state view. |

#### CSS Variables

| Variable                               | Description                                          | Default                              |
|----------------------------------------|------------------------------------------------------|--------------------------------------|
| `--data-table-background-color`        | Background colour of the table container.            | `var(--dt-color-container-default)`  |
| `--data-table-background-hover-or-active` | Background colour on row hover.                   | `var(--dt-color-container-subtle)`   |
| `--data-table-border-color`            | Colour of all table borders.                         | `var(--dt-color-border-default)`     |
| `--data-table-border-radius`           | Border radius of the table container.                | `var(--dt-radius-rounded-c)`         |
| `--data-table-text-color`              | Text colour used across the table.                   | `var(--dt-color-content-default)`    |

#### Events

`pie-data-table` does not emit any custom events.

---

### `pie-data-table-header`

An optional header component to be placed in the `table-header` slot of `pie-data-table`. It supports a heading, a sub-heading, and action buttons.

#### Properties

| Prop         | Options                     | Description                                       | Default    |
|--------------|-----------------------------|---------------------------------------------------|------------|
| `heading`    | —                           | The heading text displayed in the header.         | —          |
| `subHeading` | —                           | Optional sub-heading text below the heading.      | —          |
| `variant`    | `'subtle'`, `'strong'`      | Controls the visual emphasis of the header. `'strong'` applies a brand background colour. | `'subtle'` |

#### Slots

| Slot            | Description                                                                                   |
|-----------------|-----------------------------------------------------------------------------------------------|
| `action-button` | Slot for one or more action buttons (e.g. `pie-button`) to display on the right side of the header. The wrapper is hidden when no elements are slotted. |

#### CSS Variables

| Variable                          | Description                                         | Default                                   |
|-----------------------------------|-----------------------------------------------------|-------------------------------------------|
| `--data-table-header-background`  | Background colour of the header.                    | `transparent` (`'strong'` variant: `var(--dt-color-support-brand-02)`) |
| `--data-table-border-color`       | Colour of the bottom border of the header.          | `var(--dt-color-border-default)`          |

---

### `pie-data-table-row`

A row component wrapping `<tr>`. Use this when composing the table manually via sub-components.

#### Properties

| Prop         | Options         | Description                              | Default |
|--------------|-----------------|------------------------------------------|---------|
| `isSelected` | `true`, `false` | Whether the row is in a selected state.  | `false` |
| `isHidden`   | `true`, `false` | Whether the row is hidden.               | `false` |

---

### `pie-data-table-cell` and `pie-data-table-head-cell`

Cell components wrapping `<td>` and `<th>` respectively. Use these when composing the table manually via sub-components.

#### Properties

| Prop        | Options                               | Description                              | Default  |
|-------------|---------------------------------------|------------------------------------------|----------|
| `textAlign` | `'left'`, `'right'`, `'center'`       | Text alignment for the cell content.     | `'left'` |
| `isHidden`  | `true`, `false`                       | Whether the cell is hidden.              | `false`  |

---

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/data-table.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-data-table></pie-data-table>
<script type="module" src="/main.js"></script>
```

**Passing columns and data (automatic rendering):**

```html
<pie-data-table id="my-table"></pie-data-table>

<script type="module">
  import '@justeattakeaway/pie-webc/components/data-table.js';

  const table = document.querySelector('#my-table');

  table.columns = [
    { id: 'name', heading: 'Name', accessor: 'name' },
    { id: 'amount', heading: 'Amount', accessor: 'amount', textAlign: 'right' },
  ];

  table.data = [
    { name: 'Order 1', amount: '£10.00' },
    { name: 'Order 2', amount: '£25.50' },
  ];
</script>
```

**With a header and additional footer rows:**

```html
<pie-data-table id="my-table">
  <pie-data-table-header
    slot="table-header"
    heading="Recent Orders"
    sub-heading="Last 30 days"
    variant="strong"
  ></pie-data-table-header>
</pie-data-table>

<script type="module">
  import '@justeattakeaway/pie-webc/components/data-table.js';
  import '@justeattakeaway/pie-webc/components/data-table-header.js';

  const table = document.querySelector('#my-table');

  table.columns = [
    { id: 'name', heading: 'Name', accessor: 'name' },
    { id: 'total', heading: 'Total', accessor: 'total', textAlign: 'right' },
  ];

  table.data = [
    { name: 'Order 1', total: '£10.00' },
    { name: 'Order 2', total: '£25.50' },
  ];

  table.additionalRows = [
    {
      cells: [
        { content: 'Grand Total', textAlign: 'left' },
        { content: '£35.50', textAlign: 'right' },
      ],
    },
  ];
</script>
```

**Displaying an empty state:**

```html
<pie-data-table>
  <p>No orders found.</p>
</pie-data-table>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/data-table.js'
```

**For React Applications:**

```jsx
import { PieDataTable } from '@justeattakeaway/pie-webc/react/data-table.js';

<PieDataTable
  columns={[
    { id: 'name', heading: 'Name', accessor: 'name' },
    { id: 'amount', heading: 'Amount', accessor: 'amount', textAlign: 'right' },
  ]}
  data={[
    { name: 'Order 1', amount: '£10.00' },
    { name: 'Order 2', amount: '£25.50' },
  ]}
/>
```

**Manual composition using sub-components (React):**

Use this approach when you need full control over the table structure — for example, to render custom cell content such as icons, badges, or interactive elements.

```jsx
import { PieDataTable } from '@justeattakeaway/pie-webc/react/data-table.js';
import { PieDataTableContents } from '@justeattakeaway/pie-webc/react/data-table-contents.js';
import { PieDataTableHead } from '@justeattakeaway/pie-webc/react/data-table-head.js';
import { PieDataTableBody } from '@justeattakeaway/pie-webc/react/data-table-body.js';
import { PieDataTableRow } from '@justeattakeaway/pie-webc/react/data-table-row.js';
import { PieDataTableHeadCell } from '@justeattakeaway/pie-webc/react/data-table-head-cell.js';
import { PieDataTableCell } from '@justeattakeaway/pie-webc/react/data-table-cell.js';

const orders = [
  { id: '001', name: 'Order 1', amount: '£10.00' },
  { id: '002', name: 'Order 2', amount: '£25.50' },
];

<PieDataTable>
  <PieDataTableContents>
    <PieDataTableHead>
      <PieDataTableRow>
        <PieDataTableHeadCell>Order</PieDataTableHeadCell>
        <PieDataTableHeadCell textAlign="right">Amount</PieDataTableHeadCell>
      </PieDataTableRow>
    </PieDataTableHead>
    <PieDataTableBody>
      {orders.map((order) => (
        <PieDataTableRow key={order.id}>
          <PieDataTableCell>{order.name}</PieDataTableCell>
          <PieDataTableCell textAlign="right">{order.amount}</PieDataTableCell>
        </PieDataTableRow>
      ))}
    </PieDataTableBody>
  </PieDataTableContents>
</PieDataTable>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
