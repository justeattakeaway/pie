import { LitElement } from 'lit';

import { TestIdController } from './TestIdController';

export class PieElement extends LitElement {
    public static readonly v = __PACKAGE_VERSION__;

    constructor () {
        super();
        // Renames internal data-test-id attributes when a consumer override is set.
        // eslint-disable-next-line no-new
        new TestIdController(this);
    }

    protected willUpdate (): void {
        if (!this.getAttribute('v')) {
            this.setAttribute('v', PieElement.v);
        }
    }
}
