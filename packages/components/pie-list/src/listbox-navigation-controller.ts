import { type ReactiveController, type ReactiveControllerHost } from 'lit';
import { type NavigableOption, type SelectionType } from './defs';
import { MultiSelectionStrategy } from './selection-strategies/multi-selection-strategy';
import { SingleSelectionStrategy } from './selection-strategies/single-selection-strategy';

export interface SelectionStrategy {
    handleKeyDown(event: KeyboardEvent, currentIndex: number): void;
    handleOptionClick(option: NavigableOption, index: number): void;
    resetTabindexState(): void;
}

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
        this.host.addEventListener('focusin', this.handleFocusIn, { signal });
        this.host.addEventListener('focusout', this.handleFocusOut, { signal });
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
    // unset / pointing nowhere. Strategies use this to prefer it over selection
    // when picking the roving item.
    getActiveDescendantIndex (): number {
        const id = this.host.getAttribute('aria-activedescendant');
        if (!id) return -1;
        return this.options.findIndex((opt) => opt.id === id);
    }

    private updateStrategy () {
        const type = this.host.selectionType;

        if (type === 'multi') {
            if (!(this.strategy instanceof MultiSelectionStrategy)) {
                this.strategy = new MultiSelectionStrategy(this);
                this.resetTabindexState();
            }
        } else if (type === 'single') {
            if (!(this.strategy instanceof SingleSelectionStrategy)) {
                this.strategy = new SingleSelectionStrategy(this);
                this.resetTabindexState();
            }
        } else {
            this.strategy = null;
            this.options.forEach((opt) => opt.removeAttribute('tabindex'));
            this.host.removeAttribute('aria-activedescendant');
        }
    }

    resetTabindexState () {
        if (this.strategy) {
            this.strategy.resetTabindexState();
        }
    }

    private handleFocusIn = (event: FocusEvent) => {
        if (!this.strategy) return;
        const paths = event.composedPath();
        const focusedOption = this.options.find((opt) => paths.includes(opt));

        if (focusedOption) {
            const index = this.options.indexOf(focusedOption);
            this.options.forEach((opt, i) => {
                opt.tabIndex = (i === index) ? 0 : -1;
            });
            // Persists after focus leaves the list (intentional — kept on focusOut).
            this.host.setAttribute('aria-activedescendant', focusedOption.id);
        }
    };

    private handleFocusOut = (event: FocusEvent) => {
        if (!this.strategy) return;
        const relatedTarget = event.relatedTarget as Node | null;
        if (!this.host.contains(relatedTarget)) {
            this.resetTabindexState();
        }
    };

    private handleKeyDown = (event: KeyboardEvent) => {
        if (!this.strategy) return;
        const currentIndex = this.options.findIndex((opt) => opt.tabIndex === 0);
        if (currentIndex === -1) return;

        this.strategy.handleKeyDown(event, currentIndex);
    };

    private handleClick = (event: MouseEvent) => {
        // Ignore clicks completely if selection-type is undefined
        if (!this.strategy) return;

        const paths = event.composedPath();
        const clickedOption = this.options.find((opt) => paths.includes(opt));

        if (clickedOption) {
            const index = this.options.indexOf(clickedOption);
            this.host.setAttribute('aria-activedescendant', clickedOption.id);
            this.strategy.handleOptionClick(clickedOption, index);
        }
    };

    focusOption (index: number) {
        if (index < 0 || index >= this.options.length) return;
        this.options[index].focus();
    }

    toggleSelection (option: NavigableOption, state: boolean) {
        if (option.selected === state) return;
        option.selected = state;

        this.host.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }
}
