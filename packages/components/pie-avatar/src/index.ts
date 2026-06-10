import {
    html, type TemplateResult, unsafeCSS,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import '@justeattakeaway/pie-icons-webc/dist/IconUser.js';

import { property } from 'lit/decorators.js';
import styles from './avatar.scss?inline';
import {
    type AvatarProps, defaultProps, tags, type Initials,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-avatar';

/**
 * @tagname pie-avatar
 */

@safeCustomElement('pie-avatar')
export class PieAvatar extends RtlMixin(PieElement) implements AvatarProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, tags, defaultProps.tag)
    public tag = defaultProps.tag;

    @property({ type: String })
    public label: AvatarProps['label'];

    @property({ type: String })
    public src: AvatarProps['src'];

    @property({ type: String })
    public type: AvatarProps['type'];

    private getTypeElement () {
        switch (this.type) {
            case 'checkbox':
                return html`<p></p>`;
            default:
                return html`<span></span>`;
        }
    }

    render () {
        return html`<slot></slot>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieAvatar;
    }
}
