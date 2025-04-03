import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class PieElement extends LitElement {
    public static readonly v = __PACKAGE_VERSION__;

    constructor () {
        super();
        this.setAttribute('v', PieElement.v);
    }
}
