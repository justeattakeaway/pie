import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['neutral-alternative', 'neutral', 'outline', 'ghost', 'blue', 'green', 'yellow', 'red', 'brand', 'aubergine', 'cupcake', 'berry'] as const;
export const sizes = ['small', 'large'] as const;

export interface TagProps {
    /**
     * What style variant the tag should be such as neutral/ghost etc.
     */
    variant?: typeof variants[number];

    /**
     * When true, the "green", "yellow", "red", "blue" and "neutral" variants change their styles and become bolder
     */
    isStrong?: boolean;

    /**
     * When `true`, the tag will be rendered as a button and can be interacted with.
     */
    isInteractive?: boolean;

    /**
     * For an interactive tag, this applies the disabled attribute to the button and styles it appropriately.
     * For a non-interactive tag, this only applies the disabled styling.
     */
    disabled?: boolean;

    /**
     * What size the tag should be.
     */
    size?: typeof sizes[number];
}

export type DefaultProps = ComponentDefaultProps<TagProps>;

export const defaultProps: DefaultProps = {
    variant: 'neutral',
    isStrong: false,
    isInteractive: false,
    disabled: false,
    size: 'large',
};
