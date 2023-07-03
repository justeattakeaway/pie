import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chequeFilledLarge"><path d="m19.832 14.539-3.788.586.542-3.789 6.23-6.274a2.31 2.31 0 0 1 2.503-.498l1.435-1.435 1.242 1.242-1.435 1.435a2.31 2.31 0 0 1-.498 2.503l-6.23 6.23Zm9.293-2.914v14H2.875v-14h11.891l-.787 5.521 6.676-.954 4.559-4.567h3.911ZM17.75 19.5H7.25v1.75h10.5V19.5Zm7 0h-3.5v1.75h3.5V19.5Z"></path></svg>';

export class IconChequeFilledLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--chequeFilledLarge', '', null, 'IconChequeFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--chequeFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chequeFilledLarge', '', newVal, 'IconChequeFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-cheque-filled-large', IconChequeFilledLarge);
