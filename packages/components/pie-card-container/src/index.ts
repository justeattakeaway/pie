import {
    html, LitElement, unsafeCSS, nothing, TemplateResult,
} from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './card-container.scss?inline';
import {
    CardContainerProps, type AriaProps, type PaddingValue, variants, interactionTypes,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-card-container';

export class PieCardContainer extends LitElement implements CardContainerProps {
    @property()
    @validPropertyValues(componentSelector, interactionTypes, 'none')
    public interactionType: CardContainerProps['interactionType'] = 'none';

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

    @property({ type: String, reflect: true })
    public padding?: PaddingValue;

    /**
     * Renders the card as an anchor element.
     *
     * @private
     */
    private renderAnchor (): TemplateResult {
        const paddingCSS = this.generatePaddingCSS();

        return html`
            <a
                class="c-card-container"
                data-test-id="pie-card-container"
                interactionType=${this.interactionType}
                ?isDraggable="${this.isDraggable}"
                variant=${this.variant}
                ?disabled=${this.disabled}
                href=${this.href || nothing}
                target=${this.target || nothing}
                rel=${this.rel || nothing}
                aria-label=${this.aria?.label || nothing}
                aria-disabled=${this.disabled ? 'true' : 'false'}
                style=${paddingCSS || nothing}>
                    <slot></slot>
                </div>
            </a>`;
    }

    /**
     * Generates padding for the component based on `padding` values passed
     * by the consumer.
     *
     * Example: 'a' or 'a, b'
     *
     * @private
     */
    private generatePaddingCSS (): string {
        const { padding } = this;
        let paddingCSS = '';

        // Check if padding is empty (null, undefined, or an empty string)
        if (!padding) {
            return '';
        }

        const paddingArray = padding
            .split(',')
            .map((item) => item.trim())
            .filter((value) => value !== '');

        if (paddingArray.length > 0) {
            paddingCSS += `var(--dt-spacing-${paddingArray[0]})`;

            if (paddingArray.length > 1) {
                paddingCSS += ` var(--dt-spacing-${paddingArray[1]})`;
            }
        }

        return `padding: ${paddingCSS}`;
    }

    render () {
        const {
            variant,
            disabled,
            interactionType,
            aria,
            isDraggable,
        } = this;

        const paddingCSS = this.generatePaddingCSS();

        const isButton = interactionType === 'button';

        if (interactionType === 'anchor') return this.renderAnchor();

        return html`
                <div
                    class="c-card-container"
                    data-test-id="pie-card-container"
                    interactionType=${interactionType}
                    ?isDraggable="${isDraggable}"
                    variant=${variant}
                    ?disabled=${disabled}
                    role=${isButton ? 'button' : nothing}
                    tabindex=${isButton ? '0' : nothing}
                    aria-label=${aria?.label || nothing}
                    aria-disabled=${disabled ? 'true' : 'false'}
                    style=${paddingCSS || nothing}>
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
