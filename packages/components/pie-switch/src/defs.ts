import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const labelPlacements = ['leading', 'trailing'] as const;

type AriaProps = {
    label?: string,
    describedBy?: string
};

export interface SwitchProps {
    /**
     * The ARIA labels used for the switch.
     */
    aria?: AriaProps;
    /**
     * Same as the HTML checked attribute - indicates whether the switch is on or off
     */
    checked?: boolean;
    /**
     * Same as the HTML required attribute - indicates whether the switch must be turned or not
     */
    required?: boolean;
    /**
     * Same as the HTML disabled attribute - indicates whether the switch is disabled or not
     */
    disabled?: boolean;
    /**
     * The label value of the component
     */
    label?: string;
    /**
     * The placement of the label such as leading or trailing
     */
    labelPlacement?: typeof labelPlacements[number];
    /**
     * Same as the HTML name attribute - indicates the name of the switch (for use with forms)
     */
    name?: string;
    /**
     * Same as the HTML value attribute - indicates the value of the switch (for use with forms). Defaults to 'on'.
     */
    value?: string;
}

/**
 * Event name for when the switch checked state is changed.
 *
 * @constant
 */
export const ON_SWITCH_CHANGED_EVENT = 'change';

export type DefaultProps = ComponentDefaultProps<SwitchProps, keyof Omit<SwitchProps, 'aria' | 'label' | 'name'>>;

export const defaultProps: DefaultProps = {
    checked: false,
    disabled: false,
    labelPlacement: 'leading',
    required: false,
    value: 'on',
};
