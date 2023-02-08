import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import styles from './button.scss?inline';
import { BUTTON_VARIANT, BUTTON_TYPE } from './defs';

// Valid values available to consumers
export { BUTTON_VARIANT, BUTTON_TYPE };

const validButtonVariants = Object.values(BUTTON_VARIANT);
const validButtonTypes = Object.values(BUTTON_TYPE);

@customElement('pie-button')
class PieButton extends LitElement {
    // Button Type Property
    private _type = BUTTON_TYPE.SUBMIT;

    // TODO - we may want a more generic validator in future
    public set type (newType: BUTTON_TYPE) {
        if (newType === this._type) {
            return;
        }

        let oldVariant = this._variant;

        if (validButtonTypes.includes(newType)) {
            this._type = newType;
        } else {
            this._type = BUTTON_TYPE.SUBMIT;
            console.error(`Invalid type value provided: ${newType}. Must be one of: ${validButtonTypes.join(' | ')}`);
        }

        this.requestUpdate('buttonStyle', oldVariant);
    }

    // Button Variant Property
    private _variant = BUTTON_VARIANT.PRIMARY;

    // TODO - we may want a more generic validator in future
    public set variant (newVariant: BUTTON_VARIANT) {
        if (newVariant === this._variant) {
            return;
        }

        let oldVariant = this._variant;

        if (validButtonVariants.includes(newVariant)) {
            this._variant = newVariant;
        } else {
            this._variant = BUTTON_VARIANT.PRIMARY;
            console.error(`Invalid variant value provided: ${newVariant}. Must be one of: ${validButtonVariants.join(' | ')}`);
        }

        this.requestUpdate('buttonStyle', oldVariant);
    }

    /**
     * The Button type to use
     */
    @property()
    public get type () : BUTTON_TYPE {
        return this._type;
    };

    /**
     * The Button style variant to use
     */
    @property()
    public get variant () : BUTTON_VARIANT {
        return this._variant;
    };

    render () {
        const  {
            type,
            variant
        } = this;

        const classes = classMap({
            ['o-btn']: true,
            [`o-btn--${variant}`]: variant
        });

        return html`
            <button
                class="${classes}"
                type=${type}>
                <slot></slot>
            </button>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

export default PieButton;
