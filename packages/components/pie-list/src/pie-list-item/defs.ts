export interface ListItemProps {
    /**
     * Whether the list item is currently selected.
     */
    selected?: boolean;
    /**
     * Whether the list item is disabled. Disabled items are skipped by the
     * parent list's keyboard navigation and ignore clicks in the `multi-select`
     * and `single-select` interaction modes. Has no effect for `none`,
     * `radio`, `checkbox`, or `switch` — in those modes the slotted control
     * owns its own disabled state.
     */
    disabled?: boolean;
    /**
     * The value associated with this list item, emitted on selection change.
     * Only meaningful when the parent list's `interaction-type` is
     * `multi-select` or `single-select` — these are the only modes where the
     * list owns selection state. For `none`, `radio`, `checkbox`, and `switch`,
     * the slotted control (or nothing, in the static case) owns its own value,
     * so this property is ignored.
     */
    value?: string;
}
