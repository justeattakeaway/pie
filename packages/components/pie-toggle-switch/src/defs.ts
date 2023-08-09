import { RTLComponentProps } from '@justeattakeaway/pie-webc-core';

export type LabelProps = {
    text: string;
    position: string;
}

export type ToggleSwitchProps = RTLComponentProps & {
    /**
     * Same as the HTML checked attribute - indicates whether the switch is on or off
     */
    isChecked: boolean;
    /**
     * Same as the HTML checked attribute - indicates whether the switch disabled or not
     */
    isDisabled: boolean;

    /**
     * Label values for `text` & `position: leading | trailing` of label.
     */
    label: LabelProps;
}

/**
 * Event name for when the toggle switch checked state is changed.
 *
 * @constant
 */
export const ON_EVENT_TOGGLE_SWITCH_CHANGED = 'pie-toggle-switch-changed';
