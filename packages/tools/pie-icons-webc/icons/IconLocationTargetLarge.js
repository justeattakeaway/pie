import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--locationTargetLarge"><path d="M29.125 15.125h-3.5a9.625 9.625 0 0 0-8.75-8.706V2.875h-1.75v3.544a9.625 9.625 0 0 0-8.706 8.706H2.875v1.75h3.544a9.625 9.625 0 0 0 8.706 8.75v3.5h1.75v-3.5a9.625 9.625 0 0 0 8.75-8.75h3.5v-1.75ZM16 23.875a7.875 7.875 0 1 1 0-15.75 7.875 7.875 0 0 1 0 15.75Zm0-12.25a4.375 4.375 0 1 0 0 8.75 4.375 4.375 0 0 0 0-8.75Zm0 7a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Z"></path></svg>';

export class IconLocationTargetLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationTargetLarge', '', null, 'IconLocationTargetLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--locationTargetLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationTargetLarge', '', newVal, 'IconLocationTargetLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-location-target-large', IconLocationTargetLarge);
