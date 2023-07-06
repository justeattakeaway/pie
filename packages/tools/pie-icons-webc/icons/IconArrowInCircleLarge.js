import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--arrowInCircleLarge"><path d="M16 3.75a12.25 12.25 0 0 0-11.961 9.625H5.84a10.5 10.5 0 1 1 0 5.25H4.04A12.25 12.25 0 1 0 16 3.75Z"></path><path d="m19.141 16.875-4.165 4.165 1.234 1.234 5.04-5.04c.085-.083.161-.173.227-.272a1.75 1.75 0 0 0 0-1.925 1.7 1.7 0 0 0-.227-.27l-5.04-5.04-1.234 1.233 4.165 4.165H2.875v1.75h16.266Z"></path></svg>';

export class IconArrowInCircleLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowInCircleLarge', '', null, 'IconArrowInCircleLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--arrowInCircleLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowInCircleLarge', '', newVal, 'IconArrowInCircleLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-arrow-in-circle-large', IconArrowInCircleLarge);
