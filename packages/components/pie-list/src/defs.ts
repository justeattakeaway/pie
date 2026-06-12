export type InteractionType =
    | 'multi-select'
    | 'single-select'
    | 'radio'
    | 'checkbox'
    | 'switch'
    | 'none'
    | undefined;

export interface NavigableOption extends HTMLElement {
    selected: boolean;
    disabled: boolean;
    value: string;
}

export interface ListProps {
    /**
     * Determines the interaction behaviour of the list and the ARIA semantics
     * applied to it and its items.
     *
     * - `multi-select`: listbox where multiple items can be selected. Keyboard
     *   navigation and selection are managed by the list.
     * - `single-select`: listbox where one item is selected at a time. Keyboard
     *   navigation and selection are managed by the list.
     * - `radio`: container for slotted radio controls (`role="radiogroup"`).
     *   Items have no role; the slotted control owns its semantics.
     * - `checkbox`: container for slotted checkbox controls (`role="group"`).
     *   Items have no role; the slotted control owns its semantics.
     * - `switch`: container for slotted switch controls (`role="group"`).
     *   Items have no role; the slotted control owns its semantics.
     * - `none` (default): purely presentational list (`role="list"` /
     *   `role="listitem"`) for static content.
     */
    interactionType?: InteractionType;
}
