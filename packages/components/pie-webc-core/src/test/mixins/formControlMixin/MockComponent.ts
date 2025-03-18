import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FormControlMixin } from '../../../mixins/formControl/formControlMixin.ts';

const componentSelector = 'form-control-mixin-mock';

@customElement('form-control-mixin-mock')
export class MockComponent extends FormControlMixin(LitElement) {
    render () {
        return html`<div>Form Control Component</div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: MockComponent;
    }
}
