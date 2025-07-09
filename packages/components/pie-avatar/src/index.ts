import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';

import { property } from 'lit/decorators.js';
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
    public tag = defaultProps.tag; // access modifier

    @property({ type: String })
    public label: AvatarProps['label'];

    private generateInitials (name: string): string | undefined {
        if (name === '') return undefined;
        const nameTrimmed = name.trim().replace(/-/g, ' ').split(/\s+/); // [Katarina,Neskovic]
        const firstInitial = nameTrimmed[0].charAt(0).toUpperCase();
        if (nameTrimmed.length > 1) {
            const lastInitial = nameTrimmed[1].charAt(0).toUpperCase();
            return firstInitial + lastInitial;
        }

        return firstInitial;
    }

    render () {
        const { label, tag } = this;
        const initials = label ? this.generateInitials(label) : undefined;

        if (tag === 'button') {
            return html`<button>
            ${initials}
            </button>`;
        }

        if (tag === 'a') {
            return html`<a>
            ${initials}
            </a>`;
        }

        return html`<div>
           <button> 
           Jamie
           </button>
           <span> 
           ${initials} 
           </span>
           
           </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieAvatar;
    }
}

/* makes your code know what the element is  */
