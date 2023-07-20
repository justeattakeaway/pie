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

const componentSelector = 'icon-social-instagram-circle-filled';

export class IconSocialInstagramCircleFilled extends LitElement implements IconProps {
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
    public class = 'c-pieIcon c-pieIcon--instagramCircleFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--instagramCircleFilled', '', null, 'IconSocialInstagramCircleFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--instagramCircleFilled', '', this.size, 'IconSocialInstagramCircleFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--instagramCircleFilled"><g clip-path="url(#prefix__clip0_1615_871)"><path d="M9.963 6.399a.36.36 0 1 1-.72 0 .36.36 0 0 1 .72 0Z"></path><path fill-rule="evenodd" d="M6.46 8a1.54 1.54 0 1 0 3.08 0 1.54 1.54 0 0 0-3.08 0ZM9 8a1 1 0 1 1-2 .001 1 1 0 0 1 2 0Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4.237 2.315A6.781 6.781 0 0 1 8 1.175 6.79 6.79 0 0 1 14.78 8 6.781 6.781 0 1 1 4.237 2.315Zm1.267 3.189c.167-.167.334-.27.532-.347.19-.074.408-.125.729-.139.32-.014.422-.018 1.237-.018.815 0 .917.004 1.237.018.32.015.538.065.728.14.197.076.365.179.532.346.166.166.268.334.345.53.073.19.124.409.139.729.015.32.018.422.018 1.236 0 .815-.003.918-.018 1.237-.015.32-.065.538-.14.728-.076.198-.178.365-.345.532-.168.167-.335.27-.532.347-.19.073-.409.124-.729.139-.32.014-.422.018-1.236.018-.815 0-.918-.004-1.237-.018a2.193 2.193 0 0 1-.728-.14 1.472 1.472 0 0 1-.532-.346 1.471 1.471 0 0 1-.347-.532 2.225 2.225 0 0 1-.139-.728C5.004 8.916 5 8.814 5 8c0-.814.004-.917.018-1.236.015-.32.065-.538.14-.729.076-.196.179-.364.346-.53Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_1615_871"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconSocialInstagramCircleFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconSocialInstagramCircleFilled;
    }
}
