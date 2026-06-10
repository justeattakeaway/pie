export type SelectionType = 'multi' | 'single' | undefined;

export interface NavigableOption extends HTMLElement {
    selected: boolean;
    value: string;
}

export interface ListProps {
    /**
     * Determines the selection behaviour of the list.
     * - `single`: only one item can be selected at a time.
     * - `multi`: multiple items can be selected at the same time.
     * - `undefined`: no selection behaviour (purely presentational list).
     */
    selectionType?: SelectionType;
}

export interface ListSelectionChangeDetail {
    /** The `value` of the option whose selected state changed. */
    value: string;
    /** The new selected state of the option. */
    selected: boolean;
    /** The element of the option whose state changed. */
    optionElement: NavigableOption;
}

export const ON_LIST_SELECTION_CHANGE = 'pie-list-selection-change';
