/**
 * Props for the pie-headless-radio-group component.
 */
export interface HeadlessRadioGroupProps {
    /**
     * The name of the radio group, which is submitted with form data.
     */
    name?: string;

    /**
     * The currently selected value of the radio group.
     */
    value?: string;

    /**
     * An accessible label for the radio group that is announced by screen readers.
     */
    label?: string;
}

/**
 * Props for the pie-headless-radio-button component.
 */
export interface HeadlessRadioButtonProps {
    /**
     * The value that this radio button represents.
     */
    value?: string;

    /**
     * If true, the radio button will be in a disabled state.
     */
    disabled?: boolean;
}
