import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ActiveDescendantController, type ActiveDescendantOrientation } from '../../../controllers/activeDescendant/activeDescendantController.ts';
import { RtlMixin } from '../../../mixins/rtl/rtlMixin.ts';

const componentSelector = 'active-descendant-mock';

/**
 * A mock host used to exercise {@link ActiveDescendantController} in browser tests.
 *
 * It renders a focusable `role="listbox"` container with four `role="option"`
 * children (deliberately without ids, so the controller's id generation is
 * exercised). It is configurable via attributes:
 *
 * - `orientation` – `horizontal` | `vertical` | `both` (default `both`)
 * - `nowrap` – present to disable wrapping at the ends
 * - `dir="rtl"` / the `writingDirection` global – drives `isRTL` via {@link RtlMixin}
 */
@customElement(componentSelector)
export class MockComponent extends RtlMixin(LitElement) {
    public static styles = css`
        [role="listbox"] {
            display: inline-flex;
            flex-direction: column;
            gap: 4px;
            padding: 4px;
            border: 1px solid #999;
        }

        :host([orientation="horizontal"]) [role="listbox"] {
            flex-direction: row;
        }

        [role="option"] {
            padding: 4px 8px;
            cursor: pointer;
        }

        /* Indicate the active descendant only while the container is focused.
           The controller applies no styling itself, so the host does it here. */
        [role="listbox"]:focus [role="option"][data-active] {
            outline: 2px solid Highlight;
            background-color: rgba(0, 0, 0, 0.08);
        }
    `;

    @property({ type: String, reflect: true })
    public orientation: ActiveDescendantOrientation = 'both';

    @property({ type: Boolean })
    public nowrap = false;

    #activedescendant: ActiveDescendantController | null = null;

    public connectedCallback (): void {
        super.connectedCallback();

        // Built here (not as a field) so the controller captures the
        // attribute-driven configuration, which is only available once connected.
        this.#activedescendant ??= new ActiveDescendantController(this, {
            getItems: () => [...this.renderRoot.querySelectorAll<HTMLElement>('[role="option"]')],
            getContainer: () => this.renderRoot.querySelector<HTMLElement>('[role="listbox"]'),
            orientation: this.orientation,
            wrap: !this.nowrap,
            isRtl: () => this.isRTL,
            // Re-render so updated() can move the [data-active] styling hook.
            onActiveChange: () => this.requestUpdate(),
        });
    }

    public updated (): void {
        // Mark the active option so the story can show a visual focus indicator.
        // The controller's sync() (hostUpdated) runs before updated(), so the
        // active item and its generated id are already settled here.
        const activeId = this.#activedescendant?.activeItem?.id;
        this.renderRoot.querySelectorAll<HTMLElement>('[role="option"]').forEach((option) => {
            option.toggleAttribute('data-active', Boolean(activeId) && option.id === activeId);
        });
    }

    public render () {
        // Options intentionally have no id, to exercise id generation.
        return html`
            <div role="listbox" tabindex="0" aria-label="Mock options">
                <div role="option">Option 1</div>
                <div role="option">Option 2</div>
                <div role="option">Option 3</div>
                <div role="option">Option 4</div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: MockComponent;
    }
}
