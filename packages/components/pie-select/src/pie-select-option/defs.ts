import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export interface SelectOptionProps {
    /**
     * Same as the HTML disabled attribute - indicates whether the select is disabled.
     */
    disabled?: boolean;
    /**
     * The value of the select option (used as a key/value pair in HTML forms with `name`).
     */
    value: string;
}

type SelectOptionDefaultProps = ComponentDefaultProps<SelectOptionProps>;

export const selectOptionDefaultProps: SelectOptionDefaultProps = {
    disabled: false,
    value: '',
};
