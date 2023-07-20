import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--snowflake"><path d="m13.749 8.779-1.62.849L9.313 8l2.818-1.627 1.619.848.612-1.163-1.575-.823.07-1.776-1.304-.053-.078 1.838-2.818 1.619V3.608l1.549-.98-.709-1.103L8 2.47l-1.496-.945-.71 1.103 1.55.98v3.255l-2.818-1.62-.079-1.837-1.303.053.07 1.776-1.575.823.612 1.163 1.619-.848L6.687 8 3.87 9.628l-1.619-.85-.612 1.165 1.575.822-.08 1.776 1.313.053.08-1.838 2.817-1.618v3.255l-1.55.98.71 1.102L8 13.53l1.496.945.709-1.102-1.549-.98V9.137l2.818 1.618.07 1.838 1.312-.053-.07-1.776 1.575-.822-.612-1.164Z"></path></svg>';

export class IconSnowflake extends HTMLElement {
    constructor () {
        super();
        const clone = template.content.cloneNode(true);
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(clone);
    }

    static get observedAttributes () {
        return ['size'];
    }

    get size () {
        return this.getAttribute('size');
    }

    set size (value) {
        this.setAttribute('size', value);
    }

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        if (svg.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--snowflake', '', null, 'IconSnowflake');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--snowflake');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--snowflake', '', newVal, 'IconSnowflake');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-snowflake', IconSnowflake);
