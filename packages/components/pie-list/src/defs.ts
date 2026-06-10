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

