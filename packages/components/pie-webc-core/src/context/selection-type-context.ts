import { createContext } from '@lit/context';

/**
 * The kind of control a selection container imposes on its `pie-list-item` descendants. A
 * `pie-radio-group` provides `radio`, a `pie-checkbox-group` provides `checkbox`. (A `switch` has
 * no container, so it is never provided; a standalone item sets its own `selectionType` instead.)
 */
export type ProvidedSelectionType = 'radio' | 'checkbox';

/**
 * Context a selection container (a `pie-radio-group` / `pie-checkbox-group` declared as a list via
 * `variant="list"`) uses to tell its descendant `pie-list-item`s what control they host, so each
 * item derives its role, ARIA and row-click behaviour from the container rather than the author
 * repeating `selection-type` on every row. The container is the single source of truth.
 *
 * Like the other contexts it is depth-agnostic and crosses shadow boundaries, so items are found at
 * any nesting depth without prop drilling. `undefined` when no ancestor provides it (a standalone
 * item), in which case the item falls back to its own `selectionType` prop.
 */
export const selectionTypeContext = createContext<ProvidedSelectionType | undefined>(Symbol('pie-selection-type'));
