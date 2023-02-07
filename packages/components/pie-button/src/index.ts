import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles.scss?inline';

@customElement('pie-button')
export class PieButton extends LitElement {
    @property() actionType = 'submit';

    static styles = unsafeCSS(styles);

    render () {
        return html`
        <button class="amazing-button" type=${this.actionType}>
            I'm a PIE button
        </button>`;
    }
}
