import {
    LitElement,
    html,
    unsafeCSS,
    type PropertyValues,
    type TemplateResult,
} from 'lit';
import { property, query } from 'lit/decorators.js';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { getSvgProps, type RegularIconSize } from '@justeattakeaway/pie-icons-configs';

import styles from './icon.scss?inline';
import { IconCloseProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'icon-close';

/**
 * @tagname icon-close
 */
export class IconClose extends LitElement implements IconCloseProps {
    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    @property({ type: String, reflect: true })
    public size : RegularIconSize = 'xs';

    @property({ type: String, reflect: true })
    public class = 'c-pieIcon c-pieIcon--close';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        super.connectedCallback();
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--close', '', null, 'IconClose');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: PropertyValues<this>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--close', '', this.size, 'IconClose');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--close"><path d="M11.868 3.205 8 7.072 4.133 3.205l-.928.927L7.073 8l-3.868 3.867.928.928L8 8.927l3.868 3.868.927-.928L8.928 8l3.867-3.868-.927-.927Z"></path></svg>`;
    }
}

defineCustomElement(componentSelector, IconClose);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconClose;
    }
}
