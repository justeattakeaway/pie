import { RTLComponentProps } from '@justeattakeaway/pie-webc-core';

export type AriaProps = {
    label?: string,
    describedBy?: string
};

export interface ToggleSwitchProps extends RTLComponentProps {
    /**
     * The ARIA labels used for the mtoggle switch.
     */
    aria?: AriaProps;
    /**
     * Same as the HTML checked attribute - indicates whether the switch is on or off
     */
    isChecked: boolean;
    /**
     * Same as the HTML checked attribute - indicates whether the switch disabled or not
     */
    isDisabled: boolean;
}

/**
 * Event name for when the toggle switch checked state is changed.
 *
 * @constant
 */
export const EVENT_TOGGLE_SWITCH_CHANGED = 'pie-toggle-switch-changed';
