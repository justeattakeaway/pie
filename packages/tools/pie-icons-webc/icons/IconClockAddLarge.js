import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--clockAddLarge"><path d="m20.795 20.253-5.67-3.404V9h1.75v6.851l4.83 2.896-.91 1.506Z"></path><path d="M16 3.75A12.25 12.25 0 0 0 4.266 19.5h1.847A10.325 10.325 0 0 1 5.5 16 10.5 10.5 0 1 1 16 26.5a10.299 10.299 0 0 1-4.375-.971v1.898A12.25 12.25 0 1 0 16 3.75Z"></path><path d="M10.094 21.049v-3.736h-1.75v3.718H4.625v1.75l3.719-.017V26.5h1.75v-3.719h3.719v-1.75l-3.72.018Z"></path></svg>';

export class IconClockAddLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--clockAddLarge', '', null, 'IconClockAddLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--clockAddLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--clockAddLarge', '', newVal, 'IconClockAddLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-clock-add-large', IconClockAddLarge);
