export const labelPlacements = ['leading', 'trailing'] as const;

export type LabelPlacement = typeof labelPlacements[number];

export type AriaProps = {
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
     * Same as the HTML checked attribute - indicates whether the switch disabled or not
     */
    isDisabled?: boolean;
    /**
     * The label value of the component
     */
    label?: string;
    /**
     * The placement of the label such as leading or trailing
     */
    labelPlacement?: LabelPlacement;
    /**
     * Same as the HTML name attribute - indicates the name of the switch (for use with forms)
     */
    name?: string;
    /**
     * Same as the HTML value attribute - indicates the value of the switch (for use with forms). Defaults to 'on'.
     */
    value: string;
}

/**
 * Event name for when the switch checked state is changed.
 *
 * @constant
 */
export const ON_SWITCH_CHANGED_EVENT = 'change';
