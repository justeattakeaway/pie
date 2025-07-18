import {
    html, type TemplateResult, unsafeCSS,
} from 'lit';
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

type Initials = {
    visual: string,
    screenreader: string
}

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

    // Attempts to extract initials from the label string. If the label is not provided or is invalid, it returns null.
    private getInitials (name: string): Initials | null {
        try {
            if (!name || typeof name !== 'string' || name.trim().length === 0) {
                return null;
            }

            const nameSplit: string[] = name.trim().replace(/-/g, ' ').split(/\s+/); // [Katarina, Neskovic]
            const initials: string[] = nameSplit.slice(0, 2).map((word) => word[0].toUpperCase()); // [K, N]

            if (initials.length === 0) {
                return null;
            }

            return {
                visual: initials.join(''),
                screenreader: initials.join(', '),
            };
        } catch (error) {
            return null;
        }
    }

    // Renders the initials both for visual display and for screen readers.
    private renderInitials (initials: Initials): TemplateResult {
        return html`
            <span aria-hidden="true" data-test-id="pie-avatar-initials">${initials.visual}</span>
            <span class="c-avatar-visually-hidden">${initials.screenreader}</span>
        `;
    }

    // Renders the icon (placeholder span for now)
    private renderIcon (): TemplateResult {
        return html`<span data-test-id="pie-avatar-icon">Icon Placeholder</span>`;
    }

    // Renders the inner content of the avatar such as initials, an icon or an image
    // This is a getter because the value is computed based on properties
    private get avatarContent (): TemplateResult {
        // TODO: handle unauthenticated and src here

        if (this.label) {
            const initials = this.getInitials(this.label);
            if (initials) {
                return this.renderInitials(initials);
            }
        }

        return this.renderIcon();
    }

    // Renders the avatar wrapper element based on the `tag` property. Can be a `button`, `a` or a `div`.
    // This is a method because it takes an argument in order to render the content inside the wrapper.
    private renderAvatarWrapper (content: TemplateResult): TemplateResult {
        const { tag } = this;

        if (tag === 'button') {
            return html`<button data-test-id="pie-avatar-button">${content}</button>`;
        }

        if (tag === 'a') {
            return html`<a data-test-id="pie-avatar-anchor">${content}</a>`;
        }

        return html`<div class="c-avatar-content" data-test-id="pie-avatar-div">${content}</div>`;
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
