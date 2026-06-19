export type SelectionMode = 'single' | 'multiple';

export interface NavigableOption extends HTMLElement {
    selected: boolean;
    disabled: boolean;
    value: string;
}

export interface ListboxProps {
    /**
     * Number of options that can be selected at once.
     *
     * - `single` (default): one option selected at a time; arrow keys move
     *   active state and selection together (selection follows focus).
     * - `multiple`: any number of options selected; arrow keys move active
     *   state only, Space toggles the active option.
     */
    selectionMode?: SelectionMode;
}
