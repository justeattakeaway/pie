export interface ListboxOptionProps {
    /**
     * Whether the option is currently selected.
     */
    selected?: boolean;
    /**
     * Whether the option is disabled. Disabled options are skipped by
     * keyboard navigation and ignore clicks.
     */
    disabled?: boolean;
    /**
     * The value associated with this option, emitted on selection change
     * via the parent listbox's `change` event.
     */
    value?: string;
}
