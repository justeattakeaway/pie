import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--printer"><path d="M14.781 7.125a1.54 1.54 0 0 0-1.531-1.531h-1.969v-3.5H4.72v3.5H2.75a1.54 1.54 0 0 0-1.531 1.531v5.906h3.5v1.75h6.562v-1.75h3.5V7.125Zm-8.75-3.719H9.97v2.188H6.03V3.406ZM9.97 13.47H6.03v-3.063H9.97v3.063Zm3.5-1.75H11.28v-1.313h.875V9.094H3.844v1.312h.875v1.313H2.53V7.125a.219.219 0 0 1 .219-.219h10.5a.219.219 0 0 1 .219.219v4.594Z"></path></svg>';

export class IconPrinter extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--printer', '', null, 'IconPrinter');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--printer');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--printer', '', newVal, 'IconPrinter');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-printer', IconPrinter);
