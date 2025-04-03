import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class PieElement extends LitElement {
    @property({ type: String, reflect: true })
    public readonly v = __PACKAGE_VERSION__;
}
