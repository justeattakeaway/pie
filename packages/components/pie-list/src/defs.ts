export type ListVariant =
    | 'static'
    | 'radio'
    | 'checkbox'
    | 'switch';

export interface ListProps {
    /**
     * Determines the ARIA semantics applied to the list.
     *
     * - `static` (default): purely presentational list (`role="list"` /
     *   `role="listitem"`) for informational content or navigation lists.
     * - `radio`: container for slotted radio controls (`role="radiogroup"`).
     *   Items have no role; the slotted control owns its own semantics.
     * - `checkbox`: container for slotted checkbox controls (`role="group"`).
     *   Items have no role; the slotted control owns its own semantics.
     * - `switch`: container for slotted switch controls (`role="group"`).
     *   Items have no role; the slotted control owns its own semantics.
     *
     * For listbox-style selection (single or multiple), use `pie-listbox`.
     */
    variant?: ListVariant;
}
