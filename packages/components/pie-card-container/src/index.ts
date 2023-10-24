import {
    html, LitElement, unsafeCSS, nothing, TemplateResult,
} from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './card-container.scss?inline';
import {
    variants,
    tags,
    CardContainerProps,
    paddingValues,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-card-container';

/**
 * @tagname pie-card-container
 */
export class PieCardContainer extends LitElement implements CardContainerProps {
    @property()
    @validPropertyValues(componentSelector, tags, 'button')
    public tag: CardContainerProps['tag'] = 'button';

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
    public aria: CardContainerProps['aria'];

    @property({ type: Boolean })
    public isDraggable = false;

    @property({ type: String })
    @validPropertyValues(componentSelector, paddingValues, undefined)
    public padding?: CardContainerProps['padding'];

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
                tag=${this.tag}
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
     *
     * Example: 'a' or 'a, b'
     * Single values i.e `'a'` applies to all sides and `'a, b'` applies to: top & bottom, left & right
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
            .filter((value) => /^[a-g]$/.test(value));

        if (paddingArray.length > 0 && paddingArray.length <= 2) {
            paddingCSS += `var(--dt-spacing-${paddingArray[0]})`;

            if (paddingArray.length > 1) {
                paddingCSS += ` var(--dt-spacing-${paddingArray[1]})`;
            }
        }

        if (!paddingCSS) {
            return '';
        }

        return `padding: ${paddingCSS}`;
    }

    render () {
        const {
            variant,
            disabled,
            tag,
            aria,
            isDraggable,
        } = this;

        const paddingCSS = this.generatePaddingCSS();

        if (tag === 'a') return this.renderAnchor();

        return html`
                <div
                    class="c-card-container"
                    data-test-id="pie-card-container"
                    tag=${tag}
                    ?isDraggable="${isDraggable}"
                    variant=${variant}
                    ?disabled=${disabled}
                    role="button"
                    tabindex="0"
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

defineCustomElement(componentSelector, PieCardContainer);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCardContainer;
    }
}
