import {
    html, LitElement, unsafeCSS, nothing,
} from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './card-container.scss?inline';
import { CardContainerProps, type AriaProps, variants } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-card-container';

export class PieCardContainer extends LitElement implements CardContainerProps {
    @property()
    @validPropertyValues(componentSelector, variants, 'default')
    public variant: CardContainerProps['variant'] = 'default';

    @property({ type: String, reflect: true })
    public href?: string;

    @property({ type: String, reflect: true })
    public target?: string;

    @property({ type: String, reflect: true })
    public rel?: string;

    @property({ type: Boolean })
    public disabled = false;

    @property({ type: Object })
    public aria!: AriaProps;

    @property({ type: Boolean })
    public isDraggable = false;

    render () {
        const {
            href,
            target,
            rel,
            disabled,
            variant,
            isDraggable,
        } = this;

        return html`
                <div
                    variant=${variant}
                    class="c-card-container ${isDraggable ? 'isDraggable' : ''}"
                    data-test-id="pie-card-container"
                    ?disabled=${disabled}>
                    <a
                        data-test-id="pie-card-container-link"
                        href=${href || ''}
                        target=${target || nothing}
                        rel=${rel || nothing}
                        aria-label="${this.aria?.linkLabel || nothing}"
                        aria-disabled=${disabled ? 'true' : 'false'}
                        ></a>
                    <div class="c-card-container-slot">
                        <slot></slot>
                    </div>
                </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieCardContainer);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCardContainer;
    }
}
