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
     * Same as the HTML checked attribute - indicates whether or not the checkbox is checked by default (when the page loads).
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
}
