import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export interface RadioProps {
    /**
     * The checked state of the radio.
     */
    checked?: boolean;

    /**
     * The default checked state of the radio (not necessarily the same as the current checked state).
     * Used when the radio is part of a form that is reset.
     */
    defaultChecked?: boolean;

    /**
     * Same as the HTML disabled attribute - indicates whether or not the radio is disabled.
     */
    disabled?: boolean;

    /**
     * The name of the radio (used as a key/value pair with `value`). This is required in order to work properly with forms.
     */
    name?: string;

    /**
     * Same as native required attribute. If any radio button in a same-named group of radio buttons has the required attribute,
     * a radio button in that group must be checked, although it doesn't have to be the one with the attribute applied.
     */
    required?: boolean;

    /**
     * The value of the radio (used as a key/value pair in HTML forms with `name`).
     */
    value: string;
}

export type DefaultProps = ComponentDefaultProps<RadioProps, keyof Omit<RadioProps, 'name' | 'value'>>;

export const defaultProps: DefaultProps = {
    checked: false,
    defaultChecked: false,
    disabled: false,
    required: false,
};
