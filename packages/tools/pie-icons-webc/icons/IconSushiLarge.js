import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--sushiLarge"><path d="M25.293 6.375a2.818 2.818 0 0 0-3.894 0l-.368.359a2.748 2.748 0 0 0 0 3.893l.368.368a2.73 2.73 0 0 0 1.942.805c.732 0 1.433-.29 1.951-.805l.333-.385a2.765 2.765 0 0 0 0-3.902l-.332-.333Zm-.875 3.019-.368.358a1.015 1.015 0 0 1-1.418 0l-.358-.358a.998.998 0 0 1 0-1.418l.358-.367a1.015 1.015 0 0 1 1.418 0l.367.367a.997.997 0 0 1 .29.709c-.008.256-.11.5-.29.682v.027Z"></path><path d="m28.031 13.06.219-.219a5.915 5.915 0 0 0 0-8.373l-.718-.718a5.933 5.933 0 0 0-8.207-.158l.341-1.014L18.004 2l-5.25 15.75-9.879 3.063v1.828l9.196-2.835L9 29.125h1.838l3.325-9.949 15.54-4.786-.578-1.671-1.094.341ZM14.81 17.137l2.205-6.606a5.749 5.749 0 0 0 1.426 2.31l.709.718a5.96 5.96 0 0 0 2.468 1.479l-6.808 2.1Zm11.48-4.812a4.174 4.174 0 0 1-5.898 0l-.717-.7a4.183 4.183 0 0 1 0-5.897l.7-.736a4.182 4.182 0 0 1 5.898 0l.717.718a4.165 4.165 0 0 1 0 5.897l-.7.718Z"></path></svg>';

export class IconSushiLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--sushiLarge', '', null, 'IconSushiLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--sushiLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sushiLarge', '', newVal, 'IconSushiLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-sushi-large', IconSushiLarge);
