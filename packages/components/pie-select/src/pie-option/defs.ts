import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export interface OptionProps {
    /**
     * Same as the HTML disabled attribute - indicates whether the select option is disabled.
     */
    disabled?: boolean;
    /**
     * Same as the HTML selected attribute - indicates whether the select option is selected by default when the page first loads.
     */
    selected?: boolean;
    /**
     * The value of the select option (used as a key/value pair in HTML forms with `name`).
     */
    value: string;
}

type OptionDefaultProps = ComponentDefaultProps<OptionProps>;

export const optionDefaultProps: OptionDefaultProps = {
    disabled: false,
    selected: false,
    value: '',
};
