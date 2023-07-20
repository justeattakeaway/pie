import {
    html, LitElement, TemplateResult,
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

const componentSelector = 'icon-logo-skip-circle-filled';

export class IconLogoSkipCircleFilled extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--skipCircleFilled';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--skipCircleFilled', '', null, 'IconLogoSkipCircleFilled');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--skipCircleFilled', '', this.size, 'IconLogoSkipCircleFilled');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--skipCircleFilled"><g clip-path="url(#prefix__clip0_4813_3340)"><path fill-rule="evenodd" d="M8 1a7 7 0 1 0 7 7 7.01 7.01 0 0 0-7-7Zm.459 5.582c-.04.247.133.47.402.786l.059.068c.335.386.84.968.814 1.698-.02.304-.103.6-.243.87-.558 1.06-1.497 1.5-2.584 1.5-.734 0-1.369-.34-1.369-.34l.042-.149.322-1.161a.183.183 0 0 1 .119-.123c.06-.02.13.014.168.033l.032.016c.247.122.396.195.86.195.305 0 .671-.154.747-.623.046-.27-.14-.503-.406-.803l-.032-.036-.001-.001c-.367-.426-.87-1.01-.736-1.835.19-1.18 1.351-2.142 2.627-2.142.303-.004.604.058.881.182l.011.005.035.017.234.114-.339 1.205a.18.18 0 0 1-.257.107c-.03-.014-.058-.029-.085-.043-.179-.092-.306-.157-.664-.157-.374 0-.588.31-.637.617Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_4813_3340"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconLogoSkipCircleFilled);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconLogoSkipCircleFilled;
    }
}
