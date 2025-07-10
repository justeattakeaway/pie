import { html, nothing, unsafeCSS } from 'lit';
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

type Initials = {
    visual: string,
    screenreader: string
}
@safeCustomElement('pie-avatar')
export class PieAvatar extends RtlMixin(PieElement) implements AvatarProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, tags, defaultProps.tag)
    public tag = defaultProps.tag; // access modifier

    @property({ type: String })
    public label: AvatarProps['label'];

    private generateInitials (name: string): Initials {
        const nameTrimmed = name.trim().replace(/-/g, ' ').split(/\s+/); // [Katarina,Neskovic]
        const initials = nameTrimmed.slice(0, 2).map((word) => word[0].toUpperCase());

        return {
            visual: initials.join(''),
            screenreader: initials.join(', '),
        };
    }

    private get isValidLabel (): boolean {
        return !!(this.label?.trim().length && /^[a-zA-Z0-9]+(?:[ -][a-zA-Z0-9]+)*$/.test(this.label));
    }

    render () {
        const { label, tag } = this;
        if (this.isValidLabel) {
            const initials = this.generateInitials(label as string);
            const initialsMarkup = html`
            <span aria-hidden="true"> 
               ${initials?.visual} 
            </span>
    
            <span class="c-avatar--hidden"> 
               ${initials?.screenreader} 
            </span>`;

            if (tag === 'button') {
                return html`
            <button> 
             ${initialsMarkup}
            </button>`;
            }

            if (tag === 'a') {
                return html`
            <a> 
             ${initialsMarkup}
            </a>`;
            }

            return html`
            <div> 
             ${initialsMarkup}
            </div>`;
        }

        return nothing;
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
