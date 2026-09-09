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

/**
 * The two patterns the panel can present as. Inferred from the `action` slot rather than
 * configured: an empty `action` slot is a tooltip, a filled one is a non-modal dialog.
 */
export const modes = ['tooltip', 'dialog'] as const;

export type TooltipMode = typeof modes[number];

type AriaProps = {
    /**
     * The accessible name for the close button. Required whenever `isDismissible` is set.
     */
    close?: string;

    /**
     * The accessible name for the panel in dialog mode. Only used when `heading` is not provided.
     */
    label?: string;
};

export interface TooltipProps {
    /**
     * The `id` of the element the panel is anchored to. The trigger lives elsewhere in the
     * DOM and is never slotted into the tooltip.
     */
    trigger?: string;

    /**
     * When true, the panel is visible. The component never writes to this property: the
     * consumer owns it and updates it in response to the close event.
     */
    isOpen?: boolean;

    /**
     * The side of the trigger the panel sits on, and its alignment along the cross axis.
     */
    position?: typeof positions[number];

    /**
     * How the panel sizes itself. `default` is a fixed 280px and wraps, `fit-to-content` is as
     * wide as its content, and `fill-container` matches the inline size of the trigger's parent
     * element. Not applied when `type` is `icon`.
     */
    size?: typeof sizes[number];

    /**
     * The colour treatment of the panel. `default` is the dark panel, `inverse` the light one.
     */
    variant?: typeof variants[number];

    /**
     * The presentation of the panel. `icon` is the compact treatment intended for icon triggers:
     * it has no arrow and is always as wide as its content, so `size` and `--tooltip-width` have
     * no effect on it.
     */
    type?: typeof types[number];

    /**
     * When true, a close button is rendered inside the panel.
     */
    isDismissible?: boolean;

    /**
     * The text to display in the panel's heading. In dialog mode this also provides the
     * panel's accessible name.
     */
    heading?: string;

    /**
     * The HTML heading tag to use for the panel's heading. Can be h2-h6.
     */
    headingLevel?: typeof headingLevels[number];

    /**
     * The ARIA labels used for various parts of the tooltip.
     */
    aria?: AriaProps;
}

export const componentSelector = 'pie-tooltip';
export const componentClass = 'c-tooltip';

export const ON_TOOLTIP_CLOSE_EVENT = `${componentSelector}-close`;

export type DefaultProps = ComponentDefaultProps<TooltipProps, keyof Omit<TooltipProps, 'trigger' | 'heading' | 'aria'>>;

export const defaultProps: DefaultProps = {
    isOpen: false,
    position: 'top',
    size: 'default',
    variant: 'default',
    type: 'default',
    isDismissible: false,
    headingLevel: 'h2',
};
