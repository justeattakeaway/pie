import { LitElement } from 'lit';

export class PieElement extends LitElement {
    public static readonly v = __PACKAGE_VERSION__;

    protected willUpdate (): void {
        if (!this.getAttribute('v')) {
            this.setAttribute('v', PieElement.v);
        }
    }
}
