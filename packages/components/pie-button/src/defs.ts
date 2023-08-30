export const sizes = ['xsmall', 'small-productive', 'small-expressive', 'medium', 'large'] as const;
export const types = ['submit', 'button', 'reset', 'menu'] as const;
export const variants = [
    'primary', 'secondary', 'outline', 'outline-inverse', 'ghost',
    'inverse', 'ghost-inverse', 'destructive', 'destructive-ghost',
] as const;
export const iconPlacements = ['leading', 'trailing'] as const;

export type Variant = typeof variants[number];

export interface ButtonProps {
    /**
     * What size the button should be.
     */
    size: typeof sizes[number];
    /**
     * What type attribute should be applied to the button. For example submit, button or menu.
     */
    type: typeof types[number];
    /**
     * What style variant the button should be such as primary, outline or ghost.
     */
    variant: Variant;
    /**
     * The placement of the icon slot, if provided, such as leading or trailing
     */
    iconPlacement?: typeof iconPlacements[number];
    /**
     * When true, the button element is disabled.
     */
    disabled: boolean;
    /**
     * When true, the button element will occupy the full width of its container.
     */
    isFullWidth: boolean;
    /**
     * When true, displays a loading indicator inside the button.
     */
    isLoading: boolean;
}
