export const variants = ['default', 'outline', 'inverse', 'outline-inverse'] as const;
export const tags = ['a', 'button'] as const;

const spacingTokens = ['a', 'b', 'c', 'd', 'e', 'f', 'g'] as const;
export const paddingValues = spacingTokens.flatMap((first) => [first, ...spacingTokens.map((second) => `${first},${second}`)]);

type PaddingValue = typeof spacingTokens[number];

export type AriaProps = {
    label?: string;
};

export interface CardProps {
    /**
     * The ARIA labels used for various parts of the card.
     */
    aria?: AriaProps;

    /**
     * When true, the card is disabled.
     */
    disabled?: boolean;

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
    variant?: typeof variants[number];

    /**
     * Allows the consumer to set draggable css styles (grab/grabbing cursor styles).
     */
    isDraggable?: boolean;

    /**
     * What HTML element the card should be such as `a` or `button`.
     */
     tag?: typeof tags[number];

    /**
     * Sets the padding of the card. Can be either a single value or two values
     * separated by a comma. Setting a single value adds padding to all sides of the card,
     * whereas setting two values will set the "paddingX, paddingY" padding. e.g `'a'` or `'a, b'`
     */
    padding?: PaddingValue | `${PaddingValue},${PaddingValue}`;
}
