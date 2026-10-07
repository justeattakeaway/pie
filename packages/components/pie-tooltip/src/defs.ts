import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const positions = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
] as const;

export const sizes = ['default', 'fit-to-content', 'fill-container'] as const;
export const variants = ['default', 'inverse'] as const;
export const types = ['default', 'icon'] as const;
export const headingLevels = ['h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const triggers = ['hover', 'focus', 'click'] as const;

/** The two patterns the panel can present as, inferred from the `action` slot. */
export const modes = ['tooltip', 'dialog'] as const;

export type TooltipMode = typeof modes[number];
export type TooltipTrigger = typeof triggers[number];

type AriaProps = {
    /** The accessible name for the close button. Required whenever `isDismissible` is set. */
    close?: string;

    /** The accessible name for the panel in dialog mode, when no `heading` is provided. */
    label?: string;
};

export interface TooltipProps {
    /** The `id` of the element the panel is anchored to. */
    trigger?: string;

    /** When true, the panel is visible. The component never writes to this property. */
    isOpen?: boolean;

    /** The preferred side and alignment; the panel repositions itself to avoid collisions. */
    position?: typeof positions[number];

    /** How the panel sizes itself. Not applied when `type` is `icon`. */
    size?: typeof sizes[number];

    /** The colour treatment of the panel. `default` is the dark panel, `inverse` the light one. */
    variant?: typeof variants[number];

    /** The presentation of the panel. `icon` is the compact, arrow-less treatment. */
    type?: typeof types[number];

    /** When true, a close button is rendered inside the panel. */
    isDismissible?: boolean;

    /** The text to display in the panel's heading. In dialog mode this also names the panel. */
    heading?: string;

    /** The HTML heading tag to use for the panel's heading. Can be h2-h6. */
    headingLevel?: typeof headingLevels[number];

    /** The ARIA labels used for various parts of the tooltip. */
    aria?: AriaProps;

    /** Which interactions request that the panel opens and closes. */
    triggers?: Array<TooltipTrigger>;
}

export const componentSelector = 'pie-tooltip';
export const componentClass = 'c-tooltip';

export const ON_TOOLTIP_OPEN_EVENT = `${componentSelector}-open`;
export const ON_TOOLTIP_CLOSE_EVENT = `${componentSelector}-close`;

export type DefaultProps = ComponentDefaultProps<TooltipProps, keyof Omit<TooltipProps, 'trigger' | 'heading' | 'aria' | 'triggers'>>;

export const defaultProps: DefaultProps = {
    isOpen: false,
    position: 'top',
    size: 'default',
    variant: 'default',
    type: 'default',
    isDismissible: false,
    headingLevel: 'h2',
};
