import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const statusTypes = ['default', 'success', 'error'] as const;

export interface RadioGroupProps {
    /**
    * The name associated with the group.
    */
    name?: string;

    /**
     * Inline (horizontal) positioning of radio items
     */
    isInline?: boolean;

    /**
     * Same as the HTML disabled attribute - indicates whether or not the radio group is disabled.
     */
    disabled?: boolean;

    /**
     * The value of the radio group (used as a key/value pair in HTML forms with `name`).
     */
    value?: string;

    /**
     * The status of the radio group component / assistive text. Can be default, success or error.
     */
    status?: typeof statusTypes[number];

    /**
     * An optional assistive text to display below the checkbox group.
     */
    assistiveText?: string;
}

/**
 * Event name for when radio group becomes disabled.
 *
 * @constant
 */
export const ON_RADIO_GROUP_DISABLED = 'pie-radio-group-disabled';

export type DefaultProps = ComponentDefaultProps<RadioGroupProps, keyof Omit<RadioGroupProps, 'assistiveText' | 'name'>>;

export const defaultProps: DefaultProps = {
    status: 'default',
    disabled: false,
    isInline: false,
    value: '',
};
