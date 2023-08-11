import { RTLComponentProps } from '@justeattakeaway/pie-webc-core';

export const labelPlacements = ['leading', 'trailing'] as const;

export type AriaProps = {
    label?: string,
    describedBy?: string
};

export type LabelProps = {
    label: string;
    labelPlacement: typeof labelPlacements[number];
  } | {
    label: string;
    labelPlacement?: never;
  } | {
    label?: never;
    labelPlacement?: never;
  };

export type ToggleSwitchProps = RTLComponentProps & LabelProps & {
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
}

/**
 * Event name for when the toggle switch checked state is changed.
 *
 * @constant
 */
export const ON_EVENT_TOGGLE_SWITCH_CHANGED = 'pie-toggle-switch-changed';
