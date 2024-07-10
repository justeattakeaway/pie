import { type ComponentDefaultPropsGeneric } from '@justeattakeaway/pie-webc-core';

export const statusTypes = ['default', 'success', 'error'] as const;

export interface CheckboxGroupProps {
    /**
     * The label value of the component
     */
    label?: string;

    /**
     * An optional assistive text to display below the input element. Must be provided when the status is success or error.
     */
    assistiveText?: string;

    /**
     * Same as the HTML disabled attribute - indicates whether or not the checkbox is disabled.
     */
    disabled?: boolean;

    /**
     * The status of the checkbox component / assistive text. Can be default, success or error.
     */
    status?: typeof statusTypes[number];
}

export type DefaultProps = ComponentDefaultPropsGeneric<CheckboxGroupProps, 'status'>;

export const defaultProps: DefaultProps = {
    status: 'default',
};
