import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--arrowOutCircle"><path d="M14.046 7.169 11.334 4.5l-.928.875 1.899 1.899H5.139v1.312h7.166l-1.899 1.908.928.927 2.712-2.712a1.111 1.111 0 0 0 0-1.54Z"></path><path d="M8.149 13.408a5.469 5.469 0 0 1 0-10.938 5.25 5.25 0 0 1 2.87.875h2.056a6.695 6.695 0 0 0-4.926-2.188 6.781 6.781 0 1 0 0 13.563 6.659 6.659 0 0 0 4.926-2.188h-2.056a5.25 5.25 0 0 1-2.87.876Z"></path></svg>';

export class IconArrowOutCircle extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowOutCircle', '', null, 'IconArrowOutCircle');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--arrowOutCircle');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowOutCircle', '', newVal, 'IconArrowOutCircle');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-arrow-out-circle', IconArrowOutCircle);
