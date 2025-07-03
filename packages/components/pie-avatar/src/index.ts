import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './avatar.scss?inline';
import { type AvatarProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-avatar';

/**
 * @tagname pie-avatar
 */
@safeCustomElement('pie-avatar')
export class PieAvatar extends RtlMixin(PieElement) implements AvatarProps {
    render () {
        return html`<h1 data-test-id="pie-avatar">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieAvatar;
    }
}
