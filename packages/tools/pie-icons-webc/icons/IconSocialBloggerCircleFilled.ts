import {
    html, LitElement, TemplateResult, css,
} from 'lit';
import { property, query } from 'lit/decorators.js';
import type { DependentMap } from '@justeattakeaway/pie-webc-core';
import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const sizes = ['small', 'medium', 'large', 'xlarge', 'xxlarge'] as const;
type Size = typeof sizes[number];

interface IconProps {
    size: Size;
    class: string;
}

const componentSelector = 'icon-social-blogger-circle-filled';

export class IconSocialBloggerCircleFilled extends LitElement implements IconProps {
    static styles = css`
        :host-context(pie-icon-button) svg,
        :host-context(pie-button) svg {
            display:block;
            width: var(--btn-icon-size);
            height: var(--btn-icon-size);
        }
    `;

    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class = 'c-pieIcon c-pieIcon--bloggerCircleFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bloggerCircleFilled', '', null, 'IconSocialBloggerCircleFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bloggerCircleFilled', '', this.size, 'IconSocialBloggerCircleFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--bloggerCircleFilled"><g clip-path="url(#prefix__clip0_3633_3280)"><path d="m6.823 6.582-.013.008a.372.372 0 0 0-.291.362.369.369 0 0 0 .29.36h1.209a.378.378 0 0 0 .336-.284.373.373 0 0 0 .004-.156.37.37 0 0 0-.362-.29H6.823Z"></path><path d="M6.912 9.454h2.252v-.01a.354.354 0 0 0 .294-.329.351.351 0 0 0-.259-.357.369.369 0 0 0-.12 0H6.935a.337.337 0 0 0-.372.23.35.35 0 0 0 .35.466Z"></path><path fill-rule="evenodd" d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm2.61 6.129c.084 0 .165.027.23.08a.38.38 0 0 1 .16.303v1.375c0 .427-.142.843-.403 1.183-.262.339-.629.583-1.044.693-.164.04-.331.061-.5.062H6.951c-.248 0-.495-.048-.725-.141a1.955 1.955 0 0 1-1.177-1.344A1.97 1.97 0 0 1 5 9.075V6.93c.003-.428.147-.844.411-1.181A1.952 1.952 0 0 1 6.947 5h.987c.425 0 .84.14 1.178.397.339.257.584.617.698 1.026.044.164.066.333.066.502a.386.386 0 0 0 .252.353.444.444 0 0 0 .146.026h.337Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_3633_3280"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialBloggerCircleFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialBloggerCircleFilled;
    }
}
