export const variants = ['default', 'high-visibility', 'inverse'] as const;
export const sizes = ['small', 'medium'] as const;
export const iconPlacements = ['leading', 'trailing'] as const;
export const tags = ['a', 'button'] as const;
export const buttonTypes = ['submit', 'button', 'reset', 'menu'] as const;
export const underlineTypes = ['default', 'reversed'] as const;

export interface LinkProps {
     /**
     * What HTML element the link should be such as a or button.
     */
    tag: typeof tags[number];
    /**
     * What style variant the link should be such as default, high-visibility or inverse.
     */
    variant: typeof variants[number];
    /**
     * What size the link should be.
     */
    size: typeof sizes[number];
    /**
     * What underline behavior the link should have such as default or reversed
     */
    underline: typeof underlineTypes[number];
    /**
     * The URL that the hyperlink should point to
     */
    href?: string;
    /**
     * Where to display the linked URL such as _self, _blank, _parent or _top
     */
    target?: string;
    /**
     * What the relationship of the linked URL is
     */
    rel?: string;
    /**
     * When true, the link text will be bold.
     */
    isBold: boolean;
    /**
     * When true, the link will be treated as a block box
     */
    isStandalone: boolean;
    /**
     * When true, the link will apply the styles for the visited state',
     */
    hasVisited: boolean;
    /**
     * The placement of the icon slot, if provided, such as leading or trailing
     */
    iconPlacement?: typeof iconPlacements[number];
    /**
     * What type attribute should be applied if the tag is set to button. For example submit, button or menu.
     */
    type?: typeof buttonTypes[number];
}
