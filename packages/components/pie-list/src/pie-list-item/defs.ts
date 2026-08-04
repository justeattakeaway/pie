import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

type AriaProps = {
    button?: {
        haspopup?: 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | 'true';
    };
};

export const interactionTypes = ['none', 'radio', 'checkbox', 'switch', 'link', 'button'] as const;

export type InteractionType = typeof interactionTypes[number];

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
     * How the whole row behaves. A single prop drives the row's role, its accessible naming, whether
     * it forwards clicks, and its interactive (hover/active) states. The item always generates the
     * accessible name and description of whatever it hosts from its own text (`primaryText`,
     * `secondaryText`, `metaText`), so you never set ARIA on the item or its slotted content yourself.
     *
     * - `none` (default) - a static, non-selectable list item (`role="listitem"`).
     * - `radio` - hosts a `pie-radio` (used inside a `pie-radio-group`); the item is `presentation`.
     * - `checkbox` - hosts a `pie-checkbox` (used inside a `pie-checkbox-group`); the item is `presentation`.
     * - `switch` - hosts a `pie-switch`; there is no group, so the item stays `role="listitem"`.
     * - `link` - the whole row is a single navigation link. Slot an empty `<a slot="link" href="...">`;
     *   it is stretched over the entire row as the clickable target and named from the item's text.
     * - `button` - the whole row is a single button (for an in-page action rather than navigation).
     *   The item renders the button for you (no slotting); it is stretched invisibly over the entire
     *   row, named from the item's text, and dispatches a native `click` (pointer and keyboard).
     *   Listen for `click` on the `pie-list-item`. It is not a form control.
     *
     * Set this on each interactive row. When radio/checkbox rows sit inside a `pie-radio-group` /
     * `pie-checkbox-group`, the group lays them out as a divided list automatically; this prop
     * governs the row's own role and behaviour.
     */
    interactionType?: typeof interactionTypes[number]

    /**
     * Marks the row as disabled: it takes on the disabled styling and stops forwarding row clicks to
     * its control. Set it alongside the slotted control's own `disabled` (the control still governs
     * its own interactivity and keyboard behaviour). Has no visible effect on a non-selectable
     * (static) item.
     */
    disabled?: boolean

    /**
     * Renders a bottom divider on the item. Defaults to `false` — set it explicitly on every item
     * that should have a divider (typically all but the last in a group).
     */
    hasDivider?: boolean

    /**
     * Additional ARIA properties that the item cannot derive from its text props. `button.haspopup`
     * applies when `interactionType="button"`: its value is forwarded to the internal `<button>`.
     * Set it when the button row triggers a popup such as a dialog or menu.
     */
    aria?: AriaProps
}

export type DefaultProps = ComponentDefaultProps<ListItemProps, keyof Omit<ListItemProps, 'primaryText' | 'secondaryText' | 'metaText'>>;

export const defaultProps: DefaultProps = {
    isCompact: false,
    isBold: false,
    hasMedia: false,
    interactionType: 'none',
    disabled: false,
    hasDivider: false,
};
