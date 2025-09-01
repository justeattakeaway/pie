import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const sizes = ['small', 'medium', 'large'] as const;

export const statusTypes = ['default', 'error'] as const;

interface SelectOptionProps {
   /**
     * What HTML element the option should be such option or optgroup.
     */
    tag: 'option';

    /**
     * The text content to display for the select option.
     */
    text: string;

    /**
     * The value of the select option (used as a key/value pair in HTML forms with `name`).
     */
    value?: string;

    /**
     * Same as the HTML disabled attribute - indicates whether the select option is disabled.
     */
    disabled?: boolean;

    /**
     * Same as the HTML selected attribute - indicates whether the select option is selected by default when the page first loads.
     */
    selected?: boolean;
}

interface SelectOptionGroupProps {
    /**
     * What HTML element the option should be such option or optgroup.
     */
    tag: 'optgroup';

    /**
     * The label for the select option group.
     */
    label?: string;

    /**
     * The options within the select option group.
     */
    options: SelectOptionProps[];

    /**
     * Same as the HTML disabled attribute - indicates whether the select option group is disabled.
     */
    disabled?: boolean;
}

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
     * An optional assistive text to display below the select element. Must be provided when the status is error.
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

    /**
     * The options to display in the select. Can be an array of option objects or option group objects.
     */
    options: (SelectOptionProps | SelectOptionGroupProps)[];

    /**
     * The value of the selected option
     */
    value?: string | number;
}

type DefaultProps = ComponentDefaultProps<SelectProps, keyof Omit<SelectProps, 'name' | 'assistiveText'>>;

export const defaultProps: DefaultProps = {
    size: 'medium',
    status: 'default',
    disabled: false,
    options: [],
    value: '',
};
