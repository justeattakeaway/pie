# @justeattakeaway/pie-dropdown
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-dropdown) | [Design Documentation](https://pie.design/components/dropdown) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-dropdown)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-dropdown">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-dropdown.svg">
  </a>
</p>

`@justeattakeaway/pie-dropdown` is a Web Component built using the Lit library. It offers a simple and accessible dropdown component for web applications, supporting single and multi selection, and an optional search field for filtering the options list.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties
| Prop              | Options                         | Description                                                                                                                                                                    | Default     |
|-------------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `options`         | `array`                         | The options to choose from, in display order. See [Using the options prop](#using-the-options-prop).                                                                            | `[]`        |
| `value`           | `string`, `array`               | The current selection: a single option value, or — in multi-select variants — an array of option values.                                                                        | `""`        |
| `isMultiselect`   | `boolean`                       | When true, several options can be selected at once. The field shows an "N selected" chip and the popover stays open while selections are made.                                  | `false`     |
| `isSearchable`    | `boolean`                       | When true, the field becomes a text input that filters the options list as the user types.                                                                                     | `false`     |
| `isLoading`       | `boolean`                       | When true, the popover shows a loading state (a spinner plus `loadingText`) while options are fetched asynchronously.                                                          | `false`     |
| `label`           | `string`                        | A visible label for the field, rendered above it. When omitted, provide `aria.label` instead so the field keeps its accessible name.                                            | `undefined` |
| `placeholder`     | `string`                        | The text shown when no selection has been made. It disappears once a selection is made or the user starts typing.                                                              | `undefined` |
| `name`            | `string`                        | The name the component's value is submitted under when it participates in a form. In multi-select variants one entry is submitted per selected option.                         | `undefined` |
| `assistiveText`   | `string`                        | Helper text rendered below the field, also used to convey error or success messages.                                                                                           | `undefined` |
| `status`          | `"default"`, `"error"`, `"success"` | The status of the field, used for validation styling.                                                                                                                      | `default`   |
| `size`            | `"small"`, `"medium"`, `"large"` | The vertical size of the field.                                                                                                                                             | `medium`    |
| `disabled`        | `boolean`                       | When true the field cannot be interacted with.                                                                                                                                 | `false`     |
| `required`        | `boolean`                       | When true the field must have a selection before its owning form can be submitted.                                                                                             | `false`     |
| `loadingText`     | `string`                        | The text shown in the popover while `isLoading` is true.                                                                                                                      | `"Loading results..."` |
| `noResultsText`   | `string`                        | The text shown in the popover when a search returns no matching options.                                                                                                      | `"No results"` |
| `selectedCountText` | `string`                      | The text shown in the count chip in multi-select variants when options are selected. Use a `{count}` placeholder where the number of selected options should appear, e.g. `"{count} picked"` renders as "3 picked". | `"{count} selected"` |
| `optionsAvailableText` | `string`                  | The message announced to assistive technology when a search returns matching options. Use a `{count}` placeholder where the number of matching options should appear, e.g. `"Options available: {count}"` renders as "Options available: 6" (phrasing that avoids plurals keeps the message correct for any count). | `"N option(s) available"` |
| `noSelectionText` | `string`                        | The validation message used when the dropdown is `required` and submitted without a selection (the `valueMissing` validity state). This is separate from `assistiveText`, which is the helper text rendered below the field. | `"Please select an option"` |
| `aria`            | `object`                        | Additional ARIA properties. See [Using the aria prop](#using-the-aria-prop).                                                                                                   | `undefined` |

#### Using the options prop
The `options` prop accepts an array of option objects:

| Prop           | Options   | Description                                                                                          | Default     |
|----------------|-----------|------------------------------------------------------------------------------------------------------|-------------|
| `value`        | `string`  | **Required:** The value the option represents, used for the component's `value` and form submission. | `undefined` |
| `primaryText`  | `string`  | **Required:** The option's primary text, used as its accessible name.                                 | `undefined` |
| `secondaryText`| `string`  | Supporting text rendered beneath the primary text, used as the option's accessible description.       | `undefined` |
| `disabled`     | `boolean` | When true the option cannot be selected, and keyboard focus skips it.                                 | `false`     |

```js
const options = [
    { value: 'pizza', primaryText: 'Pizza', secondaryText: 'Wood-fired, with a crisp base' },
    { value: 'burger', primaryText: 'Burger' },
    { value: 'salad', primaryText: 'Salad', disabled: true },
];
```

In multi-select variants, the selected options are sorted to the top of the list (in alphanumeric order) whenever the popover is opened.

#### Opening the dropdown
The popover opens when the field is clicked; non-searchable fields also open on keyboard focus. **Focus-open never moves focus** — it stays on the field in every variant; the arrow keys are what move focus into the option list. `Tab` reaches the field's other controls (the count chip's close button first in multi-select variants with a selection, then the single-select clear button) and then moves past the dropdown.

- **Non-searchable single select** — focus stays on the field; `ArrowDown`/`ArrowUp` move focus into the option list (the selected option, or the first one if nothing is selected), from both a closed and an open field.
- **Non-searchable multi select** — with a selection, the first tab stop is the count chip's close button: the popover opens while focus stays on the chip, so keyboard users can clear every selection with `Enter`. Tabbing from the chip moves straight to the first option — the trigger is not a tab stop while the chip is shown. Without a selection, focus stays on the trigger.
- **Searchable** — the popover does not open on focus (the `aria-expanded` state change would chase the field's focus announcement and interrupt screen readers mid-announcement); it opens on the first keystroke, the arrow keys or a click, with the caret staying in the search field so typing filters immediately. Selecting from filtered results shows the selection in the field and clears the search: the popover's filtering is never committed, so the next open starts from the full list.

Focus that is a side effect of another interaction (such as the focus returning to the field when the popover closes) never reopens it.

#### Keyboard interaction
The option list is never part of the page tab sequence in single-select variants: the field is the single tab stop, `Tab` moves past the popover entirely, and the options are navigated with the arrow keys. Pressing `Tab` or clicking outside the dropdown closes the popover. In multi-select variants the options are checkboxes, which are genuine tab stops (the checkbox-group pattern).

**Single select (non-searchable)**

| Key | Popover closed | Popover open |
|---|---|---|
| `Tab` | Focuses the field and opens the popover; focus stays on the field | — |
| `Tab` (from the field) | — | The clear button (when a selection exists), then out of the dropdown |
| `ArrowDown` / `ArrowUp` | Opens the popover and moves focus into the option list (the selected option, or the first one if nothing is selected) | Moves focus into the option list from the field; moves between options within the list (skipping disabled options) |
| `Home` / `End` (in the list) | — | Jump to the first / last option |
| Printable characters | — | Type-ahead: jump to the first option whose text starts with the typed characters (like a native `<select>`) |
| `Enter` / `Space` (on an option) | — | Selects the option and closes the popover; focus returns to the field |
| `Escape` | — | Closes the popover; focus returns to the field |

**Single select (searchable)**

| Key | Behaviour |
|---|---|
| `Tab` | Focuses the search field (the popover does not open on focus) |
| Click | Opens the popover |
| Printable characters | Open the popover when closed and filter the options as you type; typing while an option is focused returns focus to the search field first and appends to any search text already typed (`Space` still toggles the focused row's control) |
| `ArrowDown` / `ArrowUp` | Closed: open the popover and move focus into the option list. Field-focused with the popover open: move focus into the list. Within the list: move between options (skipping disabled options) |
| `Enter` (on an option) | Selects the option and closes the popover; the field shows the selection (already present when focus returns, so screen readers announce it) |
| `Escape` | Closes the popover; any typed search is discarded and the field shows the selection again |

**Multi select (non-searchable)**

| Key | With a selection (chip shown) | Without a selection |
|---|---|---|
| `Tab` | Focuses the chip's close button and opens the popover; focus stays on the chip | Focuses the trigger and opens the popover; focus stays on the trigger |
| `Tab` again | The first checkbox (the trigger is not a tab stop while the chip is shown) | The first checkbox |
| `Tab` / `Shift+Tab` (in the list) | Move between the checkboxes, then out of the dropdown | Same |
| `Space` (on a checkbox) | Toggles the option; the popover stays open | Same |
| `ArrowDown` / `ArrowUp` (on the field) | Move focus into the option list (the first checkbox) | Same |
| `Enter` (on the chip's close button) | Clears every selection | — |
| `Escape` | Closes the popover; focus returns to the field | Same |

**Multi select (searchable)** follows the same model as non-searchable multi select, with the filtering input sitting between the chip and the list: typing always searches (and returns to the field from the list first), and `ArrowDown` from the input moves focus into the option list.

#### Popover positioning
The popover always renders below the field — it never flips above the dropdown. When there is not enough room left in the viewport below, the popover is clipped by the viewport edge (consumers should avoid placing the dropdown where this can happen).

#### Using the aria prop
The `aria` prop accepts an object used to provide accessible names for the parts of the component that cannot be derived from its other props:

| Prop                  | Options   | Description                                                                                        | Default     |
|-----------------------|-----------|----------------------------------------------------------------------------------------------------|-------------|
| `label`               | `string`  | The accessible name for the field when no visible `label` is provided.                             | `undefined` |
| `clearSelection`      | `string`  | The accessible name for the field's clear button in single-select variants without search, which removes the current selection. The field's accessible name (`label`, `aria.label` or `placeholder`) is always appended for screen reader context, e.g. `"Clear selection, Meal"`. | `"Clear selection"` |
| `clearAllSelections`  | `string`  | The accessible name for the "N selected" chip's close button (multi select), which removes every selection at once, e.g. `"Clear all 2 selections"`. The field's accessible name (`label`, `aria.label` or `placeholder`) is always appended for screen reader context, e.g. `"Clear all 2 selections, Meal"`. | `"Clear all N selections"` |

#### The clear button
Which clear affordance is shown depends on the variant:

| Variant                    | Clear button                                          | What it clears                    |
|----------------------------|-------------------------------------------------------|-----------------------------------|
| Single select              | Shown while a selection exists                        | The selection                     |
| Single select (searchable) | Never shown                                           | — (typed search text is cleared by backspacing) |
| Multi select               | Never shown                                           | — (the chip's close icon clears every selection) |
| Multi select (searchable)  | Never shown                                           | — (the chip's close icon clears every selection) |

### Slots
| Slot                  | Description                                                                                                                                       |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `leadingIcon`         | An icon shown at the start of the field, visually supporting it. Slot a `pie-icons-webc` icon, e.g. `<icon-placeholder slot="leadingIcon">`.      |
| `icon-{value}`        | An icon shown at the start of a single-select option row. The slot name includes the option's `value`, e.g. `<icon-flag-gb slot="icon-gb">`. A missing slot simply renders no icon. Option icons are decorative: the option's accessible name comes from its `primaryText`. |

### CSS Variables
The component defines these CSS variables, which can be overridden:

| Variable                        | Description                                       | Default                            |
|---------------------------------|---------------------------------------------------|------------------------------------|
| `--dropdown-height`             | The height of the field.                           | `48px` (`40px` small, `56px` large) |
| `--dropdown-border-color`       | The colour of the field's border.                  | `var(--dt-color-border-form)`       |
| `--dropdown-background-color`   | The background colour of the field.                | `var(--dt-color-container-default)` |
| `--dropdown-text-color`         | The text colour of the field.                      | `var(--dt-color-content-default)`   |
| `--dropdown-placeholder-color`  | The placeholder text colour.                       | `var(--dt-color-content-subdued)`   |

### Events
| Event                  | Description                                                                                                                      |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `change`               | Fired when the selection is changed by the user. Like a native form control, it bubbles and crosses the shadow boundary.          |
| `pie-dropdown-open`    | Fired when the popover is opened. `detail: { source: "keyboard" \| "pointer" }`                                                   |
| `pie-dropdown-close`   | Fired when the popover is closed. `detail: { source: "keyboard" \| "pointer" \| "outside" \| "selection" }`                       |
| `pie-dropdown-search`  | Fired when the user types in a searchable dropdown. Use it to load options asynchronously: `detail: { searchText: string }`       |

## Usage Examples

### Single select

```html
<pie-dropdown
    label="Meal"
    placeholder="Select a meal"
    name="meal"
    .options='${[
        { value: 'pizza', primaryText: 'Pizza' },
        { value: 'burger', primaryText: 'Burger' },
        { value: 'salad', primaryText: 'Salad', disabled: true },
    ]}'
    .value='pizza'>
</pie-dropdown>
```

### Multi select

```html
<pie-dropdown
    label="Toppings"
    name="toppings"
    ?isMultiselect
    .options='${[
        { value: 'cheese', primaryText: 'Cheese', secondaryText: 'Extra mature' },
        { value: 'pepperoni', primaryText: 'Pepperoni' },
    ]}'
    .value='${['cheese']}'>
</pie-dropdown>
```

### Searchable, with asynchronous options

```html
<script type="module">
    const dropdown = document.querySelector('pie-dropdown');

    dropdown.addEventListener('pie-dropdown-search', async (event) => {
        dropdown.isLoading = true;

        const results = await fetchOptions(event.detail.searchText);

        dropdown.options = results.map((result) => ({
            value: result.id,
            primaryText: result.name,
        }));
        dropdown.isLoading = false;
    });
</script>

<pie-dropdown
    label="Restaurant location"
    placeholder="Search countries"
    ?isSearchable
    .options='${[]}'>
</pie-dropdown>
```

### With option icons

```html
<pie-dropdown label="Country" .options='${[
    { value: 'gb', primaryText: 'United Kingdom' },
    { value: 'ie', primaryText: 'Ireland' },
]}'>
    <icon-flag-gb slot="icon-gb"></icon-flag-gb>
    <icon-flag-ie slot="icon-ie"></icon-flag-ie>
</pie-dropdown>
```

## Questions and Support

If you have any questions or need help using the PIE dropdown component, please visit the [PIE Documentation](https://pie.design/components/dropdown) or contact the PIE team via our [support channels](https://pie.design/support).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/blob/main/.github/CONTRIBUTING.md) for more information about how you can contribute to the PIE Design System.
