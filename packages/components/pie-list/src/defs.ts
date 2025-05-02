export interface ListProps {
    /**
     * Specifies the list variant
     */
    variant?: 'default' | 'compact';

    /**
     * Whether the list has interactive items
     */
    interactive?: boolean;

    /**
     * Whether to show dividers between list items
     */
    dividers?: boolean;

    /**
     * The threshold of items at which the component automatically switches to using
     * the repeat directive for better performance. Default is 20.
     */
    optimizeThreshold?: number;
}
