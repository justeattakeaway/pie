import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--euro"><path d="M11.885 11.815a3.928 3.928 0 0 1-3.063 1.339 4.078 4.078 0 0 1-3.98-2.748h4.033V9.094H4.5a5.765 5.765 0 0 1 0-.656 5.765 5.765 0 0 1 0-.657h4.375V6.47H4.841A4.078 4.078 0 0 1 8.822 3.72a4.016 4.016 0 0 1 3.072 1.348l.962-.875a5.25 5.25 0 0 0-4.034-1.75 5.451 5.451 0 0 0-5.39 4.025H1.876V7.78h1.304a6.17 6.17 0 0 0 0 1.313H1.875v1.312h1.558a5.451 5.451 0 0 0 5.39 4.06 5.252 5.252 0 0 0 4.042-1.75l-.98-.901Z"></path></svg>';

export class IconEuro extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--euro', '', null, 'IconEuro');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--euro');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--euro', '', newVal, 'IconEuro');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-euro', IconEuro);
