import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SelectionController } from '../../controllers/selection/selectionController.ts';

const componentSelector = 'checkbox-group-mock';

type CheckboxElement = HTMLElement & { value: string; checked: boolean };

/**
 * A checkbox group (PoC mock).
 *
 * Unlike a radio group, a checkbox group does **not** use roving keyboard
 * navigation — each checkbox is simply tabbable (and a disabled one is removed
 * from the tab order by its native input). So this group uses only the
 * {@link SelectionController} (`mode: 'multiple', reflect: false`): it owns the
 * array `value`, toggles on each checkbox's controlled `change` intent, and
 * reflects `checked` back onto the (controlled) checkboxes.
 */
@customElement(componentSelector)
export class CheckboxGroupMock extends LitElement {
    public static styles = css`
        :host { display: inline-flex; flex-direction: column; gap: 8px; }
    `;

    @property({ attribute: false })
    public value: string[] = [];

    #selection: SelectionController | null = null;

    // Enabled checkboxes only — disabled ones can't be selected.
    #checkboxes = (): CheckboxElement[] => [...this.querySelectorAll<CheckboxElement>('checkbox-mock:not([disabled])')];

    public connectedCallback (): void {
        super.connectedCallback();
        this.setAttribute('role', 'group');

        this.#selection ??= new SelectionController(this, {
            getItems: this.#checkboxes,
            getKey: (item) => (item as CheckboxElement).value,
            getSelectedKeys: () => new Set(this.value),
            mode: 'multiple',
            reflect: false, // the checkboxes' native inputs own their checked state
            onSelectionChange: (keys) => {
                this.value = [...keys];
                this.dispatchEvent(new Event('change'));
            },
        });

        this.addEventListener('change', this.#onChange);
    }

    public disconnectedCallback (): void {
        super.disconnectedCallback();
        this.removeEventListener('change', this.#onChange);
    }

    public updated (): void {
        // Reflect the value onto ALL controlled checkboxes (including disabled).
        [...this.querySelectorAll<CheckboxElement>('checkbox-mock')].forEach((checkbox) => {
            checkbox.checked = this.value.includes(checkbox.value);
        });
    }

    #onChange = (event: Event): void => {
        const checkbox = event.composedPath().find((node): node is CheckboxElement => node instanceof HTMLElement && node.localName === 'checkbox-mock');
        if (!checkbox) return; // our own re-dispatched change, not a child's

        // Consume the child's intent; the group emits its own `change` instead.
        event.stopPropagation();
        this.#selection?.toggle(checkbox);
    };

    public render () {
        return html`<slot @slotchange=${() => this.requestUpdate()}></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: CheckboxGroupMock;
    }
}
