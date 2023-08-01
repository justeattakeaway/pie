export interface ToggleSwitchProps {
    /**
     * Same as the HTML checked attribute - indicates whether the switch is on or off
     */
    isChecked: boolean;
    /**
     * Same as the HTML checked attribute - indicates whether the switch disabled or not
     */
    disabled: boolean;
}

/**
 * Event name for when the toggle switch checked state is changed.
 *
 * @constant
 */
export const EVENT_TOGGLE_SWITCH_CHANGED = 'pie-toggle-switch-changed';
