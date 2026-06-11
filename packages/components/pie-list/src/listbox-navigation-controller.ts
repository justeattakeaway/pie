import { type ReactiveController, type ReactiveControllerHost } from 'lit';
import { type NavigableOption, type SelectionType } from './defs';
import { MultiSelectionStrategy } from './selection-strategies/multi-selection-strategy';
import { SingleSelectionStrategy } from './selection-strategies/single-selection-strategy';

export interface SelectionStrategy {
    handleKeyDown(event: KeyboardEvent, currentIndex: number): void;
    handleOptionClick(option: NavigableOption, index: number): void;
    resetActiveState(): void;
}

export const ACTIVE_ATTR = 'data-active';

export class ListboxNavigationController implements ReactiveController {
    host: ReactiveControllerHost & HTMLElement & { selectionType: SelectionType };
    private getOptions: () => NavigableOption[];
    private strategy: SelectionStrategy | null = null;

    private cleanupController: AbortController | null = null;

    constructor (
        host: ReactiveControllerHost & HTMLElement & { selectionType: SelectionType },
        getOptions: () => NavigableOption[],
    ) {
        this.host = host;
        this.getOptions = getOptions;
        this.host.addController(this);
    }

    hostConnected () {
        this.updateStrategy();

        this.cleanupController = new AbortController();
        const { signal } = this.cleanupController;

        this.host.addEventListener('keydown', this.handleKeyDown, { signal });
        this.host.addEventListener('focus', this.handleFocus, { signal });
        this.host.addEventListener('click', this.handleClick, { signal });
    }

    hostDisconnected () {
        if (this.cleanupController) {
            this.cleanupController.abort();
            this.cleanupController = null;
        }
    }

    hostUpdated () {
        this.updateStrategy();
    }

    get options () {
        return this.getOptions();
    }

    // Returns the option index referenced by aria-activedescendant, or -1 if
    // unset / pointing nowhere. Only meaningful when items have ids — use
    // getActiveIndex() for the canonical "which item is active now".
    getActiveDescendantIndex (): number {
        const id = this.host.getAttribute('aria-activedescendant');
        if (!id) return -1;
        return this.options.findIndex((opt) => opt.id === id);
    }

    // Returns the index of the option marked with data-active, or -1 if none.
    // Works regardless of whether items have ids.
    getActiveIndex (): number {
        return this.options.findIndex((opt) => opt.hasAttribute(ACTIVE_ATTR));
    }

    // Walks from `fromIndex` in `direction` (+1 or -1), returning the index of
    // the next non-disabled option, or -1 if none exists in that direction.
    findNextEnabled (fromIndex: number, direction: 1 | -1): number {
        const { options } = this;
        for (let i = fromIndex; i >= 0 && i < options.length; i += direction) {
            if (!options[i].disabled) return i;
        }
        return -1;
    }

    private updateStrategy () {
        const type = this.host.selectionType;

        if (type === 'multi') {
            if (!(this.strategy instanceof MultiSelectionStrategy)) {
                this.strategy = new MultiSelectionStrategy(this);
                this.syncActiveAttr();
            }
        } else if (type === 'single') {
            if (!(this.strategy instanceof SingleSelectionStrategy)) {
                this.strategy = new SingleSelectionStrategy(this);
                this.syncActiveAttr();
            }
        } else {
            this.strategy = null;
            this.options.forEach((opt) => opt.removeAttribute(ACTIVE_ATTR));
            this.host.removeAttribute('aria-activedescendant');
        }
    }

    // Mirrors aria-activedescendant to data-active without picking a fallback.
    // Used on initial render and slot changes: respects a markup-provided
    // active descendant, clears stale state (e.g. after the active item was
    // removed), but doesn't preemptively commit to an active item.
    syncActiveAttr () {
        if (this.options.length === 0) return;
        const activeIndex = this.getActiveDescendantIndex();
        if (activeIndex === -1) {
            this.options.forEach((opt) => opt.removeAttribute(ACTIVE_ATTR));
            if (this.host.hasAttribute('aria-activedescendant')) {
                this.host.removeAttribute('aria-activedescendant');
            }
            return;
        }
        const activeOption = this.options[activeIndex];
        this.options.forEach((opt) => {
            opt.toggleAttribute(ACTIVE_ATTR, opt === activeOption);
        });
    }

    // Marks `option` as the active descendant: sets data-active on it (clearing
    // it from any other), and aria-activedescendant on the host when the option
    // has an id. We never write an empty/dangling aria-activedescendant.
    setActive (option: NavigableOption) {
        this.options.forEach((opt) => {
            opt.toggleAttribute(ACTIVE_ATTR, opt === option);
        });
        if (option.id) {
            this.host.setAttribute('aria-activedescendant', option.id);
        }
    }

    private handleFocus = () => {
        if (!this.strategy) return;
        // First entry into the list (no prior active item): let the strategy
        // pick the initial active item.
        if (this.getActiveIndex() === -1) {
            this.strategy.resetActiveState();
        }
    };

    private handleKeyDown = (event: KeyboardEvent) => {
        if (!this.strategy) return;
        const currentIndex = this.getActiveIndex();
        if (currentIndex === -1) return;

        this.strategy.handleKeyDown(event, currentIndex);
    };

    private handleClick = (event: MouseEvent) => {
        // Ignore clicks completely if selection-type is undefined
        if (!this.strategy) return;

        const paths = event.composedPath();
        const clickedOption = this.options.find((opt) => paths.includes(opt));

        if (clickedOption && !clickedOption.disabled) {
            const index = this.options.indexOf(clickedOption);
            // Pull DOM focus to the list container. The browser would do this
            // anyway when the click target lives under a tabindex=0 ancestor,
            // but be explicit so behavior is consistent across browsers.
            this.host.focus();
            this.strategy.handleOptionClick(clickedOption, index);
        }
    };

    toggleSelection (option: NavigableOption, state: boolean) {
        if (option.selected === state) return;
        option.selected = state;

        this.host.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }
}
