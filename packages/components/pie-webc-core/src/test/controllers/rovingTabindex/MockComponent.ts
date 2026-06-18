import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { RovingTabindexController, type RovingTabindexOrientation } from '../../../controllers/rovingTabindex/rovingTabindexController.ts';
import { RtlMixin } from '../../../mixins/rtl/rtlMixin.ts';

const componentSelector = 'roving-tabindex-mock';

/**
 * A mock host used to exercise {@link RovingTabindexController} in browser tests.
 *
 * It renders four focusable buttons in its shadow root and is configurable via
 * attributes so a single component can cover every navigation variant:
 *
 * - `orientation` – `horizontal` | `vertical` | `both` (default `both`)
 * - `nowrap` – present to disable wrapping at the ends
 * - `dir="rtl"` – drives `isRTL` via {@link RtlMixin} to test mirrored arrows
 */
@customElement(componentSelector)
export class MockComponent extends RtlMixin(LitElement) {
    public static styles = css`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        /* Lay the items out as a column when navigating vertically. */
        :host([orientation="vertical"]) {
            flex-direction: column;
        }
    `;

    @property({ type: String, reflect: true })
    public orientation: RovingTabindexOrientation = 'both';

    @property({ type: Boolean })
    public nowrap = false;

    @property({ type: Boolean })
    public nested = false;

    #roving: RovingTabindexController | null = null;

    public connectedCallback (): void {
        super.connectedCallback();

        // Built here (not as a field) so the controller captures the
        // attribute-driven configuration, which is only available once the
        // element is connected.
        this.#roving ??= new RovingTabindexController(this, {
            getItems: () => [...this.renderRoot.querySelectorAll<HTMLButtonElement>('button')],
            orientation: this.orientation,
            wrap: !this.nowrap,
            isRtl: () => this.isRTL,
        });
    }

    public render () {
        const item = (id: string, label: string) => html`<button id="${id}" type="button">${label}</button>`;

        // When `nested`, each item is buried inside wrapper markup to prove the
        // controller does not depend on items being direct children of the host.
        const wrap = this.nested
            ? (content: ReturnType<typeof item>) => html`<div class="group"><span class="cell">${content}</span></div>`
            : (content: ReturnType<typeof item>) => content;

        return html`
            ${wrap(item('item-1', 'Item 1'))}
            ${wrap(item('item-2', 'Item 2'))}
            ${wrap(item('item-3', 'Item 3'))}
            ${wrap(item('item-4', 'Item 4'))}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: MockComponent;
    }
}
