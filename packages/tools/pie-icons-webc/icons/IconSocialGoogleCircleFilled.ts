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

const componentSelector = 'icon-social-google-circle-filled';

export class IconSocialGoogleCircleFilled extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--googleCircleFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--googleCircleFilled', '', null, 'IconSocialGoogleCircleFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--googleCircleFilled', '', this.size, 'IconSocialGoogleCircleFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--googleCircleFilled"><g clip-path="url(#prefix__clip0_923_545)"><path fill-rule="evenodd" d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm.078 7.516V7.212l3.675-.052c.044.131.044.262.044.385a4.471 4.471 0 0 1-.166 1.706 3.5 3.5 0 0 1-1.461 1.917 3.815 3.815 0 0 1-1.75.525c-.361.026-.724 0-1.077-.08a3.816 3.816 0 0 1-1.837-.962A3.5 3.5 0 0 1 4.7 9.54a3.693 3.693 0 0 1-.325-1.02 2.524 2.524 0 0 1-.06-.468v-.595c.03-.268.092-.533.184-.787a3.824 3.824 0 0 1 4.095-2.538 3.5 3.5 0 0 1 1.802.762l.228.192-1.103 1.085A2.1 2.1 0 0 0 7.93 5.62a2.091 2.091 0 0 0-1.225.455 2.336 2.336 0 0 0-.945 1.75c-.018.298.03.597.14.875.085.231.203.45.35.648.315.419.767.716 1.277.84.318.08.648.095.971.043.337-.046.658-.172.937-.367a1.75 1.75 0 0 0 .726-1.085V8.69H8.078Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_923_545"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialGoogleCircleFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialGoogleCircleFilled;
    }
}
