import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const sizes = ['small', 'medium', 'large'] as const;

export const statusTypes = ['default', 'error', 'success'] as const;

/**
 * A single selectable option, rendered as a `pie-list-item` row in the popover.
 */
export interface DropdownOption {
    /**
     * **Required:** The value the option represents. It is what the component
     * reports through its `value` property and submits with its form data.
     */
    value: string,

    /**
     * **Required:** The option's primary text. Used as the option's accessible
     * name and as the field's display text once selected.
     */
    primaryText: string,

    /**
     * Optional supporting text rendered beneath the primary text. Used as the
     * option's accessible description rather than part of its name.
     */
    secondaryText?: string,

    /**
     * When true the option cannot be selected, and keyboard focus skips it.
     */
    disabled?: boolean,
}

type AriaProps = {
    /**
     * The accessible name for the field when no visible `label` is provided.
     * Either `label` or `aria.label` should always be set.
     */
    label?: string;

    /**
     * The accessible name for the field's clear button in single-select
     * variants without search, which removes the current selection.
     */
    clearSelection?: string;

    /**
     * The accessible name for the "N selected" chip's close button (multi
     * select), which removes every selection at once.
     */
    clearAllSelections?: string;
};

export interface DropdownProps {
    /**
     * The list of options to choose from, in the order they should be shown.
     * In multi-select variants the selected options are sorted to the top of
     * the list (in alphanumeric order) whenever the popover is opened.
     */
    options?: DropdownOption[],

    /**
     * The current selection: a single option value, or — in multi-select
     * variants — an array of option values.
     */
    value?: string | string[],

    /**
     * **Required:** When true, several options can be selected at once. The
     * field shows an "N selected" chip and the popover stays open while
     * selections are made.
     */
    isMultiselect?: boolean,

    /**
     * **Required:** When true, the field becomes a text input that filters the
     * options list as the user types.
     */
    isSearchable?: boolean,

    /**
     * When true, the popover shows a loading state (a spinner plus
     * `loadingText`) instead of the options list — for use while options are
     * being fetched asynchronously.
     */
    isLoading?: boolean,

    /**
     * The text shown in the field when no selection has been made. It should
     * not contain crucial information, and disappears once a selection is made
     * (or, in searchable variants, once the user starts typing).
     */
    placeholder?: string,

    /**
     * A visible label for the field, rendered above it. When omitted, an
     * `aria.label` should be provided instead so the field keeps its
     * accessible name.
     */
    label?: string,

    /**
     * The name the component's value is submitted under when it participates
     * in a form. In multi-select variants one entry is submitted per selected
     * option, all under this name.
     */
    name?: string,

    /**
     * Helper text rendered below the field, also used to convey error or
     * success messages.
     */
    assistiveText?: string,

    /**
     * The status of the field, used for validation styling. In the `error`
     * status the assistive text is always shown.
     */
    status?: typeof statusTypes[number],

    /**
     * The vertical size of the field.
     */
    size?: typeof sizes[number],

    /**
     * When true the field cannot be interacted with.
     */
    disabled?: boolean,

    /**
     * When true the field must have a selection before its owning form can be
     * submitted.
     */
    required?: boolean,

    /**
     * The text shown in the popover while `isLoading` is true.
     */
    loadingText?: string,

    /**
     * The text shown in the popover when a search returns no matching options.
     */
    noResultsText?: string,

    /**
     * Additional ARIA properties for parts of the component that cannot be
     * derived from its other props.
     */
    aria?: AriaProps,
}

export type DefaultProps = ComponentDefaultProps<DropdownProps, keyof Omit<DropdownProps, 'options' | 'value' | 'label' | 'assistiveText' | 'placeholder' | 'loadingText' | 'noResultsText' | 'name' | 'aria'>>;

export const defaultProps: DefaultProps = {
    isMultiselect: false,
    isSearchable: false,
    isLoading: false,
    status: 'default',
    size: 'medium',
    disabled: false,
    required: false,
};
