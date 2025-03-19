import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export interface OptionGroupProps {
    /**
     * Same as the HTML disabled attribute - indicates whether the select option group is disabled.
     */
    disabled?: boolean;
    /**
     * Same as the HTML label attribute - indicates the name of the group of options.
     */
    label?: string;
}

type OptionGroupDefaultProps = ComponentDefaultProps<OptionGroupProps>;

export const optionGroupDefaultProps: OptionGroupDefaultProps = {
    disabled: false,
    label: '',
};
