import { LitElement, html } from 'lit';
import { FormControlMixin } from '../../../mixins/formControl/formControlMixin.ts';
import { defineCustomElement } from '../../../functions/defineCustomElement.ts';

const componentSelector = 'form-control-mixin-mock';

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

defineCustomElement(componentSelector, MockComponent);
