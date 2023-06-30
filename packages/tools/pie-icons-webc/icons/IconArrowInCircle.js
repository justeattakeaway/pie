import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--arrowInCircle"><path d="M1.639 8.595h7.166l-1.899 1.907.928.928 2.712-2.713a1.11 1.11 0 0 0 0-1.548L7.834 4.5l-.928.875 1.899 1.907H1.639v1.313Z"></path><path d="M7.851 1.157A6.799 6.799 0 0 0 1.367 5.97H2.75a5.469 5.469 0 1 1 0 3.937H1.376a6.773 6.773 0 1 0 6.475-8.75Z"></path></svg>';

export class IconArrowInCircle extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowInCircle', '', null, 'IconArrowInCircle');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--arrowInCircle');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowInCircle', '', newVal, 'IconArrowInCircle');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-arrow-in-circle', IconArrowInCircle);
