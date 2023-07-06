export const inputTypes = ['checkbox', 'radio'];

export interface CheckboxProps {
    /**
     * (Optional) When true, the checkbox element is checked.
     * @default false
     */
    checked: boolean;
    /**
     * (Optional) When true, the checkbox element is disabled.
     * @default false
     */
    disabled: boolean;
    /**
     * What input type should be applied.
     * @default false
     */
    inputType: typeof inputTypes[number];
}
