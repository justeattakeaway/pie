import { createContext } from '@lit/context';

/**
 * Context used to communicate that the containing group is disabled (for example a
 * disabled `pie-radio-group`) to its `pie-list-item` descendants, so they can suppress
 * their interactive (hover and active) states. Defaults to `false` when no container
 * provides it.
 */
export const listDisabledContext = createContext<boolean>(Symbol('pie-list-disabled'));

/**
 * The accessible name and description a `pie-list-item` provides to its slotted control
 * (radio/checkbox). The item stitches these from its `primaryText`, `secondaryText` and
 * `metaText`; the control consumes them and applies them to the element that carries its
 * semantics (the host for `pie-radio`, the internal input for `pie-checkbox`).
 */
export interface ListItemControlLabel {
    label?: string;
    description?: string;
}

/**
 * Context used by a `pie-list-item` to pass its accessible name/description down to a slotted
 * control, so the control can name itself. `undefined` when there is no label to provide (for
 * example a non-selectable list).
 */
export const listItemLabelContext = createContext<ListItemControlLabel | undefined>(Symbol('pie-list-item-label'));
