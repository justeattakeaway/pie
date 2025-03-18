import {
    html, nothing, unsafeCSS,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './spinner.scss?inline';
import {
    type SpinnerProps,
    sizes,
    variants,
    defaultProps,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-spinner';

/**
 * @tagname pie-spinner
 */
@safeCustomElement('pie-spinner')
export class PieSpinner extends PieElement implements SpinnerProps {
    @property({ type: Object })
    public aria: SpinnerProps['aria'];

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    render () {
        const { variant, size } = this;

        const classes = {
            'c-spinner': true,
            [`c-spinner--${size}`]: true,
            [`c-spinner--${variant}`]: true,
        };

        return html`
            <div
                data-test-id="pie-spinner"
                class="${classMap(classes)}"
                role="status"
                aria-live="polite">
                ${this.renderAriaLabel()}
            </div>`;
    }

    private renderAriaLabel () {
        if (!this.aria?.label) return nothing;

        return html`
        <span class="c-spinner-label">
            ${this.aria.label}
        </span>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieSpinner;
    }
}
