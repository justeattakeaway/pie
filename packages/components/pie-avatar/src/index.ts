import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';

import { property } from 'lit/decorators';
import styles from './avatar.scss?inline';
import {
    type AvatarProps, defaultProps, tags,
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
    public label = defaultProps.label;

    private generateInitials(name:string) {
      const 

        
    }

    render() {
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
