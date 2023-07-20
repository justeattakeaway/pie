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

const componentSelector = 'icon-flag-united-states';

export class IconFlagUnitedStates extends LitElement implements IconProps {
    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class : string = 'c-pieIcon c-pieIcon--unitedStates';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--unitedStates', '', null, 'IconFlagUnitedStates');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--unitedStates', '', this.size, 'IconFlagUnitedStates');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`[object Object]<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--unitedStates"><g clip-path="url(#prefix__clip0_3446_3207)"><path fill="#D80027" d="M7.893 2.95v1.123h5.902a7.06 7.06 0 0 0-.947-1.122H7.893Z"></path><path fill="#D80027" d="M7.893 5.195v1.122h6.903a6.947 6.947 0 0 0-.382-1.122h-6.52Z"></path><path fill="#D80027" d="M8 15a6.968 6.968 0 0 0 3.307-.83H4.694A6.969 6.969 0 0 0 8 15Z"></path><path fill="#D80027" d="M3.152 13.049h9.696c.354-.34.672-.716.948-1.122H2.205c.276.406.593.782.947 1.122Z"></path><path fill="#D80027" d="M11.307 1.829A6.969 6.969 0 0 0 8 1l-.107.001v.828h3.414Z"></path><path fill="#D80027" d="M14.978 7.439H7.893V8.56h7.085a6.936 6.936 0 0 0 0-1.122Z"></path><path fill="#D80027" d="M1.585 10.805h12.83a6.95 6.95 0 0 0 .38-1.122H1.206c.094.384.222.76.38 1.122Z"></path><path fill="#fff" d="M3.813 13.61c.279.209.573.396.88.56h6.614a6.994 6.994 0 0 0 1.541-1.121H3.152c.209.2.43.388.66.56Z"></path><path fill="#fff" d="M1.861 11.366c.106.193.22.38.344.56h11.59a6.99 6.99 0 0 0 .62-1.121H1.584c.084.191.176.379.276.56Z"></path><path fill="#fff" d="M1.09 9.122c.03.19.068.377.114.56h13.592a6.901 6.901 0 0 0 .182-1.122H1.023c.015.19.037.377.067.562Z"></path><path fill="#fff" d="M7.893 2.95h4.955a6.993 6.993 0 0 0-1.541-1.121H7.893V2.95Z"></path><path fill="#fff" d="M7.893 7.439h7.085a6.916 6.916 0 0 0-.182-1.122H7.893v1.122Z"></path><path fill="#fff" d="M7.893 5.195h6.521a6.998 6.998 0 0 0-.619-1.122H7.893v1.122Z"></path><path fill="#0052B4" d="M7.893 8.56V1.002a7.047 7.047 0 0 0-.913.073l-.021.003c-.092.014-.184.03-.274.047l.098.302h.675l-.546.396.04.122.169.52-.546-.397-.546.397.169-.52.04-.122-.546-.396h.675l.082-.253c-.398.09-.787.215-1.163.373l-.002.002a5.998 5.998 0 0 0-.381.175 7.193 7.193 0 0 0-.622.347l.17.523h.673l-.546.397.209.641-.546-.396-.545.396.168-.519.04-.122-.44-.32c-.045.038-.09.076-.135.116-.05.045-.101.09-.15.138h-.007l-.002.008-.02.019a7.057 7.057 0 0 0-.683.76H2.45l.005.015-.015.02h.35l-.545.397.208.641-.48-.348a6.296 6.296 0 0 0-.29.542l-.005.011a6.937 6.937 0 0 0-.408 1.077h.404l.208-.641.209.641h.674l-.545.397.04.123.169.519-.546-.397-.546.397.169-.52.04-.122-.32-.232c-.007.028-.014.057-.023.086a6.919 6.919 0 0 0-.195 1.32H1l.008.006a7.41 7.41 0 0 0 .015.918h6.87ZM6.366 3.747l.208-.641.209.641h.675l-.546.397.04.122.169.519-.546-.396-.546.396.169-.519.04-.122-.546-.397h.674Zm-.026 2.32.208-.64.209.64h.673l-.544.397.208.642-.546-.397-.545.397.208-.642-.546-.396h.675ZM4.033 4.914l.209-.641.208.641h.674l-.546.397.209.64-.546-.395-.545.396.208-.641-.546-.397h.675Zm-.026 2.32.209-.64.208.64h.673l-.544.397.208.641-.545-.396-.546.396.209-.64-.546-.397h.674Z"></path><path fill="#0052B4" d="m4.183 2.132-.01.007-.096.063a7.627 7.627 0 0 0-.522.39h.478l.15-.46Z"></path><path fill="#fff" d="m5.692 1.426.546.396-.04.122-.169.52.546-.397.546.397-.169-.52-.04-.122.546-.396h-.675l-.098-.302c-.08.015-.158.031-.236.049l-.082.253h-.675Z"></path><path fill="#fff" d="m6.003 7.105.545-.397.546.397-.208-.642.545-.396h-.674l-.209-.642-.208.642h-.675l.546.396-.208.642Z"></path><path fill="#fff" d="m6.198 4.265-.169.519.546-.396.546.396-.169-.519-.04-.122.546-.397h-.675l-.209-.641-.208.641h-.674l.546.397-.04.122Z"></path><path fill="#fff" d="m1.506 6.586-.169.519.546-.397.546.397-.169-.52-.04-.122.546-.396h-.675l-.208-.642-.208.642H1.27a8.04 8.04 0 0 0-.045.164l.32.232-.04.123Z"></path><path fill="#fff" d="m2.286 4.265-.04-.122.546-.397h-.35a7.17 7.17 0 0 0-.237.327l-.068.102a6.57 6.57 0 0 0-.161.26l.477.35-.167-.52Z"></path><path fill="#fff" d="m3.864 3.112-.168.52.545-.397.546.396-.209-.641.546-.397h-.673l-.17-.523-.003.002-.095.06-.149.46h-.478l-.091.077.44.32-.04.123Z"></path><path fill="#fff" d="m3.67 8.271.546-.396.545.396-.208-.64.546-.397h-.675l-.208-.642-.209.642h-.674l.546.396-.209.641Z"></path><path fill="#fff" d="m3.696 5.95.545-.395.546.396-.209-.641.546-.397H4.45l-.208-.641-.209.641h-.675l.546.397-.208.64Z"></path></g><defs><clipPath id="prefix__clip0_3446_3207"><rect width="14" height="14" fill="#fff" transform="translate(1 1)"></rect></clipPath></defs></svg>`;
    }
}

customElements.define(componentSelector, IconFlagUnitedStates);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconFlagUnitedStates;
    }
}
