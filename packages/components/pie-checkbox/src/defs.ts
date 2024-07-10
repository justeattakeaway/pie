import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const statusTypes = ['default', 'success', 'error'] as const;
export interface CheckboxProps {
    /**
     * The value of the checkbox (used as a key/value pair in HTML forms with `name`).
     */
    value?: string;

    /**
     * The label value of the component
     */
    label?: string;

    /**
     * The name of the checkbox (used as a key/value pair with `value`). This is required in order to work properly with forms.
     */
    name?: string;

    /**
     * Same as the HTML disabled attribute - indicates whether or not the checkbox is disabled.
     */
    disabled?: boolean;

    /**
     * The default checked state of the checkbox (not necessarily the same as the current checked state).
     */
    defaultChecked?: boolean;

    /**
     * The checked state of the checkbox.
     */
    checked?: boolean;

    /**
     * Indicates whether the checkbox visually shows a horizontal line in the box instead of a check/tick.
     * It has no impact on whether the checkbox's value is used in a form submission. That is decided by the checked state, regardless of the indeterminate state.
     */
    indeterminate?: boolean;

    /**
     * If true, the checkbox must be checked for the form to be submittable.
     */
    required?: boolean;

    /**
     * An optional assistive text to display below the input element. Must be provided when the status is success or error.
     */
    assistiveText?: string;

    /**
     * The status of the checkbox component / assistive text. Can be default, success or error.
     */
    status?: typeof statusTypes[number];
}

export type DefaultProps = ComponentDefaultProps<CheckboxProps, keyof Omit<CheckboxProps, 'label' | 'name' | 'aria' | 'assistiveText'>>;

export const defaultProps: DefaultProps = {
    // a default value for the html <input type="checkbox" /> value attribute.
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
    value: 'on',
    disabled: false,
    defaultChecked: false,
    checked: false,
    indeterminate: false,
    required: false,
    status: 'default',
};
