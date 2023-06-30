import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--arrowOutCircleLarge"><path d="M28.512 15.037a1.696 1.696 0 0 0-.227-.27l-5.04-5.04-1.234 1.233 4.165 4.165H9.875v1.75h16.301l-4.165 4.165 1.234 1.234 5.005-5.04a1.75 1.75 0 0 0 .262-2.196Z"></path><path d="M16 26.5a10.5 10.5 0 1 1 6.921-18.375h2.442a12.25 12.25 0 1 0 0 15.75H22.92A10.5 10.5 0 0 1 16 26.5Z"></path></svg>';

export class IconArrowOutCircleLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowOutCircleLarge', '', null, 'IconArrowOutCircleLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--arrowOutCircleLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowOutCircleLarge', '', newVal, 'IconArrowOutCircleLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-arrow-out-circle-large', IconArrowOutCircleLarge);
