import { LitElement, html, unsafeCSS } from 'lit';
import styles from './toggle-switch.scss?inline';
import { ToggleSwitchProps } from './defs';

// Valid values available to consumers
export {
    type ToggleSwitchProps,
};

const componentSelector = 'pie-toggle-switch';

export class PieToggleSwitch extends LitElement implements ToggleSwitchProps {
    render () {
        return html`<h1>Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieToggleSwitch);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieToggleSwitch;
    }
}
