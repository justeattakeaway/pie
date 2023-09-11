export const variants = ['default', 'outline', 'inverse', 'outline-inverse'] as const;

export type Variant = typeof variants[number];

export type AriaProps = {
    linkLabel?: string;
};

export interface CardContainerProps {
    /**
     * The ARIA labels used for various parts of the card.
     */
    aria?: AriaProps;

    /**
     * When true, the card container is disabled.
     */
    disabled: boolean;

    /**
     * The URL that the card should point to (this will not take effect unless the card is a link).
     */
    href?: string;

    /**
     * Where to display the linked URL such as _self, _blank, _parent or _top (this will not take effect unless the card is a link).
     */
    target?: string;

    /**
     * What the relationship of the linked URL is (this will not take effect unless the card is a link).
     */
    rel?: string;

    /**
     * What style variant the card should be such as default or inverse.
     */
    variant: Variant;
}
