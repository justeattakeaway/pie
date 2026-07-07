import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const selectionTypes = ['none', 'radio', 'checkbox', 'switch'] as const;

export interface ListItemProps {
    /**
     * **Required:** Provides an overview of the content.
     */
    primaryText?: string,
    /**
     * Provides optional additional detail.
     */
    secondaryText?: string,
    /**
     * Provides further optional information about the context, status or attributes of the primary content.
     */
    metaText?: string

    /**
     * The height of the component is decreased to reduce the vertical space, and used when space needs to be saved.
     *
     * **Note**: Do not use if you require secondary text, or if you want to slot a pie-avatar, pie-thumbnail or Icon with Background component into the list item.
     */
    isCompact?: boolean

    /**
     * Sets the primary text to use a bold font-weight.
     */
    isBold?: boolean

    /**
     * Reduces the block padding to suit larger slotted media (such as a pie-thumbnail).
     *
     * **Note**: This has no effect when `secondaryText` is set, and should not be combined with `isCompact`.
     */
    hasMedia?: boolean

    /**
     * The kind of interactive control this item hosts in its `leading` or `trailing` slot. This
     * makes the whole row a selectable target: the item takes the appropriate role, provides its
     * text as the control's accessible name/description, hides the duplicated visible text, and
     * forwards row clicks to the control.
     *
     * - `none` (default) - a static, non-selectable list item (`role="listitem"`).
     * - `radio` - hosts a `pie-radio` (used inside a `pie-radio-group`); the item is `presentation`.
     * - `checkbox` - hosts a `pie-checkbox` (used inside a `pie-checkbox-group`); the item is `presentation`.
     * - `switch` - hosts a `pie-switch`; there is no group, so the item stays `role="listitem"`.
     */
    selectionType?: typeof selectionTypes[number]
}

export type DefaultProps = ComponentDefaultProps<ListItemProps, keyof Omit<ListItemProps, 'primaryText' | 'secondaryText' | 'metaText'>>;

export const defaultProps: DefaultProps = {
    isCompact: false,
    isBold: false,
    hasMedia: false,
    selectionType: 'none',
};
