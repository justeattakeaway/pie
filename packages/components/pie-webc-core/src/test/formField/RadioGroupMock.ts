import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { RovingTabindexController } from '../../controllers/rovingTabindex/rovingTabindexController.ts';
import { SelectionController } from '../../controllers/selection/selectionController.ts';

const componentSelector = 'radio-group-mock';

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

    /** Whether focus is currently within the group (to tell tab-in from arrow movement). */
    #hasFocus = false;

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

        this.addEventListener('radio-mock-select', this.#onSelect);
        this.addEventListener('focusin', this.#onFocusin);
        this.addEventListener('focusout', this.#onFocusout);
    }

    public disconnectedCallback (): void {
        super.disconnectedCallback();
        this.removeEventListener('radio-mock-select', this.#onSelect);
        this.removeEventListener('focusin', this.#onFocusin);
        this.removeEventListener('focusout', this.#onFocusout);
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

    #ownsNode (node: EventTarget | null): boolean {
        if (!(node instanceof Node)) return false;
        return this.#radios().some((radio) => radio === node || radio.contains(node) || (radio.shadowRoot?.contains(node) ?? false));
    }

    #onSelect = (event: Event): void => {
        const radio = this.#radioOf(event);
        if (radio) this.#selection?.replace(radio);
    };

    #onFocusin = (event: Event): void => {
        const radio = this.#radioOf(event);
        const movedWithinGroup = this.#hasFocus;
        this.#hasFocus = true;
        // Selection follows focus for movement *within* the group (arrow keys),
        // not for the initial tab into it. (relatedTarget is unreliable across
        // shadow boundaries, so we track focus residency instead.)
        if (radio && movedWithinGroup) this.#selection?.replace(radio);
    };

    #onFocusout = (): void => {
        // After focus settles, clear the flag if it has left the group entirely.
        queueMicrotask(() => {
            if (!this.#ownsNode(document.activeElement)) this.#hasFocus = false;
        });
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
