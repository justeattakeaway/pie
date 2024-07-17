import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const statusTypes = ['default', 'success', 'error'] as const;

export interface CheckboxGroupProps {
    /**
     * The label value of the component
     */
    label?: string;

    /**
     * An optional assistive text to display below the checkbox group.
     */
    assistiveText?: string;

    /**
     * Same as the HTML disabled attribute - indicates whether or not the checkbox group is disabled.
     */
    disabled?: boolean;

    /**
     * The status of the checkbox component / assistive text. Can be default, success or error.
     */
    status?: typeof statusTypes[number];
}

/**
 * Event name for when checkbox group becomes disabled.
 *
 * @constant
 */
export const ON_CHECKBOX_GROUP_DISABLED = 'pie-checkbox-group-disabled';

export type DefaultProps = ComponentDefaultProps<CheckboxGroupProps, 'status' | 'disabled'>;

export const defaultProps: DefaultProps = {
    status: 'default',
    disabled: false,
};
