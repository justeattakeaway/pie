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
     * @default true
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
}

const HORIZONTAL_KEYS = new Set(['ArrowLeft', 'ArrowRight']);
const VERTICAL_KEYS = new Set(['ArrowUp', 'ArrowDown']);

/**
 * A reactive controller that implements the
 * [roving tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#roving-tabindex)
 * keyboard pattern for a group of items.
 *
 * Exactly one item in the group is part of the page tab sequence
 * (`tabindex="0"`) at any time; the rest are removed from it
 * (`tabindex="-1"`). Arrow keys move the active item within the group, and
 * `Home` / `End` jump to the ends. Tabbing or clicking directly onto an item
 * makes it the active item so subsequent arrow keys continue from there.
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
 * class MyToolbar extends LitElement {
 *   #roving = new RovingTabindexController(this, {
 *     getItems: () => [...this.querySelectorAll('button:not([disabled])')],
 *     orientation: 'horizontal',
 *   });
 *
 *   render () {
 *     return html`<slot @slotchange=${() => this.#roving.sync()}></slot>`;
 *   }
 * }
 * ```
 */
export class RovingTabindexController implements ReactiveController {
    readonly #host: ReactiveControllerHost & HTMLElement;

    readonly #getItems: () => HTMLElement[];

    readonly #orientation: RovingTabindexOrientation;

    readonly #wrap: boolean;

    readonly #homeEndKeys: boolean;

    readonly #isRtl: () => boolean;

    /** The item that currently owns `tabindex="0"`, tracked by reference so it survives reordering. */
    #activeItem: HTMLElement | null = null;

    /** Aborts the host event listeners on disconnect; recreated on each connect. */
    #listeners: AbortController | null = null;

    public constructor (
        host: ReactiveControllerHost & HTMLElement,
        options: RovingTabindexOptions,
    ) {
        this.#host = host;
        this.#getItems = options.getItems;
        this.#orientation = options.orientation ?? 'both';
        this.#wrap = options.wrap ?? true;
        this.#homeEndKeys = options.homeEndKeys ?? true;
        this.#isRtl = options.isRtl ?? (() => false);

        host.addController(this);
    }

    public hostConnected (): void {
        // A fresh controller each connect: an aborted signal cannot be reused,
        // and the host may disconnect and reconnect over its lifetime.
        this.#listeners = new AbortController();
        const { signal } = this.#listeners;

        this.#host.addEventListener('keydown', this.#onKeydown, { signal });
        this.#host.addEventListener('focusin', this.#onFocusin, { signal });
    }

    public hostDisconnected (): void {
        this.#listeners?.abort();
        this.#listeners = null;
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
        return this.#activeItem;
    }

    /**
     * Re-applies the roving tabindex state to the current set of items. Call
     * this after the items change outside of a host render (for example from a
     * slot's `slotchange` event). It is also invoked automatically on every
     * host update.
     */
    public sync (): void {
        const items = this.#getItems();

        if (items.length === 0) {
            this.#activeItem = null;
            return;
        }

        // If we have no active item, or it is no longer in the group, fall back
        // to the first item so that the group always has exactly one tab stop.
        if (!this.#activeItem || !items.includes(this.#activeItem)) {
            [this.#activeItem] = items;
        }

        this.#applyTabindex(items);
    }

    /**
     * Makes the given item the active tab stop. Pass `focus: true` to also move
     * focus to it. Has no effect if the item is not in the current group.
     */
    public setActiveItem (item: HTMLElement, { focus = false }: { focus?: boolean } = {}): void {
        const items = this.#getItems();
        if (!items.includes(item)) return;

        this.#activeItem = item;
        this.#applyTabindex(items);

        if (focus) item.focus();
    }

    #applyTabindex (items: HTMLElement[]): void {
        items.forEach((item) => {
            item.tabIndex = item === this.#activeItem ? 0 : -1;
        });
    }

    readonly #onFocusin = (event: FocusEvent): void => {
        const items = this.#getItems();
        const focused = event.composedPath().find((node): node is HTMLElement => node instanceof HTMLElement && items.includes(node));

        if (focused && focused !== this.#activeItem) {
            this.#activeItem = focused;
            this.#applyTabindex(items);
        }
    };

    readonly #onKeydown = (event: KeyboardEvent): void => {
        const { key } = event;

        const isHorizontalKey = HORIZONTAL_KEYS.has(key);
        const isVerticalKey = VERTICAL_KEYS.has(key);
        const isHomeEndKey = this.#homeEndKeys && (key === 'Home' || key === 'End');

        const handlesHorizontal = this.#orientation !== 'vertical';
        const handlesVertical = this.#orientation !== 'horizontal';

        const isNavigationKey = (isHorizontalKey && handlesHorizontal) ||
            (isVerticalKey && handlesVertical) ||
            isHomeEndKey;

        if (!isNavigationKey || event.altKey || event.ctrlKey || event.metaKey) return;

        const items = this.#getItems();
        if (items.length === 0) return;

        // Only act when focus is genuinely within the group, so we don't hijack
        // keys from unrelated focusable content inside the host.
        const focusedIndex = event.composedPath().findIndex((node) => node instanceof HTMLElement && items.includes(node));
        if (focusedIndex === -1) return;

        const currentIndex = items.indexOf(event.composedPath()[focusedIndex] as HTMLElement);

        const nextIndex = this.#resolveNextIndex(key, currentIndex, items.length);
        if (nextIndex === currentIndex) {
            // Still prevent default scrolling on the arrow/Home/End keys we own.
            event.preventDefault();
            return;
        }

        event.preventDefault();
        this.setActiveItem(items[nextIndex], { focus: true });
    };

    #resolveNextIndex (key: string, currentIndex: number, count: number): number {
        if (key === 'Home') return 0;
        if (key === 'End') return count - 1;

        const rtl = this.#isRtl();
        const forwardKeys = new Set(['ArrowDown', rtl ? 'ArrowLeft' : 'ArrowRight']);
        const step = forwardKeys.has(key) ? 1 : -1;

        const rawIndex = currentIndex + step;

        if (this.#wrap) {
            return (rawIndex + count) % count;
        }

        return Math.max(0, Math.min(count - 1, rawIndex));
    }
}
