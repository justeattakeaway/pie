import { type ReactiveController, type ReactiveControllerHost } from 'lit';

/**
 * The axis along which arrow-key navigation moves the active item.
 *
 * - `horizontal` – `ArrowLeft` / `ArrowRight`
 * - `vertical` – `ArrowUp` / `ArrowDown`
 * - `both` – all four arrow keys
 */
export type RovingTabindexOrientation = 'horizontal' | 'vertical' | 'both';

/**
 * Configuration for {@link RovingTabindexController}.
 */
export interface RovingTabindexOptions {
    /**
     * Returns the ordered list of navigable items, in DOM order. This is called
     * whenever the controller needs an up-to-date view of the items (on every
     * keystroke and whenever {@link RovingTabindexController.sync} runs), so it
     * should always reflect the items currently rendered.
     *
     * Items that should not receive focus (e.g. disabled ones) must be excluded
     * here – the controller treats every returned item as focusable.
     */
    getItems: () => HTMLElement[];

    /**
     * The axis along which arrow keys move focus.
     * @default 'both'
     */
    orientation?: RovingTabindexOrientation;

    /**
     * Whether moving past the last item wraps to the first (and vice versa).
     * @default false
     */
    wrap?: boolean;

    /**
     * Whether `Home` and `End` jump to the first and last items.
     * @default true
     */
    homeEndKeys?: boolean;

    /**
     * Returns whether the host is currently in a right-to-left context. When
     * `true`, the meaning of `ArrowLeft` / `ArrowRight` is mirrored so that
     * navigation follows the visual reading order.
     * @default () => false
     */
    isRtl?: () => boolean;

    /**
     * When provided, enables type-ahead: typing printable characters moves focus
     * to the first item whose text (as returned by this function) starts with
     * the accumulated string (case-insensitive). The buffer resets after a
     * short pause.
     */
    getItemText?: (item: HTMLElement) => string;

    /**
     * Returns whether the active item participates in the page tab sequence
     * (roving tabindex: exactly one item with `tabindex="0"`). When it returns
     * `false`, every item is removed from the tab sequence (`tabindex="-1"`)
     * and focus is only moved programmatically — the combobox-with-listbox
     * pattern, where the field is the only tab stop and arrow keys navigate
     * the list.
     * @default () => true
     */
    isTabbable?: () => boolean;

    /**
     * Returns whether type-ahead is enabled: typing printable characters
     * moves focus to the first item whose text starts with the accumulated
     * string. Disable it when the host provides its own destination for
     * printable characters (e.g. a filtering combobox, where typing goes to
     * the textbox instead).
     * @default () => true
     */
    isTypeaheadEnabled?: () => boolean;

    /**
     * Called whenever the active item changes (via keyboard navigation, focus,
     * or {@link RovingTabindexController.setActiveItem}). Not called for the
     * initial {@link RovingTabindexController.sync} assignment.
     */
    onActiveChange?: (item: HTMLElement) => void;
}

const HORIZONTAL_KEYS = new Set(['ArrowLeft', 'ArrowRight']);
const VERTICAL_KEYS = new Set(['ArrowUp', 'ArrowDown']);

/** How long the type-ahead buffer persists after the last keystroke (ms). */
const TYPEAHEAD_BUFFER_MS = 500;

/**
 * A reactive controller that implements the
 * [roving tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#roving-tabindex)
 * keyboard pattern for a group of items.
 *
 * Exactly one item in the group is part of the page tab sequence
 * (`tabindex="0"`) at any time; the rest are removed from it
 * (`tabindex="-1"`). Arrow keys move the active item within the group, `Home` /
 * `End` jump to the ends, and (when `getItemText` is provided) typing printable
 * characters moves focus to the first matching item. Tabbing or clicking
 * directly onto an item makes it the active item so subsequent arrow keys
 * continue from there.
 *
 * When `isTabbable` returns `false`, no item is part of the tab sequence —
 * every item keeps `tabindex="-1"` and focus is only moved programmatically
 * (the combobox-with-listbox pattern, where the field is the single tab stop
 * and arrow keys navigate the list).
 *
 * The controller is concerned *only* with the roving tabindex mechanics. It
 * assigns no roles or ARIA attributes, makes no assumptions about the host's
 * markup, and leaves selection semantics to the host.
 *
 * @example
 * ```typescript
 * import { LitElement, html } from 'lit';
 * import { RovingTabindexController } from '@justeattakeaway/pie-webc-core';
 *
 * class MyListbox extends LitElement {
 *   private roving = new RovingTabindexController(this, {
 *     getItems: () => [...this.renderRoot.querySelectorAll('.option')],
 *     orientation: 'vertical',
 *   });
 * }
 * ```
 */
export class RovingTabindexController implements ReactiveController {
    private host: ReactiveControllerHost & HTMLElement;

    private getItems: () => HTMLElement[];

    private orientation: RovingTabindexOrientation;

    private wrap: boolean;

    private homeEndKeys: boolean;

    private isRtl: () => boolean;

    private getItemText?: (item: HTMLElement) => string;

    private onActiveChange?: (item: HTMLElement) => void;

    /** Returns whether the active item is part of the page tab sequence. */
    private isTabbable: () => boolean;

    /** Returns whether typing printable characters navigates the group. */
    private isTypeaheadEnabled: () => boolean;

    /** The item that currently owns `tabindex="0"`, tracked by reference so it survives reordering. */
    private _activeItem: HTMLElement | null = null;

    /** Aborts the host event listeners on disconnect; recreated on each connect. */
    private _listeners: AbortController | null = null;

    /** The accumulated type-ahead string, and when it was last extended. */
    private _typeaheadBuffer = '';

    private _typeaheadTimeout: number | undefined;

    public constructor (
        host: ReactiveControllerHost & HTMLElement,
        options: RovingTabindexOptions,
    ) {
        this.host = host;
        this.getItems = options.getItems;
        this.orientation = options.orientation ?? 'both';
        this.wrap = options.wrap ?? false;
        this.homeEndKeys = options.homeEndKeys ?? true;
        this.isRtl = options.isRtl ?? (() => false);
        this.getItemText = options.getItemText;
        this.isTabbable = options.isTabbable ?? (() => true);
        this.isTypeaheadEnabled = options.isTypeaheadEnabled ?? (() => true);
        this.onActiveChange = options.onActiveChange;

        host.addController(this);
    }

    public hostConnected (): void {
        // A fresh controller each connect: an aborted signal cannot be reused,
        // and the host may disconnect and reconnect over its lifetime.
        this._listeners = new AbortController();
        const { signal } = this._listeners;

        this.host.addEventListener('keydown', this._onKeydown, { signal });
        this.host.addEventListener('focusin', this._onFocusin, { signal });
    }

    public hostDisconnected (): void {
        this._listeners?.abort();
        this._listeners = null;
        this._clearTypeahead();
    }

    public hostUpdated (): void {
        // Keep the tabindex attributes consistent after every host render, so
        // newly added/removed items pick up the correct state automatically.
        this.sync();
    }

    /**
     * The item that is currently part of the tab sequence, or `null` when the
     * group is empty.
     */
    public get activeItem (): HTMLElement | null {
        return this._activeItem;
    }

    /**
     * Re-applies the roving tabindex state to the current set of items. Call
     * this after the items change outside of a host render (for example from a
     * slot's `slotchange` event). It is also invoked automatically on every
     * host update.
     */
    public sync (): void {
        const items = this.getItems();

        if (items.length === 0) {
            this._activeItem = null;
            return;
        }

        // If we have no active item, or it is no longer in the group, fall back
        // to the first item so that the group always has exactly one tab stop.
        if (!this._activeItem || !items.includes(this._activeItem)) {
            [this._activeItem] = items;
        }

        this._applyTabindex(items);
    }

    /**
     * Makes the given item the active tab stop. Pass `focus: true` to also move
     * focus to it. Has no effect if the item is not in the current group.
     */
    public setActiveItem (item: HTMLElement, { focus = false }: { focus?: boolean } = {}): void {
        const items = this.getItems();
        if (!items.includes(item)) return;

        const changed = this._activeItem !== item;
        this._activeItem = item;
        this._applyTabindex(items);

        if (changed) this.onActiveChange?.(item);
        if (focus) item.focus();
    }

    private _applyTabindex (items: HTMLElement[]): void {
        const inTabSequence = this.isTabbable();

        items.forEach((item) => {
            if (!inTabSequence) {
                item.tabIndex = -1;
            } else {
                item.tabIndex = item === this._activeItem ? 0 : -1;
            }
        });
    }

    private _onFocusin = (event: FocusEvent): void => {
        const items = this.getItems();
        const focused = event.composedPath().find((node): node is HTMLElement => node instanceof HTMLElement && items.includes(node));

        if (focused && focused !== this._activeItem) {
            this._activeItem = focused;
            this._applyTabindex(items);
            this.onActiveChange?.(focused);
        }
    };

    private _onKeydown = (event: KeyboardEvent): void => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;

        // Only act when focus is genuinely within the group, so we don't hijack
        // keys from unrelated focusable content inside the host.
        const path = event.composedPath();
        const focusedIndex = path.findIndex((node) => node instanceof HTMLElement && this.getItems().includes(node));
        if (focusedIndex === -1) return;

        if (this.isTypeaheadEnabled() && this._handleTypeahead(event)) return;

        const { key } = event;

        const isHorizontalKey = HORIZONTAL_KEYS.has(key);
        const isVerticalKey = VERTICAL_KEYS.has(key);
        const isHomeEndKey = this.homeEndKeys && (key === 'Home' || key === 'End');

        const handlesHorizontal = this.orientation !== 'vertical';
        const handlesVertical = this.orientation !== 'horizontal';

        const isNavigationKey = (isHorizontalKey && handlesHorizontal) ||
            (isVerticalKey && handlesVertical) ||
            isHomeEndKey;

        if (!isNavigationKey) return;

        const items = this.getItems();
        if (items.length === 0) return;

        const currentIndex = items.indexOf(path[focusedIndex] as HTMLElement);

        const nextIndex = this._resolveNextIndex(key, currentIndex, items.length);
        if (nextIndex === currentIndex) {
            // Still prevent default scrolling on the arrow/Home/End keys we own.
            event.preventDefault();
            return;
        }

        event.preventDefault();
        this.setActiveItem(items[nextIndex], { focus: true });
    };

    /**
     * Extends the type-ahead buffer from a printable keystroke and moves focus
     * to the first matching item. Returns whether the keystroke was consumed.
     */
    private _handleTypeahead (event: KeyboardEvent): boolean {
        if (!this.getItemText || event.key.length !== 1) return false;

        const items = this.getItems();
        if (items.length === 0) return false;

        const key = event.key.toLowerCase();
        const candidate = this._typeaheadBuffer + key;

        let buffer = candidate;
        let match = items.find((item) => this.getItemText?.(item)?.toLowerCase().startsWith(candidate));

        if (!match && this._typeaheadBuffer !== '') {
            // A non-match restarts the buffer from the new character, so a
            // keystroke after a missed guess is never swallowed by a stale
            // prefix (standard type-ahead restart behaviour).
            buffer = key;
            match = items.find((item) => this.getItemText?.(item)?.toLowerCase().startsWith(key));
        }

        this._typeaheadBuffer = buffer;
        window.clearTimeout(this._typeaheadTimeout);
        this._typeaheadTimeout = window.setTimeout(
            () => this._clearTypeahead(),
            TYPEAHEAD_BUFFER_MS,
        );

        event.preventDefault();

        if (match) this.setActiveItem(match, { focus: true });

        return true;
    }

    private _clearTypeahead (): void {
        this._typeaheadBuffer = '';
        window.clearTimeout(this._typeaheadTimeout);
    }

    private _resolveNextIndex (key: string, currentIndex: number, count: number): number {
        if (key === 'Home') return 0;
        if (key === 'End') return count - 1;

        const rtl = this.isRtl();
        const forwardKeys = new Set(['ArrowDown', rtl ? 'ArrowLeft' : 'ArrowRight']);
        const step = forwardKeys.has(key) ? 1 : -1;

        const rawIndex = currentIndex + step;

        if (this.wrap) {
            return (rawIndex + count) % count;
        }

        return Math.max(0, Math.min(count - 1, rawIndex));
    }
}
