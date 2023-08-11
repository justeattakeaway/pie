import { RTLComponentProps } from '@justeattakeaway/pie-webc-core';

export const labelPlacements = ['leading', 'trailing'] as const;

export type AriaProps = {
    label?: string,
    describedBy?: string
};

export interface ToggleSwitchProps extends RTLComponentProps {
    /**
     * The ARIA labels used for the toggle switch.
     */
    aria?: AriaProps;
    /**
     * Same as the HTML checked attribute - indicates whether the switch is on or off
     */
    isChecked?: boolean;
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
    labelPlacement?: typeof labelPlacements[number];
}

/**
 * Event name for when the toggle switch checked state is changed.
 *
 * @constant
 */
export const ON_TOGGLE_SWITCH_CHANGED_EVENT = 'pie-toggle-switch-changed';
