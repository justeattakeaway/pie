export interface ListItemProps {
    /**
     * The primary text content of the list item.
     */
    primaryText?: string;

    /**
     * The secondary text content of the list item.
     */
    secondaryText?: string;

    /**
     * When true, applies bold styling to the primary text.
     *
     * @default false
     */
    isBold?: boolean;

    /**
     * When true, applies compact styling to the list item.
     *
     * @default false
     */
    isCompact?: boolean;
}
