import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--cashCardFilledLarge"><path d="M20.174 8.484a1.969 1.969 0 0 0-1.96-1.943H5.22a1.96 1.96 0 0 0-1.96 1.943h16.914Z"></path><path d="M6.27 13.646h13.904V11.11H3.26v6.063a1.951 1.951 0 0 0 1.96 1.952h1.05v-5.478Z"></path><path d="M8.02 15.396v10.99h20.23v-10.99H8.02Zm6.23 6.37h-3.045v-1.75h3.045v1.75Zm3.85 1.89a2.765 2.765 0 1 1 .035 0H18.1Zm6.93-1.89h-3.045v-1.75h3.08l-.035 1.75Z"></path></svg>';

export class IconCashCardFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cashCardFilledLarge', '', null, 'IconCashCardFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--cashCardFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cashCardFilledLarge', '', newVal, 'IconCashCardFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-cash-card-filled-large', IconCashCardFilledLarge);
