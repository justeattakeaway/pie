import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { RovingTabindexController } from '../../controllers/rovingTabindex/rovingTabindexController.ts';
import { SelectionController } from '../../controllers/selection/selectionController.ts';

const componentSelector = 'radio-group-mock';

const NAVIGATION_KEYS = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End']);

type RadioElement = HTMLElement & { value: string; checked: boolean };

/**
 * A radio group (PoC mock) composing the navigation + selection controllers.
 *
 * - {@link RovingTabindexController} gives one tab stop and arrow navigation
 *   across the radios (which are focusable via `delegatesFocus`).
 * - {@link SelectionController} in `reflect: false` mode computes single-select
 *   from interactions; the group owns the `value` and reflects `checked` onto the
 *   radios (whose native inputs own the actual state).
 * - Selection follows focus for arrow navigation; clicks select explicitly. A
 *   tab *into* the group focuses without selecting.
 */
@customElement(componentSelector)
export class RadioGroupMock extends LitElement {
    public static styles = css`
        :host { display: inline-flex; flex-direction: column; gap: 8px; }
    `;

    @property()
    public value: string | null = null;

    #roving: RovingTabindexController | null = null;

    #selection: SelectionController | null = null;

    #listeners: AbortController | null = null;

    // Enabled radios only — disabled ones are excluded from navigation and selection.
    #radios = (): RadioElement[] => [...this.querySelectorAll<RadioElement>('radio-mock:not([disabled])')];

    public connectedCallback (): void {
        super.connectedCallback();
        this.setAttribute('role', 'radiogroup');

        this.#roving ??= new RovingTabindexController(this, {
            getItems: this.#radios,
            orientation: 'both',
        });

        this.#selection ??= new SelectionController(this, {
            getItems: this.#radios,
            getKey: (item) => (item as RadioElement).value,
            getSelectedKeys: () => new Set(this.value != null ? [this.value] : []),
            mode: 'single',
            reflect: false, // the radios' native inputs own their checked state
            onSelectionChange: (keys) => {
                this.value = [...keys][0] ?? null;
                this.dispatchEvent(new Event('change'));
            },
        });

        this.#listeners = new AbortController();
        const { signal } = this.#listeners;
        this.addEventListener('radio-mock-select', this.#onSelect, { signal });
        // Registered after the roving controller's own keydown listener, so by the
        // time this runs roving has already moved focus to the next radio.
        this.addEventListener('keydown', this.#onNavigationKeydown, { signal });
    }

    public disconnectedCallback (): void {
        super.disconnectedCallback();
        this.#listeners?.abort();
        this.#listeners = null;
    }

    public updated (): void {
        // The group owns the value; reflect it onto ALL controlled radios
        // (including disabled ones, which may still be pre-selected).
        [...this.querySelectorAll<RadioElement>('radio-mock')].forEach((radio) => {
            radio.checked = radio.value === this.value;
        });
    }

    #radioOf (event: Event): RadioElement | undefined {
        return event.composedPath().find((node): node is RadioElement => node instanceof HTMLElement && node.localName === 'radio-mock');
    }

    #onSelect = (event: Event): void => {
        // A radio was clicked/activated — select it.
        const radio = this.#radioOf(event);
        if (radio) this.#selection?.replace(radio);
    };

    #onNavigationKeydown = (event: KeyboardEvent): void => {
        // Selection follows focus: on a navigation key, the roving controller has
        // just moved focus to the next radio, so select whatever is now active.
        // (Reading the active item per-keystroke is robust against parent
        // re-renders, unlike tracking focus residency.) Tab is not a navigation
        // key, so the initial tab into the group does not select.
        if (!NAVIGATION_KEYS.has(event.key)) return;
        const active = this.#roving?.activeItem;
        if (active) this.#selection?.replace(active);
    };

    public render () {
        return html`<slot @slotchange=${() => this.requestUpdate()}></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: RadioGroupMock;
    }
}
