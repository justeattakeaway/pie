import { type ReactiveController, type ReactiveControllerHost } from 'lit';

/**
 * The axis along which arrow-key navigation moves the active descendant.
 *
 * - `horizontal` – `ArrowLeft` / `ArrowRight`
 * - `vertical` – `ArrowUp` / `ArrowDown`
 * - `both` – all four arrow keys
 */
export type ActiveDescendantOrientation = 'horizontal' | 'vertical' | 'both';

/**
 * Configuration for {@link ActiveDescendantController}.
 */
export interface ActiveDescendantOptions {
    /**
     * Returns the ordered list of navigable items, in DOM order. This is called
     * whenever the controller needs an up-to-date view of the items (on every
     * keystroke and whenever {@link ActiveDescendantController.sync} runs), so it
     * should always reflect the items currently rendered.
     *
     * Items that should not be selectable (e.g. disabled ones) must be excluded
     * here – the controller treats every returned item as a valid active
     * descendant.
     */
    getItems: () => HTMLElement[];

    /**
     * Returns the focusable container that owns `aria-activedescendant` –
     * typically the element with the composite role (`listbox`, `grid`, `tree`,
     * `combobox`, …) and `tabindex="0"`.
     *
     * Defaults to the host element. May return `null` before the container is
     * rendered; the controller only reads it after the host has updated.
     * Assigning the role and `tabindex` to the container is the host's
     * responsibility; the controller only manages the dynamic
     * `aria-activedescendant` value.
     */
    getContainer?: () => HTMLElement | null;

    /**
     * The axis along which arrow keys move the active descendant.
     * @default 'both'
     */
    orientation?: ActiveDescendantOrientation;

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

    /**
     * Called whenever the active descendant changes (including when it is
     * cleared to `null`), and never when it is unchanged. Use it to reflect the
     * new active item however you like — e.g. `() => this.requestUpdate()` to
     * re-render and restyle, marking the active element imperatively, or
     * scrolling. The controller imposes no re-render of its own.
     *
     * This signals *focus* movement only, never selection; selection is the
     * host's concern (a listbox selects on commit, not on every move).
     */
    onActiveChange?: (item: HTMLElement | null) => void;
}

const HORIZONTAL_KEYS = new Set(['ArrowLeft', 'ArrowRight']);
const VERTICAL_KEYS = new Set(['ArrowUp', 'ArrowDown']);

/** Provides stable, unique ids for items that don't already have one. */
let nextActiveDescendantId = 0;

/**
 * A reactive controller that implements the
 * [managing focus with `aria-activedescendant`](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#managingfocusactivedescendant)
 * pattern for a composite widget.
 *
 * Unlike the roving tabindex pattern, DOM focus never leaves the container.
 * The container stays focused and its `aria-activedescendant` attribute is
 * pointed at the id of the active descendant; assistive technology then reports
 * that descendant as the focused element. Arrow keys (and optionally
 * `Home`/`End`) move the active descendant, and clicking an item makes it
 * active.
 *
 * The controller is concerned *only* with this mechanic. It does not assign the
 * container's role or `tabindex`, applies no roles to the items, adds no visual
 * focus styling (use the host's CSS to indicate the active descendant), and
 * leaves selection semantics to the host. The one piece of markup it manages on
 * the items is an `id`, which it generates when missing because the pattern
 * cannot reference an item without one.
 *
 * @example
 * ```typescript
 * import { LitElement, html } from 'lit';
 * import { ActiveDescendantController } from '@justeattakeaway/pie-webc-core';
 *
 * class MyListbox extends LitElement {
 *   #activedescendant = new ActiveDescendantController(this, {
 *     getItems: () => [...this.renderRoot.querySelectorAll('[role="option"]')],
 *     orientation: 'vertical',
 *   });
 *
 *   render () {
 *     // The container carries role + tabindex; the controller sets aria-activedescendant.
 *     return html`
 *       <div role="listbox" tabindex="0">
 *         <div role="option">One</div>
 *         <div role="option">Two</div>
 *       </div>
 *     `;
 *   }
 * }
 * ```
 */
export class ActiveDescendantController implements ReactiveController {
    readonly #host: ReactiveControllerHost & HTMLElement;

    readonly #getItems: () => HTMLElement[];

    readonly #getContainer: () => HTMLElement | null;

    readonly #orientation: ActiveDescendantOrientation;

    readonly #wrap: boolean;

    readonly #homeEndKeys: boolean;

    readonly #isRtl: () => boolean;

    readonly #onActiveChange?: (item: HTMLElement | null) => void;

    /** The active descendant, tracked by reference so it survives reordering. */
    #activeItem: HTMLElement | null = null;

    /** Aborts the container event listeners on disconnect; recreated on each connect. */
    #listeners: AbortController | null = null;

    public constructor (
        host: ReactiveControllerHost & HTMLElement,
        options: ActiveDescendantOptions,
    ) {
        this.#host = host;
        this.#getItems = options.getItems;
        this.#getContainer = options.getContainer ?? (() => host);
        this.#orientation = options.orientation ?? 'both';
        this.#wrap = options.wrap ?? true;
        this.#homeEndKeys = options.homeEndKeys ?? true;
        this.#isRtl = options.isRtl ?? (() => false);
        this.#onActiveChange = options.onActiveChange;

        host.addController(this);
    }

    public hostConnected (): void {
        // A fresh controller each connect: an aborted signal cannot be reused,
        // and the host may disconnect and reconnect over its lifetime.
        this.#listeners = new AbortController();
        const { signal } = this.#listeners;

        // Listen on the host, not the container: this runs before the first
        // render, so an inner container may not exist yet. keydown/click bubble
        // and are composed, so they reach the host from the focused container.
        this.#host.addEventListener('keydown', this.#onKeydown, { signal });
        this.#host.addEventListener('click', this.#onClick, { signal });
    }

    public hostDisconnected (): void {
        this.#listeners?.abort();
        this.#listeners = null;
    }

    public hostUpdated (): void {
        // Keep aria-activedescendant consistent after every host render, so
        // newly added/removed items pick up the correct state automatically.
        this.sync();
    }

    /**
     * The current active descendant, or `null` when the group is empty.
     */
    public get activeItem (): HTMLElement | null {
        return this.#activeItem;
    }

    /**
     * Re-applies `aria-activedescendant` for the current set of items. Call this
     * after the items change outside of a host render (for example from a slot's
     * `slotchange` event). It is also invoked automatically on every host update.
     */
    public sync (): void {
        const items = this.#getItems();

        if (items.length === 0) {
            this.#commitActive(null);
            return;
        }

        // If we have no active item, or it is no longer in the group, fall back
        // to the first item so that the group always has an active descendant.
        const next = (!this.#activeItem || !items.includes(this.#activeItem)) ? items[0] : this.#activeItem;
        this.#commitActive(next);
    }

    /**
     * Makes the given item the active descendant. Pass `scrollIntoView: true` to
     * also scroll it into view (used for keyboard navigation). Has no effect if
     * the item is not in the current group.
     */
    public setActiveItem (item: HTMLElement, { scrollIntoView = false }: { scrollIntoView?: boolean } = {}): void {
        const items = this.#getItems();
        if (!items.includes(item)) return;

        this.#commitActive(item);

        if (scrollIntoView) item.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }

    /**
     * Sets the active descendant, reflects it via `aria-activedescendant`, and –
     * only when it actually changed – notifies via `onActiveChange`. Notifying
     * solely on change keeps consumers free of redundant work and is loop-safe:
     * a consumer that re-renders triggers `sync()`, which then sees no change.
     */
    #commitActive (item: HTMLElement | null): void {
        const changed = this.#activeItem !== item;

        this.#activeItem = item;
        this.#setActiveDescendant(item);

        if (changed) this.#onActiveChange?.(item);
    }

    #setActiveDescendant (item: HTMLElement | null): void {
        const container = this.#getContainer();
        if (!container) return;

        if (!item) {
            container.removeAttribute('aria-activedescendant');
            return;
        }

        container.setAttribute('aria-activedescendant', this.#ensureId(item));
    }

    #ensureId (item: HTMLElement): string {
        if (!item.id) {
            item.id = `pie-active-descendant-${nextActiveDescendantId}`;
            nextActiveDescendantId += 1;
        }

        return item.id;
    }

    readonly #onClick = (event: MouseEvent): void => {
        const items = this.#getItems();
        const clicked = event.composedPath().find((node): node is HTMLElement => node instanceof HTMLElement && items.includes(node));

        if (!clicked) return;

        this.setActiveItem(clicked);
        // Keep DOM focus on the container so subsequent keyboard navigation works.
        this.#getContainer()?.focus();
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

        // Only act when the container itself is focused, so we don't hijack keys
        // from other focusable content inside the host.
        const container = this.#getContainer();
        if (!container || !event.composedPath().includes(container)) return;

        const items = this.#getItems();
        if (items.length === 0) return;

        event.preventDefault();

        const currentIndex = this.#activeItem ? items.indexOf(this.#activeItem) : -1;

        // With no active descendant yet, the first navigation key activates the
        // first item rather than moving relative to nothing.
        if (currentIndex === -1) {
            this.setActiveItem(items[0], { scrollIntoView: true });
            return;
        }

        const nextIndex = this.#resolveNextIndex(key, currentIndex, items.length);
        if (nextIndex !== currentIndex) {
            this.setActiveItem(items[nextIndex], { scrollIntoView: true });
        }
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
