import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--arrowDownCircleFilledLarge"><path d="M16.875 3.75v15.367l4.165-4.17 1.234 1.235-5.04 5.047a1.749 1.749 0 0 1-2.468 0l-5.04-5.047 1.234-1.235 4.165 4.17V3.75a12.244 12.244 0 0 0-8.239 4.038 12.275 12.275 0 0 0 .608 17.023 12.242 12.242 0 0 0 17.012 0 12.273 12.273 0 0 0 .608-17.023 12.244 12.244 0 0 0-8.239-4.038Z"></path></svg>';

export class IconArrowDownCircleFilledLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowDownCircleFilledLarge', '', null, 'IconArrowDownCircleFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--arrowDownCircleFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--arrowDownCircleFilledLarge', '', newVal, 'IconArrowDownCircleFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-arrow-down-circle-filled-large', IconArrowDownCircleFilledLarge);
