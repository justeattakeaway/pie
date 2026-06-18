import { type ReactiveController, type ReactiveControllerHost } from 'lit';

/**
 * Whether only one item may be selected at a time, or several.
 */
export type SelectionMode = 'single' | 'multiple';

/**
 * Configuration for {@link SelectionController}.
 */
export interface SelectionOptions {
    /**
     * Returns the ordered list of selectable items, in DOM order. Called
     * whenever the controller reflects or computes selection, so it should
     * always reflect the items currently rendered. Exclude items that should
     * not be selectable (e.g. disabled ones) here.
     */
    getItems: () => HTMLElement[];

    /**
     * Returns a stable, unique key for an item. Selection is tracked by this key
     * rather than by element identity, so it survives re-renders and data
     * changes (a reloaded list keeps its selection).
     */
    getKey: (item: HTMLElement) => string;

    /**
     * Returns the currently selected keys. This is the host's source of truth
     * (typically derived from its `value`); the controller never stores its own
     * copy of the selection.
     */
    getSelectedKeys: () => Set<string>;

    /**
     * Whether the group is single- or multi-select.
     */
    mode: SelectionMode;

    /**
     * Called with the next selection whenever an interaction changes it (never
     * when it is unchanged). The host should store this as its new value, fire
     * its own `change` event, and re-render — the controller reflects the ARIA
     * state from `getSelectedKeys()` on the next `sync()`.
     */
    onSelectionChange: (nextKeys: Set<string>) => void;

    /**
     * Returns the container element that should carry `aria-multiselectable`
     * in multiple mode. Defaults to the host. May return `null` before render.
     */
    getContainer?: () => HTMLElement | null;

    /**
     * Which attribute reflects selection on each item.
     * @default 'aria-selected'
     */
    selectionAttribute?: 'aria-selected' | 'aria-checked';

    /**
     * Whether the controller writes the selection ARIA itself — the
     * `selectionAttribute` on each item, and `aria-multiselectable` on the
     * container in multiple mode. This is about *who paints the ARIA*, not who
     * owns the state: the host always owns the value either way.
     *
     * Keep `true` for custom items with no inherent selected semantics (e.g.
     * `<div role="option">`). Set `false` when items wrap a native form control
     * (`<input type="checkbox">` / `radio`) that exposes its own checked state —
     * the controller then only computes selection and notifies via
     * `onSelectionChange`, writing no ARIA (this also suppresses
     * `aria-multiselectable`).
     * @default true
     */
    reflect?: boolean;
}

/**
 * A reactive controller that manages the **selection** layer of a composite
 * widget (listbox, grid, menu, tree, …) — distinct from, and composable with,
 * the navigation controllers.
 *
 * The host owns the selection state (its `value`); this controller holds none
 * of its own. On an interaction it reads the current selection via
 * `getSelectedKeys()`, computes the next selection, and hands it back through
 * `onSelectionChange()`. It reflects the result as `aria-selected` (or
 * `aria-checked`) on each item, and `aria-multiselectable` on the container in
 * multiple mode. Selection is keyed by a stable `getKey()` value, so it survives
 * re-renders and data changes.
 *
 * The controller is concerned *only* with selection. It does not navigate, owns
 * no keyboard or pointer listeners (the host calls its methods from its own
 * handlers), and does not manage the host's `value` or emit DOM events.
 *
 * @example
 * ```typescript
 * // Single-select, selection follows focus, composed with a navigation controller:
 * #selection = new SelectionController(this, {
 *   getItems: () => [...this.renderRoot.querySelectorAll('[role="option"]')],
 *   getKey: (item) => item.dataset.key,
 *   getSelectedKeys: () => new Set(this.value),
 *   mode: 'single',
 *   onSelectionChange: (keys) => { this.value = [...keys]; this.dispatchEvent(new Event('change')); },
 * });
 *
 * #nav = new ActiveDescendantController(this, {
 *   getItems: () => [...this.renderRoot.querySelectorAll('[role="option"]')],
 *   onActiveChange: (item) => item && this.#selection.replace(item), // selection follows focus
 * });
 * ```
 */
export class SelectionController implements ReactiveController {
    readonly #getItems: () => HTMLElement[];

    readonly #getKey: (item: HTMLElement) => string;

    readonly #getSelectedKeys: () => Set<string>;

    readonly #mode: SelectionMode;

    readonly #onSelectionChange: (nextKeys: Set<string>) => void;

    readonly #getContainer: () => HTMLElement | null;

    readonly #selectionAttribute: 'aria-selected' | 'aria-checked';

    readonly #reflect: boolean;

    /** Transient anchor for range selection (Shift), tracked by key. */
    #anchorKey: string | null = null;

    public constructor (
        host: ReactiveControllerHost & HTMLElement,
        options: SelectionOptions,
    ) {
        this.#getItems = options.getItems;
        this.#getKey = options.getKey;
        this.#getSelectedKeys = options.getSelectedKeys;
        this.#mode = options.mode;
        this.#onSelectionChange = options.onSelectionChange;
        this.#getContainer = options.getContainer ?? (() => host);
        this.#selectionAttribute = options.selectionAttribute ?? 'aria-selected';
        this.#reflect = options.reflect ?? true;

        host.addController(this);
    }

    public hostUpdated (): void {
        // Reflect ARIA after every render, so newly added/removed items and any
        // externally-changed value are represented correctly.
        this.sync();
    }

    /**
     * Whether the given item is currently selected.
     */
    public isSelected (item: HTMLElement): boolean {
        return this.#getSelectedKeys().has(this.#getKey(item));
    }

    /**
     * Re-applies the selection ARIA state to the current items and container.
     * Call after the items change outside a host render (e.g. `slotchange`).
     * Runs automatically on every host update.
     */
    public sync (): void {
        // Compute-only mode: the items own their selected state (e.g. native inputs).
        if (!this.#reflect) return;

        const selected = this.#getSelectedKeys();

        this.#getItems().forEach((item) => {
            item.setAttribute(this.#selectionAttribute, String(selected.has(this.#getKey(item))));
        });

        const container = this.#getContainer();
        if (!container) return;

        if (this.#mode === 'multiple') {
            container.setAttribute('aria-multiselectable', 'true');
        } else {
            container.removeAttribute('aria-multiselectable');
        }
    }

    /**
     * Makes the given item the entire selection (replacing any existing
     * selection). The natural action for single-select, or a plain click in
     * multiple mode.
     */
    public replace (item: HTMLElement): void {
        const key = this.#getKey(item);
        this.#anchorKey = key;
        this.#commit(new Set([key]));
    }

    /**
     * Toggles the given item. In single mode this selects it (single-select is
     * not emptied by toggling); in multiple mode it adds or removes the item.
     */
    public toggle (item: HTMLElement): void {
        const key = this.#getKey(item);
        this.#anchorKey = key;

        if (this.#mode === 'single') {
            this.#commit(new Set([key]));
            return;
        }

        const next = new Set(this.#getSelectedKeys());
        if (next.has(key)) {
            next.delete(key);
        } else {
            next.add(key);
        }

        this.#commit(next);
    }

    /**
     * Selects the contiguous range from the anchor (the last item toggled or
     * replaced) to the given item. Used for Shift+click / Shift+Arrow. In single
     * mode this falls back to {@link replace}.
     */
    public extendTo (item: HTMLElement): void {
        if (this.#mode === 'single') {
            this.replace(item);
            return;
        }

        const items = this.#getItems();
        const targetIndex = items.indexOf(item);
        if (targetIndex === -1) return;

        const anchorIndex = this.#anchorKey === null
            ? targetIndex
            : items.findIndex((candidate) => this.#getKey(candidate) === this.#anchorKey);
        const from = anchorIndex === -1 ? targetIndex : anchorIndex;

        const [start, end] = from <= targetIndex ? [from, targetIndex] : [targetIndex, from];

        const next = new Set<string>();
        for (let index = start; index <= end; index += 1) {
            next.add(this.#getKey(items[index]));
        }

        this.#commit(next);
    }

    /**
     * Selects every item (multiple mode only; a no-op in single mode).
     */
    public selectAll (): void {
        if (this.#mode === 'single') return;
        this.#commit(new Set(this.#getItems().map((item) => this.#getKey(item))));
    }

    /**
     * Clears the entire selection.
     */
    public clear (): void {
        this.#anchorKey = null;
        this.#commit(new Set());
    }

    #commit (next: Set<string>): void {
        // Only notify on an actual change — keeps consumers free of redundant
        // work and is loop-safe: the host re-renders, sync() reflects, done.
        if (this.#isSameSelection(this.#getSelectedKeys(), next)) return;
        this.#onSelectionChange(next);
    }

    #isSameSelection (a: Set<string>, b: Set<string>): boolean {
        return a.size === b.size && [...a].every((key) => b.has(key));
    }
}
