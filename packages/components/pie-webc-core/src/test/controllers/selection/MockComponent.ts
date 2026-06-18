import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ActiveDescendantController } from '../../../controllers/activeDescendant/activeDescendantController.ts';
import { SelectionController } from '../../../controllers/selection/selectionController.ts';

const componentSelector = 'selection-listbox-mock';

const OPTIONS = ['Pepperoni', 'Mushroom', 'Onion', 'Olives'];

/**
 * A mock listbox host used to exercise {@link SelectionController} in browser
 * tests. It demonstrates composition: an {@link ActiveDescendantController}
 * handles navigation, while the SelectionController handles selection. The
 * component owns the value (`#selected`) as the single source of truth.
 *
 * - `multiple` – present to switch from single- to multi-select
 */
@customElement(componentSelector)
export class MockComponent extends LitElement {
    public static styles = css`
        [role="listbox"] {
            display: inline-flex;
            flex-direction: column;
            gap: 2px;
            padding: 4px;
            border: 1px solid #999;
        }

        [role="option"] {
            padding: 4px 8px;
            cursor: pointer;
        }

        [role="option"][aria-selected="true"] {
            background-color: #cde;
            font-weight: bold;
        }

        [role="listbox"]:focus [role="option"][data-active] {
            outline: 2px solid Highlight;
        }
    `;

    @property({ type: Boolean, reflect: true })
    public multiple = false;

    @property({ type: Boolean, attribute: 'follow-focus' })
    public followFocus = false;

    /** A key to pre-select declaratively in markup, to test seeding initial value. */
    @property({ attribute: 'pre-selected' })
    public preSelected = '';

    /** The component owns the selection — a set of stable keys (option labels). */
    @state()
    private _selected = new Set<string>();

    #nav: ActiveDescendantController | null = null;

    #selection: SelectionController | null = null;

    #items = () => [...this.renderRoot.querySelectorAll<HTMLElement>('[role="option"]')];

    #container = () => this.renderRoot.querySelector<HTMLElement>('[role="listbox"]');

    public connectedCallback (): void {
        super.connectedCallback();

        this.#nav ??= new ActiveDescendantController(this, {
            getItems: this.#items,
            getContainer: this.#container,
            orientation: 'vertical',
            onActiveChange: (item) => {
                // Single-select can "follow focus": select the active option as
                // it moves. Pure host wiring — the controllers don't know each other.
                if (this.followFocus && !this.multiple && item) {
                    this.#selection?.replace(item);
                }
                this.requestUpdate();
            },
        });

        this.#selection ??= new SelectionController(this, {
            getItems: this.#items,
            getKey: (item) => item.dataset.key ?? '',
            getSelectedKeys: () => this._selected,
            mode: this.multiple ? 'multiple' : 'single',
            getContainer: this.#container,
            onSelectionChange: (next) => {
                // The component is the source of truth: store the new value and
                // notify the outside world. The controller reflects ARIA on sync().
                this._selected = next;
                this.dispatchEvent(new Event('change'));
            },
        });
    }

    public firstUpdated (): void {
        const preselected = this.#items().filter((option) => option.hasAttribute('selected'));
        if (!preselected.length) return;

        // The component owns the value, so it seeds its selection from declarative
        // markup once. The controller then reflects it via getSelectedKeys().
        this._selected = new Set(preselected.map((option) => option.dataset.key ?? ''));

        // For selection-follows-focus, start navigation ON the selected option so it
        // isn't replaced as focus moves. Otherwise active and selected stay independent —
        // the SelectionController never touches aria-activedescendant.
        if (this.followFocus && !this.multiple) {
            this.#nav?.setActiveItem(preselected[0]);
        }
    }

    public updated (): void {
        const activeId = this.#nav?.activeItem?.id;
        this.#items().forEach((option) => {
            option.toggleAttribute('data-active', Boolean(activeId) && option.id === activeId);
        });
    }

    #onKeydown = (event: KeyboardEvent): void => {
        const active = this.#nav?.activeItem;
        if (!active || !this.#selection) return;

        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            if (this.multiple) {
                this.#selection.toggle(active);
            } else {
                this.#selection.replace(active);
            }
        }
    };

    #onClick = (event: MouseEvent): void => {
        const option = event.composedPath().find((node): node is HTMLElement => node instanceof HTMLElement && node.getAttribute('role') === 'option');
        if (!option || !this.#selection) return;

        if (this.multiple && event.shiftKey) {
            this.#selection.extendTo(option);
        } else if (this.multiple) {
            this.#selection.toggle(option);
        } else {
            this.#selection.replace(option);
        }
    };

    public render () {
        return html`
            <div
                role="listbox"
                tabindex="0"
                aria-label="Toppings"
                @keydown=${this.#onKeydown}
                @click=${this.#onClick}
            >
                ${OPTIONS.map((label) => html`
                    <div
                        role="option"
                        data-key=${label}
                        ?selected=${label === this.preSelected}
                        class=${classMap({ active: this.#nav?.activeItem?.dataset.key === label })}
                    >${label}</div>
                `)}
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: MockComponent;
    }
}
