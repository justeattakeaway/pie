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

    /**
     * Attempts to extract initials from the label string.
     * If the label is not provided or is invalid, it returns null.
     *
     * @private
     */
    private getInitials (name: string): Initials | null {
        try {
            if (!name || typeof name !== 'string' || name.trim().length === 0) {
                return null;
            }

            const nameSplit: string[] = name.trim().replace(/-/g, ' ').split(/\s+/); // [Ada, Lovelace]
            const initials: string[] = nameSplit.slice(0, 2).map((word) => word[0].toUpperCase()); // [A, L]

            if (initials.length === 0) {
                return null;
            }

            return {
                visual: initials.join(''),
                screenreader: initials.join(', '), // joins the two words by comma so initials are correctly pronounced by screenreaders
            };
        } catch (error) {
            return null;
        }
    }

    /**
     * Renders the initials both for visual display and for screen readers.
     *
     * @private
     */
    private renderInitials (initials: Initials): TemplateResult {
        return html`
            <span aria-hidden="true" data-test-id="pie-avatar-initials-visual">${initials.visual}</span>
            <span class="c-avatar-visuallyHidden" data-test-id="pie-avatar-initials-screenreader">${initials.screenreader}</span>
        `;
    }

    /**
     * Renders the user icon.
     *
     * @private
     */
    private renderIcon (): TemplateResult {
        return html`<icon-user size="s" aria-hidden="true" data-test-id="pie-avatar-icon"></icon-user>`;
    }

    /**
     * Renders an image.
     * We assign an empty string to the alt attribute for a11y clarity as it explicitly declares the image as decorative
     *
     * @private
    */
    private renderImage (imgSrc: string): TemplateResult {
        return html`<img class="c-avatar--image" src="${imgSrc}" data-test-id="pie-avatar-image" alt=""/>`;
    }

    /**
     * Renders the inner content of the avatar such as initials, an icon or an image.
     * It is a getter because the value is computed based on properties
     *
     * @private
     */
    private get avatarContent (): TemplateResult {
        if (this.src) {
            return this.renderImage(this.src);
        }

        if (this.label) {
            const initials = this.getInitials(this.label);
            if (initials) {
                return this.renderInitials(initials);
            }
        }

        return this.renderIcon();
    }

    /**
     * Renders the avatar wrapper element based on the `tag` property.
     * Can be a `button`, `a` or a `div`.
     *
     * @private
     */
    private renderAvatarWrapper (content: TemplateResult): TemplateResult {
        const { tag } = this;

        if (tag === 'button') {
            return html`<button data-test-id="pie-avatar-button" class="c-avatar c-avatar--button">${content}</button>`;
        }

        if (tag === 'a') {
            return html`<a data-test-id="pie-avatar-anchor" class="c-avatar">${content}</a>`;
        }

        return html`<div class="c-avatar" data-test-id="pie-avatar-div" ?aria-hidden="${this.src}">${content}</div>`;
    }

    render () {
        return this.renderAvatarWrapper(this.avatarContent);
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieAvatar;
    }
}
