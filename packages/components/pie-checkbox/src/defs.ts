import { type ComponentDefaultPropsGeneric } from '@justeattakeaway/pie-webc-core';

export type AriaProps = {
    label?: string;
    labelledby?: string;
    describedby?: string;
};
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
     * The default checked state of the checkbox.
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
     * Various ARIA attributes.
     */
    aria?: AriaProps;
}

export type DefaultProps = ComponentDefaultPropsGeneric<CheckboxProps, 'value' | 'required' | 'indeterminate' | 'checked' | 'defaultChecked'>;

export const defaultProps: DefaultProps = {
    // a default value for the html <input type="checkbox" /> value attribute.
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
    value: 'on',
    required: false,
    defaultChecked: false,
    indeterminate: false,
    checked: false,
};
