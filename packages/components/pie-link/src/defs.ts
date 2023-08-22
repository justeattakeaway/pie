export const variants = ['default', 'high-visibility', 'inverse'] as const;
export const sizes = ['small', 'medium'] as const;
export const iconPlacements = ['leading', 'trailing'] as const;

export interface LinkProps {
    /**
     * What style variant the link should be such as default, high-visibility or inverse.
     */
    variant: typeof variants[number];
    /**
     * What size the link should be.
     */
    size: typeof sizes[number];
    /**
     * The URL that the hyperlink should point to
     */
    href: string;
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
     * The placement of the icon slot, if provided, such as leading or trailing
     */
    iconPlacement?: typeof iconPlacements[number];

}
