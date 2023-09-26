export const variants = ['default', 'outline', 'inverse', 'outline-inverse'] as const;
export const interactionTypes = ['anchor', 'button', 'none'] as const;
export const padding = ['a', 'b', 'c', 'd', 'e', 'f', 'g'] as const;

export type Variant = typeof variants[number];
export type PaddingValue = typeof padding[number];

export type AriaProps = {
    label?: string;
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

    /**
     * Allows the consumer to set draggable css styles (grab/grabbing cursor styles).
     */
    isDraggable: boolean;

     /**
     * What the interaction intent of the card should be such as anchor, button or regular div (default).
     */
     interactionType?: typeof interactionTypes[number];

    /**
     * An array of padding values from a to g.
     */
    padding?: PaddingValue | PaddingValue[];
}
