import { createContext } from '@lit/context';

/**
 * The kind of list a `pie-list-item` is rendered inside. Provided by the container
 * (`pie-list`, `pie-radio-group`, `pie-checkbox-group`) and consumed by `pie-list-item`
 * so it can apply the correct role and ARIA without inspecting its parent.
 *
 * - `list` - a static, non-selectable list (`pie-list`).
 * - `radiogroup` - a single-select radio list (`pie-radio-group`).
 * - `checkbox` - a multi-select checkbox list (`pie-checkbox-group`).
 */
export type ListType = 'list' | 'radiogroup' | 'checkbox';

/**
 * Context used to communicate the {@link ListType} from a list container down to its
 * `pie-list-item` descendants, at any nesting depth.
 */
export const listTypeContext = createContext<ListType>(Symbol('pie-list-type'));

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
