export const variants = ['default', 'outline', 'inverse', 'outline-inverse'] as const;
export const interactionTypes = ['anchor', 'button', 'none'] as const;
export const paddingValues = [
    'a', 'a,a', 'a,b', 'a,c', 'a,d', 'a,e', 'a,f', 'a,g',
    'b', 'b,a', 'b,b', 'b,c', 'b,d', 'b,e', 'b,f', 'b,g',
    'c', 'c,a', 'c,b', 'c,c', 'c,d', 'c,e', 'c,f', 'c,g',
    'd', 'd,a', 'd,b', 'd,c', 'd,d', 'd,e', 'd,f', 'd,g',
    'e', 'e,a', 'e,b', 'e,c', 'e,d', 'e,e', 'e,f', 'e,g',
    'f', 'f,a', 'f,b', 'f,c', 'f,d', 'f,e', 'f,f', 'f,g',
    'g', 'g,a', 'g,b', 'g,c', 'g,d', 'g,e', 'g,f', 'g,g'
] as const;

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
    variant: typeof variants[number];

    /**
     * Allows the consumer to set draggable css styles (grab/grabbing cursor styles).
     */
    isDraggable: boolean;

     /**
     * What the interaction intent of the card should be such as anchor, button or regular div (default).
     */
     interactionType?: typeof interactionTypes[number];

    /**
     * Sets the padding of the card container. Can be either a single value or two values
     * separated by a comma. Setting a single value adds padding to all sides of the card,
     * whereas setting two values will set the "paddingX, paddingY" padding. e.g `'a'` or `'a, b'`
     */
    padding?: typeof paddingValues[number];
}
