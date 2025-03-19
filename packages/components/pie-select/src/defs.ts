import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const sizes = ['small', 'medium', 'large'] as const;

export const statusTypes = ['default', 'error'] as const;

export interface SelectProps {
    /**
     * The size of the select component. Can be `small`, `medium` or `large`. Defaults to `medium`.
     */
    size?: typeof sizes[number];
    /**
     * Same as the HTML disabled attribute - indicates whether the select is disabled.
     */
    disabled?: boolean;
    /**
     * Same as the HTML required attribute - indicates whether an option must be selected.
     */
    required?: boolean;
    /**
     * An optional assistive text to display below the select element. Must be provided when the status is success or error.
     */
    assistiveText?: string;
    /**
     * The status of the select component / assistive text. Can be default or error.
     */
    status?: typeof statusTypes[number];
    /**
     * The name of the select (used as a key/value pair with `value`). This is required in order to work properly with forms.
     */
    name?: string;
}

type DefaultProps = ComponentDefaultProps<SelectProps, keyof Omit<SelectProps, 'name' | 'assistiveText' >>;

export const defaultProps: DefaultProps = {
    size: 'medium',
    status: 'default',
    disabled: false,
    required: false,
};
