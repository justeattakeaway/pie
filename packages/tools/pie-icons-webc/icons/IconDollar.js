import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--dollar"><path d="M8.613 7.309c-1.47-.385-2.625-.735-2.625-1.75 0-1.015 1.05-1.383 2.012-1.383a3.701 3.701 0 0 1 2.695 1.138l.998-1.033A4.428 4.428 0 0 0 8.77 2.794V1.096H7.388v1.698c-1.75.192-2.975 1.19-2.975 2.87 0 1.837 1.575 2.555 3.15 2.975 1.575.42 2.625.682 2.625 1.697 0 1.015-1.05 1.488-2.24 1.488a3.72 3.72 0 0 1-2.923-1.2L4.01 11.72a4.568 4.568 0 0 0 3.22 1.53v1.698h1.418V13.25c1.802-.21 3.114-1.19 3.114-2.975 0-1.785-1.592-2.564-3.15-2.966Z"></path></svg>';

export class IconDollar extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--dollar', '', null, 'IconDollar');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--dollar');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--dollar', '', newVal, 'IconDollar');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-dollar', IconDollar);
