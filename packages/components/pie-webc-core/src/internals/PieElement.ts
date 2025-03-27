import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class PieElement extends LitElement {
    @property({ type: String, reflect: true })
    // TODO - Next PR will add a global declaration to allow us to remove this ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    public readonly v = __PACKAGE_VERSION__;
}
