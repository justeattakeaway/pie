export interface ListItemProps {
    /**
     * Whether the list item is currently selected.
     */
    selected?: boolean;
    /**
     * Whether the list item is disabled. Disabled items are skipped by the
     * parent list's keyboard navigation and ignore clicks in selectable modes.
     * Has no effect when the parent list has no `selection-type`.
     */
    disabled?: boolean;
    /**
     * The value associated with this list item, emitted on selection change.
     */
    value?: string;
}
